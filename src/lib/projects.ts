export type Project = {
  name: string;
  repo: string;
  image: string;
  desc: string;
  pub: boolean;
};

export const project: Project[] = [
  {
    name: "binabusiness",
    repo: "https://github.com/tugnodev/binabusiness",
    image: "/wallpaper/bina.png",
    desc: "Projet eshop pour un particulier qui voulait vendre des produits feminines.",
    pub: true,
  },
  {
    name: "Money Wise",
    repo: "https://github.com/doukous/moneywise-frontend",
    image: "/wallpaper/wise.png",
    desc: "Project dans  le cadre d'un stage qui consiste a la gestion des transactions e-Wallet",
    pub: true,
  },
  {
    name: "Colobane Campus Frontend (private now)",
    repo: "https://github.com/tugnodev/cc-frontend",
    image: "/wallpaper/cc.png",
    desc: "App mobile crossplatform pour informatiser les marches universitaire.",
    pub: true,
  },
  {
    name: "Colobane Campus Backend (private now)",
    repo: "https://github.com/tugnodev/campus-colobane-backend",
    image: "/wallpaper/cc.png",
    desc: "Backend de colobane campus implementer avec l'architechture hexagonale.",
    pub: true,
  },
];
