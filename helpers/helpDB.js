const event =  [
    {
        "id": 1,
        "título": "Introducción a Python",
        "descripción": "Una charla introductoria a Python, uno de los lenguajes de programación más populares.",
        "hora": "10:00 AM",
        "orador": "Juan Pérez",
        "imagen":"",
        "asistentes":[],
        "estado": true
      },
      {
        "id": 2,
        "título": "Desarrollo Web Moderno",
        "descripción": "Explorando las tecnologías clave en el desarrollo web actual.",
        "hora": "11:30 AM",
        "orador": "Luisa Gómez",
        "imagen":"",
        "asistentes":[],
        "estado": true
      },
      {
        "id": 3,
        "título": "Programación Orientada a Objetos",
        "descripción": "Los conceptos fundamentales de la programación orientada a objetos.",
        "hora": "1:00 PM",
        "orador": "Carlos Rodríguez",
        "imagen":"",
        "asistentes":[],
        "estado": true
      },
      {
        "id": 4,
        "título": "Inteligencia Artificial y Machine Learning",
        "descripción": "Una introducción a la IA y el aprendizaje automático en la programación.",
        "hora": "2:30 PM",
        "orador": "Ana Martínez",
        "imagen":"",
        "asistentes":[],
        "estado": true
      },
      {
        "id": 5,
        "título": "Optimización de Código",
        "descripción": "Cómo mejorar el rendimiento y la eficiencia del código fuente.",
        "hora": "4:00 PM",
        "orador": "David López",
        "imagen":"",
        "asistentes":[],
        "estado": true
      }
]; 
const users = [
    { "id": 1, "nombre": "json-server", "password": "typicode","email":"usuario@user.com", "estado": true , "rol": "ADMIN", "avatar":"https://w7.pngwing.com/pngs/254/985/png-transparent-actor-avatar-people-person-profile-user-voice-user-avatar-icon.png" }
]
const rolUser = ["ADMIN", "USER", "SPEAKER"];
const bodyUser = ["ID", "Nombre y Apellido", "Correo", "Rol", "Operaciones"];
const bodyEvent = ["ID", "Imagen", "Titulo", "Descripción", "Hora", "Orador",  "Asistentes", "Operaciones"]; 
export {
    event, users,   
    bodyUser,bodyEvent,
    rolUser
}