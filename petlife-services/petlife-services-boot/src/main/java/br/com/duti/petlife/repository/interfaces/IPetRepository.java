package br.com.duti.petlife.repository.interfaces;

import java.util.List;

import br.com.duti.petlife.models.Pet;

public interface IPetRepository {

	List<Pet> getByUser(Long userId);

	Pet insert(Pet pet);

	void delete(Pet pet);

}
