- Install Node.js
- cd into folder
- npm install
- node index.js

## Solution

The solution to the assignment is that we first copy over package.json and package-lock.json , run npm install followed by copying over the code

This way, the layer which runs npm install can be cached until package.json isn't changed, which doesn't happen very often in the lifecycle of a project

## commands for multi-stage builds

## docker build --target development -t appname:dev .

# docker run appname:dev

## docker build --target production -t appname:prod .

# docker run appname:prod

## docker run -v .:/usr/src/app appname:dev

the above command uses for seeing the realtime changes (which nodemon do)
