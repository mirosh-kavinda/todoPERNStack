export default {
  transform: {
    "^.+\\.jsx?$": "jest-esm-transformer",
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.js', '.jsx'],
};
