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

router.get('/', async (_req, res) => {
  const children: ChildDTO[] = await childrenService.getAllChildren();
  res.json(children);
});

router.post('/', async (req, res) => {
  const newChild: ChildDTO = await childrenService.createChild(req.body as ChildDTO);
  res.status(201).json(newChild);
});


// Uppdaterad DELETE-rutt för att ta bort baserat på ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedChild = await childrenService.deleteChild(Number(id)); // Försök att ta bort barnet baserat på id
    if (deletedChild) {
      res.status(204).send(); // Om barnet raderas, returnera status 204 (no content)
    } else {
      res.status(404).json({ error: `No child found with id: ${id}` }); // Om inget barn med det id:t finns
    }
  } catch (error) {
    console.error('Error in DELETE /children/:id route:', error);
    res.status(500).json({ error: 'Något gick fel vid borttagning av barnet.' });
  }
});


export default router;
