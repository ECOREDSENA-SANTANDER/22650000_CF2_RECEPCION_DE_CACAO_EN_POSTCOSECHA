export default {
  global: {
    Name: 'Calidad del grano de cacao',
    Description:
      'Este componente formativo tiene como objetivo identificar las técnicas y parámetros que determinan la calidad del grano de cacao, un aspecto fundamental que influye en su valor comercial, su adecuación para procesos industriales y su aceptación en diversos mercados.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Factores de calidad del grano de cacao',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Factores físicos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Factores organolépticos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Factores sanitarios ',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Criterios de aceptación',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Normas nacionales e internacionales',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Técnicas de análisis y evaluación de calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Corte del grano',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Evaluación sensorial',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Medición de humedad ',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Detección de impurezas',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Evaluación de fermentación',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Importancia de la calidad del cacao',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Relación con el proceso de recepción',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Impacto en la cadena de valor',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Clasificación comercial del grano',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Uso en agroindustria',
            hash: 't_3_4',
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
        download: 'downloads/dist.pdf',
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
      tema: 'Factores de calidad del grano de cacao',
      referencia:
        'Machado Cuellar, L., Murcia Torrejano, V., Guzmán Pacheco, K. Y., Quintero Sebay, M. L., Guevara Martínez, N. C., & Dussan Aldana, J. (2023). Manual técnico de análisis físico y sensorial de cacao. Servicio Nacional de Aprendizaje (SENA).',
      tipo: 'PDF',
      link: 'https://repositorio.sena.edu.co/handle/11404/8337',
    },
    {
      tema: 'Factores de calidad del grano de cacao',
      referencia:
        'European Forest Institute (EFI). (2021). Diagnóstico de la cadena de valor del cacao y mapeo de los indicadores y sistemas de información existentes: Resultado del diagnóstico participativo en Colombia.',
      tipo: 'PDF',
      link:
        'https://euredd.efi.int/wp-content/uploads/2022/09/Informe-1_Diagnostico-cadena-Cacao_Colombia.pdf',
    },
    {
      tema: 'Factores de calidad del grano de cacao ',
      referencia:
        'TvAgro. (2022). Cadena productiva del cacao orgánico - TvAgro por Juan Gonzalo Angel Restrepo.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=SfQdp_XY6o0',
    },
  ],
  glosario: [
    {
      termino: 'Acidez',
      significado:
        'Característica sensorial que influye en el sabor del cacao.',
    },
    {
      termino: 'Amargor',
      significado:
        'Sabor característico del cacao, deseado en ciertas proporciones.',
    },
    {
      termino: 'Análisis físico',
      significado: 'Evaluación del tamaño, peso y apariencia del grano.',
    },
    {
      termino: 'Análisis sensorial',
      significado: 'Análisis del aroma, sabor, textura y apariencia del grano.',
    },
    {
      termino: 'Cadena de valor',
      significado:
        'Etapas que agregan valor al cacao desde la producción hasta el consumidor.',
    },
    {
      termino: 'Clasificación comercial',
      significado: 'Categorización del grano según su calidad para el mercado.',
    },
    {
      termino: 'Corte del grano',
      significado:
        'Técnica para observar el interior del grano y evaluar su fermentación.',
    },
    {
      termino: 'Criollo',
      significado: 'Variedad de cacao de alta calidad y sabor refinado.',
    },
    {
      termino: 'Evaluación sensorial',
      significado: 'Evaluación del sabor, aroma y textura del cacao.',
    },
    {
      termino: 'Grano partido',
      significado: 'Grano dañado, indicador de mala manipulación o calidad.',
    },
    {
      termino: 'Granos planos',
      significado: 'Granos sin desarrollo, considerados defectuosos.',
    },
    {
      termino: 'Higiene',
      significado: 'Condición necesaria para asegurar la inocuidad del cacao.',
    },
    {
      termino: 'Impurezas',
      significado:
        'Material extraño presente en el grano como piedras o palos.',
    },
    {
      termino: 'Moho',
      significado:
        'Hongo que puede crecer en granos mal secados o almacenados.',
    },
    {
      termino: 'Peso del grano',
      significado: 'Uno de los criterios físicos de calidad.',
    },
    {
      termino: 'Plagas',
      significado: 'Insectos u organismos que pueden dañar el cacao.',
    },
    {
      termino: 'Rendimiento',
      significado: 'Cantidad de cacao utilizable tras el procesamiento.',
    },
    {
      termino: 'Sabor',
      significado: 'Sensación gustativa que ofrece el cacao.',
    },
    {
      termino: 'Sanidad',
      significado: 'Condición libre de contaminantes o enfermedades.',
    },
    {
      termino: 'Secado',
      significado:
        'Etapa crítica para reducir la humedad y conservar el grano.',
    },
    {
      termino: 'Selección',
      significado: 'Proceso de separar granos defectuosos.',
    },
    {
      termino: 'Textura',
      significado: 'Sensación física del grano o del producto final.',
    },
    {
      termino: 'Tostado',
      significado:
        'Proceso de calentamiento para resaltar los sabores del cacao.',
    },
    {
      termino: 'Variedad',
      significado:
        'Tipo genético de cacao (criollo, forastero, trinitario, etc.).',
    },
  ],
  referencias: [
    {
      referencia:
        'Cacao de Excelencia. (2023). Guía para la evaluación de la calidad y el sabor del cacao.',
      link:
        'https://www.cacaoofexcellence.org/fileadmin/Websites/CocoaOfExcellence/docs/27Sept/Guia-Calidad%20y%20Sabor%20del%20Cacao-27Sept2023%20actualizada.pdf',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2021). Cadena de cacao.',
      link:
        'https://sioc.minagricultura.gov.co/Cacao/Documentos/2021-03-31%20Cifras%20Sectoriales.pdf',
    },
    {
      referencia:
        'Proyecto ColombiaMide. (2022). ColombiaMide apoyó el trabajo de normalización para el fortalecimiento de las cadenas de cacao y sus derivados y de aguacate Hass. ColombiaMide.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2019). Características sensoriales de granos y licor de cacao por un panel de jueces en entrenamiento.',
      link:
        'https://revistas.sena.edu.co/index.php/sennova/article/view/3232/4026',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Javier Pacheco Wandurraga',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Johann Sebastián Teran Carvajal',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
}
