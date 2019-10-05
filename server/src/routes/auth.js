const { Router } = require('express');
const router = Router();

router.post('/signup', (req, res) => {
    res.json({'user': req.body})
 });

module.exports = router;