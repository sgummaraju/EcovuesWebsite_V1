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
define(['../accUtils', "knockout", 'jquery', "ojs/ojbootstrap", "ojs/ojarraydataprovider", "ojs/ojswitcher", "ojs/ojselectsingle"],
  function (accUtils, ko, $, ojbootstrap_1, ArrayDataProvider) {
    function AboutViewModel(context) {
      var self = this;

      var letter = context.params.source;
      console.log("letter: " + letter);

      self.selectedItem = ko.observable("");

      if (letter == "products") {
        self.selectedItem("videos");
      }
      else {
        self.selectedItem("home");
      }



      this.buttonValue = ko.observable("onevue");
      self.regions = [

        { value: "onevue", label: "Onevue Application" },
        { value: "supplier", label: "Supplier Application" }
      ];
      self.regionslist = new ArrayDataProvider(self.regions, {
        keyAttributes: "value",
      });

    }
    return AboutViewModel;
  }
);
