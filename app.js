const Koa = require("koa");
const koaBody = require("koa-body");
const path = require("path");
const koaParams = require("koa-parameter");
const cors = require("koa2-cors");
const jError = require("koa-json-error");
const mongoose = require("mongoose");
require("dotenv").config()

const app = new Koa()