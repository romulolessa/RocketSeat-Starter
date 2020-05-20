var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
 };
 resposta = document.getElementById('resposta');
 resposta.innerHTML = `O usuário mora em `+ endereco.cidade + `/`+ endereco.uf +`, no bairro `+endereco.bairro+`, na rua `+endereco.rua+` com
 nº`+endereco.numero+`.`
 