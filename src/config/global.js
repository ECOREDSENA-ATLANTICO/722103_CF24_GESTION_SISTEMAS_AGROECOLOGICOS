export default {
  global: {
    componenteFormativo:
      'Planificación y evaluación de actividades del plan de manejo agroecológico.',
    descripcionCurso:
      'Este componente formativo se enfoca en la extensión rural y los métodos y técnicas existentes para llevar a cabo los procesos de capacitación y aprendizaje con la comunidad campesina, además se establecen los indicadores para evaluar los agroecosistemas, haciendo énfasis en la metodología del marco para la evaluación de sistemas de manejo de recursos naturales, incorporando indicadores de sustentabilidad (MESMIS).',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Extensión rural',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Objetivos y retos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Enfoque y diagnóstico participativo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Comunicación',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Métodos de extensión rural ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Métodos individuales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Métodos grupales ',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Métodos masivos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Técnicas',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Medición de indicadores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Metodología MESMIS',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Evaluación de la sustentabilidad mediante MESMIS',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Extensión rural',
      referencia:
        'Ardila, J. (2010). Extensión rural para el desarrollo de la agricultura y la seguridad alimentaria. Aspectos conceptuales, situación y una visión de futuro. Instituto Interamericano de Cooperación para la Agricultura (ICA). ISBN 978-92-9248-213-8',
      tipo: 'Libro',
      link: 'https://repositorio.iica.int/handle/11324/19501 ',
    },
    {
      tema: '2. Métodos de extensión rural',
      referencia:
        'INTA (2009). Manual del extensionista. Proyecto de la piscicultura rural.',
      tipo: 'Manual',
      descarga: '/downloads/prueba.pdf',
    },
    {
      tema: '2. Métodos de extensión rural',
      referencia:
        'Ecosistemas de recursos educativos digitales. (2021, 14 de mayo). Herramientas de capacitación para productores rurales. [Video]. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PZJfJq_uDbw',
    },
    {
      tema: '3.  Medición de indicadores',
      referencia:
        'Arnés, E. y Astier. M. (2018). Sostenibilidad en sistemas de manejo de recursos naturales en países andinos. 978-92-3-300101-5, 978-607-30-0870-9',
      tipo: 'Libro',
      descarga: '/downloads/MESMIS.pdf',
    },
    {
      tema: '3.  Medición de indicadores',
      referencia:
        'Carreño, J. Barón, E. y Camargo, E. (2018). Metodologías para la estimación de sostenibilidad agropecuaria. Libros Universidad Nacional Abierta ya Distancia.',
      tipo: 'Articulo',
      descarga: '/downloads/Metodologias.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Capacitación',
      significado:
        'acción y efecto que permite fortalecer las competencias para el desarrollo de actividades que buscan el aumento de la productividad y mejoramiento de la calidad de vida.',
    },
    {
      termino: 'Comunicación',
      significado: 'diálogo escrito o verbal entre dos o más personas.',
    },
    {
      termino: 'Desarrollo sustentable',
      significado:
        'desarrollo que permite satisfacer las necesidades actuales de la población, sin afectar la capacidad para satisfacer las necesidades de las próximas generaciones.',
    },
    {
      termino: 'Extensionista',
      significado:
        'persona encargada de llevar a cabo el proceso de extensión, es decir de capacitar y enseñar de forma permanente las gestiones del desarrollo rural.',
    },
    {
      termino: 'Indicador de sustentabilidad',
      significado:
        'características de desempeño económico, ambiental y social, que posibilitan gestionar la sustentabilidad, por medio de la medición, evaluación, monitoreo y mejora de estos.',
    },
    {
      termino: 'Sustentabilidad',
      significado:
        'producción de bienes y servicios sin superar la tasa de reposición de recursos naturales.',
    },
    {
      termino: 'Técnicas de comunicación',
      significado:
        'conjunto de pautas que permiten un diálogo e intercomunicación efectiva.',
    },
    {
      termino: 'Transferencia de tecnología',
      significado:
        'proceso por medio del cual los adelantos tecnológicos, conocimientos, técnicas, son implementados y utilizados por los sistemas y unidades productivas, empresas, agricultores y comunidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Camargo, E. Barón, E. y Carreño, J. (2020). Desarrollo y extensión rural.: Estrategias para el fortalecimiento de la agricultura familiar campesina. Libros Universidad Nacional Abierta ya Distancia, 1-125.',
      link: 'https://hemeroteca.unad.edu.co/index.php/book/article/view/3718',
    },
    {
      referencia:
        'Carreño, J. Barón, E. y Camargo, E. (2018). Metodologías para la estimación de sostenibilidad agropecuaria. Libros Universidad Nacional Abierta ya Distancia.',
      link: 'https://doi.org/10.22490/9789586516501',
    },
    {
      referencia:
        'Castillo, J. Hinestroza, A. y Dussán, L. (2011). Fundamentos de extensión rural para transferencia y adopción de tecnología en el sector palmero (No. Doc. 26790) CO-BAC, Bogotá).',
      link:
        'https://www.cenipalma.org/wp-content/uploads/2018/12/Cartilla-Fundamentos-.pdf',
    },
    {
      referencia:
        'Corredor, S. Páez, M. y Fonseca, J. (2019). Desarrollo y extensión rural.: Estrategias para el fortalecimiento de la agricultura familiar campesina. ISBN:    978-958-651-730-0.',
      link:
        'https://hemeroteca.unad.edu.co/index.php/book/article/view/3718/3739',
    },
    {
      referencia:
        'Domínguez, M. y Blancas, F. y Guerrero, F. González, M. (2011). Una revisión crítica para la construcción de indicadores sintéticos. Revista de Métodos Cuantitativos para la Economía y la Empresa, 11, 41-70.',
      link: 'https://www.econstor.eu/handle/10419/59089',
    },
    {
      referencia:
        'Jurado, C. (2019). Enfoques de Extensión Rural. Imaginarios en la voz de sus actores universitarios. Universidad de Manizales, Facultad de Ciencias Sociales y Humanas.',
      link: 'https://ridum.umanizales.edu.co/xmlui/handle/20.500.12746/3755',
    },
    {
      referencia:
        'Landini, F. (2016). Concepción de extensión rural en 10 países latinoamericanos. Andamios, 13(30), 211-236.',
      link:
        'http://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S1870-00632016000100211&lng=es&tlng=es.',
    },
    {
      referencia:
        'Masera, O. y López, S. (2000). Sustentabilidad y sistemas campesinos. Cinco experiencias de evaluación en el México rural (Vol. 2). Ediciones Paraninfo, SA.',
      link:
        'https://books.google.es/books?hl=es&lr=&id=40HUBgAAQBAJ&oi=fnd&pg=PA9&dq=asera,++O.++R.,++M.++Astier,++y++S.++L%C3%B3pez-Ridaura.++1999.++Sustentabilidad++y++manejo++de++recursos++naturales:+el+marco+MESMIS.+M%C3%A9xico.+Mundiprensa.&ots=rCfy5vzx-R&sig=gBhsata3jAFr5nm21SoVvUtKLS8',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
