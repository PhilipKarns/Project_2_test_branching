// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// Then reference our connection to the DB.
var sequelize_connection = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
// .define : Defines map between model and table.  Using define
var Chirp = sequelize_connection.define("chirp", {
  author: {
    type: Sequelize.STRING
  },
  body: {
    type: Sequelize.STRING
  },
  created_at: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});

// Syncs with DB
Chirp.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Chirp;