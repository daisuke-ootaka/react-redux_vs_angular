'use strict'

//====================================================================================================
// Libralies
//====================================================================================================
var express = require('express')
var path = require('path')

//====================================================================================================
// Configuration
//====================================================================================================
var app = new express()
app.set('port', (process.env.PORT || 8083));

//====================================================================================================
// Served Contents
//====================================================================================================
app.use('/', express.static(path.join(__dirname, 'dist')));

//====================================================================================================
// Start Server
//====================================================================================================
app.listen(app.get('port'), function() {
  console.log('Served: http://localhost:' + app.get('port'));
})