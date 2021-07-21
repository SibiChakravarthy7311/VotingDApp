// import React, { Component } from "react";
// import SimpleStorageContract from "./contracts/SimpleStorage.json";
// import getWeb3 from "./getWeb3";

// import "./App.css";

// class App extends Component {
//   state = { storageValue: 0, web3: null, accounts: null, contract: null };

//   componentDidMount = async () => {
//     try {
//       // Get network provider and web3 instance.
//       const web3 = await getWeb3();

//       // Use web3 to get the user's accounts.
//       const accounts = await web3.eth.getAccounts();

//       // Get the contract instance.
//       const networkId = await web3.eth.net.getId();
//       const deployedNetwork = SimpleStorageContract.networks[networkId];
//       const instance = new web3.eth.Contract(
//         SimpleStorageContract.abi,
//         deployedNetwork && deployedNetwork.address,
//       );

//       // Set web3, accounts, and contract to the state, and then proceed with an
//       // example of interacting with the contract's methods.
//       this.setState({ web3, accounts, contract: instance }, this.runExample);
//     } catch (error) {
//       // Catch any errors for any of the above operations.
//       alert(
//         `Failed to load web3, accounts, or contract. Check console for details.`,
//       );
//       console.error(error);
//     }
//   };

//   runExample = async () => {
//     const { accounts, contract } = this.state;

//     // Stores a given value, 5 by default.
//     await contract.methods.set(15).send({ from: accounts[0] });

//     // Get the value from the contract to prove it worked.
//     const response = await contract.methods.get().call();

//     // Update state with the result.
//     this.setState({ storageValue: response });
//   };

//   render() {
//     if (!this.state.web3) {
//       return <div>Loading Web3, accounts, and contract...</div>;
//     }
//     return (
//       <div className="App">
//         <h1>Good to Go!</h1>
//         <p>Your Truffle Box is installed and ready.</p>
//         <h2>Smart Contract Example</h2>
//         <p>
//           If your contracts compiled and migrated successfully, below will show
//           a stored value of 5 (by default).
//         </p>
//         <p>
//           Try changing the value stored on <strong>line 42</strong> of App.js.
//         </p>
//         <div>The stored value is: {this.state.storageValue}</div>
//       </div>
//     );
//   }
// }

// export default App;


// import React, {useEffect, useState} from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import SimpleStorageContract from "./contracts/SimpleStorage.json";
// import Electionabi from './contracts/Election.json'
// // const Web3 = require('web3');
// import Web3 from "web3";
// import { render } from 'react-dom';
// const Election = require("./contracts/Election.json");

// function App() {

//   useEffect(() => {
//     loadWeb3();
//     LoadBlockchainData();
//   }, [])

//   const loadWeb3 = async () => {
//     if(window.ethereum) {
//       window.web3 = new Web3(window.ethereum);
//       await window.ethereum.enable();
//     }
//     else if (window.web3){
//       window.web3 = new Web3(window.web3.currentProvider);
//     }
//     else{
//       window.alert(
//         "Non-Ethereum browser detected. You should consider trying Metamask"
//       );
//     }
//   };

//   const LoadBlockchainData = async() => {
//     const web3 = window.web3;

//     const accounts = web3.eth.getAccounts();
//     const account = accounts[0];

//     const networkId = await web3.eth.net.getId();

//     const networkData = Electionabi.networks[networkId];

//     if(networkData){
//       const election = new web3.eth.Contract(Election.abi, networkData.address);
//       console.log(election);
//     }
//     else{
//       window.alert("The smart contract is not deployed to current network");
//     }
//   };

//   // render() {
//   //   if(!this.state.web3){
//   //     return <div>Loading Web3, accounts, and contract...</div>;
//   //   }
//   //   return (
//   //     <div>
//   //       <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//   //         <div class="container-fluid">
//   //           <p className="navbar-brand my-auto">Election Dapp</p>
//   //           <ul className="navbar-nav d-flex">
//   //             <li><a class="nav-link nav-item text-white" href="#">Account Address</a></li>
//   //             {/* <li class="nav-item text-white">Account Address</li> */}
//   //           </ul>
//   //         </div>
//   //       </nav>
//   //     </div>
//   //   );
//   // }


// }

// export default App;


import React, {useEffect, useState, Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import Electionabi from './contracts/Election.json'
// const Web3 = require('web3');
import Web3 from "web3";
import getWeb3 from "./getWeb3";
import { render } from 'react-dom';
const Election = require("./contracts/Election.json");


class App extends Component{
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  loadWeb3 = async () => {
    const web3 = await getWeb3();
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

  LoadBlockchainData = async() => {
    const web3 = window.web3;

    const accounts = web3.eth.getAccounts();
    const account = accounts[0];

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

  render() {
    // if (!this.state.web3) {
    //   return <div>Loading Web3, accounts, and contract...</div>;
    // }
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <p className="navbar-brand my-auto">Election Dapp</p>
            <ul className="navbar-nav d-flex">
              <li><a class="nav-link nav-item text-white" href="#">Account Address</a></li>
              {/* <li class="nav-item text-white">Account Address</li> */}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}



function App1() {

  useEffect(() => {
    loadWeb3();
    LoadBlockchainData();
  }, [])

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
    const web3 = window.web3;

    const accounts = web3.eth.getAccounts();
    const account = accounts[0];

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
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <p className="navbar-brand my-auto">Election Dapp</p>
          <ul className="navbar-nav d-flex">
            <li><a class="nav-link nav-item text-white" href="#">Account Address</a></li>
            {/* <li class="nav-item text-white">Account Address</li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;
