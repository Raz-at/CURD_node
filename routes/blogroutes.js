import express from "express"
import blogController from "../controller/blogController.js";
const router = express.Router();

const BlogController = new blogController();

router.post('/add', BlogController.addBlog)

router.put('/update/:id',BlogController.update)
router.delete('/delete/:id',BlogController.del)
router.get('/:id',BlogController.show)


export default router;
