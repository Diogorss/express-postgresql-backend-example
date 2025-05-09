curl -X POST http://localhost:3000/user/register \
  --url 'https://express-postgresql-backend-example-khaki.vercel.app/user/register' \
  -H "Content-Type: application/json" \
  -d '{ "username": "newuser","password": "securepassword123" }'