#!/bin/bash
dotenv="./.env"
echo "Reading dotenv ..."
if [ -f $dotenv ]; then
    echo "Read dotenv successfully"
else
    echo "please create .env"
    echo "|.env"
    echo "      port=Listening port Ex:3000"
    echo "      secret_key=Your Key"
    echo "      db=Your Mongodb Url"
    echo "      frontendUrl=Font-end Url:port"
    exit
fi
npx nodemon ./rentalcars.js