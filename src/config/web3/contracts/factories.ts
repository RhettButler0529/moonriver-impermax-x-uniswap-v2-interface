
import { CHAIN_IDS } from 'config/web3/chains';

const FACTORY_ADDRESSES: {
  [chainId: number]: string;
} = {
  [CHAIN_IDS.ROPSTEN]: '0x3fdB4b27e1b4be9b27514C643a8Baef95Cf9b549',
  [CHAIN_IDS.KOVAN]: '0x0000000000000000000000000000000000000000',
  [CHAIN_IDS.ETHEREUM_MAIN_NET]: '0x8C3736e2FE63cc2cD89Ee228D9dBcAb6CE5B767B'
};

export {
  FACTORY_ADDRESSES
};
