export const API_URL: string = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export const testFunc = () => {
    console.log('API_URL ==> ', API_URL);
    return;
}