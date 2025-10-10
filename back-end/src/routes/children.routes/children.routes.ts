/*routes är tydlig strukturerad
rätt metoder och paths finns
routes endast ansvarar för routing och koppling till controllers
och allt fungerar utan fel i runtime och typning AB#25*/

import type { Child } from '@prisma/client';
import express from 'express';
import * as childrenService from '';
const router = express.Router();

router.get('/', async (_req, res) => {
  const children: Child[] = await childrenService.getAllChildren();
  res.json(children);
});
