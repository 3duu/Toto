package br.com.duti.utils;

public enum ReturnCode {

	SUCCESS(0),
	NOT_FOUND(-1),
	VALIDATION_ERROR(-2),
	SERVER_ERROR(-3);
	
	private final int value;
	
	ReturnCode(final int value) {
		this.value = value;
	}

	public int getValue() {
		return value;
	}
	
}
