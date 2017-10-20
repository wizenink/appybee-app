var express = require('express');
var router = express.Router();
var pool = require('../pool');
/* GET users listing. */
router.get('/:idap', function(req, res, next) {
  pool.getConnection(function(error,connection) {
      if(error) {
        connection.release();
        res.json({"code":100,"status":"Error connecting to Database"});
        return;
      }
      var query = "SELECT idCOLMENA,ESTADO,NINDIVIDUOS,TEMPERATURA,PESO,PH,NITROGENO FROM COLMENA WHERE idColmena=(SELECT COLMENA FROM COLMENA-APICULTOR WHERE APICULTOR = ?"
      connection.query(query,[req.params.idap],function(err,results){
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
      var query = "SELECT NOMBRE,APELLIDOS FROM APICULTOR"
      connection.query(query,function(err,results){
        connection.release();
        if(!err) {
            res.json(results);
        }
      });

});
});


module.exports = router;
