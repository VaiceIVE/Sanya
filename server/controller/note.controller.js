import db from '../db.js';

class NoteController {

  async createNote(req, res) {
    const {id, title, description, date, color_id, url} = req.body;
    console.log(id, title, description, date, color_id, url)
    //await db.query("SET DATESTYLE TO 'German';")
    const newNote = await db.query(`INSERT INTO note (id, title, description, date, color_id, click_count, url) values ($1, $2, $3, $4, $5, 0, $6) RETURNING *`
    , [id, title, description, date, color_id, url]);
    return res.json(newNote.rows[0]);
  }

  async deleteNote(req, res) {
    const id = req.params.id;
    //await db.query("SET DATESTYLE TO 'German';")
    const note = await db.query('DELETE FROM note WHERE id = $1', [id]);
    return res.json(note.rows);
  }

  async updateNote(req, res) {
    const id = req.params.id;
    const {click_count, count} = req.body;
    if (click_count) {
      //await db.query("SET DATESTYLE TO 'German';")
      const note = await db.query(
        `UPDATE note set click_count = $2 WHERE id = $1 RETURNING *`
      , [id, click_count]);
      return res.json(note.rows[0]);
    }
    else {
      //await db.query("SET DATESTYLE TO 'German';")
      const note = await db.query(
        `UPDATE note set count = $2 WHERE id = $1 RETURNING *`
      , [id, count]);
      return res.json(note.rows[0]);
    } 
  }

  async getNotes(_req, res) {
    //await db.query("SET DATESTYLE TO 'German';")
    const notes  = await db.query(
      `
        SELECT 
          N. "id", N. "title", N. "description", N. "date", C. "code", N. "click_count", N. "url", N. "count"
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
    convertedNotes.map(note => delete note.code);4
    console.log(convertedNotes)
    return res.json(convertedNotes);
  }
}

