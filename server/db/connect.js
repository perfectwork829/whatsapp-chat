const { connect } = require('mongoose');
const { isDev, db } = require('../config');

module.exports = async () => {
  try {
    const uri = isDev ? db.uri : db.uri;
    // const uri = isDev ? `mongodb://localhost:27017/${db.name}` : db.uri;
    await connect(uri);

    console.log('database connected');
  } catch (error0) {
    console.log(error0.message);
  }
};
