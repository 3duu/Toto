package br.com.duti.petlife.models;

import java.io.Serializable;
import java.util.Date;

public class ResponseEntity<T> implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public ResponseEntity(T data, final String sid) {
		this.sid = sid;
		this.data = data;
		this.date = new Date();
	}
	
	private int code;
	private final String sid;
	private final Object data;
	private final Date date;

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public Object getData() {
		return data;
	}

	public String getSid() {
		return sid;
	}

	public Date getDate() {
		return date;
	}

}
