# NoteBook

* 安装`grunt`实现自动重启服务，安装`grunt-cli`实现在任意目录调用

* grunt运行报错：

```
Loading "gruntfile.js" tasks...ERROR
>> SyntaxError: Unexpected token :
Warning: Task "default" not found. Use --force to continue.

Aborted due to warnings.
```

> [谷歌解答](https://stackoverflow.com/questions/28343633/loading-gruntfile-js-tasks-error-syntaxerror-unexpected-identifier-warni) 仔细检查发现原来是标点符号错了

* node报错：

```
Error: listen EADDRINUSE :::3000
```
> 原因启动了多个git brash窗口启动同一个服务造成端口被占用

* 后续测试时发现不能注释`app.listen(port)`否则无法启动服务，导致无法显示页面。
