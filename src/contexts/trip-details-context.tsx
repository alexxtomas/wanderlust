'use client';
import { createContext, useState } from 'react';

export type City = {
  name: string;
  country: string;
  flag: string;
};

export type TripDetails = {
  travelers: number;
  origin: City | null;
  destination: City | null;
  startDate: Date | null;
  endDate: Date | null;
  budget: number;
};

type UpdateTripDetails = (
  field: keyof TripDetails,
  value: string | number | City | null | Date,
) => void;

export type TripDetailsContextType = {
  tripDetails: TripDetails;
  step: number;
  updateTripDetails: UpdateTripDetails;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  updateStep: (step: number) => void;
};

export const TripDetailsContext = createContext<TripDetailsContextType | null>(null);

export const TripDetailsProvider = ({ children }: { children: React.ReactNode }) => {
  const [step, setStep] = useState<number>(1);
  const [tripDetails, setTripDetails] = useState<TripDetails>({
    travelers: 1,
    origin: null,
    destination: null,
    startDate: null,
    endDate: null,
    budget: 0,
  });

  const updateStep = (step: number) => {
    setStep(step);
  };

  const updateTripDetails: UpdateTripDetails = (field, value) => {
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
