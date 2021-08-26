import Card from './card'
import fileService from './fileService'

class CardService {
    async createCard(card){
            const newCard = Card.create(card) 
            return newCard 
    
    }

    async insertMany(cards){
         Card.insertMany(cards)
    }

    async getCard(id){
            if(!id){
                throw new Error('no ID')
            }
            const card = await Card.findById(id)
            return card
        
    }

    async getAllCards(){
            const currCards = await Card.find()
            return currCards
        
    }

    async getCategory(catName){
        const categoryCards = await Card.find({category:`${catName}`})
        return categoryCards
    }

    async deleteCard(id){
        if(!id){
            throw new Error('no ID')
        }
        const card = await Card.findByIdAndDelete(id)
        return card
    }

    async deleteCategory (catName){
        if(!catName){
            throw new Error('no category name')
        }
        const deleteCat = await Card.deleteMany(
            {category: catName}
        )
        return deleteCat
    }

    async updateCard(card){
        if(!card.id){
            throw new Error('no Id')
        }
        const updateCard = await Card.findByIdAndUpdate(card.id, card, {new: true} )
        return updateCard
        
    }

    async updateCategory(catName,newName){
        if(!catName){
            throw new Error('no category name')
        }
        const updateCategory = await Card.updateMany(
            {category:`${catName}`},
            {$set: {category:`${newName}`}})
        return updateCategory
    }

    async aggrCategory(){
        const aggrCat = await Card.aggregate(
            [
                {$match:{}},
                {$group: { _id:"$category", total: {$sum: 1}}},
                
            ]
        )
        return aggrCat  
    }
}

export default new CardService()