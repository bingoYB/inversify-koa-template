define({ "api": [
  {
    "type": "Get",
    "url": "/get",
    "title": "index",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>索引ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "id",
          "content": "id = 1",
          "type": "number"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n  \"name\": \"小王\",\n  \"email\": \"test@111\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/controllers/indexController.ts",
    "groupTitle": "User",
    "name": "GetGet"
  },
  {
    "type": "Post",
    "url": "/add",
    "title": "add",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "User",
          "content": "{\n   \"name\":'123',\n   'email':'123@qweq.com'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/controllers/indexController.ts",
    "groupTitle": "User",
    "name": "PostAdd"
  }
] });
