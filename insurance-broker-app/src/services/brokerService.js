import { createBroker, getBrokersByCompanyId, getCompanyById } from '../models/db.js';

/**
 * Get All Brokers for a company
 * @param {*} companyId 
 * @returns brokers 
 */
export const getBrokersByCompanyIdService = async (companyId) => {
    if(!companyId)
    {
        throw new Error('company Id is required')
    }

    const company = await getCompanyById(companyId);
    if(!company)
    {
        throw new Error(`Company with ID: ${companyId} not found`);
    }

    const brokers = await getBrokersByCompanyId(companyId);
    return brokers
};

/**
 * Create a new broker for a company
 * @param {*} name 
 * @param {*} companyId 
 * @returns newBroker
 */
export const createBrokerService = async (name, companyId) => {
    if(!name || name.trim === '')
    {
        throw new Error('broker name is required');
    }

    if(!companyId)
    {
        throw new Error('Company Id is required')
    }

    const company = await getCompanyById(companyId);
    if(!company)
    {
        throw new Error(`Company with ID: ${companyId} not found`);
    }

    const brokers = await getBrokersByCompanyId(companyId);
    const existingBroker = brokers.find((broker) => broker.name === name && broker.company_id === companyId)

    if(existingBroker)
    {
        throw new Error(`Broker with the name: ${name} and Company ID: ${companyId} already exists for this company`);
    }

    const newBroker = await createBroker(name, companyId);
    return newBroker
};