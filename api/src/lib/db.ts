import mysql2, { QueryOptions } from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

export const db = mysql2
  .createPool({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  })
  .promise();

/**
 * executes a MySql Query
 *
 * @param q the Query/Mutation
 * @param values - query's variables
 * @returns the result of the query
 */
export async function query<T = any>(q: QueryOptions, values: any = []): Promise<T> {
  // mysql2 returns proper results at index 0 and column definitions at index 1
  const queryResult: [any, any] = (await db.query(q, values));
  const results = queryResult[0] as T;

  return results;
}
