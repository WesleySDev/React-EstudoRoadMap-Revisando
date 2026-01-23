// Importa o hook useState do React
// Ele serve para criar estados (variáveis que mudam e atualizam a tela)
import { useState } from "react";


// Tipo para as fotos do produto
// Cada foto tem uma URL (src) e um título
type Foto = {
  src: string;
  titulo: string;
};

// Tipo do produto retornado pela API
// Esse tipo reflete exatamente o JSON da Ranek API
type Produto = {
  id: string;
  nome: string;
  preco: string;
  descricao: string;
  fotos: Foto[];
};

// Componente principal
function Exercio() {

  // Estado que guarda o produto buscado na API
  // Pode ser um Produto ou null (quando ainda não foi carregado)
  const [produto, setProduto] = useState<Produto | null>(null);

  // Estado para controlar se a API está carregando
  const [loading, setLoading] = useState(false);

  // Lista de produtos disponíveis
  // Esses nomes são usados na URL da API
  const produtos = ["notebook", "smartphone", "tablet"];

  // Função chamada quando o usuário clica em um botão
  // Recebe o nome do produto
  function buscarDados(nome: string) {

    // Ativa o estado de carregamento
    setLoading(true);

    // Faz a requisição para a API usando o nome do produto
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${nome}`)

      // Converte a resposta da API para JSON
      .then((res) => res.json())

      // Quando os dados chegam, salva no estado produto
      .then((data: Produto) => {
        setProduto(data);      // guarda o produto
        setLoading(false);     // desativa o loading
      })

      // Caso ocorra algum erro na requisição
      .catch((err) => {
        console.error(err);    // mostra o erro no console
        setLoading(false);     // desativa o loading
      });
  }

  // JSX (o que será exibido na tela)
  return (
    <div>

      {/* Título da página */}
      <h1>Produtos</h1>

      {/* Cria um botão para cada produto */}
      {produtos.map((nome) => (
        <button
          key={nome}                   // chave única para o React
          onClick={() => buscarDados(nome)} // chama a API ao clicar
        >
          {nome}
        </button>
      ))}

      {/* Mostra mensagem enquanto a API está carregando */}
      {loading && <p>Carregando...</p>}

      {/* Mostra os dados apenas se um produto existir */}
      {produto && (
        <div>
          <h2>{produto.nome}</h2>
          <p>Preço: R$ {produto.preco}</p>
          <p>Descrição: {produto.descricao}</p>

          {/* Mostra a primeira foto do produto */}
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

// Exporta o componente para ser usado em outros arquivos
export default Exercio;
