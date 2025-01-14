import { CareerPlanner } from './careerPlanner';
import { validateInput } from './utils';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('careerForm') as HTMLFormElement;
    const output = document.getElementById('output') as HTMLDivElement;

    if (form && output) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            
            const formData = new FormData(form);
            const name = formData.get('name')?.toString() || '';
            const currentPosition = formData.get('currentPosition')?.toString() || '';
            const targetPosition = formData.get('targetPosition')?.toString() || '';

            if (validateInput(name, currentPosition, targetPosition)) {
                const planner = new CareerPlanner();
                const plan = await planner.getCareerPlan(name, currentPosition, targetPosition);
                output.innerHTML = `<ul>${plan.map(goal => `<li>${goal}</li>`).join('')}</ul>`;
            } else {
                output.textContent = 'Please fill out all fields correctly.';
            }
        });
    }
});