const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const userRouter = require('./routes/userroute');
const authRouter = require('./routes/auth');


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use('/user', userRouter);
app.use('/', authRouter);


sequelize.sync().then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
