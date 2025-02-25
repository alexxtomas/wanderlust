'use client';

import { useTripDetailsContext } from '@/hooks/use-trip-details-context';
import { Users, Wallet, Plane, Calendar, ArrowRight } from 'lucide-react';
import { CitySelector } from './city-selector';
import { DatePicker } from './date-picker';

export function TripForm() {
  const { tripDetails, updateTripDetails, handleSubmit } = useTripDetailsContext();
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-zinc-700">
            <Users className="w-4 h-4 mr-2" />
            Number of Travelers
          </label>
          <input
            type="number"
            min="1"
            value={tripDetails.travelers}
            onChange={(e) => updateTripDetails('travelers', parseInt(e.target.value))}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all text-zinc-700"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-zinc-700">
            <Wallet className="w-4 h-4 mr-2" />
            Budget (USD)
          </label>
          <input
            type="number"
            min="0"
            value={tripDetails.budget}
            onChange={(e) => updateTripDetails('budget', parseInt(e.target.value))}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all text-zinc-700"
            required
          />
        </div>
      </div>

      <CitySelector />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Calendar className="w-4 h-4 mr-2" />
            Departure Date
          </label>
          <DatePicker
            label="Select Departure Date..."
            date={tripDetails.startDate}
            updateDate={(date) => updateTripDetails('startDate', date)}
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Calendar className="w-4 h-4 mr-2" />
            Return Date
          </label>

          <DatePicker
            label="Select Return Date..."
            date={tripDetails.endDate}
            updateDate={(date) => updateTripDetails('endDate', date)}
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-4 px-6 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2 group"
      >
        <span>Find Perfect Matches</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
}
