#!/bin/bash

environment="back"
npmCommand="npm run start"
DIRECTORY="/$environment"

if ! [[ -d "$DIRECTORY/node_modules" ]]
    then
        echo "node_modules not found, running install commands"
        cd /$environment/ && npm install && npm ci
fi
    echo "node_modules found, running $npmCommand."
    cd /$environment/ && $npmCommand
