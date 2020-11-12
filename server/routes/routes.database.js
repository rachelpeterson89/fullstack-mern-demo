const DatabaseController = require('../controllers/controller.database');
const Database = require('../models/model.database');

module.exports = (app) => {
    app.get('/api/database', DatabaseController.index);
    app.post('/api/create/database', DatabaseController.create);
    app.get('/api/database/:id', DatabaseController.show);
    app.put('/api/update/database/:id', DatabaseController.update);
    app.delete('/api/destroy/database/:id', DatabaseController.destroy)
}