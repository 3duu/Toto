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
	
	private int code;
	
	private Object entity;

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public Object getEntity() {
		return entity;
	}


}
