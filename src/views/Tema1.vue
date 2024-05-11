<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Extensión rural
    
    p.mb-5(data-aos="fade-down") La agricultura familiar campesina, en búsqueda de solucionar sus problemáticas referentes a la disminución de la productividad, la carencia de tecnología, la baja disponibilidad de mano de obra, ha originado la adopción de técnicas y labores enfocadas a la obtención de mayor rentabilidad, pero que generan consecuencias perjudiciales para la preservación de los recursos naturales y el medio ambiente.

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.d-grid
            figure.mb-3
              img.ti(src='@/assets/curso/temas/tema1/2.svg' alt='AvatarTop')
            p.mb-0 Este difícil panorama provocó la búsqueda de soluciones, la implementación de estrategias y modelos como la extensión rural, que permitieron alcanzar un desarrollo tecnológico que incorpora los aspectos económicos, sociales, culturales, ambientales y en general que cumpliera con las necesidades de la sociedad rural, por medio del empoderamiento y desarrollo regional.
    
    .row.mb-5
      .col-md-6.col-lg-4.order-2.order-lg-1(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/3.png' alt='AvatarTop')
      .col.lg-8.align-content-center.order-1.order-lg-2.mb-5
        p.mb-0 Según Jurado. (2019), la expresión de extensión rural surge y aparece como práctica en los Estados Unidos, siendo Seaman Asael Knapp considerado el padre o fundador del servicio de extensión; pero para el caso específico de Colombia los primeros pasos se dieron en 1941, por medio del Ministerio de Educación quien crea instrumentos para empezar a llevar educación al área rural, años más tarde se crean instituciones y programas de gran relevancia como:
    
    h2 Creación de instituciones y programas para el agro colombiano.
    p.mb-5 Por medio del Ministerio de Educación quien crea instrumentos para empezar a llevar educación al área rural, años más tarde se crean instituciones y programas de gran relevancia como:

    .row.justify-content-center.mb-5
      .col-lg-10.bgr_15.tarjeta.p-4
        h3 Línea de tiempo
        LineaTiempoB.color-secundario.mb-5(:datos="datosLineaTiempoB")
    
    .row.mb-5.bg_grad-01.justify-content-center
      .col-md-6.col-lg-4.mb-3
        figure
          img(src='@/assets/curso/temas/tema1/11.png' alt='AvatarTop')
      .col-lg-8.align-content-center(data-aos="fade-left")
        p.mb-0 Pero, <b>¿qué es la extensión rural?</b>, existen diversas concepciones como lo indica Landini (2016), se puede definir como un instrumento que permite impulsar el desarrollo de la comunidad campesina, al direccionar adecuadamente el aprovechamiento de los recursos y lograr brindar soluciones a las problemáticas existentes. Lo que conlleva a minimizar los índices de pobreza y aportar el aumento de la seguridad alimentaria; por medio de la identificación de los problemas, el uso, adopción y transmisión de la tecnología. Además, de los procesos de enseñanza constante que incluye la conexión y comunicación permanente entre todos los actores, es decir, comunidad campesina, técnicos, y organizaciones.
    
    separador

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1  Objetivos y retos
    
    figure
      img(src='@/assets/curso/temas/tema1/12.jpg', alt='Imagen de apoyo')
    .row.justify-content-center
      .col-lg-10
        div.justify-content-center.d-flex.mb-5
          p.bgr_1.p-4.mb-0 La extensión rural tiene la finalidad de promover el desarrollo rural, es decir lograr el crecimiento y mejoramiento de las condiciones de los campesinos, siendo necesario la identificación de las problemáticas que se presentan en este sector de la población y su disminución, a través de la diversificación de oportunidades, el acceso a la salud, educación, trabajo, alimento, tecnología y demás bienes públicos que generen bienestar, una mejor calidad de vida, disminución de los índices de pobreza, y aumento de los ingresos.
    
    .row.mb-5.justify-content-end.bg_grad-02
      .col-lg-8.align-content-center.p-3.p-lg-0
        p.mb-0 La extensión rural permite cuidar y proteger los recursos naturales, mejorar la producción de bienes y servicios, debido a que día a día, la producción de alimentos requiere y tiene mayor dependencia de la disponibilidad de los bienes y servicios naturales, lo que ha ocasionado deterioro y contaminación, por la utilización de forma irracional e intensiva del agua, el suelo, la biodiversidad y demás recursos, hasta el punto de comprometer y arriesgar la seguridad alimentaria.
      .col-lg-3(data-aos="fade-left") 
        figure
          img.d-none.d-lg-flex(src='@/assets/curso/temas/tema1/14.svg', alt='Imagen de apoyo')
    
    .row.mb-5.bg_grad-03
      .col-lg-5(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/15.svg', alt='Imagen de apoyo')
      .col-lg-6.align-content-center.p-3.p-lg-0
        p Esto hace necesario la aplicación de medidas y acciones que permitan restaurar el contexto rural, convirtiéndolo en un escenario que brinde oportunidades productivas desde el desarrollo sostenible, que implica el uso eficiente y eficaz de los recursos, la inclusión de tecnología y el aprovechamiento de los talentos, conocimientos, habilidades y cultura campesina. 
        p.mb-0 Los retos que tiene la extensión rural, se resumen en aumentar y optimizar los conocimientos y habilidades de los agricultores, sus familias y en general su comunidad, lo cual conlleva a generar cambios de actitud que le permitan alcanzar no sólo un desarrollo social y personal, sino también económico mediante la superación de los obstáculos y limitaciones financieras.
    
    
    .row.justify-content-end.mb-5
      .col-lg-11
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Propósitos de la extensión rural
    .row.mb-5.justify-content-center(data-aos="zoom-in")
      .col-lg-8
        figure.mb-5
          img.mb-3.d-none.d-lg-flex(src='@/assets/curso/temas/tema1/16.svg', alt='Se enumera el propósito según las habilidades y conocimientos de los agricultores, familias y la comunidad la extensión rural: familias rurales educadas, hogares rurales mejorados, comunidades más desarrolladas, finca y sistemas más productivos y comunidades participes para solución de sus problemas.')
          img.mb-3.d-flex.d-lg-none(src='@/assets/curso/temas/tema1/17.svg', alt='Se enumera el propósito según las habilidades y conocimientos de los agricultores, familias y la comunidad la extensión rural: familias rurales educadas, hogares rurales mejorados, comunidades más desarrolladas, finca y sistemas más productivos y comunidades participes para solución de sus problemas.')
          figcaption Nota. Corredor, E., Páez, E. y Fonseca, J. (2019). Desarrollo y extensión rural. Estrategias para el fortalecimiento de la agricultura familiar campesina.
    
    separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2  Enfoque y diagnóstico participativo 
    
    p.mb-5 Es importante resaltar, que las prácticas de desigualdad que sufren los campesinos y en especial las mujeres rurales; por lo que, la extensión rural cuenta con un enfoque participativo, que favorece los servicios de extensión integrales e igualitarios, además cuenta con principios y características que permite promover las capacidades económicas y sociales de la población rural, que se presentan en la siguiente infografía: 

    div.bg_grad-04.mb-5
      figure.mb-5
        img.d-none.d-lg-flex(src='@/assets/curso/temas/tema1/18.svg', alt='Imagen de apoyo')
        img.d-flex.d-lg-none(src='@/assets/curso/temas/tema1/19.svg', alt='Imagen de apoyo')
    
    .cajon.color-secundario.bgr_15.mb-5
      .row.justify-content-end
        .col-lg-8.align-content-center.p-5.p-lg-0
          p.mb-0 Esto se logra, por medio del diagnóstico rural participativo, que es una herramienta que permite llevar a cabo análisis y conocimiento de las necesidades e intereses rurales, por medio de la búsqueda y recopilación de información que permite un diagnóstico de la situación, para luego apropiarse, empoderarse de sus propias problemáticas, evaluar las diversas opciones y medidas de solución.
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/tema1/20.svg', alt='Imagen de apoyo')
    
    .row.mb-5.bg_grad-05
      p.mb-5 Dentro de las principales problemáticas que afectan el sector rural esta:
      .col-sm-6.col-lg-3.order-1.order-sm-2.order-lg-1.mb-3
        p.bgr_3.tarjeta.p-3 La informalidad.
        p.bgr_3.tarjeta.p-3 La falta de titularidad en la tenencia y uso del territorio.
        p.bgr_3.tarjeta.p-3 La ausencia o deterioro de la red vial (vías terciarias) que dificulta el acceso a mercados y comercialización de las cosechas.
        p.bgr_3.tarjeta.p-3 La afectación de los recursos naturales por la sobreexplotación.
        p.bgr_3.tarjeta.p-3 La desigualdad con respecto al sector urbano.
      .col-sm-6.col-lg-3.align-content-center.order-3.order-sm-3.order-lg-2
        p.mb-0 Siendo importante, lograr la satisfacción de necesidades básicas de la población, por medio de la producción y acceso a alimentos, lo que conlleva a obtener seguridad alimentaria, aumento de la productividad y competitividad, pero de una manera sostenible, donde se dé la protección y conservación de los recursos naturales y servicios ambientales.
      .col-lg-5.align-content-center.order-2.order-sm-1.order-lg-3.mb-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/21.svg', alt='Imagen de apoyo')
    
    .row.mb-5.justify-content-center
      .col-lg-10.bgr_15.tarjeta
        .row.p-4.justify-content-center
          .col-lg-8.order-2.order-lg-1.align-content-center
            p <b>Los procesos de extensión rural</b> están altamente relacionados con el aprendizaje, entendiendo por aprender el querer adoptar conocimientos, hábitos, actitudes y prácticas que aporten y cambien la forma de realizar las actividades, jugando como papel importante <b>la motivación,</b> porque los técnicos se encargan de impartir la información, pero son los campesinos quienes tienen que querer aprender y apropiarse de ellas.
            p.mb-0 Existen fases y diversas maneras de aprender, por ejemplo, por medio de los sentidos, las percepciones (experiencia, actitud o interés) la asociación (similitud, contraste) pero también se requiere que los agricultores presenten atención, que estén estimulados o con deseos de adquirir conocimientos, que se fijen metas ya sean individuales o grupales, que interpreten, apliquen y practiquen lo aprendido. 
          .col-sm-8.col-lg-4.order-1.order-lg-2.mb-5.mb-lg-0
            img(src='@/assets/curso/temas/tema1/24.png', alt='Imagen de apoyo')

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Fases del proceso de aprendizaje     
        figure.mb-5(data-aos="zoom-in")
          img.mb-3.d-none.d-lg-flex(src='@/assets/curso/temas/tema1/27.svg', alt='Se describen las fases del proceso de aprendizaje: 1. Obtener la atención 2. Despertar interés 3. Crear deseo de información. 4. Convencer para que actuen. 5. Lograr que actuen. 6. Alcanzar la satisfacción con el proceso.')
          img.mb-3.d-flex.d-lg-none(src='@/assets/curso/temas/tema1/28.svg', alt='Se describen las fases del proceso de aprendizaje: 1. Obtener la atención 2. Despertar interés 3. Crear deseo de información. 4. Convencer para que actuen. 5. Lograr que actuen. 6. Alcanzar la satisfacción con el proceso.')
    
    separador

    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3  Comunicación
    
    p La comunicación es uno de los principios básicos para la interacción social, la convivencia y los procesos de aprendizaje, por tanto, se considera un elemento fundamental para lograr la extensión rural. La comunicación debe ser efectiva y asertiva, ya sea de forma oral, escrita o corporal; donde todos los actores tengan participación y puedan expresar su opinión de forma respetuosa, teniendo en cuenta los elementos que la componen, los cuales son el emisor o fuente, el receptor, el canal, el mensaje y la retroalimentación, en la siguiente infografía se puede conocer el proceso: 

    .row.mb-5.justify-content-center
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema1/29.svg', alt='Imagen de apoyo')

    .cajon.color-secundario.bgr_15.p-5.mb-5
      p.mb-0 La comunicación juega un papel muy importante en la gestión de cualquier cosa, como es una herramienta para compartir pensamientos, ideas, opiniones y planes, se requiere para construir buenas relaciones con los demás al ayudar a comprender a los demás. Existen diferentes tipos de comunicación, en el siguiente video se observarán sus características:  
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
         
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: '1950',
        texto: 'División de extensión rural en el Ministerio de Agricultura.',
        icono: require('@/assets/curso/temas/tema1/4.png'),
      },
      {
        titulo: '1962',
        texto: 'El Instituto Colombiano Agropecuario ICA.',
        icono: require('@/assets/curso/temas/tema1/5.png'),
      },
      {
        titulo: '1992',
        texto:
          'Los centros regionales de capacitación, extensión y difusión  CRECED.',
        icono: require('@/assets/curso/temas/tema1/6.png'),
      },
      {
        titulo: '1993',
        texto:
          'La Corporación colombiana de investigación agropecuaria CORPOICA, actualmente conocida como AGROLAVIA.',
        icono: require('@/assets/curso/temas/tema1/7.png'),
      },
      {
        titulo: '1989',
        texto: 'El Sistema Nacional de Transferencia  SINTAP.',
        icono: require('@/assets/curso/temas/tema1/8.png'),
      },
      {
        titulo: '1994',
        texto:
          'El Programa Nacional de Transferencia de Tecnología Agropecuaria PRONATTA.',
        icono: require('@/assets/curso/temas/tema1/9.png'),
      },
      {
        titulo: '2017',
        texto:
          'El plan estratégico de Ciencia, Tecnología e Innovación del Sector Agropecuario Colombiano PECTIA, Sistema Nacional de Innovación Agropecuaria - SNIA.',
        icono: require('@/assets/curso/temas/tema1/10.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
