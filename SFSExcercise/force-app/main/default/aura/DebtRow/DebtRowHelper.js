({
	updateSelectedText : function(component, event) {
        var checkboxState = event.getSource().get('v.value');
        var DebtInstance = component.get('v.DebtInstance');
        var selectedRowsCount = component.get('v.selectedRowsCount');
        var selectedRowsSum = component.get('v.selectedRowsSum');
        if(checkboxState === true) {
            component.set('v.selectedRowsCount', selectedRowsCount+1);
            component.set('v.selectedRowsSum', selectedRowsSum+DebtInstance.balance);
        } else {
            component.set('v.selectedRowsCount', selectedRowsCount-1);
            component.set('v.selectedRowsSum', selectedRowsSum-DebtInstance.balance);
        }
	}
})