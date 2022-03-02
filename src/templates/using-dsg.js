import * as React from "react"
import Seo from "../components/seo"
import { Detail } from "../components/Detail/Detail"
const UsingDSG = ({pageContext}) =>(
  <>
    <Seo title={pageContext.product.name}/>
    <Detail {...pageContext} />
  </>
)

export default UsingDSG
