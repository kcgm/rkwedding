// Read Airtable configuration from build-time environment variables when
// available (e.g. process.env replaced by bundler), otherwise fall back to
// a runtime global `window.__AIRTABLE_CONFIG__` for local testing.
const envApiKey = (typeof process !== 'undefined' && process.env && process.env.AIRTABLE_API_KEY)
    || (typeof window !== 'undefined' && window.__AIRTABLE_CONFIG__ && window.__AIRTABLE_CONFIG__.AIRTABLE_API_KEY)
    || '';
const envBaseId = (typeof process !== 'undefined' && process.env && process.env.AIRTABLE_BASE_ID)
    || (typeof window !== 'undefined' && window.__AIRTABLE_CONFIG__ && window.__AIRTABLE_CONFIG__.AIRTABLE_BASE_ID)
    || '';

const config = {
    AIRTABLE_API_KEY: envApiKey,
    AIRTABLE_BASE_ID: envBaseId
};

// Provide both ES module default export and CommonJS export so this file works
// when required by different loaders/bundlers or when consumed via `require()`.
// Also keep the runtime global for pages that set `window.__AIRTABLE_CONFIG__`.
if (typeof window !== 'undefined') {
    // Ensure global reflects resolved values (useful if a script wants to read it)
    window.__AIRTABLE_CONFIG__ = window.__AIRTABLE_CONFIG__ || {};
    window.__AIRTABLE_CONFIG__.AIRTABLE_API_KEY = window.__AIRTABLE_CONFIG__.AIRTABLE_API_KEY || envApiKey;
    window.__AIRTABLE_CONFIG__.AIRTABLE_BASE_ID = window.__AIRTABLE_CONFIG__.AIRTABLE_BASE_ID || envBaseId;
}

// CommonJS compatibility
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
}

export default config;
