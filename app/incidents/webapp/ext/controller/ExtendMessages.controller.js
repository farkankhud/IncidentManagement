sap.ui.define(['sap/ui/core/mvc/ControllerExtension',
	           'sap/m/MessageBox'
], function (ControllerExtension, MessageBox) {
	'use strict';

	return ControllerExtension.extend('ns.incidents.ext.controller.ExtendMessages', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf ns.incidents.ext.controller.ExtendMessages
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},
			editFlow:{
			onAfterSave: function(){
             MessageBox.confirm("Saved successfully");
			}
		}},
		// setPriority: function(oBindingContext, aSelectedContexts) {
        //     console.log("setPriority triggered");
            
        //     // Get the Fiori Elements EditFlow extension API
        //     const oExtensionAPI = this.base.getExtensionAPI();
		// 	const oModel = oExtensionAPI.getModel(); // Get the OData model

        //     // Retrieve ID from the current object page context
        //     const sIncidentID = oBindingContext.getObject().ID;
            
        //     // The Fiori Elements framework passes the object page context directly as oBindingContext
        //     oExtensionAPI.editFlow.invokeAction(
        //         "setPriority", // Use a forward slash for unbound actions
        //         {
        //             model: oModel, 
        //             parameterValues: {
        //                 // ID: sIncidentID,
		// 				urgency_code: 'L'
        //                 // The 'urgency_code' parameter will be prompted via a dialog
        //             },
        //             label: "Set Priority", 
        //             skipParameterDialog: false // Display the dialog to capture remaining parameters
        //         }
        //     )
        //     .then(function(aActionResults) {
        //         sap.m.MessageToast.show("Priority updated successfully!");
        //         oExtensionAPI.refresh(); 
        //     })
        //     .catch(function(oError) {
        //         MessageBox.error("Error setting priority: " + oError.message);
        //     });
        // }

	});
});
