### Dónde buscar si algo sale mal

El sitio es un sitio estático, pero hoy todavía está alojado en un servidor que poseemos.

La última vez que [hubo una interrupción](https://github.com/microsoft/TypeScript-Website/issues/385), fue porque una implementación no se actualizó atómicamente. Veamos cómo podrías depurar eso.

### Acceso que necesitas

- Debes tener acceso a ["TypeScript ⏤ Public Facing Services"](https://ms.portal.azure.com/#@microsoft.onmicrosoft.com/asset/Microsoft_Azure_Billing/Subscription/subscriptions/57bfeeed-c34a-4ffd-a06b-ccff27ac91b8) por medio de una suscripción en *Azure*

### Lugares para leer registros

Actualmente estamos ejecutando *App Service*, los lugares donde puedes encontrar información:

- Mira los [registros de despliegue](https://ms.portal.azure.com/#@microsoft.onmicrosoft.com/resource/subscriptions/99160d5b-9289-4b66-8074-ed268e739e8e/resourceGroups/Default-Web-WestUS/providers/Microsoft.Web/sites/TypeScript-1ebb3390-2634-4956-a955-eab987b7bb25/vstscd).

- Tenemos una retención de 7 días de [registros del servidor](https://ms.portal.azure.com/#@microsoft.onmicrosoft.com/resource/subscriptions/99160d5b-9289-4b66-8074-ed268e739e8e/resourceGroups/Default-Web-WestUS/providers/Microsoft.Web/sites/TypeScript-1ebb3390-2634-4956-a955-eab987b7bb25/logStream). En términos generales, probablemente no sean útiles y, de todos modos, probablemente se reducirían a 35 MB por día con bastante rapidez.

### Despliegue

La compilación para el tren de despliegue normalmente se ve así:

- La rama *v2* se empuja:
- Se realiza una implementación para *Azure Blob Storage* a través de [`.github/workflows/v2-merged-staging.yml`](https://github.com/microsoft/TypeScript-website/blob/v2/.github/workflows/v2-merged-staging.yml)
- Todos los lunes, se realiza una implementación de *v2* a la aplicación de producción a través de [`.github/workflows/deploy-prod.yml`](https://github.com/microsoft/TypeScript-website/blob/v2/.github/workflows/deploy-prod.yml)

Puedes implementar *v2* en producción en cualquier momento a través del [botón "Ejecutar flujo de trabajo" aquí](https://github.com/microsoft/TypeScript-Website/actions?query=workflow%3A%22Monday+Website+Push+To+Production%22), por lo que si tienes una confirmación de emergencia: ve a `v2` y luego puedes ejecutar la acción.

Las aplicaciones de *App Service* están configuradas por [`Web.config`](https://github.com/microsoft/TypeScript-website/blob/v2/packages/typescriptlang-org/static/Web.config). [Aquí hay una referencia sobre el formato](https://hangouts.google.com/call/H553wrJ9d97l2LMpNh9hAEEE). He visto archivos (`*.json` y `*.manifest`) ser 404 en el sitio porque no estaban en la configuración.

Revisa los registros de compilación, siempre están en [Acciones de *GitHub*](https://github.com/microsoft/TypeScript-Website/actions)
