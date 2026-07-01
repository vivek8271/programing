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

// const readableStream = fs.createReadStream("index.txt", { encoding: "utf-8", highWaterMark: 64 * 1024 })

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
// const writableStream = fs.createWriteStream("output.txt")

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

// const glib = require("zlib");

// fs.createReadStream("index.txt")
// .pipe(glib.createGzip())
// .pipe(fs.createWriteStream("destination.txt.gz")).
// on("finish", () => { console.log("Task Completed") })



//  Duplex and Transform Streams

// const net = require("net");
// const server = net.createServer((socket)=>{
//     socket.on("data", (data)=>{
//         console.log("Data received from client:", data.toString());
//         socket.write("Hello from server", data);
//     })

//     socket.on("end", ()=>{
//         console.log("Client disconnected");
//     })
// })
// server.listen(8080, ()=>{
//     console.log("Server listening on port 8080");
// })


//  Buffer

// const buf = Buffer.from("Hello World");
// console.log(buf.toString());
// console.log(buf.toString("hex"));
// console.log(buf[0]);
// console.log(buf.length);

// const buf1 = Buffer.alloc(10);
// console.log(buf1);
// const buf2 = Buffer.allocUnsafe(10);        // Buffer.allocUnsafe() is faster than Buffer.alloc() but can expose sensitive data. Only use it when you understand the security implications and plan to immediately fill the entire buffer.
// console.log(buf2);

// buf2.fill(3);
// console.log(buf2);


// const buf3 = Buffer.from([10,2,3,4,5]);
// console.log(buf3);

// console.log(buf3.toString());

// const buf5 = Buffer.from(buf3);

// console.log(buf5);

// const buf6 = Buffer.alloc(11);                  // Create a buffer of size 11 bytes
// buf6.write("hello");
// console.log(buf6.toString());                   // Convert the entire buffer to a string using UTF-8 encoding
// buf6[5] = 44;
// buf6[6] = 32;
// console.log(buf6);
// buf6.write("Node", 7);                          // Write "Node" starting at index 7
// console.log(buf6.toString());                   // Convert the entire buffer to a string using UTF-8 encoding

// console.log(buf6.toString('utf8', 0, 5));       // Convert the first 5 bytes to a string using UTF-8 encoding
// console.log(String.fromCharCode(buf6[0]));      // Convert the first byte to a character using String.fromCharCode

// let str = "";
// for(const byte of buf6){
//     str+=String.fromCharCode(byte);
// }

// console.log(str);

// const buf7 = Buffer.from("Hello Worldiuhiuhkhhk");

// console.log(Boolean(Buffer.compare(buf6, buf7)));      // Compare buf6 and buf7, returns a negative number if buf6 < buf7, 0 if they are equal, and a positive number if buf6 > buf7

// const buf8 = Buffer.alloc(10);
// buf7.copy(buf8);                                       // Copy the contents of buf7 into buf8, starting at the beginning of buf8
// console.log(buf8.toString());


// const hexbuff = Buffer.from("48656c6c6f20576f726c6421", "hex");  // Create a buffer from a hexadecimal string
// console.log(hexbuff.toString());                   // Convert the buffer to a string using UTF-8 encoding

// const base64Buffer = Buffer.from('SGVsbG8=', 'base64');     // Create a buffer from a Base64-encoded string
// console.log(base64Buffer.toString());

// const buf9 = Buffer.from("Hello World");
// console.log(buf9.includes("World"));                   // Check if buf9 includes the string "World"
// console.log(buf9.indexOf("World"));                    // Get the index of the first occurrence of "World" in buf9
// console.log(buf9.lastIndexOf("o"));                   // Get the index of the last occurrence of "o" in buf9

// Buffer AND Stream

// const { Transform } = require("stream");

// // create a transform stream that process data in chinks and converts it to uppercase
// const transformStream = new Transform({
//         transform(chunk, encoding, callback){
//                 //process each chunk (which is a Buffer)
//                 const processed = chunk.toString().toUpperCase();
//                 this.push(Buffer.from(processed));
//                 callback();
//         }
// })
// const readableStream = fs.createReadStream("index.txt");
// const writableStream = fs.createWriteStream("output.txt");

