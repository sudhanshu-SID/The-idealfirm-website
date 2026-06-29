import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types/blog';
import { getAllBlogPosts } from '../utils/blogUtils';

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getAllBlogPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-[80vh]">
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text-primary mb-6">
          Our <span className="text-brand-primary">Insights</span>
        </h1>
        <p className="text-xl text-brand-text-muted max-w-3xl mx-auto">
          Thoughts, strategies, and updates from the world of digital marketing.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center text-brand-text-muted py-12">
          No blog posts found. Check back soon!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link 
              key={post.metadata.slug} 
              to={`/blog/${post.metadata.slug}`}
              className="group bg-brand-surface rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-sm text-brand-primary font-semibold mb-2">
                {new Date(post.metadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
              <h2 className="text-xl font-bold text-brand-text-primary mb-3 group-hover:text-brand-primary transition-colors">
                {post.metadata.title}
              </h2>
              <p className="text-brand-text-muted mb-6 flex-grow">
                {post.metadata.excerpt}
              </p>
              <div className="text-sm font-medium text-brand-secondary flex items-center mt-auto">
                Read Article
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;
