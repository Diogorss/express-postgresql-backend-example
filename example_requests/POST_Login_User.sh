curl --request POST \
  --url 'https://express-postgresql-backend-example-khaki.vercel.app/user/login' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "newuser3",
    "password": "securepassword123"
    }'