import * as React from "react"
import Seo from "../components/seo"
import { Detail } from "../components/Detail/Detail"
import Header from '../components/Header/Header'
import { Cart } from "../components/Cart/Cart"
const UsingDSG = ({pageContext}) =>(
  <>
    <Seo title={pageContext.product.name}/>
    <Header />
    <Detail {...pageContext} />
  </>
)

export default UsingDSG
