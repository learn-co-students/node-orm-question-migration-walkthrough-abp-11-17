'use strict';

const db = require("../config/db")

class Question{
  constructor(){

  }
  static CreateTable(){
    return new Promise(function(resolve){
      const sql= `CREATE TABLE questions (
        id INTEGER PRIMARY KEY,
        content TEXT
      )`

      const thingThatWasResolved= db.run(sql, function(){})
      resolve(thingThatWasResolved)

   })
  }
}


module.exports = Question;
