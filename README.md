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
> 原因是已经在`gruntfile.js`文件中配置了监听的端口，在`app.js`文件中再次去监听相同端口所以报错了，注释掉`app.js`中的`app.listen('3000')`
