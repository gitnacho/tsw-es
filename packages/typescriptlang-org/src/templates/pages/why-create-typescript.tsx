import * as React from "react"
import { Layout } from "../../components/layout"
import { Intl } from "../../components/Intl"

import { createIntlLink } from "../../components/IntlLink"

type Props = {
        pageContext: any
}

const Index: React.FC<Props> = (props) => {
        const Link = createIntlLink(props.pageContext.lang)

        return <Layout title="¿Por qué existe TypeScript?" description="" lang={props.pageContext.lang}>
                <div className="main-content-block" style={{ textAlign: "center" }}>
                        <p>TypeScript es un lenguaje de Microsoft que se basa en JavaScript.<br />Esta publicación es una descripción general no técnica de qué es JavaScript, cómo TypeScript amplía JavaScript y qué problemas resuelve.</p>
                </div>

                <div className="raised main-content-block">
                        <article>

                                <h2>¿Qué es JavaScript?</h2>

                                <p>Debido a que TypeScript amplía JavaScript, esto lo convierte en un buen punto de partida. JavaScript se usa comúnmente para crear sitios web. Al construir un sitio web,
                                trabajas con tres lenguajes: HTML, CSS y JavaScript (JS). Hablando en general: HTML define el
                                contenido que aparecerá en la página, CSS define el estilo visual de la página y JS define el comportamiento
        del estilo interactivo de la página.</p>

                                <p>Describimos tener estos conjuntos de habilidades como un desarrollador "front-end". Usas tres
                                lenguajes para crear páginas dentro de un navegador web como Safari, Firefox, Edge o Chrome. Dada la popularidad de la web
        es para el comercio y el intercambio de información, existe una gran demanda de personas que sean buenas en el uso de estos tres lenguajes.</p>

                                <p>En relación con la función de ser un desarrollador "front-end" está el conjunto de habilidades para los desarrolladores "back-end", que
                                son para crear servicios informáticos que se comuniquen con un navegador web (pasándole HTML/CSS/JS) o con otro
                                servicio (enviando datos directamente).

        No necesitas usar HTML, CSS o JS para escribir este tipo de código, pero generalmente es un producto final de tu trabajo porque es probable que se presente en un navegador web.</p>

                                <h3>¿Qué hacen los lenguajes de programación?</h3>

                                <p>Los lenguajes de programación son una forma de comunicarse entre humanos y computadoras. La gente lee el código muchos, muchos múltiplos de veces más de lo que
                                lo escriben - por lo que los desarrolladores crean lenguajes de programación que son buenos para resolver problemas particulares con una pequeña cantidad de
código. Aquí hay un ejemplo usando JavaScript:</p>

                                <pre><code>{`
var name = "Danger"
console.log("Hola, " + name)
          `.trim()}</code></pre>

                                <p>La primera línea crea una variable (efectivamente, un cuadro en el que puedes almacenar otras cosas) y luego la segunda línea envía texto a la
consola (por ejemplo DOS, o la terminal) <code>"Hola, Danger"</code>.</p>

                                <p>JavaScript está diseñado para funcionar como un lenguaje de scripting, lo cual significa que el código comienza en la parte superior del archivo y luego pasa línea por línea hacia abajo ejecutando ese código. Para proporcionar un poco de contraste,
                                aquí está el mismo comportamiento en Java, que está construido con diferentes
restricciones del lenguaje:</p>

                                <pre><code>{`
class Main {
  public static void main(String[] args) {
    String name = "Danger";
    System.out.println("Hello, " + name);
  }
}
`.trim()}</code></pre>

                                <p>Estos dos ejemplos de código hacen lo mismo, sin embargo, la versión de Java viene con muchas palabras que no son necesariamente sobre
diciéndole a la computadora exactamente qué hacer, p. ej. <code>class Main &#123;</code>, <code>public static void main(String[] args) &#123;</code> y dos <code>&rbrace;</code> adicionales.
          También tiene punto y coma al final de algunas líneas. Ninguno de estos lenguajes de programación es incorrecto, sin embargo, Java tiene como objetivo crear cosas diferentes de JavaScript, y estos fragmentos adicionales de código tienen sentido dentro de las limitaciones de la creación de una aplicación Java.</p>

                                <p>Sin embargo, para llegar al punto clave, hay una línea destacada que me gustaría que comparemos:</p>
                                <pre><code>{`
// JavaScript
var name = "Danger"

// Java
String name = "Danger";
        `.trim()}</code></pre>


                                <p>Estas dos líneas declaran variables llamadas <code>name</code> que contienen el valor <code>"Danger"</code>.</p>

                                <p>En JavaScript usas la abreviatura <code>var</code> para declarar una variable. Mientras tanto, en Java necesitas decir <em>qué tipo
de datos</em> que contiene la variable. En este caso, la variable contiene una <code>String</code>. (Una cadena es un término de programación para
una colección de caracteres. Ellos <code>"se ven así"</code>. Este <a href="https://www.youtube.com/watch?v=czTWbdwbt7E">video de 5 m</a> es una buena introducción si deseas obtener más información).</p>

                                <p>Estas dos variables contienen una cadena, pero la diferencia es que en Java la variable <em>solo</em> puede contener una <em>cadena</em>, porque eso es lo que dijimos cuando creamos la variable. En JS, la variable puede cambiar para ser <em>cualquier cosa</em>,
como un número o una lista de fechas.</p>

                                <p>Para ilustrar:</p>

                                <pre><code>{`
// Antes en JS
var name = "Danger"
// También está bien
var name = 1
var name = false
var name = ["2018-02-03", "2019-01-12"]

// Antes en Java
String name = "Danger";
// No está bien, el código no sería aceptado por Java
String name = 1;
String name = false
String name = new String[]{"2018-02-03", "2019-01-12"};
        `.trim()}</code></pre>


                                <p>Estas compensaciones tienen sentido en el contexto para el que se crearon estos lenguajes en 1995. JavaScript originalmente
                                estaba diseñado para ser un pequeño lenguaje de programación que manejaba interacciones simples en sitios web. Java por otro
        lado, se creó específicamente para crear aplicaciones complejas que se podrían ejecutar en cualquier computadora. Esperaban que se usara para construir código base de diferentes escalas, por lo que el lenguaje requería que los programadores escribieran diferentes tipos de código.</p>

                                <p>Java requería que los programadores fueran más explícitos con los valores de sus variables porque los programas que esperaban
personas para construir eran más complejas. Mientras que JavaScript optó por la facilidad de lectura al omitir información sobre los detalles, y esperaba que el código base fuera significativamente más pequeño.</p>

                                <h3>¿Qué es TypeScript?</h3>

                                <p>TypeScript es un lenguaje de programación - contiene todo JavaScript, y luego un poco mas. Usando nuestro ejemplo anterior,
comparemos los scripts de "Hola, Danger" en JavaScript frente a TypeScript:</p>


                                <pre><code>{`
// JavaScript
var name = "Danger"
console.log("Hola, " + name)

// TypeScript:
var name = "Danger"
console.log("Hola, " + name)

// Sí, no te estás perdiendo algo, no hay diferencia.
`.trim()}</code></pre>

                                <p>Debido al objetivo de TypeScript de solo <em>extender</em> JavaScript, el código JavaScript existente que vimos funciona como TypeScript.
        Las extensiones que TypeScript agrega a JavaScript están destinadas a ayudarte a ser más explícito sobre qué tipos de datos estás
usado en tu código, un poco como Java.</p>
                                <p>Aquí está el mismo ejemplo, pero usando TypeScript para ser más explícito sobre cuál es la variable:</p>

                                <pre><code>{`
var name: string = "Danger"
console.log("Hola, " + name)
`.trim()}</code></pre>

                                <p>Este <code>: string</code> extra permite al lector estar seguro de que <code>name</code> será solo una cadena. Anotar tus variables
de esta manera también le da a TypeScript la oportunidad de verificar que estos coinciden. Esto es <em>muy</em> útil, porque hace un seguimiento de los cambios
como el tipo de valor en una variable parece fácil cuando es uno o dos, pero una vez que comienza a llegar a las centenas,
eso es mucho de lo que hacer un seguimiento. La escritura de tipos ayuda a los programadores a tener más confianza en su código porque los tipos captan
errores.</p>

                                <p>Simplemente hablando, llamamos a estas anotaciones "Types". De ahí el nombre <i>Type</i>Script. Uno de los lemas de TypeScript
        es "JavaScript que escala", que es una declaración de que estas anotaciones de tipo adicional te permiten trabajar en
        proyectos. Esto se debe a que puedes verificar por adelantado qué tan correcto es tu código. Esto significa que tienes menos necesidad de
comprender cómo cada cambio afecta al resto del programa.</p>

                                <p>En los años 90, y tal vez hasta hace 5 o 10 años, la compensación por no tener tipos en tu aplicación JavaScript era
                                bien porque el tamaño y la complejidad de los programas que se estaban construyendo estaban limitados solo a la parte frontal de
        sitios web. Sin embargo, hoy día, JavaScript se usa en casi todas partes, para construir casi cualquier cosa que se ejecute en una computadora. Una gran cantidad de aplicaciones para dispositivos móviles y de escritorio usan JavaScript y tecnología web internamente.</p>

                                <p>Todos estos son considerablemente más complicados de construir y comprender, agregar tipos reduce drásticamente la complejidad de realizar mejoras en esos programas.</p>

                                <h3>¿Qué problemas puede resolver TypeScript?</h3>

                                <p>Normalmente, la necesidad de asegurarse de que no haya errores en tu código se puede manejar escribiendo pruebas automatizadas, luego verificando manualmente que el código funciona como esperas y finalmente haciendo que otra persona valide que parece correcto.</p>

                                <p>No muchas empresas son del tamaño de Microsoft, sin embargo, muchos de los problemas para escribir JavaScript en grandes códigos base son los mismos. Muchas aplicaciones de JavaScript se componen de cientos de miles de archivos. Un solo cambio
                                a un archivo individual puede afectar el comportamiento de cualquier número de otros archivos, como tirar una piedra en un estanque
y haciendo que las ondas se extiendan hasta la orilla.</p>

                                <p>Validar las conexiones entre cada parte de tu proyecto puede consumir mucho tiempo rápidamente, el uso de un lenguaje de tipo verificado como TypeScript puede manejar eso automáticamente y proporcionar comentarios instantáneos durante el desarrollo.</p>

                                <p>Estas características permiten que TypeScript ayude a los desarrolladores a tener más confianza en tu código y a ahorrar una cantidad considerable de tiempo al validar que no haya roto el proyecto accidentalmente.</p>
                        </article>
                </div>

        </Layout>
}

export default (props: Props) => <Intl locale={props.pageContext.lang}><Index {...props} /></Intl>
