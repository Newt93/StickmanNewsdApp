// This connects automatically to the $AVAX C-Chain Testnet
export const AVALANCHE_TESTNET_PARAMS = {
  chainId: "0xA869",
  chainName: "Avalanche Testnet C-Chain",
  nativeCurrency: {
    name: "Avalanche",
    symbol: "AVAX",
    decimals: 18,
  },
  rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
  blockExplorerUrls: ["https://testnet.snowtrace.io/"],
  }
        
function addAvalancheNetwork() {
  injected.getProvider().then((provider) => {
    provider
    .request({
       method: "wallet_addEthereumChain",
       params: [AVALANCHE_MAINNET_PARAMS],
      })
    .catch((error: any) => {
      console.log(error)
    })
  })
 }