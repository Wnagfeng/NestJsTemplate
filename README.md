<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
<div  class="box"  style="    display: flex;    justify-content: center;    align-items: center;    flex-direction: column; ">  <h1 align="center">Welcome to NestJsTemplate 👋</h1> 
     <h2 align="center"> 一款开箱即用的NestJs开发模板  😀</h2> 
     <h2 align="center"> CoderJoon  🐂</h2>


## 1.功能列表

- [ ] 已配置热重载(优化您的开发体验)
- [x] 多环境配置Config文件(测试、生产、数据库....)
- [x] 全局错误处理
- [x] Winston日志记录

### 1.1已知问题

想要使用热重载就别想自动导入entitys！

想要使用自动导入entitys就别用热重载！

如果您想配置热重载 你可以配置一个手动统一导入entitys，然后看一下我的博客教程！

这里我为了能统一读取到src下面的entitys我就不配置热重载了

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
当您在打包的时候建议吧config拷贝一下到dist目录下面这是bug
