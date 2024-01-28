import express from 'express';
import path from 'path';

const app = express();

// 这里是其他的路由和中间件配置

// 配置用于解析 JSON 格式请求体的中间件
app.use(express.json());

// 处理 GET 请求到 /login 的路由
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../Muduo/login.html'));
});

// 处理 POST 请求到 /login 的路由
app.post('/login', (req, res) => {
    // 这里是处理登录逻辑的代码
    console.log(req.body); // 打印请求体，查看接收到的数据

    // 根据登录逻辑发送响应
    // 示例：res.send('登录成功！');
});


// 配置服务器监听端口
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
