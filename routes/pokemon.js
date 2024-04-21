import {Router} from "express"
import axios from "axios"

const router = Router()

router.get(`/search/:searchterm`, async (req, res) => {
    const { searchTerm } = req.params
    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
    res.json(data)
    console.log(data)
})

export default router