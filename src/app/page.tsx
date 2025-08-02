import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-indigo-100 to-indigo-300 p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl w-full flex flex-col items-center border border-indigo-100">
        <h1 className="text-5xl font-extrabold text-indigo-800 mb-3 text-center tracking-tight drop-shadow-lg">Library Management System</h1>
        <h2 className="text-2xl font-bold text-gray-700 mb-1 text-center">MASUD HASAN & ASSOCIATES</h2>
        <h3 className="text-lg text-gray-500 mb-6 text-center">মাসুদ হাসান & অ্যাসোসিয়েটস</h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-yellow-400 text-3xl">★</span>
          <span className="font-bold text-xl text-gray-800">5.0</span>
          <span className="text-gray-400 text-base">(8 reviews)</span>
        </div>
        <div className="text-indigo-600 font-semibold mb-2 text-lg">Law firm</div>
        <div className="w-full border-t border-gray-200 my-6"></div>
        <div className="flex flex-col gap-4 w-full text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="inline-block bg-indigo-100 rounded-full p-2">
              <MapPin className="h-6 w-6 text-indigo-500" />
            </span>
            <span className="text-gray-700 font-medium">608 (Level 6, Apartment Complex, Twin Towers Concord, Dhaka 1205)</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="inline-block bg-indigo-100 rounded-full p-2">
              <Phone className="h-6 w-6 text-indigo-500" />
            </span>
            <span className="text-gray-700 font-medium">01711-283442</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="inline-block bg-indigo-100 rounded-full p-2">
              <Clock className="h-6 w-6 text-indigo-500" />
            </span>
            <span className="text-gray-700 font-medium">Open ⋅ Closes 10 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
