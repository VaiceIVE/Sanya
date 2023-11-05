import db from '../db.js';

class NoteController {

  async createNote(req, res) {
    const {id, title, description, date, color_id} = req.body;
    const newNote = await db.query(
      `INSERT INTO note (id, title, description, date, color_id) values ($1, $2, $3, $4, $5) RETURNING *`
    , [id, title, description, date, color_id]);
    return res.json(newNote.rows[0]);
  }

  async deleteNote(req, res) {
    const id = req.params.id;
    const note = await db.query('DELETE FROM note WHERE id = $1', [id]);
    return res.json(note.rows);
  }

  async updateNote(req, res) {
    const {id, title, description, date, color_id} = req.body;
    const note = await db.query(
      `UPDATE note set title = $2, description = $3, date = $4, color_id = $5 WHERE id = $1 RETURNING *`
    , [id, title, description, date, color_id]);
    return res.json(note.rows[0]);
  }

  async getNotes(_req, res) {
    const notes  = await db.query(
      `
        SELECT 
          N. "id", N. "title", N. "description", N. "date", C. "code" 
        FROM 
          "note" N
        LEFT JOIN
          "color" C ON
            (C."color_id" = N."color_id")
      `
    );
    const convertedNotes = notes.rows.map(note => (
      {
      ...note,
      color: {code: note.code}
      }))
    convertedNotes.map(note => delete note.code);
    return res.json(convertedNotes);
  }
}


export default new NoteController();