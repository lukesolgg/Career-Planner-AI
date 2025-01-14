import React, { useState } from 'react';

interface StepSixProps {
  onSubmit: (data: { successDefinition: string }) => void;
}

const StepSix: React.FC<StepSixProps> = ({ onSubmit }) => {
  const [successDefinition, setSuccessDefinition] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ successDefinition });
  };

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <h1 className="text-3xl font-bold mb-4">How Do I Define Success in My Professional Life?</h1>
      <p className="mb-4 text-gray-400">
        Define success beyond just financial terms - consider aspects like work-life balance, personal growth, impact on others, or achieving a certain level of expertise. This question allows the AI to tailor career suggestions that fulfill your personal definition of success.
      </p>
      <textarea 
        value={successDefinition} 
        onChange={(e) => setSuccessDefinition(e.target.value)} 
        placeholder="Define what success means to you..." 
        className="mb-4 p-2 w-full bg-gray-800 text-white border border-gray-700 rounded"
        required 
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
    </form>
  );
};

export default StepSix;