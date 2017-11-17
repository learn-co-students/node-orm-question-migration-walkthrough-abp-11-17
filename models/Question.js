'use strict';

const db = require("../config/db")

class Question {
  static CreateTable() {
    return new Promise(function(resolve){
      const sql = `CREATE TABLE questions(
        id INTEGER PRIMARY KEY,
        content TEXT
      )`

      db.run(sql, function(){
        resolve("Created questions table!")
      })
    })
  }
}


module.exports = Question;
