import React from 'react';

interface GoalFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const GoalForm: React.FC<GoalFormProps> = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input className="w-full p-2 border rounded" type="text" name="name" placeholder="Your Name" required />
      <input className="w-full p-2 border rounded" type="text" name="currentPosition" placeholder="Current Job Title" required />
      <input className="w-full p-2 border rounded" type="text" name="targetPosition" placeholder="Target Job Title" required />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Plan My Career</button>
    </form>
  );
};

export default GoalForm;