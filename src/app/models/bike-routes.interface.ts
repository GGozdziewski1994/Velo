export interface BikeRoutesResponse {
  id: string;
  map: string;
  title: string;
  details: BikeRouteDetailsResponse[];
}

export interface BikeRouteDetailsResponse {
  type: string;
  value: string | boolean;
}

export interface BikeRouteDetailsBasic {
  title: string;
  icon: string;
}

export interface BikeRouteDetails extends BikeRouteDetailsResponse, BikeRouteDetailsBasic {}

export interface BikeRouteDetailsConfig extends BikeRouteDetailsBasic {
  type: string;
}
