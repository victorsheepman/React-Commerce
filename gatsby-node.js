const path = require("path")

exports.createPages = async ({graphql, actions }) => {
//variables
  const { createPage } = actions
  const productTemplate = path.resolve(`src/templates/using-dsg.js`);
  const products = await graphql(`
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

//capturar error
  if (products.errors){ throw products.errors;}
  debugger;
//rcrear template
  products.data. allStripePrice.edges.forEach(({ node }) => {
    createPage({
      path:`${node.id}`,
      component: productTemplate,
      context: node
    });
  });
 
}
