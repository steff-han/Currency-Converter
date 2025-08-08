# Currency-Converter
This is a microservice written in NodeJS/Express that takes an expense amount in USD and converts it into MXN currency. 

## 1. REQUEST
To make a request, send a PUT request to the API endpoint: http://localhost:3002/convert. 
The body parameter will be the array of expense objects stored in MongoDB. 

Example Request:
'''
const response = await fetch(
       `/convert`, {
           method: 'PUT', 
           headers: {'Content-type': 'application/json'}, 
           body: JSON.stringify(expenseData)
       }
   );
'''


## 2. RESPONSE
To receiva a response, await for all promises for each object to resolve before parsing into JSON. 

Example Response: 
'''
[
  {
    "_id": "6890fbb32e3981278f770919",
    "date": "01-01-22",
    "name": "milk",
    "category": "Grocery",
    "amount": 372.40000000000003,
    "zipCode": 97124,
    "email": "celani@gmail.com",
    "__v": 0
  },
  {
    "_id": "6890fc8a2e3981278f77091d",
    "date": "03-05-22",
    "name": "food",
    "category": "Grocery",
    "amount": 744.8000000000001,
    "zipCode": 97124,
    "email": "musa@gmail.com",
    "__v": 0
  },
  {
    "_id": "6890fcb32e3981278f77091e",
    "date": "05-09-22",
    "name": "movie",
    "category": "Entertainment",
    "amount": 744.8000000000001,
    "zipCode": 97133,
    "email": "celani@gmail.com",
    "__v": 0
  }
]
'''

## 3. UML Diagram 













