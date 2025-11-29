/*3️⃣ Alternador de tema (claro/escuro)

Faça um botão que:

ao clicar, troca o tema entre "Claro" e "Escuro"

exibe na tela qual tema está ativo

Use useState(true/false).*/





import { useState } from 'react'


function AlteradorDeTema() {
  const [tema, setTema ] = useState(true)


function alternaTema () {
if (tema === true) {
    setTema(false)
}else {
    setTema(true)
}
}



  return (
    <>
    <h1>Alterador de Tema</h1>
     <h4>Tema atual: 
        {tema && " Claro"}
        {!tema && " Escuro"}
     </h4>
      <button onClick={alternaTema}>CLick</button>
      <br/>
         __________________________________________________________
    </>
    
  )
}

export default AlteradorDeTema
