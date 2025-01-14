"use client";
import React, { useState } from 'react';
import StepOne from '../components/steps/StepOne';
import StepTwo from '../components/steps/StepTwo';
import StepThree from '../components/steps/StepThree';
import StepFour from '../components/steps/StepFour';
import StepFive from '../components/steps/StepFive';
import StepSix from '../components/steps/StepSix';
import GoalList from './GoalList';

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    joyActivity: '',
    problemToSolve: '',
    idealWorkday: '',
    coreValues: '',
    skills: '',
    successDefinition: '',
  });
  const [careerPlan, setCareerPlan] = useState<string[]>([]);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async (data: Partial<typeof formData>) => {
    setFormData(prevData => ({ ...prevData, ...data }));
    if (step === 6) {
      // Here you would typically call your API with the formData. For now, we'll use mock data:
      const mockPlan = [
        "Explore careers in creativity and entertainment",
        "Volunteer in local community projects",
        "Take courses in problem-solving and social impact",
        "Work in environments that support your values",
        "Enhance skills in leadership and communication",
        "Define your career path with personal success metrics"
      ];
      setCareerPlan(mockPlan);
      nextStep(); // Move to the results page
    } else {
      nextStep();
    }
  };

  const steps = [
    <StepOne key="1" onSubmit={handleSubmit} />,
    <StepTwo key="2" onSubmit={handleSubmit} />,
    <StepThree key="3" onSubmit={handleSubmit} />,
    <StepFour key="4" onSubmit={handleSubmit} />,
    <StepFive key="5" onSubmit={handleSubmit} />,
    <StepSix key="6" onSubmit={handleSubmit} />,
  ];

  return (
    <div className="bg-gray-900 p-6 rounded-lg text-center">
      {step <= 6 ? steps[step - 1] : <GoalList goals={careerPlan} />}
      {step > 1 && step <= 6 && (
        <button onClick={prevStep} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
          Back
        </button>
      )}
    </div>
  );
};

export default MultiStepForm;