FROM node:14

WORKDIR /app

COPY . .

# Install the MySQL client
RUN apt-get update && \
    apt-get install -y default-mysql-client

RUN npm i -g @adonisjs/cli
RUN npm i
RUN chmod +x entrypoint.sh
RUN chmod +x wait-for-it.sh

CMD ["bash", "entrypoint.sh"]
