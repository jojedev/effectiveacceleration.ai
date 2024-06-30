export const MARKETPLACE_DATA_V1_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"InvalidInitialization","type":"error"},{"inputs":[],"name":"NotInitializing","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"bytes","name":"pubkey","type":"bytes"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"bio","type":"string"},{"indexed":false,"internalType":"string","name":"avatar","type":"string"},{"indexed":false,"internalType":"uint16","name":"fee","type":"uint16"}],"name":"ArbitratorRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"bio","type":"string"},{"indexed":false,"internalType":"string","name":"avatar","type":"string"}],"name":"ArbitratorUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint64","name":"version","type":"uint64"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"jobId","type":"uint256"},{"components":[{"internalType":"uint8","name":"type_","type":"uint8"},{"internalType":"bytes","name":"address_","type":"bytes"},{"internalType":"bytes","name":"data_","type":"bytes"},{"internalType":"uint32","name":"timestamp_","type":"uint32"}],"indexed":false,"internalType":"struct JobEventData","name":"eventData","type":"tuple"}],"name":"JobEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"bytes","name":"pubkey","type":"bytes"}],"name":"PublicKeyRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"bytes","name":"pubkey","type":"bytes"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"bio","type":"string"},{"indexed":false,"internalType":"string","name":"avatar","type":"string"}],"name":"UserRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"bio","type":"string"},{"indexed":false,"internalType":"string","name":"avatar","type":"string"}],"name":"UserUpdated","type":"event"},{"inputs":[{"internalType":"address","name":"target_","type":"address"},{"internalType":"address","name":"reviewer_","type":"address"},{"internalType":"uint256","name":"jobId_","type":"uint256"},{"internalType":"uint8","name":"rating_","type":"uint8"},{"internalType":"string","name":"text_","type":"string"}],"name":"addReview","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"arbitratorAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"arbitratorRefused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"arbitratorRegistered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"arbitratorSettled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"arbitrators","outputs":[{"internalType":"address","name":"address_","type":"address"},{"internalType":"bytes","name":"publicKey","type":"bytes"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"bio","type":"string"},{"internalType":"string","name":"avatar","type":"string"},{"internalType":"uint16","name":"fee","type":"uint16"},{"internalType":"uint16","name":"settledCount","type":"uint16"},{"internalType":"uint16","name":"refusedCount","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"arbitratorsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"jobId_","type":"uint256"}],"name":"eventsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"arbitratorAddress_","type":"address"}],"name":"getArbitrator","outputs":[{"components":[{"internalType":"address","name":"address_","type":"address"},{"internalType":"bytes","name":"publicKey","type":"bytes"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"bio","type":"string"},{"internalType":"string","name":"avatar","type":"string"},{"internalType":"uint16","name":"fee","type":"uint16"},{"internalType":"uint16","name":"settledCount","type":"uint16"},{"internalType":"uint16","name":"refusedCount","type":"uint16"}],"internalType":"struct JobArbitrator","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"getArbitratorFee","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index_","type":"uint256"},{"internalType":"uint256","name":"limit_","type":"uint256"}],"name":"getArbitrators","outputs":[{"components":[{"internalType":"address","name":"address_","type":"address"},{"internalType":"bytes","name":"publicKey","type":"bytes"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"bio","type":"string"},{"internalType":"string","name":"avatar","type":"string"},{"internalType":"uint16","name":"fee","type":"uint16"},{"internalType":"uint16","name":"settledCount","type":"uint16"},{"internalType":"uint16","name":"refusedCount","type":"uint16"}],"internalType":"struct JobArbitrator[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"jobId_","type":"uint256"},{"internalType":"uint256","name":"index_","type":"uint256"},{"internalType":"uint256","name":"limit_","type":"uint256"}],"name":"getEvents","outputs":[{"components":[{"internalType":"uint8","name":"type_","type":"uint8"},{"internalType":"bytes","name":"address_","type":"bytes"},{"internalType":"bytes","name":"data_","type":"bytes"},{"internalType":"uint32","name":"timestamp_","type":"uint32"}],"internalType":"struct JobEventData[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"jobId_","type":"uint256"}],"name":"getJob","outputs":[{"components":[{"internalType":"uint8","name":"state","type":"uint8"},{"internalType":"bool","name":"whitelistWorkers","type":"bool"},{"components":[{"internalType":"address","name":"creator","type":"address"},{"internalType":"address","name":"arbitrator","type":"address"},{"internalType":"address","name":"worker","type":"address"}],"internalType":"struct JobRoles","name":"roles","type":"tuple"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string[]","name":"tags","type":"string[]"},{"internalType":"bytes32","name":"contentHash","type":"bytes32"},{"internalType":"bool","name":"multipleApplicants","type":"bool"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint32","name":"timestamp","type":"uint32"},{"internalType":"uint32","name":"maxTime","type":"uint32"},{"internalType":"string","name":"deliveryMethod","type":"string"},{"internalType":"uint256","name":"collateralOwed","type":"uint256"},{"internalType":"uint256","name":"escrowId","type":"uint256"},{"internalType":"bytes32","name":"resultHash","type":"bytes32"},{"internalType":"uint8","name":"rating","type":"uint8"},{"internalType":"bool","name":"disputed","type":"bool"}],"internalType":"struct JobPost","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index_","type":"uint256"},{"internalType":"uint256","name":"limit_","type":"uint256"}],"name":"getJobs","outputs":[{"components":[{"internalType":"uint8","name":"state","type":"uint8"},{"internalType":"bool","name":"whitelistWorkers","type":"bool"},{"components":[{"internalType":"address","name":"creator","type":"address"},{"internalType":"address","name":"arbitrator","type":"address"},{"internalType":"address","name":"worker","type":"address"}],"internalType":"struct JobRoles","name":"roles","type":"tuple"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string[]","name":"tags","type":"string[]"},{"internalType":"bytes32","name":"contentHash","type":"bytes32"},{"internalType":"bool","name":"multipleApplicants","type":"bool"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint32","name":"timestamp","type":"uint32"},{"internalType":"uint32","name":"maxTime","type":"uint32"},{"internalType":"string","name":"deliveryMethod","type":"string"},{"internalType":"uint256","name":"collateralOwed","type":"uint256"},{"internalType":"uint256","name":"escrowId","type":"uint256"},{"internalType":"bytes32","name":"resultHash","type":"bytes32"},{"internalType":"uint8","name":"rating","type":"uint8"},{"internalType":"bool","name":"disputed","type":"bool"}],"internalType":"struct JobPost[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"target_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"},{"internalType":"uint256","name":"limit_","type":"uint256"}],"name":"getReviews","outputs":[{"components":[{"internalType":"address","name":"reviewer","type":"address"},{"internalType":"uint256","name":"jobId","type":"uint256"},{"internalType":"uint8","name":"rating","type":"uint8"},{"internalType":"string","name":"text","type":"string"},{"internalType":"uint32","name":"timestamp","type":"uint32"}],"internalType":"struct Review[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress_","type":"address"}],"name":"getUser","outputs":[{"components":[{"internalType":"address","name":"address_","type":"address"},{"internalType":"bytes","name":"publicKey","type":"bytes"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"bio","type":"string"},{"internalType":"string","name":"avatar","type":"string"},{"internalType":"uint16","name":"reputationUp","type":"uint16"},{"internalType":"uint16","name":"reputationDown","type":"uint16"}],"internalType":"struct User","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress_","type":"address"}],"name":"getUserRating","outputs":[{"components":[{"internalType":"uint16","name":"averageRating","type":"uint16"},{"internalType":"uint256","name":"numberOfReviews","type":"uint256"}],"internalType":"struct UserRating","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index_","type":"uint256"},{"internalType":"uint256","name":"limit_","type":"uint256"}],"name":"getUsers","outputs":[{"components":[{"internalType":"address","name":"address_","type":"address"},{"internalType":"bytes","name":"publicKey","type":"bytes"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"bio","type":"string"},{"internalType":"string","name":"avatar","type":"string"},{"internalType":"uint16","name":"reputationUp","type":"uint16"},{"internalType":"uint16","name":"reputationDown","type":"uint16"}],"internalType":"struct User[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"marketplace_","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"jobEvents","outputs":[{"internalType":"uint8","name":"type_","type":"uint8"},{"internalType":"bytes","name":"address_","type":"bytes"},{"internalType":"bytes","name":"data_","type":"bytes"},{"internalType":"uint32","name":"timestamp_","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jobsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketplace","outputs":[{"internalType":"contract MarketplaceV1","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"meceTags","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress_","type":"address"}],"name":"publicKeys","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"jobId_","type":"uint256"},{"components":[{"internalType":"uint8","name":"type_","type":"uint8"},{"internalType":"bytes","name":"address_","type":"bytes"},{"internalType":"bytes","name":"data_","type":"bytes"},{"internalType":"uint32","name":"timestamp_","type":"uint32"}],"internalType":"struct JobEventData","name":"event_","type":"tuple"}],"name":"publishJobEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"shortForm","type":"string"}],"name":"readMeceTag","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"pubkey_","type":"bytes"},{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"bio_","type":"string"},{"internalType":"string","name":"avatar_","type":"string"},{"internalType":"uint16","name":"fee_","type":"uint16"}],"name":"registerArbitrator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"pubkey_","type":"bytes"},{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"bio_","type":"string"},{"internalType":"string","name":"avatar_","type":"string"}],"name":"registerUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"shortForm","type":"string"}],"name":"removeMeceTag","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"bio_","type":"string"},{"internalType":"string","name":"avatar_","type":"string"}],"name":"updateArbitrator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"shortForm","type":"string"},{"internalType":"string","name":"longForm","type":"string"}],"name":"updateMeceTag","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"bio_","type":"string"},{"internalType":"string","name":"avatar_","type":"string"}],"name":"updateUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress_","type":"address"},{"internalType":"uint8","name":"reviewRating_","type":"uint8"}],"name":"updateUserRating","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"userAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"userDelivered","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRatings","outputs":[{"internalType":"uint16","name":"averageRating","type":"uint16"},{"internalType":"uint256","name":"numberOfReviews","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"userRefunded","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"userRegistered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userReviews","outputs":[{"internalType":"address","name":"reviewer","type":"address"},{"internalType":"uint256","name":"jobId","type":"uint256"},{"internalType":"uint8","name":"rating","type":"uint8"},{"internalType":"string","name":"text","type":"string"},{"internalType":"uint32","name":"timestamp","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"address","name":"address_","type":"address"},{"internalType":"bytes","name":"publicKey","type":"bytes"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"bio","type":"string"},{"internalType":"string","name":"avatar","type":"string"},{"internalType":"uint16","name":"reputationUp","type":"uint16"},{"internalType":"uint16","name":"reputationDown","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usersLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}] as const;