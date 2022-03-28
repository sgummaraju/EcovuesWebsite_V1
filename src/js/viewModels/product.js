
define(['../accUtils', 'knockout', "ojs/ojarraydataprovider", "ojs/ojbutton", "ojs/ojdialog", 'ojs/ojinputtext'],
  function (accUtils, ko, ArrayDataProvider) {
    function ProductViewModel(context) {
      var self = this;
      self.textVal1 = ko.observable("");
      self.textVal2 = ko.observable("");
      self.name = ko.observable("");
      var router = context.parentRouter;
      self.onevueapp = function () {
        router.go({ path: 'productdetails' }).then(function () { });
      };

      self.oncontactusclick = function () {
        document.querySelector('#modalDialog1').open();
      };

      self.onsrequestdemoclick = function () {
        document.querySelector('#modalDialog1').close();
      };

      this.invokevideo = function () {
          router.go({ path: 'about',params: {"source":"products"}}).then(function () {});
        
      };


    }
    return ProductViewModel;
  }
);
