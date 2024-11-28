
// ------------------------------------------------------------------------------------------------------------------

/angular.json

"serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "04_Angular_Market:build:production"
            },
            "development": {
              "buildTarget": "04_Angular_Market:build:development"
            }
          },
          "defaultConfiguration": "development",
          "options": {
        #   Aqui definimos que gracias a nuestro package json, se nos maneje un puerto en especifico, en lugar del por default
            "disableHostCheck": true
          }

# Es decir que

/package.json

{
  "name": "04-angular-market",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve --port 80", #Aqui nosostro definimos que requerimos trabajar sobre el puerto 80, en lugar del 4200
    "build": "ng build",

// ------------------------------------------------------------------------------------------------------------------

/angular.json

# En caso de que el directorio assets no haya sido creado, valida que se haya generado en la siguiente ruta de directorios

{
  "projects": {
    "project-name": {
      "architect": {
        "build": {
          "options": {
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ]
          }
        }
      }
    }
  }
}


+ Observable

# Es un objeto qque puede emitir uno o mas valores a lo largo del tiempo, ejemplo:

  # El siguiente Observable emite 1,luego 2, luego 3 y luego se completara

  import { of } from 'rxjs';
  const numbers$ = of(1, 2, 3); // simple observable that emits three values

# El metodo RxJS de (...values), crea una instancia Observable que entrega de forma sincrona a cada uno de los valores proporcionados 
# como argumentos.

+ Subscribe

# Es usado para que un Observable comience a publicar valores, es decir, spñp jasta cuando alguiien se suscribe. En el ejemplo anterior 
# el observable '1-2-3' no emitirá ningun numero hasta que ya se haya suscrito alguien para llamar el metodo 'subscribe()' del observable


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////// URL REF: https://www.youtube.com/watch?v=1HdF-apLfLM ////////////////////////////////////////

///////////////////////////////////////////////// 1:45:00 //////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



- https://tailwindcss.com/docs/guides/angular


- https://tailwindcss.com/docs/text-decoration-color