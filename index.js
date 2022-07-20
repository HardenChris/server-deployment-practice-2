'use strict';

const server = require('./app.js');
const PORT = process.env.PORT || 3000;

// server.listen(3000, () => {
//   console.log('Server is running');
// });

server.start(PORT);
