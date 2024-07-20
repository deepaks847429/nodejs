const fs=require("fs");

//fs.writeFileSync("./test.txt", "hey aayu how are you baby?");

//aysnchronus

// //fs.writeFile("./test.txt", "hello aayu.", (err)=>{

// });


// const result=fs.readFileSync("./contacct.txt", "utf-8" );
// console.log(result);

// it append ur file in yopur old file. helps to keep log.
//fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());


// for delete uses unlink
// you can explore nodejs library for various other use case.


// blocking result
const result =fs.readFileSync("contact.txt", "utf-8");
console.log(result);


//non-blocking

fs.readFile("contact.txt", "utf-8", (err, result)=>{})
