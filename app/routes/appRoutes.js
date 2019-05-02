"use strict";
module.exports = function(app) {
  var controller = require("../controllers/appController");
  //Tutte le rotte
  app
    .route("/contacts")
    .get(controller.list_all_contacts)
    .post(controller.create_a_contact);
  app
    .route("/contacts/:contactId")
    .get(controller.read_a_contact)
    .put(controller.update_a_contact)
    .delete(controller.delete_a_contact);
};
