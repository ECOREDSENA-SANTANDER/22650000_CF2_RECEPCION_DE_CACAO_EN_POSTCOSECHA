<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Factores de calidad del grano de cacao
      

      .row.justify-content-center.align-items-center.mb-0
        .col-lg-12
          .bloque-texto-g.bloque-texto-g--inverso.color-secundario1.p-4.p-md-4.p-lg-5.mb-0(data-aos="fade-left")
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0.my-0.mb-lg-4.my-lg-4 La calidad del grano de cacao depende de un conjunto de factores que pueden clasificarse en físicos, organolépticos y sanitarios. Estos factores influyen directamente en el rendimiento, sabor, aroma, y valor comercial del cacao, además de determinar su aptitud para distintos procesos industriales.
    

      separador
      #t_1_1.titulo-segundo.mb-5
        h2 1.1 Factores físicos


      .row.justify-content-center.align-items-center.mb-4
        .col-lg-1
          img(src='@/assets/curso/tema1/2.svg')
        .col-lg-11
          p.mb-0 Los factores físicos de calidad en el cacao se refieren a las características visibles y tangibles del grano de cacao que afectan su valor y uso final. Estos factores son clave para determinar la calidad antes del procesamiento y para garantizar que el cacao cumpla con estándares comerciales y de producción.


      .row.fondo1.p-4.p-lg-4.p-md-4.mb-0(data-aos="fade-down")
        .col-lg-12
          
          .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
            .col-lg-8
              .titulo-sexto.mb-4
                h5 Figura 1. 
                | Factores físicos
              .bg2.mb-2.p-4
                img(src='@/assets/curso/tema1/3.png', alt='Muestra diferentes tipos de granos de cacao, organizados en ocho grupos para ilustrar características con defectos y daños. De izquierda a derecha y de arriba hacia abajo aparecen: buenos (granos sanos, completos y bien formados), pequeños (granos de menor tamaño al estándar), quebrados (granos partidos o rotos), gemelos (dos granos adheridos), planos (granos delgados y sin contenido adecuado), germinados (granos que han iniciado el proceso de germinación), pasa (granos arrugados, secos y deteriorados) y basura (fragmentos, impurezas y material no apto para el uso).')
              figcaption.mb-5.enl #[b Tomada de] https://static.wixstatic.com/media/9af989_8969b24b5ad1458e80ea0f784bbc6b8f~mv2.png/v1/fill/w_679,h_335,al_c,q_85,enc_auto/9af989_8969b24b5ad1458e80ea0f784bbc6b8f~mv2.png


      AcordionA.activo(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-0(data-aos="fade-left")
        .row.justify-content-center.align-items.p-0(titulo="Tamaño y peso del grano")
          .col-lg-11.mb-0
            p.mb-4 El tamaño y peso del grano son factores físicos clave en la evaluación de la calidad del cacao. Estos atributos inciden directamente en el rendimiento del producto durante el procesamiento y en la valoración comercial del lote.
            .row.justify-content-center.align-items-stretch.mb-0
              .col-lg-4.mb-lg-0.mb-4
                .bg3.p-3.h-100
                  h5.mb-4.text-center Importancia
                  p.mb-0.text-center El tamaño y el peso del grano reflejan la variedad genética, el grado de madurez y las condiciones de cultivo y cosecha. En general, los granos grandes y uniformes presentan un mayor contenido de manteca de cacao, lo que se traduce en un mejor rendimiento industrial.
              .col-lg-4.mb-lg-0.mb-4
                .bg3.p-3.h-100
                  h5.mb-4.text-center Medición
                  p.mb-0.text-center La evaluación se realiza a partir del peso promedio por grano (por ejemplo, entre 1.2 y 1.5 gramos) y mediante el análisis de distribución de tamaños, utilizando tamices o equipos automatizados que permiten clasificar el cacao de manera precisa.
              .col-lg-4 
                .bg3.p-3.h-100
                  h5.mb-4.text-center Ejemplos
                  p.mb-0.text-center Las variedades forastero suelen presentar granos más pequeños y robustos, mientras que el Criollo destaca por granos más grandes y alargados, características que influyen en su comportamiento industrial y valor comercial.
        .row.justify-content-center.align-items.p-0(titulo="Color")
          .col-lg-11.mb-0
            p.mb-4 El color del grano de cacao es un indicador clave tanto de la calidad física como del proceso de fermentación. Su evaluación considera tanto la almendra interna como la cáscara externa, ya que ambos aportan información sobre el manejo postcosecha.
            .row.justify-content-center.align-items-stretch.mb-0
              .col-lg-6.mb-lg-0.mb-4
                .bg3.p-3.h-100
                  h5.mb-4.text-center Indicador de fermentación y secado
                  p.mb-0.text-center Un color marrón oscuro y uniforme señala una fermentación y un secado adecuados. En cambio, la presencia de tonos púrpura o rojizos revela una fermentación incompleta, condición que puede afectar el sabor y el aroma del producto final.
              .col-lg-6
                .bg3.p-3.h-100
                  h5.mb-4.text-center Evaluación
                  p.mb-0.text-center La valoración se realiza de forma visual, utilizando una escala cromática estandarizada (por ejemplo, la escala de cortes de la ICCO) y mediante la comparación con muestras control que sirven como referencia de calidad.
        .row.justify-content-center.align-items.p-0(titulo="Humedad")
          .col-lg-11.mb-0
            p.mb-4 La humedad es un factor físico y sanitario crítico en la evaluación del cacao, ya que influye de manera directa en su calidad, inocuidad y capacidad de conservación durante las etapas de almacenamiento, transporte y procesamiento. Un control adecuado de este parámetro es esencial para prevenir fermentaciones no deseadas, desarrollo de hongos y pérdida de valor comercial.
            .row.justify-content-center.align-items-stretch.mb-0
              .col-lg-2
                .bg3.p-3.h-100
                  h5.mb-4.text-center Rango óptimo
                  p.mb-0.text-center 6.5 % - 7.5 %.
              .col-lg-6
                .bg3.p-3.h-100
                  h5.mb-4.text-center Consecuencias de desviaciones
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-leaf
                      p.mb-0 Humedad alta (>7.5 %): riesgo de crecimiento de hongos y mohos, fermentación indeseada, daños en almacenamiento.
                    li.d-flex.mb-0
                      i.fas.fa-leaf
                      p.mb-0 Humedad baja (<6 %): grano muy seco, puede volverse quebradizo y afectar calidad del procesamiento.
              .col-lg-4
                .bg3.p-3.h-100
                  h5.mb-4.text-center Métodos de medición
                  p.mb-0.text-center Medidores de humedad eléctricos o gravimétricos (secado en horno).
        .row.justify-content-center.align-items.p-0(titulo="Integridad del grano")
          .col-lg-11.mb-0
            p.mb-4 Se refiere al estado físico íntegro del grano, es decir, que permanezca entero, sin roturas, sin grietas, sin germinación ni signos de daño. Este aspecto constituye un indicador fundamental de la calidad física del cacao, ya que asegura su valor comercial y aptitud para el procesamiento.
            .row.justify-content-center.align-items-stretch.mb-0
              .col-lg-4
                .bg3.p-3.h-100
                  h5.mb-4.text-center Condiciones óptimas
                  p.mb-0.text-center Granos enteros, sin daños mecánicos, germinados o partidos.
              .col-lg-4
                .bg3.p-3.h-100
                  h5.mb-4.text-center Impacto
                  p.mb-0.text-center Los granos partidos o dañados tienen mayor absorción de humedad, aceleran el deterioro y afectan la calidad final.
              .col-lg-4 
                .bg3.p-3.h-100
                  h5.mb-4.text-center Evaluación
                  p.mb-0.text-center Porcentaje de granos defectuosos por muestra.
        .row.justify-content-center.align-items.p-0(titulo="Impurezas")
          .col-lg-11.mb-0
            p.mb-4 Las impurezas son materiales extraños o contaminantes que se encuentran mezclados con los granos de cacao durante la cosecha, fermentación, secado, transporte o almacenamiento. Estas afectan negativamente la calidad física y sanitaria del cacao.
            .row.justify-content-center.align-items-stretch.mb-0
              .col-lg-4
                .bg3.p-3.h-100
                  h5.mb-4.text-center Tipos
                  p.mb-0.text-center Cáscaras, piedras, tierra, hojas, restos vegetales, materiales extraños.
              .col-lg-4
                .bg3.p-3.h-100
                  h5.mb-4.text-center Límites máximos
                  p.mb-0.text-center Generalmente <1 - 2 % para garantizar calidad y evitar daños en equipos de procesamiento.
              .col-lg-4 
                .bg3.p-3.h-100
                  h5.mb-4.text-center Control
                  p.mb-0.text-center Limpieza y selección en campo y planta.


      separador
      #t_1_2.titulo-segundo.mb-5
        h2 1.2 Factores organolépticos 


      p.mb-5 Son las propiedades del cacao que pueden ser percibidas por los sentidos humanos: vista, olfato, gusto, tacto y, en menor medida, oído. Estos factores determinan la experiencia sensorial y la calidad percibida del cacao y sus derivados (como el chocolate).

      
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-12 
          .tarjetaf.p-4.mb-0
            SlyderA(tipo="b")(data-aos="zoom-in-left")
              .row.justify-content-center.align-items.p-0.p-lg-4
                .col-lg-6
                  h4.mb-4 Aroma
                  p.mb-4 Es un factor organoléptico esencial en la evaluación de la calidad del cacao, ya que está directamente vinculado con las propiedades sensoriales que definen el sabor, la complejidad y la aceptación del producto final, como el chocolate y otros derivados.
                  ul.lista-ul.mb-0
                    li.d-flex.mb-3
                      i.fas.fa-leaf
                      p.mb-0 #[b Origen.] Productos de la fermentación (ácidos, alcoholes, ésteres) y reacciones químicas durante secado y tostado.
                    li.d-flex.mb-3
                      i.fas.fa-leaf
                      p.mb-0 #[b Perfil ideal.] Aromas frutales, florales, a nuez, cacao fino, sin olores a moho, humedad o químicos.
                    li.d-flex.mb-4
                      i.fas.fa-leaf
                      p.mb-0 #[b Evaluación.] Paneles de catación entrenados y análisis sensorial.
                .col-lg-5.col-md-9
                  img.mb-0(alt="" src="@/assets/curso/tema1/4.png")
              .row.justify-content-center.align-items.p-0.p-lg-4
                .col-lg-6
                  h4.mb-4 Sabor
                  p.mb-4 Es un factor organoléptico clave que refleja la calidad sensorial del cacao y resulta determinante para la aceptación del producto final, como el chocolate y sus derivados, ya que integra notas propias de la variedad, el proceso de fermentación y el manejo postcosecha.
                  ul.lista-ul.mb-0
                    li.d-flex.mb-3
                      i.fas.fa-leaf
                      p.mb-0 #[b Componentes.] Amargor equilibrado, acidez leve, notas dulces, ausencia de sabores desagradables (rancio, moho).
                    li.d-flex.mb-3
                      i.fas.fa-leaf
                      p.mb-0 #[b Importancia.] Determina aceptación comercial y tipo de producto final (chocolates finos vs industriales).
                    li.d-flex.mb-4
                      i.fas.fa-leaf
                      p.mb-0 #[b Evaluación.] Pruebas de degustación y análisis químico (ácidos orgánicos, taninos).
                .col-lg-5.col-md-9
                  img.mb-0(alt="" src="@/assets/curso/tema1/5.png")
              .row.justify-content-center.align-items.p-0.p-lg-4
                .col-lg-6
                  h4.mb-4 Textura
                  p.mb-4 Es un factor organoléptico que hace referencia a la sensación táctil y física que el cacao produce en la boca. Este atributo influye en la percepción de calidad tanto del grano como del producto final, contribuyendo a la experiencia sensorial y a la aceptación del consumidor.
                  ul.lista-ul.mb-0
                    li.d-flex.mb-3
                      i.fas.fa-leaf
                      p.mb-0 #[b Descripción.] Sensación en boca al masticar el grano o chocolate, debe ser suave, sin asperezas o textura arenosa.
                    li.d-flex.mb-4
                      i.fas.fa-leaf
                      p.mb-0 #[b Impacto.] Afecta la calidad del producto final, especialmente en chocolates premium.
                .col-lg-5.col-md-9
                  img.mb-0(alt="" src="@/assets/curso/tema1/6.png")


      separador
      #t_1_3.titulo-segundo.mb-5
        h2 1.3 Factores sanitarios 


      .row.justify-content-center.align-items-center.mb-4
        .col-lg-1
          img(src='@/assets/curso/tema1/7.svg')
        .col-lg-11
          p.mb-0 Comprenden todos los aspectos vinculados con la seguridad, higiene y sanidad del cacao, garantizando que el producto se mantenga libre de contaminantes, patógenos y sustancias nocivas para la salud humana. Estos parámetros son esenciales para asegurar la inocuidad y cumplir con las normas nacionales e internacionales de calidad alimentaria.


      .row.justify-content-center.align-items-center.mb-0
        .col-lg-12    
          TabsA.color-primario
            .tarjeta.bg4.p-4(titulo="Presencia de mohos y hongos")
              .row.justify-content-center
                .col-lg-12
                  .row.justify-content-center.align-items-center.mb-0
                    .col-lg-8
                      h4.mb-4 Presencia de mohos y hongos
                      p.mb-4 Los hongos son uno de los principales problemas sanitarios en el cacao, ya que pueden afectar tanto la calidad como la seguridad del producto. Su aparición está relacionada principalmente con condiciones inadecuadas de fermentación, secado y almacenamiento.
                      ul.lista-ul.mb-0
                        li.d-flex.mb-3
                          i.fas.fa-leaf
                          p.mb-0 #[b Causas.] Secado insuficiente, almacenamiento en ambientes húmedos o contaminados.
                        li.d-flex.mb-3
                          i.fas.fa-leaf
                          p.mb-0 #[b Riesgos.] Formación de micotoxinas que afectan la salud humana y la inocuidad del producto. 
                        li.d-flex.mb-4
                          i.fas.fa-leaf
                          p.mb-0 #[b Detección.] Inspección visual, análisis microbiológicos y toxicológicos.
                    .col-lg-4.col-md-9
                      img(src='@/assets/curso/tema1/8.png', alt='')
            .tarjeta.bg4.p-4(titulo="Daños por plagas e insectos")
              .row.justify-content-center
                .col-lg-12
                  .row.justify-content-center.align-items-center.mb-0
                    .col-lg-8
                      h4.mb-4 Daños por plagas e insectos
                      p.mb-4 Las plagas e insectos representan uno de los principales problemas que afectan la calidad y cantidad de la producción de cacao. Pueden causar daños directos en las plantas y en los granos, afectando su valor comercial y sanitario.
                      ul.lista-ul.mb-0
                        li.d-flex.mb-3
                          i.fas.fa-leaf
                          p.mb-0 #[b Ejemplos.] Daños por gorgojos del cacao, que perforan y dañan el grano. 
                        li.d-flex.mb-3
                          i.fas.fa-leaf
                          p.mb-0 #[b Impacto.] Reducción de calidad, contaminación y pérdidas económicas.
                        li.d-flex.mb-0
                          i.fas.fa-leaf
                          p.mb-0 #[b Control.] Buenas prácticas agrícolas, almacenamiento controlado y fumigación.
                    .col-lg-4.col-md-9
                      img(src='@/assets/curso/tema1/9.png', alt='')
            .tarjeta.bg4.p-4(titulo="Contaminación química")
              .row.justify-content-center
                .col-lg-12
                  .row.justify-content-center.align-items-center.mb-0
                    .col-lg-8
                      h4.mb-4 Contaminación química
                      p.mb-4 Hace referencia a la presencia de sustancias no deseadas o tóxicas en el cacao, capaces de afectar la salud humana, comprometer su calidad y poner en riesgo su aceptación comercial. Este tipo de contaminación puede originarse en el cultivo, el procesamiento o el almacenamiento, e incluye residuos de plaguicidas, metales pesados u otros compuestos que superen los límites permitidos por las normas de inocuidad alimentaria.
                      ul.lista-ul.mb-0
                        li.d-flex.mb-3
                          i.fas.fa-leaf
                          p.mb-0 #[b Fuentes.] Residuos de pesticidas o contaminantes ambientales.
                        li.d-flex.mb-3
                          i.fas.fa-leaf
                          p.mb-0 #[b Normativa.] Cumplimiento de límites máximos de residuos establecidos por organismos reguladores internacionales.
                    .col-lg-4.col-md-9
                      img(src='@/assets/curso/tema1/10.png', alt='')


      separador
      #t_1_4.titulo-segundo.mb-5
        h2 1.4 Criterios de aceptación


      p.mb-5 Para que un lote de cacao sea aceptado para su procesamiento o comercialización, debe cumplir con una serie de parámetros de calidad que aseguren su valor y aptitud industrial:


      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7
          .bg5.p-4.mb-lg-0.mb-4
            ul.lista-ul.mb-0
              li.d-flex.mb-3
                i.fas.fa-leaf
                p.mb-0 Humedad dentro del rango óptimo establecido.
              li.d-flex.mb-3
                i.fas.fa-leaf
                p.mb-0 Color uniforme, acorde con la variedad y el grado de fermentación.
              li.d-flex.mb-3
                i.fas.fa-leaf
                p.mb-0 Porcentaje bajo de granos defectuosos (preferiblemente menor al 5 %).
              li.d-flex.mb-3
                i.fas.fa-leaf
                p.mb-0 Ausencia de olores y sabores indeseables.
              li.d-flex.mb-3
                i.fas.fa-leaf
                p.mb-0 Impurezas por debajo del límite máximo permitido.
              li.d-flex.mb-0
                i.fas.fa-leaf
                p.mb-0 Cumplimiento de las normas técnicas y sanitarias vigentes, nacionales e internacionales.
        .col-lg-5.col-md-9.col-10
          img(src='@/assets/curso/tema1/11.png', alt='')


      .row.fondo1.p-4.p-lg-4.p-md-4.mb-0(data-aos="fade-down")
        .col-lg-12
          
          .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
            .col-lg-7
              .titulo-sexto.mb-4(alt='Muestra los parámetros de calidad para cacao Premium/Especial y Estándar. El cacao Premium exige menor humedad (≤ 7,0 %) y mayor fermentación (≥ 70 %) que el estándar (≤ 7,5 % y ≥ 65 %). También limita con mayor rigor los granos insuficientemente fermentados (≤ 30 %), moho interno (1 grano/100), insectos o germinación (1 grano/100) y granos partidos (1 grano/100), mientras que el estándar permite valores ligeramente superiores. En ambos casos, se recomienda evitar impurezas, la mezcla de calidades y controlar la humedad durante el transporte para prevenir mohos y preservar la calidad.')
                h5 Tabla 1. 
                | Rango permitido

              .tabla-a.cf5
                table.bg6
                  thead
                    tr
                      th Característica
                      th Premium / especial
                      th Estándar
                  tbody
                    tr
                      td.left Humedad ≤
                      td 7.0 %
                      td 7.5 %
                    tr
                      td.left Fermentación ≥
                      td 70 %
                      td 65 %
                    tr
                      td.left Granos insuficientemente fermentados ≤
                      td 30 %
                      td 35 %
                    tr
                      td.left Impurezas ≤
                      td 0 %
                      td 0.3 %
                    tr
                      td.left Moho interno (max / 100 granos)
                      td 1 grano
                      td 3 granos
                    tr
                      td.left Insectos/germinación (max / 100 granos)
                      td 1 grano
                      td 2 granos
                    tr
                      td.left Granos partidos (max / 100 granos)
                      td 1 grano
                      td 2 granos
                    tr
                      td.left Humedad crítica durante transporte
                      td > 8 % favorece moho
                      td —
                    tr
                      td.left Mezcla de calidades
                      td Evitar
                      td Evitar


      separador
      #t_1_5.titulo-segundo.mb-5
        h2 1.5 Normas nacionales e internacionales


      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          .tarjeta--container.row.mb-4
            .col-md.tarjeta.color-primario.p-4.p-md-4.p-lg-5.mb-lg-0.mb-4(data-aos="fade-right")
              .row.justify-content-center.mb-0
                .col-12
                  img.img-a.img-t.mb-5(src='@/assets/curso/tema1/12.svg', alt='Imagen decorativa.')
                  h3.mb-4.text-center Normas nacionales
                  p.mb-4 Cada país productor establece normas técnicas que definen los parámetros físicos, químicos y sanitarios necesarios para la aceptación y clasificación del cacao. En Colombia, por ejemplo, se aplican los estándares establecidos por ICONTEC (NTC).
                  img.mb-0(src='@/assets/curso/tema1/13.svg', alt='Imagen decorativa.')
            
            .col-md.tarjeta.color-acento-contenido.p-4.p-md-4.p-lg-5.mb-lg-0.mb-0(data-aos="fade-left")
              .row.justify-content-center.mb-0
                .col-12
                  img.img-a.img-t.mb-5(src='@/assets/curso/tema1/14.svg', alt='Imagen decorativa.')
                  h3.mb-4.text-center Normas internacionales
                  p.mb-4.mb-lg-5.mb-md-5 Estas regulaciones garantizan que el cacao cumpla con los requisitos de calidad e inocuidad, asegurando su aprobación para la industria alimentaria y el comercio internacional.
                  img.mb-0(src='@/assets/curso/tema1/15.svg', alt='Imagen decorativa.')
            

      .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
        .col-lg-12
          .titulo-sexto.mb-4(alt='El cacao de calidad internacional requiere cumplir con normas y certificaciones que aseguran su inocuidad, sostenibilidad y aceptación en el mercado. Estándares como ISO 2451 y el Codex Alimentarius garantizan parámetros técnicos y de seguridad alimentaria, mientras que certificaciones como Fair Trade, Rainforest Alliance y UTZ promueven prácticas justas, sostenibles y trazables. En conjunto, estos lineamientos fortalecen la competitividad del cacao, protegen el ambiente y mejoran el bienestar de las comunidades productoras.')
            h5 Tabla 2. 
            | Normas nacionales e internacionales

          .tabla-a.cf6
            table
              thead
                tr
                  th Norma / certificación
                  th Descripción general
                  th Objetivos / propósitos
                  th Aspectos clave
                  th Aplicación en cacao
              tbody
                tr
                  td.left ISO 2451
                  td.left.vt Norma internacional que define especificaciones para productos en grano, enfocada en calidad, tamaño, humedad y defectos permitidos. Aunque no fue creada específicamente para el cacao, sus principios son aplicables en la evaluación sensorial de granos y productos derivados.
                  td.left.vt
                    .row.justify-content.mb-0
                      .col-lg-12
                        ul.lista-ul.mb-0
                          li.d-flex.mb-2
                            i.fas.fa-leaf
                            p.mb-0 Garantizar calidad homogénea.  
                          li.d-flex.mb-2
                            i.fas.fa-leaf
                            p.mb-0 Asegurar comparabilidad entre laboratorios y evaluadores.
                          li.d-flex.mb-0
                            i.fas.fa-leaf
                            p.mb-0 Apoyar el comercio internacional mediante estándares uniformes.
                  td.left.vt
                    .row.justify-content.mb-0
                      .col-lg-12
                        ul.lista-ul.mb-0
                          li.d-flex.mb-2
                            i.fas.fa-leaf
                            p.mb-0 Define cómo seleccionar, cortar y presentar muestras para evaluar sabor, aroma, textura y otros atributos sensoriales.
                          li.d-flex.mb-2
                            i.fas.fa-leaf
                            p.mb-0 Establece condiciones para reproducibilidad de resultados.
                          li.d-flex.mb-0
                            i.fas.fa-leaf
                            p.mb-0 Se orienta a asegurar aceptación en mercados nacionales e internacionales.
                  td.left.vt Se utiliza como guía para preparar muestras de cacao para análisis de calidad y catas, optimizando procesos de evaluación sensorial y garantizando uniformidad técnica.
                tr
                  td.left Codex alimentarius
                  td.left.vt Conjunto de normas, directrices y códigos de práctica internacionales para alimentos, desarrollado por FAO y OMS. Busca proteger la salud de los consumidores y asegurar prácticas justas en el comercio de alimentos.
                  td.left.vt 
                    .row.justify-content.mb-0
                      .col-lg-12
                        ul.lista-ul.mb-0
                          li.d-flex.mb-2
                            i.fas.fa-leaf
                            p.mb-0 Proteger la salud pública mediante normas de seguridad alimentaria que prevengan riesgos y contaminaciones.
                          li.d-flex.mb-2
                            i.fas.fa-leaf
                            p.mb-0 Garantizar la calidad y autenticidad de los alimentos.
                          li.d-flex.mb-0
                            i.fas.fa-leaf
                            p.mb-0 Facilitar el comercio internacional eliminando barreras técnicas con normas armonizadas globalmente.
                  td.left.vt
                    .row.justify-content.mb-0
                      .col-lg-12
                        ul.lista-ul.mb-0
                          li.d-flex.mb-2
                            i.fas.fa-leaf
                            p.mb-0 Incluye normas específicas para cacao y sus productos.
                          li.d-flex.mb-2
                            i.fas.fa-leaf
                            p.mb-0 Define especificaciones para granos (calidad, tamaño, humedad).
                          li.d-flex.mb-2
                            i.fas.fa-leaf
                            p.mb-0 Establece límites para contaminantes (micotoxinas, residuos químicos).
                          li.d-flex.mb-0
                            i.fas.fa-leaf
                            p.mb-0 Ofrece directrices para procesamiento, almacenamiento y etiquetado.
                  td.left.vt Asegura que el cacao cumpla con estándares internacionales de calidad, inocuidad y etiquetado, facilitando exportaciones y consumo seguro en diferentes mercados.
                tr
                  td.left #[em Fair Trade] (Comercio Justo)
                  td.left.vt Movimiento global que impulsa prácticas comerciales más justas y sostenibles para productores y trabajadores, con énfasis en pequeños agricultores de países en desarrollo.
                  td.left.vt 
                    .row.justify-content.mb-0
                      .col-lg-12
                        ul.lista-ul.mb-0
                          li.d-flex.mb-2
                            i.fas.fa-leaf
                            p.mb-0 Garantizar precios justos y estables para los productores.
                          li.d-flex.mb-2
                            i.fas.fa-leaf
                            p.mb-0 Proteger los derechos laborales y promover condiciones dignas de trabajo.
                          li.d-flex.mb-2
                            i.fas.fa-leaf
                            p.mb-0 Fomentar el desarrollo social y comunitario.
                          li.d-flex.mb-0
                            i.fas.fa-leaf
                            p.mb-0 Promover transparencia y relaciones comerciales a largo plazo.
                  td.left.vt
                    .row.justify-content.mb-0
                      .col-lg-12
                        ul.lista-ul.mb-0
                          li.d-flex.mb-2
                            i.fas.fa-leaf
                            p.mb-0 Pago de un precio mínimo garantizado, independiente de las fluctuaciones del mercado.
                          li.d-flex.mb-2
                            i.fas.fa-leaf
                            p.mb-0 Condiciones laborales seguras y libres de explotación.
                          li.d-flex.mb-2
                            i.fas.fa-leaf
                            p.mb-0 Sostenibilidad ambiental: uso responsable de recursos, reducción de agroquímicos, respeto a la biodiversidad.
                          li.d-flex.mb-2
                            i.fas.fa-leaf
                            p.mb-0 Inversión en proyectos sociales, educativos y de infraestructura en comunidades productoras.
                          li.d-flex.mb-0
                            i.fas.fa-leaf
                            p.mb-0 Relaciones basadas en confianza y cooperación.
                  td.left.vt Certifica cacao producido bajo criterios éticos y sostenibles, asegurando que los agricultores reciban un pago justo, trabajen en condiciones seguras y que parte de las ganancias se reinviertan en el desarrollo comunitario.
                tr
                  td.left Rainforest Alliance
                  td.left.vt Organización internacional sin fines de lucro que trabaja para promover prácticas agrícolas, forestales y turísticas sostenibles, protegiendo ecosistemas y fortaleciendo economías rurales.
                  td.left.vt
                    .row.justify-content.mb-0
                      .col-lg-12
                        ul.lista-ul.mb-0
                          li.d-flex.mb-2
                            i.fas.fa-leaf
                            p.mb-0 Conservar ecosistemas y biodiversidad.
                          li.d-flex.mb-2
                            i.fas.fa-leaf
                            p.mb-0 Mejorar el bienestar social y económico de trabajadores y comunidades.
                          li.d-flex.mb-0
                            i.fas.fa-leaf
                            p.mb-0 Fortalecer la viabilidad económica a través de prácticas sostenibles.
                  td.left.vt
                    .row.justify-content.mb-0
                      .col-lg-12
                        ul.lista-ul.mb-0
                          li.d-flex.mb-2
                            i.fas.fa-leaf
                            p.mb-0 Certifica fincas y productores que cumplen criterios rigurosos de sostenibilidad ambiental, social y económica.
                          li.d-flex.mb-2
                            i.fas.fa-leaf
                            p.mb-0 Promueve la reducción de agroquímicos, conservación de suelo y agua, y protección de hábitats naturales.
                          li.d-flex.mb-2
                            i.fas.fa-leaf
                            p.mb-0 Apoya derechos laborales y condiciones de trabajo dignas.
                          li.d-flex.mb-0
                            i.fas.fa-leaf
                            p.mb-0 Facilita el acceso a mercados internacionales de productos certificados.
                  td.left.vt Garantiza que el cacao certificado provenga de fincas que aplican prácticas agrícolas responsables, protegen el medio ambiente, cuidan a sus trabajadores y tienen trazabilidad confiable para compradores internacionales.
                tr
                  td.left UTZ (fusionado con Rainforest Alliance en 2018)
                  td.left.vt Programa internacional de certificación para la producción sostenible de cultivos como cacao, café y té. Buscaba mejorar las condiciones de vida de los agricultores y proteger el medio ambiente. Actualmente, sus estándares forman parte de Rainforest Alliance.
                  td.left.vt
                    .row.justify-content.mb-0
                      .col-lg-12
                        ul.lista-ul.mb-0
                          li.d-flex.mb-2
                            i.fas.fa-leaf
                            p.mb-0 Promover prácticas agrícolas sostenibles y eficientes.
                          li.d-flex.mb-2
                            i.fas.fa-leaf
                            p.mb-0 Mejorar condiciones laborales y respeto a los derechos humanos.
                          li.d-flex.mb-2
                            i.fas.fa-leaf
                            p.mb-0 Garantizar trazabilidad desde la finca hasta el consumidor.
                          li.d-flex.mb-0
                            i.fas.fa-leaf
                            p.mb-0 Fomentar mejora continua mediante capacitación y desarrollo de productores.
                  td.left.vt
                    .row.justify-content.mb-0
                      .col-lg-12
                        ul.lista-ul.mb-0
                          li.d-flex.mb-2
                            i.fas.fa-leaf
                            p.mb-0 Uso eficiente de recursos naturales.
                          li.d-flex.mb-2
                            i.fas.fa-leaf
                            p.mb-0 Conservación de suelo y agua.
                          li.d-flex.mb-2
                            i.fas.fa-leaf
                            p.mb-0 Manejo integrado de plagas.
                          li.d-flex.mb-2
                            i.fas.fa-leaf
                            p.mb-0 Auditorías para garantizar trazabilidad.
                          li.d-flex.mb-0
                            i.fas.fa-leaf
                            p.mb-0 Capacitación constante para productores.
                  td.left.vt Permitía que el cacao fuera producido de manera sostenible y trazable, generando confianza en consumidores y compradores. Tras su fusión con Rainforest Alliance, sus principios se mantienen fortalecidos dentro de un solo sistema de certificación global.
  
 
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
