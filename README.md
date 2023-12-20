



### 项目名称

# Vue3 + Vite + TS + Tailwind CSS 纯净模板

项目的目录结构如下：

- `.env.development`, `.env.production`, `.env.test`: 环境配置文件
- `.eslintrc.cjs`: ESLint配置文件
- `.gitignore`: Git忽略文件
- `.idea`, `.vscode`: IDE配置目录
- `README.md`: 项目说明文档
- `dist`: 构建输出目录
- `index.html`: 入口HTML文件
- `node_modules`: 依赖包目录
- `package-lock.json`, `package.json`: Node包管理和配置文件
- `postcss.config.js`: PostCSS配置文件
- `public`: 公共资源目录
- `src`: 源代码目录
- `tailwind.config.ts`: Tailwind CSS配置文件
- `tsconfig.json`, `tsconfig.node.json`: TypeScript配置文件
- `vite.config.ts`: Vite配置文件
- `yarn.lock`: Yarn锁文件



## 介绍

这是一个使用 Vue3、Vite、ESLint、Pinia、Tailwind CSS 和 Element-Plus 框架的纯净模板项目。下载以后就可以直接使用，它旨在为开发者提供一个干净、高效的起点，适用于快速启动新的前端项目。主要作用为：简化项目基础环境搭建，与依赖冲突的解决，以便开发者进行快速项目开发。

## 技术栈

- **Vue3**: 当前最新的 Vue.js 版本，提供了组合式 API 和更快的性能。
- **Vite**: 高效的前端构建工具，提供快速的热重载和更少的配置。
- **Tyscript**: JS的超集，提供更好的类型检查，和类型提示
- **ESLint**: 代码质量和风格检查工具，确保代码一致性和避免错误。
- **Pinia**: Vue 的状态管理库，用于管理应用的全局状态。
- **Tailwind CSS**: 功能类优先的 CSS 框架，用于快速设计 UI。
- **Element-Plus**: Vue 3 的 UI 组件库，提供丰富的组件用于构建界面。

## 安装要求

- **Node.js**: 版本需在 18 至 20 之间。

## 安装步骤

1. 克隆项目到本地：

   ```
   git clone https://github.com/fengjun2022/Vue3-Vite-TS-Tailwind-CSS-template.git
   ```

2. 进入项目目录：

   ```
   cd [项目目录]
   ```

3. 安装依赖：

   ```
   npm install
   ```

   或者使用 Yarn：

   ```
   yarn
   ```

## 运行项目

- 启动开发服务器：

  ```
  npm run dev
  ```

  或者使用 Yarn：

  ```
  yarn dev
  ```

- 构建生产版本：

  ```
  npm run build:prod
  ```

  或者使用 Yarn：

  ```
  yarn build
  ```

## 项目结构

```
csharpCopy code项目根目录
├── .env.*            # 环境配置文件
├── .eslintrc.cjs     # ESLint配置
├── .gitignore        # Git忽略文件
├── .idea             # IDE配置
├── .vscode           # VSCode配置
├── README.md         # 项目文档
├── dist              # 构建输出
├── index.html        # 入口HTML文件
├── node_modules      # 依赖目录
├── package*.json     # 包管理文件
├── postcss.config.js # PostCSS配置
├── public            # 公共资源
├── src               # 源代码
├── tailwind.config.ts # Tailwind配置
├── tsconfig*.json    # TypeScript配置
├── vite.config.ts    # Vite配置
└── yarn.lock         # Yarn锁文件
```

## 贡献

如果你想为这个项目贡献代码，欢迎提交 Pull Request 或开 Issue 讨论新功能。

​                                                           作者：冯骏

## 许可

MIT License           
