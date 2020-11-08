# How to deploy to AWS && test

1. Deploy to AWS

```properties
$ sls deploy
```

2. Test API

```properties
$ curl -X POST -H "Content-Type: application/json" -d '{"userId": "sam.leung"}' http://${AWS_API_GATEWAY_ENPOINT}/login
$ curl -X GET -H "x-access-token: ${X-ACCESS-TOKEN}" http://${AWS_API_GATEWAY_ENPOINT}/user | jq
```

### Deploy Services

```properties
$ sls deploy
```

# Local Test

1. create `.env` file

  ```properties
  $ cp .env.exmaple .env
  ```

2. uncomment app listener

   ./src/index.js

   - `app.listen(PORT);`

3. start Application

   ```properties
   $ npm run dev
   # Or
   $ make run_dev
   ```

4. Login Test

   ```properties
   $ curl -X POST -H "Content-Type: application/json" -d '{"userId": "sam.leung"}' http://localhost:3000/login
   ```

   output:

   ```properties
   {
   "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InNhbS5sZXVuZyIsImlhdCI6MTYwNDgwNzQ2MDk2NX0.5NJhm2m_OSMBmktXyufx0lv-IgaJEPKCntaTgW_tqCg"
   }
   ```

5. Get user data

   ```properties
   $ curl -X GET -H "x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InNhbS5sZXVuZyIsImlhdCI6MTYwNDgwNzQ2MDk2NX0.5NJhm2m_OSMBmktXyufx0lv-IgaJEPKCntaTgW_tqCg" http://localhost:3000/user | jq

   ```

   output:

   ```properties
   [
       {
           "username": "sam.leung",
           "gender": "M"
       }
   ]
   ```
