import express from 'express';
import noteRouter from './routes/note.routes.js'
import cors from 'cors';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors({
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
  origin: ['http://localhost:5173/', 'http://localhost:5173', 'http://178.170.192.87:5173/', 'http://178.170.192.87:5173'],
  optionsSuccessStatus: 200,
  credentials: true,
}));
app.use(express.json());
app.use('/api', noteRouter);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));