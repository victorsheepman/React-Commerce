import * as React from "react"
import { Card } from "../components/Card/Card"

import Layout from "../containers/layout"
import { ProductWrapper } from "../containers/ProductWrapper/ProductWrapper"
const IndexPage = () => {
  const array = [1,2,3,4,5,6,7,8,9];
  return (
  <Layout>
    <ProductWrapper>
      {array.map((item) => (
        <Card key={item} img={'Sudadera.png'} color={'red'}/>
      ))}
    </ProductWrapper>
  </Layout>
)}

export default IndexPage
