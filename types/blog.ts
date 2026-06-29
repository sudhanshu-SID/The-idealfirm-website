export interface BlogPostMetadata {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  slug: string;
}

export interface BlogPost {
  metadata: BlogPostMetadata;
  content: string;
}
