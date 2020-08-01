const pdfkit = require('pdfkit');
const fs = require('fs');


const createPdf = function(){
const pdfdocument=new pdfkit;
pdfdocument.pipe(fs.createWriteStream("output.pdf"));
pdfdocument.text("hello world").fontSize(25);
pdfdocument.end();
}

    

    



module.exports ={
    createPdf
}