package br.com.duti.petlife.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

@Repository
public abstract class GenericRepository<T,B> {
	
	@PersistenceContext
	private EntityManager manager;
	
	protected final EntityManager getEntityManager() {
		return this.manager;
	}
}
