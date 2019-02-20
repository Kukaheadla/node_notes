console.log('Starting note.js ...');
const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesStr = fs.readFileSync('notes-data.json');
    return JSON.parse(notesStr);
  } catch(e){
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  }

  var dupNotes = notes.filter((note) => note.title === title);

  if (dupNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  console.log("getting all notes")
};

var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNote = notes.filter((note) => note.title === title);
  return filteredNote[0];
};

var removeNote = (title) => {
  //fetch notes
  var notes = fetchNotes();
  //To filter notes, removing the one with title of the argument
  var filteredNotes = notes.filter((note) => note.title !== title);
  //save new notes array
  saveNotes(filteredNotes);
  return notes.length != filteredNotes.length;
};
module.exports = {
  addNote,   //addNote: addNote is also an alternative
  getAll,
  getNote,
  removeNote

}
