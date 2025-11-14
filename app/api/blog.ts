import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';
import { BlogPost } from '../../lib/models';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();
  if (req.method === 'GET') {
    try {
      const posts = await BlogPost.find().sort({ date: -1 }).limit(10);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: 'Failed to fetch blog posts', error });
    }
  }
  if (req.method === 'POST') {
    const { title, content, author } = req.body;
    if (!title || !content || !author) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    try {
      const post = new BlogPost({ title, content, author });
      await post.save();
      return res.status(201).json(post);
    } catch (error) {
      return res.status(500).json({ message: 'Failed to add blog post', error });
    }
  }
  return res.status(405).json({ message: 'Method not allowed' });
}
