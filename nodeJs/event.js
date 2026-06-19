//  Event Emitter

// const events = require('events');
// let Emitter = new events.EventEmitter();

// function hello(){
//     console.log("Emmitted");
// }

// Emitter.on("by", hello);

// Emitter.emit("by");


//  Stream


const fs = require('fs');

// const readableStream = fs.createReadStream("index.txt", "utf-8");
// const writableStream = fs.createWriteStream("output.txt");

// readableStream.pipe(writableStream);

// readableStream.on("finish", ()=>{console.log("Task Finished")});
// writableStream.on("finish", ()=>{console.log("Heloo")});
// readableStream.on("error", (err)=>{console.log("Readable Error occured", err)})
// writableStream.on("error", (err)=>{console.log("Writable Error", err)})

const readableStream = fs.createReadStream("index.txt", { encoding: "utf-8", highWaterMark: 64 * 1024 })

// readableStream.on("data", (chunk)=>{
//     console.log("Length of chunk:",chunk.length)
//     console.log(chunk);
// })
// readableStream.on("end", ()=>{
//     console.log("Ended");
// })
// readableStream.on("error", (err)=>{
//     console.log("Error occured", err)
// })

// readableStream.on("readable", ()=>{
//     let chunk;
//     while(null!==(chunk=readableStream.read())){
//         console.log("Length:", chunk.length)
//         console.log(chunk);
//     }
// })

// Creating a Writable Stream
const writableStream = fs.createWriteStream("output.txt")

// writableStream.write("vivek");
// writableStream.write("Kumar");

// writableStream.end();

// writableStream.on("finish", ()=>{console.log("finished")})
// writableStream.on("error", (err)=>{console.log(err)})

// Handling Backpressure

// function writeData() {
//     let i = 100;
//     function write() {
//         let ok = true;
//         do {
//             i--;
//             if (i == 0) {
//                 writableStream.write("last chunk\n");
//                 writableStream.end();
//             } else {
//                 let data = `Chunk: ${i}`;
//                 // writableStream.write(data);
//                 ok = writableStream.write(data+"\n");
//             }
//         } while (i > 0 && ok);

//         if (i > 0) {
//             writableStream.once("drain", write);
//         }
//     }
//     write();
// }

// writeData();
// writableStream.on("finish", ()=>{console.log("DONE")})


//  PIPE
//........//

// Chaining  Pipes

const glib = require("zlib");

fs.createReadStream("index.txt")
.pipe(glib.createGzip())
.pipe(fs.createWriteStream("destination.txt.gz")).
on("finish", () => { console.log("Task Completed") })