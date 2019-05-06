# opex


# To load data from CSV into Postgres DB

COPY shipmentdata FROM '/Users/jpravinp/Downloads/Development Exercise - L2/ShipmentData.csv' WITH (FORMAT csv);

#begin

npm install

npm start


#ROUTES

/ - home

/upload - user utility to upload config file (accepts only json file)

/chart - route to display the circle packing chart
