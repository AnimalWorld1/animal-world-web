import React from "react";
import "../styles/Navbar.css";
const Assets= require('../assets/assets')

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
    })
    :await handler.transact({
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
    await response;
        alert("Staking successfull !");

        var res =w_type=="w"? Assets.functions.getassetdata(handler.userAccount):Assets.functions.getassetdata(handler.auth.actor);
        
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
    await response;
        alert("Asset Removed Successfully !");
        var res =w_type=="w"? Assets.functions.getassetdata(handler.userAccount):Assets.functions.getassetdata(handler.auth.actor);

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
          fontSize: "0.4em",
          padding: "5px 5px",
          borderRadius: "1px",
        }}
      >
        {data.data.name}
      </span>

      <span
        style={{
          fontSize: "0.3em",
          color:"red",
          padding: "5px 5px",
          borderRadius: "5px",
        }}
      >
        {data.rate + "/day"}
      </span>
      <img
        src={`https://ipfs.wecan.dev/ipfs/${data.data.img}`}
        style={{ width: "80%", margin: "10px 10px" }}
      />
      <div style={{textAlign:"center"}}>
        <button
          onClick={type=="Stake Asset"?stktransaction:unstktransaction}
          className="stkbtttn"

        >
          <text className="stktext">{type}</text>
        </button>
      </div>
    </div>
  );
}

export default NFTCard;
