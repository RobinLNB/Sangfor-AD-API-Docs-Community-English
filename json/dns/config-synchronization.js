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
		"/api/ad/v3/dns/config-synchronization": {
			"description": "全局负载配置同步管理操作",
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
					"config-synchronization"
				],
				"summary": "get config-synchronization",
				"description": "查看全局负载配置同步信息",
				"operationId": "get_config_synchronization",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_config_synchronization_object"
					}
				}
			},
			"put": {
				"tags": [
					"config-synchronization"
				],
				"summary": "replace config-synchronization",
				"description": "修改全局负载配置同步信息",
				"operationId": "replace_config_synchronization",
				"parameters": [
					{
						"$ref": "#/parameters/CONFIG-SYNCHRONIZATION-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_config_synchronization_object"
					}
				}
			},
			"patch": {
				"tags": [
					"config-synchronization"
				],
				"summary": "modify config-synchronization",
				"description": "增量修改全局负载配置同步信息",
				"operationId": "edit_config_synchronization",
				"parameters": [
					{
						"$ref": "#/parameters/CONFIG-SYNCHRONIZATION-PROPERTY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_config_synchronization_object"
					}
				}
			},
			"__sfcli_example__": [
				{
					"command": "list dns config-synchronization [ vs_name module ]",
					"description": "查看全局负载配置同步信息 由虚拟服务和配置同步文件两部分组成"
				},
				{
					"command": "modify dns config-synchronization module delete [ dns-map ] vs_name delete [ test ]",
					"description": "修改配置同步信息 删除DNS映射和名称为test的虚拟服务 使二者不同步"
				}
			]
		}
	},
	"parameters": {
		"CONFIG-SYNCHRONIZATION-CONFIG": {
			"name": "CONFIG-SYNCHRONIZATION-CONFIG",
			"in": "body",
			"required": true,
			"description": "全局负载配置同步信息",
			"schema": {
				"$ref": "#/definitions/config.config_synchronization"
			}
		},
		"CONFIG-SYNCHRONIZATION-PROPERTY": {
			"name": "CONFIG-SYNCHRONIZATION-PROPERTY",
			"in": "body",
			"required": true,
			"description": "全局负载配置同步属性",
			"schema": {
				"$ref": "#/definitions/config.config_synchronization"
			}
		}
	},
	"responses": {
		"operation_config_config_synchronization_object": {
			"description": "全局负载配置同步对象",
			"schema": {
				"$ref": "#/definitions/config.config_synchronization"
			}
		}
	},
	"definitions": {
		"config.config_synchronization": {
			"type": "object",
			"required": [
				"module"
			],
			"properties": {
				"module": {
					"description": "全局负载配置同步配置列表",
					"type": "array",
					"items": {
						"description": "全局负载同步配置信息，包含虚拟IP池、本地DNS、静态就近性、MX记录、CNAME记录、NS记录、TXT记录、SOA记录、PTR记录、SRV记录、A记录、AAAA记录、用户、角色、权限",
						"type": "string",
						"enum": [
							"DNS-VIP-POOL",
							"DNS-LOCAL-DNS",
							"DNS-TOPOLOGY",
							"DNS-MAP",
							"DNS-RECORD-MX",
							"DNS-RECORD-CNAME",
							"DNS-RECORD-NS",
							"DNS-RECORD-TXT",
							"DNS-RECORD-SOA",
							"DNS-RECORD-PTR",
							"DNS-RECORD-SRV",
							"DNS-RECORD-A",
							"DNS-RECORD-AAAA",
							"SYS-USER",
							"SYS-ROLE",
							"SYS-PERMISSION",
							"SYS-PWD-POLICY"
						]
					},
					"example": [
						"DNS-VIP-POOL",
						"DNS-LOCAL-DNS",
						"DNS-TOPOLOGY",
						"DNS-MAP",
						"DNS-RECORD-MX",
						"DNS-RECORD-CNAME",
						"DNS-RECORD-NS",
						"DNS-RECORD-TXT",
						"DNS-RECORD-SOA",
						"DNS-RECORD-PTR",
						"DNS-RECORD-SRV",
						"DNS-RECORD-A"
					],
					"maxItems": 32,
					"minItems": 1
				},
				"vs_name": {
					"type": "array",
					"description": "需要同步的虚拟服务列表",
					"items": {
						"description": "需要同步的虚拟服务",
						"type": "string"
					},
					"maxItems": 180,
					"minItems": 0
				}
			}
		}
	}
}