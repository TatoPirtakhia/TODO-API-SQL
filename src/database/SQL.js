import pgk from 'pg'
const {Pool} = pgk
const pool = new Pool({
    host:process.env.MYSQLHOST,
    port:process.env.MYSQLPORT,
    database:process.env.MYSQLDATABASE,
    user:process.env.MYSQLUSER,
    password:process.env.MYSQLPASSWORD,
})


export default pool

