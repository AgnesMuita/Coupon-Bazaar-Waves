const accountCooperAddress = "3P....";
const accountAliceSeed = "seed phrase here";

it ('dApp invoke purchase', async function(){
    let txObjectSigned = InvokeScript({
      dApp:accountCooperAddress,
      call:{
        "function":"purchase",
        "args":[]
      },
      payment:[
        {amount:500000, assetId:null}
      ]
}, accountAliceSeed)
    let tx = await broadcast(txObjectSigned);
    await waitForTx(tx.id)
})