const Koa = require('koa');
const KoaRouter = require('koa-router');
const json = require('koa-json');

const dataMaker = require('./dataMaker.js');

const app = new Koa();
const router = new KoaRouter();

const serverPort = 4444;


app.use(json());


router.get('/hosts', ctx => ctx.body = dataMaker.getHostNode());
router.get('/hosts/:count', ctx => {
  const count = Number.parseInt(ctx.params.count);
  const hostArray = Array.apply(null, Array(count));
  const hosts = hostArray.map(dataMaker.getHostNode);  
  return ctx.body = {data: hosts};
});

router.get('/nodes', ctx => ctx.body = dataMaker.getContainerNode());
router.get('/nodes/:count', ctx => {
  const count = Number.parseInt(ctx.params.count);
  const nodeArray = Array.apply(null, Array(count));
  const nodes = hostArray.map(dataMaker.getHostNode);  
  return ctx.body = {data: nodes};
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(serverPort, () => console.log(`Server started on Port: ${serverPort}`));

module.exports = app;
