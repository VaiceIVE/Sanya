import { Router } from "express";
import noteController from "../controller/note.controller.js";
const router = new Router();

router.get('/notes', noteController.getNotes);
router.post('/note', noteController.createNote);
router.delete('/note/:id', noteController.deleteNote);
router.put('/note/:id', noteController.updateNote);
//функция которая router.get('/banners', noteController.название функции)

export default router;