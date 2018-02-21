FROM node

RUN apt-get update && \
	apt-get install -y vim

WORKDIR app

COPY package.json .
RUN npm install
COPY babelrc .babelrc
COPY webpack.config.js .

CMD ["npm", "start"]
