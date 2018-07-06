/*
 * Copyright (c) Microsoft All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

var auth = require('./auth');
var graph = require('./graph');

// Get an access token for the app.
auth.getAccessToken().then(function (token) {

  graph.getRoot(token).then(function (site){
    console.log(site);

  }, function(error){
    console.error('>>> Error getting root: ' + error);
  });


}, function (error) {
  console.error('>>> Error getting access token: ' + error);
});
