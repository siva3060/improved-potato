#Pulling Node.js Base Image to run the app in the container

#FROM <BASE IMAGE >:<Image Version>
FROM node:15.9.0-alpine3.10

#WORKDIR setting up working directory inside docker container all the 
#commands will be applied on this directory
WORKDIR /app

#add app/node-modules/.bin to the path 
ENV PATH /app/node_modules/.bin:$PATH

#copy all the related files of the src code inside the docker container
COPY package.json ./
COPY package-lock.json ./

#COPYING THE ALL THE APP SRC CODE TO WRKING DIRECTORY OF CONTAINER
COPY . ./ 

#RUNNING APP INSIDE THE CONTAINER
RUN npm install


#start app inside the container
CMD ["npm","start"]

