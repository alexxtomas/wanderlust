'use client';
import { TripForm } from '@/components/trip-form';
import { TripsSuggestions } from '@/components/trip-suggestions';
import { TripDetailsProvider } from '@/contexts/trip-details-context';
import { useTripDetailsContext } from '@/hooks/use-trip-details-context';

function BaseFindTripFlow() {
  const { step } = useTripDetailsContext();

  if (step === 1) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto transform transition-all">
        <h2 className="text-2xl font-light text-zinc-800 mb-8">
          Plan Your Perfect Journey With AI
        </h2>

        <TripForm />
      </div>
    );
  }
  return <TripsSuggestions />;
}

export function FindTripFlow() {
  return (
    <TripDetailsProvider>
      <BaseFindTripFlow />
    </TripDetailsProvider>
  );
}
