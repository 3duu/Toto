package br.com.duti.petlife.models;

public enum State {
	SP("SP", "São Paulo"),
    RJ("RJ", "Rio de Janeiro"),
    MG("MG", "Minas Gerais"),
    PE("PE", "Pernambuco"),
    BA("BA", "Bahia"),
    SC("SC", "Santa Catarina"),
    RS("RS", "Rio Grande do Sul"),
    PR("PR", "Paraná"),
    CE("CE", "Ceará"),
    PI("PI", "Piauí"),
    GO("GO", "Gaoiás"),
    MT("MT", "Mato Grosso"),
    PA("PA", "Pará"),
    AM("AM", "Amazonas"),
    AP("AP", "Amapá"),
    AL("AL", "Alagoas"),
    PB("PB", "Paraíba"),
    RO("RO", "Rondônia"),
    RR("RR", "Raraima"),
    RN("RN", "Rio Grande do Norte"),
    ES("ES", "Espirito Santo"),
    DF("DF", "Distrito Federal"),
    AC("AC", "Acre"),
    MA("MA", "Maranhão"),
    SE("SE", "Sergipe"),
    TO("TO", "Tocantins"),
    MS("MS", "Mato Grosso do Sul");
	
	private final String name;
	private final String uf;
	
	State(String name, String uf){
		this.name = name;
		this.uf = uf;
	}

	public String getName() {
		return name;
	}

	public String getUf() {
		return uf;
	}


}
