<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Medición de indicadores
    
    p En la búsqueda de soluciones para las problemáticas sociales que sufre la humanidad diariamente como la pobreza, el hambre, la desigualdad, la degradación ambiental, la violencia, las injusticias, entre otras, las cuales paradójicamente se presentan en mayor proporción en las comunidades y la población que se encarga de la agricultura familiar y campesina, se han implementado estrategias erróneas que ha afectado y agudizado estas problemáticas.
    p.mb-5 Por lo anterior, es necesario llevar a cabo la transformación de la agricultura y los sistemas alimentarios, la unión del conocimiento científico y los saberes locales, la minimización de los intermediarios en la cadena de producción y comercialización, para así lograr aportar a mejorar las necesidades actuales y futuras.

    .row.mb-5.bg_grad-07.justify-content-center
      .col-lg-9.align-content-center.order-2.order-lg-1
        p.mb-0.px-5.py-3 Se deben realizar seguimientos por medio de indicadores que permiten comprender y llevar a cabo la evaluación de los agroecosistemas campesinos, es decir establecer que estos conserven y mantengan una producción estable en el tiempo, a pesar de las limitaciones tecnológicas, climáticas, ecológicas; respetando el entorno, la oferta ambiental y la base biológica, como también satisfaciendo el componente social. 
      .col-md-6.col-lg-3.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/1.svg', alt='Imagen de apoyo')
    .cajon.color-acento-contenido.bgr_11.mb-5
      p.mb-0.px-5.py-4 Debido a que los indicadores son estadísticas que condensan el comportamiento (estado, evolución y dinámica) de variables de interés y que por medio de su análisis se puede llevar a cabo procesos de mejora; es importante la adecuada obtención y procesamiento de la información, logrando obtener indicadores confiables, que sean fáciles de aplicar, que posibiliten incorporar cambios con el paso del tiempo, que sean fáciles de interpretar, universales, pero al mismo tiempo se puedan aplicar a casos particulares.
  
    .row.mb-5.bgr_11.p-4.justify-content-center.position-relative
      .col-lg-10.align-content-center.order-2.order-lg-1
        p Como lo indica Domínguez, Blancas, Guerrero y González (2011), para la elaboración de los indicadores hay diferentes metodologías en función de clase de índice que se quiere obtener, existiendo métodos como:
        div
          ol.lista-ol
            li 
              span.text-bold 1. 
              | Agregación de indicadores simples.
            li 
              span.text-bold 2. 
              | Construcción participativa.
            li 
              span.text-bold 3. 
              | Análisis multivariable. 
            li 
              span.text-bold 4. 
              | Análisis de componentes principales.
            li 
              span.text-bold 5. 
              | Análisis factorial.
            li 
              span.text-bold 6. 
              | Escalamiento óptimo. 
      .col-md-6.col-lg-2.order-1.order-lg-2.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/4.svg', alt='Imagen de apoyo')
      img.pst_21(src='@/assets/curso/temas/tema3/5.svg', alt='Imagen de apoyo')
    
    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Metodología MESMIS
    
    p.mb-5 La metodología del Marco para la evaluación de sistemas de manejo de recursos naturales incorporando indicadores de sustentabilidad (MESMIS) es una herramienta innovadora para hacer frente a los interrogantes planteados en el área de evaluaciones de sustentabilidad. Esta se basa en el enfoque participativo de quienes hacen parte del proceso evaluativo en los agroecosistemas, que cuenta con una estructura flexible que permite adaptarse a diferentes necesidades y ambientes.
    
    .cajon.color-secundario.p-4.bgr_15.mb-5 
      p Sin embargo, la evaluación es específica y se realiza de forma personalizada, es decir, es para un sistema específico que esté en un lugar geográfico determinado o para una escala espacial y temporal definida. Esta sustentabilidad se evalúa de manera relativa o comparativa a través de la identificación de las debilidades y oportunidades en los ámbitos económico, social y ambiental. 
      p.mb-0 Para aplicar la metodología, se propone un ciclo de evaluación que comprende elementos o pasos que se ven en la siguiente figura:

    .titulo-sexto.color-acento-contenido
      h5 Figura 3.
      span Esquema general del MESMIS

    figure.mb-5(data-aos="zoom-in")
      img(src='@/assets/curso/temas/tema3/6.svg', alt='Se explica a continuación de la imagen el esquema general del MESMIS')

    p.mb-5 Para lo cual es necesario la identificación de atributos que poseen los agroecosistemas, como por ejemplo:

    SlyderF.mb-5(columnas="col-md-6 col-lg-4")
      .tarjeta.bgr_15.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/7.png' alt='AvatarTop')
        h2.text-center Equidad
        p.text-center Participación de todos los miembros en la toma de decisiones, la distribución de beneficios y responsabilidades.
      .tarjeta.bgr_15.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/8.png' alt='AvatarTop')
        h2.text-center Adaptabilidad
        p.text-center Capacidad de realizar los ajustes necesarios, cambios e innovación.
      .tarjeta.bgr_15.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/9.png' alt='AvatarTop')
        h2.text-center Estabilidad
        p.text-center Capacidad de conservar y mantener una producción estable en el tiempo.
      .tarjeta.bgr_15.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/10.png' alt='AvatarTop')
        h2.text-center Productividad
        p.text-center Capacidad de proveer bienes y servicios requeridos.
      .tarjeta.bgr_15.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/11.png' alt='AvatarTop')
        h2.text-center Resiliencia
        p.text-center Capacidad de retornar a un estado de equilibrio luego de alguna perturbación.
      .tarjeta.bgr_15.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/12.png' alt='AvatarTop')
        h2.text-center Confiabilidad
        p.text-center Capacidad para mantener interacciones.
      .tarjeta.bgr_15.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/13.png' alt='AvatarTop')
        h2.text-center Autodependencia
        p.text-center Capacidad para proveer insumos, recursos y procesos.
    
    p.mb-5 Para llevar a cabo un ciclo de evaluación del agroecosistema a través de la metodología MESMIS, se realiza a través de 6 pasos que requieren procesos como la identificación de los atributos, la definición de puntos críticos, la identificación de criterios de diagnóstico, la construcción de indicadores estratégicos en el ámbito social, ambiental y económico.

    .titulo-sexto.color-acento-contenido.mb-5
      h5 Figura 4.
      span Ciclo de evaluación del MESMIS

    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-10
        figure.mb-5
          img(src='@/assets/curso/temas/tema3/14.svg', alt='El ciclo de evaluación MESMIS se explica a continuación: 1. Paso 1: determinación del objeto de estudio, tiempo T1 2. Paso 2: determinación de los puntos críticos del sistema. 3. Paso 3: selección de indicadores estratégicos. 4. Paso 4: medición y monitoreo de indicadores. 5. Paso 5: presentación e integración de resultados. 6. Paso 6: conclusiones y recomendaciones.')

    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Evaluación de la sustentabilidad mediante MESMIS
    
    p.mb-5 Al realizar el proceso metodológico para la implementación de la evaluación de la sustentabilidad de agroecosistemas a través del MESMIS, se debe iniciar seleccionando y caracterizando el agroecosistema (finca, parcelas, unidad productiva, comunidad, entre otros.) por medio de instrumentos como la encuesta, entrevistas, visitas y observaciones que permitan obtener información con aspectos biofísicos, socioeconómicos, tecnológicos, biodiversidad, calidad de vida y unión familiar, para luego mediante la obtención y procesamientos de la información estructurar los indicadores. En la siguiente figura se puede ver un ejemplo de indicadores.

    .titulo-sexto.color-acento-contenido.mb-5
      h5 Figura 5.
      span Ejemplo de indicadores
    
    figure.mb-5
      img(src='@/assets/curso/temas/tema3/15.svg', alt='Calidad de vida: tipo de tenencia de la tierra, acceso a salud, a educación, disponibilidad de servicios públicos, calidad de vía de acceso, calidad de agua para consumo humano, condiciones y materiales de la vivienda, dotación de electrodomésticos.-Socioeconómico: integrantes y organización del núcleo familiar, roles en la actividad agropecuaria, precepción de la estabilidad financiera, acceso a créditos.-Manejo de cultivos: prácticas laborales, uso de abonos orgánicos y fertilizantes químicos, manejo de plagas y enfermedades, rotación de cultivos, disponibilidad de riego y control de arvences.')
      figcaption Nota. Sena (2022)

    p.mb-5 El segundo paso del ciclo de evaluación del MESMIS, consiste en la identificación de puntos críticos, para que se pueda emplear la elaboración de una matriz de Debilidades, Oportunidades, Fortalezas y Amenazas (DOFA) mediante actividades participativas que involucren todos los integrantes del agroecosistema, además la valoración de problemas e impactos que tengan mayor incidencia.
    

    .titulo-sexto.color-acento-contenido.mb-5
      h5 Tabla 1.
      span Ejemplo de plantas compañeras
    
    .row.justify-content-center
      .col-lg-8
        .tabla-a.mb-5
          table
            caption Nota. Carreño, J. Barón, y Camargo, E. (2018). Metodologías para la estimación de sostenibilidad agropecuaria.   
            thead
              tr
                th.ac.bgr_3 Atributos de sustentabilidad
                th.ac.bgr_3 Criterio de diagnóstico
                th.ac_1.bgr_3 Agroecosistema
            tbody
              tr
                td.bgr_17(rowspan=7).text-bold.text-center Productividad, estabilidad, resiliencia, adaptabilidad, equidad, autogestión 
                td.text-center.text-bold.bgr_18 Retornos
                td 
                  ul.fa-ul
                    li.mb-2
                      i.fa-li.fas.fa-leaf.bgr_19
                      | Rendimientos agrícolas inferiores al promedio de la región.
                    li
                      i.fa-li.fas.fa-leaf.bgr_19
                      | Ingresos insuficientes para atender necesidades básicas.
              tr
                td.text-center.text-bold.bgr_18 Eficiencia
                td
                  ul.fa-ul
                    li
                      i.fa-li.fas.fa-leaf.bgr_19
                      | Escasa rentabilidad del ejercicio agrícola.
              tr
                td.text-center.text-bold.bgr_18 Conservación
                td  
                  ul.fa-ul
                    li.mb-2
                      i.fa-li.fas.fa-leaf.bgr_19
                      | Alta dependencia de los insumos químicos.
                    li.mb-2
                      i.fa-li.fas.fa-leaf.bgr_19
                      | Escasa cobertura del suelo.
                    li.mb-2
                      i.fa-li.fas.fa-leaf.bgr_19
                      | Frecuentes ataques de plagas y enfermedades.
                    li.mb-2
                      i.fa-li.fas.fa-leaf.bgr_19
                      | Fuentes de agua.
                    li
                      i.fa-li.fas.fa-leaf.bgr_19
                      | Dependencia de fertilizantes.
              tr
                td.text-center.text-bold.bgr_18 Diversidad 
                td
                  ul.fa-ul
                    li.mb-2
                      i.fa-li.fas.fa-leaf.bgr_19
                      | Monocultivos.
                    li.mb-2
                      i.fa-li.fas.fa-leaf.bgr_19
                      | Protección de áreas de bosque.
                    li.mb-2
                      i.fa-li.fas.fa-leaf.bgr_19
                      | Pérdida de semillas locales.
                    li.mb-2
                      i.fa-li.fas.fa-leaf.bgr_19
                      | Biodiversidad.
              tr
                td.text-center.text-bold.bgr_18 Participación
                td
                  ul.fa-ul
                    li.mb-2
                      i.fa-li.fas.fa-leaf.bgr_19
                      | Relevo generacional.
                    li.mb-2
                      i.fa-li.fas.fa-leaf.bgr_19
                      | Mano de obra familiar.
                    li.mb-2
                      i.fa-li.fas.fa-leaf.bgr_19
                      | Activa participación en organizaciones.
              tr
                td.text-center.text-bold.bgr_18 Capacidad de cambio e innovación
                td  
                  ul.fa-ul
                    li.mb-2
                      i.fa-li.fas.fa-leaf.bgr_19
                      | Sistema de riego de alto consumo.
                    li.mb-2
                      i.fa-li.fas.fa-leaf.bgr_19
                      | Acceso a tecnología.
                    li.mb-2
                      i.fa-li.fas.fa-leaf.bgr_19
                      | Infraestructura tecnológica y financiera.
              tr
                td.text-center.text-bold.bgr_18 Autosuficiencia
                td
                  ul.fa-ul
                    li.mb-2
                      i.fa-li.fas.fa-leaf.bgr_19
                      | Dependencia e insumos externos.
    
    p.mb-5 De acuerdo con la metodología MESMIS, se deben identificar en los agroecosistemas, que atributos de sustentabilidad posee (equidad, adaptabilidad, estabilidad, productividad, resiliencia, confiabilidad, autodependencia) para luego evaluar varios criterios (estos varían de acuerdo con el agroecosistema) mediante indicadores.

    .titulo-sexto.color-acento-contenido.mb-5
      h5 Tabla 2.
      span Ejemplo de plantas compañeras

    .tabla-a.mb-5
      table
        caption Nota. Sena (2022)  
        thead
          tr
            th.ac_2.bgr_3 ATRIBUTO
            th.ac_2.bgr_3 CRITERIO
            th.ac_2.bgr_3 INDICADOR
            th.ac_4.bgr_3 UNIDAD DE MEDIDA
        tbody
          tr
            td.bgr_17(rowspan=12).text-bold.text-center Equidad
            td.text-center.text-bold.bgr_18(rowspan=6) Calidad de vida
            td Salario
            td % de ingresos salariales
          tr
            td Acceso a servicios sociales
            td % de agricultores con aportes a salud y pensión
          tr
            td(rowspan=2) Vías de acceso
            td % de vías con fácil acceso
          tr
            td % de vías pavimentadas 
          tr
            td Seguridad alimentaria
            td % de consumo de Kcal 
          tr
            td Esperanza de vida
            td  % de personas que nacen
          tr
            td.text-center.text-bold.bgr_18(rowspan=5) Participación
          tr
            td(rowspan=2) Cantidad y calidad de empleos requeridos
            td N° de personas/empleo
          tr
            td N° de empleos generados
          tr
            td(rowspan=2) Participación en organizaciones
            td N° de asociaciones locales
          tr
            td N° de personas participantes en asociaciones
          tr 
            td.text-center.text-bold.bgr_18 Evolución de empleo
            td Demanda de empleo temporal
            td N° de jornales/ha/año
          tr
            td.bgr_17(rowspan=5).text-bold.text-center Adaptabilidad
          tr
            td.text-center.text-bold.bgr_18(rowspan=3) Educación
            td(rowspan=2) Escolaridad
            td N° de personas matriculadas en un determinado nivel de educación
          tr
            td Número de escuelas y colegios (públicos y privados)
          tr 
            td Nivel de educación
            td % de personas del agroecosistema que tiene algún nivel de escolaridad
          tr
            td.text-center.text-bold.bgr_18 Adopción tecnológica
            td Empleo de tecnología
            td % de sistemas productivos con implementación tecnológica
          tr
            td.bgr_17(rowspan=13).text-bold.text-center Adaptabilidad
            td.text-center.text-bold.bgr_18(rowspan=9) Conservación de recursos
            td Calidad del suelo
            td % de agricultores con regular a buena calidad de suelo
          tr
            td Cobertura vegetal
            td pH, materia orgánica, nutrientes
          tr 
            td(rowspan=2) Disponibilidad de agua
            td N° de fuentes hídricas en el predio
          tr
            td % disponibilidad de agua /unidad de superficie
          tr
            td Calidad de agua
            td % de agricultores con regular a buena calidad de agua
          tr
            td Uso de abonos orgánicos
            td % de uso
          tr
            td Plagas y enfermedades (incidencia)
            td N° de casos/ha/año
          tr 
            td Plagas y enfermedades (severidad) 
            td % de afectación
          tr
            td Reforestación
            td % de sobrevivencia
          tr
            td.text-center.text-bold.bgr_18(rowspan=4) Biodiversidad
            td Especies agrícolas
            td N° de especies
          tr
            td Especies forestales
            td N° de especies
          tr
            td Especies pecuarias
            td N° de especies
          tr 
            td Especies de flora y fauna
            td % de biodiversidad x sistema productivo
          tr
            td.bgr_17(rowspan=7).text-bold.text-center Productividad
            td.text-center.text-bold.bgr_18(rowspan=4) Biodiversidad 
            td Rendimiento en forraje
            td Materia seca/ha/año
          tr
            td(rowspan=2) Rendimiento pecuario
            td Kg de carne/vaca/año
          tr
            td Lt de leche/vaca/año
          tr
            td Rendimiento cultivos
            td Crías/año
          tr
            td.text-center.text-bold.bgr_18 Rentabilidad
            td Utilidad
            td Kg cultivo/ha
          tr
            td.text-center.text-bold.bgr_18(rowspan=2) Retorno
            td Beneficio/Costo (B/C)
            td Rentabilidad
          tr
            td Valor presente neto VPR
            td Viabilidad o no de la inversión
          tr
            td.bgr_17(rowspan=7).text-bold.text-center Auto dependencia
            td.text-center.text-bold.bgr_18 Uso de insumos externo 
            td Uso de agroquímicos
            td % de agroquímicos empleados
          tr
            td.text-center.text-bold.bgr_18 Uso de semillas locales 
            td Uso de semillas
            td N° de semillas/ha
          tr
            td.text-center.text-bold.bgr_18 Ahorro interno
            td Capacidad de ahorro
            td Procesos productivos con recursos propios
       
    p.mb-5 Estos indicadores requieren de un juicio de valor de desempeño en el agroecosistema, donde se puede emplear para la valoración una escala numérica, por ejemplo, de 1 a 5, donde 1 corresponde al nivel más bajo o no deseable y 5 deseable.
    
    .titulo-sexto.color-acento-contenido.mb-5
      h5 Tabla 3.
      span Ejemplo aplicación escala valorativa

    .tabla-a.mb-5
      table
        caption Nota. Carreño, J. Barón, y Camargo, E. (2018). Metodologías para la estimación de sostenibilidad agropecuaria.     
        thead
          tr
            th.bgr_18 Desempeño %
            th.bgr_17 Cobertura vegetal
            th.bgr_18 Disponibilidad  de agua (m3)
            th.bgr_17 Capacidad  de recarga (L/S)
        tbody
          tr
            td.bgr_18.text-bold 1
            td.bgr_17 <10
            td.bgr_18 0-62
            td.bgr_17 0-8
          tr
            td.bgr_18.text-bold 2
            td.bgr_17 10-30
            td.bgr_18 62-125
            td.bgr_17 8 – 17
          tr
            td.bgr_18.text-bold 3
            td.bgr_17 30 -50
            td.bgr_18 125 – 187
            td.bgr_17 17 – 25
          tr
            td.bgr_18.text-bold 4
            td.bgr_17 70-50
            td.bgr_18 187 – 250
            td.bgr_17 25 – 35
          tr
            td.bgr_18.text-bold 5
            td.bgr_17 >70
            td.bgr_18 >250
            td.bgr_17 >35
    
    p Por último, para finalizar el proceso de evaluación, se procede a generar las conclusiones sobre el estado, el desempeño y grado de sustentabilidad del agroecosistema evaluado, además se indican recomendaciones y estrategias para el manejo interior que permitan mejorar la sustentabilidad.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
