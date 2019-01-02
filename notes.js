console.log('Starting note.js ...');

var addNote = (title, body) => {
  console.log("adding note", title, body);
};

var getAll = () => {
  console.log("getting all notes")
};

var getNote = (title) => {
  console.log("getting note", title);
};

var removeNote = (title) => {
  console.log('Removing note', title);
};
module.exports = {
  addNote,   //addNote: addNote is also an alternative
  getAll,
  getNote,
  removeNote

}
