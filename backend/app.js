const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const movieSchema = require('./schema/schema'); // Ensure schema exists
const resolvers = require('./resolver/resolver'); // Ensure resolvers exist

const app = express();

// MongoDB Connection
mongoose.connect(
    'mongodb+srv://rajdharmesh666:DOcPAIZRYx65rhrH@cluster0.pdkxn.mongodb.net/movie_search?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
    .then(() => console.log('MongoDB Connected!'))
    .catch((err) => console.error('MongoDB Connection Error:', err));

// Middleware
app.use(cors());

// GraphQL Setup
app.use('/graphql', graphqlHTTP({
    schema: movieSchema,
    rootValue: resolvers,
    graphiql: true,
}));

// Routes
app.get('/', (req, res) => {
    res.send('Hello from backend movie search');
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
