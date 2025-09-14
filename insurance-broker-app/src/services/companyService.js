import { createCompany, getAllCompanies, getCompanyById } from '../models/db.js';

// TODO: Implement these functions using the model queries above
// They should handle business logic like validation if needed

export const getAllCompaniesService = async () => {
    // TODO: Fetch and return all companies
    // e.g., return await getAllCompanies();
    throw new Error('Not implemented yet');
};

export const getCompanyByIdService = async (id) => {
    // TODO: Fetch and return a single company by ID
    // Handle not found errors
    throw new Error('Not implemented yet');
};

export const createCompanyService = async (name) => {
    // TODO: Create a new company
    // Validate name is not empty/duplicate
    throw new Error('Not implemented yet');
};