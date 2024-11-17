import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  useEffect(() => {
    const template = async () => {
      const contractAddres = "";
      const contractABI = "";

      const { ethereum } = window;
      const account = await ethereum.request({
        method: "eth_requestAccounts",
      });
    };
    template();
  }, []);

  return <div className="App">Hello Web3</div>;
}

export default App;
