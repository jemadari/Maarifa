import { createPolicy, getPoliciesByCompanyId } from '../controllers/policyController.js';

import express from 'express';

const router = express.Router({ mergeParams: true });

router.get('/:companyId', getPoliciesByCompanyId);
router.post('/:companyId', createPolicy);

export default router;