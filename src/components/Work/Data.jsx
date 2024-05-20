import Work1 from '../../assests/work1.jpg'
import Work2 from '../../assests/work2.jpg'
import Work3 from '../../assests/work3.svg'
import Feixe from '../../assests/Feixe Filmes.svg'
import DrBruno from '../../assests/Dr-bruno.svg'
import PassaporteAcessivel from '../../assests/Passaporte Acessivel.svg'
import Wewi from '../../assests/Wewi.svg'
import Alquimia from '../../assests/Alquimia.svg'


export const projectsData = [
  {
    id: 1,
    image: Feixe,
    title: "Site Portfólio Feixe Filmes",
    category: "aplicações web",
    href: "https://www.feixefilmes.com",
    repo: "wix"
  },
  {
    id: 2,
    image: DrBruno,
    title: "Site Institucional Dr Bruno Ferreira",
    category: "aplicações web",
    href: "https://dr-brunoferreira.vercel.app/",
    repo: "https://github.com/eduardoandraade/blog-next13"
  },
  {
    id: 3,
    image: Wewi,
    title: "Ecommerce Wewi Refri Saúdavel",
    category: "ecommerce(shopify)",
    href: "https://f7a173-3a.myshopify.com/",
    repo: "shopify"
  },
  {
    id: 4,
    image: Alquimia,
    title: "Ecommerce Alquimia e Herbalismo",
    category: "ecommerce(shopify)",
    href: "https://d958a7-73.myshopify.com/",
    repo: "shopify"
  },
  {
    id: 5,
    image: PassaporteAcessivel,
    title: "Plataforma de destinos Passporte Acessível",
    category: "aplicações web",
    href: "https://www.passaporteacessivel.com.br/",
    repo: "wix"
  },
  {
    id: 6,
    image: Work2,
    title: "Formulário Avalição de Atendimento",
    category: "formulários",
    href: "https://sistema-avaliacao-atendimento.vercel.app/",
    repo: "https://github.com/eduardoandraade/parko-form-feedback"
  },
  {
    id: 7,
    image: Work1,
    title: "Site Profissional Canil Tempo de Kairos",
    category: "aplicações web",
    href: "https://caniltempodekairos.pages.dev/",
    repo: "https://github.com/eduardoandraade/landing-page-tempo-de-kairos"
  },
  {
    id: 8,
    image: Work3,
    title: "Site Profissional Benevides Consultoria Fitness",
    category: "aplicações web",
    href: "https://benevides-landing-page.vercel.app/",
    repo: "https://github.com/eduardoandraade/benevides-landing-page"
  },
];

  export const projectsNav = [
    {
        name: 'todos',
    },
    {
        name: 'aplicações web'
    },
    {
        name: 'ecommerce(shopify)',
    },
    {
      name: 'formulários'
    }
  ]