it("Purchase item", async function(){
  const itemId = "item_";//itemId is derived from the key in  response obtained on adding an item.(check stagenet on waves explorer)
  const ts = invokeScript({
    dApp:"",  
    call:{
      function:"purchase",
      args:[
          {type:'string', value:itemId}
      ]
    },
    fee:900000,
    payment:[{
      amount:dataJson.couponPrice, assetId:null
    }]

  }, seedPhrase)
  const tx=await broadcast(ts)
  await waitForTx(tx.id)
})