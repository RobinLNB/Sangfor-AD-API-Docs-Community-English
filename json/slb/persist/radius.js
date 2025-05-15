module.exports ={
	"swagger": "2.0",
	"info": {
		"$ref": "/api/{common}.yaml#/info"
	},
	"host": {
		"$ref": "/api/{common}.yaml#/host"
	},
	"basePath": {
		"$ref": "/api/{common}.yaml#/basePath"
	},
	"schemes": {
		"$ref": "/api/{common}.yaml#/schemes"
	},
	"consumes": {
		"$ref": "/api/{common}.yaml#/consumes"
	},
	"produces": {
		"$ref": "/api/{common}.yaml#/produces"
	},
	"securityDefinitions": {
		"basic_auth": {
			"$ref": "/api/{common}.yaml#/securityDefinitions/basic_auth"
		},
		"token_auth": {
			"$ref": "/api/{common}.yaml#/securityDefinitions/token_auth"
		}
	},
	"paths": {
		"/api/ad/v3/slb/persist/radius/": {
			"description": "新建、查看会话保持（radius）配置",
			"parameters": [
				{
					"$ref": "/api/{common}.yaml#/parameters/token"
				},
				{
					"$ref": "/api/{common}.yaml#/parameters/all_properties"
				},
				{
					"$ref": "/api/{common}.yaml#/parameters/select"
				},
				{
					"$ref": "/api/{common}.yaml#/parameters/netns"
				}
			],
			"get": {
				"tags": [
					"persist"
				],
				"summary": "get all persist-radius",
				"description": "查看已有会话保持（radius）配置信息列表",
				"operationId": "get_persist_radius_list",
				"parameters": [
					{
						"$ref": "/api/{common}.yaml#/parameters/select"
					},
					{
						"$ref": "/api/{common}.yaml#/parameters/skip"
					},
					{
						"$ref": "/api/{common}.yaml#/parameters/top"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_persist_radius_list"
					}
				}
			},
			"post": {
				"tags": [
					"persist"
				],
				"summary": "create new persist-radius",
				"description": "新建会话保持（radius）配置",
				"operationId": "add_persist_radius_list",
				"parameters": [
					{
						"$ref": "#/parameters/PERSIST-RADIUS-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_persist_radius_object"
					}
				}
			},
			"__sfcli_example__": [
				{
					"command": "create slb persist radius testradius radius_attribute_id 20 record_scope global busy_protect enable",
					"description": "新建radius会话保持testradius,radius属性ID为20,作用域为全局,启用繁忙保护"
				},
				{
					"command": "modify slb persist radius testradius radius_attribute_id 30",
					"description": "修改radius会话保持的radius属性ID为30"
				},
				{
					"command": "list slb persist radius testradius",
					"description": "查看会话保持testradius的配置信息"
				}
			]
		},
		"/api/ad/v3/slb/persist/radius/{name}": {
			"description": "查看、新建、修改、删除会话保持（radius）配置",
			"parameters": [
				{
					"$ref": "/api/{common}.yaml#/parameters/token"
				},
				{
					"$ref": "/api/{common}.yaml#/parameters/name"
				},
				{
					"$ref": "/api/{common}.yaml#/parameters/all_properties"
				},
				{
					"$ref": "/api/{common}.yaml#/parameters/select"
				},
				{
					"$ref": "/api/{common}.yaml#/parameters/netns"
				}
			],
			"get": {
				"tags": [
					"persist"
				],
				"summary": "get specific persist-radius",
				"description": "查看指定会话保持（radius）配置",
				"operationId": "get_persist_radius",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_persist_radius_object"
					}
				}
			},
			"post": {
				"deprecated": true,
				"tags": [
					"persist"
				],
				"summary": "create new persist-radius",
				"description": "",
				"operationId": "create_persist_radius",
				"parameters": [
					{
						"$ref": "#/parameters/PERSIST-RADIUS-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_persist_radius_object"
					}
				}
			},
			"put": {
				"tags": [
					"persist"
				],
				"summary": "replace specific persist-radius",
				"description": "修改指定会话保持（radius）配置",
				"operationId": "replace_persist_radius",
				"parameters": [
					{
						"$ref": "#/parameters/PERSIST-RADIUS-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_persist_radius_object"
					}
				}
			},
			"patch": {
				"tags": [
					"persist"
				],
				"summary": "modify specific persist-radius",
				"description": "修改指定会话保持（radius）配置",
				"operationId": "edit_persist_radius",
				"parameters": [
					{
						"$ref": "#/parameters/PERSIST-RADIUS-PROPERTY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_persist_radius_object"
					}
				}
			},
			"delete": {
				"tags": [
					"persist"
				],
				"summary": "delete specific persist-radius",
				"description": "删除指定会话保持（radius）配置",
				"operationId": "delete_persist_radius",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_persist_radius_object"
					}
				}
			}
		}
	},
	"parameters": {
		"PERSIST-RADIUS-CONFIG": {
			"name": "PERSIST-RADIUS-CONFIG",
			"in": "body",
			"required": true,
			"description": "JSON Config Object",
			"schema": {
				"$ref": "#/definitions/config.persist_radius"
			}
		},
		"PERSIST-RADIUS-PROPERTY": {
			"name": "PERSIST-RADIUS-PROPERTY",
			"in": "body",
			"required": true,
			"description": "JSON Config Properties",
			"schema": {
				"$ref": "#/definitions/config.persist_radius"
			}
		}
	},
	"responses": {
		"operation_config_persist_radius_list": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.persist_radius_list"
			}
		},
		"operation_config_persist_radius_object": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.persist_radius"
			}
		}
	},
	"definitions": {
		"config.persist_radius_list": {
			"type": "object",
			"properties": {
				"maximum_items": {
					"description": "配置数量上限",
					"type": "integer",
					"example": 4000
				},
				"total_pages": {
					"description": "总页数",
					"type": "integer",
					"example": 5
				},
				"page_number": {
					"description": "当前页号",
					"type": "integer",
					"example": 5
				},
				"page_size": {
					"description": "每页列表长度",
					"type": "integer",
					"example": 10
				},
				"total_items": {
					"description": "项目总数",
					"type": "integer",
					"example": 48
				},
				"items_offset": {
					"description": "当前项目偏移量",
					"type": "integer",
					"example": 40
				},
				"items_length": {
					"description": "当前页项目数",
					"type": "integer",
					"example": 8
				},
				"items": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/config.persist_radius"
					}
				}
			}
		},
		"config.persist_radius": {
			"type": "object",
			"required": [
				"name"
			],
			"properties": {
				"name": {
					"description": "必选参数；指定会话保持的名称, 在配置中必须唯一。",
					"type": "string",
					"example": "cookie_passive"
				},
				"description": {
					"type": "string",
					"description": "可选参数；用来对此配置增加额外的备注。",
					"example": ""
				},
				"type": {
					"description": "只读字段;指定会话保持的类型",
					"type": "string",
					"enum": [
						"RADIUS"
					],
					"default": "RADIUS"
				},
				"radius_attribute_id": {
					"description": "可选参数;指定会话保持使用的radius属性ID,取值范围为[1,255],默认为1",
					"type": "integer",
					"default": 1,
					"maximum": 255,
					"minimum": 1,
					"example": 1
				},
				"timeout": {
					"description": "可选参数；设置会话保持超时时间。取值范围为[0,31536000],默认为86400",
					"type": "integer",
					"default": 86400,
					"maximum": 31536000,
					"minimum": 0,
					"example": 86400
				},
				"busy_protect": {
					"description": "可选参数；指定繁忙保护的开关，disable表示禁用，enable表示启用；默认禁用。",
					"type": "string",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"default": "DISABLE",
					"example": "DISABLE"
				},
				"record_scope": {
					"description": "可选参数;指定会话保持的作用范围,pool表示在池内生效,vip表示访问相同vip均生效,global表示全局生效,默认为pool",
					"type": "string",
					"enum": [
						"POOL",
						"VIP",
						"GLOBAL"
					],
					"default": "POOL",
					"example": "POOL"
				},
				"shared_secret": {
					"type": "string",
					"description": "密钥长度为0-128字节",
					"minLength": 0,
					"maxLength": 128,
					"example": ""
				},
				"pk_shared_secret": {
					"type": "string",
					"description": "合法的加密密钥,最大长度为4096",
					"maxLength": 4096,
					"example": "A1B2C3D4"
				},
				"encrypted_shared_secret": {
					"type": "string",
					"description": "合法的加密密钥,最大长度为4096",
					"maxLength": 4096,
					"example": "A1B2C3D4"
				}
			}
		}
	}
}