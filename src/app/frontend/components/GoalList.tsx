import React from 'react';

interface GoalListProps {
  goals: string[];
}

const GoalList: React.FC<GoalListProps> = ({ goals }) => {
  return (
    <ul className="list-disc ml-6 mt-4">
      {goals.map((goal, index) => <li key={index}>{goal}</li>)}
    </ul>
  );
};

export default GoalList;