import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState<"about" | "privacy">("about");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <nav className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <h1 className="font-serif text-2xl tracking-wide text-foreground">
              Nutri<span className="text-primary">GR</span>
            </h1>
            <div className="flex gap-8">
              <button
                onClick={() => setActiveSection("about")}
                className={`nav-link ${activeSection === "about" ? "nav-link-active" : ""}`}
              >
                Quiénes Somos
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
        {activeSection === "about" ? <AboutSection /> : <PrivacySection />}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-auto">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="font-serif text-xl text-foreground">
              Nutri<span className="text-primary">GR</span>
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 NutriGR. Productos naturales para una vida consciente.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const AboutSection = () => (
  <section className="animate-in fade-in duration-500">
    <div className="grid md:grid-cols-[1fr,2fr] gap-12 md:gap-16">
      {/* Left Column - Title */}
      <div>
        <span className="text-sm uppercase tracking-widest text-primary mb-4 block">
          Nuestra Historia
        </span>
        <h2 className="section-title">
          Quiénes<br />Somos
        </h2>
        <div className="divider-botanical" />
      </div>

      {/* Right Column - Content */}
      <div className="prose-natural">
        <p>
          En <strong className="text-foreground font-medium">NutriGR</strong>, creemos que la belleza verdadera 
          proviene de la armonía con la naturaleza. Desde 2015, nos hemos dedicado a 
          crear productos que respetan tanto tu piel como el planeta.
        </p>

        <p>
          Nuestra filosofía se basa en tres pilares fundamentales: ingredientes 
          de origen natural y sostenible, procesos de producción respetuosos con 
          el medio ambiente, y un compromiso inquebrantable con la transparencia.
        </p>

        <h3>Nuestros Valores</h3>

        <ul>
          <li>
            <strong className="text-foreground">Sostenibilidad:</strong> Cada decisión que tomamos 
            considera su impacto ambiental.
          </li>
          <li>
            <strong className="text-foreground">Transparencia:</strong> Compartimos abiertamente 
            nuestros ingredientes y procesos.
          </li>
          <li>
            <strong className="text-foreground">Calidad:</strong> Solo utilizamos ingredientes 
            de la más alta pureza y origen certificado.
          </li>
          <li>
            <strong className="text-foreground">Comunidad:</strong> Apoyamos a productores locales 
            y prácticas de comercio justo.
          </li>
        </ul>

        <h3>Nuestro Compromiso</h3>

        <p>
          Trabajamos directamente con agricultores y recolectores que comparten 
          nuestra visión de un mundo más sostenible. Cada producto que creamos 
          es el resultado de años de investigación y un profundo respeto por las 
          tradiciones botánicas ancestrales.
        </p>

        <p>
          Nos enorgullece ser una empresa libre de crueldad animal, con envases 
          100% reciclables y una huella de carbono neutral. Porque cuidar de ti 
          también significa cuidar del mundo que te rodea.
        </p>
      </div>
    </div>
  </section>
);

const PrivacySection = () => (
  <section className="animate-in fade-in duration-500">
    <div className="grid md:grid-cols-[1fr,2fr] gap-12 md:gap-16">
      {/* Left Column - Title */}
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
          Febrero 2024
        </p>
      </div>

      {/* Right Column - Content */}
      <div className="prose-natural">
        <p>
          En <strong className="text-foreground font-medium">NutriGR</strong>, valoramos y respetamos 
          tu privacidad. Esta política describe cómo recopilamos, usamos y 
          protegemos tu información personal.
        </p>

        <h3>Información que Recopilamos</h3>

        <p>
          Recopilamos información que nos proporcionas directamente cuando:
        </p>

        <ul>
          <li>Creas una cuenta en nuestra plataforma</li>
          <li>Realizas una compra o solicitas información</li>
          <li>Te suscribes a nuestro boletín informativo</li>
          <li>Te comunicas con nuestro equipo de atención al cliente</li>
        </ul>

        <h3>Uso de la Información</h3>

        <p>
          Utilizamos tu información personal exclusivamente para:
        </p>

        <ul>
          <li>Procesar y enviar tus pedidos</li>
          <li>Comunicarnos contigo sobre tu cuenta o transacciones</li>
          <li>Enviarte información sobre productos y promociones (con tu consentimiento)</li>
          <li>Mejorar nuestros servicios y experiencia de usuario</li>
        </ul>

        <h3>Protección de Datos</h3>

        <p>
          Implementamos medidas de seguridad técnicas y organizativas para 
          proteger tu información personal contra acceso no autorizado, 
          alteración, divulgación o destrucción.
        </p>

        <h3>Tus Derechos</h3>

        <p>
          Tienes derecho a acceder, corregir, actualizar o solicitar la 
          eliminación de tu información personal. También puedes oponerte 
          al procesamiento de tus datos o solicitar la portabilidad de los mismos.
        </p>

        <h3>Cookies</h3>

        <p>
          Utilizamos cookies esenciales para el funcionamiento del sitio y 
          cookies analíticas para mejorar tu experiencia. Puedes gestionar 
          tus preferencias de cookies en cualquier momento desde la 
          configuración de tu navegador.
        </p>

        <h3>Contacto</h3>

        <p>
          Si tienes preguntas sobre esta política de privacidad o sobre 
          cómo manejamos tu información, puedes contactarnos en{" "}
          <a 
            href="mailto:privacidad@natura.com" 
            className="text-primary hover:text-primary/80 underline underline-offset-4"
          >
            privacidad@natura.com
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default Index;
