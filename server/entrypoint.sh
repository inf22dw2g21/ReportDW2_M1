#!/bin/bash

mysql -h db -u root -psecret adonis < db/database_v1.sql 2> import_errors.log

npm start
