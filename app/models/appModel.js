"use strict";
var sql = require("./db.js");

/*---------------------------------------------------------------------------*
| Contact constructor()                                                      |
*---------------------------------------------------------------------------*/
var Contact = function(contact) {
  this.name = contact.name;
  this.surname = contact.surname;
  this.age = contact.age;
  this.birth_date = contact.birth_date;
};

/*---------------------------------------------------------------------------*
| createContact()                                                            |
*---------------------------------------------------------------------------*/
Contact.createContact = function createContact(newContact, result) {
  sql.query("insert into contacts set ?", newContact, function(err, res) {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
    } else {
      console.log("Contact id: ", res.insertId);
      result(null, res.insertId);
    }
  });
};

/*---------------------------------------------------------------------------*
| getContactById()                                                           |
*---------------------------------------------------------------------------*/
Contact.getContactById = function getContactById(contactId, result) {
  sql.query("select * from contacts where id = ?", contactId, function(err, res) {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
    } else {
      console.log("Contact: ", res);
      result(null, res);
    }
  });
};

/*---------------------------------------------------------------------------*
| getAllContacts()                                                           |
*---------------------------------------------------------------------------*/
Contact.getAllContacts = function getAllContacts(result) {
  sql.query("select * from contacts", function(err, res) {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
    } else {
      console.log("Contacts: ", res);
      result(null, res);
    }
  });
};

/*---------------------------------------------------------------------------*
| updateById()                                                               |
*---------------------------------------------------------------------------*/
Contact.updateById = function(id, contact, result) {
  sql.query("update contacts set name = ? where id = ?", [contact.name, id], function(err, res) {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
    } else {
      console.log("Contact: ", res);
      result(null, res);
    }
  });
};

/*---------------------------------------------------------------------------*
| remove()                                                                   |
*---------------------------------------------------------------------------*/
Contact.remove = function(id, result) {
  sql.query("delete from contacts where id = ?", [id], function(err, res) {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
    } else {
      console.log("Contact: ", res);
      result(null, res);
    }
  });
};

module.exports = Contact;
