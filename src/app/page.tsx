'use client';
import React, { useState } from 'react';
import { Plane, Users, Calendar, Wallet, Sun, Hotel, ArrowRight, Palmtree } from 'lucide-react';

interface TripDetails {
  travelers: number;
  origin: string;
  destination: string;
  startDate: string;
  endDate: string;
  budget: number;
}

export default function Page() {
  const [step, setStep] = useState<number>(1);
  const [tripDetails, setTripDetails] = useState<TripDetails>({
    travelers: 1,
    origin: '',
    destination: '',
    startDate: '',
    endDate: '',
    budget: 0,
  });

  const updateTripDetails = (field: keyof TripDetails, value: string | number) => {
    setTripDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-center mb-12">
          <Palmtree className="w-8 h-8 text-indigo-600 mr-3" />
          <h1 className="text-4xl font-light text-zinc-800">wanderlust</h1>
        </div>

        {step === 1 ? (
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto transform transition-all">
            <h2 className="text-2xl font-light text-zinc-800 mb-8">Plan Your Perfect Journey</h2>

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
          </div>
        ) : (
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
              onClick={() => setStep(1)}
              className="bg-gray-100 text-zinc-700 py-4 px-6 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Modify Search</span>
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
