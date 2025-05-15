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
		"/api/ad/v3/slb/snat-pool/": {
			"description": "新建、查看SNAT地址集配置",
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
					"snat-pool"
				],
				"summary": "get all snat-pool",
				"description": "查看当前已有的SNAT地址集配置信息",
				"operationId": "get_snat_rule_list",
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
						"$ref": "#/responses/operation_config_snat_rule_list"
					}
				}
			},
			"post": {
				"tags": [
					"snat-pool"
				],
				"summary": "create new snat-pool",
				"description": "新建一个SNAT地址集配置",
				"operationId": "add_snat_rule_list",
				"parameters": [
					{
						"$ref": "#/parameters/SNAT-POOL-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_snat_rule_object"
					}
				}
			},
			"__sfcli_example__": [
				{
					"command": "create slb snat-pool testpool address add [ 1.1.1.1 2.2.2.0/24 3.3.3.1-3.3.3.2 1::1-1::2 666::/64 777::1 ]",
					"description": "新建SNAT地址集testpool，该地址集中包括ipv4单地址1.1.1.1、ipv4地址范围3.3.3.1-3.3.3.2、ipv4子网2.2.2.0/24；以及ipv6单个地址777::1、ipv6地址范围1::1-1::2和ipv6子网666::/64"
				},
				{
					"command": "modify slb snat-pool testpool address delete [ 1.1.1.1 ] ",
					"description": "将1.1.1.1从SNAT地址集testpool中删除"
				},
				{
					"command": "list slb snat-pool testpool all_properties",
					"description": "查看SNAT地址集testpool的所有信息"
				}
			]
		},
		"/api/ad/v3/slb/snat-pool/{name}": {
			"description": "新建、查看、修改、删除指定的SNAT地址集配置",
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
				}
			],
			"get": {
				"tags": [
					"snat-pool"
				],
				"summary": "get specific snat-pool",
				"description": "查看指定的SNAT地址集配置",
				"operationId": "get_snat_rule",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_snat_rule_object"
					}
				}
			},
			"post": {
				"deprecated": true,
				"tags": [
					"snat-pool"
				],
				"summary": "create new snat-pool",
				"description": "新建指定的SNAT地址集配置",
				"operationId": "create_snat_rule",
				"parameters": [
					{
						"$ref": "#/parameters/SNAT-POOL-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_snat_rule_object"
					}
				}
			},
			"put": {
				"tags": [
					"snat-pool"
				],
				"summary": "replace specific snat-pool",
				"description": "修改指定的SNAT地址集配置",
				"operationId": "replace_snat_rule",
				"parameters": [
					{
						"$ref": "#/parameters/SNAT-POOL-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_snat_rule_object"
					}
				}
			},
			"patch": {
				"tags": [
					"snat-pool"
				],
				"summary": "modify specific snat-pool",
				"description": "修改指定的SNAT地址集配置",
				"operationId": "edit_snat_rule",
				"parameters": [
					{
						"$ref": "#/parameters/SNAT-POOL-PROPERTY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_snat_rule_object"
					}
				}
			},
			"delete": {
				"tags": [
					"snat-pool"
				],
				"summary": "delete specific snat-pool",
				"description": "删除指定的SNAT地址集配置",
				"operationId": "delete_snat_rule",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_snat_rule_object"
					}
				}
			}
		}
	},
	"parameters": {
		"SNAT-POOL-CONFIG": {
			"name": "SNAT-POOL-CONFIG",
			"in": "body",
			"required": true,
			"description": "JSON Config Object",
			"schema": {
				"$ref": "#/definitions/config.snat_rule"
			}
		},
		"SNAT-POOL-PROPERTY": {
			"name": "SNAT-POOL-PROPERTY",
			"in": "body",
			"required": true,
			"description": "JSON Config Properties",
			"schema": {
				"$ref": "#/definitions/config.snat_rule"
			}
		}
	},
	"responses": {
		"operation_config_snat_rule_list": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.snat_rule_list"
			}
		},
		"operation_config_snat_rule_object": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.snat_rule"
			}
		}
	},
	"definitions": {
		"config.snat_rule_list": {
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
						"$ref": "#/definitions/config.snat_rule"
					}
				}
			}
		},
		"config.snat_rule": {
			"type": "object",
			"required": [
				"name",
				"address"
			],
			"properties": {
				"name": {
					"description": "指定SNAT地址集的名称, 在配置中必须唯一。",
					"type": "string",
					"example": "snat-pool-1"
				},
				"description": {
					"type": "string",
					"description": "用来对此配置增加额外的备注。"
				},
				"address": {
					"description": "该参数为对象列表，支持ipv4、ipv6、ipv4子网和ipv6子网。",
					"type": "array",
					"items": {
						"type": "string",
						"example": "192.168.1.1/24"
					},
					"minItems": 1,
					"maxItems": 16
				},
				"hash_policy": {
					"description": "snat地址集的哈希策略",
					"type": "string",
					"enum": [
						"SRC-IP",
						"SRC-IP-PORT"
					],
					"example": "SRC-IP",
					"default": "SRC-IP"
				}
			}
		}
	}
}