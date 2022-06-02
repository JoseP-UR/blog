#!/bin/bash

environment="back"
npmCommand="npm run start"

cd /$environment/ && npm install && npm ci && $npmCommand