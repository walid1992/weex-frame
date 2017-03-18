# weex-frame

> 基于weex集成的android、ios、h5框架~

# 项目结构

```
weex-frame
├── android (android项目)
│       
├── ios （ios项目代码）
│
├── src （weex模块）
│      ├── api (api模块)
│      ├── components（组件模块） 
│      ├── constants（常量配置）   
│      ├── utils （工具模块）   
│      └── views（视图模块）  
│
└── dist （build输出模块）
       ├── weex (native使用jsbundle)
       └── web（web使用jsbundle） 
```

# 获取项目

1. git clone https://github.com/osmartian/weex-frame.git
2. cd weex-frame
3. npm install

# npm 指令

1. npm run build
2. npm run dev
3. nom run serve

# 启动项目

1. cd weex-frame
2. ./start
3. h5 打开 [http://localhost:12580/weex.html](http://localhost:12580/weex.html)

## android 启动

1. 打开andorid studio
2. File -> New -> Import Project -> weex-frame/android -> 启动

## iOS 启动

1. cd ios
2. pod install (未安装pod，请先安装)
3. open WeexFrame.xcworkspace
