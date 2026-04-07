export const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "informacion", label: "Info" },
  { id: "servidores", label: "Servidores" },
  { id: "leaderboard", label: "Ranking" },
  { id: "tienda", label: "Tienda" }
];

export const vipTiers = [
  {
    name: "VIP Bronze",
    duration: "30 Dias",
    points: "25,000 Pts",
    accent: "bronze",
    perks: [
      "Prioridad en la cola del servidor.",
      "Rol exclusivo en Discord.",
      "Bono inicial: +3.000 monedas."
    ]
  },
  {
    name: "VIP Silver",
    duration: "30 Dias",
    points: "50,000 Pts",
    accent: "silver",
    featured: true,
    perks: [
      "Prioridad en la cola del servidor.",
      "Rol exclusivo en Discord.",
      "Bono inicial: +6.000 monedas.",
      "Acceso a tienda VIP privada."
    ]
  },
  {
    name: "VIP Gold",
    duration: "30 Dias",
    points: "100,000 Pts",
    accent: "gold",
    perks: [
      "Prioridad en la cola del servidor.",
      "Rol exclusivo y color en Discord.",
      "Bono inicial: +10.000 monedas.",
      "Acceso a tienda VIP privada.",
      "Descuentos unicos en la tienda VIP."
    ]
  }
];

export const coinPacks = [
  {
    name: "Pack Basico",
    points: "10,000 Pts",
    description: "Ideal para comprar materiales de inicio."
  },
  {
    name: "Pack Estandar",
    points: "25,000 Pts",
    description: "Perfecto para un vehiculo basico."
  },
  {
    name: "Pack Avanzado",
    points: "50,000 Pts",
    description: "Suficiente para armar una buena base y vehiculos.",
    featured: true
  },
  {
    name: "Pack Elite",
    points: "100,000 Pts",
    description: "Ideal para una base, vehiculo y lockers."
  },
  {
    name: "Pack KillZero",
    points: "250,000 Pts",
    description: "Economia total para adquirir VIPs e items."
  }
];

export const serverCards = [
  {
    name: "KillZero LATAM | Vanilla +",
    map: "Chernarus",
    slots: "70",
    ip: "189.127.164.215:2302",
    accent: "live",
    description: [
      "Servidor Vanilla + enfocado en PvP y supervivencia.",
      "KOTH con zonas activas para combates y loot de alto nivel.",
      "Airdrops aleatorios con equipamiento valioso.",
      "Base Building Plus para construir y mejorar tu propia base.",
      "Loot + para una progresion mas dinamica.",
      "Eventos dinamicos durante el gameplay.",
      "PvP activo en todo el mapa.",
      "Raids por medio de C4 crafteables.",
      "Exploracion, raids y defensa de bases.",
      "Comunidad activa y constante desarrollo del servidor.",
      "Bunker en la Isla Skalisty con loot y cajas unicas."
    ],
    cta: {
      href: "steam://connect/189.127.164.215:2302",
      label: "Conectar"
    }
  },
  {
    name: "KillZero LATAM | Deathmatch",
    map: "TBD",
    slots: "TBD",
    ip: "No disponible",
    accent: "soon",
    description: ["Servidor en preparacion. Proximamente compartiremos fecha de apertura y detalles."],
    cta: {
      disabled: true,
      label: "Mantenimiento"
    }
  }
];

export const legalSections = {
  terminos: [
    {
      title: "1. Politica de Reembolsos",
      body:
        "Todas las transacciones realizadas en la tienda de KillZero son finales. Al tratarse de bienes virtuales e intangibles, no se emitiran reembolsos una vez que el paquete o item haya sido entregado. Si tienes un problema con tu pago, abre un ticket en Discord."
    },
    {
      title: "2. Entrega de Productos",
      body:
        "La entrega de los productos virtuales se coordina de manera manual a traves del sistema de tickets en Discord. Debes proveer tu SteamID64 correcto y el comprobante de pago para evitar demoras."
    },
    {
      title: "3. Perdida de Items y Wipes",
      body:
        "KillZero no se hace responsable por perdidas de items debido a bugs, raids legitimos o wipes de temporada. Los beneficios duran segun lo especificado en cada paquete."
    },
    {
      title: "4. Comportamiento y Reglas del Servidor",
      body:
        "Adquirir un paquete VIP o cualquier producto de la tienda no te exime de cumplir las reglas generales. En caso de baneo por hacks, exploits o comportamiento toxico, perderas el acceso a tus beneficios sin derecho a reclamo ni reembolso."
    },
    {
      title: "5. Modificaciones de los Paquetes",
      body:
        "La administracion de KillZero se reserva el derecho de modificar o ajustar el contenido de los paquetes, vehiculos o stats si afectan el balance del servidor. Cualquier cambio mayor sera notificado a la comunidad."
    }
  ],
  reglas: [
    "El servidor se reserva el derecho de admision y permanencia tanto en el sitio web como en Discord y en el servidor.",
    "No se permite promocionar otros servidores, comunidades o Discord.",
    "No se permite el uso o abuso de bugs o hacks que otorguen ventaja dentro del servidor.",
    "Esta prohibido doxear o realizar cualquier tipo de amenaza a players o staff.",
    "La administracion no se hace cargo de bugs o perdidas del juego vanilla.",
    "Las denuncias unicamente se realizan via ticket; no esta permitido escribir por mensaje directo a los administradores.",
    "Esta prohibido hacer inside o traicion; respeten el tiempo de juego de todos los clanes.",
    "No se permiten nombres ofensivos ni hacerse pasar por otro jugador o administrador.",
    "No se permite contenido inapropiado, racista, sexista, acosador o discriminatorio en juego o Discord."
  ],
  uso: [
    "El uso del servidor y del sitio web es bajo tu propia responsabilidad.",
    "Al acceder y utilizar los servicios de KillZero aceptas automaticamente estos terminos y condiciones.",
    "Si no estas de acuerdo con alguno de ellos, se recomienda no utilizar los servicios.",
    "KillZero se reserva el derecho de admision y permanencia dentro de la pagina web, Discord y servidores.",
    "El contenido del servidor no puede ser replicado ni modificado sin autorizacion."
  ]
};
