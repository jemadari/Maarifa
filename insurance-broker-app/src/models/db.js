import db from '../utils/database.js';

// Company queries
export const getAllCompanies = () => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM companies', [], (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
};

export const getCompanyById = (id) => {
    return new Promise((resolve, reject) => {
        db.get('SELECT * FROM companies WHERE id = ?', [id], (err, row) => {
            if (err) reject(err);
            else resolve(row);
        });
    });
};

export const createCompany = (name) => {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO companies (name) VALUES (?)', [name], function (err) {
            if (err) reject(err);
            else resolve({ id: this.lastID, name });
        });
    });
};

// Broker queries
export const getBrokersByCompanyId = (companyId) => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM brokers WHERE company_id = ?', [companyId], (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
};

export const createBroker = (name, companyId) => {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO brokers (name, company_id) VALUES (?, ?)', [name, companyId], function (err) {
            if (err) reject(err);
            else resolve({ id: this.lastID, name, company_id: companyId });
        });
    });
};

// Policy queries
export const getPoliciesByCompanyId = (companyId) => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM policies WHERE company_id = ?', [companyId], (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
};

export const createPolicy = (name, type, companyId) => {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO policies (name, type, company_id) VALUES (?, ?, ?)', [name, type, companyId], function (err) {
            if (err) reject(err);
            else resolve({ id: this.lastID, name, type, company_id: companyId });
        });
    });
};