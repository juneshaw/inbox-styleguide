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
    name: 'Toolbar: All Messages Selected',
    filename: 'all-messages-selected.html',
  },
  {
    name: 'Toolbar: Some Messages Selected',
    filename: 'some-messages-selected.html',
  },
  {
    name: 'Toolbar: No Messages Selected',
    filename: 'no-messages-selected.html',
  },
  {
    name: 'Toolbar: With Compose Button',
    filename: 'toolbar-with-compose-button.html',
  },
  {
    name: 'Message: Unread Message (unstarred)',
    filename: 'unread-message.html',
  },
  {
    name: 'Message: Read Message (unstarred)',
    filename: 'read-message.html',
  },
  {
    name: 'Message: Selected Message',
    filename: 'selected-message.html',
  },
  {
    name: 'Messeage: Starred Message',
    filename: 'starred-message.html',
  },
  {
    name: 'Message: Message With Labels',
    filename: 'message-with-labels.html',
  },
  {
    name: 'Compose Form',
    filename: 'compose-form.html',
  },
].map( (component, index) => Object.assign(component, {id: index}) )

function addHtmlToComponent(component) {
  return Object.assign(
    {},
    component,
    { html: read(join(__dirname, `../components/${component.filename}`)) }
  )
}

module.exports = router;
