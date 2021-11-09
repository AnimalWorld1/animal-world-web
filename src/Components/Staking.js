import React, { useState } from 'react'
import StakedNFT from './StakedNFT'
import UnStakedNFT from './UnStakedNFT'
import awc from "../assets/awc.png";
import wax from "../assets/wax.png";

const Assets= require('../assets/assets')

function Staking({user,handler,w_type})     {

    const [staked, setStaked] = useState(true)
    const staking =()=>{setStaked(true);}
    const unstaking =()=>{setStaked(false);}

    if( Assets.unstaked==null )
    var response =Assets.functions.getassetdata(user);
    
    console.log(response);
    console.log(Assets.assets);

    const now = new Date()  
    const utcMilllisecondsSinceEpoch = now.getTime();
    const utcSecondsSinceEpoch = Math.round(utcMilllisecondsSinceEpoch / 1000)  

    var timeLeft,stakePower=0;
    if( Assets.user_data!=null)
    {
    console.log(Assets.user_data.last_claim+3600);
    var seconds=(Assets.user_data.last_claim+3600)-utcSecondsSinceEpoch;
    var g=new Date(seconds * 1000).toISOString().substr(14, 5);
     timeLeft= utcSecondsSinceEpoch>=Assets.user_data.last_claim+3600?"Claim now":g;
        stakePower=Assets.user_data.stakePower;
}
console.log(seconds);
console.log(Assets.unstaked);

    let transaction=async () => {
        try {
          let response = w_type=="w"?await handler.api.transact({
          actions: [{
            account: 'stakeanimal1',
            name: 'claim',
            authorization: [{
              actor: handler.userAccount,
              permission: 'active',
            }],
            data: {
              _user: handler.userAccount
            },
          }]
        }, {
          blocksBehind: 3,
          expireSeconds: 1200,
        }):await handler.transact({
          action: {
            account: 'stakeanimal1',
            name: 'claim',
            authorization: [handler.auth],
            data: {
              _user: user
            }
          },
        });
        Assets.functions.getbalancedata(user,null);
        await response;
            alert("Claim successful !");
      return response;

      }
      catch(e){
        alert(e.message);
      }
    };
    return (

        <div>
            {user && (<div>
                <table id="dashboard" style={{display:"flex",justifyContent:"center",textAlign:"left"}}>
                    <tbody>            

                      <tr>
                      <td>
                        <img 
          src={wax}
          className="imgclass"
          style={{ width: "2.2em", position: "relative" ,padding:"10px 30px"}}
          alt="Where NFT meet Real World"
        />
                  <td><div style={{padding:"1px 30px"}}>{Assets.wax?Assets.wax:"0"}</div></td>


        </td>
                  <td>
                  <img 
          src={awc}
          className="imgclass"
          style={{ width: "2.2em", position: "relative" ,padding:"10px 30px"}}
          alt="Where NFT meet Real World"
        />  
         <td> <div style={{padding:"1px 30px"}}>{Assets.wax?Assets.awc:"0"}</div></td> 
         </td>
         </tr>
                      <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>

                      <button className=" btnClaim" onClick={transaction}>Claim</button>
                      </div>
                      
                        <tr><td>----------------------------</td><td>----------------------------</td></tr>
                        <tr><td>User</td><td>{user}</td></tr>
                        <tr><td> Stake Power</td><td> {stakePower.toFixed(4)} AWC /DAY</td></tr>
                        <tr><td>Time To Reward</td><td>{timeLeft}</td></tr>

                    </tbody>
                </table>
            </div>)}

            <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                <button className="nav-item nav-links btnStk" onClick={staking}>Staked NFT</button>
                <button className="nav-item nav-links btnStk" onClick={unstaking} >UnStaked NFT</button>
            </div>
           {user && Assets.unstaked? (staked ? <StakedNFT perPage={12} assets={Assets.assets} handler={handler} w_type={w_type}/> :
            <UnStakedNFT perPage={12} unstaked_data={Assets.unstaked} handler={handler} w_type={w_type}/>):

            ""}
            </div>

    );
}

export default Staking