@echo off
echo Please make sure that you have started mongod before starting the server: mongo-start.cmd
start "REST server" node "%ANGULAR_HOME%\backend\httpServer\rest-server.js"