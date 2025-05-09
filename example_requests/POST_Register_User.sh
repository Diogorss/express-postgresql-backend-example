curl --request POST \
  --url 'https://express-postgresql-backend-example-khaki.vercel.app/user/register' \
  -H "Content-Type: application/json" \
  -d '{ "username": "newuser2","password": "securepassword123" }'