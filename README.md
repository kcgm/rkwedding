(Short project README)

Local development and CI secrets
-------------------------------

This project reads Airtable credentials from environment variables at build time. To avoid committing secrets in source:

- In GitHub Actions, the workflow will provide `AIRTABLE_API_KEY` and `AIRTABLE_BASE_ID` from repository Secrets. Add them in:
	Settings → Secrets and variables → Actions → New repository secret

- Locally, for quick testing without build-time environment substitution, you can set the runtime global object before loading the JS bundle in your browser console or a small script on the page:

```html
<script>
	window.__AIRTABLE_CONFIG__ = {
		AIRTABLE_API_KEY: 'your_key_here',
		AIRTABLE_BASE_ID: 'your_base_id_here'
	};
</script>
```

Notes
-----
- The `src/js/config.js` file now reads `process.env.AIRTABLE_API_KEY` and `process.env.AIRTABLE_BASE_ID` at build time (for bundlers that replace those values), and falls back to `window.__AIRTABLE_CONFIG__` at runtime.
- The included GitHub Actions workflow (`.github/workflows/build.yml`) demonstrates injecting the secrets into the environment and running `npm ci` and a `gulp` build if present. Customize the build/deploy steps to match your CI/CD requirements.

