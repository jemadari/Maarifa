import { createCompany, getAllCompanies, getCompanyById } from '../controllers/companyController.js';

import express from 'express';

const router = express.Router();

router.get('/', getAllCompanies);
router.get('/:id', getCompanyById);
router.post('/', createCompany);

export default router;