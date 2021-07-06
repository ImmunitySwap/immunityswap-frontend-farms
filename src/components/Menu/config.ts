import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://immunityswap.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.immunityswap.com/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.immunityswap.com/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://immunityswap.com/farms',
  },/* 
  {
    label: 'Armory',
    icon: 'PoolIcon',
    href: '/nests', 
  }, */
  {
    label: 'Chart',
    icon: 'GraphIcon',
    href: 'https://poocoin.app/tokens/0x29927a1ad6ee13357d276ba3a26bfc90371de141'
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x29927a1Ad6EE13357D276bA3A26bFc90371DE141',
      }/* ,
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/viking-swap/',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/viking-swap',
      }, */
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/ImmunitySwap/",
      }
    ],
  }, /*
  {
    label: 'Audit by Hacken',
    icon: 'HelmetIcon',
    href: 'https://www.vikingswap.finance/files/vikingHackenAudit.pdf',
  }, */
]

export default config
