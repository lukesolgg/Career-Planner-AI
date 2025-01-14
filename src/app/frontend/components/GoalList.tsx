import React from 'react';

interface GoalListProps {
  goals: string[];
}

const GoalList: React.FC<GoalListProps> = ({ goals }) => {
  return (
    <div>
      <h2 className="text-2xl mb-4">Your Career Path:</h2>
      <ul className="list-disc text-left">
        {goals.map((goal, index) => (
          <li key={index} className="mb-2">{goal}</li>
        ))}
      </ul>
    </div>
  );
};

export default GoalList;