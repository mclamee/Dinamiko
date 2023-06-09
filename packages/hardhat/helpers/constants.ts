import { parseEther, parseUnits } from "ethers/lib/utils";

export const MOCK_TOKEN_LIST: { [symbol: string]: string } = {
  WETH: "Wrapped Ether",
  ETH: "Ether",
  DAI: "Dai Stablecoin",
  USDC: "USD Coin",
  USDT: "USDT",
  WBTC: "Wrapped BTC",
  LINK: "ChainLink Token",
  SUSHI: "SushiToken",
  AAVE: "Aave Token",
  CRV: "Curve DAO Token",
};

export const MOCK_CHAINLINK_TOKEN_TO_USD_AGGREGATORS_PRICES: { [key: string]: string } = {
  WETH: parseUnits("2000", 8).toString(),
  ETH: parseUnits("2000", 8).toString(),
  DAI: parseUnits("1", 8).toString(),
  USDC: parseUnits("1", 8).toString(),
  USDT: parseUnits("1", 8).toString(),
  WBTC: parseUnits("29000", 8).toString(),
  LINK: parseUnits("30", 8).toString(),
  SUSHI: parseUnits("2.95", 8).toString(),
  AAVE: parseUnits("300", 8).toString(),
  CRV: parseUnits("6", 8).toString(),
  USD: parseUnits("1", 8).toString(),
};

export const MOCK_CHAINLINK_DATA_FEEDS_AGGREGATORS: { [key: string]: string } = {
  "30DayETHAPR": parseUnits("2000", 8).toString(),
  "90DayETHAPR": parseUnits("581273", 8).toString(),
  "BTCIRBC1-Day": parseUnits("1900", 8).toString(),
  "BTCIRBC1-Week": parseUnits("7105", 8).toString(),
};

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export const ONE_ADDRESS = "0x0000000000000000000000000000000000000001";

export const ONE_ETH = parseEther("1");
export const TWO_ETH = parseEther("2");
export const THREE_ETH = parseEther("3");
export const FOUR_ETH = parseEther("4");

export const PERCENTAGE_FACTOR = "10000";
export const HALF_PERCENTAGE = "5000";

export const UPDATEINTERVAL = 60;
export const FEE = 0.5 * 10 ** 18; //Vary depending to the network
export const JOB_ID = "d220e5e687884462909a03021385b7ae"; //adjust with the correct value
export const REGISTRAR = "0xE16Df59B887e3Caa439E0b29B42bA2e7976FD8b2"; //The address of the Chainlink Automation registry contract

export const KEEP_REGISTRY = "0xE16Df59B887e3Caa439E0b29B42bA2e7976FD8b2"; //The address of the Chainlink Automation registry contract
export const LINK_ORACLE = "0x6090149792dAAeE9D1D568c9f9a6F6B46AA29eFD"; //Chainlink oracle address
export const MIN_WAIT_PERIOD_SECONDS = 10; //Testnet value - necessary updae with the correct value

//Uniswap parameters
export const ROUTERADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
export const FACTORYADDRESS = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";

export const DEFAULT_NAMED_ACCOUNTS = {
  deployer: {
    default: 0,
  },
  admin: {
    default: 0,
  },
};

export const getDeployIds = (MARKET_NAME: string) => {
  return {
    TESTNET_TOKEN_PREFIX: `-TestnetMintableERC20-${MARKET_NAME}`,
    TESTNET_PRICE_AGGR_PREFIX: `-TestnetPriceAggregator-${MARKET_NAME}`,
    TESTNET_DATA_AGGR_PREFIX: `-TestnetDataAggregator-${MARKET_NAME}`,
  };
};
