import { BikeRouteDetailsConfig } from '@models/bike-routes.interface';

export const bikeRouteDetailsConfig: BikeRouteDetailsConfig[] = [
  {
    type: 'region',
    title: 'Region',
    icon: 'map',
  },
  {
    type: 'bikeType',
    title: 'Typ roweru',
    icon: 'directions_bike',
  },
  {
    type: 'time',
    title: 'Czas',
    icon: 'timer',
  },
  {
    type: 'distance',
    title: 'Dystans',
    icon: 'route',
  },
  {
    type: 'level',
    title: 'Poziom trudności',
    icon: 'altitude',
  },
  {
    type: 'family',
    title: 'Trasa familijna',
    icon: 'family_restroom',
  },
  {
    type: 'routeType',
    title: 'Rodzaj trasy',
    icon: 'alt_route',
  },
  {
    type: 'laps',
    title: 'Pętla',
    icon: 'laps',
  },
  {
    type: 'road',
    title: 'Nawierzchnia',
    icon: 'road',
  },
];
