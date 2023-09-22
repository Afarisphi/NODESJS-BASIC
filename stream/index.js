const path = require('path');
const fs = require('fs');

const pathx = path.resolve(__dirname, 'input.txt');
const pathy = path.resolve(__dirname, 'output.txt');

const readableStream = fs.createReadStream(pathx, {
  highWaterMark: 10
});

const writableStream = fs.createWriteStream(pathy);
readableStream.on('readable', () => {
  try {
    //process.stdout.write(`[${readableStream.read()}] \n`);
    writableStream.write(`${readableStream.read()} \n`);
  } catch (error) {
    // catch the error when the chunk cannot be read.
  }
});

readableStream.on('end', () => {
  console.log('Done');
});