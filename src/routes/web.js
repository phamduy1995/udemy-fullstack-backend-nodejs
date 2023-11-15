const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.get('/view', (req, res) => {
    res.render('sample.ejs', { title: 'Express' });
})

module.exports = router;