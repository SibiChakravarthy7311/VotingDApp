import React, { useState } from 'react'

const Body = ({candidate1, candidate2, voteCandidate, account}) => {

    const [candidate, setCandidate] = useState("");

    const onchange = (e) => {
        setCandidate(e.target.value);
    };

    const onsubmit = (e) => {
        e.preventDefault();
        if(candidate.id !== 0){
            voteCandidate(Number(candidate));
        }
        else{
            window.alert("There is error in submission");
        }
    }

    return (
        <div className="container mt-4 text-center" style={{color: "#000000"}}>
            <h2>Auction Results</h2>
            <div className="container mt-4 text-center" style={{width: "70%"}}>
                <hr
                    style={{
                        width: "100%",
                        borderStyle: "solid",
                        borderWidth: "2px",
                        borderColor: "#000000",
                    }}
                />
            </div>

            <div className="container mt-4 text-center" style={{width: "50%"}}>
                <div className="p-3 ml-auto mr-auto" style={{width: "100%"}}>
                    <div className="row ml-auto mr-auto mb-2" style={{width: "90%"}}>
                        <div className="col">
                            <p>#</p>
                        </div>
                        <div className="col">
                            <p>Name</p>
                        </div>
                        <div className="col">
                            <p>Votes</p>
                        </div>
                    </div>

                    <hr style={{width: "90%", borderStyle: "solid", borderColor: "#000000"}} />
                    <div className="row ml-auto mr-auto mt-2 mb-2" style={{width: "90%"}}>
                        <div className="col">
                            <p>{candidate1.id}</p>
                        </div>
                        <div className="col">
                            <p>{candidate1.name}</p>
                        </div>
                        <div className="col">
                            <p>{candidate1.votecount}</p>
                        </div>
                    </div>

                    <hr style={{width: "90%", borderStyle: "solid", borderColor: "#000000"}} />
                    <div className="row ml-auto mr-auto mt-2 mb-2" style={{width: "90%"}}>
                        <div className="col">
                            <p>{candidate2.id}</p>
                        </div>
                        <div className="col">
                            <p>{candidate2.name}</p>
                        </div>
                        <div className="col">
                            <p>{candidate2.votecount}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5 mr-auto ml-auto text-left" style={{width: "70%"}}>
                <h5>Cast Your Vote:</h5>
                <form onSubmit={onsubmit}>
                    <select name="candidate" className="form-control" onChange={onchange}>
                        <option defaultValue value="">
                            Select
                        </option>
                        <option value="1">{candidate1.name}</option>
                        <option value="2">{candidate2.name}</option>
                    </select>
                    <button className="btn btn-primary mt-2 btn-md w-100">
                        Vote For Property{""} {candidate}
                    </button>
                </form>
            </div>
            <p className="my-5">
                Your Address: <span className="font-weight-bold">{account}</span>
            </p>

        </div>
        
             
    )
}

export default Body;
