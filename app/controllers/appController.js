"use strict";
var Contact = require("../models/appModel.js");

/*---------------------------------------------------------------------------*
| list_all_contacts                                                          |
*---------------------------------------------------------------------------*/
exports.list_all_contacts = function(req, res) {
  Contact.getAllContacts(function(err, contacts) {
    if (err) res.send(err);
    res.send(contacts);
  });
};

/*---------------------------------------------------------------------------*
| create_a_contact                                                           |
*---------------------------------------------------------------------------*/
exports.create_a_contact = function(req, res) {
  var new_contact = new Contact(req.body);
  //Una condizione di controllo
  if (!new_contact.name || !new_contact.surname) {
    res.status(400).send({ error: true, message: "Please provide name/surname" });
  } else {
    Contact.createContact(new_contact, function(err, contact) {
      if (err) res.send(err);
      res.json(contact);
    });
  }
};

/*---------------------------------------------------------------------------*
| read_a_contact                                                             |
*---------------------------------------------------------------------------*/
exports.read_a_contact = function(req, res) {
  Contact.getContactById(req.params.contactId, function(err, contact) {
    if (err) res.send(err);
    res.json(contact);
  });
};

/*---------------------------------------------------------------------------*
| update_a_contact                                                           |
*---------------------------------------------------------------------------*/
exports.update_a_contact = function(req, res) {
  Contact.updateById(req.params.contactId, new Contact(req.body), function(err, contact) {
    if (err) res.send(err);
    res.json(contact);
  });
};

/*---------------------------------------------------------------------------*
| delete_a_contact                                                           |
*---------------------------------------------------------------------------*/
exports.delete_a_contact = function(req, res) {
  Contact.remove(req.params.contactId, function(err, contact) {
    if (err) res.send(err);
    res.json({ message: "Contact successfully deleted" });
  });
};
