FROM node
RUN useradd node-app -s /sbin/nologin && mkdir /app && chown -R node-app: /app
WORKDIR /app
ADD package.json .
RUN npm install
USER node-app
VOLUME ["/app/node_modules"]
CMD ["npm", "start"]