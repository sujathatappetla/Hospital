const conn = require('./db');

function insertAppointment(data, callback) {
  const { name, email, date, selectfield } = data;

  const sql = "INSERT INTO appointmnet (name, email, date, selectedfield) VALUES (?, ?, ?, ?)";
  
  conn.query(sql, [name, email, date, selectfield], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
}

module.exports = insertAppointment;
