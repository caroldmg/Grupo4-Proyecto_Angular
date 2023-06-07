
## Hola chicas!
 `Comandos que utilice`
 * ng new Grupo4_angular
 * ng add @angular/material -y --theme=indigo-pink --typography=y
 * ng generate interface models/weather --type=model --prefix=I
 * ng generate interface models/recomendation --type=model --prefix=I
 * ng generate interface models/user --type=model --prefix=I
 * ng generate interface models/location --type=model --prefix=I
 
-- Estos modelos son para traer la info según la devolución de eltiempo.net
 * ng generate interface models/provincia --type=model --prefix=I

 `Creación del servicio:`
 * ng new service services/user 
  * ng new service services/weather

------
 `Para probar las operaciones CRUD voy a hacer una base de datos fake en json ` 
 * npm install -g json-server
 * en mockaroo.com creo 10 json aleatorios con los atributos de IUser
 * para acceder a ellos con httpClient: json-server --watch user-database.json



 ## API
 * Veréis que en el weatherService hay una variable apiKey, esa es para por si al final usamos aemet
 * De momento, voy a ir probando con la de eltiempo.net, que saca los datos desde AEMET pero parece más sencillo acceder a la información desde ahí

 ### API -- ELTIEMPO.NET
 * los códigos de provincia los tenemos almacenados en db.json
 * 