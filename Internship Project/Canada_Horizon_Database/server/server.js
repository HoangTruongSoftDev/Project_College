const express = require('express');
const path = require('path');
const  AdminController = require('./controllers/adminController.js');

const app = express();
const cors = require('cors')
app.use(express.static(path.join(__dirname, '../public')));  


app.get('/api/admins', async (req, res) => {
    try {
        const admins = await AdminController.getAdminList();
        res.json(admins); // Send the retrieved admins back as JSON
      } catch (error) {
        console.error('Error fetching admins:', error);
        res.status(500).send('Error retrieving admins'); // Handle errors gracefully
      }

})

app.listen(8080, () => {
    console.log('Server is listening on port 8080')
})