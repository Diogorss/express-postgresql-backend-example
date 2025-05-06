import express from 'express';
import db from './models/index.js'; 
import userRoute from './routes/user.route.js';
import exampleRoute from './routes/example.route.js';


    
db.sequelize.sync({ force: false })
.then(() => {
    console.log('Database connected successfully');
})
.catch((error) => {
    console.error('Error connecting to the database:', error);
});

const app = express();

app.use(express.json());

app.use("/user", userRoute);
app.use("/secureExampleRoute", exampleRoute);
app.get('/', (req, res) => {
    res.send({message: 'Hello World!'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port http://localhost:${PORT}/');
});
