import pgk from 'pg'
const {Pool} = pgk

const connect = process.env.Connect
const pool = new Pool({
    connect,
})

export const createTable = async () => {
    return await pool.query(
      "CREATE TABLE IF NOT EXISTS todoApp(id SERIAL PRiMARY KEY, content TEXT)"
    );
  };

export default pool

