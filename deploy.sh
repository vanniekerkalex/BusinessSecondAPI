#!/bin/bash

# Install dependencies
npm install express
pip install requests
pip install bs4

# Restart app
node app.js
sleep 5s
python3 test.py