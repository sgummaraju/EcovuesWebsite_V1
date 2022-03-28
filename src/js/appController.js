/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your application specific code will go here
 */
define(['knockout', 'ojs/ojcontext', 'ojs/ojmodule-element-utils', 'ojs/ojresponsiveutils', 'ojs/ojresponsiveknockoututils', 'ojs/ojcorerouter', 'ojs/ojmodulerouter-adapter', 'ojs/ojknockoutrouteradapter', 'ojs/ojurlparamadapter', 'ojs/ojarraydataprovider', 'ojs/ojknockouttemplateutils', 'ojs/ojmodule-element', 'ojs/ojknockout'],
  function (ko, Context, moduleUtils, ResponsiveUtils, ResponsiveKnockoutUtils, CoreRouter, ModuleRouterAdapter, KnockoutRouterAdapter, UrlParamAdapter, ArrayDataProvider, KnockoutTemplateUtils) {

    function ControllerViewModel() {



      this.KnockoutTemplateUtils = KnockoutTemplateUtils;

      // Handle announcements sent when pages change, for Accessibility.
      this.manner = ko.observable('polite');
      this.message = ko.observable();

      announcementHandler = (event) => {
        this.message(event.detail.message);
        this.manner(event.detail.manner);
      };

      document.getElementById('globalBody').addEventListener('announce', announcementHandler, false);

      // Media queries for repsonsive layouts
      const smQuery = ResponsiveUtils.getFrameworkQuery(ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
      this.smScreen = ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

      let navData = [
        { path: '', redirect: 'home' },
        { path: 'productdetails', detail: { label: 'Productdetails', iconClass: '' } },
        { path: 'contact', detail: { label: 'Contact Us', iconClass: '' } },
        { path: 'home', detail: { label: 'Home', iconClass: '' } },
        { path: 'product', detail: { label: 'Products', iconClass: '' } },
        { path: 'solutions', detail: { label: 'Solutions', iconClass: "" } },
        { path: 'services', detail: { label: 'Services', iconClass: '' } },
        { path: 'customers', detail: { label: 'Customers', iconClass: '' } },
        { path: 'careers', detail: { label: 'Careers', iconClass: '' } },
        { path: 'about', detail: { label: 'About Us', iconClass: '' } },

        // { path: 'onevue', detail: { label: 'onevue', iconClass: '' } },              

        // { path: 'blog', detail: { label: 'Testing ', iconClass: '' } }
      ];
      // Router setup
      let router = new CoreRouter(navData, {
        urlAdapter: new UrlParamAdapter()
      });
      router.sync();

      this.moduleAdapter = new ModuleRouterAdapter(router);

      this.selection = new KnockoutRouterAdapter(router);

      // Setup the navDataProvider with the routes, excluding the first redirected
      // route.
      this.navDataProvider = new ArrayDataProvider(navData.slice(3), { keyAttributes: "path" });

      // Header
      // Application Name used in Branding Area
      this.appName = ko.observable("App Name");
      // User Info used in Global Navigation area
      this.userLogin = ko.observable("john.hancock@oracle.com");
      let i = 0;
      this.invokeContact = function () {
        console.log("Contact"+i);
        if (i != 0) {
          router.go({ path: 'contact' }).then(function () { });
          document.querySelector('#contactusdialog').open();
        }
        i++;
      };

      let j=0;
      this.invokeproducts = function () {
        console.log("Contact"+i);
        if (j != 0) {
          router.go({ path: 'product' }).then(function () { });
        }
        j++;
      };

      let k=0;
      this.invokesolutions = function () {
        console.log("Contact"+i);
        if (k != 0) {
          router.go({ path: 'solutions' }).then(function () { });
        }
        k++;
      };
     
      let a=0;
      this.invokeservices = function () {
        if (a != 0) {
          router.go({ path: 'services' }).then(function () { });
        }
        a++;
      };
     
      let b=0;
      this.invokecustomers = function () {
        if (b != 0) {
          router.go({ path: 'customers' }).then(function () { });
        }
        b++;
      };
     
      let c=0;
      this.invokecareers = function () {
        if (c != 0) {
          router.go({ path: 'careers' }).then(function () { });
        }
        c++;
      };
     
      let d=0;
      this.invokeaboutus = function () {
        if ( d != 0) {
          router.go({ path: 'about' }).then(function () { });
        }
        d++;
      };
     
      // Footer
      this.footerLinks = [
        { name: 'About Oracle', linkId: 'aboutOracle', linkTarget: 'http://www.oracle.com/us/corporate/index.html#menu-about' },
        { name: "Contact Us", id: "contactUs", linkTarget: "http://www.oracle.com/us/corporate/contact/index.html" },
        { name: "Legal Notices", id: "legalNotices", linkTarget: "http://www.oracle.com/us/legal/index.html" },
        { name: "Terms Of Use", id: "termsOfUse", linkTarget: "http://www.oracle.com/us/legal/terms/index.html" },
        { name: "Your Privacy Rights", id: "yourPrivacyRights", linkTarget: "http://www.oracle.com/us/legal/privacy/index.html" },
      ];
    }

    // release the application bootstrap busy state
    Context.getPageContext().getBusyContext().applicationBootstrapComplete();

    return new ControllerViewModel();
  }
);
