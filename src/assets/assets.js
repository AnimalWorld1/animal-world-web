const waxjs = require("@waxio/waxjs/dist");
const axios = require("axios");

class Assets{}


Assets.getassetdata=function (username)
{
  if(username==null)return;

  console.log(username);
  getconfig().then((config) => {
    
    getuser(username).then((res) => {

           var stakePower = 0;
           if(res.data.length>0)
           {
      for (let i = 0; i < res.data[0].inventory.length; i++) {
        for (let j = 0; j < config.levels.length; j++) {
          if (res.data[0].inventory[i].key == config.levels[j].key) {
            stakePower += res.data[0].inventory[i].value * config.levels[j].value;
          }
      }
    
      res.last_claim= res.data[0].last_claim;
           }
          }
          else res.last_claim=0;
    console.log(res.last_claim);
    res.stakePower = stakePower;
    module.exports.user_data = res;
  

    getassets(username).then((res) => {

      unstakedassets(res.data.data,username).then((v) => {
        module.exports.assets = v.staked;
        module.exports.unstaked = v.unstaked
        
      });
    });
  });
  
});


}



async function getuser(user) {
  const wax = new waxjs.WaxJS({
    rpcEndpoint: "https://wax.eosphere.io",
    tryAutoLogin: false,
  });

  const r = await wax.rpc.get_table_rows({
    json: true,
    code: "stakeanimal1",
    scope: "stakeanimal1",
    table: "user",
    limit: 1,
    lower_bound: user,
  });

  console.log(r.rows[0])

  var empty={
    account : user,
    data :[]
  }
  if(r.rows.length==0 || r.rows[0].account!=user) return empty;
  return r.rows[0];
}

async function getconfig() {
  const wax = new waxjs.WaxJS({
    rpcEndpoint: "https://wax.eosphere.io",
    tryAutoLogin: false,
  });

  const r = await wax.rpc.get_table_rows({
    json: true,
    code: "stakeanimal1",
    scope: "stakeanimal1",
    table: "collections",
    limit: 1,
  });

  console.log(r.rows[0]);

  return r.rows[0];
}

async function getassets(user) {
  var data = await axios.get(
    `https://wax.api.atomicassets.io/atomicassets/v1/assets?collection_name=animalworld1&owner=${user}&page=1&limit=1000&order=desc&sort=asset_id`
  );
  return data;
}

async function unstakedassets(assets,user) {
  let unstake = [];
  let stake = [];

    console.log(assets);
  Object.values(assets).forEach(function (v) {
    checktemplate(v.template.template_id).then((q)=>{
    console.log(q);
    if(q)
    {}
    checkasset(v.asset_id,user).then((r) => {
      if (!r) unstake.push(v);
      else stake.push(v);
    });

});
});
  var object= {
    unstaked:unstake,
    staked:stake
  }
  return object;
}

async function checkasset(assetID,user) {
  const wax = new waxjs.WaxJS({
    rpcEndpoint: "https://wax.eosphere.io",
    tryAutoLogin: false,
  });

  const r = await wax.rpc.get_table_rows({
    json: true,
    code: "stakeanimal1",
    scope: "stakeanimal1",
    table: "nfts",
    limit: 1,
    lower_bound: assetID,
  });
  if(r.rows.length==0) return false;
  if (r.rows[0].asset_id == assetID && r.rows[0].account==user) {
    return true;
  } else return false;
}

async function checktemplate(templateID) {
  const wax = new waxjs.WaxJS({
    rpcEndpoint: "https://wax.eosphere.io",
    tryAutoLogin: false,
  });

  const r = await wax.rpc.get_table_rows({
    json: true,
    code: "stakeanimal1",
    scope: "stakeanimal1",
    table: "leveltemp",
    limit: 100,
  });
  if(r.rows.length==0) return false;
  r.rows.forEach(function(v)
  {
    for(let i=0;i<v.template_ids.length;i++)
    {
    console.log(templateID)

      if(templateID==v.template_ids[i])
      return true;
    }
  return false;
});
}

module.exports = {
  functions: Assets
};