import { useEffect, useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState<"welcome" | "terms" | "privacy">("welcome");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <nav className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <h1 className="font-serif text-2xl tracking-wide text-foreground">
              Naturalex
            </h1>
            <div className="flex gap-8">
              <button
                onClick={() => setActiveSection("welcome")}
                className={`nav-link ${activeSection === "welcome" ? "nav-link-active" : ""}`}
              >
                Bienvenida
              </button>
              <button
                onClick={() => setActiveSection("terms")}
                className={`nav-link ${activeSection === "terms" ? "nav-link-active" : ""}`}
              >
                Términos y Condiciones
              </button>
              <button
                onClick={() => setActiveSection("privacy")}
                className={`nav-link ${activeSection === "privacy" ? "nav-link-active" : ""}`}
              >
                Privacidad
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {activeSection === "welcome" ? (
          <WelcomeSection />
        ) : activeSection === "terms" ? (
          <TermsSection />
        ) : (
          <PrivacySection />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-auto">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="font-serif text-xl text-foreground">
              Naturalex
            </p>
            <p className="text-sm text-muted-foreground">
              © 2026 Naturalex. Productos naturales para una vida consciente.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* ---------------- CAROUSEL ---------------- */

const ImageCarousel = () => {
  const images = [
    "https://images.unsplash.com/photo-1506806732259-39c2d0268443",
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg mb-12">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

/* ---------------- WELCOME SECTION ---------------- */

const WelcomeSection = () => (
  <section className="animate-in fade-in duration-500">
    <ImageCarousel />
    <div className="grid md:grid-cols-[1fr,2fr] gap-12 md:gap-16">
      {/* Left Column */}
      <div>
        <span className="text-sm uppercase tracking-widest text-primary mb-4 block">
          Bienvenidos
        </span>
        <h2 className="section-title">
          Tienda<br />Digital
        </h2>
        <div className="divider-botanical" />
      </div>

      {/* Right Column */}
      <div className="prose-natural">
        <p>
        En <strong className="text-foreground font-medium">Naturalex</strong>,
        somos una tienda virtual especializada en productos naturales diseñados para 
        mejorar tu bienestar y calidad de vida. Ofrecemos soluciones que apoyan tu 
        salud de manera integral, combinando lo mejor de la naturaleza con estándares 
        modernos de calidad y confianza.
        </p>

        <h3>Nuestra Misión</h3>

        <p>
        Nuestra misión es brindar productos naturales de alta calidad que contribuyan 
        al bienestar físico y emocional de las personas. Creemos en el poder de la 
        naturaleza para cuidar el cuerpo de forma equilibrada, y trabajamos para 
        ofrecer alternativas accesibles, confiables y efectivas para tu día a día.
        </p>

        <h3>Nuestros Productos</h3>

        <p>
        En Naturalex encontrarás una selección de productos naturales cuidadosamente 
        elegidos para apoyar diferentes necesidades de salud y bienestar. Cada 
        producto cumple con estrictos estándares de calidad, garantizando seguridad, 
        pureza y efectividad en cada uso.
        </p>

        <h3>Compromiso con la Calidad</h3>

        <p>
        Nos comprometemos a ofrecer únicamente productos que cumplan altos estándares 
        de calidad, seleccionados de forma responsable y confiable. Nuestro objetivo 
        es brindarte soluciones naturales que realmente aporten beneficios y 
        confianza en cada compra.
        </p>

        <h3>Explora y Disfruta</h3>

        <p>
        Te invitamos a explorar nuestra tienda virtual y descubrir cómo Naturalex 
        puede acompañarte en tu camino hacia una vida más saludable y equilibrada. 
        ¡Gracias por confiar en nosotros!
        </p>
      </div>
    </div>
  </section>
);

/* ---------------- TERMS SECTION ---------------- */

const TermsSection = () => (
  <section className="animate-in fade-in duration-500">
    <ImageCarousel />
    <div className="grid md:grid-cols-[1fr,2fr] gap-12 md:gap-16">
      {/* Left Column */}
      <div>
        <span className="text-sm uppercase tracking-widest text-primary mb-4 block">
          Información Legal
        </span>
        <h2 className="section-title">
          Términos y<br />Condiciones
        </h2>
        <div className="divider-botanical" />
      </div>

      {/* Right Column */}
      <div className="prose-natural">
        <p>
          Al acceder y utilizar los servicios de{" "}
          <strong className="text-foreground font-medium">Naturalex</strong>,
          aceptas cumplir con los presentes Términos y Condiciones.
        </p>

        <h3>Uso del Sitio</h3>

        <p>
          El contenido de este sitio es únicamente para fines informativos.
          Nuestros productos no sustituyen una alimentación equilibrada ni
          tratamientos médicos.
        </p>

        <h3>Responsabilidad</h3>

        <p>
          Naturalex no se hace responsable por el uso indebido de los productos.
          Es responsabilidad del usuario seguir las indicaciones y advertencias
          descritas en cada etiqueta.
        </p>

        <h3>Propiedad Intelectual</h3>

        <p>
          Todo el contenido, imágenes, textos y logotipos son propiedad de
          Naturalex y no pueden ser utilizados sin autorización previa.
        </p>

        <h3>Modificaciones</h3>

        <p>
          Nos reservamos el derecho de modificar estos términos en cualquier
          momento. Los cambios entrarán en vigor una vez publicados en este
          sitio.
        </p>

        <h3>Contacto</h3>

        <p>
          Para cualquier consulta relacionada con estos términos, puedes
          escribirnos a{" "}
          <a
            href="mailto:legal@nutrigr.com"
            className="text-primary underline underline-offset-4"
          >
            legal@nutrigr.com
          </a>
        </p>
      </div>
    </div>
  </section>
);

/* ---------------- PRIVACY SECTION ---------------- */

const PrivacySection = () => (
  <section className="animate-in fade-in duration-500">
    <div className="grid md:grid-cols-[1fr,2fr] gap-12 md:gap-16">
      <div>
        <span className="text-sm uppercase tracking-widest text-primary mb-4 block">
          Tu Privacidad
        </span>
        <h2 className="section-title">
          Políticas de<br />Privacidad
        </h2>
        <div className="divider-botanical" />
        <p className="text-sm text-muted-foreground mt-6">
          Última actualización:<br />
          Enero 2026
        </p>
      </div>

      <div className="prose-natural">
        <p>
          En <strong className="text-foreground font-medium">Naturalex</strong>, valoramos y respetamos 
          tu privacidad. Esta política describe cómo recopilamos, usamos y 
          protegemos tu información personal.
        </p>

        <h3>Información que Recopilamos</h3>

        <ul>
          <li>Creas una cuenta en nuestra plataforma</li>
          <li>Realizas una compra o solicitas información</li>
          <li>Te suscribes a nuestro boletín informativo</li>
          <li>Te comunicas con nuestro equipo de atención al cliente</li>
        </ul>

        <h3>Uso de la Información</h3>

        <ul>
          <li>Procesar y enviar tus pedidos</li>
          <li>Comunicarnos contigo sobre tu cuenta</li>
          <li>Enviarte promociones (con tu consentimiento)</li>
          <li>Mejorar nuestros servicios</li>
        </ul>

        <h3>Protección de Datos</h3>

        <p>
          Implementamos medidas de seguridad técnicas y organizativas para
          proteger tu información personal.
        </p>
      </div>
    </div>
  </section>
);

export default Index;
