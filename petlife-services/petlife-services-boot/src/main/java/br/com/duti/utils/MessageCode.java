package br.com.duti.utils;

public enum MessageCode {

	SUCCESS(0),
	NOT_FOUND(-1);
	
	private final int value;
	
	MessageCode(final int value) {
		this.value = value;
	}

	public int getValue() {
		return value;
	}
	
}
