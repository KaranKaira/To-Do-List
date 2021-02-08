const express = require('express')
const bodyParser = require('body-parser');
const app = express();

//requiring local modules is different than requiring npm modules

const date = require(__dirname + '/date.js'); // to make app.js clean from unrelated code 
// console.log(date.Module_Name); using more exports

app.use(bodyParser.urlencoded({
    extended: true
}));
// to serve the static file 
app.use(express.static('public'));

let newToDoItems = [];
let newWorkToDoItems = [];

// using ejs
app.set('view engine', 'ejs');


app.get('/', function (req, res) {

    
    let day = date.formatDate();
    res.render('list', {
        listTitle : day,
        newListItems:newToDoItems
    });
});


app.post('/',function(req,res){
    
    let newToDoItem = req.body.newToDo;

    // console.log(req.body);
    
    if(req.body.listName === 'Worklist'){
        
        newWorkToDoItems.push(newToDoItem);
        res.redirect('/work');
    
    }
    else{
    
        newToDoItems.push(newToDoItem);
        res.redirect('/');
    
    }
});

app.get('/work',function(req,res){
    res.render('list',{
        listTitle : 'Worklist',
        newListItems : newWorkToDoItems     
    });
});

app.listen(3000, function () {
    console.log('Server running 3000');
});