import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';
import { Testimonial } from '../../lib/models';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();
  if (req.method === 'GET') {
    try {
      const testimonials = await Testimonial.find().sort({ date: -1 }).limit(10);
      return res.status(200).json(testimonials);
    } catch (error) {
      return res.status(500).json({ message: 'Failed to fetch testimonials', error });
    }
  }
  if (req.method === 'POST') {
    const { name, message, rating } = req.body;
    if (!name || !message || !rating) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    try {
      const testimonial = new Testimonial({ name, message, rating });
      await testimonial.save();
      return res.status(201).json(testimonial);
    } catch (error) {
      return res.status(500).json({ message: 'Failed to add testimonial', error });
    }
  }
  return res.status(405).json({ message: 'Method not allowed' });
}
