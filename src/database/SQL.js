import pgk, { Pool } from 'pg'

const pool = new Pool({
    host:'',
    port:'',
    database:"",
    user:'',
    password:'',
})


export default pool

