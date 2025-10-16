<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Factores de calidad del grano de cacao
        
      separador
      #t_1_1.titulo-segundo.mb-5
        h2 1.1 Factores físicos
      separador
      #t_1_2.titulo-segundo.mb-5
        h2 1.2 Factores organolépticos 
      separador
      #t_1_3.titulo-segundo.mb-5
        h2 1.3 Factores sanitarios 
      separador
      #t_1_4.titulo-segundo.mb-5
        h2 1.4 Criterios de aceptación
      separador
      #t_1_5.titulo-segundo.mb-5
        h2 1.5 Normas nacionales e internacionales
















        

  </template>

<script>
export default {
  name: 'Tema1',
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
