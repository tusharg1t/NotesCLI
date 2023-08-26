const notescli_service = require('./notes.js');
const yargs = require('yargs')
//To provide a property in CLI Argument append -- before the property name
//Add commands to yargs add, list, delete

//ADD NOTE
yargs.command({
    command: 'add',
    describe: 'To add a new note',
    builder:{
        title:{
            describe:"title of the note",
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:"the note",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(args){
        console.log("INFO : Adding Your Note. Thank You....");

        notescli_service.addNote(args.title,args.body);
        console.log(
        "Note Added :- "+
        "\nTITLE: "+args.title+
        "\nNOTE: "+args.body);
    }
})

//LIST NOTES
yargs.command({
    command: 'list',
    describe: 'To list all notes',
    handler: function(){
        console.log("Day 1 : Complete Nodejs Course");
        console.log("Day 2 : Do Hands On Projects");
        console.log("Day 3 : Practice Interview Questions");
       
    }
})


//READ NOTE
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler:function(){
        if(yargs.argv.title === 'Day 1'){
            console.log("Complete Nodejs Course");
        }else
        if(yargs.argv.title === 'Day 2'){
            console.log("Do Hands On Projects");
        }else
        if(yargs.argv.title === 'Day 3'){
            console.log("Practice Interview Questions");
        }
    }
})


//REMOVE NOTE
yargs.command({
    command:'remove',
    describe:'remove a note',
    handler:function(){
        console.log("INFO: Removing >> "+yargs.argv.title);
    }
})


//Calling YARGS
yargs.parse();