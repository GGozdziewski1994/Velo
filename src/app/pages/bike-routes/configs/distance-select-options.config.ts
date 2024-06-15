import { DISTANCE_OPTIONS_MAP } from '../../../map/distance-options.map';

export const distanceSelectOptionsConfig = [
  {
    value: DISTANCE_OPTIONS_MAP.TO30,
    option: 'do 30',
  },
  {
    value: DISTANCE_OPTIONS_MAP.FROM31TO50,
    option: 'od 31 - do 50',
  },
  {
    value: DISTANCE_OPTIONS_MAP.FROM51TO100,
    option: 'od 51 - do 100',
  },
  {
    value: DISTANCE_OPTIONS_MAP.FORM101TO150,
    option: 'od 101 - do 150',
  },
  {
    value: DISTANCE_OPTIONS_MAP.FROM151TO200,
    option: 'od 151 - do 200',
  },
  {
    value: DISTANCE_OPTIONS_MAP.OVER200,
    option: 'powyżej 200',
  },
] as const;
