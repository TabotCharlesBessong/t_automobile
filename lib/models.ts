import { Schema, model, models } from 'mongoose';

const testimonialSchema = new Schema({
  name: String,
  message: String,
  rating: Number,
  date: { type: Date, default: Date.now },
});

const blogPostSchema = new Schema({
  title: String,
  content: String,
  author: String,
  date: { type: Date, default: Date.now },
});

const contactMessageSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  date: { type: Date, default: Date.now },
});

export const Testimonial = models.Testimonial || model('Testimonial', testimonialSchema);
export const BlogPost = models.BlogPost || model('BlogPost', blogPostSchema);
export const ContactMessage = models.ContactMessage || model('ContactMessage', contactMessageSchema);
