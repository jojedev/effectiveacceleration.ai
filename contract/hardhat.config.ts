import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import "@openzeppelin/hardhat-upgrades";
import "hardhat-contract-sizer";

import "./tasks/index";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
};

export default config;
