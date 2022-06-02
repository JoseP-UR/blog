#!/bin/bash

environment="front"
npmCommand="npm run dev"

cd /$environment/ && npm install && npm ci && $npmCommand