'use strict';

module.exports = function(app) {
    var api = require('../controllers/apicontroller');
  
    // todoList Routes
    app.route('/gettest')
      .get(api.gettest);

};