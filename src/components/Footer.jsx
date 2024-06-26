
export default function Footer() {
  return (
    <section className="text-white" style={{backgroundColor: "#383838"}}>
      <div className="container mx-auto py-6 flex flex-wrap justify-center items-center gap-4 md:gap-10 text-sm">
        <a href="aviso-de-privacidad font-semibold">Aviso de Privacidad</a>
        <p className="mx-8 md:mx-0 text-center md:text-left text-white">
          Todos los derechos reservados. Supported by <a href="https://sensomx.com/">SENSO Mx.</a>
        </p>
      </div>
    </section>
  );
}
