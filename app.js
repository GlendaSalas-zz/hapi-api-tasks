'use string'

const Hapi = require('@hapi/hapi')
const Path = require('path');
const Vision = require('@hapi/vision');
const Handlebars = require('handlebars');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'public')
            }
        },
    });
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h.view('index', {
                name: 'Glenda Salas'
            });
        }
    });
    server.route({
        method: 'GET',
        path: '/tasks',
        handler: (request, h) => {
            return h.view('tasks', {
                tasks: [
                    { name: 'First task' },
                    { name: 'Second task' },
                    { name: 'Third task' },
                ]
            });
        }
    });
    await server.register(require('@hapi/inert'));
    server.route({
        method: 'GET',
        path: '/about',
        handler: function (request, h) {
            return h.file('about.html');
        }
    });
    await server.register(Vision);
    server.views({
        engines: { html: Handlebars },
        path: `${__dirname}/views`
    });
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();