// // process the file in chunk
// readableStream.pipe(transformStream).pipe(writableStream);

// const buffer = Buffer.from ("Hello! Vivek");

// fs.writeFile("buffer.txt", buffer, (err, data)=>{
//         if(err) throw error;
//         console.log("buffer.txt file creation Successfully");

//         fs.readFile("buffer.txt", (err, fd)=>{
//                 if(err) throw err;
//                 console.log("Byte data: ", fd);
//                 console.log("toStringData: ", fd.toString());

//                 const buf = Buffer.alloc(5);
//                 fs.open("buffer.txt", "r", (err, fd)=>{
//                         if(err) throw err;
//                         console.log("File descriptor: ", fd);
//                         fs.read(fd, buf, 0, 5, 0, (err, bytesRead)=>{
//                                 if(err) throw err;
//                                 console.log("Bytes read: ", bytesRead);
//                                 console.log("Buffer content: ", buf.toString());
//                                 fs.close(fd, (err)=>{
//                                         if(err) throw err;
//                                         console.log("File closed successfully");
//                                 })
//                         })
//                 })
//         })
// })

// class BufferPool {
//         constructor(bufferSize = 1024, poolSize = 100) {
//                 this.bufferSize = bufferSize;
//                 this.pool = Array(poolSize).fill().map(() => Buffer.alloc(bufferSize));
//                 this.used = Array(poolSize).fill(false);
//         }
//         get(){
//                 const index = this.used.indexOf(false);
//                 if(index ===-1){
//                         console.log("pool full");
//                         return Buffer.alloc(this.bufferSize);
//                 }
//                 this.used[index]= true;
//                 return this.pool[index];
//         }

//         release(buffer){
//                 const index = this.pool.indexOf(buffer);
//                 if(index!==-1){
//                         buffer.fill(0);
//                         this.used[index]=false;
//                 }
//         }
// }
// const pool = new BufferPool(10, 3);

// const buf1 = pool.get();
// const buf2 = pool.get();
// const buf3 = pool.get();
// const buf4 = pool.get();

// buf1.write("Hello");
// console.log(buf1.toString());

// pool.release(buf1);

// const buf5 = pool.get();
// console.log(buf5.toString());


const crypto = require("crypto");

// const pass = hash.createHash("sha256").update("vivek").digest("");
// console.log(pass);
// console.log(hash);
// function hashPassword(password) {
//         const salt = crypto.randomBytes(16).toString("hex");
//         const hash = crypto.scryptSync(password, salt, 64).toString("hex");
//         return {salt, hash};
// }

// function verifyPassword(password, salt, hash) {
//         const hashToVerify = crypto.scryptSync(password, salt, 64).toString("hex");
//         return hash===hashToVerify;
// }

// const password = "vivek";
// const {salt, hash} = hashPassword(password);
// console.log("Salt:", salt);
// console.log("Hash:", hash);

// const isValid = verifyPassword(password, salt, hash);
// console.log("Is valid password:", isValid);


// function createSignature(message, key){
//         const hmac = crypto.createHmac("sha256", key);
//         hmac.update(message);
//         return hmac.digest("hex");
// }
// function verifySignature(message, key, signature){
//         const expectedSignature = createSignature(message, key);
//         return crypto.timingSafeEqual(Buffer.from(signature, "hex"), Buffer.from(expectedSignature, "hex"));
// }

// const message = "Hello, this is a secret message!";
// const key = "my_secret_key";
// const signature = createSignature(message, key);
// console.log("Signature:", signature);

// const isValidSignature = verifySignature(message, key, signature);
// console.log("Is valid signature:", isValidSignature);

const stream = require("stream");
// const fs = require("fs");
const readableStream = fs.createReadStream("index.txt", {
        encoding: "utf-8",
        highWaterMark: 64 * 1024
})

readableStream.on("data", (chunk) => {
        const binaryString = chunk.replace(/\s+/g, "");
        const bytes = binaryString.match(/.{1,8}/g);

        if (bytes) {
                const buffer = Buffer.from(bytes.map(b => parseInt(b, 2)));
                console.log(buffer.toString("utf-8"));
        }
        // console.log(chunk)
})