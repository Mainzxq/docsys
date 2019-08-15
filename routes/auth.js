const Router = require("koa-router");
const jwt = require("koa-jwt");

const secret = "aiwozhonghuaaiwozhonghua";
const authRouter = new Router({ prefix: "/auth" });
const auth = jwt({ secret });

// 请求授权验证， 不受限
authRouter.get("/");

// 请求token验证， 不受限
authRouter.get("/:token");

// 请求授权信息， 自有受限
authRouter.get("/info");

module.exports = authRouter;
 