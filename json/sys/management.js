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
		"/api/ad/v3/sys/management": {
			"description": "查看、修改管理口配置",
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
					"management"
				],
				"summary": "get management",
				"description": "查看当前已有的管理口配置信息",
				"operationId": "get_management",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_management_object"
					}
				}
			},
			"put": {
				"tags": [
					"management"
				],
				"summary": "replace management",
				"description": "修改管理口配置",
				"operationId": "replace_management",
				"parameters": [
					{
						"$ref": "#/parameters/MANAGEMENT-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_management_object"
					}
				}
			},
			"patch": {
				"tags": [
					"management"
				],
				"summary": "modify management",
				"description": "修改管理口配置",
				"operationId": "edit_management",
				"parameters": [
					{
						"$ref": "#/parameters/MANAGEMENT-PROPERTY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_management_object"
					}
				}
			},
			"__sfcli_example__": [
				{
					"command": "modify sys management host localhost",
					"description": "修改当前管理口配置，设置主机名为localhost"
				},
				{
					"command": "list sys management",
					"description": "查看当前管理口配置信息"
				}
			]
		}
	},
	"parameters": {
		"MANAGEMENT-CONFIG": {
			"name": "MANAGEMENT-CONFIG",
			"in": "body",
			"required": true,
			"description": "JSON Config Object",
			"schema": {
				"$ref": "#/definitions/config.management"
			}
		},
		"MANAGEMENT-PROPERTY": {
			"name": "MANAGEMENT-PROPERTY",
			"in": "body",
			"required": true,
			"description": "JSON Config Properties",
			"schema": {
				"$ref": "#/definitions/config.management"
			}
		}
	},
	"responses": {
		"operation_config_management_object": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.management"
			}
		}
	},
	"definitions": {
		"config.management": {
			"type": "object",
			"required": [
				"addresses"
			],
			"properties": {
				"addresses": {
					"description": "管理网口地址列表",
					"type": "array",
					"items": {
						"description": "管理网口ip地址",
						"type": "string",
						"example": "192.168.1.100/24"
					},
					"minItems": 1,
					"maxItems": 16
				},
				"gateway": {
					"description": "管理网关-ipv4",
					"type": "string",
					"example": "200.200.0.254"
				},
				"gateway_ipv6": {
					"description": "管理网关-ipv6",
					"type": "string",
					"example": "2001::1"
				},
				"host": {
					"description": "主机名",
					"type": "string",
					"default": "localhost",
					"example": "localhost",
					"maxLength": 63,
					"minLength": 1
				}
			}
		}
	}
}