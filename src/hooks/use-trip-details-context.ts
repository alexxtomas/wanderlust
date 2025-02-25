import { TripDetailsContext, TripDetailsContextType } from '@/contexts/trip-details-context';
import { useContext } from 'react';

export const useTripDetailsContext = () => {
  const context = useContext(TripDetailsContext) as TripDetailsContextType;

  return context;
};
