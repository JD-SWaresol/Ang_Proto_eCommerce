
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
