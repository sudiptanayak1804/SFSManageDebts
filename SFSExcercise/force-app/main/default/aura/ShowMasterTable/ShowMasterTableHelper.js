({
    fetchData: function (cmp) {
        console.log('in fetch data');
        var action = cmp.get("c.getMasterData");
        action.setCallback(this, function(response) {
            var state = response.getState();
            console.log('state='+state);
            if (state === "SUCCESS") {
                console.log(response.getReturnValue());
                var results = response.getReturnValue();
                cmp.set('v.data', results);
                cmp.set('v.totalRowsCount', results.length);
            }
        });
        $A.enqueueAction(action);		
    },
    
    selectAllLogic: function (component, event) {
        var selectedHeaderCheck = event.getSource().get("v.value");
        var allRows = component.get("v.data");
        var selectedRowsCount = 0;
        var selectedRowsSum = 0;
        for (var indexVar = 0; indexVar < allRows.length; indexVar++) {
            allRows[indexVar].selectedVal = selectedHeaderCheck;
            if(allRows[indexVar].selectedVal) {
                selectedRowsCount++;
            	selectedRowsSum = selectedRowsSum + allRows[indexVar].balance;
            } /*else {
                selectedRowsCount--;
            	selectedRowsSum = selectedRowsSum - allRows[indexVar].balance;
            }*/
        }
        component.set("v.data", allRows);
        component.set('v.selectedRowsCount', selectedRowsCount);
        component.set('v.selectedRowsSum', selectedRowsSum);
    },
    
    addrow: function (component, event) { 
        var RowItemList = component.get("v.data");
        var TotalRow = component.get("v.totalRowsCount");
        RowItemList.push({
            'sobjectType': 'MasterDataWrapper.MasterDataBlock',
            'id': TotalRow + 1,
            'selectedVal': false,
            'creditorName': '',
            'firstName': '',
            'lastName': '',
            'minPaymentPercentage': 0,
            'balance': 0
        });  
        component.set("v.data", RowItemList);
        component.set('v.totalRowsCount', RowItemList.length);
    },
     
    addToMasterTable: function(component, event) {
        console.log('in add validate');
        var isValid = true;
        var allRows = component.get("v.data");
        console.log(allRows);
        for (var indexVar = 0; indexVar < allRows.length; indexVar++) {
            if (allRows[indexVar].creditorName === '' || allRows[indexVar].balance === '') {
                console.log('index:'+indexVar);
                isValid = false;
                alert('Enter Creditor and Balance for row:' + (indexVar + 1));
            }
        }
        if(isValid) {
             alert('Debt rows are validated and added to screen');
        }
        console.log('isValid:'+isValid);
    },
    
    removerow: function (component, event) { 
        console.log('in helper');
        var RowItemList = component.get("v.data");
        var TotalRow = component.get('v.totalRowsCount');
        var index = event.getParam("indexVar");
        var selectedRowsSum = component.get('v.selectedRowsSum');
        var selectedRowsCount = component.get('v.selectedRowsCount');
        
        if(RowItemList[index].selectedVal === true) {
           if(selectedRowsCount>0 && selectedRowsCount !== undefined) {
           	component.set('v.selectedRowsCount', selectedRowsCount - 1);
           }
            if(selectedRowsSum>0 && selectedRowsSum !== undefined) {
                selectedRowsSum = selectedRowsSum - RowItemList[index].balance;
                component.set('v.selectedRowsSum', selectedRowsSum);
            }
        }
        RowItemList.splice(index, 1);
        component.set("v.data", RowItemList);
        component.set('v.totalRowsCount', RowItemList.length);
        
    }
});