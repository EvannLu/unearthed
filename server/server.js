import express from 'express';
import cors from 'cors'; 
import './config/dotenv.js';  
import giftsRouter from './routes/gifts.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json())
app.use(cors())
app.use('/gifts', giftsRouter); 

app.get('/', (req,res) => {
    res.status(200).send('h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
}); 

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
});