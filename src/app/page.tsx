import React from 'react';
import { Palmtree } from 'lucide-react';
import { FindTripFlow } from '@/components/find-trip-flow';

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-center mb-12">
          <Palmtree className="w-8 h-8 text-indigo-600 mr-3" />
          <h1 className="text-4xl font-light text-zinc-800">wanderlust</h1>
        </div>

        <FindTripFlow />
      </div>
    </main>
  );
}
