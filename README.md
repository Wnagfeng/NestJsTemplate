<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
<div  class="box"  style="    display: flex;    justify-content: center;    align-items: center;    flex-direction: column; ">  <h1 align="center">Welcome to JoonStore 👋</h1> 
     <h2 align="center"> 一款配置好的NestJs开发模板  😀</h2> 
     <h2 align="center"> CoderJoon  🐂</h2>

## 1.功能列表

- [x] 已配置热重载(优化您的开发体验)
- [ ] 多环境配置(测试、生产、数据库....)
- [ ] 接口文档、接口请求安全&性能
- [ ] 用户、权限、菜单、日志...



## 2.架构设计


![架构设计](https://github.com/Wnagfeng/NestJsTemplate/blob/main/imgs/%E6%9E%B6%E6%9E%84%E8%AE%BE%E8%AE%A1.png)
![架构设计1](https://github.com/Wnagfeng/NestJsTemplate/blob/main/imgs/%E6%9E%B6%E6%9E%84%E8%AE%BE%E8%AE%A12.jpg)



## 3.Debug方法：

这是我的Vscode配置Debug文件

````json
{
    // 使用 IntelliSense 了解相关属性。 
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Launch via NPM",
            "request": "launch",
            "runtimeArgs": [
                "run-script",
                "start:debug"//Nestjs的debug命令
            ],
            "runtimeExecutable": "npm",
            "runtimeVersion": "18.12.0",//你的node版本
            "internalConsoleOptions": "neverOpen",//不要启动内置打印
            "skipFiles": [
                "<node_internals>/**"
            ],
            "type": "node"
        }
    ]
}
````

