@echo off


SET REST_DIR=%ANGULAR_HOME%/backend

mongoimport -v  --db class --collection states --file "%REST_DIR%/data/init/states.json" --jsonArray --drop
mongoimport -v  --db class --collection countries --file "%REST_DIR%/data/init/countries.json" --jsonArray --drop
mongoimport -v  --db class --collection products --drop --file "%REST_DIR%/data/init/products.json" --jsonArray
mongoimport -v  --db class --collection categories --drop --file "%REST_DIR%/data/init/categories.json" --jsonArray
mongoimport -v  --db class --collection suppliers --drop --file "%REST_DIR%/data/init/suppliers.json" --jsonArray
mongoimport -v  --db class --collection customers --drop --file "%REST_DIR%/data/init/customers.json" --jsonArray
