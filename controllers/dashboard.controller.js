const express = require('express')

const router = express.Router()

router.get('/dashboard', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('./pages/dashboard', { 
            title: "Panel"})
    } else {
        res.redirect('/login')
    }
})

module.exports = router