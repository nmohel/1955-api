var persons = require('../controllers/persons.js')

module.exports = function(app) {
    app.get('/', function(req, res) {
        // get all people
        persons.getAllPeople(req, res);
    });
    app.get('/new/:name', function(req, res) {
        // adds person with name = :name to db
        persons.createPerson(req, res);
    });
    app.get('/remove/:name', function(req, res) {
        // deletes person with name = :name from db
        persons.deletePerson(req, res);
    });
    app.get('/:name', function(req, res) {
        // gets person with name = :name from db
        persons.getPersonByName(req, res);
    })
}