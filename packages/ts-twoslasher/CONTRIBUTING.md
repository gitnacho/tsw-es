### Cómo hacer un cambio en `Twoslash`

Es probable que tengas un caso de prueba fallido de `twoslash`, cópialo en `test/fixtures/tests/[name].ts` y ejecútalo

> `yarn workspace @typescript/twoslash test`

Esto creará una instantánea `Jest` de esa ejecución de prueba que puedes usar como prueba de integración para asegurarte de que tu cambio no retroceda.

### Otro código complejo

Es un proyecto `Jest` normal en el que también puedes hacer pruebas unitarias como `test/cutting.test.ts`.
