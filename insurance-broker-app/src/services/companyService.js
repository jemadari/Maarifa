import { createCompany, getAllCompanies, getCompanyById } from '../models/db.js';

// TODO: Implement these functions using the model queries above
// They should handle business logic like validation if needed

/**
 * Get All Companies
 */
export const getAllCompaniesService = async () => {
    // TODO: Fetch and return all companies
    const companies = await getAllCompanies();

    if(!companies || companies.length === 0)
    {
        throw new Error('No company found');
    }

    return companies;
};

/**
 * Get company by id
 * @param {*}  id 
 */
export const getCompanyByIdService = async (id) => {
    if(!id)
    {
        throw new Error('Company Id is required')
    }

    const company = await getCompanyById(id)

    if(!company)
    {
        throw new Error(`company with id: ${id} is not found`)
    }
    
    return company;
};

/**
 * Create Company
 * @param {*} name 
 */
export const createCompanyService = async (name) => {
    if(!name || name.trim === '')
    {
        throw new Error('Company name is required');
    }

    const existingCompany = await getAllCompanies();
    const exist = existingCompany.find((company) => company.name === name);

    if(exist)
    {
        throw new Error(`Company with name: ${name} already exists`);
    }

    const newCompany = await createCompany(name);
    return newCompany;
};