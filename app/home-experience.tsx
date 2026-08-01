"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

const navItems = [
  ["services", "Expertises"],
  ["methode", "Méthode"],
  ["impact", "Impact"],
  ["contact", "Contact"],
];

const services = [
  {
    number: "01",
    label: "Poser le cap",
    title: "Stratégie de communication",
    text: "Une direction claire pour aligner votre image, vos messages et vos ambitions — sans jargon, ni stratégie qui dort dans un dossier.",
    tags: ["Audit", "Positionnement", "Ligne éditoriale"],
    className: "service-card--wide",
  },
  {
    number: "02",
    label: "Créer l'envie",
    title: "Marketing digital",
    text: "Des campagnes et des contenus pensés pour attirer les bonnes personnes, nourrir la relation et transformer l’attention en action.",
    tags: ["Campagnes", "Contenu", "Pilotage"],
    className: "service-card--violet",
  },
  {
    number: "03",
    label: "Faire vivre la marque",
    title: "Community Management",
    text: "Une présence sociale régulière, humaine et engageante, de la planification à l’animation de votre communauté.",
    tags: ["Social media", "Modération", "Reporting"],
    className: "service-card--night",
  },
];

const steps = [
  {
    number: "01",
    title: "On écoute vraiment.",
    text: "Vos enjeux, vos clients, vos irritants et cette ambition que vous n’avez pas encore tout à fait formulée.",
    result: "Diagnostic & cap stratégique",
  },
  {
    number: "02",
    title: "On rend l’idée visible.",
    text: "Nous transformons le cap en concepts, messages et formats qui vous ressemblent et se reconnaissent au premier regard.",
    result: "Territoire éditorial & contenus",
  },
  {
    number: "03",
    title: "On passe à l’action.",
    text: "Le calendrier prend vie. Chaque publication a un rôle, chaque interaction construit une relation.",
    result: "Activation & community management",
  },
  {
    number: "04",
    title: "On améliore, encore.",
    text: "Nous lisons les bons signaux, expliquons ce qui fonctionne et ajustons pour progresser avec constance.",
    result: "Analyse & optimisations",
  },
];

