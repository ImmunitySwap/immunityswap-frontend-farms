import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'VITALITY-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x46Efe550E21D77300470eDeE45e2EB9566be6f65',
    },
    tokenSymbol: 'VITALITY',
    tokenAddresses: {
      97: '',
      56: '0x29927a1Ad6EE13357D276bA3A26bFc90371DE141',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, 
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'VITALITY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x72F7939afa39941F8E32Ab74947E872bD59E4067',
    },
    tokenSymbol: 'VITALITY',
    tokenAddresses: {
      97: '',
      56: '0x29927a1Ad6EE13357D276bA3A26bFc90371DE141',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, 
  {
    pid: 3,
    risk: 1,
    lpSymbol: 'bIMTY-VITAL LP',
    lpAddresses: {
      97: '',
      56: '0xf030a8c815360614061da3eac95f6e66155262c8',
    },
    tokenSymbol: 'bIMTY',
    tokenAddresses: {
      97: '',
      56: '0x5Aaf9ddd8AeEC564AAaa0F76B8E5f2B2B1a6d295',
    },
    quoteTokenSymbol: QuoteToken.VITAL,
    quoteTokenAdresses: contracts.vital,
  },
  {
    pid: 5,
    risk: 2,
    lpSymbol: 'bIMTY-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x954a044b45b0bdc8a284f8bfb8a92c7a81f32a53',
    },
    tokenSymbol: 'bIMTY',
    tokenAddresses: {
      97: '',
      56: '0x5aaf9ddd8aeec564aaaa0f76b8e5f2b2b1a6d295',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 1,
    lpSymbol: 'BTC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
    },
    tokenSymbol: 'BBTC',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 7,
    risk: 1,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 8,
    risk: 3,
    lpSymbol: 'ADA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xba51d1ab95756ca4eab8737ecd450cd8f05384cf',
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
      97: '',
      56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 9,
    risk: 4,
    lpSymbol: 'DOT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c',
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 10,
    risk: 4,
    lpSymbol: 'USDT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x20bcc3b8a0091ddac2d0bc30f68e6cbb97de59cd',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 11,
    risk: 5,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd', // VIKING-BUSD LP
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059fF775485246999027B3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, {
    pid: 12,
    risk: 5,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6'
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.bbnb
  }, {
    pid: 13,
    risk: 5,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458'
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, {
    pid: 14,
    risk: 5,
    lpSymbol: 'EGG-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019'
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd
  }
  /*
  {
    pid: 12,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // VIKING-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 22,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'EGG',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // EGG-BUSD LP
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 14,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd', // USDT-BUSD LP
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 15,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 16,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 17,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'DAI',
    lpAddresses: {
      97: '',
      56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc', // DAI-BUSD LP
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 18,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDC',
    lpAddresses: {
      97: '',
      56: '0x680dd100e4b394bda26a59dd5c119a391e747d18', // USDC-BUSD LP
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 19,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'DOT',
    lpAddresses: {
      97: '',
      56: '0x54c1ec2f543966953f2f7564692606ea7d5a184e', // DOT-BUSD LP
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 20,
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 21,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'BSCX',
    lpAddresses: {
      97: '',
      56: '0xa32a983a64ce21834221aa0ad1f1533907553136', // BSCX-BUSD LP
    },
    tokenSymbol: 'BSCX',
    tokenAddresses: {
      97: '',
      56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 23,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'AUTO',
    lpAddresses: {
      97: '',
      56: '0x4d0228ebeb39f6d2f29ba528e2d15fc9121ead56', // AUTO-BNB LP
    },
    tokenSymbol: 'AUTO',
    tokenAddresses: {
      97: '',
      56: '0xa184088a740c695e156f91f5cc086a06bb78b827',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  }, */
]

export default farms
