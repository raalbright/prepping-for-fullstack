import mysql from "mysql";

const conn = mysql.createPool( {
  host: 'localhost',
  user: 'chirprapp',
  password: 'password',
  database: 'chirpr'
} );

export default conn;
