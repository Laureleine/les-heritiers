import 'dotenv/config';
import pg from 'pg';

const client = new pg.Client({ connectionString: process.env.SUPABASE_DB_URL });

await client.connect();
await client.query(`
  CREATE OR REPLACE FUNCTION get_top_outil_users(limit_n INT DEFAULT 5)
  RETURNS TABLE (email TEXT, total BIGINT)
  LANGUAGE sql
  SECURITY DEFINER
  SET search_path = public
  AS $$
    SELECT u.email::TEXT, COUNT(*)::BIGINT AS total
    FROM outil_usage o
    JOIN auth.users u ON u.id = o.user_id
    GROUP BY u.email
    ORDER BY total DESC
    LIMIT limit_n;
  $$;
`);
console.log('✓ RPC get_top_outil_users créée');
await client.end();
