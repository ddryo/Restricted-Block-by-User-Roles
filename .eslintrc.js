const defaultConfig = require("@wordpress/scripts/config/.eslintrc.js");

module.exports = {
  ...defaultConfig, //@wordpress/scriptを引き継ぐ
  rules: {
    "require-jsdoc": "off", //Docコメントなくてもエラーにしない
    "valid-jsdoc": "off", //Docコメントの書き方についてとやかくいわせない
    "jsdoc/require-param": "off", //Docコメントなくてもエラーにしない
    "jsdoc/require-param-type": "off" //Docコメントの書き方についてとやかくいわせない
  }
};
