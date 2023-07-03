const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  isDev,
  cors: {
    origin: ['http://localhost:3000'],
  },
  db: {
    uri: 'mongodb+srv://superdev829:tyh9t2JjdBsDGbdB@cluster0.mi39ol5.mongodb.net/',
    name: 'iMax',
  },
};
