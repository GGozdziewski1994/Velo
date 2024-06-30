export interface EntriesResponse {
  id: string;
  type: 'all' | 'following' | string;
  entryId: string;
  userLogo: string;
  title: string;
  typeEntry: string;
  bgType: string;
  createAt: string;
  createBy: string;
  rating: number;
  ratedBy: number;
  numberOfComments: number;
  isFallowing: boolean;
}

export interface EntryResponse extends EntriesResponse {
  userName: string;
  entry: string;
  comments: EntryComment[];
}

export interface EntryComment {
  id: string;
  userName: string;
  userLogo: string;
  entry: string;
  createAt: string;
}
