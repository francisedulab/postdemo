const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get('/', function (req, res) {
  console.log("this is the console 123 ");
  res.send('Hello World')
})
/**
 * @author francis pinto
 * @created 14-11-2022
 * @Description to show the demo of query in express 
 */
app.get('/edulab', function (req, res) {
    const fname = req.query.fname;
    const lname = req.query.lname;
    console.log("edulab route called ");
    res.send('Hello '+fname + ' ' + lname)
  })

  /**
 * @author francis pinto
 * @created 14-11-2022
 * @type POST
 * @Description demo of body parser to show form values . 
 */
app.post('/signup', function (req, res) {

  let username = req.body.un;
  let password = req.body.passwd;
  res.send(username + "Created !");

})
  app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
  })