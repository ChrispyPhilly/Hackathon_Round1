const { Item } = require('../models')

// GET Index
const getAllItems = async (req, res) => {
    try {
        const items = await Item.find().populate('type')
        res.json(items)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
// GET Show
const getItemById = async (req, res) => {
    try {
        const { id } = req.params
        const item = await Item.findById(id).populate('type')
        if (item) {
            return res.json(item)
        }
        return res.status(404).send('Item with the specified ID does not exists')

    } catch (error) {
        return res.status(500).send(error.message)
    }
}


// POST -> Create
const createItem = async (req, res) => {
    try {
        const item = await new Item(req.body)
        await item.save()
        return res.status(201).json({ item })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

// PUT -> Update 
const updateItem = async (req, res) => {
    try {
        let { id } = req.params;
        let item = await Item.findByIdAndUpdate(id, req.body, { new: true }).populate('type')
        if (item) {
            return res.status(200).json(item)
        }
        throw new Error("Item not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
// DELETE -> Delete 
const deleteItem = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Item.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Item deleted")
        }
        throw new Error("Item not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const searchItemByName = async (req,res) => {
    try {
    const {name} = req.query
    const query = {}

    if (name) {
        query.name = new RegExp(name, `i`)
    }

    const item = await Item.find(query).populate(`type`)
    return res.json(item)
} catch (error) {
    res.status(500).json({error: 'Error searching item'})
}}


module.exports = {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem,
    searchItemByType
}