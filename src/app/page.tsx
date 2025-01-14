"use client";
import React, { useState } from 'react';
import GoalForm from './frontend/components/GoalForm';
import GoalList from './frontend/components/GoalList';
import Header from './frontend/components/Header';

const Home: React.FC = () => {
  const [goals, setGoals] = useState<string[]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name')?.toString() || '';
    const currentPosition = formData.get('currentPosition')?.toString() || '';
    const targetPosition = formData.get('targetPosition')?.toString() || '';

    // Here you would make an API call to the backend
    // For this example, we'll use a mock response:
    const mockCareerPlan = ["Learn Programming", "Get Internship", "Bachelor's Degree", "Full-time Job"];
    setGoals(mockCareerPlan);
  };

  return (
    <div className="container mx-auto p-4">
      <Header />
      <GoalForm onSubmit={handleSubmit} />
      <GoalList goals={goals} />
    </div>
  );
};

export default Home;