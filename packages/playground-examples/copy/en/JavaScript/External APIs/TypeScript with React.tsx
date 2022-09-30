//// { "order": 2, "compiler": { "jsx": 2, "esModuleInterop": true } }

// React es una biblioteca popular para crear interfaces de usuario.
// Proporciona una abstracción de JavaScript para crear componentes
// vista usando una extensión del lenguaje JavaScript llamada
// JSX.

// TypeScript es compatible con JSX y proporciona un amplio conjunto de
// herramientas de tipo para modelar cómo se conectan los componentes.

// Para comprender cómo funciona TypeScript con los componentes de React
// es posible que desees una introducción a los genéricos:
//
// - example:generic-functions
// - example:generic-classes

// Primero veremos cómo se usan las interfaces genéricas para mapear
// componentes React. Este es un componente funcional de faux-React:

type FauxactFunctionComponent<Props extends {}> = (
  props: Props,
  context?: any
) => FauxactFunctionComponent<any> | null | JSX.Element;

// Aproximadamente:
//
// FauxactFunctionComponent es una función genérica que se basa en
// otro tipo, Props. Props tiene que ser un objeto (para asegurarte
// que no pasas un primitivo) y el tipo Props será
// reutilizado como el primer argumento en la función.

// Para usarlo, necesitas un tipo props:

interface DateProps {
  iso8601Date: string;
  message: string;
}

// Luego podemos crear un DateComponent que usa la
// interfaz DateProps y renderiza la fecha.

const DateComponent: FauxactFunctionComponent<DateProps> = props => (
  <time dateTime={props.iso8601Date}>{props.message}</time>
);

// Esto crea una función que es genérica con una variable
// props, la cual tiene que ser un objeto. La función componente
// devuelve otra función componente o null.

// El otro componente API es uno basado en clases. Aquí está una
// versión simplificada de esa API:

interface FauxactClassComponent<Props extends {}, State = {}> {
  props: Props;
  state: State;

  setState: (prevState: State, props: Props) => Props;
  callback?: () => void;
  render(): FauxactClassComponent<any> | null;
}

// Porque esta clase puede tener Props y State - Tiene
// dos argumentos genéricos que se utilizan en toda la clase.

// La biblioteca React viene con sus propias definiciones de tipos.
// como estos, pero son mucho más completos. Los vamos a traer
// en nuestro playground y exploraremos algunos componentes.

import * as React from "react";

// Tus accesorios son su API pública, por lo que vale la pena tomar la
// hora de usar JSDoc para explicar cómo funciona:

export interface Props {
  /** El nombre del usuario */
  name: string;
  /** El nombre se debe renderizar en negrita */
  priority?: boolean;
}

const PrintName: React.FC<Props> = props => {
  return (
    <div>
      <p style={{ fontWeight: props.priority ? "bold" : "normal" }}>{props.name}</p>
    </div>
  );
};

// Puedes jugar con el uso del nuevo componente a continuación:

const ShowUser: React.FC<Props> = props => {
  return <PrintName name="Ned" />;
};

// TypeScript admite proporcionar intellisense dentro
// de {} en un atributo

let username = "Cersei";
const ShowStoredUser: React.FC<Props> = props => {
  return <PrintName name={username} priority />;
};

// TypeScript también funciona con el código React moderno, aquí puedes
// ver que count y setCount se han inferido correctamente
// para usar números basados ​​en el valor inicial pasado a
// useState.

import { useState, useEffect } from "react";

const CounterExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>Hiciste clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Haz clic aquí</button>
    </div>
  );
};

// React y TypeScript es un tema muy, muy grande
// pero los fundamentos son bastante pequeños: TypeScript:
// es compatible con JSX, y el resto del tipado lo maneja
// React desde Definitely Typed.

// Puedes conseguir más información sobre el uso de React con TypeScript
// en estos sitios:
//
// https://github.com/typescript-cheatsheets/react-typescript-cheatsheet
// https://egghead.io/courses/use-typescript-to-develop-react-applications
// https://levelup.gitconnected.com/ultimate-react-component-patterns-with-typescript-2-8-82990c516935
