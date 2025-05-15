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
		"/api/ad/v3/net/ospfv3": {
			"description": "ospfv3全局配置相关操作",
			"parameters": [
				{
					"$ref": "/api/{common}.yaml#/parameters/token"
				},
				{
					"$ref": "/api/{common}.yaml#/parameters/all_properties"
				},
				{
					"$ref": "/api/{common}.yaml#/parameters/select"
				}
			],
			"get": {
				"tags": [
					"ospfv3"
				],
				"summary": "get ospfv3",
				"description": "获取ospfv3全局配置",
				"operationId": "get_ospfv3",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_ospfv3_object"
					}
				}
			},
			"put": {
				"tags": [
					"ospfv3"
				],
				"summary": "replace ospfv3",
				"description": "修改ospfv3全局配置",
				"operationId": "replace_ospfv3",
				"parameters": [
					{
						"$ref": "#/parameters/OSPFV3-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_ospfv3_object"
					}
				}
			},
			"patch": {
				"tags": [
					"ospfv3"
				],
				"summary": "modify ospfv3",
				"description": "修改ospfv3全局配置",
				"operationId": "edit_ospfv3",
				"parameters": [
					{
						"$ref": "#/parameters/OSPFV3-PROPERTY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_ospfv3_object"
					}
				}
			},
			"__sfcli_example__": [
				{
					"command": "list net ospfv3",
					"description": "查看ospfv3全局配置信息"
				},
				{
					"command": "modify net ospfv3 redistribute_static_route disable",
					"description": "ospfv3全局配置修改静态路由重分发状态为false"
				}
			]
		}
	},
	"parameters": {
		"OSPFV3-CONFIG": {
			"name": "OSPFV3-CONFIG",
			"in": "body",
			"required": true,
			"description": "JSON Config Object",
			"schema": {
				"$ref": "#/definitions/config.ospfv3"
			}
		},
		"OSPFV3-PROPERTY": {
			"name": "OSPFV3-PROPERTY",
			"in": "body",
			"required": true,
			"description": "JSON Config Properties",
			"schema": {
				"$ref": "#/definitions/config.ospfv3"
			}
		}
	},
	"responses": {
		"operation_config_ospfv3_object": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.ospfv3"
			}
		}
	},
	"definitions": {
		"config.ospfv3": {
			"type": "object",
			"properties": {
				"state": {
					"type": "string",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"description": "ospfv3全局配置状态,enable 表示启用;disable 表示禁用。",
					"default": "ENABLE",
					"example": "ENABLE"
				},
				"route_id": {
					"type": "string",
					"description": "路由器ID，必须为IPv4地址格式。",
					"example": "6.6.6.6"
				},
				"redistribute_direct_route": {
					"type": "string",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"description": "默认路由强制重分发状态,enable 表示启用;disable 表示禁用。",
					"default": "DISABLE",
					"example": "DISABLE"
				},
				"redistribute_static_route": {
					"type": "string",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"description": "静态路由重分发状态,enable 表示启用;disable 表示禁用。",
					"default": "DISABLE",
					"example": "DISABLE"
				},
				"route_aggregate": {
					"description": "域间路由汇聚列表",
					"type": "array",
					"items": {
						"description": "区域间路由汇聚配置",
						"type": "object",
						"required": [
							"area_id",
							"ipv6_prefix"
						],
						"properties": {
							"area_id": {
								"type": "string",
								"description": "区域id，必须为0~4294967295之间的整数。",
								"example": "1.1.1.1"
							},
							"ipv6_prefix": {
								"type": "string",
								"description": "汇聚的ipv6前缀掩码，必须为 IPv6/前缀 格式。",
								"example": "2002:84::/64"
							}
						}
					},
					"example": [
						{
							"area_id": "1.1.1.1",
							"ipv6_prefix": "2002:84::/64"
						},
						{
							"area_id": "2.2.2.2",
							"ipv6_prefix": "2002:84::/64"
						}
					],
					"maxItems": 16
				}
			}
		}
	}
}