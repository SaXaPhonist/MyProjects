import {Request, Response} from 'express'
import cardService from './cardService'

class CardController {

    async createCard(req: Request, res: Response){
        try {
            console.log(req.files)
            const newCard = await cardService.createCard(req.body) 
            res.status(200).json(newCard)    
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async insertMany(req:Request, res: Response){
        try {
            const cards = req.body
            await cardService.insertMany(cards)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getCategory(req: Request, res: Response){
        try {
            const {catName} = req.params
           
            const cards = await cardService.getCategory(catName)
            return res.status(200).json(cards)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getCard(req: Request, res: Response){
        try {
            const {id} = req.params
            const card = await cardService.getCard(id)
            return res.json(card)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getAllCards(req: Request, res: Response){
        try {
            const currCards = await cardService.getAllCards()
            return res.json(currCards)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async deleteCard(req: Request, res: Response){
        try {
            const {id} = req.params
            const card = await cardService.deleteCard(id)
            return res.json(card)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async deleteCategory(req: Request, res: Response){
        try {
            const {catName} = req.params
            const card = await cardService.deleteCategory(catName)
            return res.json(card)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async updateCard(req: Request, res: Response){
        try {
            const card = req.body
            const updateCard = await cardService.updateCard(card)
            return res.json(updateCard)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async updateCategory(req:Request, res:Response){
        try {
            const {catName} = req.params
            const newName = JSON.parse(req.body)
            const updateCategory = await cardService.updateCategory(catName, newName)
            return res.json(updateCategory)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async aggrCategory (req: Request, res:Response){
        try {
            const aggrCat = await cardService.aggrCategory()
            return res.json(aggrCat)
        } catch (error) {
            res.status(500).json(error)
        }
    }

}

export default new CardController()