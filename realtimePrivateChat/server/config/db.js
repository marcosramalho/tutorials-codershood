"use strict";

const mysql = require('mysql');
const dotenv = require('dotenv');

class Db {
	constructor(config) {
		dotenv.config();

		this.connection = mysql.createPool({
			connectionLimit: 100,
			host: process.env.HOST,			
			//host: 'localhost',
			user: process.env.DB_USER,
			password: process.env.DB_PASS,
			database: process.env.DB_NAME,
			debug: false
		});		
	}
	
	query(sql, args) {
		return new Promise((resolve, reject) => {
			this.connection.query(sql, args, (err, rows, fields) => {
				if (err)
					return reject(err);
				resolve(rows);
			});
		});
	}

	close() {
		return new Promise((resolve, reject) => {
			this.connection.end(err => {
				if (err)
					return reject(err);
				resolve();
			});
		});
	}
}
module.exports = new Db();