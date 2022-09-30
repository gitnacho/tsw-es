// `Unknown`

// Unknown es  uno de esos  tipos que, desde  el momento en  que haces
// clic, le  puedes encontrar muchos  usos. Actúa como un  hermano del
// tipo any. Donde any  permite  la  ambigüedad ⏤ unknown  requiere
// detalles específicos.

// Un buen ejemplo sería empaquetar un analizador JSON. Los datos JSON
// pueden venir en muchas formas diferentes y el creador de la función
// de análisis json no conocerá la forma de los datos ⏤ la persona que
// llama a esa función lo debería saber.

const jsonParser = (jsonString: string) => JSON.parse(jsonString);

const myAccount = jsonParser(`{ "name": "Dorothea" }`);

myAccount.name;
myAccount.email;

// Si  pasas el  mouse sobre  jsonParser, puedes  ver que  el tipo  de
// retorno es  any, y  myAccount también es  any. Es  posible corregir
// esto con  tipos genéricos ⏤ pero también es posible  arreglar esto
// con unknown.

const jsonParserUnknown = (jsonString: string): unknown => JSON.parse(jsonString);

const myOtherAccount = jsonParserUnknown(`{ "name": "Samuel" }`);

myOtherAccount.name;

// El objeto myOtherAccount no se puede  utilizar hasta que el tipo se
// haya  declarado  en  TypeScript.    Esto  se  puede  utilizar  para
// garantizar que  los consumidores de la  API piensen anticipadamente
// lo que quieren expresar al escribir:

type User = { name: string };
const myUserAccount = jsonParserUnknown(`{ "name": "Samuel" }`) as User;
myUserAccount.name;

// Unknown  es una  gran herramienta,  para entenderlo  más lee  estos
// artículos:
// https://mariusschulz.com/blog/the-unknown-type-in-typescript
// https://www.typescriptlang.org/es/docs/handbook/release-notes/typescript-3-0.html#nuevo-tipo-superior-unknown

// Never

// Dado  que TypeScript  admite el  análisis  de flujo  de código,  el
// lenguaje necesita poder representar cuando el código lógicamente no
// puede ocurrir. Por ejemplo, esta función no puede regresar:

const neverReturns = () => {
  // Si lanzas en la primera línea
  throw new Error("Always throws, never returns");
};

// Si pasas el  mouse sobre el tipo,  verás que es una ()  => never lo
// cual significa que  never debería suceder. Estos  todavía se pueden
// transmitir como otros valores:

const myValue = neverReturns();

// Tener una función que regrese never  puede ser útil cuando se trata
// con la  imprevisibilidad del entorno  de ejecución de  JavaScript y
// los consumidores de la API que pueden no estar usando tipos:

const validateUser = (user: User) => {
  if (user) {
    return user.name !== "NaN";
  }

  // Según  el sistema  de  tipos,  esta ruta  de  código nunca  puede
  // suceder, que coincide con el tipo de retorno de neverReturns.

  return neverReturns();
};

// Las definiciones  de tipo establecen  que se debe pasar  un usuario
// pero hay suficientes  válvulas de escape en JavaScript  por las que
// no puedes garantizar eso.

// Usar  una  función que  regresa  never  te permite  agregar  código
// adicional en lugares que no debería ser posible.  Esto es útil para
// presentar  mejores  mensajes  de  error,  o  cerrar  recursos  como
// archivos o bucles.

// Un  uso  muy popular  para  never  es  asegurar  que un  switch  es
// exhaustivo. Por ejemplo, que todas las rutas estén cubiertas.

// Aquí hay  una enumeración y  un switch exhaustivo,  intenta agregar
// una nueva opción a la enumeración (¿tal vez Tulip?)

enum Flower {
  Rose,
  Rhododendron,
  Violet,
  Daisy,
}

const flowerLatinName = (flower: Flower) => {
  switch (flower) {
    case Flower.Rose:
      return "Rosa rubiginosa";
    case Flower.Rhododendron:
      return "Rhododendron ferrugineum";
    case Flower.Violet:
      return "Viola reichenbachiana";
    case Flower.Daisy:
      return "Bellis perennis";

    default:
      const _exhaustiveCheck: never = flower;
      return _exhaustiveCheck;
  }
};

// Obtendrás  un error  del compilador  que indica  que tu  nuevo tipo
// flower no se puede convertir en never.

// Never en Uniones

// Un never  es algo  que -automáticamente- se  elimina desde  un tipo
// unión.

type NeverIsRemoved = string | never | number;

// Si  observas el  tipo de  NeverIsRemoved,  verás que  es una  unión
// string | number.  Esto se  debe a que  nunca debería suceder  en el
// entorno de ejecución porque no lo puedes asignar.

// Esta característica se usa mucho en example:conditional-types
