# User Management

### Project Setup

1. Clone the repo `https://github.com/Kalyani-M-17/UserManagement`
2. Setting up backend
   - move to backend folder `cd backend`
   - install dependencies `npm install`
   - start the server `node server.js`
3. Setting up frontend
   - move to frontend folder `cd frontend`
   - install dependencies `npm install`
   - start the app `npm run dev`
   - access the app using http://localhost:5173
4. Configure Mail server details
   - Open `controllers/mailController.js` and update required parameters
   - `host`: SMTP server address
   - `port`: server port
   - `auth.user`: username for SMTP server
   - `auth.password`: password for SMTP server

### API end points

##### Register

`POST: /auth/register` register a user account

```
// Sample payload
{
    "name":"User",
    "email":"user@app.com",
    "password":"password"
}
```

##### Login

`POST: /auth/login`
login a user account

```
// Sample payload
{
    "email":"user@app.com",
    "password":"password"
}
```

##### Verify otp

`POST: /auth/verify-otp`

```
// Sample payload
{
    "otp":"1234",
}
```

##### Get profile

`GET: /profile`
Fetches profile info

```
// Sample response
{
    "name":"User",
    "email":"user@app.com",
}
```

##### Update profile

`PUT: /profile`
Updates profile info

```
// Sample payload
{
    "name":"User",
}
```

##### Delete profile

`DELETE: /profile`
Deletes profile info
