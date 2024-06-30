import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { EntriesDotTypesResponse } from '@models/entries-dot-types.interface';
import { EntriesResponse, EntryResponse } from '@models/entries.interface';
import { QueryParamsUtil } from '@shared/util/query-params.util';

import { API_URL } from '../app.config';

@Injectable({ providedIn: 'root' })
export class ForumService {
  #http = inject(HttpClient);
  api = inject(API_URL);

  getEntries(type: string): Observable<EntriesResponse[]> {
    return this.#http.get<EntriesResponse[]>(`${this.api}/entries${QueryParamsUtil.toParamsString({ type })}`);
  }

  getEntry(id: string): Observable<EntryResponse> {
    return this.#http.get<EntryResponse>(`${this.api}/entry/${id}`);
  }

  getDotTypes(): Observable<EntriesDotTypesResponse[]> {
    return this.#http.get<EntriesDotTypesResponse[]>(`${this.api}/entries-types`);
  }
}
