'use client';
import { useTripDetailsContext } from '@/hooks/use-trip-details-context';
import { Plane, ArrowRight, Hotel, Sun } from 'lucide-react';

export function TripsSuggestions() {
  const { updateStep } = useTripDetailsContext();

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center space-x-3 mb-6">
          <Plane className="w-6 h-6 text-indigo-600" />
          <h3 className="text-xl font-medium text-zinc-800">Flight Recommendations</h3>
        </div>

        <div className="space-y-4">
          <div className="p-4 border border-gray-100 rounded-lg hover:border-indigo-200 transition-colors cursor-pointer">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium text-zinc-800">Emirates Airlines</h4>
              <span className="text-green-600 font-medium">$750</span>
            </div>
            <p className="text-sm text-zinc-600 mb-2">Direct flight • 7h 35m</p>
            <div className="flex items-center text-sm text-indigo-600">
              <span>View Details</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* More flight recommendations would go here */}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center space-x-3 mb-6">
          <Hotel className="w-6 h-6 text-indigo-600" />
          <h3 className="text-xl font-medium text-zinc-800">Hotel Suggestions</h3>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
              alt="Luxury Hotel"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
              <h4 className="text-white font-medium">Grand Hyatt</h4>
              <p className="text-white/90 text-sm">From $200/night</p>
            </div>
          </div>

          {/* More hotel recommendations would go here */}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center space-x-3 mb-6">
          <Sun className="w-6 h-6 text-indigo-600" />
          <h3 className="text-xl font-medium text-zinc-800">Weather Forecast</h3>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-sm text-zinc-600">Mon</p>
            <Sun className="w-8 h-8 mx-auto my-2 text-yellow-500" />
            <p className="font-medium">24°C</p>
          </div>
          {/* More weather days would go here */}
        </div>
      </div>

      <button
        onClick={() => updateStep(1)}
        className="bg-gray-100 text-zinc-700 py-4 px-6 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
      >
        <span>Modify Search</span>
      </button>
    </div>
  );
}
