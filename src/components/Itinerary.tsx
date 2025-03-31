import React from 'react';
import { ArrowLeft, Coffee, Hotel, Navigation, Utensils, Camera, Bus } from 'lucide-react';
import { TravelPreferences } from '../types';

interface ItineraryProps {
  preferences: TravelPreferences;
  onReset: () => void;
}

const Itinerary: React.FC<ItineraryProps> = ({ preferences, onReset }) => {
  // This would typically come from an API call based on preferences
  const generateItinerary = () => {
    const startDate = new Date(preferences.startDate);
    const endDate = new Date(preferences.endDate);
    const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    
    return Array.from({ length: days }, (_, i) => {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      
      return {
        date: date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }),
        activities: [
          {
            time: '09:00 AM',
            description: 'Start the day with local breakfast',
            icon: Coffee,
          },
          {
            time: '10:30 AM',
            description: 'Visit main attractions',
            icon: Camera,
          },
          {
            time: '01:00 PM',
            description: 'Lunch at recommended restaurant',
            icon: Utensils,
          },
          {
            time: '03:00 PM',
            description: 'Afternoon activities and sightseeing',
            icon: Bus,
          },
          {
            time: '07:00 PM',
            description: 'Dinner and evening entertainment',
            icon: Utensils,
          },
        ],
      };
    });
  };

  const itinerary = generateItinerary();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <button
          onClick={onReset}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Form
        </button>
        <div className="text-right">
          <h2 className="text-2xl font-bold text-gray-900">Your Travel Itinerary</h2>
          <p className="text-gray-600">
            {preferences.startDate} to {preferences.endDate}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Trip Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">From</p>
                <p className="font-medium">{preferences.startLocation}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">To</p>
                <p className="font-medium">{preferences.destination}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Budget</p>
                <p className="font-medium capitalize">{preferences.budget}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Purpose</p>
                <p className="font-medium capitalize">{preferences.purpose}</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Interests</h3>
            <div className="flex flex-wrap gap-2">
              {preferences.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {itinerary.map((day, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Day {index + 1} - {day.date}
            </h3>
            <div className="space-y-4">
              {day.activities.map((activity, actIndex) => (
                <div key={actIndex} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <activity.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.time}
                    </p>
                    <p className="text-sm text-gray-500">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itinerary;