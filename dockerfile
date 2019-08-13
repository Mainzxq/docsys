FROM keymetrics/pm2:latest-alpine
# Bundle APP files
RUN mkdir -p /src
WORKDIR /src
COPY . /src

ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install
EXPOSE 3000
RUN ls -al -R

CMD ["pm2-runtime", "start", "process.yml"]