import brokerRoutes from './routes/brokerRoutes.js';
import companyRoutes from './routes/companyRoutes.js';
import express from 'express';
import policyRoutes from './routes/policyRoutes.js';

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/companies', companyRoutes);
app.use('/api/brokers', brokerRoutes);
app.use('/api/policies', policyRoutes);

// Health check
app.get('/', (req, res) => {
    res.json({ message: 'Insurance Broker API - Ready for brokers and policies!' });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

export default app;