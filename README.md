![Proyecto 6](https://github.com/user-attachments/assets/d030de60-292a-494c-aaaf-2b0021287ec8)
# Proyecto 6: Backend con Autenticación

## Descripción
Este proyecto es una API RESTful construida con Node.js y Express, diseñada para gestionar la autenticación y el manejo de usuarios utilizando JWT (JSON Web Tokens). La aplicación permite el registro, inicio de sesión y acceso a rutas protegidas solo para usuarios autenticados. Está integrada con MongoDB para el almacenamiento de datos de los usuarios.

Este proyecto fue desarrollado con el objetivo de aprender y poner en práctica las mejores prácticas en cuanto a seguridad y autenticación en aplicaciones backend.

## Características principales

Registro de usuarios: Permite crear nuevos usuarios almacenando sus credenciales de manera segura.
Inicio de sesión: Valida las credenciales y genera un token JWT para el acceso a rutas protegidas.
Protección de rutas: Rutas que requieren autenticación están protegidas por middleware que verifica el token JWT.
Actualización de perfil: Los usuarios autenticados pueden ver y actualizar su perfil.
Manejo de errores: Validación de errores comunes como usuarios duplicados, credenciales incorrectas o tokens inválidos/expirados.
Roles de usuario: Posibilidad de definir roles (usuario, administrador) con diferentes niveles de acceso.
CRUD de usuarios (opcional): Funcionalidad para crear, leer, actualizar y eliminar usuarios (si se ha habilitado).
Seguridad mejorada: Las contraseñas se almacenan de manera segura utilizando hashing (bcrypt).
Tecnologías utilizadas
Node.js: Para ejecutar JavaScript en el servidor.
Express: Framework para construir la API de manera eficiente y modular.
MongoDB: Base de datos NoSQL para almacenar los datos de los usuarios.
Mongoose: ODM para interactuar con MongoDB.
JWT (JSON Web Tokens): Para la autenticación segura de usuarios.
bcrypt.js: Para el hash seguro de las contraseñas.
dotenv: Para gestionar variables de entorno.
Postman: Para probar las rutas de la API durante el desarrollo.
Requisitos previos
Node.js (versión 14 o superior)
MongoDB (instancia local o en la nube, como MongoDB Atlas)
