export interface ArticleContent {
  type: 'paragraph' | 'image' | 'blockquote' | 'bs';
  text?: string;
  url?: string;
  caption?: string;
  altText?: string;
  attribution?: string;
  class?: string;
}

export interface Article {
  title: string;
  heroImage: string;
  date: string;
  content: ArticleContent[];
}
