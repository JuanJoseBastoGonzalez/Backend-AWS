import mysql from 'promise-mysql';
import config from './../config.js';


const connection = mysql.createConnection({
    host: config.host,
    user: config.dbUser,
    password: config.password,
    database: config.database
});

const getConnection=()  =>{
    return connection;
}
export default getConnection;