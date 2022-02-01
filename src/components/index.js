import Waves from "@waves/signer";
import Provider from "@waves.exchange/provider-web";

// setting the TestNet Signer
const waves = new Waves({NODE_URL: 'https://pool.testnet.wavesnodes.com'});
// setting the Waves.Exchange provider
const provider = new Provider('https://testnet.waves.exchange/signer/');
waves.setProvider(provider);

//User Authorization 
document.querySelector(".js-login").addEventListener("click", async function(event) {
    try {
        const userData = await waves.login();  // calling Waves Signer
        event.target.classList.add("clicked");
        event.target.innerHTML = `
            authorized as <br>
            ${userData.address}`;              // getting account address
    } catch (e) {
        console.error('login rejected')        // handling user auth reject
    }
});