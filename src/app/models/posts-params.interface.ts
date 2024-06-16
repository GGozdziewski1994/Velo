import { BLOG_TYPE_MAP } from '@map/blog-type.map';
import { ValueOf } from '@shared/types';

export interface PostsParams {
  _start?: number;
  _end?: number;
  _limit?: number;
  _page?: number;
  _per_page?: number;
  type?: ValueOf<typeof BLOG_TYPE_MAP> | string;
}
