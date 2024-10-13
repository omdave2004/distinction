const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const path = require('path'); // Import path module

// MongoDB connection URI and database/collection names
const uri = "mongodb+srv://omdave:aryanvcbc100@cluster0.kpk7u.mongodb.net/smartroomdb?retryWrites=true&w=majority";
const dbName = "smartroomdb";
const collectionName = "thermaldp";

const app = express();
const port = 3000;

// Middleware to handle CORS
app.use(cors());

// Connect to MongoDB
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDB() {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db(dbName).collection(collectionName);
}

// Serve the static HTML file for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Fetch temperature data from MongoDB
app.get('/fetchTemperatures', async (req, res) => {
    try {
        const collection = await connectToDB();
        const data = await collection.find().sort({ _id: -1 }).limit(10).toArray();  // Fetch last 10 records
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Error fetching data' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
