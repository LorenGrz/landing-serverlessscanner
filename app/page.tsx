import Image from 'next/image';
import Icon from '../components/Icon';

const basePath = process.env.GITHUB_ACTIONS ? '/landing-serverlessscanner' : '';

const FEATURES = [
  {
    icon: 'upload_file',
    title: 'Scan de arquitectura',
    body: 'Subí diagramas, capturas o un README y describí tu stack; el scanner calcula un score de preparación serverless.',
  },
  {
    icon: 'scatter_plot',
    title: 'Matriz ahorro vs. complejidad',
    body: 'Visualizá de un vistazo qué migrar primero: mayor ahorro, menor complejidad.',
  },
  {
    icon: 'block',
    title: 'Sección "No migrar"',
    body: 'Servicios marcados como riesgosos con la razón técnica y una fecha sugerida para revisar de nuevo.',
  },
  {
    icon: 'checklist',
    title: 'Roadmap de 30 días',
    body: 'Checklist semana a semana, de aprovisionamiento IAM hasta el corte y desmantelamiento final.',
  },
  {
    icon: 'code_blocks',
    title: 'Preview de código SAM',
    body: 'Cada oportunidad de migración incluye el template de Infrastructure-as-Code listo para deployar.',
  },
  {
    icon: 'picture_as_pdf',
    title: 'Export ejecutivo',
    body: 'Generá un PDF del análisis completo para compartir con stakeholders no técnicos.',
  },
];

const STACK = [
  'React 18',
  'TypeScript',
  'Tailwind CSS',
  'Vite',
  'AWS Lambda (Node.js 22, arm64)',
  'Amazon API Gateway',
  'AWS SAM',
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 pb-16 pt-20 text-center md:pt-28">
        <div className="flex items-center gap-2 rounded-full border border-outline-variant bg-surface-alt px-4 py-1.5">
          <Icon name="qr_code_scanner" className="text-accent" />
          <span className="text-sm font-bold text-accent">Serverless Scanner</span>
        </div>
        <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight text-on-surface md:text-6xl">
          Convertí tu infraestructura en un roadmap serverless accionable, en minutos
        </h1>
        <p className="max-w-2xl text-lg text-on-surface-variant">
          Analiza tu infraestructura SaaS existente (EC2, servidores tradicionales) e identifica las
          oportunidades de mayor ROI para migrar a AWS serverless. Calcula un score de preparación
          (0–100), estima el ahorro anual por servicio, y genera un plan de migración de 30 días con
          código SAM listo para deployar — pensado para que un CTO o arquitecto tome decisiones sin
          auditar todo a mano.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/LorenGrz/ServerlessScanner"
            className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-on-primary shadow-md transition-transform hover:scale-[1.02]"
          >
            <Icon name="code" />
            Ver el código
          </a>
          <a
            href="#features"
            className="flex items-center gap-2 rounded-xl border border-outline-variant px-6 py-3 font-bold text-on-surface transition-colors hover:bg-surface-alt"
          >
            Cómo funciona
          </a>
        </div>
      </section>

      {/* Screenshot */}
      <section className="bg-surface-alt py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="overflow-hidden rounded-2xl border border-outline-variant bg-surface shadow-lg">
            <Image
              src={`${basePath}/screenshot-new-analysis.png`}
              alt="Pantalla de nuevo análisis en Serverless Scanner: subida de diagramas y selección de stack tecnológico"
              width={1440}
              height={900}
              className="h-auto w-full"
              priority
            />
          </div>
          <p className="mx-auto mt-6 max-w-xl text-center text-sm text-on-surface-variant">
            Paso 1: subís tus assets. Paso 2: describís el stack. El scanner hace el resto.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-3 text-center font-display text-3xl font-bold text-on-surface">
          Qué obtenés del análisis
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-on-surface-variant">
          Una auditoría de arquitectura completa, convertida en decisiones concretas y priorizadas.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-outline-variant bg-surface p-6 shadow-sm"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-bg/20">
                <Icon name={f.icon} className="text-accent" />
              </div>
              <h3 className="mb-2 font-bold text-on-surface">{f.title}</h3>
              <p className="text-sm text-on-surface-variant">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="bg-on-surface py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-3 font-display text-3xl font-bold">Stack técnico</h2>
          <p className="mx-auto mb-10 max-w-2xl text-white/80">
            Frontend en React sirviendo desde una única función Lambda con response streaming detrás
            de API Gateway — infraestructura mínima, costo casi nulo en tráfico bajo.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {STACK.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-12 text-center">
        <div className="flex items-center gap-1.5">
          <Icon name="qr_code_scanner" filled className="text-accent" />
          <span className="font-display font-bold text-on-surface">Serverless Scanner</span>
        </div>
        <p className="text-sm text-on-surface-variant">
          Proyecto de portfolio — Lorenzo Graizzaro.
        </p>
        <a
          href="mailto:lorenzograizzaro55@gmail.com"
          className="text-sm font-semibold text-accent underline underline-offset-4"
        >
          lorenzograizzaro55@gmail.com
        </a>
      </footer>
    </main>
  );
}
