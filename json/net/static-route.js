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
		"/api/ad/v3/net/static-route/": {
			"description": "静态路由配置相关操作",
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
					"static-route"
				],
				"summary": "get all static-route",
				"description": "获取静态路由配置",
				"operationId": "get_static_route_list",
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
						"$ref": "#/responses/operation_config_static_route_list"
					}
				}
			},
			"post": {
				"tags": [
					"static-route"
				],
				"summary": "create new static-route",
				"description": "新建静态路由配置",
				"operationId": "add_static_route_list",
				"parameters": [
					{
						"$ref": "#/parameters/STATIC-ROUTE-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_static_route_object"
					}
				}
			},
			"patch": {
				"deprecated": true,
				"tags": [
					"static-route"
				],
				"summary": "modify static-route",
				"description": "修改静态路由配置",
				"operationId": "edit_static_route_list",
				"parameters": [
					{
						"$ref": "#/parameters/STATIC-ROUTE-PROPERTY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_static_route_list"
					}
				}
			},
			"__sfcli_example__": [
				{
					"command": "list net static-route",
					"description": "获取全部静态路由配置"
				},
				{
					"command": "list net static-route to-client1",
					"description": "获取指定静态路由to-client1置"
				},
				{
					"command": " create net static-route test_route gateway 192.168.0.200 subnet 192.168.200.3/12",
					"description": "创建名称为test_route的静态路由 其网关为192.168.0.200，子网为192.168.200.3/12"
				},
				{
					"command": "modify net static-route test_route gateway 192.168.5.200",
					"description": "修改静态路由test_route的网关为192.168.5.100"
				},
				{
					"command": "delete net static-route test_route",
					"description": "删除静态路由test_route"
				}
			]
		},
		"/api/ad/v3/net/static-route/{name}": {
			"description": "静态路由配置相关操作",
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
					"static-route"
				],
				"summary": "get specific static-route",
				"description": "获取静态路由配置",
				"operationId": "get_static-route",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_static_route_object"
					}
				}
			},
			"post": {
				"deprecated": true,
				"tags": [
					"static-route"
				],
				"summary": "create new static-route",
				"description": "新建静态路由配置",
				"operationId": "create_static-route",
				"parameters": [
					{
						"$ref": "#/parameters/STATIC-ROUTE-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_static_route_object"
					}
				}
			},
			"put": {
				"tags": [
					"static-route"
				],
				"summary": "replace specific static-route",
				"description": "修改静态路由配置",
				"operationId": "replace_static-route",
				"parameters": [
					{
						"$ref": "#/parameters/STATIC-ROUTE-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_static_route_object"
					}
				}
			},
			"patch": {
				"tags": [
					"static-route"
				],
				"summary": "modify specific static-route",
				"description": "修改静态路由配置",
				"operationId": "edit_static-route",
				"parameters": [
					{
						"$ref": "#/parameters/STATIC-ROUTE-PROPERTY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_static_route_object"
					}
				}
			},
			"delete": {
				"tags": [
					"static-route"
				],
				"summary": "delete specific static-route",
				"description": "删除静态路由配置",
				"operationId": "delete_static-route",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_static_route_object"
					}
				}
			}
		}
	},
	"parameters": {
		"STATIC-ROUTE-CONFIG": {
			"name": "STATIC-ROUTE-CONFIG",
			"in": "body",
			"required": true,
			"description": "JSON Config Object",
			"schema": {
				"$ref": "#/definitions/config.static_route"
			}
		},
		"STATIC-ROUTE-PROPERTY": {
			"name": "STATIC-ROUTE-PROPERTY",
			"in": "body",
			"required": true,
			"description": "JSON Config Properties",
			"schema": {
				"$ref": "#/definitions/config.static_route"
			}
		}
	},
	"responses": {
		"operation_config_static_route_list": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.static_route_list"
			}
		},
		"operation_config_static_route_object": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.static_route"
			}
		}
	},
	"definitions": {
		"config.static_route_list": {
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
					"description": "当前项目列表",
					"type": "array",
					"items": {
						"$ref": "#/definitions/config.static_route"
					}
				}
			}
		},
		"config.static_route": {
			"type": "object",
			"required": [
				"name",
				"subnet",
				"gateway"
			],
			"properties": {
				"name": {
					"description": "配置名称",
					"type": "string",
					"example": "intranet",
					"maxLength": 511,
					"minLength": 1
				},
				"description": {
					"description": "管理标签及备注描述信息",
					"type": "string"
				},
				"state": {
					"description": "启/禁用（ENABLE-启用/DISABLE-禁用）",
					"type": "string",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"default": "ENABLE",
					"example": "ENABLE"
				},
				"subnet": {
					"description": "子网范围",
					"type": "string",
					"example": "192.168.0.0/16"
				},
				"gateway": {
					"description": "网关（集群模式下默认网关）",
					"type": "string",
					"example": "192.168.1.1"
				},
				"cluster_gateways": {
					"description": "集群成员网关列表（仅在集群模式下生效）",
					"type": "array",
					"items": {
						"description": "单个集群网关配置",
						"type": "object",
						"required": [
							"gateway",
							"associated_member"
						],
						"properties": {
							"gateway": {
								"description": "网关地址",
								"type": "string",
								"example": "192.168.1.1"
							},
							"associated_member": {
								"description": "分配集群成员",
								"type": "string",
								"example": "{member}",
								"maxLength": 511,
								"minLength": 1
							}
						}
					},
					"maxItems": 16
				},
				"priority": {
					"description": "路由权重/代价值",
					"type": "integer",
					"default": 10,
					"example": 10,
					"maximum": 100,
					"minimum": 1
				},
				"redistribute": {
					"description": "支持动态路由重分发（ENABLE-启用/DISABLE-禁用）",
					"type": "string",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"default": "DISABLE",
					"example": "ENABLE"
				},
				"monitor_detect": {
					"description": "网关健康检查（ENABLE-启用/DISABLE-禁用）",
					"type": "string",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"default": "DISABLE",
					"example": "ENABLE"
				}
			}
		}
	}
}