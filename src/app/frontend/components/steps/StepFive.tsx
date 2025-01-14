import React, { useState } from 'react';

interface StepFiveProps {
  onSubmit: (data: { skills: string }) => void;
}

const StepFive: React.FC<StepFiveProps> = ({ onSubmit }) => {
  const [skills, setSkills] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ skills });
  };

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <h1 className="text-3xl font-bold mb-4">What Skills Do I Currently Have, and Which Do I Need to Develop to Achieve My Career Goals?</h1>
      <p className="mb-4 text-gray-400">
        Evaluate your current skill set and envision what skills you might need for your dream job. This dual focus helps the AI recommend both immediate career steps and long-term educational or training opportunities.
      </p>
      <textarea 
        value={skills} 
        onChange={(e) => setSkills(e.target.value)} 
        placeholder="Describe your current skills and desired skills..." 
        className="mb-4 p-2 w-full bg-gray-800 text-white border border-gray-700 rounded"
        required 
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
    </form>
  );
};

export default StepFive;