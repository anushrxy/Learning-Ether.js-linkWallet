import { useEffect, useState } from "react";
import "./App.css";
import { ethers } from "ethers";
import { contractabi } from "./constans";

function App() {
  const contractAdd = "0xde2F83d99A94194B19FdFCECF0264A238a9e4685";

  

  const [addresses, setaddresses] = useState("");
  async function getaddresses() {
    setaddresses(
      await window.ethereum.request({
        method: "eth_requestAccounts",
      })

      )
    }

  const mountWallet= ()=>{
    //console.log(window.ethereum);
    if(window.ethereum){
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();
    getaddresses()
    const contract = new ethers.Contract(contractAdd, contractabi, signer);
    contract.addName("AddName") 
    }
  }

  useEffect(()=>mountWallet(),[addresses]);
 

  return (
    <div className="App">
      <h2>{`Connected to Account: ${addresses[0]}`}</h2>
    </div>
  );
}

export default App;