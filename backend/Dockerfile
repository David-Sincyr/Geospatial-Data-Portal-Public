# Set up node and react
FROM python:3.9

# Copy backend app
WORKDIR /app
COPY . ./

RUN chmod +x ./entrypoint.sh

# Install  Dependencies
COPY requirements.txt ./
#RUN apt-get update && apt-get install --yes libgdal-dev
RUN pip install -r requirements.txt

# Start backend app
CMD ["python", "geospatial_data_portal/manage.py", "runserver", "0.0.0.0:8000"]

# run entrypoint.sh
RUN ["chmod", "+x", "./entrypoint.sh"]
ENTRYPOINT ["./entrypoint.sh"]