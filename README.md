# by devnolife

## _SIMPLE CRUD NODEJS WITH PRISMA JS_

![Prisma](https://i.imgur.com/h6UIYTu.png)

<div align="center">
  <h1>Prisma</h1>
  <a href="https://www.npmjs.com/package/prisma"><img src="https://img.shields.io/npm/v/prisma.svg?style=flat" /></a>
  <a href="https://github.com/prisma/prisma/blob/main/CONTRIBUTING.md"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
  <a href="https://github.com/prisma/prisma/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-Apache%202-blue" /></a>
  <a href="https://slack.prisma.io/"><img src="https://img.shields.io/badge/chat-on%20slack-blue.svg" /></a>
  <br />
  <br />
  <a href="https://www.prisma.io/docs/getting-started/quickstart">Quickstart</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://www.prisma.io/">Website</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://www.prisma.io/docs/">Docs</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://github.com/prisma/prisma-examples/">Examples</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://www.prisma.io/blog">Blog</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://slack.prisma.io/">Slack</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://twitter.com/prisma">Twitter</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://github.com/prisma/prisma1">Prisma 1</a>
  <br />
  <hr />
</div>


## Install npm dependencies:

```
cd crud-node-prisma
npm install
```


## API Reference

#### Get all mahasiswa

```http
  GET /all-mahasiswa
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| ``        | `string` | Untuk Semua Data Mahasiswa |

#### Create mahasiswa

```http
  POST /crate-mahasiswa
```

| Body   | Type     | Description                        |
| :----- | :------- | :--------------------------------- |
| `Nama` | `string` | **Required**. Untuk Nama Mahasiswa |
| `Nim`  | `string` | **Required**. Untuk Nim Mahasiswa  |


#### Update Mahasiswa

```http
  UPDATE /update-mahasiswa/${nim}
```

| Parameter | Type     | Description                              |
| :-------- | :------- | :--------------------------------------- |
| `nim`     | `string` | **Required**.Sebagai Penanda Unik Update |

| Body   | Type     | Description                        |
| :----- | :------- | :--------------------------------- |
| `Nama` | `string` | **Required**. Untuk Nama Mahasiswa |

```http
  DELETE /delete-mahasiswa/${nim}
```

| Parameter | Type     | Description                              |
| :-------- | :------- | :--------------------------------------- |
| `nim`     | `string` | **Required**.Sebagai Penanda Unik Update |