export default function HomeExperience() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("has-js");
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -7%" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("has-js");
    };
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!visualRef.current || event.pointerType === "touch") return;
    const rect = visualRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    visualRef.current.style.setProperty("--mx", `${x * 18}px`);
    visualRef.current.style.setProperty("--my", `${y * 18}px`);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = [
      "Bonjour Besser Version,",
      "",
      `Je m'appelle ${form.get("name") || ""}.`,
      `Mon entreprise : ${form.get("company") || "Non précisée"}.`,
      `Mon besoin principal : ${form.get("need") || "À définir ensemble"}.`,
      "",
      `${form.get("message") || "J’aimerais échanger au sujet de mon projet."}`,
      "",
      `Vous pouvez me répondre à : ${form.get("email") || ""}`,
    ].join("\n");
    setSubmitted(true);
    window.location.href = `mailto:bonjour@besserversion.fr?subject=${encodeURIComponent(
      "Parlons de ma meilleure version",
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main>
      <a className="skip-link" href="#contenu">Aller au contenu</a>

      <header className="site-header" aria-label="Navigation principale">
        <a className="brand" href="#accueil" aria-label="Besser Version — accueil">
          <span className="brand-mark" aria-hidden="true">b/</span>
          <span className="brand-name">besser version</span>
        </a>
        <nav className={menuOpen ? "nav nav--open" : "nav"} aria-label="Menu principal">
          {navItems.map(([href, label]) => (
            <a key={href} href={`#${href}`} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">Parlons-nous <span aria-hidden="true">↗</span></a>
        <button
          className={menuOpen ? "menu-toggle is-open" : "menu-toggle"}
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>
      </header>

      <section className="hero" id="accueil" aria-labelledby="hero-title">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-copy" id="contenu">
          <p className="eyebrow hero-eyebrow" data-reveal><span /> Studio marketing digital · Lille</p>
          <h1 id="hero-title" data-reveal>Votre marque,<span className="hero-script">en mieux.</span></h1>
          <p className="hero-intro" data-reveal>
            On transforme une présence digitale floue en une marque <strong>claire</strong>,
            <strong> visible</strong> et <strong>vivante</strong>.
          </p>
          <div className="hero-actions" data-reveal>
            <a className="button button--primary" href="#contact">Révéler ma marque <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#services">Voir nos expertises <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-proof" data-reveal>
            <span className="proof-pulse" aria-hidden="true" />
            <p>Stratégie · Contenu · Communauté
              <small>Un accompagnement direct, pensé pour les entreprises qui veulent avancer.</small>
            </p>
          </div>
        </div>

        <div
          className="signal-visual"
          ref={visualRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={() => {
            visualRef.current?.style.setProperty("--mx", "0px");
            visualRef.current?.style.setProperty("--my", "0px");
          }}
          data-reveal
          aria-label="Illustration abstraite d'une marque qui gagne en visibilité"
        >
          <div className="signal-card">
            <div className="signal-topline"><span>SIGNAL LAB</span><span className="signal-live"><i /> LIVE</span></div>
            <div className="orbit-stage" aria-hidden="true">
              <div className="orbit orbit--one" /><div className="orbit orbit--two" />
              <div className="signal-core"><span>b/</span></div>
              <span className="float-tag float-tag--one">clarté</span>
              <span className="float-tag float-tag--two">impact</span>
              <span className="float-tag float-tag--three">lien</span>
            </div>
            <div className="signal-shift"><span>Présence digitale</span><div className="shift-line"><i /></div><strong>+ cohérente</strong></div>
          </div>
          <div className="mini-card mini-card--left" aria-hidden="true"><span>01</span><strong>UNE IDÉE</strong><i /></div>
          <div className="mini-card mini-card--right" aria-hidden="true"><span>03</span><strong>UN SIGNAL</strong><i /></div>
          <div className="coral-spark spark--one" aria-hidden="true" /><div className="coral-spark spark--two" aria-hidden="true" />
        </div>
        <div className="scroll-cue" aria-hidden="true"><span>SCROLL TO EVOLVE</span><i /></div>
      </section>

      <div className="statement-band" aria-label="Notre promesse">
        <div className="statement-track">
          <span>PLUS CLAIRE</span><i>✦</i><span>PLUS VISIBLE</span><i>✦</i><span>PLUS VIVANTE</span><i>✦</i>
          <span>PLUS CLAIRE</span><i>✦</i><span>PLUS VISIBLE</span><i>✦</i><span>PLUS VIVANTE</span><i>✦</i>
        </div>
      </div>

      <section className="services section" id="services" aria-labelledby="services-title">
        <div className="section-heading" data-reveal>
          <div><p className="eyebrow"><span /> Ce qu’on met en mouvement</p>
            <h2 id="services-title">Trois expertises.<br /><em>Une seule direction.</em></h2></div>
          <p>Pas de formule copiée-collée. Nous relions le fond, la forme et le rythme pour construire une présence qui tient la route — et la distance.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <article
              className={`service-card ${service.className}`}
              key={service.number}
              data-reveal
              style={{ "--delay": `${index * 90}ms` } as React.CSSProperties}
            >
              <div className="service-card__top"><span className="service-number">/{service.number}</span><span className="service-label">{service.label}</span></div>
              <h3>{service.title}</h3><p>{service.text}</p>
              <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="method section" id="methode" aria-labelledby="method-title">
        <div className="method-intro"><div className="method-sticky" data-reveal>
          <p className="eyebrow eyebrow--light"><span /> La méthode Besser</p>
          <h2 id="method-title">Du bruit<br />au <em>bon signal.</em></h2>
          <p>Une collaboration simple, transparente et rythmée. Vous savez toujours où l’on va, pourquoi on y va et ce que ça produit.</p>
          <a href="#contact" className="button button--coral">Trouver votre signal <span>↗</span></a>
        </div></div>
        <div className="method-steps">
          {steps.map((step, index) => (
            <article className="method-step" key={step.number} data-reveal>
              <div className="step-index"><span>{step.number}</span><i style={{ "--progress": `${(index + 1) * 25}%` } as React.CSSProperties} /></div>
              <h3>{step.title}</h3><p>{step.text}</p><strong><span aria-hidden="true">→</span> {step.result}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="impact section" id="impact" aria-labelledby="impact-title">
        <div className="impact-heading" data-reveal>
          <p className="eyebrow"><span /> Ce qui change vraiment</p>
          <h2 id="impact-title">Votre communication cesse de remplir un feed.<br /><em>Elle commence à construire quelque chose.</em></h2>
        </div>
        <div className="impact-grid">
          <article className="impact-card impact-card--voice" data-reveal>
            <span className="impact-kicker">01 / IDENTITÉ</span><h3>Une voix qu’on reconnaît.</h3>
            <p>Des mots, des codes et un ton qui rendent votre marque identifiable — même sans voir votre logo.</p>
            <div className="voice-lines" aria-hidden="true"><span>distinctive</span><span>humaine</span><span>cohérente</span></div>
          </article>
          <article className="impact-card impact-card--rhythm" data-reveal>
            <span className="impact-kicker">02 / RYTHME</span><h3>Une présence qui ne disparaît plus.</h3>
            <div className="rhythm-chart" aria-hidden="true">
              {[38, 55, 46, 72, 64, 88, 78, 100].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}
            </div>
            <p>Un système éditorial réaliste pour publier avec constance et intention.</p>
          </article>
          <article className="impact-card impact-card--decisions" data-reveal>
            <div className="decision-orbit" aria-hidden="true"><span>→</span></div>
            <span className="impact-kicker">03 / PILOTAGE</span><h3>Des décisions moins floues.</h3>
            <p>Les bons indicateurs, expliqués clairement, pour savoir quoi garder, quoi ajuster et où aller ensuite.</p>
          </article>
        </div>
        <div className="lille-note" data-reveal>
          <div className="lille-pin" aria-hidden="true"><span>●</span></div>
          <div><p className="eyebrow"><span /> Ancré à Lille</p><h3>Tout près de vos enjeux.<br /><em>Ou à un appel de distance.</em></h3></div>
          <p>Besser Version accompagne les entreprises lilloises et d’ailleurs avec la même proximité : des échanges directs, des idées concrètes et aucune couche inutile.</p>
        </div>
      </section>

      <section className="contact section" id="contact" aria-labelledby="contact-title">
        <div className="contact-glow" aria-hidden="true" />
        <div className="contact-copy" data-reveal>
          <p className="eyebrow eyebrow--light"><span /> Et maintenant ?</p>
          <h2 id="contact-title">Prêt·e pour votre<br /><em>meilleure version ?</em></h2>
          <p>Parlez-nous de votre marque, même si tout n’est pas encore parfaitement cadré. C’est justement notre métier.</p>
          <a className="direct-mail" href="mailto:bonjour@besserversion.fr">bonjour@besserversion.fr <span aria-hidden="true">↗</span></a>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} data-reveal>
          <div className="form-row">
            <label><span>Votre prénom *</span><input name="name" type="text" placeholder="Camille" autoComplete="given-name" required /></label>
            <label><span>Votre e-mail *</span><input name="email" type="email" placeholder="camille@entreprise.fr" autoComplete="email" required /></label>
          </div>
          <label><span>Votre entreprise</span><input name="company" type="text" placeholder="Le nom de votre belle aventure" autoComplete="organization" /></label>
          <label><span>Votre priorité</span><select name="need" defaultValue=""><option value="" disabled>Choisissez un sujet</option><option>Clarifier ma stratégie</option><option>Créer mes contenus</option><option>Animer mes réseaux sociaux</option><option>Faire le point ensemble</option></select></label>
          <label><span>En quelques mots</span><textarea name="message" rows={3} placeholder="Où en êtes-vous aujourd’hui ?" /></label>
          <button className="button button--form" type="submit">Envoyer mon signal <span aria-hidden="true">↗</span></button>
          <p className="form-note" aria-live="polite">{submitted ? "Votre messagerie va s’ouvrir — à tout de suite." : "Réponse humaine, sans robot ni relance automatique."}</p>
        </form>
      </section>

      <footer className="footer">
        <a className="brand brand--footer" href="#accueil"><span className="brand-mark">b/</span><span className="brand-name">besser version</span></a>
        <p>Marketing digital · Stratégie · Community Management</p>
        <div><span>Micro-entreprise · Lille, France</span><span>© 2026 Besser Version</span></div>
      </footer>
    </main>
  );
}
