const express = require("express");
const MongoClient = require("mongodb").MongoClient;

const mongoUrl = 'mongodb://127.0.0.1:27017';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.post("/api/login", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body);
    
    MongoClient.connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, client) => {
        if(err) {
            return console.log(err);
        }
    
        const db = client.db('LoginTest');
    
        console.log(`MongoDb Connected: ${mongoUrl}`)

        const users = db.collection('Users');
        users.findOne({
         user:{
           username: username,
           password: password
            }
         }, (err, result) => {
            if(err) {
                console.log("error was found: " + err);
            }
            else {
                if(result != null) {
                    console.log("we found it: ");
                    console.log(result);
                    res.json({ message : "valid"});
                }
                else {
                    res.json({ message : "whoops wrong credentials"});
                }
            }              
         })

    })
    
  });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});


  