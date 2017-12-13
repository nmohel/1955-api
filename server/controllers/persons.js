var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports = {
    getAllPeople: function(req, res) {
        Person.find(function(err, people) {
            if (err) {
                res.json(err.errors);
            } else {
                res.json(people);
            }
        });
    },
    getPersonByName: function(req, res) {
        Person.findOne({'name': req.params.name}, function(err, person) {
            if (err) {
                res.json(err.errors)
            } else {
                res.json(person);
            }
        });
    },
    createPerson: function(req, res) {
        var person = new Person({name: req.params.name})
        person.save(function(err) {
            if (err) {
                res.json(err.errors)
            } else {
                let success = {
                    message: 'Successfully added person',
                    person: person
                }
                res.json(success);
            }
        });
    },
    deletePerson: function(req, res) {
        Person.findOneAndRemove({'name': req.params.name}, function(err, person) {
            if (err) {
                res.json(err.errors)
            } else {
                let success = {
                    message: 'Succesfully deleted person',
                    person: person
                }
                res.json(success);
            }
        });
    }
}