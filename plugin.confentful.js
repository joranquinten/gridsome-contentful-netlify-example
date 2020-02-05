module.exports = {
  use: "@gridsome/source-contentful",
  options: {
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    host: process.env.CONTENTFUL_HOST,
    environment: "master",
    typeName: "Contentful"
  }
};
