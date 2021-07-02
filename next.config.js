const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  assetPrefix: process.env.GITHUB_PAGES ? '/pokemon-shuzokuchi-quiz-neo' : '',
};
