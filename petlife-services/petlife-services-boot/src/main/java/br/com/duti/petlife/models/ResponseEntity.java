package br.com.duti.petlife.models;

import java.io.Serializable;
import java.util.Date;

public class ResponseEntity<T> implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private final String sid;
	
	public ResponseEntity(T entity, final String sid) {
		this.sid = sid;
		this.entity = entity;
		setDate(new Date());
	}
	
	private int code;
	
	private Object entity;
	
	private Date date;

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

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}


}
