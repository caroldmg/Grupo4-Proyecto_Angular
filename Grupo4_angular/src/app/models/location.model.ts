export interface ILocation {
    //de momento ponemos estos atributos, después los podemos cambiar
    locationId: number;
    location: string;
    comunidad: string; //lo mismo también es interesante poner id de comunidad, o ponerlo directamente con un número? lo mismo para provincia y país.
    provincia: string;
    país: string;
    altitud: string;
    latitud: string;
    longitud: string;
    timeZone: number; //¿timeZone id? 

}
