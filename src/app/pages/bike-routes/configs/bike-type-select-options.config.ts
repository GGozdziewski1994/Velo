import { BIKE_TYPE_OPTIONS_MAP } from '../../../map/bike-type-options.map';

export const bikeTypeSelectOptionsConfig = [
  {
    value: BIKE_TYPE_OPTIONS_MAP.GRAVEL,
    option: 'Gravel',
  },
  {
    value: BIKE_TYPE_OPTIONS_MAP.ROAD,
    option: 'Szosa',
  },
  {
    value: BIKE_TYPE_OPTIONS_MAP.TREKKING,
    option: 'Trekking',
  },
  {
    value: BIKE_TYPE_OPTIONS_MAP.CROSS,
    option: 'Cross',
  },
  {
    value: BIKE_TYPE_OPTIONS_MAP.MTB,
    option: 'MTB',
  },
] as const;
