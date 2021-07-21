import React, {useEffect, useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import Electionabi from './contracts/Election.json'
import Web3 from "web3";
import { render } from 'react-dom';
import Navbar from './Navbar';

const Election = require("./contracts/Election.json");

function App() {

  useEffect(() => {
    loadWeb3();
    LoadBlockchainData();
  }, [])

  const[Currentaccount, setCurrentaccount] = useState("");


  const loadWeb3 = async () => {
    if(window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    }
    else if (window.web3){
      window.web3 = new Web3(window.web3.currentProvider);
    }
    else{
      window.alert(
        "Non-Ethereum browser detected. You should consider trying Metamask"
      );
    }
  };

  const LoadBlockchainData = async() => {
    // setLoading(true);
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    setCurrentaccount(account);

    const networkId = await web3.eth.net.getId();

    const networkData = Electionabi.networks[networkId];

    if(networkData){
      const election = new web3.eth.Contract(Election.abi, networkData.address);
      console.log(election);
    }
    else{
      window.alert("The smart contract is not deployed to current network");
    }
  };

  return (
    <div>
      <Navbar account={Currentaccount}/>
    </div>
  );

}

export default App;

