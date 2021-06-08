public with sharing class GetSFSMasterData {
    
    @AuraEnabled
    public static list<MasterDataWrapper.MasterDataBlock> getMasterData() {
        List<MasterDataWrapper.MasterDataBlock> lstResponseObject = new List<MasterDataWrapper.MasterDataBlock>();
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json');
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        
        // If the request is successful, parse the JSON response.
        if (response.getStatusCode() == 200) {
            // Deserialize the JSON string into collections of primitive data types.
            list<MasterDataWrapper.MasterDataBlock> results = (list<MasterDataWrapper.MasterDataBlock>) JSON.deserialize(response.getBody(), list<MasterDataWrapper.MasterDataBlock>.class);
            System.debug('results:'+results);
            lstResponseObject = results;
        }
        
        return lstResponseObject;
    }
}