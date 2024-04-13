import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
//Connecter la base de donner mangodb
mongoose.connect(process.env.MONGO)
    .then(
        () => { console.log('MongoDb is connected !') }
    )
    .catch((err) => console.error(err));


const app = express();

app.listen(3000, () => {
    console.log('Serveur is running on 3000');
})