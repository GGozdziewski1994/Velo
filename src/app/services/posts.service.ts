import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Post, PostItem } from '@models/post.interface';
import { PostsParams } from '@models/posts-params.interface';
import { QueryParamsUtil } from '@shared/util/query-params.util';

import { API_URL } from '../app.config';

@Injectable({ providedIn: 'root' })
export class PostsService {
  #http = inject(HttpClient);
  api = inject(API_URL);

  getPosts(params?: PostsParams): Observable<Post[]> {
    return this.#http.get<Post[]>(`${this.api}/posts${QueryParamsUtil.toParamsString(params)}`);
  }

  getPost(id: string): Observable<PostItem> {
    return this.#http.get<PostItem>(`${this.api}/post/${id}`);
  }
}
