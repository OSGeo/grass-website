---
title: "GRASS theme elements"
date: 2023-08-27T18:10:27+02:00
layout: theme
---

## GRASS GIS web theme


<div class="row mb-5">
<div class="col-lg-4">
<div class="">
<div class="grassthm-sq text-center overlay">
<img class="alt="GRASS GIS" src="../../images/logos/grasslogo.svg" width="33%">
</div>
</div>
</div>
<div class="col-lg-8">
<p>This is the <a class="bigr" href="#"><i class="ms ms-grass-gis ms-1-5x"></i>&#160;<span class=" black-color grass">GRASS <span class="  black-color gis">GIS</span></span></a> web theme for Hugo. </p>
<p>Please use assets and markup described in this section for extending the GRASS GIS website consistently.</p>
<p>Get and contribute to the website source code on <a href="https://github.com/OSGeo/grass-website"><i class="fab fa-github"></i> Github</a>. 

</div>
</div>


<ul id="tabt" class="nav nav-tabs nm" role="tablist">
	<li class="nav-item">
		<a class="nav-link active" data-toggle="tab" href="#assets" role="tab">Assets</a>
		</li>
		<li class="nav-item">
		<a class="nav-link" data-toggle="tab" href="#tabs-1" role="tab">Logo</a>
		</li>
		<li class="nav-item">
		<a class="nav-link" data-toggle="tab" href="#text" role="tab">Text</a>
	</li>
	<li class="nav-item">
		<a class="nav-link" data-toggle="tab" href="#links" role="tab">Links</a>
		</li>
		<li class="nav-item">
		<a class="nav-link" data-toggle="tab" href="#icons" role="tab">Icons</a>
	</li>
	<li class="nav-item">
	<a class="nav-link" data-toggle="tab" href="#images" role="tab">Images</a>
	</li>
</ul>

<div class="tab-content">

<div class="tab-pane active" id="assets" role="tabpanel">

<h3>Fonts</h3>

<div class="row">
<div class="col-lg-4 panel">
<p style="line-height:1em;font-size:1.6em;font-family: fira_sansmedium;color:#A0A0A0">Fira Sans Medium</p>
</div>
<div class="col-lg-8">
<pre class="nm"><code class="hljs css">font-family: fira_sansmedium</code></pre>
</div>
<div class="col-lg-4 panel">
<p style="line-height:1em;font-size:1.6em;font-family: fira_sansthin;color:#A0A0A0">Fira Sans Thin </p>
</div>
<div class="col-lg-8">
<pre class="nm"><code class="hljs css">font-family: fira_sansthin</code></pre>
</div>
</div>
<hr>
<div class="row">
<div class="col-lg-4 panel">
<p style="line-height:1em;font-size:1.6em;font-family: open_sanslight;color:#A0A0A0">Open Sans Light </p>
</div>
<div class="col-lg-8">
<pre class="nm"><code class="hljs css">font-family: open_sanslight</code></pre>
</div>
<div class="col-lg-4 panel">
<p style="line-height:1em;font-size:1.6em;font-family: open_sanslight_italic;color:#A0A0A0">Open Sans Light Italic </p>
</div>
<div class="col-lg-8">
<pre class="nm"><code class="hljs css">font-family: open_sanslight_italic</code></pre>
</div>
<div class="col-lg-4 panel">
<p style="line-height:1em;font-size:1.6em;font-family: open_sansregular;color:#A0A0A0">Open Sans Regular </p>
</div>
<div class="col-lg-8">
<pre class="nm"><code class="hljs css">font-family: open_sansregular</code></pre>
</div>
<div class="col-lg-4 panel">
<p style="line-height:1em;font-size:1.6em;font-family: open_sansitalic;color:#A0A0A0">Open Sans Italic </p>
</div>
<div class="col-lg-8">
<pre class="nm"><code class="hljs css">font-family: open_sansitalic</code></pre>
</div>
<div class="col-lg-4 panel">
<p style="line-height:1em;font-size:1.6em;font-family: open_sanssemibold;color:#A0A0A0">Open Sans Semi Bold </p>
</div>
<div class="col-lg-8">
<pre class="nm"><code class="hljs css">font-family: open_sanssemibold</code></pre>
</div>
<div class="col-lg-4 panel">
<p style="line-height:1em;font-size:1.6em;font-family: open_sanssemibold_italic;color:#A0A0A0">Open Sans Semi Bold Italic</p>
</div>
<div class="col-lg-8">
<pre class="nm"><code class="hljs css">font-family: open_sanssemibold_italic</code></pre>
</div>
<div class="col-lg-4 panel">
<p style="line-height:1em;font-size:1.6em;font-family: open_sansbold;color:#A0A0A0">Open Sans Bold </p>
</div>
<div class="col-lg-8">
<pre class="nm"><code class="hljs css">font-family: open_sansbold</code></pre>
</div>
<div class="col-lg-4 panel">
<p style="line-height:1em;font-size:1.6em;font-family: open_sansbold_italic;color:#A0A0A0">Open Sans Bold Italic</p>
</div>
<div class="col-lg-8">
<pre class="nm"><code class="hljs css">font-family: open_sansbold_italic</code></pre>
</div>
<div class="col-lg-4 panel">
<p style="line-height:1em;font-size:1.6em;font-family: open_sansextrabold;color:#A0A0A0">Open Sans Extra Bold</p>
</div>
<div class="col-lg-8">
<pre class="nm"><code class="hljs css">font-family: open_sansextrabold</code></pre>
</div>
<div class="col-lg-4 panel">
<p style="line-height:1em;font-size:1.5em;font-family: open_sansextrabold_italic;color:#A0A0A0">Open Sans Extra Bold Italic</p>
</div>
<div class="col-lg-8">
<pre class="nm"><code class="hljs css">font-family: open_sansextrabold_italic</code></pre>
</div>
</div>


