'use client';

import { useTripDetailsContext } from '@/hooks/use-trip-details-context';
import { Users, Wallet, Plane, Calendar, ArrowRight } from 'lucide-react';
import { CitySelector } from '@/components/city-selector';
import { DatePicker } from '@/components/date-picker';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function TripForm() {
  const { tripDetails, updateTripDetails, handleSubmit } = useTripDetailsContext();
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2 ">
          <label className="flex items-center text-sm font-medium text-zinc-700">
            <Users className="w-4 h-4 mr-2" />
            Number of Adults
          </label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="3" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 5 }, (_, i) => {
                const value = i + 1;
                return (
                  <SelectItem key={value} value={`${value}`}>
                    {value}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 ">
          <label className="flex items-center text-sm font-medium text-zinc-700">
            <Users className="w-4 h-4 mr-2" />
            Number of Children
          </label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="0" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 6 }, (_, i) => {
                return (
                  <SelectItem key={i} value={`${i}`}>
                    {i}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
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
            placeholder="February 25, 2025"
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
            placeholder="March 12, 2025"
            date={tripDetails.endDate}
            updateDate={(date) => updateTripDetails('endDate', date)}
          />
        </div>
      </div>
      <div className="space-y-2 ">
        <label className="flex items-center text-sm font-medium text-zinc-700">
          <Wallet className="w-4 h-4 mr-2" />
          Budget (USD)
        </label>
        <Slider
          defaultValue={[tripDetails.budget]}
          max={10000}
          step={100}
          onValueChange={(value) => updateTripDetails('budget', value[0])}
          className="w-full"
        />
        <span className="text-right mt-2 text-gold">${tripDetails.budget}</span>
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
