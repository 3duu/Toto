package br.com.duti.petlife.repository.interfaces;

import java.util.List;

import br.com.duti.petlife.models.PetType;

public interface IPetTypeRepository {

	List<PetType> getAll();

}
