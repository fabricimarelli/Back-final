# API Rest - Users

## Sobre que trata?

El proyecto consiste en una simple "Rest API" para gestionar usuarios, con los verbos http "get, post, put y delete"

## Tecnologia utilizada

-Node.js
-Express
-Mongoose

## Como ejecutar el proyecto

1. Clonar el proyecto:
```sh
git clone https://github.com/matiasvirgili/Users-Rest-Node
```

2. Abir la carpeta, crear y confiugrar las variables de entorno en `.env`, podes ver el ejemplo de `.env.example` como guia.
3. Instalar los packages y correr el proyecto
```sh
npm install
npm start
```
4. Abrir la url del localhost con el puerto asignado en " .env". Ej: localhost:9999

## Desarrollo en Vercel


## Especificaciones API 
### Get users
`GET /users/`

Podes usar esta consulta:
```sh
/users?name=(nnombre a buscar en users)
/users?lastName=(apellido a buscar en users)
/users?telephone=(telefono a buscar en users)
/users?direction=(direccion a buscar en users)
/users?dni=(DNI a buscar)
```

### Get user by id
`GET /users/:usersId`

ex: /users/615dfd72a5b90ed6106bb2cb

### Add o modify user 

Add:
```sh
POST /users/
```
Modify
```sh
PUT /users/:usersId
```

Para agregar o modificar usuarios son necesarios los siguientes campos:

```
{
    "name": "Fabrizio",
    "lastName": "Cimarelli",
    "telephone": "22222222",
    "direction": "Balcarce 5454",
    "dni" : "42588888"
}
```
### Delete user

`DELETE /users/:usersId`


