const express = require('express');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
const ejs = require('ejs');

const app = express();

// parsing the URL-encoded data with the query string library for POST request
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  methodOverride((request, response) => {
    if (request.body._method) {
      const method = request.body._method;
      delete request.body._method;
      return method;
    }
  })
);

// Router to Home
app.get('/', (request, response) => {
  response.render('welcome');
});

const rootRouter = require('./routes/root');
app.use('/', rootRouter);

const cohortRouter = require('./routes/cohorts');
app.use('/cohorts', cohortRouter);

const PORT = 3000;
const DOMAIN = 'localhost';

app.listen(PORT, DOMAIN, () => {
  console.log(`Server is running on http://${DOMAIN}:${PORT}`);
});
