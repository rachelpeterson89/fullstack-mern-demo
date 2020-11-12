const Database = require('../models/model.database');

module.exports = {
    index:(req, res) => {
        Database.find()
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    },
    create:(req, res) => {
        Database.create(req.body)
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    },
    show:(req, res) => {
        Database.findOne({_id: req.params.id})
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    },
    update:(req, res) => {
        Database.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true})
            .then(data => res.redirect(`/api/database/${req.params.id}`) )
            .catch(err => res.json(err.errors))
    },
    destroy:(req, res) => {
        Database.removeOne({_id: req.params.id})
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    }
}