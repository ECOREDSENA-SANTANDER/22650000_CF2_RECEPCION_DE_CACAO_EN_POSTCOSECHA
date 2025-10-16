<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La calidad del grano de cacao es esencial para su comercialización y uso en la industria chocolatera, pues se determina a  partir de factores físicos (tamaño, forma y color), organolépticos (aroma y sabor) y sanitarios (ausencia de contaminantes o enfermedades), evaluados mediante técnicas como el corte del grano, la medición de humedad, la evaluación sensorial, la detección de impurezas y la verificación del nivel de fermentación; aplicar estos criterios garantiza un producto competitivo que cumple con estándares nacionales e internacionales, mejora su clasificación comercial, incrementa su valor en el mercado y asegura que productores y comercializadores ofrezcan un cacao rentable, sostenible y apto para los exigentes mercados globales. 
    
    .row.justify-content-center
      .col-lg-12.mb-5
        img(src="@/assets/curso/sintesis.png", alt="Muestra un diagrama jerárquico titulado “Calidad del grano de cacao”. El esquema se divide en tres ramas principales: Factores de calidad del grano de cacao (que incluye factores físicos, organolépticos, sanitarios, criterios de aceptación y normas nacionales e internacionales), técnicas de análisis y evaluación de calidad (corte del grano, evaluación sensorial, medición de humedad, detección de impurezas y evaluación de fermentación) y Importancia de la calidad del cacao (relación con el proceso de recepción, impacto en la cadena de valor, clasificación comercial del grano y uso en la agroindustria).")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
