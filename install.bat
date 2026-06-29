@echo off
set "PATH=%CD%\.node;%PATH%"
echo Installing project dependencies using portable Node.js...
call .\.node\npm.cmd install
pause
