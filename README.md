# DS Usage

独立的 DeepSeek Harness 用量插件：Token 账本、按模型的走势图、热力日历，统计这台 DSH 上每一次模型调用。

数据全量从 Session 日志重建，账本存在自己的 `$DSH_HOME/ds-usage` 下，不依赖任何其他插件。

## 它做什么

- **逐调用记账**：扫每个 Session 的日志（历史调用也计入），日志之外的调用（压缩、标题、识图等）在流经时实时计量。
- **用量窗口**：侧边栏底部的「用量」按钮打开——Token 总量、缓存命中率、输出、调用次数，按模型堆叠的走势图，模型排行，近一年活跃度热力图。
- **钻取**：点任意模型看它的单独页面；时间范围支持预设（24 小时～12 个月）和日历自定义。
- **中文界面**：默认中文，也可跟随 DSH 的语言设置。

## 安装

```bash
dsh plugin --profile desktop add /path/to/ds-usage-0.2.3.tgz
```

或手动装进 profile（`~/.dsh/profiles/desktop`）：

```bash
cd ~/.dsh/profiles/desktop
pnpm add /path/to/ds-usage-0.2.3.tgz
```

`package.json` 里的 `dsh.bundle.patch` 声明让 dsh 启动时自动挂载 host 插件；浏览器侧通过 `dsh.client` 清单发现 `client.js`。装好后重启 DeepSeek Harness。

## 语言

窗口默认中文。想跟随 DSH 的语言设置，在浏览器控制台执行：

```js
localStorage.setItem('ds-usage.language', 'auto')   // 跟随应用
localStorage.setItem('ds-usage.language', 'en')     // 强制英文
localStorage.setItem('ds-usage.language', 'zh')     // 强制中文（默认）
```

## 从源码构建

```bash
npm install          # 只需要 esbuild
npm test             # 账本与数据层的测试
npm run build        # 生成 client.js（构建产物已提交，装 tarball 无需构建）
```

## 结构

```
src/host/index.js    插件壳：rt（state/load/warn/catalog）+ POST /api/usage 路由
src/host/usage.js    用量账本：扫描 Session 日志、实时计量、SQLite
src/client/          浏览器侧：UsagePage、对话框、i18n、样式、API
client.js            构建产物（esbuild bundle）
cordis.patch.yml     挂载声明
```

## 数据

账本在 `$DSH_HOME/ds-usage/usage.sqlite`（SQLite，WAL 模式）。删掉它下次启动会全量重扫 Session 日志重建。

## 许可

Apache-2.0。用量账本与页面源自 [DS Bot](https://github.com/Fei2411/DeepSeek-Bot)（Apache-2.0）的 Usage 功能，提取后改造为独立插件。
