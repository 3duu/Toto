import { Weekends, WorkingDays } from './../entity/system';
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
    takePicture = "Tire uma foto do seu pet";
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
    animal = "Qual o Pet?";
    addNewPet = "Adicionar Pet";
    welcome = "Bem vindo ao ";
    alreadyHaveAnAccount = "Você já passui uma conta? Clique em ";
    otherWiseClickNext = "Caso contrário clique em ";
    quickAndEasy = "é rápido e fácil!";
    next = "Próximo";
    createWithSomeInfo = "Ou forneça apenas algumas informações";
    appDescription1 = "O jeito mais fácil e completo de cuidar do seu pet.";
    appDescription2 = "Cuide da agenda do seu pet para não perder nenhum compromisso.";
    appDescription3 = "Encontre os melhores serviços com os melhores preços para a sua região.";

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
    noPetsFound = "Você ainda não cadastrou o seu pet!";

    //Tutorial

    addPetTutotial = "Clique aqui para começar a cuidar o seu pet!";

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
        else if(often == AppointmentExecutionFrequency.WORKING_DAY){
            return "Durante a Semana";
        }
        else {
            return this.getAppointmentOften(AppointmentExecutionFrequency.ONCE);
        }
    }

    getWeekend(wknd : Weekends)  {
        if(wknd == Weekends.SUNDAY){
            return "Domingo";
        }
        else if(wknd == Weekends.SATURDAY){
            return "Sábado";
        }
        else {
            return "";
        }
    }

    getWorkingDay(work : WorkingDays)  {
        if(work == WorkingDays.MONDAY){
            return "Segunda-feira";
        }
        else if(work == WorkingDays.TUESDAY){
            return "Terça-feira";
        }
        else if(work == WorkingDays.WEDNESDAY){
            return "Quarta-feira";
        }
        else if(work == WorkingDays.THURSDAY){
            return "Quinta-feira";
        }
        else if(work == WorkingDays.FRIDAY){
            return "Sexta-feira";
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