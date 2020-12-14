FROM node:14-buster

# create destination directory
WORKDIR /app

# update and install dependency
RUN apt-get update

# copy install files to into WORKDIR
COPY package.json yarn.lock ./
# install project dependencies
RUN yarn

# copy project files into WORKDIR
COPY . .

# build app for production with minification
RUN yarn run generate

# expose 5000 on container
EXPOSE 5000

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=5000

# start the app
CMD [ "yarn", "start" ]
