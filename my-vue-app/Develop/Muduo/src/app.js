const express = require('express');
const path = require('path');

const app = express();

// 配置 Express 来解析 JSON 格式的请求体
app.use(express.json());

// 处理 GET 请求到 /login 的路由，发送登录页面
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../Muduo/login.html'));
});

// 处理 POST 请求到 /login 的路由，用于登录逻辑
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);

    // 简单的登录验证逻辑
    if (username === "admin" && password === "555888") {
        // 登录成功
        res.status(200).send("登录成功！");
    } else {
        // 登录失败
        res.status(401).send("用户名或密码错误");
    }
});

// 配置服务器监听端口
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
