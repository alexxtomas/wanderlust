'use client';

import { useTripDetailsContext } from '@/hooks/use-trip-details-context';
import { Users, Wallet, Plane, Calendar, ArrowRight } from 'lucide-react';

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

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-zinc-700">
            <Plane className="w-4 h-4 mr-2" />
            Origin City
          </label>
          <input
            type="text"
            value={tripDetails.origin}
            onChange={(e) => updateTripDetails('origin', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all text-zinc-700"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-zinc-700">
            <Plane className="w-4 h-4 mr-2 transform rotate-90" />
            Destination City
          </label>
          <input
            type="text"
            value={tripDetails.destination}
            onChange={(e) => updateTripDetails('destination', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all text-zinc-700"
            required
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-zinc-700">
            <Calendar className="w-4 h-4 mr-2" />
            Departure Date
          </label>
          <input
            type="date"
            value={tripDetails.startDate}
            onChange={(e) => updateTripDetails('startDate', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all text-zinc-700"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-zinc-700">
            <Calendar className="w-4 h-4 mr-2" />
            Return Date
          </label>
          <input
            type="date"
            value={tripDetails.endDate}
            onChange={(e) => updateTripDetails('endDate', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all text-zinc-700"
            required
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
