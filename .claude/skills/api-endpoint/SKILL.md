---
name: api-endpoint-generator
version: 1.0
description: 为指定的数据模型生成标准的 CRUD API 端点
trigger: ["创建API", "生成端点", "新建接口"]
---
# RESTful API 端点生成器
## 输入参数
- modelName（必填）：数据模型名称（如 "bookmark"、"tag"）

- fields（必填）：模型字段列表
- operations（可选，默认全部）：需要的操作（create/read/update/delete/list）
## 执行步骤
1. 在 `src/app/api/{modelName}s/` 目录下创建 `route.ts`
2. 实现以下端点：
- GET /api/{modelName}s → 获取列表（支持分页、搜索）
- POST /api/{modelName}s → 创建
- GET /api/{modelName}s/[id] → 获取单个
- PUT /api/{modelName}s/[id] → 更新
- DELETE /api/{modelName}s/[id] → 删除
3. 代码规范：
- 使用 Prisma Client 操作数据库
- 统一返回格式参考 `resources/config/response-format.json`
- 包含输入验证
- 包含错误处理（try-catch）
4. 创建完成后，列出所有 API 端点的 URL 和用法