import { Weekday } from './../entity/system';
import { Injectable } from '@angular/core';
import { PETS_PAGE, HOME_PAGE, WELCOME_PAGE, LOGIN_PAGE } from '../application';
import { AppointmentExecutionFrequency } from '../entity/entities';

@Injectable()
export class LanguageService {

    adoptions = "Adoção";
    init = "Início";
    login = "Entrar";
    myPet = "Meus Pets";
    petInfo = "Dados do pet";
    about = "Ajuda";
    appointments = "Compromissos";
    remindPassword = "Lembrar";
    haveAnAccount = "Já possui conta?";
    forgotPassword = "Esqueceu a senha?";
    signIn = "Entre";
    signUp = "Cadastrar";
    register = "Cadastre-se";
    more = "mais...";
    connect = "Conecte";
    favoriteSocialMedia = "com a sua rede social favorita";
    enterYourLogon = "Ou entre com o seu cadastro";
    dontHave = "Não possui";
    orSocialMediaAccount = "ou conta em rede social?";
    email = "E-mail";
    username = "E-mail";
    name = "Nome";
    date = "Data";
    hour = "Hora";
    password = "Senha";
    confirmPassword = "Confirme a senha";
    logout = "Sair";
    createUser = "Registrar";
    back = "Voltar";
    createYourAccount = "Crie sua conta no ";
    age = "Idade";
    ok = "OK";
    petType = "Animal";
    birthDate = "Nascimento";
    breed = "Qual a raça?";
    takePicture = "Tire uma foto do seu dog";
    description = "Descrição";
    noAppointmentsClick = "Sem compromissos.";
    appointmentType = "Tipo do Compromisso";
    appointmentFrequency = "Frequência";
    view = "Visualizar";
    years = "anos";
    year = "ano";
    month = "mês";
    months = "meses";
    day = "dia";
    days = "dias";
    //animal = "Qual o Pet?";
    addNewPet = "Adicionar Dog";
    welcome = "Bem vindo ao ";
    alreadyHaveAnAccount = "Você já passui uma conta? Clique em ";
    otherWiseClickNext = "Caso contrário clique em ";
    quickAndEasy = "é rápido e fácil!";
    next = "Próximo";
    createWithSomeInfo = "Ou forneça apenas algumas informações";
    appDescription1 = "Mantenha uma vida saudável ao lado do seu dog.";
    appDescription2 = "Obtenha dicas selecionadas de acordo com o seu perfil e do seu dog.";
    appDescription3 = "Cuide da agenda do seu dog para não perder nenhum compromisso.";

    //Messages
    connectionError = "Algo deu errado! \n Verifique se o dispositivo está conectado ou tente novamente mais tarde";
    serverError = "Algo inesperado aconteceu! \n Se o problema persistir reporte o problema";
    invalidUserPassword = "Usuário ou senha inválido(s)";
    requiredFields = "Preencha o(s) campo(s) obrigatório(s)";
    usernameExists = "Usuário já cadastrado no sistema";
    validateDataError = "Erro ao validar os dados";
    retrieveDataError = "Erro ao obter dados";
    registerSuccess = "Usuário registrado com sucsso";
    invalidEmailAddress = "Forneça um endereço de e-mail válido";
    invalidPassword = "Senha deve conter pelo menos :min caracteres";
    passwordDoesntMatch = "Confirmação de senha não corresponde com senha";
    noPetsFound = "Você ainda não cadastrou o seu dog!";

    //Tutorial
    addPetTutotial = "Clique aqui para começar a se exercitar com o seu dog!";

    links : Links = new Links();

    getAppointmentOften(often : AppointmentExecutionFrequency)  {
        if(often == AppointmentExecutionFrequency.DAILY_BASIS){
            return "Diáriamente";
        }
        else if(often == AppointmentExecutionFrequency.ONCE){
            return "Uma vez";
        }
        else if(often == AppointmentExecutionFrequency.WEEKEND){
            return "Finais de Semanas";
        }
        else if(often == AppointmentExecutionFrequency.WEEKDAY){
            return "Durante a Semana";
        }
        else {
            return this.getAppointmentOften(AppointmentExecutionFrequency.ONCE);
        }
    }

    getWeekday(work : Weekday)  {
        if(work == Weekday.MONDAY){
            return "Segunda-feira";
        }
        else if(work == Weekday.TUESDAY){
            return "Terça-feira";
        }
        else if(work == Weekday.WEDNESDAY){
            return "Quarta-feira";
        }
        else if(work == Weekday.THURSDAY){
            return "Quinta-feira";
        }
        else if(work == Weekday.FRIDAY){
            return "Sexta-feira";
        }
        else if(work == Weekday.SATURDAY){
            return "Sábado";
        }
        else if(work == Weekday.SUNDAY){
            return "Domingo";
        }
        else {
            return "";
        }
    }
}

export class Links {
    pets = PETS_PAGE;
    home = HOME_PAGE;
    welcome = WELCOME_PAGE;
    login = LOGIN_PAGE;
  }