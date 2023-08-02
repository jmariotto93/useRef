import React from 'react';

function App() {
  const [carrinho, setCarinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeOutRef = React.useRef();
  
  function handleClick() {
    setCarinho(carrinho +1);
    setNotificacao('Item adicionado no carrinho');
    
    clearTimeout(timeOutRef.current);
    timeOutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
  };

  return (
    <div>
    <p>{notificacao}</p>
     <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </div>
  );
}

export default App;
