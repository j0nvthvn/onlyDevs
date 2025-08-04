export const Sidebar = () => {
  const links = [
    {
      label: "Inicio",
      icon: "ic:baseline-home",
      to: "/",
    },
    {
      label: "Notificaciones",
      icon: "ic:baseline-notifications",
      to: "/notificaciones",
    },
    {
      label: "Mensajes",
      icon: "ic:baseline-message",
      to: "/mensajes",
    },
    {
      label: "Colecciones",
      icon: "ic:baseline-collections-bookmark",
      to: "/colecciones",
    },
    {
      label: "Suscripciones",
      icon: "ic:baseline-person",
      to: "/suscripciones",
    },
    {
      label: "Anadir tarjeta",
      icon: "ic:baseline-credit-card",
      to: "/tarjeta",
    },
    {
      label: "Mi perfil",
      icon: "ic:baseline-acount-circle",
      to: "/miperfil",
    },
  ];
  return (
    <div className="h-screen p-2 bg-white dark:bg-bg-dark transition-all duration-300">
      {/*LOGO*/}
      <div>ONLYDEVS</div>
      {/*NAV*/}
      <nav className="flex-1 flex flex-col gap-2 items-center"></nav>
    </div>
  );
};
