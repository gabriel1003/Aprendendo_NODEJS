
var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer((request, response) => {
  var parsedUrl = url.parse(request.url, true);
  var pathname = parsedUrl.pathname;

  // Define o conteúdo HTML padrão como "artigos.html"
  let htmlFile = 'artigos.html';

  // Verifica se o pathname é "/contato"
  if (pathname === '/contatos') {
    htmlFile = 'contatos.html';
  } else if (pathname !== '/' && pathname !== '/artigos') {
    htmlFile = 'erro.html';
  }

  // Leitura assíncrona do arquivo HTML
  fs.readFile(htmlFile, 'utf8', (err, data) => {
    if (err) {
      // Se houver erro, renderiza o erro.html
      response.writeHead(404, { "Content-Type": "text/html" });
      response.end("<h1>Página não encontrada</h1>");
    } else {
      // Se o arquivo for encontrado, renderiza o HTML
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Servidor HTTP iniciado na porta 3000');
});