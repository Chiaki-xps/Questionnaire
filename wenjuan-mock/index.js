const Koa = require("koa");
const Router = require("koa-router");
const cors = require("@koa/cors");
const mockList = require("./mock/index");

const app = new Koa();
const router = new Router();

app.use(cors());

async function getRes(fn, ctx) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = fn(ctx);
      resolve(res);
    }, 1000);
  });
}

// 注册 mock 路由
mockList.forEach((item) => {
  // url 请求路径，method 请求方法，response 响应结果
  const { url, method, response } = item;
  router[method](url, async (ctx) => {
    // const res = response()
    const res = await getRes(response, ctx); // 模拟网络请求的加载状态，1s
    ctx.body = res; // 输入结果
  });
});

app.use(router.routes());
app.listen(3001); // port 端口
