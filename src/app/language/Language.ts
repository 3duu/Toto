import { Injectable } from '@angular/core';
import { PETS_PAGE, HOME_PAGE, WELCOME_PAGE, LOGIN_PAGE } from '../application';
import { AppointmentExecutionFrequency } from '../entity/entities';

@Injectable()
export class LanguageService {

    adoptions : string = "Adoção";
    init : string = "Início";
    login : string = "Entrar";
    myPet : string = "Meus Pets";
    petInfo : string = "Dados do pet";
    about : string = "Ajuda";
    appointments : string = "Compromissos";
    remindPassword : string = "Lembrar";
    haveAnAccount : string = "Já possui conta?";
    forgotPassword : string = "Esqueceu a senha?";
    signIn : string = "Entre";
    signUp : string = "Cadastrar";
    register : string = "Cadastre-se";
    more : string = "mais...";
    connect : string = "Conecte";
    favoriteSocialMedia : string = "com a sua rede social favorita";
    enterYourLogon : string = "Ou entre com o seu cadastro";
    dontHave : string = "Não possui";
    orSocialMediaAccount : string = "ou conta em rede social?";
    email : string = "E-mail";
    username : string = "E-mail";
    name : string = "Nome";
    birthday : string = "Nascimento";
    password : string = "Senha";
    confirmPassword : string = "Confirme a senha";
    logout : string = "Sair";
    createUser : string = "Registrar";
    back : string = "Voltar";
    createYourAccount : string = "Crie sua conta no ";
    age : string = "Idade";
    ok : string = "OK";
    petType : string = "Animal";
    birthDate : string = "Data de Nascimento";
    breed : string = "Qual a raça?";
    takePicture : string = "Tire uma foto do seu pet";
    description : string = "Descrição";
    noAppointmentsClick : string = "Sem compromissos.";
    appointmentType : string = "Tipo do Compromisso";
    appointmentFrequency : string = "Frequência";
    view : string = "Visualizar";
    years : string = "anos";
    year : string = "ano";
    month : string = "mês";
    months : string = "meses";
    day : string = "dia";
    days : string = "dias";
    animal : string = "Qual o Pet?";
    addNewPet : string = "Adicionar Pet";
    welcome : string = "Bem vindo ao ";
    alreadyHaveAnAccount : string = "Você já passui uma conta? Clique em ";
    otherWiseClickNext : string = "Caso contrário clique em ";
    quickAndEasy : string = "é rápido e fácil!";
    next : string = "Próximo";
    createWithSomeInfo = "Ou forneça apenas algumas informações";
    appDescription1 = "O jeito mais fácil e completo de cuidar do seu pet.";
    appDescription2 = "Cuide da agenda do seu pet para não perder nenhum compromisso.";
    appDescription3 = "Encontre os melhores serviços com os melhores preços para a sua região.";

    //Messages
    connectionError : string = "Algo deu errado! \n Verifique se o dispositivo está conectado ou tente novamente mais tarde";
    serverError : string = "Algo inesperado aconteceu! \n Se o problema persistir reporte o problema";
    invalidUserPassword : string = "Usuário ou senha inválido(s)";
    requiredFields : string = "Preencha o(s) campo(s) obrigatório(s)";
    usernameExists : string = "Usuário já cadastrado no sistema";
    validateDataError : string = "Erro ao validar os dados";
    retrieveDataError : string = "Erro ao obter dados";
    registerSuccess : string = "Usuário registrado com sucsso";
    invalidEmailAddress : string = "Forneça um endereço de e-mail válido";
    invalidPassword : string = "Senha deve conter pelo menos :min caracteres";
    passwordDoesntMatch : string = "Confirmação de senha não corresponde com senha";

    //Tutotial

    addPetTutotial : string = "Clique aqui para começar a cuidar o seu pet!";

    links : Links = new Links();

    getAppointmentOften(often : AppointmentExecutionFrequency) : string {
        if(often == AppointmentExecutionFrequency.DAILY_BASIS){
            return "Diáriamente";
        }
        else if(often == AppointmentExecutionFrequency.ONCE){
            return "Uma vez";
        }
        else if(often == AppointmentExecutionFrequency.WEEKEND){
            return "Finais de Semanas";
        }
        else if(often == AppointmentExecutionFrequency.WORKING_DAY){
            return "Durante a Semana";
        }
        else {
            return this.getAppointmentOften(AppointmentExecutionFrequency.ONCE);
        }
    }
}

export class Links {
    pets = PETS_PAGE;
    home = HOME_PAGE;
    welcome = WELCOME_PAGE;
    login = LOGIN_PAGE;
  }