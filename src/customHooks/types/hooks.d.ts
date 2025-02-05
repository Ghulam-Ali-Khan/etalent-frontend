// Define a type for the response object to ensure it's structured correctly.
export interface ApiResponseTypes {
    success?: boolean;
    message?: string;
    [key: string]: any; // Allow additional properties if needed.
}