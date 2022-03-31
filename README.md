<img src='./TeamUndershrub_Logo.png' alt='Team Undershrub Logo' height='200'/>

# Running local development servers
## Prerequisites
- Docker engine (https://www.docker.com/products/docker-desktop)

## Installing
Run `git clone https://github.com/SKaplanOfficial/Geospatial-Data-Portal.git`

## Running
To run the frontend React server:
```
cd frontend
docker-compose build
docker-compose up
```
Then go to http://localhost:3000

To run the backend Django server:
```
cd backend
docker-compose build
docker-compose up
```
Then go to http://localhost:8000

# Geospatial-Data-Portal
Blue Marble Geographics has interest in development of a dynamic web portal that can be used to organize and manage large quantities of geospatial data. This portal will need to handle raster-based imagery (TIFF, JPEG, DEM, etc), vector-based GIS data (SHP, KML), point-cloud and lidar (LAZ, LAS), and provide an interface to Cloud based data architectures (AWS, Azure, Google Cloud). Users will have shared and private dataset privileges and will be able to visualize basic information and metadata attached to each working set. This metadata may include EXIF tags, Coordinate Reference system information, basic geographic location, as well as general format details.   The Primary components for this project will be: 

1. **Administrative Interface:** This component will be responsible for tracking individual users, assigning roles, and granting access to various portions of the web service. It should also contain all management type information (disk usage, user details, site maintenance and performance information, etc.) required to manage and maintain the system. It will need to be designed with security in mind and should use a generic authentication technology for the portal service. There should be several access levels available including a generic user and a site administrator, with varying roles and permissions. User level and site level administrative reporting capabilities should also be included in this interface.
2. **User Data Interface:** This interface will be used for visualization and storage of all geospatial data. A user will be able to upload, download, organize, and visualize all data using this collection of pages. This interface should support general file system type operations, including directory management along with data ordering and sorting capabilities, and project-based workflow design templates. The interface should include a basic map component that will demonstrate geographic locations for any contained data. The interface should also contain a more detailed viewer which will render map data as single layers, or in a collection. Additional reporting capabilities by region, project, and datatypes should also be extended to the user.
3. **Data Access portal:** Users should be able to extend local scripting processes that will be able to access data stored on the portal service. These scripts will initially use Python and a limited set of extension libraries. An additional interface will provide access to a Blue Marble Geographics R&D instanced server for analyzing and characterizing specific raster data. This process and interface will need to be scoped and designed by the development team with input from BMG principals.

## Expected Deliverable
The deliverable for this project should be a hostable web application. Containerization (Docker, or some other technology) would be a suitable means of deployment, but not required. Performance of the service, including visualization, should be a key metric for the final product. Version control systems should be used and shared with the BMG team (if practical). Since this project may be commercialized, considerations should be made when selecting 3rd Party software tools with regards to licensing restrictions. 

## Testing Plan
- Each visual component of the application should have a clear set if interface design documents that can be manually verified by the development team and Blue Marble Geographics.
- Blue Marble will provide the team with a collection of all required test data types and expected metadata parameters.
- Blue Marble will provide licenses for Global Mapper desktop software. This can be used to validate data visualization and geographic location.
- Blue Marble will provide test python scripts that can be used to validate the Data Access Component interface

## Resources
This project is focused on web development. Linux or Windows are acceptable platforms. Primary UI design should take advantage of a modern programming language or framework. A basic Python scripting interface will be required for the Data Access Portal, but no other language support is required. 

Several 3rd Party libraries may come in handy for this project:
- Open Source geospatial tools such as the GDAL library set (https://www.osgeo.org/projects/gdal/)
- potree opensource point cloud viewer (https://github.com/potree/potree)
- MapServer WMS spatial data viewer service (https://www.osgeo.org/projects/mapserver/)
- OpenLayers toolkit (https://www.osgeo.org/projects/openlayers/).

Virtual or cloud-based machine instances can be provided to host prototype and final project components.

## Contacts
Patrick Cunningham, CEO 
Victor Minor, CTO 
Sam Knight, Director of Product Management
Stephanie Martini, Director of Quality Assurance
Katrina Schwikert, Product Manager 
Jeffrey Hatzel, Product Manager  
