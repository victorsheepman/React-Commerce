/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
//import "./src/main.scss"
const React = require("react")
const Layout = require("./src/containers/layout").default
const { Provider } = require("./src/context/cartContext")

exports.wrapRootElement = ({ element }) => (
    <Provider>
        <Layout>
            {element}   
        </Layout>
    </Provider>
  );