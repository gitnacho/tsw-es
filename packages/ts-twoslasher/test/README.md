### Pruebas

Hay dos tipos de pruebas:

- Unidades que son pruebas `Jest` y no son exclusivas de este proyecto

- Pruebas de integración en las que colocas un código de ejemplo del dispositivo en el directorio correcto y obtienes un resultado *JSON* de respuesta. Hay tres directorios para las pruebas:
  - `test/fixtures` ⏤ Cualquier prueba en este archivo se muestra en el archivo README, por lo que deberían mostrar características: no errores
  - `tests/fixtures/throws` ⏤ Una prueba que debería elevar correctamente
  - `tests/fixtures/tests` ⏤ Todas las demás pruebas, repros, etc.
