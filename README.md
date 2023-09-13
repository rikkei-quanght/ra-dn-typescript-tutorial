#

## Cấp quyền thực thi cho Windows
```shell
Set-ExecutionPolicy RemoteSigned
```

> Chọn option [All]

## Install Typescript

Chuột phải vào Start -> chọn Windows Powershell (Admin)
```shell
npm install -g typescript ts-node
```

## Biên dịch `index.ts` sang `index.js`
```shell
tsc .\index.ts
```

## Thực thi file `index.js` sau khi biên dịch
```shell
node .\index.js
```

# Thực thi TS qua `ts-node`
```shell
ts-node .\index.ts
```
