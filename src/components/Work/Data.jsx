import Work1 from '../../assests/work1.jpg';
import Work2 from '../../assests/work2.jpg';
import Work3 from '../../assests/work3.svg';
import Feixe from '../../assests/Feixe Filmes.svg';
import DrBruno from '../../assests/Dr-bruno.svg';
import PassaporteAcessivel from '../../assests/Passaporte Acessivel.svg';
import Wewi from '../../assests/Wewi.svg';
import Alquimia from '../../assests/Alquimia.svg';
import PedraAtelie from '../../assests/PedraAtelie.png';
import Hang from '../../assests/Hang.png';
import OleCasas from '../../assests/OleCasas.png';

export const projectsData = [
  // Primeiros 2 ecommerces e 2 sites
  {
    id: 1,
    image: PedraAtelie,
    title: "Ecommerce É Pedra Ateliê",
    category: "ecommerce(shopify)",
    href: "https://epedra.com",
    repo: "shopify"
  },
  {
    id: 2,
    image: Alquimia,
    title: "Ecommerce Alquimia e Herbalismo",
    category: "ecommerce(shopify)",
    href: "https://d958a7-73.myshopify.com/",
    repo: "shopify"
  },
  {
    id: 3,
    image: Feixe,
    title: "Site Portfólio Feixe Filmes",
    category: "sites",
    href: "https://www.feixefilmes.com",
    repo: "wix"
  },
  {
    id: 4,
    image: PassaporteAcessivel,
    title: "Plataforma de destinos Passaporte Acessível",
    category: "sites",
    href: "https://www.passaporteacessivel.com.br/",
    repo: "wix"
  },
  
  // Outros projetos
  {
    id: 5,
    image: Wewi,
    title: "Ecommerce Wewi Refri Saudável",
    category: "ecommerce(shopify)",
    href: "https://f7a173-3a.myshopify.com/",
    repo: "shopify"
  },
  {
    id: 6,
    image: Hang,
    title: "Ecommerce Hang",
    category: "ecommerce(shopify)",
    href: "https://eb3969-49.myshopify.com",
    repo: "shopify"
  },
  {
    id: 7,
    image: OleCasas,
    title: "Site Institucional Olé Casas",
    category: "sites",
    href: "https://olecasas.com.br",
    repo: "https://github.com/eduardoandraade"
  },
  {
    id: 8,
    image: DrBruno,
    title: "Site Institucional Dr Bruno Ferreira",
    category: "sites",
    href: "https://dr-brunoferreira.vercel.app/",
    repo: "https://github.com/eduardoandraade/blog-next13"
  },
  {
    id: 9,
    image: Work1,
    title: "Site Profissional Canil Tempo de Kairos",
    category: "sites",
    href: "https://caniltempodekairos.pages.dev/",
    repo: "https://github.com/eduardoandraade/landing-page-tempo-de-kairos"
  },
  {
    id: 10,
    image: Work3,
    title: "Site Profissional Benevides Consultoria Fitness",
    category: "sites",
    href: "https://benevides-landing-page.vercel.app/",
    repo: "https://github.com/eduardoandraade/benevides-landing-page"
  },

  // Form Project
  {
    id: 11,
    image: Work2,
    title: "Formulário Avaliação de Atendimento",
    category: "formulários",
    href: "https://sistema-avaliacao-atendimento.vercel.app/",
    repo: "https://github.com/eduardoandraade/parko-form-feedback"
  },
];

export const projectsNav = [
  {
    name: 'todos',
  },
  {
    name: 'sites'
  },
  {
    name: 'ecommerce(shopify)',
  },
  {
    name: 'formulários'
  }
];
