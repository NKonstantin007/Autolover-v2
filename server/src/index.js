const express = require('express');
// import routes
const homeRoutes = require('./routes/home');

const app = express();

app.use(express.urlencoded({extended: true}));

// API routing
app.use('/api/home', homeRoutes);

// start server
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log('Server is running on port ', PORT);
});