// Generado automáticamente por twoslash-cli de showErrors.ts.md
import React from "react"

const innerHTML = `
<pre class="shiki min-dark twoslash lsp" style="background-color: #1f1f1f; color: #b392f0"><div class="language-id">ts</div><div class='code-container'><code><div class='line'><span style="color: #F97583">const</span><span style="color: #B392F0"> </span><span style="color: #79B8FF"><data-lsp lsp='const user: {&#10;    firstName: string;&#10;    lastName: string;&#10;    role: string;&#10;}' >user</data-lsp></span><span style="color: #B392F0"> </span><span style="color: #F97583">=</span><span style="color: #B392F0"> {</span></div><div class='line'><span style="color: #B392F0">  <data-lsp lsp='(property) firstName: string' >firstName</data-lsp></span><span style="color: #F97583">:</span><span style="color: #B392F0"> </span><span style="color: #FFAB70">"Angela"</span><span style="color: #B392F0">,</span></div><div class='line'><span style="color: #B392F0">  <data-lsp lsp='(property) lastName: string' >lastName</data-lsp></span><span style="color: #F97583">:</span><span style="color: #B392F0"> </span><span style="color: #FFAB70">"Davis"</span><span style="color: #B392F0">,</span></div><div class='line'><span style="color: #B392F0">  <data-lsp lsp='(property) role: string' >role</data-lsp></span><span style="color: #F97583">:</span><span style="color: #B392F0"> </span><span style="color: #FFAB70">"Professor"</span><span style="color: #B392F0">,</span></div><div class='line'><span style="color: #B392F0">}</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #79B8FF"><data-lsp lsp='var console: Console' >console</data-lsp></span><span style="color: #B392F0">.<data-lsp lsp='(method) Console.log(...data: any[]): void' >log</data-lsp>(</span><span style="color: #79B8FF"><data-lsp lsp='const user: {&#10;    firstName: string;&#10;    lastName: string;&#10;    role: string;&#10;}' >user</data-lsp></span><span style="color: #B392F0">.<data-err><data-lsp lsp='any' >name</data-lsp></data-err>)</span></div><span class="error"><span>Property 'name' does not exist on type '{ firstName: string; lastName: string; role: string; }'.</span><span class="code">2339</span></span><span class="error-behind">La propiedad 'name' no existe en el tipo '{ firstName: string; lastName: string; role: string; }'.</span><div class='line'>&nbsp;</div></code></div></pre>
<pre class="shiki homepage twoslash lsp" style="background-color: #235A97; color: #eeeeee"><div class="language-id">ts</div><div class='code-container'><code><div class='line'><span style="color: #E3EBF3">const</span><span style="color: #EEEEEE"> </span><span style="color: #C4FF85"><data-lsp lsp='const user: {&#10;    firstName: string;&#10;    lastName: string;&#10;    role: string;&#10;}' >user</data-lsp></span><span style="color: #EEEEEE"> </span><span style="color: #F2F1EF">=</span><span style="color: #EEEEEE"> {</span></div><div class='line'><span style="color: #EEEEEE">  <data-lsp lsp='(property) firstName: string' >firstName</data-lsp>: </span><span style="color: #F7CBA4">"Angela"</span><span style="color: #EEEEEE">,</span></div><div class='line'><span style="color: #EEEEEE">  <data-lsp lsp='(property) lastName: string' >lastName</data-lsp>: </span><span style="color: #F7CBA4">"Davis"</span><span style="color: #EEEEEE">,</span></div><div class='line'><span style="color: #EEEEEE">  <data-lsp lsp='(property) role: string' >role</data-lsp>: </span><span style="color: #F7CBA4">"Professor"</span><span style="color: #EEEEEE">,</span></div><div class='line'><span style="color: #EEEEEE">}</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #C4FF85"><data-lsp lsp='var console: Console' >console</data-lsp></span><span style="color: #EEEEEE">.</span><span style="color: #E0FFFF"><data-lsp lsp='(method) Console.log(...data: any[]): void' >log</data-lsp></span><span style="color: #EEEEEE">(</span><span style="color: #C4FF85"><data-lsp lsp='const user: {&#10;    firstName: string;&#10;    lastName: string;&#10;    role: string;&#10;}' >user</data-lsp></span><span style="color: #EEEEEE">.</span><span style="color: #C4FF85"><data-err><data-lsp lsp='any' >name</data-lsp></data-err></span><span style="color: #EEEEEE">)</span></div><span class="error"><span>La propiedad 'name' no existe en el tipo '{ firstName: string; lastName: string; role: string; }'.</span><span class="code">2339</span></span><span class="error-behind">La propiedad 'name' no existe en el tipo '{ firstName: string; lastName: string; role: string; }'.</span><div class='line'>&nbsp;</div></code></div></pre>
`

export const Code = () => <div dangerouslySetInnerHTML={{ __html: innerHTML }} />