<h3>Colors</h3>

<div class="row">
  <div class="col-lg-3 col-sm-6">
    <h4 class="grey-color-dark">GRASS green</h4><hr>
    <div class="card grass-green-bg mb-4"></div>
    <p class="command d-none d-lg-block">var(--grass-color)</p>
	<small>
		<ul class="list-unstyled">
			<li><b>HEX</b>  &#160; #088B36</li>
			<li><b>RGB</b>  &#160; 8,139,54</li>
			<li><b>HSL</b> &#160; 120,100%,28%</li>
		</ul>
		</small>
			<pre class="nm"><code class="hljs css">.grass-color</code></pre>
	<hr class="mb-4">
   </div>

<div class="col-lg-3 col-sm-6">
<h4 class="grey-color-dark">Soft green</h4><hr><div class="card
grass-green-alt-bg mb-4"></div>
    <p class="command d-none d-lg-block">var(--grass-color-alt)</p>
<small>
<ul class="list-unstyled">
<li><b>HEX</b>  &#160; #9ED29C</li>
<li><b>RGB</b>  &#160; 158,210,156</li>
<li><b>HSL</b> &#160; 188,38%,72%</li>
</ul>
</small>
	<pre class="nm"><code class="hljs css">.grass-color-alt</code></pre>
<hr></div>

<div class="col-lg-3"><h4 class="grey-color-dark">Light green</h4><hr><div class="card
grass-green-light-bg mb-4"></div>
    <p class="command d-none d-lg-block">var(--grass-color-light)</p>
<small>
<ul class="list-unstyled">
<li><b>HEX</b>   &#160; #EFF4E8</li>
<li><b>RGB</b>  &#160; 239,244,232</li>
<li><b>HSL</b>  &#160;  85,35%,93%</li>
</ul>
</small>
			<pre class="nm"><code class="hljs css">.grass-color-light</code></pre>
<hr></div>

<div class="col-lg-3"><h4 class="grey-color-dark">Dark green</h4><hr><div class="card grass-green-dark-bg mb-4"></div>
    <p class="command d-none d-lg-block">var(--grass-color-dark)</p>
<small>
<ul class="list-unstyled clr">
<li><b>HEX</b>   &#160; #B8C6A5</li>
<li><b>RGB</b>   &#160; 184,198,165</li>
<li><b>HSL</b>  &#160; 85,22%,71%</li>
</ul>
</small>
<pre class="nm"><code class="hljs css">.grass-color-dark</code></pre>
<hr></div>

<div class="col-lg-3"><h4 class="grey-color-dark">White</h4><hr><div class="card white-color-bg mb-2"></div>
    <p class="command d-none d-lg-block">var(--white-color)</p> 
