// Generado automáticamente por twoslash-cli de IndexGetStarted3.js.md
import React from "react"

const innerHTML = `
<div class='tag-container'><pre class="shiki light-plus twoslash lsp" style="background-color: #FFFFFF; color: #000000"><div class="language-id">js</div><div class='code-container'><code><div class='line'><span style="color: #008000">// @ts-check</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #008000">/** </span><span style="color: #0000FF">@param</span><span style="color: #008000"> </span><span style="color: #267F99">{any[]}</span><span style="color: #008000"> </span><span style="color: #001080">arr</span><span style="color: #008000"> */</span></div><div class='line'><span style="color: #0000FF">function</span><span style="color: #000000"> </span><span style="color: #795E26"><data-lsp lsp='function compact(arr: any[]): any' >compact</data-lsp></span><span style="color: #000000">(</span><span style="color: #001080"><data-lsp lsp='(parameter) arr: any[]' >arr</data-lsp></span><span style="color: #000000">) {</span></div><div class='line'><span style="color: #000000">    </span><span style="color: #AF00DB">if</span><span style="color: #000000"> (</span><span style="color: #001080"><data-lsp lsp='(parameter) arr: any[]' >arr</data-lsp></span><span style="color: #000000">.</span><span style="color: #001080"><data-lsp lsp='(property) Array&lt;any>.length: number' >length</data-lsp></span><span style="color: #000000"> &gt; </span><span style="color: #098658">10</span><span style="color: #000000">)</span></div><div class='line'><span style="color: #000000">      </span><span style="color: #AF00DB">return</span><span style="color: #000000"> </span><span style="color: #001080"><data-lsp lsp='(parameter) arr: any[]' >arr</data-lsp></span><span style="color: #000000">.</span><span style="color: #795E26"><data-err><data-lsp lsp='any' >trim</data-lsp></data-err></span><span style="color: #000000">(</span><span style="color: #098658">0</span><span style="color: #000000">, </span><span style="color: #098658">10</span><span style="color: #000000">)</span></div><span class="error"><span>Property 'trim' does not exist on type 'any[]'.</span><span class="code">2339</span></span><span class="error-behind">Property 'trim' does not exist on type 'any[]'.</span><div class='line'><span style="color: #000000">    </span><span style="color: #AF00DB">return</span><span style="color: #000000"> </span><span style="color: #001080"><data-lsp lsp='(parameter) arr: any[]' >arr</data-lsp></span></div><div class='line'><span style="color: #000000">  }</span></div></code></div></pre>
<div class='twoslash-annotation left' style="top: 4em">
  <svg style='transform: translateX(4px) translateY(-12px) rotate(44deg);' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 39C1.5 32.7511 6.1 17.5173 20.5 6.57333M11.5 4.04L27 0.999998C24.8333 4.88444 20.5 13.16 20.5 15.1867" stroke="black" />
</svg>
  <p class='twoslash-annotation-text' style="transform: rotate(1deg)">Usa JSDoc para dar información de tipo</p>
</div>
<div class='twoslash-annotation right' style="top: 7em">
  <svg style='transform: translateX(1px) translateY(2px) rotate(-64deg);' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27 39C26.5 32.7511 21.9 17.5173 7.5 6.57333M16.5 4.04L0.999999 0.999998C3.16667 4.88444 7.5 13.16 7.5 15.1867" stroke="black" />
</svg>
  <p class='twoslash-annotation-text' style="transform: rotate(3deg)">Ahora TS ha encontrado una mala llamada. Los arrays tienen slice, no trim.</p>
</div></div>
`

export const Code = () => <div dangerouslySetInnerHTML={{ __html: innerHTML }} />
