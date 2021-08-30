import React, {useEffect, useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import Electionabi from './contracts/Election.json'
import Web3 from "web3";
import { render } from 'react-dom';
import Navbar from './Navbar';
import Body from './Body';

const Election = require("./contracts/Election.json");

function App() {

  useEffect(() => {
    loadWeb3();
    LoadBlockchainData();
  }, [])

  const[Currentaccount, setCurrentaccount] = useState("");
  const[loader, setloader] = useState(true);
  const[Electionsm, setElectionsm] = useState();
  const[Candidate1, setCandidate1] = useState();
  const[Candidate2, setCandidate2] = useState();


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
    setloader(true);
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    setCurrentaccount(account);

    const networkId = await web3.eth.net.getId();

    const networkData = Electionabi.networks[networkId];

    if(networkData){
      const election = new web3.eth.Contract(Election.abi, networkData.address);
      const candidate1 = await election.methods.candidates(1).call();
      const candidate1Id = candidate1.id;
      const candidate1name = candidate1.name;
      const candidate1votecount = candidate1.votecount;
      const candidate2 = await election.methods.candidates(2).call();
      const candidate2Id = candidate2.id;
      const candidate2name = candidate2.name;
      const candidate2votecount = candidate2.votecount;
      // console.log(candidate1);
      // console.log(candidate2);

      setCandidate1(candidate1);
      setCandidate2(candidate2);
      setElectionsm(election);
      setloader(false);
    }
    else{
      window.alert("The smart contract is not deployed to current network");
    }
  };

  const voteCandidate = async(candidateId) => {
    setloader(true);
    await Electionsm
    .methods
    .Vote(candidateId)
    .send({from: Currentaccount})
    .on("transactionhash", () => {
      console.log("Vote candidate function has run successfully")
    });
    setloader(false);
  }

  if(loader){
    return <div>loading...</div>
  }

  return (
    <div>
      <div>
        <Navbar account={Currentaccount}/>
      </div>
      <div>
        <Body 
          candidate1 = {Candidate1} 
          candidate2 = {Candidate2} 
          voteCandidate = {voteCandidate}
          account = {Currentaccount}
        />
      </div>
    </div>
  );

}

export default App;

