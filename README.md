# Lo Logramos — Premium V5

Una experiencia de storytelling interactivo construida con React 19, Vite, TypeScript, Tailwind CSS, Framer Motion, React Router, Lenis y Lucide React.

## Ejecutar

```bash
npm install
npm run dev
```

## Arquitectura

```text
App → StoryLayout → StoryEngine → Chapter → Scene → Components
```

- `core/`: motores de historia, movimiento, audio, progreso y tema.
- `features/`: capítulos concretos de la narración.
- `shared/`: componentes, tipos, utilidades y recursos reutilizables.
- `data/`: configuración y orden narrativo.

## V5

- Mantiene las emociones como criterio interno, sin mostrarlas en pantalla.
- Conserva únicamente dos quizzes: oreja izquierda y elección de desarrollo de software.
- Sigue el orden cronológico de la historia.
- Divide el capítulo de los abuelos en dos escenas independientes.
- Usa archivos con extensión `.jpeg`.
- No incluye fotografía familiar; esa parte se presenta como una secuencia animada de nombres.

Consulta `FOTOS.md` para sustituir las imágenes provisionales.

## Música

Coloca el archivo de audio en `public/music/cancion.mp3`. La música comienza al pulsar el botón flotante; los navegadores no permiten iniciar sonido automáticamente sin interacción del visitante.

## Carrusel de herramientas

Agrega tus imágenes JPEG en `public/regalos/` usando estos nombres:

- `herramienta-1.jpeg`
- `herramienta-2.jpeg`
- `herramienta-3.jpeg`
- `herramienta-4.jpeg`

Los títulos, el orden y las rutas se editan en `src/features/invitation/InvitationScene.tsx`.
