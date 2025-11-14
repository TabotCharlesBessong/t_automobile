import { useEffect, useState } from "react";

// Types
interface Testimonial {
  _id: string;
  name: string;
  message: string;
  rating: number;
  date: string;
}
interface BlogPost {
  _id: string;
  title: string;
  content: string;
  author: string;
  date: string;
}

export default function AdminDashboard() {
  // State
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // New testimonial form
  const [newTestimonial, setNewTestimonial] = useState({ name: "", message: "", rating: 5 });
  // New blog post form
  const [newBlogPost, setNewBlogPost] = useState({ title: "", content: "", author: "" });

  // Fetch data
  useEffect(() => {
    Promise.all([
      fetch("/api/testimonials").then((res) => res.json()),
      fetch("/api/blog").then((res) => res.json()),
    ])
      .then(([testimonialsData, blogPostsData]) => {
        setTestimonials(testimonialsData);
        setBlogPosts(blogPostsData);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load admin data.");
        setLoading(false);
      });
  }, []);

  // Add testimonial
  const handleAddTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTestimonial),
      });
      if (res.ok) {
        const added = await res.json();
        setTestimonials([added, ...testimonials]);
        setNewTestimonial({ name: "", message: "", rating: 5 });
      }
    } catch {}
  };

  // Add blog post
  const handleAddBlogPost = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBlogPost),
      });
      if (res.ok) {
        const added = await res.json();
        setBlogPosts([added, ...blogPosts]);
        setNewBlogPost({ title: "", content: "", author: "" });
      }
    } catch {}
  };

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <div className="space-y-12">
          {/* Add Testimonial */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Add Testimonial</h2>
            <form className="space-y-2 mb-4" onSubmit={handleAddTestimonial}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-2 border rounded"
                required
                value={newTestimonial.name}
                onChange={e => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
              />
              <textarea
                name="message"
                placeholder="Message"
                className="w-full p-2 border rounded"
                required
                value={newTestimonial.message}
                onChange={e => setNewTestimonial({ ...newTestimonial, message: e.target.value })}
              />
              <input
                type="number"
                name="rating"
                min={1}
                max={5}
                className="w-full p-2 border rounded"
                required
                value={newTestimonial.rating}
                onChange={e => setNewTestimonial({ ...newTestimonial, rating: Number(e.target.value) })}
              />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Testimonial</button>
            </form>
            <div>
              <h3 className="font-semibold mb-2">Testimonials</h3>
              <ul className="space-y-2">
                {testimonials.map(t => (
                  <li key={t._id} className="border p-2 rounded">
                    <span className="font-bold">{t.name}</span>: &quot;{t.message}&quot; ({t.rating}/5)
                  </li>
                ))}
              </ul>
            </div>
          </section>
          {/* Add Blog Post */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Add Blog Post</h2>
            <form className="space-y-2 mb-4" onSubmit={handleAddBlogPost}>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="w-full p-2 border rounded"
                required
                value={newBlogPost.title}
                onChange={e => setNewBlogPost({ ...newBlogPost, title: e.target.value })}
              />
              <textarea
                name="content"
                placeholder="Content"
                className="w-full p-2 border rounded"
                required
                value={newBlogPost.content}
                onChange={e => setNewBlogPost({ ...newBlogPost, content: e.target.value })}
              />
              <input
                type="text"
                name="author"
                placeholder="Author"
                className="w-full p-2 border rounded"
                required
                value={newBlogPost.author}
                onChange={e => setNewBlogPost({ ...newBlogPost, author: e.target.value })}
              />
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Add Blog Post</button>
            </form>
            <div>
              <h3 className="font-semibold mb-2">Blog Posts</h3>
              <ul className="space-y-2">
                {blogPosts.map(post => (
                  <li key={post._id} className="border p-2 rounded">
                    <span className="font-bold">{post.title}</span> by {post.author}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
