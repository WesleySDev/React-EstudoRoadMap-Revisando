import { useState } from "react";

// Tipos baseados no retorno da API
type Foto = {
  src: string;
  titulo: string;
};

type Produto = {
  id: string;
  nome: string;
  preco: string;
  descricao: string;
  fotos: Foto[];
};

function Exercio() {
  // Produto selecionado (ou null quando não tem nenhum)
  const [produto, setProduto] = useState<Produto | null>(null);

  // Controla o estado de carregamento
  const [loading, setLoading] = useState(false);

  // Produtos disponíveis (usados na URL da API)
  const produtos = ["notebook", "smartphone", "tablet"];

  // Busca os dados do produto clicado
  function buscarDados(nome: string) {
    setLoading(true);

    fetch(`https://ranekapi.origamid.dev/json/api/produto/${nome}`)
      .then((res) => res.json())
      .then((data: Produto) => {
        setProduto(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }

  return (
    <div>
      <h1>Produtos</h1>

      {/* Botão para cada produto */}
      {produtos.map((nome) => (
        <button key={nome} onClick={() => buscarDados(nome)}>
          {nome}
        </button>
      ))}

      {/* Mensagem de carregamento */}
      {loading && <p>Carregando...</p>}

      {/* Exibe apenas o produto selecionado */}
      {produto && (
        <div>
          <h2>{produto.nome}</h2>
          <p>Preço: R$ {produto.preco}</p>
          <p>{produto.descricao}</p>
          <img
            src={produto.fotos[0].src}
            alt={produto.fotos[0].titulo}
            width="200"
          />
        </div>
      )}
    </div>
  );
}

export default Exercio;
