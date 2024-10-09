import express from 'express';
import { connect } from 'mongoose';
import requestRoutes from './routes/requestRoutes.js';
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

// Cluster URI hosted on MongoDB Atlas 
const mongodbURI = 'mongodb+srv://admin:admin@cluster0.rq6qw.mongodb.net/';

// Connect to MongoDB Atlas
connect(mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected to cluster') 
  })
  .catch(err => {
    console.log('MongoDB connection encountered error: ', err)
  })


// Using routes defined in requestRoutes
app.use('/', requestRoutes);


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});