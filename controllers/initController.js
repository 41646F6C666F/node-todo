const Todos = require('../models/todoModel');

module.exports = function (app) {
    app.get('/api/setupTodos', function (req, res) {
        let starterTodos = [{
                username: 'test',
                todo: 'Test API',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Play with API',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Blow Minds',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, function (err, results) {
            res.send(results);
        });
    })
};