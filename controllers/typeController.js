const {Type} = require('../models')

// GET Index
const getAllTypes = async (req, res) => {
    try {
        const types = await Type.find()
        res.json(types)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
// GET Show
const getTypeById = async (req, res) => {
    try {
        const { id } = req.params
        const type = await Type.findById(id)
        if (type) {
            return res.json(type)
        }
        return res.status(404).send('Furniture type with the specified ID does not exists')

    } catch (error) {
        return res.status(500).send(error.message)
    }
}


// POST -> Create
const createType = async (req, res) => {
    try {
        const type = await new Type(req.body)
        await type.save()
        return res.status(201).json({ type })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

// PUT -> Update 
const updateType = async (req, res) => {
    try {
        let { id } = req.params;
        let type = await Type.findByIdAndUpdate(id, req.body, { new: true })
        if (type) {
            return res.status(200).json(type)
        }
        throw new Error("Furniture type not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
// DELETE -> Delete 
const deleteType = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Type.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Type deleted")
        }
        throw new Error("Type not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const searchTypeByName = async (req,res) => {
        try {
            const { type } = req.query
            const query = {}
            if (type) {
                query.type = new RegExp(type, 'i')
            }
            const types = await Type.find(query);
            return res.json(types)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    } 





module.exports = {
    getAllTypes,
    getTypeById,
    createType,
    updateType,
    deleteType,
    searchTypeByName
}