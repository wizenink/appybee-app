var express = require('express');
var router = express.Router();
var pool = require('../pool');
/* GET users listing. */

router.get('/:idcolm', function(req, res, next) {
  pool.getConnection(function(error,connection) {
      if(error) {
        connection.release();
        res.json({"code":100,"status":"Error connecting to Database"});
        return;
      }
        var query = "SELECT e.NOMBRE,f.FECHA from ENFERMEDAD as e JOIN COLMENA_ENFERMEDAD as f ON f.ENFERMEDAD = e.idENFERMEDAD WHERE f.COLMENA = ?"
      connection.query(query,[req.params.idcolm],function(err,results){
        connection.release();
        if(!err) {
            res.json(results);
        }
      });

});
});

router.get('/', function(req, res, next) {
  pool.getConnection(function(error,connection) {
      if(error) {
        connection.release();
        res.json({"code":100,"status":"Error connecting to Database"});
        return;
      }
        var query = "SELECT e.NOMBRE,f.FECHA,f.COLMENA from ENFERMEDAD as e JOIN COLMENA_ENFERMEDAD as f ON f.ENFERMEDAD = e.idENFERMEDAD"
      connection.query(query,[req.params.idcolm],function(err,results){
        connection.release();
        if(!err) {
            res.json(results);
        }
      });

});
});


module.exports = router;
