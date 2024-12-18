import dotenv from 'dotenv';

dotenv.config();

export const loginUrl = process.env.LOGIN_BASEURL;
export const testTimeout = 90000;