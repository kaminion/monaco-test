# 바벨 설정

- @babel/core
- @babel/preset-env
- @babel/preset-react

# 모나코 에디터 dependency

- @nteract/monaco-editor (react 버전 이슈 존재)
- 모나코에디터 웹팩 플러그인 이슈 존재 (플러그인 정보)[https://github.com/microsoft/monaco-editor/tree/main/webpack-plugin]

# TS 컴파일 이슈

- 모든 node_modules 폴더 검사하는 이슈
- Change exclude: /node_modules/ to exclude: path.resolve(\_\_dirname, '/node_modules')
- (해결링크)[http://blog.timwheeler.io/webpack-and/]

# 이외 이슈

- 웹 팩 alias설정같은 경우 이들이 사용하는 webpack config 패키지로 해결
- ...configurator.mergeDefaultAliases() 추가 (alias)
- lodash 이슈 - lodash.isequal 모듈 설치
