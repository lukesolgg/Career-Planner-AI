export function validateInput(name: string, currentPosition: string, targetPosition: string): boolean {
    return name.trim() !== '' && currentPosition.trim() !== '' && targetPosition.trim() !== '';
}