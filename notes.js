const fs = require("fs");

const getNotes = function(){
    return "returning notes .....";
}

const addNote = function(title, note){
    fs.writeFileSync("./Notes/"+title+".txt", note);
}

module.exports= {getNotes, addNote};