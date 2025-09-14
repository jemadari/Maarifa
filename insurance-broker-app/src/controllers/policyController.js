import * as policyService from '../services/policyService.js';

export const getPoliciesByCompanyId = async (req, res) => {
    try {
        const policies = await policyService.getPoliciesByCompanyIdService(req.params.companyId);
        res.json(policies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createPolicy = async (req, res) => {
    try {
        const { name, type } = req.body;
        const companyId = parseInt(req.params.companyId);
        if (!name || !type || !companyId) {
            return res.status(400).json({ error: 'Name, type, and companyId are required' });
        }
        const newPolicy = await policyService.createPolicyService(name, type, companyId);
        res.status(201).json(newPolicy);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};