// Una tipo unión  discriminada es donde usas el  análisis del control
// de  flujo para  reducir un  conjunto  de objetos  potenciales a  un
// objeto específico.
//
// Este patrón funciona  muy bien para conjuntos  de objetos similares
// con  una cadena  diferente o  un  tipo de  constante numérica,  por
// ejemplo:  una lista  de eventos  nombrados o  conjuntos de  objetos
// versionados.

type TimingEvent = { name: "start"; userStarted: boolean } | { name: "closed"; duration: number };

// Cuando el  evento entra en  esta función, podría ser  cualquiera de
// los dos potenciales tipos.

const handleEvent = (event: TimingEvent) => {
  // Mediante  el uso  de un  switch  contra el  código TypeScript  de
  // event.name El  análisis de flujo  puede determinar que  un objeto
  // solo puede estar representado por un tipo en la unión.

  switch (event.name) {
    case "start":
      // Esto  significa   que  puedes  acceder  de   forma  segura  a
      // userStarted  porque es  el único  tipo dentro  de TimingEvent
      // donde el nombre es "start"
      const initiatedByUser = event.userStarted;
      break;

    case "closed":
      const timespan = event.duration;
      break;
  }
};

// Este patrón  es el mismo con  los números que podemos  usar como el
// como el discriminador.

// En  este ejemplo,  tenemos una  unión discriminada  y un  estado de
// error adicional para manejar.

type APIResponses = { version: 0; msg: string } | { version: 1; message: string; status: number } | { error: string };

const handleResponse = (response: APIResponses) => {
  // Maneja el caso de error y luego regresa
  if ("error" in response) {
    console.error(response.error);
    return;
  }

  // TypeScript  ahora  sabe  que  APIResponse  puede  ser  el  tipo
  // error. Si fuera el error, la función hubiera regresado.  Puedes
  // verificar  esto   flotando  el  mouse  sobre   la  respuesta  a
  // continuación.

  if (response.version === 0) {
    console.log(response.msg);
  } else if (response.version === 1) {
    console.log(response.status, response.message);
  }
};

// Es mejor usar  una declaración switch en lugar  de declaraciones if
// porque  puedes  asegurar  que  todas  las partes  de  la  unión  se
// comprueban. Hay un buen patrón para esto usando el tipo never en el
// manual:

// https://www.typescriptlang.org/es/docs/handbook/advanced-types.html#uniones-discriminadas
