//// O link abaixo puxa dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/

// Crie uma interface com 3 botões, um para cada produto.

// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.

// Mostre apenas um produto por vez

// Mostre a mensagem carregando... enquanto o fetch é realizado

import { useState } from "react";


type Foto  = {
    src: string;
    titulo: string;

};
type Produto = {
    
    id: string;
    nome: string;
    preco: string;
    descricao: string;
    fotos: Foto[];
}
function Exercio() {
 const [produto, setProduto] = useState<Produto | null>(null);
 const [loading, setLoading] = useState(false)


 const produtos = ["notebook", "smartphone", "tablet"]



function buscarDados (nome: string) {
   setLoading(true)

    fetch(`https://ranekapi.origamid.dev/json/api/produto/${nome}`)
    .then((res) => res.json())
    .then((data: Produto) => {
        setProduto(data);
        setLoading(false);
    })
    .catch((err) => {
        console.error (err);
        setLoading(false);
    });
}

  return(


    
    <div>
        
    <h1>Pordutos</h1>

    {produtos.map((nome) =>(
    <button key={nome} onClick={() => buscarDados(nome)}>
      {nome}
    </button>
     ))}

     {loading && <p>carregando....</p>}

     {produto && (
        <div>
            <h2>{produto.nome}</h2>
            <p>Preço: R$ {produto.preco}</p>
            <p>Descrição: {produto.descricao}</p>
            <img src={produto.fotos[0].src}
             alt={produto.fotos[0].titulo}
             width="200"
             />

        </div>
     )}






    </div>
   
  
  
)
  
  
}

export default Exercio;
