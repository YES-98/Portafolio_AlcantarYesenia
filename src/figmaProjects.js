// Lista de proyectos y frames (usa node-id con GUION, ej. "0-1" para embeds)
export const figmaProjects = [
  {
    name: "Game School",
    fileKey: "PZuFjU88MoNaMdKhjy24or",
    fileTitleInUrl: "Game-School", // tal como aparece en la URL del archivo
    frames: [
      { nodeId: "0-1", title: "Cover" },
      // Agrega más frames copiando el link del Frame en Figma:
      // { nodeId: "1-23", title: "Pantalla X" },
    ],
  },

  // Agrega más proyectos si quieres:
  // {
  //   name: "HidroPI",
  //   fileKey: "XXXXXXXXXXXXXXX",
  //   fileTitleInUrl: "HidroPI",
  //   frames: [
  //     { nodeId: "0-1", title: "Home" },
  //     { nodeId: "1-23", title: "Detalle" },
  //   ],
  // },
];
