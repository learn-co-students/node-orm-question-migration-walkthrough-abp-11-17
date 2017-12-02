'use strict';

const db = require("../config/db")

class Question{
  static CreateTable(){
    return new Promise (
      function(resolve){
        console.log("I am running")
        db.run("CREATE TABLE questions(id INTEGER PRIMARY KEY, content TEXT)",
        function(){resolve("ABC")
      })
      console.log("I finished running")
        // resolve("ABC")
    })
  }
}


module.exports = Question;
