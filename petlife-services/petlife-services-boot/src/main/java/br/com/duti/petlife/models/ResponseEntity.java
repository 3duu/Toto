package br.com.duti.petlife.models;

import java.io.Serializable;

public class ResponseEntity<T> implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private final String sid;
	
	public ResponseEntity(T entity, final String sid) {
		this.sid = sid;
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

	public String getSid() {
		return sid;
	}


}
