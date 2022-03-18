#!/bin/bash
python geospatial_data_portal/manage.py makemigrations
python geospatial_data_portal/manage.py migrate --run-syncdb
python geospatial_data_portal/manage.py runserver 0.0.0.0:8000