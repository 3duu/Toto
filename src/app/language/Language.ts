import { Weekday } from './../entity/system';
import { Injectable } from '@angular/core';
import { PETS_PAGE, HOME_PAGE, WELCOME_PAGE, LOGIN_PAGE } from '../application';
import { AppointmentExecutionFrequency } from '../entity/entities';

@Injectable()
export class LanguageService {

    static readonly PORTUGUESE = 0;
    static readonly ENGLISH = 1;
    static readonly SPANISH = 2;
    init = ["Início","Start","Inicio"];
    login = ["Entrar","Log In","Entrar"];
    myPet = ["Meus Pets", "My Pets", "Mis Mascotas"];
    petInfo = ["Dados do pet", "Pet Information", "Datos de mascotas"];
    about = ["Ajuda","Help", "Ayuda"];
    appointments = ["Compromissos","Appointments","Citas"];
    remindPassword = ["Lembrar","Remember","Recuerda"];
    haveAnAccount = ["Já possui conta?","Have an account?","¿Ya tienes una cuenta?"];
    forgotPassword = ["Esqueceu a senha?", "Forgot your password?", "¿Olvido la contraseña?"];
    signIn = ["Entre","Sign In", "Entrar"];
    signUp = ["Cadastrar", "Register", "Registrarse"];
    register = ["Cadastre-se", "Sign Up", "Registrarse"]
    more = ["mais...","more...", "mas..."];
    connect = ["Conecte", "Connect", "Conectar"];
    favoriteSocialMedia = ["com a sua rede social favorita", "with your favorite social network", "con tu red social favorita"];
    enterYourLogon = ["Ou entre com o seu cadastro", "Or enter your login data", "O ingrese su registro"];
    dontHave = ["Não possui", "Don't you have an", "No tiene"];
    orSocialMediaAccount = ["ou conta em rede social?","or social network account?","o cuenta de red social?"];
    email = ["E-mail", "E-mail", "E-mail"];
    username = ["Nome de Usuário", "Username", "Nombre de Usuario"];
    name = ["Nome", "Name", "Nombre"];
    date = ["Data", "Date", "Fecha"];
    hour = ["Hora","Hour", "Hora"];
    password = ["Senha","Password", "Contraseña"];
    confirmPassword = ["Confirme a senha", "Confirm password", "Confirme la contraseña"];
    logout = ["Sair", "Log Out", "Dejar"];
    createUser = ["Registrar","Register","Registrarse"];
    back = ["Voltar","Back","Volver"];
    createYourAccount = ["Crie sua conta no ", "Create your account on ", "Crea tu cuenta en "];
    age = ["Idade", "Age", "Edad"];
    ok = ["OK","OK","OK"];
    birthDate = ["Nascimento", "Birthday", "Fecha de nacimiento"];
    breed = ["Qual a raça?", "What is the breed?", "¿Que raza?"];
    takePicture = ["Tire uma foto do seu dog","Take a picture of your dog", "Toma una foto de tu perro"];
    description = ["Descrição","Description","Descripción"];
    noAppointmentsClick = ["Sem atividades", "No activities", "No hay actividades"];
    appointmentType = ["Tipo da Atividade", "Activity Type", "Tipo de actividad"];
    appointmentFrequency = ["Frequência", "Often", "frecuencia"];
    view = ["Visualizar", "View", "Vista previa"];
    years = ["anos", "years", "años"];
    year = ["ano", "years", "año"];
    month = ["mês", "month", "mes"];
    months = ["meses", "months", "meses"];
    day = ["dia", "day", "dia"];
    days = ["dias", "days", "dias"];
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