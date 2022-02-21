import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import { Card } from "../components/Card/Card"

import Layout from "../containers/layout"
import { ProductWrapper } from "../containers/ProductWrapper/ProductWrapper"
const IndexPage = () => {
  const array = useStaticQuery(
    graphql`
    query GET_PRODUCT{
      allStripePrice {
        edges {
          node {
            id
            price: unit_amount
            product {
              name
              description
              images
              metadata {
                color
              }
            }
          }
        }
      }
    }`
  );
    console.log(array.allStripePrice.edges);
  const products = array.allStripePrice.edges;
  return (
  <Layout>
    <ProductWrapper>
      {products.map((item) => (
        <Card key={item.node.id} id={item.node.id} img={item.node.product.images[0]} description={item.node.product.description} name={item.node.product.name} color={item.node.product.metadata.color}/>
      ))}
    </ProductWrapper>
  </Layout>
)}

export default IndexPage
