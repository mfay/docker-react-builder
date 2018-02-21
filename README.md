# docker-react-builder
A docker image using webpack, babel, and react.

## Build the image
` docker build ./build -t react-builder`

## Running the image
`docker run -it --rm -v $(pwd)/src:/app/src -v $(pwd)/static/js:/app/dist react-builder`
This will map the src and dist folders and run the container with it's default command, `npm start`

