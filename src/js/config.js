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

export default config;