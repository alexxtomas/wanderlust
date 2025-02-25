import { createContext, useState } from 'react';

export type TripDetails = {
  travelers: number;
  origin: string;
  destination: string;
  startDate: string;
  endDate: string;
  budget: number;
};

export type TripDetailsContextType = {
  tripDetails: TripDetails;
  step: number;
  updateTripDetails: (field: keyof TripDetails, value: string | number) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  updateStep: (step: number) => void;
};

export const TripDetailsContext = createContext<TripDetailsContextType | null>(null);

export const TripDetailsProvider = ({ children }: { children: React.ReactNode }) => {
  const [step, setStep] = useState<number>(1);
  const [tripDetails, setTripDetails] = useState<TripDetails>({
    travelers: 1,
    origin: '',
    destination: '',
    startDate: '',
    endDate: '',
    budget: 0,
  });

  const updateStep = (step: number) => {
    setStep(step);
  };

  const updateTripDetails = (field: keyof TripDetails, value: string | number) => {
    setTripDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <TripDetailsContext.Provider
      value={{ tripDetails, step, updateTripDetails, handleSubmit, updateStep }}
    >
      {children}
    </TripDetailsContext.Provider>
  );
};
