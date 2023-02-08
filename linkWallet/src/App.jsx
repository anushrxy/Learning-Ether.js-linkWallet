import { useEffect, useState } from "react";
import "./App.css";
import { ethers } from "ethers";
import { contractabi } from "./constans";

function App() {
  const contractAdd = "0xde2F83d99A94194B19FdFCECF0264A238a9e4685";

  // useEffect(()=>{
  //   const runContract = async()=>{
  //     const {ethereum} = window;
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     await provider.sendTransaction("eth_requestAccounts", []);
  //     const signer = provider.getSigner();
  //     const contract = ethers.Contract(contractAdd, contractabi, signer);
  //     console.log(await contract.showBal());
  //   };

  // })

  const [addresses, setaddresses] = useState("");
  if (window.ethereum) {
    console.log("Detected!");
    try {
      async function getaddresses() {
        setaddresses(
          await window.ethereum.request({
            method: "eth_requestAccounts",
          })

          )
      console.log(window.ethereum);
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const signer = provider.getSigner();
      const contract = ethers.Contract(contractAdd, contractabi, signer);
      contract.addName("PushMore");

        function addName() {}
      }
      useEffect(()=>{getaddresses();})

      
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("Not Found!");
  }

  return (
    <div className="App">
      <h2>{`Connected to Account: ${addresses[0]}`}</h2>
    </div>
  );
}

export default App;
