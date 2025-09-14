import { createBroker, getBrokersByCompanyId } from '../controllers/brokerController.js';

import express from 'express';

const router = express.Router({ mergeParams: true }); // To access :companyId from parent

router.get('/:companyId', getBrokersByCompanyId);
router.post('/:companyId', createBroker);

export default router;