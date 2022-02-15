import * as React from "react"
import { Hero } from "../components/Hero/Hero"
//import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/Header/Header"

const Layout = ({ children }) => {
  return (
    <>
     <Header />
      <div className="layout">
        <Hero />
        <main>{children}</main>
        <footer>
        </footer>
      </div>
    </>
  )
}


export default Layout
