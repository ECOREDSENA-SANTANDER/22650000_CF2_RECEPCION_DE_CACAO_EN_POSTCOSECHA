<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Técnicas de análisis y evaluación de calidad


      .bloque-texto-g.color-secundario.p-4.p-lg-5.p-md-4.mb-0(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
        )
        .bloque-texto-g__texto.p-lg-5.p-4.p-md-4
          p.mb-0 La evaluación de calidad del grano de cacao es un proceso fundamental que permite determinar si el producto cumple con los estándares establecidos para su comercialización, transformación o exportación. Estas técnicas permiten identificar atributos físicos, sensoriales, químicos y microbiológicos que influyen directamente en el valor del cacao dentro de la cadena productiva.


      separador
      #t_2_1.titulo-segundo.mb-5
        h2 2.1 Corte del grano
      

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-1
          img(src='@/assets/curso/tema2/2.svg')
        .col-lg-11
          p.mb-0 Es una técnica visual y física que consiste en cortar una muestra representativa de granos de cacao por la mitad, a lo largo, para observar su interior y determinar el grado de fermentación, presencia de defectos y características internas del grano.

      
      .row.fondo1.p-4.p-lg-4.p-md-4.mb-0(data-aos="fade-down")
        .col-lg-12
          
          .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
            .col-lg-8
              .titulo-sexto.mb-4
                h5 Figura 1. 
                | Factores físicos
              .bg2.mb-2.p-4
                img(src='@/assets/curso/tema2/3.png', alt='Muestra diferentes tipos de granos de cacao, organizados en ocho grupos para ilustrar características con defectos y daños. De izquierda a derecha y de arriba hacia abajo aparecen: buenos (granos sanos, completos y bien formados), pequeños (granos de menor tamaño al estándar), quebrados (granos partidos o rotos), gemelos (dos granos adheridos), planos (granos delgados y sin contenido adecuado), germinados (granos que han iniciado el proceso de germinación), pasa (granos arrugados, secos y deteriorados) y basura (fragmentos, impurezas y material no apto para el uso).')
              figcaption.mb-5.enl #[b Tomada de] https://1.bp.blogspot.com/-3jBCyZ1Zyc8/YBhkVsTe-sI/AAAAAAAABE4/yog5mYycCNgaX6t7DNWdfPttygwmYs7rwCLcBGAsYHQ/s908/granos_cacao.jpg

      
      .tarjeta.color-acento-contenido.des.p-4.mb-5(data-aos="fade-right")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema2/video.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0.mx-lg-4
                h4.mb-2 Video. Prueba de corte de nuestro grano de cacao. Video 03
                p.mb-0 Se invita a profundizar en sus conocimientos sobre la prueba de corte de granos de cacao.
              .col-sm-auto.pe-lg-5
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=j4FcVcAug6A" target="_blank")
                  span Ir al sitio
                  i.fas.fa-circle-play


      p.mb-5 La evaluación de la calidad de fermentación del cacao se realiza de la siguiente manera:


      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-4.col-md-6.mb-lg-0.mb-4
          .bg7.p-4.h-100
            .row.justify-content-center.align-items-center.mb-0.mt-lg-2
              .col-lg-3
                img.img-t.img-a.mb-lg-0.mb-4(src="@/assets/curso/tema2/4.svg")
              .col-lg-9
                p.mb-0 #[b a) Muestreo:] se toma una muestra aleatoria de 100 granos (o más, según el tamaño del lote).
        .col-lg-4.col-md-6.mb-lg-0.mb-4
          .bg7.p-4.h-100
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-3
                img.img-t.img-a.mb-lg-0.mb-4(src="@/assets/curso/tema2/5.svg")
              .col-lg-9
                p.mb-0 #[b b) Corte:] los granos se cortan longitudinalmente con una cuchilla afilada de acero inoxidable o con un tablero cortador especial.
        .col-lg-4.col-md-6.mb-0
          .bg7.p-4.h-100
            .row.justify-content-center.align-items-center.mb-0.mt-lg-2
              .col-lg-3
                img.img-t.img-a.mb-lg-0.mb-4(src="@/assets/curso/tema2/6.svg")
              .col-lg-9
                p.mb-0 #[b c) Inspección:] se examina visualmente el interior de cada grano.


      .row.justify-content-center.align-items-center.mb-0
        .col-lg-5
          .bg5.p-4.mb-lg-0.mb-4
            p.mb-4 Durante la inspección se observan:
            ul.lista-ul.mb-2
              li.d-flex.mb-0
                i.fas.fa-leaf
                p.mb-0 Color del cotiledón:
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-11.col-md-11.col-10
                  p.mb-0.mx-1.mx-lg-2 • Marrón: indica un grano bien fermentado.
                  p.mb-0.mx-1.mx-lg-2 • Violeta o púrpura: evidencia fermentación incompleta.
                  p.mb-0.mx-1.mx-lg-2 • Blanco: corresponde a granos criollos o defectuosos.
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Textura y compactación: permiten evaluar el grado de fermentación y secado.
              li.d-flex.mb-0
                i.fas.fa-leaf
                p.mb-0 Defectos visibles: presencia de mohos, insectos, granos germinados, partidos o dañados por calor.
        .col-lg-3.col-md-9.col-10
          img(src='@/assets/curso/tema2/7.png', alt='')
        .col-lg-4
          img.img-t.mb-4(src='@/assets/curso/tema2/8.svg', alt='')
          p.mb-3 Finalmente, se calcula el porcentaje de granos:
          ul.lista-ul.mb-3
            li.d-flex.mb-2
              i.fas.fa-leaf
              p.mb-0 Bien fermentados.
            li.d-flex.mb-2
              i.fas.fa-leaf
              p.mb-0 Mal fermentados.
            li.d-flex.mb-2
              i.fas.fa-leaf
              p.mb-0 Dañados o defectuosos.
          p.mb-0 Este análisis es un criterio esencial para clasificar el lote de cacao de acuerdo con normas nacionales e internacionales.


      separador
      #t_2_2.titulo-segundo.mb-5
        h2 2.2 Evaluación sensorial

      
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-1
          img(src='@/assets/curso/tema2/9.svg')
        .col-lg-11
          p.mb-4 Consiste en analizar las características organolépticas del grano de cacao o del licor de cacao preparado a partir de la muestra, evaluando atributos como aroma, sabor, textura, astringencia y amargor.
          p.mb-0 El proceso se desarrolla de la siguiente manera:


      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-4.col-md-6.mb-lg-0.mb-4
          .bg8.p-4.h-100
            img.mb-4(src='@/assets/curso/tema2/10.png')
            h4.mb-4.text-center Tostado
            p.mb-0.text-center Los granos se tuestan a baja temperatura, generalmente entre 120 y 140 °C, durante 15 – 20 minutos.
        .col-lg-4.col-md-6.mb-lg-0.mb-4
          .bg8.p-4.h-100
            img.mb-4(src='@/assets/curso/tema2/11.png')
            h4.mb-4.text-center Molienda
            p.mb-0.text-center Los granos tostados se muelen para obtener el licor de cacao (pasta).
        .col-lg-4.col-md-6.mb-lg-0.mb-4
          .bg8.p-4.h-100
            img.mb-4(src='@/assets/curso/tema2/12.png')
            h4.mb-4.text-center Cata
            p.mb-0.text-center El licor se somete a la evaluación de un panel sensorial entrenado.


      p.mb-5 Durante la cata se analizan los siguientes atributos:


      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-3.col-md-6.mb-lg-0.mb-md-4.mb-0.pe-lg-0
          .bg9.p-4.h-100
            img.mb-4.img-a.img-t(src='@/assets/curso/tema2/13.svg')
            h4.mb-4.text-center Aroma
            p.mb-0.text-center Floral, frutal, a cacao, a nuez, mohoso, ácido, fermentado.
        .col-lg-3.col-md-6.mb-lg-0.mb-md-4.mb-0.pe-lg-0.ps-lg-0
          .bg10.p-4.h-100
            img.mb-4.img-a.img-t(src='@/assets/curso/tema2/14.svg')
            h4.mb-4.text-center Sabor
            p.mb-0.text-center Dulce, amargo, ácido, afrutado, astringente.
        .col-lg-3.col-md-6.mb-lg-0.mb-md-4.mb-0.pe-lg-0.ps-lg-0
          .bg9.p-4.h-100
            img.mb-4.img-a.img-t(src='@/assets/curso/tema2/15.svg')
            h4.mb-4.text-center Textura en boca
            p.mb-0.text-center Cremosa, áspera, seca.
        .col-lg-3.col-md-6.mb-lg-0.mb-md-4.mb-0.ps-lg-0
          .bg10.p-4.h-100
            img.mb-4.img-a.img-t(src='@/assets/curso/tema2/16.svg')
            h4.mb-4.text-center Defectos sensoriales
            p.mb-0.text-center Presencia de sabores indeseables como humo, tierra, químicos o notas de fermentación incompleta.


      .row.justify-content-center.align-items-center.mb-0
        .col-lg-8
          .bg11.p-4
            p.mb-0 El resultado de esta evaluación es un 
              strong.ro perfil sensorial del lote,
              |  que permite clasificar el cacao como 
              strong.ro fino, de aroma o corriente,
              |  información clave para la elaboración de chocolates premium y para la exportación.


      separador
      #t_2_3.titulo-segundo.mb-5
        h2 2.3 Medición de humedad 


      .row.justify-content-center.align-items-center.mb-0
        .col-lg-5
          img.mb-4.mb-lg-0(src='@/assets/curso/tema2/17.png')
        .col-lg-7
          p.mb-4 Es el análisis que permite determinar el contenido de agua en el grano, lo cual es clave para su almacenamiento seguro y para evitar la aparición de hongos y moho.
          p.mb-3 Se puede medir rápidamente con un medidor de humedad digital o electrónico.
          .bg12.p-4
            p.mb-3 El rango recomendado de la humedad:
            ul.lista-ul.mb-3
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Humedad óptima: entre 6.5 % y 7.5 %.
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Por encima del 8 % existe riesgo de hongos y deterioro.
              li.d-flex.mb-2
                i.fas.fa-leaf
                p.mb-0 Por debajo del 6 % el grano es demasiado seco, frágil y con menor calidad sensorial.
            p.mb-0 Es importante entender que la humedad determina si el lote puede ser aceptado, secado nuevamente o rechazado, según norma técnica o contrato.


      separador
      #t_2_4.titulo-segundo.mb-5
        h2 2.4 Detección de impurezas

      .row.justify-content-center.align-items-center.mb-0
        .col-lg-8
          p.mb-4 Consiste en identificar y cuantificar la presencia de materias extrañas o ajenas al grano de cacao, que pueden comprometer la calidad del producto y dañar los equipos industriales.
          .bg5.p-4.mb-4
            p.mb-0.mx-lg-4.my-lg-4 El método consiste en tomar una muestra representativa, 400 gramos como ejemplo; se separan y pesan las impurezas presentes como tierra, piedras, hojas, cáscaras, ramas, plástico, metales; luego se calcula el porcentaje de impurezas. El máximo permitido generalmente es del 1 % al 1.5 % de impurezas por peso, más de eso se considera rechazo del lote o necesidad de limpieza previa.
          p.mb-lg-0.mb-4 Un grano limpio tiene mejor aceptación comercial, menor costo de procesamiento y menos riesgos en la agroindustria.
        .col-lg-4
          img(src='@/assets/curso/tema2/18.png')


      separador
      #t_2_5.titulo-segundo.mb-5
        h2 2.5 Evaluación de fermentación


      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7
          p.mb-4 Es la valoración del grado de fermentación de los granos, que influye directamente en el desarrollo del aroma y sabor característico del cacao.
          .bg12.p-4.mb-4
            p.mb-0 Se evalúa inicialmente de manera visual, a través del corte del grano (subtema 2.1). Sin embargo, la evaluación mediante análisis químicos (pH del cotiledón, índice de fermentación) es la ideal y se complementa con análisis sensorial (sabor amargo, astringencia, acidez).
          p.mb-lg-0.mb-4 Estos indicadores son el resultado de esa evaluación y se expresan en porcentaje de granos bien fermentados (ideal: > 65 – 70 %).
        .col-lg-5
          img.mb-4.mb-lg-0(src='@/assets/curso/tema2/19.png')


      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-4.col-md-6.mb-lg-0.mb-4
          .bg13.p-4.h-100
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-3
                img.img-t.img-a.mb-lg-0.mb-4(src="@/assets/curso/tema2/20.svg")
              .col-lg-9
                p.mb-0 #[b Fermentación adecuada:] grano marrón, aroma a cacao, textura firme.
        .col-lg-4.col-md-6.mb-lg-0.mb-4
          .bg13.p-4.h-100
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-3
                img.img-t.img-a.mb-lg-0.mb-4(src="@/assets/curso/tema2/21.svg")
              .col-lg-9
                p.mb-0 #[b Fermentación incompleta:] grano violeta, sabor ácido o amargo excesivo.
        .col-lg-4.col-md-6.mb-0
          .bg13.p-4.h-100
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-3
                img.img-t.img-a.mb-lg-0.mb-4(src="@/assets/curso/tema2/22.svg")
              .col-lg-9
                p.mb-0 #[b Fermentación excesiva:] olor a podrido, color negro o muy oscuro, textura blanda.


      p.mb-5 Un buen proceso de fermentación es requisito para la producción de chocolate fino.


      .row.justify-content-center.align-items-center.mb-0
        .col-lg-10
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-3
              img.mb-lg-0.mb-4(src="@/assets/curso/tema2/23.png")
            .col-lg-5
              ul.lista-ul.mb-lg-0.mb-4
                li.d-flex.mb-2
                  i.fas.fa-leaf
                  p.mb-0 Determinar si el cacao cumple con los estándares de calidad exigidos por la industria o los mercados internacionales.
                li.d-flex.mb-2
                  i.fas.fa-leaf
                  p.mb-0 Clasificar el grano para diferentes usos industriales.
                li.d-flex.mb-2
                  i.fas.fa-leaf
                  p.mb-0 Decidir sobre la aceptación o rechazo de un lote en la recepción.
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Asegurar la inocuidad y trazabilidad del producto.
            .col-lg-4
              img.mb-0(src="@/assets/curso/tema2/24.png")
         

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
