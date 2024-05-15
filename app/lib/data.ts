import { sql } from '@vercel/postgres';
import {
  User,
} from './definitions';

export async function getUser(email: string) {
  const users = [
    {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'User',
      email: 'user@nextmail.com',
      password: '123456',
    },
  ];

  try {
    //const user = await sql`SELECT * FROM users WHERE email=${email}`;
    //return user.rows[0] as User;
    return users[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
