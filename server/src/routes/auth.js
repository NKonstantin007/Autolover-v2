const { Router } = require('express');
const router = Router();

router.get('/signup', (req, res) => {
    res.json({'user': req.body})
 });

module.exports = router;