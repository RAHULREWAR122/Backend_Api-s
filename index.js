import express from 'express';
import cors from 'cors';

const app = express();
import router from './Routes/route.js';

app.use(cors());
app.use(express.json());
app.use(router)


app.listen(5000, () =>{
     console.log('Server running on http://localhost:5000')
 });

