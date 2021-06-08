({
	updateSelectedText : function(component, event, helper) {
		helper.updateSelectedText(component, event);
	},
    
    addDebt : function(component, event, helper){
        console.log('add in child');
        component.getEvent("AddDebtEvent").fire();     
    },
    
    removeDebt : function(component, event, helper){
    	component.getEvent("DeleteDebtEvent").setParams({"indexVar" : component.get("v.rowIndex") }).fire();
    },
})