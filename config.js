/*
 * Copyright (c) Microsoft All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

// Application credentials from the Azure Management Portal.
module.exports = {
  clientId: process.env["clientId"] ,
  clientSecret: process.env["clientSecret"],
  tokenEndpoint: process.env["tokenEndpoint"]
};
