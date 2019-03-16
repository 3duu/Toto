package br.com.duti.petlife.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

public abstract class GenericRepository {
	
	@PersistenceContext
	private EntityManager manager;
	
	protected final EntityManager getEntityManager() {
		return this.manager;
	}
}
