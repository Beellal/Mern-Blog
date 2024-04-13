import express from 'express'

const app = express();

app.listen(3000, () => {
    console.log('Seerveur is running on 3000');
})