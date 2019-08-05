package br.com.duti.petlife.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import br.com.duti.petlife.models.Breed;
import br.com.duti.petlife.repository.interfaces.IBreedsRepository;

@Repository
public class BreedsRepository extends GenericRepository<Breed> implements IBreedsRepository {
	
	private final String GET_TYPES_QUERY = "SELECT b FROM Breed b ORDER BY b.description";
	
	@Override
	public List<Breed> getAll() {
		return getEntityManager().createQuery(GET_TYPES_QUERY, Breed.class)
				.getResultList();
	}
}
