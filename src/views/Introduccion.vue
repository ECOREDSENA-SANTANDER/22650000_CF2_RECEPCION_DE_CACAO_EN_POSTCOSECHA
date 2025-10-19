<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-2
            img.img-t.img-a(src='@/assets/curso/intro/1.svg')
          .col-lg-10.ps-lg-0
            p.mb-lg-0.mb-4 La calidad del grano de cacao es un aspecto fundamental que determina su valor comercial, su aptitud para los procesos industriales y su aceptación en mercados nacionales e internacionales. Esta calidad se evalúa a partir de factores físicos del grano como el tamaño, peso, humedad e integridad; organolépticos como su aroma, sabor y textura; y sanitarios como la ausencia de plagas, hongos y contaminantes; todos ellos definidos por criterios de aceptación que se encuentran bajo normas nacionales como globales.
        .bg1.p-4.mb-lg-0.mb-4
          p.mb-0 Para garantizar el cumplimiento de estos estándares, se aplican diversas técnicas de análisis y evaluación, entre las que destacan el corte del grano, las pruebas sensoriales, la medición de humedad, la identificación de impurezas y la evaluación del grado de fermentación, todos estos procesos son críticos durante la recepción del cacao con destino a plantas agroindustriales.
      .col-lg-4.col-md-9.col-10
        img(src='@/assets/curso/intro/2.png')


    .row.justify-content-center.align-items-top.mb-5
      .col-lg-10
        p.mb-4 Comprender la importancia de la calidad del cacao permite optimizar el proceso de recepción, asegurar la trazabilidad, mejorar la clasificación comercial del grano, y aumentar el valor agregado en la cadena productiva, contribuyendo así al desarrollo competitivo del sector cacaotero y de la industria del chocolate.
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-5
            img(src='@/assets/curso/intro/3.png')
          .col-lg-7
            p.mb-0 Este componente formativo ofrece a los participantes las herramientas conceptuales necesarias para comprender y aplicar correctamente los parámetros de calidad del cacao, es esencial para asegurar una adecuada destinación comercial e industrial del producto, optimizar los procesos de transformación y maximizar el valor económico en cada eslabón de la cadena de valor. No todos los granos de cacao tienen las mismas características, y su calidad determina en gran medida para qué tipo de producto final es apto.
      .col-lg-2
        img(src='@/assets/curso/intro/4.png')

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            <iframe width="560" height="315" src="https://www.youtube.com/embed/e2u-0rknSDw?si=fGtB55omZKTihlzy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          figcaption Video. Calidad del grano de cacao – introducción

</template>

<script>
export default {
  name: 'Introduccion',
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
