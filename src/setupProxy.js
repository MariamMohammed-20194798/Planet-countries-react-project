const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/restcountries",
    createProxyMiddleware({
      target: "https://api.restcountries.com",
      changeOrigin: true,
      pathRewrite: { "^/api/restcountries": "" },
      onProxyReq: (proxyReq) => {
        const apiKey = process.env.REACT_APP_REST_COUNTRIES_API_KEY;
        if (apiKey) {
          proxyReq.setHeader("Authorization", `Bearer ${apiKey}`);
        }
      },
    })
  );
};