<small>
<ul class="list-unstyled clr">
<li><b>HEX</b>   &#160; #FFFFFF</li>
<li><b>RGB</b>   &#160; 255,255,255</li>
<li><b>HSL</b>  &#160; 0,0%,100%</li>
</ul>
</small>
<pre class="nm"><code class="hljs css">.white-color</code></pre>
<hr></div>

<div class="col-lg-3"><h4 class="grey-color-dark">Light grey</h4><hr><div class="card grey-color-light-bg mb-2"></div>
<p class="command d-none d-lg-block">var(--grey-color-light)</p>
<small>
<ul class="list-unstyled clr">
<li><b>HEX</b>   &#160; #CCCCCC</li>
<li><b>RGB</b>   &#160; 204,204,204</li>
<li><b>HSL</b>  &#160; 0,0%,80%</li>
</ul>
</small>
<pre class="nm"><code class="hljs css">.grey-color-light</code></pre>
<hr></div>

<div class="col-lg-3"><h4 class="grey-color-dark">Dark grey</h4><hr><div class="card grey-color-dark-bg mb-2"></div>
<p class="command d-none d-lg-block">var(--grey-color-dark)</p>
<small>
<ul class="list-unstyled clr">
<li><b>HEX</b>   &#160; #A0A0A0</li>
<li><b>RGB</b>   &#160; 160,160,160</li>
<li><b>HSL</b>  &#160; 0,0%,63%</li>
</ul>
</small>
<pre class="nm"><code class="hljs css">.grey-color-dark</code></pre>
<hr></div>

<div class="col-lg-3"><h4 class="grey-color-dark">Black</h4><hr><div class="card black-color-bg mb-2"></div>
    <p class="command d-none d-lg-block">var(--black-color)</p> 
<small>
<ul class="list-unstyled clr">
<li><b>HEX</b>   &#160; #000000</li>
<li><b>RGB</b>   &#160; 0,0,0</li>
<li><b>HSL</b>  &#160; 0,0%,0%</li>
</ul>
</small>
<pre class="nm"><code class="hljs css">.black-color</code></pre>
<hr></div>
</div>

</div>

<div class="tab-pane" id="tabs-1" role="tabpanel">
<h3>Official logo</h3>
<p class="mb-4">The GRASS GIS <a href="../brand/#logotype">logo</a> is used as scalable vector graphics (SVG).</p>

<div class="row mt-30">
<div class="col-lg-4 text-center panel">
<img src="../../images/logos/grasslogo.svg" width="33%" alt="GRASS GIS">
</div>

<div class="col-lg-8">
<small>HTML</small>
<pre class="nm"><code class="hljs xml">&lt;img src="../../images/logos/grasslogo.svg" width="33%" alt="GRASS GIS" /&gt;</code></pre>

</div>
</div>

<h3>Simplified logo</h3>
<p class="mb-4">The GRASS GIS logo is also used as a simplified vector shape able to scale across media.</p>

<div class="row mt-30">
<div class="col-lg-4 text-center panel">
<i class="ms ms-grass-gis ms-7x"></i>
</div>

<div class="col-lg-8">
<small>HTML</small>
<pre class="nm"><code class="hljs xml">&lt;i class="ms ms-grass-gis ms-7x">&lt;/i&gt;</code></pre>
<br><br><br></div>

<div class="col-lg-4 text-center panel">
<i class="ms ms-grass-gis ms-5x grass-green-alt"></i>
</div>

<div class="col-lg-8">
<small>HTML</small>
<pre class="nm"><code class="hljs xml">&lt;i class="ms ms-grass-gis ms-5x grass-green-alt">&lt;/i&gt;</code></pre><br><br>
</div>

<div class="col-lg-4 text-center panel">
<br>
<i class="ms ms-grass-gis ms-2x grass-green"></i>
</div>

<div class="col-lg-8">
<small>HTML</small>
<pre class="nm"><code class="hljs xml">&lt;i class="ms ms-grass-gis ms-2x grass-green">&lt;/i&gt;</code></pre>
</div>

</div>

</div>


<div class="tab-pane" id="text" role="tabpanel">
<h3 class="mb-5">Text</h3>

<div class="row mb-4">
<div class="col-lg-4">
<h1 class="nm np section-title">Section title</h1>
</div>
<div class="col-lg-8">
<code class="hljs md">
# Section title
</code>
</div>
</div>

