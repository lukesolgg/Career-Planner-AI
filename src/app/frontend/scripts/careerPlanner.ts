export class CareerPlanner {
    async getCareerPlan(name: string, currentPosition: string, targetPosition: string): Promise<string[]> {
        // Here you would make an actual API call to your backend
        // This is just a mock response for demonstration:
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(["Learn Programming", "Get Internship", "Bachelor's Degree", "Full-time Job"]);
            }, 1000); // Simulate network delay
        });
    }
}