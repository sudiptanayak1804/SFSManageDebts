public class MasterDataWrapper{
	public list<MasterDataBlock> MasterDataResponse;
	public class MasterDataBlock {
        @AuraEnabled
		public Integer id;	
        @AuraEnabled
		public Boolean selectedVal = false;	
        @AuraEnabled
		public String creditorName;	
        @AuraEnabled
		public String firstName;
        @AuraEnabled
		public String lastName;	
        @AuraEnabled
		public Decimal minPaymentPercentage;
        @AuraEnabled
		public Decimal balance;	
	}
    
	public static MasterDataWrapper parse(String json){
		return (MasterDataWrapper) System.JSON.deserialize(json, MasterDataWrapper.class);
	}
}