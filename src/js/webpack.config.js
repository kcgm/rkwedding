const path = require("path");
const webpack = require("webpack");
require("dotenv").config();

module.exports = {
  mode: "production",
  entry: "./rsvp.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.AIRTABLE_API_KEY": JSON.stringify(process.env.AIRTABLE_API_KEY),
      "process.env.AIRTABLE_BASE_ID": JSON.stringify(process.env.AIRTABLE_BASE_ID),
    }),
  ],
};
