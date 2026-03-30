const express = require('express')
const router = express.Router()
const userModel = require('../models/userModel')

// CREATE
router.post('/create', async (req, res) => {
    const user = await userModel.create(req.body)
    res.json(user)
})

// READ
router.get('/', async (req, res) => {
    const data = await userModel.find()
    res.json(data)
})

// UPDATE
router.put('/update/:id', async (req, res) => {
    const updated = await userModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    res.json(updated)
})

// DELETE
router.delete('/delete/:id', async (req, res) => {
    await userModel.findByIdAndDelete(req.params.id)
    res.json({ message: "Deleted" })
})

module.exports = router