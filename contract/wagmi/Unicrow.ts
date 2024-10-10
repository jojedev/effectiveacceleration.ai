export const UNICROW_ABI = [{"inputs":[{"internalType":"address","name":"unicrowClaim_","type":"address"},{"internalType":"address","name":"unicrowArbitrator_","type":"address"},{"internalType":"address","name":"unicrowDispute_","type":"address"},{"internalType":"address","name":"governanceAddress_","type":"address"},{"internalType":"uint16","name":"protocolFee_","type":"uint16"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"escrowId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"blockTime","type":"uint256"},{"components":[{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint64","name":"challengeExtension","type":"uint64"},{"internalType":"address","name":"seller","type":"address"},{"internalType":"uint64","name":"challengePeriodStart","type":"uint64"},{"internalType":"address","name":"marketplace","type":"address"},{"internalType":"uint256","name":"marketplaceFee","type":"uint256"},{"internalType":"uint64","name":"challengePeriodEnd","type":"uint64"},{"internalType":"address","name":"currency","type":"address"},{"internalType":"uint16","name":"claimed","type":"uint16"},{"internalType":"int16[2]","name":"consensus","type":"int16[2]"},{"internalType":"uint16[4]","name":"split","type":"uint16[4]"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"paymentReference","type":"string"}],"indexed":false,"internalType":"struct Escrow","name":"escrow","type":"tuple"},{"indexed":false,"internalType":"address","name":"arbitrator","type":"address"},{"indexed":false,"internalType":"uint256","name":"arbitratorFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"challengePeriod","type":"uint256"}],"name":"Pay","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"escrowId","type":"uint256"},{"components":[{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint64","name":"challengeExtension","type":"uint64"},{"internalType":"address","name":"seller","type":"address"},{"internalType":"uint64","name":"challengePeriodStart","type":"uint64"},{"internalType":"address","name":"marketplace","type":"address"},{"internalType":"uint256","name":"marketplaceFee","type":"uint256"},{"internalType":"uint64","name":"challengePeriodEnd","type":"uint64"},{"internalType":"address","name":"currency","type":"address"},{"internalType":"uint16","name":"claimed","type":"uint16"},{"internalType":"int16[2]","name":"consensus","type":"int16[2]"},{"internalType":"uint16[4]","name":"split","type":"uint16[4]"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"paymentReference","type":"string"}],"indexed":false,"internalType":"struct Escrow","name":"escrow","type":"tuple"},{"indexed":false,"internalType":"uint256","name":"blockTime","type":"uint256"}],"name":"Refund","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"escrowId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"blockTime","type":"uint256"},{"components":[{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint64","name":"challengeExtension","type":"uint64"},{"internalType":"address","name":"seller","type":"address"},{"internalType":"uint64","name":"challengePeriodStart","type":"uint64"},{"internalType":"address","name":"marketplace","type":"address"},{"internalType":"uint256","name":"marketplaceFee","type":"uint256"},{"internalType":"uint64","name":"challengePeriodEnd","type":"uint64"},{"internalType":"address","name":"currency","type":"address"},{"internalType":"uint16","name":"claimed","type":"uint16"},{"internalType":"int16[2]","name":"consensus","type":"int16[2]"},{"internalType":"uint16[4]","name":"split","type":"uint16[4]"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"paymentReference","type":"string"}],"indexed":false,"internalType":"struct Escrow","name":"escrow","type":"tuple"},{"indexed":false,"internalType":"uint256[5]","name":"amounts","type":"uint256[5]"}],"name":"Release","type":"event"},{"inputs":[{"internalType":"uint256","name":"escrowId","type":"uint256"},{"internalType":"uint16[4]","name":"split","type":"uint16[4]"},{"internalType":"int16[2]","name":"consensus","type":"int16[2]"},{"internalType":"uint64","name":"challengeStart","type":"uint64"},{"internalType":"uint64","name":"challengeEnd","type":"uint64"}],"name":"challenge","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"escrowIdCounter","outputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"escrowId","type":"uint256"}],"name":"getAllEscrowData","outputs":[{"components":[{"components":[{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint64","name":"challengeExtension","type":"uint64"},{"internalType":"address","name":"seller","type":"address"},{"internalType":"uint64","name":"challengePeriodStart","type":"uint64"},{"internalType":"address","name":"marketplace","type":"address"},{"internalType":"uint256","name":"marketplaceFee","type":"uint256"},{"internalType":"uint64","name":"challengePeriodEnd","type":"uint64"},{"internalType":"address","name":"currency","type":"address"},{"internalType":"uint16","name":"claimed","type":"uint16"},{"internalType":"int16[2]","name":"consensus","type":"int16[2]"},{"internalType":"uint16[4]","name":"split","type":"uint16[4]"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"paymentReference","type":"string"}],"internalType":"struct Escrow","name":"escrow","type":"tuple"},{"components":[{"internalType":"address","name":"arbitrator","type":"address"},{"internalType":"uint16","name":"arbitratorFee","type":"uint16"},{"internalType":"bool","name":"sellerConsensus","type":"bool"},{"internalType":"bool","name":"buyerConsensus","type":"bool"},{"internalType":"bool","name":"arbitrated","type":"bool"}],"internalType":"struct Arbitrator","name":"arbitrator","type":"tuple"},{"components":[{"internalType":"address","name":"latestSettlementOfferBy","type":"address"},{"internalType":"uint16[2]","name":"latestSettlementOffer","type":"uint16[2]"}],"internalType":"struct Settlement","name":"settlement","type":"tuple"},{"components":[{"internalType":"address","name":"address_","type":"address"},{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"string","name":"symbol","type":"string"}],"internalType":"struct Token","name":"token","type":"tuple"}],"internalType":"struct Data","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"escrowId","type":"uint256"}],"name":"getEscrow","outputs":[{"components":[{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint64","name":"challengeExtension","type":"uint64"},{"internalType":"address","name":"seller","type":"address"},{"internalType":"uint64","name":"challengePeriodStart","type":"uint64"},{"internalType":"address","name":"marketplace","type":"address"},{"internalType":"uint256","name":"marketplaceFee","type":"uint256"},{"internalType":"uint64","name":"challengePeriodEnd","type":"uint64"},{"internalType":"address","name":"currency","type":"address"},{"internalType":"uint16","name":"claimed","type":"uint16"},{"internalType":"int16[2]","name":"consensus","type":"int16[2]"},{"internalType":"uint16[4]","name":"split","type":"uint16[4]"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"paymentReference","type":"string"}],"internalType":"struct Escrow","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"governanceAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"buyer","type":"address"},{"internalType":"address","name":"seller","type":"address"},{"internalType":"address","name":"marketplace","type":"address"},{"internalType":"uint16","name":"marketplaceFee","type":"uint16"},{"internalType":"address","name":"currency","type":"address"},{"internalType":"uint32","name":"challengePeriod","type":"uint32"},{"internalType":"uint32","name":"challengeExtension","type":"uint32"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"paymentReference","type":"string"}],"internalType":"struct EscrowInput","name":"input","type":"tuple"},{"internalType":"address","name":"arbitrator","type":"address"},{"internalType":"uint16","name":"arbitratorFee","type":"uint16"}],"name":"pay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"protocolFee","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"escrowId","type":"uint256"}],"name":"refund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"escrowId","type":"uint256"}],"name":"release","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"currency","type":"address"}],"name":"sendEscrowShare","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"escrowId","type":"uint256"}],"name":"setClaimed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"escrowId","type":"uint256"},{"internalType":"uint16[4]","name":"split","type":"uint16[4]"},{"internalType":"int16[2]","name":"consensus","type":"int16[2]"}],"name":"settle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16[5]","name":"currentSplit","type":"uint16[5]"}],"name":"splitCalculation","outputs":[{"internalType":"uint16[5]","name":"","type":"uint16[5]"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"unicrowArbitrator","outputs":[{"internalType":"contract IUnicrowArbitrator","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unicrowClaim","outputs":[{"internalType":"contract IUnicrowClaim","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unicrowDispute","outputs":[{"internalType":"contract UnicrowDispute","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"fee","type":"uint16"}],"name":"updateEscrowFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"governance","type":"address"}],"name":"updateGovernance","outputs":[],"stateMutability":"nonpayable","type":"function"}] as const;
