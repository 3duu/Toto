package br.com.duti.petlife.models;

import java.io.Serializable;

public class ResponseEntity<T> implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public ResponseEntity(T entity) {
		this.entity = entity;
	}
	
	private int errorCode;
	
	private Object entity;

	public int getErrorCode() {
		return errorCode;
	}

	public void setErrorCode(int errorCode) {
		this.errorCode = errorCode;
	}

	public Object getEntity() {
		return entity;
	}


}
