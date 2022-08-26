import{r as p,o as e,c as o,b as s,a as c,w as l,e as a,d as n}from"./app.41f6f67f.js";const u=a(`<h1 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1">\u5FEB\u901F\u5F00\u59CB <a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a></h1><p>\u672C\u8282\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728\u9879\u76EE\u4E2D\u4F7F\u7528 Element Plus\u3002</p><h2 id="\u7528\u6CD5" tabindex="-1">\u7528\u6CD5 <a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a></h2><h3 id="\u5B8C\u6574\u5F15\u5165" tabindex="-1">\u5B8C\u6574\u5F15\u5165 <a class="header-anchor" href="#\u5B8C\u6574\u5F15\u5165" aria-hidden="true">#</a></h3><p>\u5982\u679C\u4F60\u5BF9\u6253\u5305\u540E\u7684\u6587\u4EF6\u5927\u5C0F\u4E0D\u662F\u5F88\u5728\u4E4E\uFF0C\u90A3\u4E48\u4F7F\u7528\u5B8C\u6574\u5BFC\u5165\u4F1A\u66F4\u65B9\u4FBF\u3002</p><div class="language-typescript"><pre><code><span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;element-plus/dist/index.css&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="volar-\u652F\u6301" tabindex="-1">Volar \u652F\u6301 <a class="header-anchor" href="#volar-\u652F\u6301" aria-hidden="true">#</a></h4><p>\u5982\u679C\u60A8\u4F7F\u7528 Volar\uFF0C\u8BF7\u5728 <code>tsconfig.json</code> \u4E2D\u901A\u8FC7 <code>compilerOptions.type</code> \u6307\u5B9A\u5168\u5C40\u7EC4\u4EF6\u7C7B\u578B\u3002</p><div class="language-json"><pre><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;element-plus/global&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u6309\u9700\u5BFC\u5165" tabindex="-1">\u6309\u9700\u5BFC\u5165 <a class="header-anchor" href="#\u6309\u9700\u5BFC\u5165" aria-hidden="true">#</a></h3><p>\u60A8\u9700\u8981\u4F7F\u7528\u989D\u5916\u7684\u63D2\u4EF6\u6765\u5BFC\u5165\u8981\u4F7F\u7528\u7684\u7EC4\u4EF6\u3002</p>`,11),r={id:"\u81EA\u52A8\u5BFC\u5165-\u63A8\u8350",tabindex:"-1"},i=n("\u81EA\u52A8\u5BFC\u5165 "),k=n("\u63A8\u8350"),d=n(),g=s("a",{class:"header-anchor",href:"#\u81EA\u52A8\u5BFC\u5165-\u63A8\u8350","aria-hidden":"true"},"#",-1),m=a(`<p>\u9996\u5148\u4F60\u9700\u8981\u5B89\u88C5<code>unplugin-vue-components</code> \u548C <code>unplugin-auto-import</code>\u8FD9\u4E24\u6B3E\u63D2\u4EF6</p><div class="language-shell"><pre><code><span class="token function">npm</span> <span class="token function">install</span> -D unplugin-vue-components unplugin-auto-import
</code></pre></div><p>\u7136\u540E\u628A\u4E0B\u5217\u4EE3\u7801\u63D2\u5165\u5230\u4F60\u7684 <code>Vite</code> \u6216 <code>Webpack</code> \u7684\u914D\u7F6E\u6587\u4EF6\u4E2D</p><h5 id="vite" tabindex="-1">Vite <a class="header-anchor" href="#vite" aria-hidden="true">#</a></h5><div class="language-ts"><pre><code><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">&#39;unplugin-auto-import/vite&#39;</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElementPlusResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// ...</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h5 id="webpack" tabindex="-1">Webpack <a class="header-anchor" href="#webpack" aria-hidden="true">#</a></h5><div class="language-js"><pre><code><span class="token comment">// webpack.config.js</span>
<span class="token keyword">const</span> AutoImport <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;unplugin-auto-import/webpack&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Components <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;unplugin-vue-components/webpack&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> ElementPlusResolver <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u60F3\u4E86\u89E3\u66F4\u591A\u6253\u5305 (<a href="https://rollupjs.org/" target="_blank" rel="noopener noreferrer">Rollup</a>, <a href="https://cli.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue CLI</a>) \u548C\u914D\u7F6E\u5DE5\u5177\uFF0C\u8BF7\u53C2\u8003 <a href="https://github.com/antfu/unplugin-vue-components#installation" target="_blank" rel="noopener noreferrer">unplugin-vue-components</a> \u548C <a href="https://github.com/antfu/unplugin-auto-import#install" target="_blank" rel="noopener noreferrer">unplugin-auto-import</a>\u3002</p><h3 id="\u624B\u52A8\u5BFC\u5165" tabindex="-1">\u624B\u52A8\u5BFC\u5165 <a class="header-anchor" href="#\u624B\u52A8\u5BFC\u5165" aria-hidden="true">#</a></h3><p>Element Plus \u63D0\u4F9B\u4E86\u57FA\u4E8E ES Module \u5F00\u7BB1\u5373\u7528\u7684 <a href="https://webpack.js.org/guides/tree-shaking/" target="_blank" rel="noopener noreferrer">Tree Shaking</a> \u529F\u80FD\u3002</p><p>\u4F46\u662F\u4F60\u9700\u8981\u5B89\u88C5 <a href="https://github.com/element-plus/unplugin-element-plus" target="_blank" rel="noopener noreferrer">unplugin-element-plus</a> \u6765\u5BFC\u5165\u6837\u5F0F\u3002 \u8BF7\u53C2\u8003 <a href="https://github.com/element-plus/unplugin-element-plus#readme" target="_blank" rel="noopener noreferrer">\u6587\u6863</a> \u4E86\u89E3\u5982\u4F55\u914D\u7F6E\u5B83\u3002</p><blockquote><p>App.vue</p></blockquote><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span><span class="token punctuation">&gt;</span></span>I am ElButton<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ElButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> ElButton <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-ts"><pre><code><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;unplugin-element-plus/vite&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u5982\u679C\u60A8\u4F7F\u7528 <code>unplugin-element-plus</code> \u5E76\u4E14\u53EA\u4F7F\u7528\u7EC4\u4EF6 API\uFF0C\u60A8\u9700\u8981\u624B\u52A8\u5BFC\u5165\u6837\u5F0F\u3002</p><p>\u793A\u4F8B\uFE30</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;element-plus/es/components/message/style/css&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
</code></pre></div></div><h2 id="\u5FEB\u6377\u642D\u5EFA\u9879\u76EE\u6A21\u677F" tabindex="-1">\u5FEB\u6377\u642D\u5EFA\u9879\u76EE\u6A21\u677F <a class="header-anchor" href="#\u5FEB\u6377\u642D\u5EFA\u9879\u76EE\u6A21\u677F" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u63D0\u4F9B\u4E86 <a href="https://github.com/element-plus/element-plus-vite-starter" target="_blank" rel="noopener noreferrer">Vite \u6A21\u677F</a>\u3002 \u5BF9\u4E8E Laravel \u7528\u6237\uFF0C\u6211\u4EEC\u4E5F\u51C6\u5907\u4E86\u76F8\u5E94\u7684<a href="https://github.com/element-plus/element-plus-in-laravel-starter" target="_blank" rel="noopener noreferrer">\u6A21\u677F</a>\uFF0C\u540C\u6837\u53EF\u4EE5\u76F4\u63A5\u4E0B\u8F7D\u4F7F\u7528\u3002</p><h2 id="\u5168\u5C40\u914D\u7F6E" tabindex="-1">\u5168\u5C40\u914D\u7F6E <a class="header-anchor" href="#\u5168\u5C40\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u5728\u5F15\u5165 Element Plus \u65F6\uFF0C\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u5305\u542B <code>size</code> \u548C <code>zIndex</code> \u5C5E\u6027\u7684\u5168\u5C40\u914D\u7F6E\u5BF9\u8C61\u3002 <code>size</code> \u7528\u4E8E\u8BBE\u7F6E\u8868\u5355\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u5C3A\u5BF8\uFF0C<code>zIndex</code> \u7528\u4E8E\u8BBE\u7F6E\u5F39\u51FA\u7EC4\u4EF6\u7684\u5C42\u7EA7\uFF0C<code>zIndex</code> \u7684\u9ED8\u8BA4\u503C\u4E3A 2000\u3002</p><p>\u5B8C\u6574\u5F15\u5165\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">,</span> <span class="token punctuation">{</span> size<span class="token operator">:</span> <span class="token string">&#39;small&#39;</span><span class="token punctuation">,</span> zIndex<span class="token operator">:</span> <span class="token number">3000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6309\u9700\u5F15\u5165\uFF1A</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-config-provider</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>size<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:z-index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zIndex<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-config-provider</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ElConfigProvider<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
      <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token string">&#39;small&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u4F7F\u7528-nuxt-js" tabindex="-1">\u4F7F\u7528 Nuxt.js <a class="header-anchor" href="#\u4F7F\u7528-nuxt-js" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528 <a href="https://v3.nuxtjs.org/" target="_blank" rel="noopener noreferrer">Nuxt.js</a>\uFF1A</p><div class="glitch-embed-wrap" style="height:420px;width:100%;"><iframe src="https://glitch.com/edit/#!/nuxt-element-plus?path=components%2FExamples.vue%3A1%3A0" alt="nuxt-element-plus on glitch" style="height:100%;width:100%;border:0;"></iframe></div><h2 id="\u5F00\u59CB\u4F7F\u7528" tabindex="-1">\u5F00\u59CB\u4F7F\u7528 <a class="header-anchor" href="#\u5F00\u59CB\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u60A8\u53EF\u4EE5\u4ECE\u73B0\u5728\u8D77\u542F\u52A8\u60A8\u7684\u9879\u76EE\u3002 \u5BF9\u4E8E\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u7528\u6CD5\uFF0C\u8BF7\u53C2\u8003\u5355\u4E2A\u7EC4\u4EF6\u5BF9\u5E94\u7684\u6587\u6863\u3002</p>`,28),w='{"title":"\u5FEB\u901F\u5F00\u59CB","description":"","frontmatter":{"title":"\u5FEB\u901F\u5F00\u59CB","lang":"zh-CN"},"headers":[{"level":2,"title":"\u7528\u6CD5","slug":"\u7528\u6CD5"},{"level":3,"title":"\u5B8C\u6574\u5F15\u5165","slug":"\u5B8C\u6574\u5F15\u5165"},{"level":3,"title":"\u6309\u9700\u5BFC\u5165","slug":"\u6309\u9700\u5BFC\u5165"},{"level":3,"title":"\u624B\u52A8\u5BFC\u5165","slug":"\u624B\u52A8\u5BFC\u5165"},{"level":2,"title":"\u5FEB\u6377\u642D\u5EFA\u9879\u76EE\u6A21\u677F","slug":"\u5FEB\u6377\u642D\u5EFA\u9879\u76EE\u6A21\u677F"},{"level":2,"title":"\u5168\u5C40\u914D\u7F6E","slug":"\u5168\u5C40\u914D\u7F6E"},{"level":2,"title":"\u4F7F\u7528 Nuxt.js","slug":"\u4F7F\u7528-nuxt-js"},{"level":2,"title":"\u5F00\u59CB\u4F7F\u7528","slug":"\u5F00\u59CB\u4F7F\u7528"}],"relativePath":"zh-CN/guide/quickstart.md","lastUpdated":null}',h={},b=Object.assign(h,{__name:"quickstart",setup(f){return(v,y)=>{const t=p("el-tag");return e(),o("div",null,[u,s("h4",r,[i,c(t,{type:"primary",style:{"vertical-align":"middle"},effect:"dark",size:"small"},{default:l(()=>[k]),_:1}),d,g]),m])}}});export{w as __pageData,b as default};
