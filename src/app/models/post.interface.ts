export interface Post {
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
