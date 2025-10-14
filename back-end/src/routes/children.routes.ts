/*routes är tydlig strukturerad
rätt metoder och paths finns
routes endast ansvarar för routing och koppling till controllers
och allt fungerar utan fel i runtime och typning AB#25*/

/* router.get('/', getAllBooks);
router.get('/metadata', getBooksMetadata);
router.get('/:id', getBookById);
router.get('/:id/metadata', getBookMetadata);
router.post('/', createBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook); */

import express from 'express';
import * as childrenService from '../services/children.service';
import type { ChildDTO } from '../types/DTO.types/children.DTO.types';
const router = express.Router();

router.get('/children', async (_req, res) => {
  const children: ChildDTO[] = await childrenService.getAllChildren();
  res.json(children);
});
