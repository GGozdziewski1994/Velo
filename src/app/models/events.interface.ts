export interface EventsResponse {
  id: string;
  month: number;
  year: number;
  events: Events[];
}

export interface Events {
  id: string;
  eventDay: number;
  eventMonth: number;
  eventYear: number;
  image: string;
  linkPage: string;
}
