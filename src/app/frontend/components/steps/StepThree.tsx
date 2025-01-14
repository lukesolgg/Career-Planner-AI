import React, { useState } from 'react';

interface StepThreeProps {
  onSubmit: (data: { idealWorkday: string }) => void;
}

const StepThree: React.FC<StepThreeProps> = ({ onSubmit }) => {
  const [idealWorkday, setIdealWorkday] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ idealWorkday });
  };

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <h1 className="text-3xl font-bold mb-4">What Does My Ideal Workday Look Like?</h1>
      <p className="mb-4 text-gray-400">
        Describe your perfect day at work, considering aspects like routine vs. variety, social interaction vs. solitude, and whether you prefer a structured or flexible environment. This question helps match your work style with suitable career paths.
      </p>
      <textarea 
        value={idealWorkday} 
        onChange={(e) => setIdealWorkday(e.target.value)} 
        placeholder="Describe your ideal workday..." 
        className="mb-4 p-2 w-full bg-gray-800 text-white border border-gray-700 rounded"
        required 
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
    </form>
  );
};

export default StepThree;