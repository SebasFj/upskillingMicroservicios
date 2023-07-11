const {createProxyMiddleware} = require("http-proxy-middleware")
require("dotenv").config();
const {PL_PORT, FL_PORT, CH_PORT} = process.env;

module.exports = (path)=>{
    let paths = {
        characters: CH_PORT,
        planets: PL_PORT,
        films: FL_PORT
    }
    let port = paths[path]
    let url = `http://${path}:${port}`;
    // let url = `http://localhost:${port}`;
    return createProxyMiddleware({
        target: url,
        changeOrigin:true,
        pathRewrite: {
          [`^/${path}`]: '/'
        }
    })
}