import {
  ScreenShare,
  ServerIcon,
  DatabaseBackup,
  Airplay,
  Keyboard,
} from "@lucide/svelte";

export type Skills = {
  domaineName: string;
  icon: any;
  desc: string;
  tools: {
    name: string;
    logo: string;
    desc: string;
  }[];
};

export const skills: Skills[] = [
  {
    domaineName: "Frontend",
    icon: ScreenShare,
    desc: "Interface simple reactive et user friendly",
    tools: [
      {
        name: "Sveltekit",
        logo: "/svelte.svg",
        desc: `Pour la creation d'UI interactive, leger et rapide`,
      },
      {
        name: "Tauri",
        logo: "/tauri.svg",
        desc: `Pour des applications robuste, rapide, secirisé et surtout cross-platforme`,
      },
      {
        name: "Dioxus",
        logo: "/dioxus.svg",
        desc: `Pour des applications robuste, rapide, secirisé et surtout cross-platforme`,
      },
    ],
  },
  {
    domaineName: "Backend",
    icon: ServerIcon,
    desc: "Application server pour garantir l'integrité",
    tools: [
      {
        name: "Hono.js",
        logo: "/hono.svg",
        desc: `Pour la creation d'API leger et rapide`,
      },
      {
        name: "Axum",
        logo: "/rust.svg",
        desc: `Pour des solutions complexes et critiques en duree avec l'ecosysteme de rust`,
      },
    ],
  },
  {
    domaineName: "Persistence et API",
    desc: "SGBD et Communication des systemes.",
    icon: DatabaseBackup,
    tools: [
      {
        name: "Rest | GraphQL",
        logo: "/graphql.svg",
        desc: `Pour la stocker et transferer des données complexes.`,
      },
      {
        name: "Socket",
        logo: "/rest.svg",
        desc: `Pour la communication de données en temps réels.`,
      },
      {
        name: "PostgreSQL | MongoDB",
        logo: "/db.svg",
        desc: `Pour une stockage de masse adaptée à mon cas d'utilisation.`,
      },
      {
        name: "Redis",
        logo: "/db.svg",
        desc: `Pour gerer le caching coté serveur.`,
      },
    ],
  },
  {
    domaineName: "Enironnement",
    desc: "Envonnement et technique de deployement adequate.",
    icon: Airplay,
    tools: [
      {
        name: "Vercel",
        logo: "/vercel.svg",
        desc: `Pour le deployement d'application frontend rapide.`,
      },
      {
        name: "Render",
        logo: "/render.avif",
        desc: `Pour le deployement d'application Backend rapide.`,
      },
      {
        name: "Docker",
        logo: "/docker.svg",
        desc: `Pour une conteniration et le deployement plus sure.`,
      },
      {
        name: "Supabase | Firebase",
        logo: "/db.svg",
        desc: `Pour le deployement de serveur de base doneées.`,
      },
    ],
  },
  {
    domaineName: "Infographie",
    desc: "Outils de désign UX/UI.",
    icon: Airplay,
    tools: [
      {
        name: "Figma | Lunacy",
        logo: "/figma.svg",
        desc: `Pour le design d'Interface et d'experence utilisateur.`,
      },
      {
        name: "Adobe XD",
        logo: "/adobe-xd.svg",
        desc: `Pour le design d'Interface et d'experence utilisateur.`,
      },
      {
        name: "Photoshop | Canva",
        logo: "/photoshop.svg",
        desc: `Pour la creation de charte graphique.`,
      },
      {
        name: "Illustrator",
        logo: "/illustrator.svg",
        desc: `Pour La creation de logo professionelle et original.`,
      },
    ],
  },
  {
    domaineName: "Methodes",
    desc: "Application des bonnes pratiques adequates.",
    icon: Keyboard,
    tools: [
      {
        name: "Agile",
        logo: "/vercel.svg",
        desc: `Pour mieux comprendre les attentes du client et livree à temps.`,
      },
      {
        name: "Clean archi...(hexagonale)",
        logo: "/render.avif",
        desc: `Pour la production de solution de qualité et maintenanble.`,
      },
      {
        name: "MVC",
        logo: "/docker.svg",
        desc: `Pour la production de solution en temps records.`,
      },
      {
        name: "Jest | Cargo teste",
        logo: "/jest.svg",
        desc: `Pour amortire, voire meme eliminer les bugs.`,
      },
    ],
  },
];
