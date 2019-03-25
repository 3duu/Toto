package br.com.duti.petlife.models;

public enum SocialNetworkType {
	
	NONE(0),
	FACEBOOK(1),
	GOOGLE(2),
	TWITTER(3);
	
	private final int value;
	
	SocialNetworkType(int value){
		this.value = value;
	}

	public int getValue() {
		return value;
	}
}
