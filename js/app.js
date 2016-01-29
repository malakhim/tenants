(function(){
  var app = angular.module("tenant-app",[]);
  var searchOptions = [
  {desc: "Start Date",hint: "Enter start date in DD-MM-YYYY format"},
  {desc: "End Date",hint: "Enter start date in DD-MM-YYYY format"}
  ];

  app.controller("TenantController",function(){
    this.searchOptions = searchOptions;
    this.tenants = [
      {
        name: 'Bob Brown'
      },{
        name: 'Jennie White'
      },{
        name: 'Cassandra Blue'
      }];
  });

  app.controller("InspectionController",function(){
    this.inspection = {};

    this.updateInspect = function(status){

    }
  });

  app.controller("ModalController",function(){
    this.tab = 1;

    this.selectTab = function(setTab){
      this.tab = setTab;
    };

    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });




})();