FROM python:3.9

# Django output writes to the terminal comes out in real time without being buffered
ENV PYTHONUNBUFFERED 1
ARG USER=root
USER $USER

WORKDIR /app

# Install  Dependencies
COPY requirements.txt ./
RUN pip install -r requirements.txt
RUN pip install --upgrade pip

COPY . ./

#uncomment if we use GDAL
# RUN pip install './GDAL-3.4.1-cp39-cp39-manylinux_2_5_x86_64.manylinux1_x86_64.whl'

# Start backend app
CMD ["python", "geospatial_data_portal/manage.py", "runserver", "0.0.0.0:8000"]

# run entrypoint.sh
RUN ["chmod", "+x", "./entrypoint.sh"]
ENTRYPOINT ["./entrypoint.sh"]