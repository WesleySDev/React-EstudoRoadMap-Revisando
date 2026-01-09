//Modal Pop-up: Crie um modal pop-up que aparece quando um botão é clicado. Use o useState para controlar se o modal está visível ou não.

import { useState } from 'react'


function Modal() {
  
 const [viewmodal, setViewmodal] = useState(false) // aplicação do useState

 
  return (
  
   <div className="container">
      <button
        onClick={() => setViewmodal(true)} // função que faz o modal aparecer 
      >
        Abrir Modal
      </button>

     {
  // Renderiza o modal apenas se viewmodal for true
  viewmodal && 
  <div className="modal"> 
    <div className="modal__card">
      {/* Botão que fecha o modal ao mudar viewmodal para false */}
      <button onClick={() => setViewmodal(false)}>
        Fechar modal
      </button>
      <h3>modal</h3>
      
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Suscipit doloribus incidunt ab facilis alias inventore 
        temporibus aliquam placeat eos beatae labore fugit, illum, 
        sunt tempore laudantium, in omnis asperiores ducimus.
      </p>
    </div>
  </div>
}


    </div>
    
    
  )
}

export default Modal
