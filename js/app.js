(function(){
  var app = angular.module("tenant-app",[]);
  var searchOptions = [
  {desc: "Start Date",hint: "Enter start date in DD-MM-YYYY format"},
  {desc: "End Date",hint: "Enter start date in DD-MM-YYYY format"}
  ];

  app.controller("TenantController",function(){
    this.searchOptions = searchOptions;
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