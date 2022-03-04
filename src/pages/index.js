import { graphql, useStaticQuery } from "gatsby"
import React, {useContext} from "react"
import { Card } from "../components/Card/Card"
import { Hero } from "../components/Hero/Hero"
import { ProductWrapper } from "../containers/ProductWrapper/ProductWrapper"
import { cartContext } from '../context/cartContext';
import { useFilter } from "../Hooks/useFilter"
const IndexPage = () => {
  const {filter} = useContext(cartContext)
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
                type
              }
            }
          }
        }
      }
    }`
  );
   
  //const products = filter === 'todo' ? array.allStripePrice.edges : array.allStripePrice.edges.filter(i => i.node.product.metadata.type === 'fogazzi')
  const products = useFilter(filter, array.allStripePrice.edges);
  return (
  <>
    <Hero />
    <ProductWrapper>
      {products.map((item) => (
        <Card key={item.node.id} id={item.node.id} img={item.node.product.images[0]} description={item.node.product.description} name={item.node.product.name} color={item.node.product.metadata.color}/>
      ))}
    </ProductWrapper>
  </>
)}

export default IndexPage
