# Node.js To-Do

> To-Do list project with the MEAN Stack: MongoDB, Express, Node.js, Angular

- This project use:

  - [Mongoose](https://mongoosejs.com/) (for db connection)
  
  - [body-parser](https://expressjs.com/en/resources/middleware/body-parser.html) (to read the data from POST; who is accessible through req.body)

  - [ejs](https://ejs.co) (for templating)

In order to work, you need to have the file *config/config.json* with your mongodb credentials and need to be formated like this:

```javascript
{
  "user": "YOUR_USERNAME",
  "pass": "YOUR_PASSWORD",
  "server1": "YOUR_DB_ADDRESS"
}
```
