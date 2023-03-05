#!/bin/bash

source .env
psql -v USERNAME=$USERNAME -v PASSWORD=$PASSWORD -v DB=$DB -f setup.sql