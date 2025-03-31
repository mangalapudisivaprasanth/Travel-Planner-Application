import React, { useState } from 'react';
import { Calendar, DollarSign, MapPin, Heart, Clock } from 'lucide-react';
import { TravelPreferences } from '../types';

interface TravelFormProps {
  onSubmit: (preferences: TravelPreferences) => void;
}

const TravelForm: React.FC<TravelFormProps> = ({ onSubmit }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<TravelPreferences>({
    startLocation: '',
    destination: '',
    startDate: '',
    endDate: '',
    budget: '',
    purpose: '',
    dietaryPreferences: [],
    interests: [],
    mobilityNeeds: '',
    accommodationType: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const updateForm = (field: keyof TravelPreferences, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Plan Your Perfect Trip</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Starting Location</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  required
                  value={formData.startLocation}
                  onChange={(e) => updateForm('startLocation', e.target.value)}
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Where are you starting from?"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Destination</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  required
                  value={formData.destination}
                  onChange={(e) => updateForm('destination', e.target.value)}
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Where do you want to go?"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Start Date</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    required
                    value={formData.startDate}
                    onChange={(e) => updateForm('startDate', e.target.value)}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">End Date</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    required
                    value={formData.endDate}
                    onChange={(e) => updateForm('endDate', e.target.value)}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Budget Range</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  required
                  value={formData.budget}
                  onChange={(e) => updateForm('budget', e.target.value)}
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                >
                  <option value="">Select your budget range</option>
                  <option value="budget">Budget ($0-$1000)</option>
                  <option value="moderate">Moderate ($1000-$3000)</option>
                  <option value="luxury">Luxury ($3000+)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Trip Purpose</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Heart className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  required
                  value={formData.purpose}
                  onChange={(e) => updateForm('purpose', e.target.value)}
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                >
                  <option value="">Select trip purpose</option>
                  <option value="leisure">Leisure</option>
                  <option value="business">Business</option>
                  <option value="adventure">Adventure</option>
                  <option value="cultural">Cultural Experience</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Interests</label>
              <div className="mt-2 space-y-2">
                {['Food & Dining', 'History & Culture', 'Nature & Outdoors', 'Shopping', 'Art & Museums'].map((interest) => (
                  <label key={interest} className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={(e) => {
                        const newInterests = e.target.checked
                          ? [...formData.interests, interest]
                          : formData.interests.filter(i => i !== interest);
                        updateForm('interests', newInterests);
                      }}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Generate Itinerary
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default TravelForm;