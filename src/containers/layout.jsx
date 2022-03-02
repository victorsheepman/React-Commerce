import * as React from "react"
import Header from "../components/Header/Header"
import '../main.scss'
const Layout = ({ children }) => {
  return (
    <>
     <Header />
      <div className="layout">
        <main>{children}</main>
        <footer>
        </footer>
      </div>
    </>
  )
}


export default Layout
