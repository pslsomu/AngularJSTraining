@echo off

SET REST_DIR=%ANGULAR_HOME%\backend
start "mongod" mongod --httpinterface --rest --directoryperdb --smallfiles --dbpath "%REST_DIR%\data\db" > "%REST_DIR%/logs/mongo-start.log"
