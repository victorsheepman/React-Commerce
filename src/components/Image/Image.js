import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
export const Image = (props) => {
    
   const imageQuery = useStaticQuery(
        graphql`query{
            allFile(filter: {ext: {regex: "/(jpg)|(png)/"}}) {
               edges {
                  node {
                     base
                         childImageSharp {
                            gatsbyImageData(transformOptions: {fit: CONTAIN})
                         }
                      }
                   }
                }
        }`
   )
        
    const data = imageQuery.allFile.edges.find(edge => {
        return edge.node.base === props.image
    })

    const image = getImage(data.node)

    return (
       <GatsbyImage image={image} alt={props.alt}/>
    )
};
