// Lo puedes probar ejecutando
// yarn danger pr https://github.com/microsoft/TypeScript-Website/pull/115

import spellcheck from "danger-plugin-spellcheck"

// Bloqueado en despliegues de SE, consulta CI.yml
// import lighthouse from "danger-plugin-lighthouse"

// Revisa la ortografía de todas las cosas
spellcheck({ settings: "microsoft/TypeScript-Website@spellcheck.json" })
