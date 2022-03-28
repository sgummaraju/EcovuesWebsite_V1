/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your about ViewModel code goes here
 */
define(['../accUtils', "knockout", "ojs/ojbootstrap", "ojs/ojbutton", 'ojs/ojinputtext', "ojs/ojinputnumber",],
  function (accUtils, ko, Bootstrap) {
    function contactViewModel() {
      var self = this;
      self.name = ko.observable("");
      self.submit = () => {
        "hello world"
      }

    }
    return contactViewModel;
  }
);
