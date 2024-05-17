const route = require('express')['Router']()
const Controller = require('./Controller');
/**
* @swagger
* /api/getAllProduct:
*   get:
*     summary: Get a all Product Data.
*     description: Retrieve a Data based on the specified criteria.
*     tags: 
*       - api
*     responses:
*       200:
*         description: Successful response.
*       400:
*         description: Bad request, validation error, etc.
*/
route.get('/getAllProduct',
    Controller.getAllProduct
)
/**
* @swagger
* /api/getDetailProduct:
*   get:
*     summary: Get a all Product Data.
*     description: Retrieve a Data based on the specified criteria.
*     tags: 
*       - api
*     parameters:
*       - in: query
*         name: id
*         schema:
*           type: number
*     responses:
*       200:
*         description: Successful response.
*       400:
*         description: Bad request, validation error, etc.
*/
route.get('/getDetailProduct',
    Controller.getDetailProduct
)
/**
* @swagger
* /api/billProduct:
*   post:
*     summary: update a pfa status job
*     description: Endpoint to update a pfa status job with the specified details.
*     tags:
*       - api
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema: 
*               type: object
*               properties:
*                   id:
*                       type: array
*                       items: 
*                           type: number
*     responses:
*       200:
*         description: update a pfa status job successfully
*       400:
*         description: Bad request, validation error, etc.
*/
route.post('/billProduct',
    Controller.getBillProduct
)



module.exports = route