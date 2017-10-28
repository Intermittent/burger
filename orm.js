var connection = require('./connection.js')

var orm = {
  all: function(tableInput, callback){
    connection.query('SELECT * FROM ' + tableInput + ';', function(err, result){
      if(err) throw err;
      callback(result)
    })
  },

  update: function(tableInput, condition, callback){
    connection.query('UPDATE ' + tableInput + ' SET devoured=true WHERE id='
    + condition + ';', function(err,result){
      if(err) throw err;
      callback(result);
    })
  },

  create: function(tableInput,val,callback){
    connection.query('INSERT INTO ' + tableInput + " (burger_name) VALUES (' "+ val +" ');", function(err,result){
      if(err) throw err;
      callback(result);
    })
  }
}

module.exports = orm;