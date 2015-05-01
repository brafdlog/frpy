module.exports = function(app) {
  var express = require('express');
  var workersRouter = express.Router();

  workersRouter.get('/', function(req, res) {
    res.send({
      'workers': [
        {
          id:3, 
          firstName: 'Moshe', 
          lastName: 'Ufnik',
          email: 'moshe@ufnik.com',
          phoneNumber: '07-7777777'
        },
        {
          id:4, 
          firstName: 'David', 
          lastName: 'Azulai',
          email: 'david@azulai.com',
          phoneNumber: '08-8888888'
        }
       ]
    });
  });

  workersRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  workersRouter.get('/:id', function(req, res) {
    res.send({
      'workers': {
        id: req.params.id,
        firstName: 'Moshe', 
        lastName: 'Ufnik',
        email: 'moshe@ufnik.com',
        phoneNumber: '07-7777777'
      }
    });
  });

  workersRouter.put('/:id', function(req, res) {
    res.send({
      'workers': {
        id: req.params.id
      }
    });
  });

  workersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/workers', workersRouter);
};
