#!/bin/bash

environment="front"
npmCommand="npm run dev"
DIRECTORY="/$environment"

if [[ -d "$DIRECTORY/node_modules" ]]
    then
        echo "node_modules found, running $npmCommand."
        cd /$environment/ && $npmCommand
    else
        echo "node_modules not found, running install commands"
        cd /$environment/ && npm install && npm ci && $npmCommand
fi
