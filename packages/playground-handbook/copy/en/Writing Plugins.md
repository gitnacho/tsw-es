## Escribir un complemento

*TypeScript Playground* permite que las personas se conecten al *Playground* y lo amplíen de formas inesperadas. Como se muestra en la página [Complementos](/play#handbook-11) de este manual, ya hay bastantes complementos que cubren nichos de ecosistemas únicos.

Para empezar, necesitas aproximadamente 5 minutos, *Node.js*, *yarn* y *Firefox*/*Edge* o *Chrome*.

- **Paso 1**: Utiliza la plantilla para arrancar: `yarn create typescript-playground-plugin playground-my-plugin`
- **Paso 2**: Ejecuta `yarn start` en el nuevo repositorio, para iniciar el servidor de desarrollo de complementos local
- **Paso 3**: Abre la pestaña "Configuración" de la barra lateral y habilita la configuración "Conectarse a localhost:5000/index.js"
- **Paso 4**: Actualiza, y ve la nueva pestaña. Ese es tu complemento en funcionamiento.

Si quieres entrar directamente, puedes leer los archivos `.d.ts` en `vendor` que describen las *APIs* de *Playground* y *Sandbox*.

Para obtener una comprensión más profunda de cómo funcionan los complementos y un recorrido guiado para crear un complemento que se ejecute [`más bonito`](http://prettier.io/), puedes ver la charla de *TSConf 2020* de *Orta Therox* sobre ["Owning el *Playground"](https://www.youtube.com/watch?v=eJWtTl62gy0).
