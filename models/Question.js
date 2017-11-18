'use strict';

const db = require("../config/db")

class Question{

  static CreateTable(){ //need ()
    const sql = 'CREATE TABLE IF NOT EXISTS questions (id INTEGER PRIMARY KEY, content TEXT)' //don't need semicolon?

    return new Promise(function(resolve){ //Promise is not PROMISE
      db.run(sql, function(){
        resolve("This does nothing.") //do I need something inside resolve?

      })
    })

  }

}


module.exports = Question;
