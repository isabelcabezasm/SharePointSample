# SharePoint with Graph API Sample using NodeJS


## Microsoft Graph service app sample using Node.js

**Application permissions**

**Accessing to SharePoint**

Based on: https://github.com/microsoftgraph/nodejs-apponlytoken-rest-sample

and 

https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/resources/site


Notes:

Create a ps1 file for set local settings (environment variables)
(ignored on this repo)
with this structure:
(sample file: envVar_example.ps1)

$env:clientId="ENTER_YOUR_CLIENT_ID";

$env:clientSecret="ENTER_YOUR_SECRET";

$env:tokenEndpoint="ENTER_YOUR_TOKEN_ISSUING_ENDPOINT";


------------------------

npm install

npm start