var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
    'article-one': {
    title: 'article one',
    heading: 'Article one',
    content: `<div>
    <p>This is the article one</p>
    </div>

   <div>
    <p>This is the article one</p>
</div>

<div>
    <p>This is the article one</p>
</div>`
},
 'article-two': {
    title: 'article two',
    heading: 'Article two',
    content: `<div>
    <p>This is the article two</p>
    </div>

   <div>
    <p>This is the article two</p>
</div>

<div>
    <p>This is the article two</p>
</div>`
},
'article-three':{
    title: 'article three',
    heading: 'Article three',
    content: `<div>
    <p>This is the article three</p>
    </div>

   <div>
    <p>This is the article three</p>
</div>

<div>
    <p>This is the article three</p>
</div>`    
}
    
};
function createtemplate (data){
    var title= data.title;
    var heading= data.heading;
    var content= data.content;

var htmltemplate = 
` <html>
<head>
<title> ${title} 
</title>
<link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
<div class="container">
    <div>
<a href='/'>Home</a>
<hr/>
</div>
<div>
<h1> ${heading}
</h1>
</div>    

<div>
${content}
</div>
</div>
</body>
</html>`   
;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter', function(req, res) {
   counter = counter + 1;
   res.send(counter.tostring()); 
});
app.get('/:articlename', function (req, res) {
    var articlename =req.params.articlename;
    res.send(createtemplate(articles[articlename]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
