import { useEffect, useState } from "react";
import "./App.css";
import { ethers } from "ethers";
import { contractabi } from "./constans";

function App() {
  const contractAdd = "0xde2F83d99A94194B19FdFCECF0264A238a9e4685";
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAdd, contractabi, signer);

  

  const [addresses, setaddresses] = useState("");
  const [click, setClick]= useState(5);
  
  useEffect(() => {
    console.log(click);
  },[click]);
  
   function clicked(click) {
    
    setClick(click+1);
    
    contract.addName(`${click}`); 
    // mountWallet();
  }
  async function getaddresses() {
    setaddresses(
      await window.ethereum.request({
        method: "eth_requestAccounts",
      })

      )
    }
    getaddresses();  

  // const mountWallet= ()=>{
  //   console.log(window.ethereum);
  //   if(window.ethereum){
  //   const provider = new ethers.providers.Web3Provider(window.ethereum)
  //   const signer = provider.getSigner();
  //   const contract = new ethers.Contract(contractAdd, contractabi, signer);
  //   contract.addName(`${click.length}`) 
  //   }
  //   else {
  //     setaddresses("Error.")
  //   }
  // }

  

  return (
    <div className="App">
      <h2>{`Connected to Account: ${addresses[0]}`}</h2>
      <h3>{}</h3>
      <button onClick={()=>{clicked(click)}}>AddName</button>
    </div>
  );
}

export default App;