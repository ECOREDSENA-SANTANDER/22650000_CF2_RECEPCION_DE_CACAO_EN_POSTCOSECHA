<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Importancia de la calidad del cacao

      separador
      #t_1_1.titulo-segundo.mb-5
        h2 3.1 Relación con el proceso de recepción
      separador
      #t_1_2.titulo-segundo.mb-5
        h2 3.2 Impacto en la cadena de valor 
      separador
      #t_1_3.titulo-segundo.mb-5
        h2 3.3 Clasificación comercial del grano
      separador
      #t_1_4.titulo-segundo.mb-5
        h2 3.4 Uso en agroindustria
     












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
