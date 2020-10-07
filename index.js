const fastcsv = require('fast-csv');
const fs=require('fs')
const ws = fs.createWriteStream("out.csv");

const { db } = require('./firebase.js')


const dataArray=[]

db.collection('records').get().then((snapshot)=>{
    snapshot.docs.forEach(docs=>{
        dataArray.push(docs.data())
        // console.log(docs.data())
        // console.log(typeof(docs.data()))
    })

    console.log(dataArray)
    fastcsv.write(dataArray, { headers: true }).pipe(ws);
 
}).catch((error)=>console.log(error))

