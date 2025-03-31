import React, { useState } from 'react';
import { Plane, Calendar, DollarSign, MapPin, Heart, Clock, Coffee, Hotel, Navigation } from 'lucide-react';
import TravelForm from './components/TravelForm';
import Itinerary from './components/Itinerary';
import { TravelPreferences } from './types';

function App() {
  const [preferences, setPreferences] = useState<TravelPreferences | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Plane className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">TravelAI</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!preferences ? (
          <TravelForm onSubmit={setPreferences} />
        ) : (
          <Itinerary preferences={preferences} onReset={() => setPreferences(null)} />
        )}
      </main>
    </div>
  );
}

export default App;