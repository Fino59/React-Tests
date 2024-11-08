import { useState } from "react";

function App() {
  const [message, setMessage] = useState('Lets learn more about testing in React');

  return (
    <div>
      <h1>Hello world!</h1>
      <p>{message}</p>
      <button onClick={() => setMessage('New Message')} style={{ backgroundColor: 'black', color: 'white', padding: '12px', borderRadius: '8px' }}>Change message</button>
    </div>
  );
}

export default App;
