# Proyecto 6: Backend con Autenticación

## Descripción
Este proyecto es una aplicación backend que implementa un sistema de autenticación de usuarios utilizando Node.js y Express. Se desarrolló con la finalidad de manejar el registro, inicio de sesión y gestión de usuarios de manera segura y eficiente. La autenticación se realiza mediante JWT (JSON Web Tokens) para proteger los endpoints de la API.

## Características
Registro de usuarios: Los nuevos usuarios pueden registrarse proporcionando su información básica.
Inicio de sesión: Autenticación con credenciales de usuario, generando un token JWT para acceder a recursos protegidos.
Protección de rutas: Algunas rutas de la API solo son accesibles con un token JWT válido.
Manejo de errores: Respuesta adecuada a errores comunes, como credenciales inválidas o tokens expirados.
Tecnologías utilizadas
Node.js: Entorno de ejecución de JavaScript para el backend.
Express: Framework web para Node.js.
JWT: JSON Web Tokens para autenticación basada en tokens.
MongoDB: Base de datos NoSQL para el almacenamiento de usuarios.
Mongoose: ODM para trabajar con MongoDB en Node.js.
