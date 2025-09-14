# Insurance Broker App

A sample Express.js app for managing insurance companies, brokers, and policies using SQLite.

## Setup
1. `npm install`
2. Create `.env` with `PORT=3000` and `DB_PATH=./insurance.db`
3. `npm start`

## Features Implemented
1. **Companies**: `POST /api/companies` (create), `GET /api/companies`, `GET /api/companies/:id`
2. **Brokers**: `POST /api/brokers/:companyId` (create), `GET /api/brokers/:companyId`
3. **Policies**: `POST /api/policies/:companyId` (create), `GET /api/policies/:companyId`

## Mentee Tasks
- Implement service functions (e.g., call models and add validation).
- Extend for admins (new table/routes) or risk sharing (e.g., share policies between companies).

## Testing
Use Postman:
- Create company: POST `/api/companies` { "name": "ABC Insurance" }
- Create broker: POST `/api/brokers/1` { "name": "John Doe" }
- List policies: GET `/api/policies/1`