import React, { ReactNode } from 'react'
import Head from 'next/head'

import styles from '../styles/Layout.module.scss'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'MWI Benchmark Test' }: Props) => (
  <div className={styles.layout}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className={styles.logoHeader}>
      <img src="/mwi-logo-horizontal.png" alt="MWI Interactive"/>
    </header>
    {children}
    <footer className={styles.footer}>
      <p className={styles.footerText}>Thanks for taking the Midwestern Interactive Benchmark Test.</p>
    </footer>
  </div>
)

export default Layout