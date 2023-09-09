
// Pede permissão para acessara câmera, ele gera um erro caso a permisão seja negada
Instascan.Camera.getCameras().then(cameras => {
    if (cameras.length > 0) {
        alert(cameras)
        scanner.start(cameras[1]);
    }
});

// Liga a câmera com o front-end, para a visualização do usuário
let scanner = new Instascan.Scanner({
    video: document.getElementById('preview')
});



// Verifica quando um QR code for escaneado
scanner.addListener('scan', function (content) {
    
    // alert('Escaneou o conteudo: ' + content);
    
    retornaScan(content);
    content = ""
});


// Função para passar o valor do código QR como uma função (retorna o valor do QR)

function retornaScan(codigoQr) {
    alert(codigoQr);
}


function enviarCodigoQR(constent){
    fetch(`http://127.0.0.1:5000/api/${content}`)  // Altere a URL para a localização correta da sua API Flask
  .then(response => response.json())
  .then(data => {
    // Aqui, 'data' conterá o JSON retornado pela sua API Flask
    console.log(data);
    
    // Você pode agora manipular os dados como quiser, por exemplo, exibir na página HTML.
    const loja = data.loja;
    const preco = data.preco;
    document.getElementById('loja').innerText = `Loja: ${loja}`;
    document.getElementById('preco').innerText = `Preço: R$ ${preco}`;
  })
  .catch(error => {
    console.error('Erro ao buscar dados:', error);
  });
}