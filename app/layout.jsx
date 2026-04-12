import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Instrument_Serif, DM_Mono } from 'next/font/google'
import 'nextra-theme-docs/style.css'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap'
})

const dmMono = DM_Mono({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-dm-mono',
  display: 'swap'
})

export const metadata = {
  title: {
    default: 'notchnotch',
    template: '%s · notchnotch'
  },
  description:
    'Your MacBook already has an AI agent. It just doesn\'t know it yet. notchnotch puts Hermes inside your notch.',
  icons: {
    icon: '/favicon.png',
    apple: '/logos/icon-128.png'
  },
  openGraph: {
    title: 'notchnotch',
    description: 'Your MacBook already has an AI agent. It just doesn\'t know it yet.',
    siteName: 'notchnotch',
    type: 'website',
    images: [{ url: '/screenshots/chat.png', width: 1200, height: 630, alt: 'notchnotch chat interface' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'notchnotch',
    description: 'Your MacBook already has an AI agent. It just doesn\'t know it yet.',
    images: ['/screenshots/chat.png']
  }
}

const logo = (
  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>
    <img src="/logos/icon-white.png" alt="" width={20} height={20} style={{ display: 'block' }} />
    notchnotch
  </span>
)

const navbar = (
  <Navbar
    logo={logo}
    projectLink="https://github.com/KikinaStudio/Notchnotch"
  >
    <Search />
  </Navbar>
)

const footer = (
  <Footer>
    <div className="nn-footer">
      MIT {new Date().getFullYear()} © KikinaStudio · Built with Nextra
    </div>
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${dmMono.variable}`}
    >
      <Head
        backgroundColor={{ dark: '#0a0a0a', light: '#fafafa' }}
        color={{
          hue: { dark: 201, light: 201 },
          saturation: { dark: 54, light: 54 }
        }}
      />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap('/docs')}
          docsRepositoryBase="https://github.com/KikinaStudio/Notchnotch/tree/main/docs-site"
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={footer}
          darkMode={true}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
