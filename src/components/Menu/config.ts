import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'http://exchange.immunityswap.com/',
      },
      {
        label: 'Liquidity',
        href: 'http://exchange.immunityswap.com/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },/* 
  {
    label: 'Armory',
    icon: 'PoolIcon',
    href: '/nests', 
  }, */
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
