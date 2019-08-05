package br.com.duti.petlife.repository.interfaces;

import java.util.List;

import br.com.duti.petlife.models.Breed;

public interface IBreedsRepository {

	List<Breed> getAll();

}
