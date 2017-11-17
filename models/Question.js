'use strict';
//pre coded
const db = require("../config/db")
//added next
const sqlite3 = require('sqlite3').verbose()

//added class
class Question{

  static CreateTable() {
    const sql = `
      CREATE TABLE IF NOT EXISTS questions (
        id INTEGER PRIMARY KEY,
        content TEXT
      )
    `
    console.log("Preparing to create Table questions...");

    return new Promise(function(resolve){
      db.run(sql, function(){
        console.log("..questions table created!");
        resolve("success");
      })
    })

  }
}


module.exports = Question;
