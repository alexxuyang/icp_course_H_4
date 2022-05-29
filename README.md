# icp_course_H_4

安装依赖包
`npm install`


启动服务
`dfx start --clean`


安装canister
```rust
dfx deploy --with-cycles=5000000000000 --argument '(2, vec {principal "cnh44-cjhoh-yyoqz-tcp2t-yto7n-6vlpk-xw52p-zuo43-rrlge-4ozr5-6ae"; principal "ndb4h-h6tuq-2iudh-j3opo-trbbe-vljdk-7bxgi-t5eyp-744ga-6eqv6-2ae"; principal "lzf3n-nlh22-cyptu-56v52-klerd-chdxu-t62na-viscs-oqr2d-kyl44-rqe"})'
```

启动前端本地服务
`npm start`


打开本地网页：http://localhost:8080/


执行自动测试脚本
`ic-repl ./create-install-start-call-stop-upgrade-start-call.sh`


并同时观察前端页面

[![Watch the video](https://github.com/alexxuyang/icp_course_H_4/blob/main/images/001.png)](https://youtu.be/_-YO9iXb3KM)
