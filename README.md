<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Development mode

1. Clone the repository
2. Execute

```
yarn install
```

3. Have Nest CLI installed

```
npm i -g @nestjs/cli
```

4. Up the data base

```
docker-compose up -d
```

5. Clone the file **.env.template** and rename to **.env**

6. Write the environment variables in

```
.env
```

7. Run app in dev:

```
yarn start:dev
```

8. Rebuild data base with the seed

```
http://localhost:3000/api/v2/seed
```

## Stack used

- MongoDB
- Nest.js

# Production build

1. Create file

```
.env.prod
```

2. Write the environment variables
3. Create new image

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build

```

4. Run

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d
```

# Notes

```
git commit --allow-empty -m "Trigger heroku deploy"
git push heroku main
```
