'use strict';

const db = require("../config/db")

class Question{
  static CreateTable() {
    return new Promise(resolve => {
      const sql = `CREATE TABLE questions (
        id INTEGER PRIMARY KEY,
        content TEXT
      )`

      db.run(sql, () => {
        resolve("questions table created.");
      })
    });
  }
}



module.exports = Question;
