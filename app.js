import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// 配置 Express 来解析 JSON 格式的请求体
app.use(express.json());

// 使用 express.static 中间件来提供静态文件
app.use(express.static(path.join(__dirname)));

// 处理 GET 请求到 /login 的路由，发送登录页面
app.get('/login', (req, res) => {
    const filePath = path.join(__dirname, 'login.html');
    res.sendFile(filePath);
});


// 处理 POST 请求到 /login 的路由，用于登录逻辑
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);

    // 简单的登录验证逻辑
    if (username === "admin" && password === "555888") {
        res.status(200).send("登录成功！");
    } else {
        res.status(401).send("用户名或密码错误");
    }
});

// 配置服务器监听端口
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
