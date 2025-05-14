# Front Post Manager

**Front Post Manager** es una aplicación web desarrollada con **Next.js**, **TypeScript**, **Tailwind CSS** y **Redux Toolkit**, diseñada para gestionar publicaciones de manera eficiente.

## 🚀 Tecnologías Utilizadas

- **Next.js**: Framework de React que permite renderizado del lado del servidor (SSR), generación de sitios estáticos (SSG) y una configuración optimizada por defecto.
- **TypeScript**: Superset de JavaScript que añade tipado estático, mejorando la mantenibilidad y escalabilidad del código.
- **Tailwind CSS**: Framework de CSS basado en utilidades que permite un diseño rápido y consistente.
- **Redux Toolkit**: Conjunto de herramientas oficiales para una gestión de estado eficiente en aplicaciones Redux.

## 📁 Estructura del Proyecto

- `components/`: Componentes reutilizables como botones, inputs y modales.
- `layouts/`: Layout principal que incluye `Header` y `Footer` para una estructura visual consistente.
- `pages/`: Páginas del proyecto, gestionadas automáticamente por Next.js.
- `store/`: Configuración de Redux Toolkit y sus slices para la gestión del estado global.
- `public/`: Recursos estáticos como imágenes y el logo de la empresa.

## 🖼️ Diseño y UI

- Se ha implementado un layout reutilizable que incluye un `Header` y un `Footer`, garantizando una experiencia de usuario coherente en todas las páginas.
- El logo de la empresa se ha incorporado en el `Header`, reforzando la identidad visual de la aplicación.
- La interfaz de usuario se ha construido utilizando Tailwind CSS, permitiendo un diseño moderno y responsivo.

## 🧠 Gestión de Estado con Redux Toolkit

La aplicación utiliza Redux Toolkit para manejar el estado global de las publicaciones (`posts`). Se han implementado acciones para:

- Obtener la lista de publicaciones.
- Crear una nueva publicación.
- Eliminar una publicación existente.
- Filtrar publicaciones por nombre.

Esto permite una gestión eficiente y escalable del estado, reduciendo el código repetitivo y mejorando la claridad del flujo de datos.

## 🛠️ Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/Benja1914/front-post-manager.git
cd front-post-manager
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

### 4. Acceder a la aplicación

Abre tu navegador y navega a [http://localhost:3000](http://localhost:3000) para ver la aplicación en funcionamiento.

## 📌 Scripts Disponibles

- `dev`: Inicia el servidor de desarrollo.
- `build`: Compila la aplicación para producción.
- `start`: Inicia el servidor en modo producción.
- `lint`: Ejecuta ESLint para analizar el código en busca de errores y problemas de estilo.

## 📝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, por favor, realiza un fork del repositorio y envía un pull request con tus cambios.

## 📄 Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).