var app = angular.module('app', ['ngAnimate', 'ui.bootstrap']);
app.controller("eventcontrol",function($scope) {
	$scope.setindex=-1;
	$scope.events={};
	$scope.event = [];
	$scope.doShow = false;
    $scope.view123 = false;
	$scope.events.starts = new Date();
	$scope.events.ends  = new Date();
	$scope.showform  = true;
	$scope.minDate1 = new Date();
	$scope.minDate2 = new Date();
    $scope.pick = false;
    $scope.picktime  = false;
    $scope.pick1 =false;
    $scope.picktime2 = false;
	$scope.early = false;
  $scope.i=0;
   $scope.maxDate = new Date(2020, 5, 22);

  $scope.validation = function() {
	 $scope.minDate2 = new Date($scope.events.starts);
  };

  
  $scope.open1 = function($event) {
    $scope.status1.opened = true;
  };
  
  
  $scope.open2 = function($event) {
    $scope.status2.opened = true;
  };
  
  
  $scope.status1 = { opened:false };
  $scope.status2 = { opened:false };




$scope.location = ["Bangalore","Mysore","Belgaum","Dharwad","Hubbali","Raichur","Shivamogga","Bidar","Bellari"];



$scope.type = [
{value:"Social",id:"1"},
{value:"Cultural",id:"2"},
{value:"Poltical",id:"3"},
{value:"Sports",id:"4"}
];




$scope.save = function(index) {

if(!$scope.myform.$valid){
$scope.doShow = true;
} else if($scope.myform.date.$pristine) {
$scope.pick = true;
} else if($scope.myform.time.$pristine) {
$scope.pick = false;
$scope.picktime = true;
} else if($scope.myform.date1.$pristine ) {
$scope.pick = false;
$scope.picktime = false;
$scope.pick1 =true;
} else if ($scope.myform.time1.$pristine) {
$scope.pick = false;
$scope.picktime = false;
$scope.pick1 =false;
$scope.picktime2 = true;
} else if ($scope.events.starts>$scope.events.ends) {
$scope.early = true;
} 
else {
$scope.pick = false;
$scope.picktime = false; 
$scope.picktime2 = false;
$scope.doShow = false;
$scope.early = false;
if($scope.setindex==-1) {
$scope.event[$scope.i] = angular.copy($scope.events);
$scope.i = $scope.i+1;
}else {
$scope.event[$scope.setindex] = angular.copy($scope.events);
$scope.setindex = -1;
}

$scope.events.name="";$scope.events.desc="";$scope.events.place="";$scope.events.type="";$scope.events.theme="";
$scope.events.starts = new Date();
$scope.events.ends  = new Date();

}
}; 


$scope.delete = function(index) {
$scope.event.splice(index,1);
};

$scope.edit = function(index,data) {
$scope.events = angular.copy(data);
$scope.setindex = index;
};

$scope.view = function(index) {
$scope.showform  = false;
$scope.view123 = true;
$scope.views = $scope.event[index];
};
$scope.ok = function() {
$scope.showform  = true;
$scope.view123 = false;
};

});