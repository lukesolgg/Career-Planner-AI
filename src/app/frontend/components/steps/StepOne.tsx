import React, { useState } from 'react';

interface StepOneProps {
  onSubmit: (data: { joyActivity: string }) => void;
}

const StepOne: React.FC<StepOneProps> = ({ onSubmit }) => {
  const [joyActivity, setJoyActivity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ joyActivity });
  };

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <h1 className="text-3xl font-bold mb-4">What Activities Bring Me the Most Joy?</h1>
      <p className="mb-4 text-gray-400">
        Reflect on your daily activities and pinpoint what truly excites or fulfills you. This helps in identifying careers that align with your passions and sources of happiness.
      </p>
      <textarea 
        value={joyActivity} 
        onChange={(e) => setJoyActivity(e.target.value)} 
        placeholder="List activities or describe what brings you joy..." 
        className="mb-4 p-2 w-full bg-gray-800 text-white border border-gray-700 rounded"
        required 
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
    </form>
  );
};

export default StepOne;