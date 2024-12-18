import dotenv from 'dotenv';

// Load .env variables
dotenv.config();

export const loginUrl = process.env.LOGIN_BASEURL; // Export the URL as a named export
export const testTimeout = 90000; // Timeout value in milliseconds
