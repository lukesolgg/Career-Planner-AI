import React, { useState } from 'react';

interface StepFourProps {
  onSubmit: (data: { coreValues: string }) => void;
}

const StepFour: React.FC<StepFourProps> = ({ onSubmit }) => {
  const [coreValues, setCoreValues] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ coreValues });
  };

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <h1 className="text-3xl font-bold mb-4">What Core Values Are Non-Negotiable for Me in My Career?</h1>
      <p className="mb-4 text-gray-400">
        Identify what you value most in life and work, such as integrity, innovation, community, or environmental stewardship. Careers that resonate with these values are more likely to lead to long-term satisfaction.
      </p>
      <textarea 
        value={coreValues} 
        onChange={(e) => setCoreValues(e.target.value)} 
        placeholder="List your core values..." 
        className="mb-4 p-2 w-full bg-gray-800 text-white border border-gray-700 rounded"
        required 
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
    </form>
  );
};

export default StepFour;