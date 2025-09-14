import * as companyService from '../services/companyService.js';

export const getAllCompanies = async (req, res) => {
    try {
        const companies = await companyService.getAllCompaniesService();
        res.json(companies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getCompanyById = async (req, res) => {
    try {
        const company = await companyService.getCompanyByIdService(req.params.id);
        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.json(company);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createCompany = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }
        const newCompany = await companyService.createCompanyService(name);
        res.status(201).json(newCompany);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};