<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p En este componente formativo se establecen la importancia de la población rural, quienes, por medio de un instrumento como la extensión rural, logran de forma participativa potenciar sus capacidades de autogestión y adquirir conocimientos, hábitos y actitudes que modifican la manera de llevar a cabo los procesos, a través de la implementación de métodos individuales como la visita a la finca, atención en la oficina o por medio de la comunicación en línea; métodos grupales que pueden ser de carácter expositivos (como las reuniones informativas, las charlas técnicas, las conferencias) o demostrativos (como las demostraciones de técnicas y métodos, demostraciones de resultados, talleres y salidas o días de campo) métodos masivos ya sean impresos (como el periódico, revistas, cartillas, boletines, entre otros) y audiovisuales (como televisión, radio, internet), los cuales requieren de la adecuada comunicación y enfoque participativo para lograr cumplir los objetivos y retos de la extensión rural.

    p Adicionalmente, en este componente se analiza la medición de indicadores, incluyendo la metodología MESMIS - Marco para la evaluación de sistemas de manejo de recursos naturales, incorporando indicadores de sustentabilidad, la cual mediante un ciclo de 6 pasos permite realizar la evaluación de la sustentabilidad de los agroecosistemas, teniendo en cuenta los atributos y criterios.

    p.mb-5 Así pues, un resumen de lo visto en el presente componente podrá ser visualizado en el siguiente mapa conceptual.


    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
