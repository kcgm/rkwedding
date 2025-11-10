require('dotenv').config();
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/js/rsvp.js',
  output: {
    filename: 'rsvp.bundle.js',
    path: path.resolve(__dirname, '/src/js/dist'),
    clean: true, 
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.AIRTABLE_API_KEY': JSON.stringify(process.env.AIRTABLE_API_KEY),
      'process.env.AIRTABLE_BASE_ID': JSON.stringify(process.env.AIRTABLE_BASE_ID),
    }),
  ],
};
