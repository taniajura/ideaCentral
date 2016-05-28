sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.ideacentral.controller.App", {
		
		onInit: function () {
			//var oEmployeeModel = new sap.ui.model.json.JSONModel();
			
			//oEmployeeModel.loadData("./model/Employee.json");
/*			oEmployeeModel.setData({
			    firstName: "Peter",
			    lastName: "Pan"
			});*/
			//sap.ui.getCore().setModel(oEmployeeModel, "employee");
		}
		
	});

});