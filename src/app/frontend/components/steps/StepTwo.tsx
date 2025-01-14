import React, { useState } from 'react';

interface StepTwoProps {
  onSubmit: (data: { problemToSolve: string }) => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ onSubmit }) => {
  const [problemToSolve, setProblemToSolve] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ problemToSolve });
  };

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <h1 className="text-3xl font-bold mb-4">What Global or Local Problem Do I Feel Passionate About Solving?</h1>
      <p className="mb-4 text-gray-400">
        Think about the issues you care most deeply about. Understanding this can guide the AI to suggest careers where your skills can make a significant impact on those problems, aligning your career with your values and purpose.
      </p>
      <textarea 
        value={problemToSolve} 
        onChange={(e) => setProblemToSolve(e.target.value)} 
        placeholder="Describe the problems you want to address..." 
        className="mb-4 p-2 w-full bg-gray-800 text-white border border-gray-700 rounded"
        required 
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
    </form>
  );
};

export default StepTwo;