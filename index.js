var calculadora = function () {
            let valor = text.valores.value;
            let porcentagem = text.porcentagems.value;
            let pessoa = text.pessoas.value;
            let gorjeta = ((porcentagem * valor) / 100) + valor;
            let dividida = gorjeta / pessoas;
            parent.document.getElementById("contaTotal").value = gorjeta;
            parent.document.getElementById("contaDividida").value = dividida;
            
    }
        
