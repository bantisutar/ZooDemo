var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var mongo = require("mongoose");
//Replace the link below by mLab link
var db = mongo.connect("mongodb://localhost:27017/animalforum", function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to ');
  }
});


var app = express()
app.use(bodyParser());
app.use(bodyParser.json({
  limit: '5mb'
}));
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

var Schema = mongo.Schema;


var AnimalSchema = new Schema({
  type: {
    type: String
  },
  category: {
    type: String
  },
  breed: {
    type: String
  },
  height: {
    type: Number
  },
  weight: {
    type: Number
  },
    food: {
    type: String
  },
    speed: {
    type: Number
  },
    color: {
    type: String
  },
   status: {
     type:Number
   }
}, {
  versionKey: false
});
var modelc = mongo.model('animals', AnimalSchema, 'animals');

app.get("/api/animals", function (req, res) {
  
  modelc.find(function (err, data) {
    if (err) {
      res.send(err);
    } else {
      
      res.send(data);
    }
  });
})


app.post("/api/SaveAnimals", function (req, res) {
     modelc.findByIdAndUpdate(req.body._id, {
        type: req.body.type,
        category: req.body.category,
        breed: req.body.breed,
        height: req.body.height,
        weight: req.body.weight,
        food: req.body.food,
        speed: req.body.speed,
        color: req.body.color
      },
      function (err, data) {

        if (err) {
          res.send(err);
        } else {
          res.send({
          
            data: "Record has been Updated..!!"
          });
        }
      });
})
// app.post("/api/SavenewAnimals", function (req, res) {
//   var mod = new modelc(req.body);
//      mod.save()
//      .then(item => {
//      res.send("item saved to database");
//      })
//      .catch(err => {
//      res.status(400).send("unable to save to database");
//      });
//  })

app.post("/api/SavenewAnimals", (req, res) => {
  var myData = new modelc(req.body);
  console.log(req.body);
 myData.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(myData);
});
});
app.post("/api/getbyId", function (req, res) {
     modelc.findById(req.body._id,function (err, data) {

        if (err) {
          res.send(err);
        } else {
          res.send({
          
            data: "Record has been Updated..!!"
          });
        }
      });
  })

app.post("/api/deleteByid", function (req, res) {
  console.log(req.body);
    modelc.findOneAndDelete({_id: req.body._id } , (err, data) => {
    // As always, handle any potential errors:
    if (err) return res.status(500).send(err);
    // We'll create a simple object to send back with a message and the id of the document that was removed
    // You can really do this however you want, though.
    const response = {
        message: "Todo successfully deleted",
    };
    return res.status(200).send(response);
   });
  })
app.listen(8080, function () {

  console.log('Example app listening on port 8080!')
})
