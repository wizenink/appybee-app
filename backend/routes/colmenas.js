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
      var query = "SELECT idCOLMENA,ESTADO,NINDIVIDUOS,TEMPERATURA,PESO,PH,NITROGENO FROM COLMENA WHERE idCOLMENA IN (SELECT COLMENA FROM COLMENA_APICULTOR WHERE APICULTOR = ? )"
      connection.query(query,[req.params.idap],function(err,results){
        connection.release();
        if(!err) {
            res.json(results);
        }
        else
          {
              res.json(err);
          }
      });

});
});

router.get('/:idap/:idcolm', function(req, res, next) {
  pool.getConnection(function(error,connection) {
      if(error) {
        connection.release();
        res.json({"code":100,"status":"Error connecting to Database"});
        return;
      }
      var query = "SELECT * FROM COLMENA WHERE idColmena=?"
      connection.query(query,[req.params.idcolm],function(err,results){
        connection.release();
        if(!err) {
            res.json(results);
        }
      });

});
});


module.exports = router;
