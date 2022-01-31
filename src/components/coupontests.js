let dataJson = {
    title:"New Tshirt", 
    couponPrice:2000,
    oldPrice: 20000,
    newPrice:20000,
    address:"Universe",
    description:"Fortune favors the brave-Matt Damon",
    image: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/Tshirt-design.jpg?auto=format&q=60&fit=max&w=930"
}
const usersInitialBalance = 10000000

const dappAddress=''//the address where the smartcontract is deployed
const voteTypes = {
    delisted:"delisted", 
    featured:"featured"
}
const commits = [
"",//item + vote +salt => .toBytes().sha256().toBaseString()
"",
"",
]
const reveals = [voteTypes.delisted, voteTypes.featured, voteTypes.featured]
const salts = ["random0", "random1","random2"]
const itemId = ""
const seedPhrase=''


describe ('Coupon Bazaar happy path', ()=>{
    before (async()=>{
      await setUpAccounts({
        user0:usersInitialBalance,
        user1:usersInitialBalance,
        user2:usersInitialBalance,

  })
})
it("Add item", async function(){
    let ts = invokeScript({
      dApp:"",
      call:{
        function:"addItem",
        args:[
          {type:'string', value:dataJson.title},
          {type:'integer', value:dataJson.couponPrice},
          {type:'string', value:JSON.stringify(dataJson)},
        ]
     },
    payment : []
    },"");
    let tx = await broadcast(ts)
    await waitForTx(tx.id)
})
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

it("Vote Commit", async function(){
  const commitVote = async(vote, seed)=>{
    let tx = invokeScript({
      dApp:"dappAddress",
      call:{
        function:"voteCommit",
        args:[
          {type:'string', value:itemId},
          {type:'string', value:vote},
        ]
     },
    payment : []
    },seed);
    await broadcast(tx)
    await waitForTx(tx.id)
};
  await commitVote(commits[0].accounts.user0)
  await commitVote(commits[1],accounts.user1)
  await commitVote(commits[2],accounts.user2)
})
})


it("Vote reveal", async function(){
  const revealVote = async(vote, salt, seed)=>{
    let tx = invokeScript({
      dApp:"dappAddress",
      call:{
        function:"voteReveal",
        args:[
          {type:'string', value:itemId},
          {type:'string', value:vote},
          {type:'string', value:salt},
        ]
     },
    payment : []
    },seed);
    await broadcast(tx)
    await waitForTx(tx.id)
};
  await revealVote(reveals[0], salts[0],accounts.user0)
  await revealVote(reveals[1],salts[1],accounts.user1)
  await revealVote(reveals[2],salts[2],accounts.user2)
})
