import * as React from "react"
import Seo from "../components/seo"
import { Detail } from "../components/Detail/Detail"
import Header from '../components/Header/Header'
const UsingDSG = ({pageContext}) =>(
  <>
    <Seo title={pageContext.product.name}/>
    <Header />
    <Detail />
  </>
)

export default UsingDSG
