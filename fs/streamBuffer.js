const fs = require("fs")

const readStream = fs.createReadStream('test.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('write.txt', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);

    writeStream.write(chunk,(err)=>{
        if(err){
         throw Error(err)
        }
     })
  });


  readStream.on('end', () => {
    console.log('Finished reading');
  });