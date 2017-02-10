var billCalculator = angular.module("BillCalculator", []);

billCalculator.controller('BillCalculatorController', [
	'$scope', function($scope){
		
		var bc = this;
		
		//attributes
		bc.userPrice = 0;
		bc.taxAmount = 0;
		bc.taxTotal = 0;
		bc.tipAmount = 0;
		bc.totalAmount = 0;
		bc.tenPercentTaxAmount = 0;
		bc.fifteenPercentTaxAmount = 0;
		bc.twentyPercentTaxAmount = 0;
		$scope.bc.selected = {tip: '15'};
		
		
		bc.states = 
		[
		    {
				state_name: "Texas",
				tax_percent: .0825
			},
			{
				state_name: "Alabama",
				tax_percent: .0735
			},
			{
				state_name: "New York",
				tax_percent: .0235
			},
			{
				state_name: "New Mexico",
				tax_percent: .4735
			},
			{
				state_name: "California",
				tax_percent: .0535
			},
			{
				state_name: "Oregon",
				tax_percent: .0323
			},
			{
				state_name: "South Dakota",
				tax_percent: .0235
			},
			{
				state_name: "North Carolina",
				tax_percent: .0955
			},
			{
				state_name: "Oklahoma",
				tax_percent: .0935
			},
			{
			    state_name: "Arkansas",
				tax_percent: .0635
			},
			{
				state_name: "New Jersey",
				tax_percent: .0266
			},	
			{
				state_name: "Florida",
				tax_percent: .0785
			}
		];
		
		$scope.change = function() {
		    $scope.bc.taxAmount = bc.selected_state.tax_percent * $scope.bc.userPrice;
		    $scope.bc.taxTotal = parseFloat($scope.bc.userPrice) + parseFloat($scope.bc.taxAmount);
		    
		    bc.tenPercentTaxAmount = $scope.bc.taxTotal * .10;
		    bc.fifteenPercentTaxAmount = $scope.bc.taxTotal * .15;
		    bc.twentyPercentTaxAmount = $scope.bc.taxTotal * .20;
		    
		    if (bc.selected.tip == "10")
		    {
		        bc.totalAmount = parseFloat($scope.bc.taxTotal) + parseFloat(bc.tenPercentTaxAmount);
		    } else if (bc.selected.tip == "15")
		    {
		        bc.totalAmount = parseFloat($scope.bc.taxTotal) + parseFloat(bc.fifteenPercentTaxAmount);
		    } else if (bc.selected.tip == "20")
		    {
		        bc.totalAmount = parseFloat($scope.bc.taxTotal) + parseFloat(bc.twentyPercentTaxAmount);
		    }
        };
        
	}
]);
