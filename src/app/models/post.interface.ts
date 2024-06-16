export interface Post {
  id: string;
  type: 'trip' | 'post' | 'review';
  title: string;
  image: string;
  date: string;
  time?: string;
  distance?: string;
  level?: string;
  product?: string;
  mark?: string;
  model?: string;
  text?: string;
}

export interface PostItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  backgroundImage: string;
  description: PostDescription[];
}

export interface PostDescription {
  title?: string;
  description: string;
  img?: string;
}