<div class="row mb-4">
<div class="col-lg-4">
<h2 class="nm np">Page title</h2>
</div>
<div class="col-lg-8">
<code class="hljs md">
## Page title
</code>
</div>
</div>

<div class="row">
<div class="col-lg-4">
<h3 class="nm np">Section subtitle</h3>
</div>
<div class="col-lg-8">
<code class="hljs md">
### Section subtitle
</code>
</div>
</div>
<hr class="mt-30 mb-4">
<div class="row mb-4">
<div class="col-lg-4">
<p class="nm np">Default</p>
</div>
<div class="col-lg-8">
<code class="hljs md">
Default
</code>
</div>
</div>

<div class="row mb-4">
<div class="col-lg-4">
<p class="nm np"><i>Italic</i></p>
</div>
<div class="col-lg-8">
<code class="hljs md">
*Italic*
</code>
</div>
</div>

<div class="row mb-4">
<div class="col-lg-4">
<p class="nm np"><b>Bold</b></p>
</div>
<div class="col-lg-8">
<code class="hljs md">
**Bold**
</code>
</div>
</div>

<div class="row mb-4">
<div class="col-lg-4">
<blockquote class="nm np">
<p>&#160; &#160; &#160; Blockquote</p>
</blockquote>
</div>
<div class="col-lg-8">
<code class="hljs md">
>  Blockquote
</code>
</div>
</div>

<hr>

<div class="row mb-4">
<div class="col-lg-4">
<p class="command nm np">code</p>
</div>
<div class="col-lg-8">
<pre class="nm"><code class="hljs xml">&lt;p class="command"&gtcode&lt;/p&gt;</code></pre>
</div>
</div>

<hr>

<div class="row mb-4">
<div class="col-lg-4">
<span class="grey-color-dark"><i class="fa fa-calendar"></i> date</span>
</div>
<div class="col-lg-8">
<pre class="nm"><code class="hljs xml">&lt;span class="grey-color-dark"&gt;&lt;i class="fa fa-calendar"&gt;&lt;/i&gt; date&lt;/span&gt;</code></pre>
</div>
</div>
<div class="row mb-4">
<div class="col-lg-4">
<span class="badge badge-pill bg-lgr grass-green" style="display:inline-block;padding:12px"><i class="fa fa-calendar"></i> date badge</span>
</div>
<div class="col-lg-8">
<pre class="nm"><code class="hljs xml">&lt;span class="badge badge-pill bg-lgr grass-green"&gt;&lt;i class="fa fa-calendar"&gt;&lt;/i&gt; 11 Dec 2019 &gt;/span&gt;</code></pre>
</div>
</div>

<hr>

<div class="row mb-4">
<div class="col-lg-4">
<div class="alert rounded-0 alert-default nm">
  Default alert
  </div>
  </div>
  <div class="col-lg-8"><pre class="nm"><code class="hljs xml"> &lt;div class="alert rounded-0 alert-default"&gt;Default alert &lt/div&gt;</code></pre>
</div>
</div>

<div class="row mb-4">
<div class="col-lg-4">
<div class="alert rounded-0 alert-info nm">
  Info alert
  </div>
  </div>
  <div class="col-lg-8"><pre class="nm"><code class="hljs xml"> &lt;div class="alert rounded-0 alert-info"&gt;Info alert &lt/div&gt;</code></pre>
</div>
</div>


<div class="row mb-4">
<div class="col-lg-4">
<div class="alert rounded-0 alert-success nm">
  Success alert
  </div>
  </div>
  <div class="col-lg-8"><pre class="nm"><code class="hljs xml"> &lt;div class="alert rounded-0 alert-success"&gt;Success alert &lt/div&gt;</code></pre>
</div>
</div>


<div class="row mb-4">
<div class="col-lg-4">
<div class="alert rounded-0 alert-warning nm">
  Warning alert
  </div>
  </div>
  <div class="col-lg-8"><pre class="nm"><code class="hljs xml"> &lt;div class="alert rounded-0 alert-success"&gt;Warning alert &lt/div&gt;</code></pre>
</div>
</div>

