# Currency-Converter
This is a microservice written in NodeJS/Express that takes an expense amount in USD and converts it into MXN currency. 

## 1. REQUEST
To make a request, send a PUT request to the API endpoint: http://localhost:3002/convert
The body parameter will be the array of expense objects stored in MongoDB. 

Example Request:
const response = await fetch(
                     `/convert`, {
                         method: 'PUT', 
                         headers: {'Content-type': 'application/json'}, 
                         body: JSON.stringify(expenseData)
                     }
                 );


## 2. RESPONSE
To receiva a response, await for all promises for each object to resolve. 

Example Response: 

## 3. UML Diagram 













