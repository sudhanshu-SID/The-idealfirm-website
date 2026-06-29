import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BlogPost as BlogPostType } from '../types/blog';
import { getBlogPostBySlug } from '../utils/blogUtils';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      try {
        const fetchedPost = await getBlogPostBySlug(slug);
        setPost(fetchedPost);
      } catch (error) {
        console.error("Failed to fetch post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[60vh]">
        <h1 className="text-3xl font-bold text-brand-text-primary mb-4">Post not found</h1>
        <p className="text-brand-text-muted mb-8">The article you are looking for does not exist.</p>
        <Link to="/blog" className="px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-secondary transition-colors">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto min-h-screen animate-fade-in-up">
      <div className="mb-10 text-center">
        <div className="text-brand-primary font-semibold mb-3">
          {new Date(post.metadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text-primary mb-6">
          {post.metadata.title}
        </h1>
        {post.metadata.author && (
          <div className="text-brand-text-muted font-medium">
            By {post.metadata.author}
          </div>
        )}
      </div>

      <div className="bg-brand-surface rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
        <div className="prose prose-lg prose-sky max-w-none prose-headings:text-brand-text-primary prose-a:text-brand-primary hover:prose-a:text-brand-secondary">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link to="/blog" className="inline-flex items-center text-brand-secondary hover:text-brand-primary font-medium transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to all articles
        </Link>
      </div>
    </article>
  );
};

export default BlogPost;
