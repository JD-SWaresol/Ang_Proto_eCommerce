/** @type {import('tailwindcss').Config} */
module.exports = {
  // A traves de lo que venga a la carpeta src. Debe reconocer la configuracion con extension HTML y TS
  // Indicamos tambien que debe detectar nuestra carpeta 'components' con sus correspondientes componentes
  content: [
    "./src/**/*.{html,ts}",
    ".pages/**/*.{html,ts}",
    ".components/**/*.{html,ts}"
  ],
  theme: {
    // Tambien es posible definir estilos de colores personalizados para elementos HTML como <p class="text-.....">
    extend: {
      colors: {
        primary: "#5c059b",
        secondary: "#1E293B",
        accent: "#CB5930",
        danger: "#F00"
      }
    },
  },
  plugins: [],
}

