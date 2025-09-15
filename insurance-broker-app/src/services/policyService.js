import { createPolicy, getPoliciesByCompanyId, getCompanyById } from '../models/db.js';

/**
 * Get all policies for a company
 * @param {*} companyId 
 * @returns 
 */
export const getPoliciesByCompanyIdService = async (companyId) => {
    if(!companyId)
    {
        throw new Error(`Company ID is required`);
    }

    const company = await getCompanyById(companyId);
    if(!company)
    {
        throw new Error(`Company with ID: ${companyId} not found`);
    }

    const policies = await getPoliciesByCompanyId(companyId)
    return policies
};

/**
 * Create policies for a company
 */
export const createPolicyService = async (name, type, companyId) => {
    // TODO: Create a new policy for a company
    // Validate fields; type could be enum-like (Auto, Home, etc.)
    if(!name || name.trim === '')
    {
        throw new Error('Policy name is required')
    }

    if(!type || type.trim === '')
    {
        throw new Error('Policy type is required');
    }

    if(!companyId)
    {
        throw new Error('Company ID is required')
    }

    const allowedTypes = ['Auto', 'Home', 'Health', 'Life'];
    if(!allowedTypes.includes(type))
    {
        throw new Error(`Invalid policy type. Allowed types: ${allowedTypes.join(', ')}`);
    }

    const company = await getCompanyById(companyId);
    if(!company)
    {
        throw new Error(`Company with ID: ${companyId} not found`)
    }

    const policies = await getPoliciesByCompanyId(companyId);
    const existingPolicy = policies.find((policy) => policy.name === name && policy.type === type && policy.company_id === companyId);

    if(existingPolicy)
    {
        throw new Error(`Policy with the name: ${name}, type: ${type} and company ID: ${companyId} already exists`)
    }

    const newPolicy = await createPolicy(name, type, companyId)
    return newPolicy
};