const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');
exports.createApiDocs = async (app) => {
    const swaggerDefinition = {
        openapi: '3.0.0',
        info: {
            title: 'MINI Backend Project',
            version: '1.0.0',
        },
        schemes: [
            'http',
            'https'
        ],
        servers: [
            {
                url: process.env.URL_SERVER,
                description: 'Server'
            },
            {
                url: `http://localhost:5100`,
                description: 'Local development server'
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            },
        },
        security: [
            {
                bearerAuth: []
            }
        ],
        syntaxHighlight: {
            activated: false
        }
    };

    const options = {
        swaggerDefinition,
        // Paths to files containing OpenAPI definitions
        apis: [path.resolve(__dirname, '../shop/*.js')]
    };
    const swaggerDocument = swaggerJSDoc(options);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}