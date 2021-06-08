({
    init: function (cmp, event, helper) {
        try{
            console.log('INIT');
            helper.fetchData(cmp);
        }
        catch(e) {
            console.log(e.stack);
        }
		
    },

    selectAll: function (cmp, event, helper) {
        try{
            helper.selectAllLogic(cmp, event); 
        }
        catch(e) {
            console.log(e.stack);
        }
    },
    
    selectDebtRow: function (cmp, event, helper) {
    	try{
            console.log('In Parent');
            var checkboxState = event.getParam("checkboxState");
            var rowIndex = event.getParam('rowIndex');
            console.log('In Parent checkboxState' + checkboxState);
            var selectedRowsCount = cmp.get('v.selectedRowsCount');
            if(checkboxState)
            	cmp.set('v.selectedRowsCount', selectedRowsCount + 1);
            else
                cmp.set('v.selectedRowsCount', selectedRowsCount - 1);
            
            //var newSelectedBalance = 
            
            //var selectedBalance = cmp.get('v.totalBalance');
            //cmp.set('v.totalBalance', selectedBalance + );
        }
        catch(e) {
            console.log(e.stack);
        } 
	},
    
    addDebt: function (cmp, event, helper) {
        try{
            helper.addrow(cmp, event); 
		}
        catch(e) {
            console.log(e.stack);
        } 
	},
 
    removeDebt: function (cmp, event, helper) {
        try{
            helper.removerow(cmp, event);
        }
        catch(e) {
            console.log(e.stack);
        } 
    },
 
    saveDebt: function (cmp, event, helper) {
        try{
            helper.addToMasterTable(cmp, event);
        }
        catch(e) {
            console.log(e.stack);
        } 
    }
});