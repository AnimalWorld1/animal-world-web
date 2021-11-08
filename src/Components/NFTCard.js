import React from "react";
import "../styles/Navbar.css";

function NFTCard({data,type,handler,w_type}) {
  let stktransaction = async () => {
    try {
      let response = w_type=="w"?await handler.api.transact({
      actions: [{
        account: 'stakeanimal1',
        name: 'stakeassets',
        authorization: [{
          actor: handler.userAccount,
          permission: 'active',
        }],
        data: {
          asset_ids: [data.asset_id],
          _user: handler.userAccount
        },
      }]
    }, {
      blocksBehind: 3,
      expireSeconds: 1200,
    }):await handler.transact({
      action: {
        account: 'stakeanimal1',
        name: 'stakeassets',
        authorization: [handler.auth],
        data: {
          asset_ids: [data.asset_id],
          _user: handler.auth.actor,
        }
      },
    });
    await new Promise(r => setTimeout(r, 3000));
        alert("Staking successfull !");
  }
  catch(e){
    alert(e.message);
  }
}
let unstktransaction = async () => {
    try {
      let response = w_type=="w"?await handler.api.transact({
      actions: [{
        account: 'stakeanimal1',
        name: 'removenft',
        authorization: [{
          actor: handler.userAccount,
          permission: 'active',
        }],
        data: {
          asset_ids: [data.asset_id],
        },
      }]
    }, {
      blocksBehind: 3,
      expireSeconds: 1200,
    }):await handler.transact({
      action: {
        account: 'stakeanimal1',
        name: 'removenft',
        authorization: [handler.auth],
        data: {
          asset_ids: [data.asset_id],
          _user: handler.auth.actor,
        }
      },
    });
    await new Promise(r => setTimeout(r, 3000));
        alert("Asset Removed Successfully !");
  }
  catch(e){
    alert(e.message);
  }
}

  return (
    <div
      style={{
        width: "5em",
        height: "8.8em",
        borderRadius: "0.4em",
        padding: "0.2em",
        margin: "2%",
        background: "rgba(253, 121, 4,0.2)",
        position: "relative",
        display: "inline-block"
      }}
    >
      <span
        style={{
          fontSize: "0.5em",
          padding: "20px 10px",
          borderRadius: "5px",
        }}
      >
        {data.data.name}
      </span>
      <img
        src={`https://ipfs.wecan.dev/ipfs/${data.data.img}`}
        style={{ width: "80%", margin: "10px 10px" }}
      />
      <div style={{textAlign:"center"}}>
        <button
          onClick={type=="Stake Asset"?stktransaction:unstktransaction}
          style={{
            position:"absolute",
            width:"60%",
            padding: "1em 2em",
            border: "1px(0,0,0)",
            background: "rgb(255,255,255)",
            bottom: "10px",
            left: "50%", 
            transform: "translate(-50%, -50%)",
            borderRadius:"0.5em",
            textAlign:"center",
          }}
        >
          <text className="stktext">{type}</text>
        </button>
      </div>
    </div>
  );
}

export default NFTCard;
