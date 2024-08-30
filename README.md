# Rotate Matrices

Este proyecto es una aplicación web que permite a los usuarios ingresar matrices cuadradas y visualizar su rotación y transposición. La aplicación está construida utilizando React y Next.js, y las pruebas unitarias están implementadas con Jest y Testing Library.

## Características

- **Ingreso de Matrices:** Permite ingresar matrices cuadradas en formato JSON.
- **Visualización de la Matriz:** Muestra la matriz ingresada en un canvas HTML.
- **Transposición de la Matriz:** Transpone la matriz ingresada y la visualiza en el canvas.
- **Rotación de la Matriz:** Rota la matriz hacia la izquierda y la visualiza en el canvas.
- **Validación:** Verifica que la matriz ingresada sea cuadrada y válida.

## Tecnologías Utilizadas

- **React:** Biblioteca de JavaScript para la construcción de interfaces de usuario.
- **Next.js:** Framework para aplicaciones React con renderizado del lado del servidor (SSR) y generación estática.
- **Jest:** Framework de pruebas para JavaScript.
- **Testing Library:** Conjunto de utilidades para probar componentes React.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tuusuario/rotate-matrices.git
   cd rotate-matrices

2. Instala las dependecias

   ```bash
   npm install
  
3. Ejecuta la aplicacion en modo desarrollo

   ```bash
   npm run dev

4. Abre tu navegador y navega a http://localhost:3000

## Scripts Disponibles
- **npm run dev:** Inicia la aplicación en modo desarrollo.
- **npm run build:** Construye la aplicación para producción.
- **npm run start:** Inicia un servidor de producción para la aplicación.
- **npm run test:** Ejecuta las pruebas unitarias utilizando Jest.

## Estructura del proyecto
/app
  /components
    - MatrixDisplay.js         # Componente que muestra la matriz en un canvas
    - MatrixInput.js           # Componente que permite ingresar la matriz
  - index.js                   # Página principal de la aplicación
/utils
  - transumutarMatrix.js     # Función que transpone la matriz
/tests
  - testDisplay.test.js      # Pruebas unitarias para MatrixDisplay
  - testInput.test.js        # Pruebas unitarias para MatrixInput
  - testTransmutarMatrix.js  # Pruebas unitarias para la transposición de matrices
