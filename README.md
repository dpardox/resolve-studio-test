# Prueba técnica para Resolve Studio

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 8.3.8.

## Instalación

- Instale y ejecute [Docker](https://www.docker.com/) *(este proyecto usa **docker-compose**)*.

- Descargue o clone este repositorio GIT en su máquina local.

- Ejecute una terminal y cambie el directorio a la raíz de este proyecto.

- Copie el archivo `.env.example` y nombrelo `.env`, ajuste las variables de entorno si es necesario.

## Entorno de producción

- Ejecute `docker-compose up prod` para compilar Angular en modo de producción y exponerlo en un servidor NGINX disponible en `http://localhost:8080/`.

> El puerto correspone al valor por defecto en la propiedad `PORT_PROD` del archivo de entorno `.env`.

> Espere mientras se completa la ejecución del comando.

## Entorno de desarrollo

- Ejecute `docker-compose up develop` para iniciar los **contenedores de Docker** *(espere mientras se completa la ejecución del comando)*, al terminar, se tendrá un servidor local disponible en `http://localhost:4200/`. La aplicación se actualiza automáticamente si cambia cualquier archivo fuente.

> Ejecute `docker-compose up --build develop` si cambia cualquier archivo de Docker.

> El puerto correspone al valor por defecto en la propiedad `PORT_DEV` del archivo de entorno `.env`.

## Detener

- Ejecute `docker-compose stop` para **detener** los contenedores.

*o*

- Ejecute `docker-compose down` para **detener** y **eliminar** los contenedores.

> Agregue el argumento `-v` o `--volumes` para eliminar los volúmenes.

## Ejecutar comandos

Ejecute `docker-compose exec develop bash` para entrar a la terminal del contenedor.

> Dentro del contenedor puede instalar **dependencias de NPM** o cualquier otro comando de Angular.

## Comandos Angular

Ejecute `ng generate component component-name` para generar un nuevo componente. También puede usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Módulo

Ejecute `ng g m <directory>/<name> --flat -m <modulo>.module` para crear un nuevo módulo.

#### Página

Ejecute `ng g c pages/<name>-page` para crear una nueva página.

#### Componente

Ejecute `ng g c components/<name>` para crear un nuevo componente.

#### Interface

Ejecute `ng g i interfaces/<name> interface` para crear una nueva interface.

#### Enum

Ejecute `ng g e enums/<name>` para crear un nuevo enum.

#### Servicio

Ejecute `ng g s services/<name>` para crear un nuevo servicio.

#### Guardia

Ejecute `ng g g guards/<name>` para crear un nuevo guardia.

#### Pipe

Ejecute `ng g p pipes/<name>` para crear un nuevo pipe.

#### Layout

- Ejecute `ng g c layouts/<name>-layout` para añadir el componente a los modulos.

- Ejecute `ng g m layouts/<name>-layout --routing` para crear el modulo del componente y el modulo de rutas.
