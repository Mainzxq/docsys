const Router = require("koa-router");
const jwt = require("koa-jwt");

const secret = "aiwozhonghuaaiwozhonghua";
const userRouter = new Router({ prefix: "/users" });
const auth = jwt({ secret });

// 查看所有用户信息 受限
userRouter.get("/all");

// 查看部分用户信息 受限
userRouter.get("/:id");

// 查看本身信息 自有权限
userRouter.get("/self_info");

// 创建用户信息，登陆后的创建，受限
userRouter.post("/");

// 修改其他用户信息，登陆后修改， 受限
userRouter.patch("/:id");

// 修改自身用户信息，登陆后修改，不使用uid， 自有权限
userRouter.patch("/self_info");

// 删除用户，登陆后删除， 最严格的权限控制
// 用户自身不能删除自身
userRouter.delete("/:id");

module.exports = userRouter;
