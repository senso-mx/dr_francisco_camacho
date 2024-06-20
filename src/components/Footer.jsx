
export default function Footer() {
  return (
    <section className="bg-accent" style={{backgroundColor: "#FFE6E6"}}>
      <div className="container mx-auto py-6 flex flex-wrap justify-center items-center gap-4 md:gap-10 text-sm font-light">
        <a href="aviso-de-privacidad">Aviso de Privacidad</a>
        <p className="mx-8 md:mx-0 text-center md:text-left">
          Todos los derechos reservados. Supported by <a href="https://sensomx.com/">SENSO Mx.</a>
        </p>
      </div>
    </section>
  );
}
