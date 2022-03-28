/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your customer ViewModel code goes here
 */
define(['../accUtils', 'knockout', "ojs/ojbootstrap", "ojs/ojarraydataprovider", "ojs/ojselectsingle"],
  function (accUtils, ko, ojbootstrap_1, ArrayDataProvider,) {
    function CareersViewModel() {
      var self = this;
      this.buttonValue = ko.observable("US");
      self.regions = [
        
        { value: "US", label: "US" },
        { value: "India", label: "India" }

      ];
      self.regionslist = new ArrayDataProvider(self.regions, {
        keyAttributes: "value",
      });
      
    }
    return CareersViewModel;
  }
);
