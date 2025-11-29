/*2️⃣ Input que mostra o nome digitado

Crie um input onde:

a cada letra digitada, o estado atualiza

abaixo do input aparece:
"Você digitou: ___"

Use useState para armazenar o texto. */





import { useState } from "react"; 
// Importa o hook useState para criar estados dentro do componente

function CapituradoTexto() { 
// Declara o componente CapituradoTexto

const [name, setName] = useState("") 
// Cria o estado 'name' e a função 'setName' para atualizar o estado
// O valor inicial é uma string vazia ""

function handleChange(e) { 
    // Função executada toda vez que o usuário digita no input
    const value = e.target.value 
    // Pega o valor digitado dentro do input
    setName(value) 
    // Atualiza o estado 'name' com o valor digitado
}

return(   
    <> 
    <h1>Capiturador de Texto</h1>
    {/* Fragmento para evitar div desnecessária */}

    <p>Você Digitou: {name}</p> 
   { /* Exibe o valor atual do estado 'name' na tela */}

    <input 
        type="text" 
        value={name} 
        onChange={handleChange} 
        // Quando o usuário digita, chama handleChange
    />
    <br/>
________________________________________________________________
    </>
)
 
}

export default CapituradoTexto; 

