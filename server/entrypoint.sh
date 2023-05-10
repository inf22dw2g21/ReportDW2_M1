#!/bin/bash

./wait-for-it.sh db:3306 --timeout=60 --strict -- echo "MySQL is up"

adonis migration:rollback --force
adonis migration:run --force

mysql -h db -u root -psecret adonis < db/database_v1.sql 2> import_errors.log

npm start
