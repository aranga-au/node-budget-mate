npm install
grunt build
aws s3 sync ./dist/. s3://repo.acnonline.net