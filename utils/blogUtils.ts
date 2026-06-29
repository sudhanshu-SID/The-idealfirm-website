import { BlogPost, BlogPostMetadata } from '../types/blog';
import fm from 'front-matter';

// Use Vite's glob import to get all markdown files as raw text
// The ?raw query tells Vite to load the file contents as a string
const markdownFiles = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default' });

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];
  
  for (const path in markdownFiles) {
    // The glob import returns a function that we need to call to get the content
    const fileContent = await markdownFiles[path]() as string;
    
    // Parse frontmatter
    const parsed = fm<BlogPostMetadata>(fileContent);
    
    // Add fallback values in case someone forgets them in the markdown
    const metadata = {
      title: parsed.attributes.title || "Untitled Post",
      date: parsed.attributes.date || new Date().toISOString(),
      author: parsed.attributes.author || "The Ideal Firm",
      excerpt: parsed.attributes.excerpt || "",
      slug: parsed.attributes.slug || path.replace('.md', '').split('/').pop() || 'unknown',
    };

    posts.push({
      metadata,
      content: parsed.body,
    });
  }
  
  // Sort by date descending (safely)
  return posts.sort((a, b) => {
    const dateA = new Date(a.metadata.date).getTime();
    const dateB = new Date(b.metadata.date).getTime();
    return (isNaN(dateB) ? 0 : dateB) - (isNaN(dateA) ? 0 : dateA);
  });
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts();
  return posts.find(post => post.metadata.slug === slug) || null;
}
