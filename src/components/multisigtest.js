//success case
it ('multisig transfer', async function(){
    let txObjectSignedAlice = transfer({amount:10000, recipient:accountBobAddress, fee:FEE}, accountAliceSeed)
    let txObjectSignedAliceBob = transfer(txObjectSignedAlice, accountBobSeed)

    let tx = await broadcast(txObjectSignedAliceBob)
    await waitForTx(tx.id)
    console.log(JSON.stringify(tx));

})
//with error

it ('multisig transfer', async function(){
    let txObjectSignedAlice = transfer({amount:10000, recipient:accountBobAddress, fee:FEE}, accountAliceSeed)
    let txObjectSignedAliceBob = transfer(txObjectSignedAlice, accountCooperSeed)

    let tx = await broadcast(txObjectSignedAliceBob)
    await waitForTx(tx.id)
    console.log(JSON.stringify(tx));

})
