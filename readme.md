
# Welcome to PhotoAPI

  

### Project status

  

![Badge](https://img.shields.io/static/v1?label=Framwork&message=Express&color=yellow&style=for-the-badge&logo=Express) ![Badge](https://img.shields.io/static/v1?label=Language&message=node.js&color=yellow&style=for-the-badge&logo=javascript) ![Badge](https://img.shields.io/static/v1?label=Project_Stage&message=completed&color=sucess&style=for-the-badge) ![Badge](https://img.shields.io/static/v1?label=Database&message=MONGO_DB&color=sucess&style=for-the-badge&logo=mongodb)

  

### Index

  

##### 1. [Abstract](#abstract)

##### 2. [Routes](#routes)

##### 3. [Dependencies or libraries](#dependencies)

##### 4. [Mongo DB](#database)

  

### 1. Abstract <a name="abstract"/>

  

That project aims: **(I)** Build a simple Application Programming Interface (API) software solution, using Express framework and JavaScript programming language, capable to get read, delete and serve photos by http requests; functioning as virtual Network Attachment Storage **(II)** Manipulate image files using JavaScript. **(III)** Use regex expressions to validate data. **(IV)** Implement the create, read, update and delete users data methods using mongoose and a NoSQL database (MongoDB). **(V)** Make explicit one option to auth users and protect some API routes.

**Key-Words**: Express framework; JavaScript Lang; MongoDB; HTTP verbs;

### 2. API Routes <a name="routes"/>

Exists two main routes in this API: Users and Photos. Using differents HTTP verbs, the clients softwares can requests the creation, reading, updating and deleting data about this two entitys. That project was designed and implemented thinking about a house demands, then the code here introduced was modeled follow simple requisities.

| HTTP Verb| Routes |  Description   | Required Params |
|    --    |   --   |        --      |      --         |
| POST     | serverAddr:port/users | Create a new user| fullName, email and password |
|    POST    |   serverAddr:port/users/login   |        Generate a Token      |      E-mail and password         |
|    PUT    |   serverAddr:port/users   |        Update user data      |      fullName, password and Token         |
|    DELETE    |   serverAddr:port/users   |        Delete a user      |      Just require token         |
|    GET    |   serverAddr:port/photos   |        Return a list of photo paths      |      Just require token         |
|    POST    |   serverAddr:port/photos   |        Update one photo and insert that path into Mongo DB      |      A file with jpeg or png or jpg extension and Token  |
|    DELETE    |   serverAddr:port/photos/:idPhoto   |        Remove a photo path of MongoDB and delete one image      |    idPhoto and Token         |
|    GET    |   serverAddr:port/imgs/:somePath   |        Allow visualize a image file      |      Path         |


#### Json response examples

```json
// Sucess in new user registration process
{
    "msg":"Welcome to Photo API"
}


// Case a unauthenticated user try execute some proteced route
{
	"error":"Make login to use this functionality"
}

// Returns of login route
{
	"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJwaG90b0FQSSIsImlhdCI6MTYxODU1NjkyNCwiZXhwIjoxNjUwMDkyOTI0LCJhdWQiOiIiLCJzdWIiOiIifQ.lSM2_7fVKi7tLrBxLYGgkxuNfbuWoqUbhJPqdB0Bcs8",
	"userData": {
		"id": "679ed003z55831c0c1d01c",
		"fullName": "luiz gabriel",
		"email": "imagine a valide e-mail addr here",
		"password": "hashed password"
	}
}

// Photo path list
{
	"msg":  "See your photos",
	"index":
	[
		{
			"id":  "607938f91f93620c90a42c0e",
			"path":  "src\\imgs\\1618557177731pp.jpg",
			"idUser":  "6078fed003b39531c0c1d01c"
		},
		{
			"id":  "607938f91f93620c90a42c0e",
			"path":  "src\\imgs\\1618557177731pp.jpg",
			"idUser":  "6078fed003b39531c0c1d01c"
		}
	]
}
```

### 4. Dependencies or libraries <a name="Dependencies"/>

Bcrypt: 5.0.1 [Bcrypt Docs](https://www.npmjs.com/package/bcrypt)
Del: 6.0.0 [Del Docs](https://www.npmjs.com/package/del)
Express: 4.17.1 [Express Docs](https://www.npmjs.com/package/express)
JsonWebToken: 8.5.1 [JsonWebToken Docs](https://www.npmjs.com/package/jsonwebtoken)
Mongoose: 5.12.2 [Mongoose Docs](https://www.npmjs.com/package/mongoose)
Morgan: 1.10.0 [Morgan Docs](https://www.npmjs.com/package/morgan)
Multer: 1.4.2 [Multer docs](https://www.npmjs.com/package/multer)
  

### 5. Mongo DB <a name="database"/>

Document oriented, Mongo DB is a database that sends responds requests by JSON format. It was chosen because it has an excellent ability to handle requests easily. The used version was Mongo DB Community Server.

You can read more about Mongo or make download at link: [Mongo DB Community](https://www.mongodb.com/try/download/community)

  
  
  
  
  

#