import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
//Connecter la base de donner mangodb
mongoose.connect(process.env.MONGO)
    .then(
        () => { console.log('') }
    )
    .catch((err) => console.error(err));


const app = express();

app.listen(3000, () => {
    console.log('');
})

app.get( '/', (req, res) => {
    //Renvoi du message
    res.json({message : 'API is working'})
});