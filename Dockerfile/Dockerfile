FROM node:latest

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json（如果存在）
COPY package*.json ./

# 安装依赖
RUN npm install

# 设置时区
ENV TZ=Asia/Shanghai

# 复制应用程序的其他文件
COPY . .

# 暴露端口
EXPOSE 8080

# 启动命令
CMD ["node", "app.js"]
