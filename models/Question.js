'use strict';

const db = require("../config/db")

class Question{
  static CreateTable() {
    return new Promise(function(resolve) {
      const query = 'CREATE TABLE questions (id INTEGER PRIMARY KEY, content TEXT)'
      db.run(query, function() {
        resolve('made the table')
      })
    })
  }
}


module.exports = Question;