<div class="row mb-4">
<div class="col-lg-4">
<div class="alert rounded-0 alert-danger nm">
  Danger alert
  </div>
  </div>
  <div class="col-lg-8"><pre class="nm"><code class="hljs xml"> &lt;div class="alert rounded-0 alert-success"&gt;Danger alert &lt/div&gt;</code></pre>
</div>
</div>



<div class="row mb-4">
<div class="col-lg-4">
<div class="card mb-1-5">
<h4 class="mt-20 tind"><i class="fa fa-info-circle"></i> Card</h4>
</div>
</div>
<div class="col-lg-8"><pre class="nm"><code class="hljs xml nm">&lt;div class="card"&gt;
&lt;h4&gt;&lt;i class="fa fa-info-circle"&gt;&lt;/i&gt; Card&lt;/h4&gt;
&lt;/div&gt;</code></pre></div>
</div>
<hr class="mt-30">
</div>



<div class="tab-pane" id="links" role="tabpanel">
<h3 class="mb-5">Links</h3>

<div class="row mb-4">
<div class="col-lg-4"><a href="#">Default md link</a></div>
<div class="col-lg-8"><pre class="nm"><code class="hljs md nm">[Default md link](http://domain.org)</code></pre></div>
</div>

<div class="row mb-4">
<div class="col-lg-4"><a href="#">Default html link</a></div>
<div class="col-lg-8"><pre class="nm"><code class="hljs xml nm">&lt;a href="http://domain.org"&gt;Default html link&lt;/a&gt;</code></pre></div>
</div>


<hr>


<div class="row mb-4">
<div class="col-lg-4"><a href="#"><i class="fa fa-thumbs-o-up"></i> Link with icon</a></div>
<div class="col-lg-8"><pre class="nm"><code class="hljs xml nm">&lt;a href="http://domain.org"&gt;Default html link&lt;/a&gt;</code></pre></div>
</div>

<hr>




<div class="row mb-4">
<div class="col-lg-4"><button class="btn btn-primary nm">Primary Button</button></div>
<div class="col-lg-8"><pre class="nm"><code class="hljs xml nm">&lt;a href="http://domain.org" class="btn btn-primary"&gt;Primary Button&lt;/a&gt;</code></pre></div>
</div>

<div class="row mb-4">
<div class="col-lg-4"><button class="btn btn-secondary nm">Secondary Button</button></div>
<div class="col-lg-8"><pre class="nm"><code class="hljs xml">&lt;a href="http://domain.org" class="btn btn-secondary"&gt;Secondary Button&lt;/a&gt;</code></pre>
</div>
</div>

<div class="row mb-4">
<div class="col-lg-4"><button class="btn btn-info nm">Info Button</button></div>
<div class="col-lg-8"><pre class="nm"><code class="hljs xml">&lt;a href="http://domain.org" class="btn btn-info"&gt;Info Button&lt;/a&gt;</code></pre>
</div>
</div>

<div class="row mb-4">
<div class="col-lg-4"><button class="btn btn-warning nm">Warning Button</button></div>
<div class="col-lg-8"><pre class="nm"><code class="hljs xml">&lt;a href="http://domain.org" class="btn btn-warning"&gt;Warning Button&lt;/a&gt;</code></pre>
</div>
</div>

<div class="row mb-4">
<div class="col-lg-4"><button class="btn btn-danger nm">Danger Button</button></div>
<div class="col-lg-8"><pre class="nm"><code class="hljs xml">&lt;a href="http://domain.org" class="btn btn-danger"&gt;Danger Button&lt;/a&gt;</code></pre>
</div>
</div>

<hr class="mt-30">
</div>

<div class="tab-pane" id="icons" role="tabpanel">
<h3 class="mb-5">fontawesome (6.4.2)</h3>
<div class="row mb-4">
<div class="col-lg-4"><i class="fa fa-download fa-2x grey-color-dark"></i> &#160; &#160; <i class="fa fa-book fa-2x grey-color-dark"></i> &#160; &#160; <i class="fa fa-user fa-2x grey-color-dark"></i> &#160; &#160; <i class="fab fa-github fa-2x grey-color-dark"></i> &#160; &#160; <i class="fab fa-x-twitter fa-2x grey-color-dark"></i>&#160; &#160; <i class="fab fa-facebook fa-2x grey-color-dark"></i>&#160; &#160; <i class="fab fa-youtube fa-2x grey-color-dark"></i>
<p class="mt-2"><a href="https://fontawesome.com/v4.7.0/"><i class="fa fa-font-awesome"></i> See the full icon list</a></p>
</div>
<div class="col-lg-8"><pre class="nm"><code class="hljs xml">&lt;i class="fa fa-download"&gt;&lt;/i&gt;</code></pre>
</div>
</div>
<h3 class="mb-5">mapskin (2.0)</h3>
<div class="row mb-4">
<div class="col-lg-4"><i class="ms ms-grass-gis ms-2x grey-color-dark"></i>&#160; &#160;<i class="ms ms-vector ms-2x grey-color-dark"></i>&#160; &#160;<i class="ms ms-raster ms-2x grey-color-dark"></i>&#160; &#160;<i class="ms ms-database ms-2x grey-color-dark"></i>&#160; &#160;<i class="ms ms-img-o ms-2x grey-color-dark"></i>&#160; &#160;<i class="ms ms-osgeo ms-2x grey-color-dark"></i>&#160; &#160;<i class="ms ms-map-rolled-o ms-2x grey-color-dark"></i>
<p class="mt-2"><a href="https://web.archive.org/web/20210613053834/https://mapsk.in/#software"><i class="ms ms-mapskin"></i> See the full software icon list</a></p>
</div>
<div class="col-lg-8"><pre class="nm"><code class="hljs xml">&lt;i class="ms ms-grass-gis"&gt;&lt;/i&gt;</code></pre>
</div>
</div>

<h3 class="mb-4">flag-icons</h3>
<div class="row mb-4">
<div class="col-lg-4">
<i class="flag-icon flag-icon-de"></i>&#160; &#160;<i class="flag-icon flag-icon-us"></i>&#160; &#160; <i class="flag-icon flag-icon-it"></i&#160; &#160; <i class="flag-icon flag-icon-fr"></i>&#160; &#160; <i class="flag-icon flag-icon-ar"></i>&#160; &#160; <i class="flag-icon flag-icon-be"></i&#160; &#160; <i class="flag-icon flag-icon-fr"></i>
<p class="mt-2"><a href="https://flagicons.lipis.dev/"><i class="ms ms-information"></i> See the full icon list</a></p>
</div>
<div class="col-lg-8"><pre class="nm"><code class="hljs xml">&lt;i class="flag-icon flag-icon-de"&gt;&lt;/i&gt;</code></pre>
</div>
</div>

</div>


<div class="tab-pane" id="images" role="tabpanel">
<h3>Images</h3>
<div class="row mb-4">
<div class="col-lg-4">
<img src="../../../images/logos/banner.jpg">
</div>
<div class="col-lg-8">
<small>Markdown</small>
<code class="hljs md">
![GRASS GIS banner](/images/logos/banner.jpg "GRASS GIS banner")
</code>
<small>HTML</small>
<code class="hljs xml">
&lt;img href="/images/logos/banner.jpg" alt="GRASS GIS banner" /&gt;
</code>
</div>
<div class="col-lg-4">
<img src="../../../images/other/Black_canyon_map.jpg">
</div>
<div class="col-lg-8">
<small>Markdown</small>
<code class="hljs md">
![Black Canyon](/images/other/Black_canyon_map.jpg "Black Canyon Map")
</code>
<small>HTML</small>
<code class="hljs xml">
&lt;img href="/images/other/Black_canyon_map.jpg" alt="Black Canyon Map" /&gt;
</code>
</div>
</div>
<hr>
<div class="row mb-4">
<div class="col-lg-4">
<img src="../../../images/other/GRASS_analysis.jpg" width="200px" >
</div>
<div class="col-lg-8">
<small>HTML</small>
<code class="hljs xml">
&lt;img href="/images/other/GRASS_analysis.jpg" alt="Analysis" width="200" /&gt;
</code>
</div>
</div>
<hr>
<div class="row mb-4">
<div class="col-lg-4">
<img src="../../../images/gallery/raster/d_rast_arrow_magnitude.png" width="100px"  height="100px" />
</div>
<div class="col-lg-8">
<small>HTML</small>
<code class="hljs xml">
&lt;img href="/images/gallery/raster/d_rast_arrow_magnitude.png" alt="flow" width="100" /&gt;
</code>
</div>
</div>


</div>






</div>
