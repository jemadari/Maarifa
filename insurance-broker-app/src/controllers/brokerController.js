import * as brokerService from '../services/brokerService.js';

export const getBrokersByCompanyId = async (req, res) => {
    try {
        const brokers = await brokerService.getBrokersByCompanyIdService(req.params.companyId);
        res.json(brokers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createBroker = async (req, res) => {
    try {
        const { name } = req.body;
        const companyId = parseInt(req.params.companyId);
        if (!name || !companyId) {
            return res.status(400).json({ error: 'Name and companyId are required' });
        }
        const newBroker = await brokerService.createBrokerService(name, companyId);
        res.status(201).json(newBroker);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};