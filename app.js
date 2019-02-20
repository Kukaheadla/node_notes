console.log('Starting app...\n');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ', command);
// console.log('Process:', process.argv);
console.log('Yargs:', argv);

if(command == 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if(note){
    console.log("Note Created");
    console.log("-----");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log("Note title Taken :/");
    console.log("-----");
  }
} else if (command == 'list'){
  notes.getAll();
} else if (command == 'read'){
  var note = notes.getNote(argv.title);
  if(note){
    console.log("Note Found");
    console.log("-----");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log("Note not found");
  }
}else if (command == 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note removed': 'Note not found';
  console.log(message);
} else {
  console.log('command not recognized');
}
