package br.com.duti.petlife.models;

public enum AppointmentExecutionFrequency {
	
	ONCE(0),
	DAILY_BASIS(1),
	WEEKDAY(2),
	WEEKEND(3);
	
	private final int value;
	
	AppointmentExecutionFrequency(int value){
		this.value = value;
	}

	public int getValue() {
		return value;
	}
}
