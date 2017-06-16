var express = require('express');
var router = express.Router();
var read = require('fs').readFileSync;
var join = require('path').join;

router.get('/', function(req, res, next) {
  res.render('index', {
    components: components.map(addHtmlToComponent),
  });
});

router.get('/example', function(req, res, next) {
  res.render('example', {});
});

router.get('/css', function(req, res, next) {
  res.render('css', {
    css: read(join(__dirname, '../public/app.css'))
  });
});

router.get('/seeds', function(req, res, next) {
  res.render('seeds', {
    seeds: read(join(__dirname, '../public/seeds.json'))
  });
});

const components = [
  {
    name: 'All Messages Selected',
    filename: 'all-messages-selected.html',
  },
  {
    name: 'Some Messages Selected',
    filename: 'some-messages-selected.html',
  },
  {
    name: 'No Messages Selected',
    filename: 'no-messages-selected.html',
  },
  {
    name: 'Unread Message (unstarred)',
    filename: 'unread-message.html',
  },
  {
    name: 'Read Message (unstarred)',
    filename: 'read-message.html',
  },
  {
    name: 'Selected Message',
    filename: 'selected-message.html',
  },
  {
    name: 'Starred Message',
    filename: 'starred-message.html',
  },
  {
    name: 'Message With Labels',
    filename: 'message-with-labels.html',
  },
]

function addHtmlToComponent(component) {
  return Object.assign(
    {},
    component,
    { html: read(join(__dirname, `../components/${component.filename}`)) }
  )
}

module.exports = router;
