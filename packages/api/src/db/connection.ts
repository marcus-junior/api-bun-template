import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';

console.log('DATABASE_URL:', process.env.DATABASE_URL);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
});

const db = drizzle({ client: pool });

export default db;