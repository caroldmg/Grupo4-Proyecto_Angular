
## Hola chicas!
 `Comandos que utilice`
 * ng new Grupo4_angular
 * ng add @angular/material -y --theme=indigo-pink --typography=y
 * ng generate interface models/weather --type=model --prefix=I
 * ng generate interface models/recomendation --type=model --prefix=I
 * ng generate interface models/user --type=model --prefix=I
 * ng generate interface models/location --type=model --prefix=I
 * ng generate interface models/weather --type=model --prefix=I

 `Creación del servicio:`
 * ng new service services/user 

------
 `Para probar las operaciones CRUD voy a hacer una base de datos fake en json ` 
 * npm install -g json-server
 * en mockaroo.com creo 10 json aleatorios con los atributos de IUser
 * para acceder a ellos con httpClient: json-server --watch user-database.json