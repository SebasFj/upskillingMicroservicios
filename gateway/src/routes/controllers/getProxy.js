const {createProxyMiddleware} = require("http-proxy-middleware")
require("dotenv").config();
const {PL_PORT, FL_PORT, CH_PORT} = process.env;

module.exports = (path)=>{
    let port;
    switch(path){
        case "characters":
            port = CH_PORT;
            break;
        case "films":
            port = FL_PORT;
            break;
        case "planets":
            port = PL_PORT;
            break;
        default:
            break;
    }
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