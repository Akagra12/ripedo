const mongoose = require('mongoose');

const blackListTokenSchema = new mongoose.Schema({
    token: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: '7d' } // Auto-delete after 7 days
});

// ✅ Fix: Prevent model redefinition
const BlacklistToken = mongoose.models.BlacklistToken || mongoose.model('BlacklistToken', blackListTokenSchema);

module.exports = BlacklistToken;
