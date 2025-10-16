<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Técnicas de análisis y evaluación de calidad

      separador
      #t_2_1.titulo-segundo.mb-5
        h2 2.1 Corte del grano
      separador
      #t_2_2.titulo-segundo.mb-5
        h2 2.2 Evaluación sensorial
      separador
      #t_2_3.titulo-segundo.mb-5
        h2 2.3 Medición de humedad 
      separador
      #t_2_4.titulo-segundo.mb-5
        h2 2.4 Detección de impurezas
      separador
      #t_2_5.titulo-segundo.mb-5
        h2 2.5 Evaluación de fermentación





</template>

<script>
export default {
  name: 'Tema2',
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
