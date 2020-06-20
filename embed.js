document.head.insertAdjacentHTML('beforeend',`<link href="https://raw.githubusercontent.com/gkanishk/js-plugin/master/css/ext.css" rel=stylesheet  type="text/css" >`);
var script = document.getElementById('emb')
var data= script.getAttribute("data");
console.log(data+" hui");
document.write(`
<div class="card">
<div id="dimg"><img src="${data}/favicon.ico" id="uimg"/></div>
<div class="container">
<a href=${data} target="_blank" rel="noreferrer noopener" class=button1>Visit</a>
<h4>${data}</h4>
</div>
</div>`);
