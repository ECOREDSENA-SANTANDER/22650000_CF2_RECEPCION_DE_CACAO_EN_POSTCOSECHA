<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Importancia de la calidad del cacao

      .bloque-texto-g.color-secundario.p-4.p-lg-5.p-md-4.mb-0(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
        )
        .bloque-texto-g__texto.p-lg-5.p-4.p-md-4
          p.mb-0 La calidad del grano de cacao es un factor determinante en toda la cadena productiva y comercial del cacao. No solo afecta la aceptación del producto en el mercado, sino que también influye en los procesos posteriores de transformación y en el valor económico que se le puede asignar. Garantizar un cacao de buena calidad es fundamental para asegurar la competitividad, la satisfacción del consumidor y la sostenibilidad del negocio.

  
      separador
      #t_3_1.titulo-segundo.mb-5
        h2 3.1 Relación con el proceso de recepción


      p.mb-5(data-aos="fade-right") El proceso de recepción es el primer contacto formal del cacao con la planta o empresa que lo procesará o comercializará. En esta etapa, la calidad del grano determina:

      
      .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
        .col-lg-4.col-md-6.col-10.mb-lg-0.mb-4
          .h-100.bg14.p-3
            .row.justify-content-center.align-items-center.mb-0
              .col-4.mb-4.my-4
                img.ima1(data-aos="zoom-in-left")(src='@/assets/curso/tema3/2.svg' alt='AvatarTop')
            .bg15.p-1.mb-4
              h4.text-center.mb-0.text-white.ps-lg-4.pe-lg-4.ps-3.pe-3 Aceptación o rechazo del lote
            p.mb-2.text-center(data-aos="fade-right") Si el cacao no cumple con estándares mínimos (humedad, fermentación, limpieza), puede ser rechazado o sometido a procesos adicionales (secado, limpieza).
        .col-lg-4.col-md-6.col-10.mb-lg-0.mb-4
          .h-100.bg14.p-3
            .row.justify-content-center.align-items-center.mb-0
              .col-4.mb-4.my-4
                img.ima2(data-aos="zoom-in-left")(src='@/assets/curso/tema3/3.svg' alt='AvatarTop')
            .bg15.p-1.mb-4
              h4.text-center.mb-0.text-white.ps-lg-4.pe-lg-4.ps-3.pe-3 Clasificación inicial
            p.mb-2.text-center(data-aos="fade-right") La calidad en recepción ayuda a clasificar los lotes según características físicas y sensoriales para destinarlos a diferentes usos o mercados.
        .col-lg-4.col-md-6.col-10.mb-lg-0.mb-4
          .h-100.bg14.p-3
            .row.justify-content-center.align-items-center.mb-0
              .col-4.mb-4.my-4
                img.ima3(data-aos="zoom-in-left")(src='@/assets/curso/tema3/4.svg' alt='AvatarTop')
            .bg15.p-1.mb-4
              h4.text-center.mb-0.text-white.ps-lg-4.pe-lg-4.ps-3.pe-3 Control de trazabilidad
            p.mb-2.text-center(data-aos="fade-right") Se establece un registro del lote, su origen y condiciones, que ayuda a mantener la calidad en toda la cadena.


      .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
        .col-lg-8
          .bg10.p-4
            p.mb-0 #[b Por ejemplo:] una planta de procesamiento recibe un lote con alto contenido de humedad (> 8 %). Para evitar el desarrollo de hongos, debe someterlo a un secado adicional o rechazar el lote, lo que implica costos y posibles pérdidas para el proveedor, ya que si se lo reciben es a un costo más bajo.
      
      
      separador
      #t_3_2.titulo-segundo.mb-5
        h2 3.2 Impacto en la cadena de valor 


      p.mb-5(data-aos="fade-right") La calidad del cacao influye directamente en la cadena de valor, desde el productor hasta el consumidor final.


      .row.justify-content-center.align-items-center.mb-lg-4.mb-5(data-aos="fade-left")
        .col-lg-3.col-md-5.col-7.mb-4
          img(src='@/assets/curso/tema3/8.png', alt='')
        .col-lg-9
          SlyderF(columnas="col-lg-4 col-md-6 col-xl-4")
            .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
              .row.justify-content-center.align-items-center.mb-4.mt-lg-2
                .col-8
                  img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema3/9.svg' alt='AvatarTop')
              .bg16.p-1.mb-4
                h4.text-center.text-white.mb-0 Productores
              p.mb-2.text-center(data-aos="fade-right") Si entregan cacao de buena calidad, pueden acceder a mejores precios y mercados #[em premium.]
            .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
              .row.justify-content-center.align-items-center.mb-4.mt-lg-2
                .col-8
                  img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema3/10.svg' alt='AvatarTop')
              .bg16.p-1.mb-4
                h4.text-center.text-white.mb-0 Intermediarios
              p.mb-2.text-center(data-aos="fade-right") Tienen mayor facilidad para comercializar y negociar lotes con características deseadas.
            .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
              .row.justify-content-center.align-items-center.mb-4.mt-lg-2
                .col-8
                  img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema3/11.svg' alt='AvatarTop')
              .bg16.p-1.mb-4
                h4.text-center.text-white.mb-0 Procesadores
              p.mb-2.text-center(data-aos="fade-right") Un grano limpio, bien fermentado y seco reduce costos de procesamiento y mejora el rendimiento del producto final.
            .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
              .row.justify-content-center.align-items-center.mb-4.mt-lg-2
                .col-8
                  img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema3/12.svg' alt='AvatarTop')
              .bg16.p-1.mb-4
                h4.text-center.text-white.mb-0 Consumidores
              p.mb-2.text-center(data-aos="fade-right") Obtienen chocolates y derivados con mejor sabor, aroma y textura, lo que aumenta la satisfacción y fidelidad.


      .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
        .col-lg-8
          .bg10.p-4
            p.mb-0 #[b Por ejemplo:] una cooperativa de pequeños productores que invierte en mejorar la fermentación y secado, logra vender su cacao como “cacao fino de aroma”, obteniendo un precio 30 % superior al cacao corriente en el mercado internacional.


      separador
      #t_3_3.titulo-segundo.mb-5
        h2 3.3 Clasificación comercial del grano


      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-6
          img.mb-5(data-aos="zoom-in-left")(src='@/assets/curso/tema3/13.png' alt='AvatarTop')
        .col-lg-6
          p.mb-0 La clasificación comercial del cacao es un sistema estandarizado que categoriza los granos según sus características de calidad, determinando así su valor en el mercado y su destino para diferentes usos industriales o artesanales.


      .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-4.h-100.mb-0
            .tarjeta-numerada__numero
              .h2 1
            p.text-center.mx-3 
              b Cacao fino o de aroma
            p.mb-0.mx-3  Granos con fermentación óptima, perfil sensorial superior y bajo porcentaje de defectos. Usado para chocolates #[em premium].
  
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-secundario.p-4.h-100.mb-0
            .tarjeta-numerada__numero
              .h2 2
            p.text-center.mx-3  
              b Cacao corriente o a granel
            p.mb-0.mx-3 Granos con características estándar, mayor presencia de defectos, usado para chocolates industriales o productos derivados.
  
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.p-4.h-100.mb-0
            .tarjeta-numerada__numero
              .h2 3
            p.text-center.mx-3  
              b Cacao criollo, forastero y trinitario
            p.mb-0.mx-3  Clasificación botánica que también influye en la calidad y uso.
  
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-botones.hh.p-4.h-100.mb-0
            .tarjeta-numerada__numero
              .h2 4
            p.text-center.mx-3  
              b Nacional / arriba
            p.mb-0.mx-3  Granos para productos internacionales y mezclas.
  

      .row.fondo1.p-4.p-lg-4.p-md-4.mb-4(data-aos="fade-down")
        .col-lg-12
          
          .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
            .col-lg-10
              .titulo-sexto.mb-4(alt='El cacao colombiano reúne variedades con diferentes calidades y aromas que determinan su valor y uso, desde chocolates industriales hasta productos gourmet para mercados internacionales.')
                h5 Tabla 3.
                | Variedades  de cacao
              .tabla-a.cf7
                table.bg6
                  thead
                    tr
                      th Variedad de cacao
                      th Características
                      th Uso principal
                      th Regiones de cultivo en Colombia
                  tbody
                    tr
                      td.left #[b Forastero]
                      td.left Grano marrón oscuro, cáscara gruesa, planta resistente y productiva.
                      td.left Producción de cacao corriente para chocolates industriales y productos derivados.
                      td.left Santander, Antioquia, Norte de Santander, Cauca.
                    tr
                      td.left #[b Criollo]
                      td.left Granos pequeños y claros, alta calidad aromática, planta delicada y susceptible a enfermedades.
                      td.left Chocolates finos o de aroma, chocolates #[em premium] para mercados #[em gourmet] y exportación.
                      td.left Antioquia, Cauca, Valle del Cauca, Magdalena.
                    tr
                      td.left #[b Trinitario]
                      td.left Híbrido entre forastero y criollo, mezcla de resistencia y buen perfil sensorial.
                      td.left Chocolates de buena calidad y mezcla para chocolates con aroma complejo.
                      td.left Zonas de clima intermedio en varios departamentos.
                    tr
                      td.left #[b Nacional / arriba]
                      td.left Variedad fina y aromática, granos medianos a grandes con sabor floral.
                      td.left Chocolates #[em gourmet] y de aroma para mercados internacionales.
                      td.left Zonas con influencia ecuatoriana y venezolana en Colombia.


      .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
        .col-lg-8
          .bg10.p-4
            p.mb-0 #[b Por ejemplo:] el cacao #[b forastero] es el más cultivado y se emplea principalmente en chocolates de producción masiva, mientras que el cacao #[b criollo], más escaso y de sabores delicados, se destina a chocolates #[em gourmet] de alta calidad.


      separador
      #t_3_4.titulo-segundo.mb-5
        h2 3.4 Uso en agroindustria
     

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-5.col-md-9.col-10
          img.mb-lg-0.mb-4(src="@/assets/curso/tema3/14.png")
        .col-lg-7
          .row.justify-content-center.align-items-center.mb-lg-4.mb-5
            .col-lg-7
              p.mb-4 La agroindustria del cacao transforma el grano en productos de alto valor agregado, tales como:
              ul.lista-ul.mb-lg-0.mb-5
                li.d-flex.mb-1
                  i.fas.fa-leaf
                  p.mb-0 Chocolates en barra, cobertura y bombonería.
                li.d-flex.mb-1
                  i.fas.fa-leaf
                  p.mb-0 Polvo de cacao.
                li.d-flex.mb-1
                  i.fas.fa-leaf
                  p.mb-0 Manteca de cacao.
                li.d-flex.mb-0
                  i.fas.fa-leaf
                  p.mb-0 Productos cosméticos y farmacéuticos.
            .col-lg-5.col-md-9.col-10
              img.mb-0(src="@/assets/curso/tema3/15.svg")
          p.mb-0 La calidad del grano influye directamente en el rendimiento, la calidad, la innovación y la diversificación de los productos:


      .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
        .col-lg-12
          .tarjeta--container.row.mb-5
            .col-lg-4.col-md-6.tarjeta.color-primario.tar1.p-lg-5.p-4.mb-lg-0.mb-4.mb-md-4
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img.mb-3.img-t(src='@/assets/curso/tema3/16.svg', alt='Texto que describa la imagen')          
              h2.text-center.mb-4 Rendimiento industrial
              p.mb-0.text-center Granos con alta pureza y fermentación adecuada generan mayor extracción de manteca y licor de cacao.
            .col-lg-4.col-md-6.tarjeta.color-acento-botones.tar2.p-lg-5.p-4.mb-lg-0.mb-4.mb-md-4
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img.mb-2.img-t(src='@/assets/curso/tema3/17.svg', alt='Texto que describa la imagen')          
              h2.text-center.mb-4 Calidad del producto final
              p.mb-0.text-center El sabor, aroma y textura del chocolate dependen de la calidad del grano base.
            .col-lg-4.col-md-6.offset-md-3.offset-lg-0.tarjeta.color-acento-contenido.tar3.text-white.p-lg-5.p-4
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img.mb-3.img-t(src='@/assets/curso/tema3/18.svg', alt='Texto que describa la imagen')          
              h2.text-center.mb-4 Innovación y diversificación
              p.mb-0.text-center Cacao de excelente calidad permite desarrollar productos diferenciados y posicionarse en mercados especializados o #[em gourmet.]


      .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
        .col-lg-8
          .bg10.p-4
            p.mb-0 #[b Por ejemplo:] una empresa chocolatera que utiliza cacao bien fermentado y con baja humedad puede producir chocolates con mejor aroma, menor amargor y textura refinada, lo que facilita su ingreso al mercado #[em gourmet] y mejora sus márgenes de ganancia gracias a su mayor valor comercial.


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
