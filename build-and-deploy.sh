git pull
npm install
grunt build
#aws s3 sync ./dist/. s3://repo.acnonline.net
aws lambda update-function-code --function-name api-budget --zip-file fileb://./dist/node-budget-api.zip
