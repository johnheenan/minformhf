import fs from "fs";
let errors = false
const blades_dir = './_includes/blades';
const minform_blades_dir = './_includes_minform/blades';
const html_liquid_file = minform_blades_dir + '/html.liquid'
const html_njk_file = minform_blades_dir + '/html.njk'
const nav_liquid_file=minform_blades_dir + '/nav.liquid'
// const default_njk_file = './_includes_minform/default.njk'
console.log('STARTING: synchronising blades to minform');

try {
  if(fs.existsSync(minform_blades_dir))
    fs.rmSync(minform_blades_dir, {recursive:true})
  fs.cpSync(blades_dir, minform_blades_dir, {recursive:true, dereference:true})
  edit_html_liquid();
  edit_html_njk();
  generate_nav_liquid();
//replace_default_njk();
}catch (err) {
  errors=true
  console.error('syncblades error:', err.message);
}
if(!errors)
    console.log('SUCCESS: synchronising blades to minform');
else {
   console.error('FAILURE: synchronising blades to minform failed, see error messages above')
   process.exitCode = 1
}


function edit_html_liquid(){
   const content=fs.readFileSync(html_liquid_file, 'utf8')
   const newlines=[`{%- comment %}auto edited file that will be overwritten{% endcomment -%}`]
   const lines = content.split(/\r?\n/);
   for (const line of lines){
      if(/<meta name="viewport"/.test(line)) {
        newlines.push(line)
        newlines.push(`    {% if not site.prod %}<meta name="htmx-config" content='{"selfRequestsOnly": false}'>{% endif %}`)
      }
      else if(/<meta name="description"/.test(line))
        newlines.push(`    <meta name="description" content="{{ site.description | strip_html }}">`)
      else if(/<link rel="stylesheet"/.test(line))
        newlines.push(`      <link rel="stylesheet" href="{{ href | relative_url }}" blocking=render >`)
      else if(/{{ body }}/.test(line)) {
        newlines.push(`    {% assign nav_pages = collections.all | eleventyNavigation | dataNavigation %}`)
        newlines.push(`    {% renderFile 'blades/_nav' nav_pages %}`)
        newlines.push(line)
      }
      else
        newlines.push(line)
   }
   const newcontent=newlines.join("\n")
   fs.writeFileSync(html_liquid_file, newcontent, 'utf8')
}


function edit_html_njk(){
   const content=fs.readFileSync(html_njk_file, 'utf8')
   const newlines=[`{# auto edited file that will be overwritten #}`]
   const lines = content.split(/\r?\n/);
   for (const line of lines){
      if(/<meta name="viewport"/.test(line)) {
        newlines.push(line)
        newlines.push(`    {% if not site.prod %}<meta name="htmx-config" content='{"selfRequestsOnly": false}'>{% endif %}`)
      }
      else if(/<meta name="description"/.test(line))
        newlines.push(`    <meta name="description" content="{{ site.description | striptags }}">`)
      else if(/<link rel="stylesheet"/.test(line))
        newlines.push(`      <link rel="stylesheet" href="{{ href }}" blocking=render />`)
      else if(/{% set for_body/.test(line)) {
        newlines.push(line)
        newlines.push(`    {%- set nav_pages = collections.all | eleventyNavigation | dataNavigation %}`)
        newlines.push(`    {%- renderFile '_includes_minform/blades/nav.liquid', nav_pages  %}`)
      }
      else
        newlines.push(line)
   }
   const newcontent=newlines.join("\n")
   fs.writeFileSync(html_njk_file, newcontent, 'utf8')
}


function generate_nav_liquid(){
  const nav_liquid_content=
  `{%- comment %}auto generated file that will be overwritten{% endcomment -%}
<nav class="container">
<ul>
<li><a href="/" role="button" class="mw100px{% if current_url == "/" %} secondary" aria-current="page{% endif -%}">
  {{- title -}}
</a></li>
</ul>
<ul>
  {%- for entry in nav_pages -%}
    {% # prettier-ignore %}
<li><a href="{{ entry.url }}" role="button" class="mw100px
      {%- if entry.url == current_url %} secondary" aria-current="page{% endif %}">
      {{- entry.title -}}
</a></li>
  {%- endfor %}
</ul>
</nav>
`;
  fs.writeFileSync(nav_liquid_file, nav_liquid_content)
}


// function replace_default_njk(){
//   if(fs.existsSync(default_njk_file))
//     fs.rmSync(default_njk_file)
//   const default_njk_contents=
// `{%- comment %}auto generated file that will be overwritten{% endcomment -%}
// {% extends 'blades/html.njk' %}
// {% block body %}
//   <main class="container breakout-all">
//       {{ content | safe }}
//   </main>
//   <footer>
//     <hr />
//     {{ site.footer | renderContent('njk,md', site) | safe }}
//   </footer>
// {% endblock %}
// `
//   fs.writeFileSync(default_njk_file, default_njk_contents)
// }
