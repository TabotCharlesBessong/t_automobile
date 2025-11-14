
'use client';
import { useEffect, useState } from "react";

type BlogPost = {
  _id: string;
  title: string;
  content: string;
  author: string;
  date: string;
};

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load blog posts.");
        setLoading(false);
      });
  }, []);

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">T Automobile Blog</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <div className="space-y-6">
          {posts.length === 0 ? (
            <p>No blog posts yet.</p>
          ) : (
            posts.map((post) => (
              <article key={post._id} className="bg-gray-50 p-4 rounded shadow">
                <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
                <p className="text-gray-700 mb-2">{post.content}</p>
                <div className="text-sm text-gray-500">By {post.author} on {new Date(post.date).toLocaleDateString()}</div>
              </article>
            ))
          )}
        </div>
      )}
    </main>
  );
}