const router = require('express').Router();
const fs = require('fs');
const db = require('../../db/db.json');
const path = require('path');
const {v4:uuidv4} = require('uuid');
// routes notes to db.json folder
const { 
    notes
} = require('../../db/db.json');
// create and deleting notes
const {
    notesCreateNewNote,
    noteDeleteNote
} = require('../../library/noteFunc.js');
// saving notes to db.json
router.get('/notes', (req, res) => {
    // let saved = notes;
    // i had res.join instead of res.json
    res.json(db);
});

router.post('/notes', (req, res) => {

    // notes length is an error
    // req.body.id = notes.length.toString();
    let postNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    }
    db.push(postNote);
    fs.writeFile(path.join(__dirname, "../../db/db.json"),
    JSON.stringify(db, null, 2),
    (err) => {
        if (err)throw err;
        res.json(postNote); 
    })
    // let note = notesCreateNewNote(req.body, notes);
    // res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    noteDeleteNote(notes, req.params.id);
    res.json(notes);
})

module.exports = router;