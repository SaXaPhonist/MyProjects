import {Router} from 'express'
import CardController from './CardController'

const  router = Router()

router.post('/cards', CardController.createCard)
router.get('/cards',CardController.getAllCards)
router.get('/category/:catName',CardController.getCategory)
router.get('/cards/:id', CardController.getCard)
router.put('/cards/:id',CardController.updateCard)
router.put('/category/:catName',CardController.updateCategory)
router.delete('/category/:catName',CardController.deleteCategory) 
router.delete('/cards/:id',CardController.deleteCard)
router.get('/category',CardController.aggrCategory)
router.post('/createdata',CardController.insertMany)

export default router