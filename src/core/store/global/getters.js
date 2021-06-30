import nodeList from '@/utils/networks';
import { ETH } from '@/utils/networks/types';
import { getGasBasedOnType } from '@/core/helpers/gasPriceHelper';

const Networks = function () {
  return nodeList;
};
const network = function (state) {
  let network = nodeList['ETH'][0];
  const iteratableArr = nodeList[state.currentNetwork.type.name];
  network = state.currentNetwork;
  network.type = nodeList[state.currentNetwork.type.name][0].type;
  for (let index = 0; index < iteratableArr.length; index++) {
    if (state.currentNetwork.service === iteratableArr[index].service) {
      network = iteratableArr[index];
      break;
    }
  }
  return network;
};

const gasPrice = function (state) {
  return getGasBasedOnType(state.baseGasPrice, state.gasPriceType);
};

const isEthNetwork = function (state) {
  return state.currentNetwork.type.name === ETH.name;
};
const isTestNetwork = function (state) {
  return state.currentNetwork.type.isTestNetwork;
};

const localContracts = function (state) {
  return state.localContracts[state.currentNetwork.type.name]
    ? state.localContracts[state.currentNetwork.type.name]
    : [];
};

export default {
  Networks,
  network,
  gasPrice,
  isEthNetwork,
  localContracts,
  isTestNetwork
};