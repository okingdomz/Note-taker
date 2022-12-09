const fs = require('fs');
const path = require('path');

// pushes new notes to be recordeds in db.json
function noteCreateNewNote(body, noteTakerArray) {
    const note = body;
    noteTakerArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: noteTakerArray
        }, null, 2)
    )
    return note;
}
// note deleting function
function noteDeleteNote(noteTakerArray, id) {
    let deleteID = parseInt(id);
    noteTakerArray.splice(deleteID, 1);
// rewrites indexes for previous notes 
    for (let i = deleteID; i < noteTakerArray.length; i++) {
        noteTakerArray[i].id = i.toString();
    }
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: noteTakerArray
        }, null, 2)
    )
}

module.exports = {
    noteCreateNewNote,
    noteDeleteNote
};