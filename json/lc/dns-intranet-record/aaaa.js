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
		"/api/ad/v3/lc/dns-intranet-record/aaaa/": {
			"description": "DNS AAAA记录配置管理操作",
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
					"dns-intranet-record"
				],
				"summary": "get all dns-intranet-record-aaaa",
				"description": "查看DNS AAAA记录配置信息",
				"operationId": "get_dns_intranet_record_aaaa_list",
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
						"$ref": "#/responses/operation_config_dns_intranet_record_aaaa_list"
					}
				}
			},
			"post": {
				"tags": [
					"dns-intranet-record"
				],
				"summary": "create new dns-intranet-record-aaaa",
				"description": "新建DNS AAAA记录配置",
				"operationId": "add_dns_intranet_record_aaaa_list",
				"parameters": [
					{
						"$ref": "#/parameters/DNS-INTRANET-RECORD-AAAA-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_dns_intranet_record_aaaa_object"
					}
				}
			},
			"__sfcli_example__": [
				{
					"command": "create lc dns-intranet-record aaaa www.test.com aaaa_records [ { address 2001::1 ttl 30 } ]",
					"description": "新建内网DNS记录——AAAA记录，域名为www.test.com，记录值为2001::1， ttl为30秒。"
				},
				{
					"command": "modify  lc dns-intranet-record aaaa www.test.com aaaa_records add [ { address 2001::2 ttl 30 } ]",
					"description": "修改内网DNS记录-AAAA记录，针对域名为www.test.com，添加一个AAAA记录：IP为2001::2，TTL为30秒。"
				},
				{
					"command": "list lc dns-intranet-record aaaa www.test.com",
					"description": "查看内网DNS记录AAAA记录www.test.com的配置信息"
				}
			]
		},
		"/api/ad/v3/lc/dns-intranet-record/aaaa/{name}": {
			"description": "DNS AAAA记录配置管理操作",
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
					"dns-intranet-record"
				],
				"summary": "get specific dns-intranet-record-aaaa",
				"description": "查看DNS AAAA记录配置信息",
				"operationId": "get_dns_intranet_record_aaaa",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_dns_intranet_record_aaaa_object"
					}
				}
			},
			"post": {
				"deprecated": true,
				"tags": [
					"dns-intranet-record"
				],
				"summary": "create new dns-intranet-record-aaaa",
				"description": "新建DNS AAAA记录配置",
				"operationId": "create_dns_intranet_record_aaaa",
				"parameters": [
					{
						"$ref": "#/parameters/DNS-INTRANET-RECORD-AAAA-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_dns_intranet_record_aaaa_object"
					}
				}
			},
			"put": {
				"tags": [
					"dns-intranet-record"
				],
				"summary": "replace specific dns-intranet-record-aaaa",
				"description": "更新DNS AAAA记录配置",
				"operationId": "replace_dns_intranet_record_aaaa",
				"parameters": [
					{
						"$ref": "#/parameters/DNS-INTRANET-RECORD-AAAA-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_dns_intranet_record_aaaa_object"
					}
				}
			},
			"patch": {
				"tags": [
					"dns-intranet-record"
				],
				"summary": "modify specific dns-intranet-record-aaaa",
				"description": "更新DNS AAAA记录配置",
				"operationId": "edit_dns_intranet_record_aaaa",
				"parameters": [
					{
						"$ref": "#/parameters/DNS-INTRANET-RECORD-AAAA-PROPERTY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_dns_intranet_record_aaaa_object"
					}
				}
			},
			"delete": {
				"tags": [
					"dns-intranet-record"
				],
				"summary": "delete specific dns-intranet-record-aaaa",
				"description": "删除DNS AAAA记录配置",
				"operationId": "delete_dns_intranet_record_aaaa",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_dns_intranet_record_aaaa_object"
					}
				}
			}
		}
	},
	"parameters": {
		"DNS-INTRANET-RECORD-AAAA-CONFIG": {
			"name": "DNS-INTRANET-RECORD-AAAA-CONFIG",
			"in": "body",
			"required": true,
			"description": "JSON Config Object",
			"schema": {
				"$ref": "#/definitions/config.dns_intranet_record_aaaa"
			}
		},
		"DNS-INTRANET-RECORD-AAAA-PROPERTY": {
			"name": "DNS-INTRANET-RECORD-AAAA-PROPERTY",
			"in": "body",
			"required": true,
			"description": "JSON Config Properties",
			"schema": {
				"$ref": "#/definitions/config.dns_intranet_record_aaaa"
			}
		}
	},
	"responses": {
		"operation_config_dns_intranet_record_aaaa_list": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.dns_intranet_record_aaaa_list"
			}
		},
		"operation_config_dns_intranet_record_aaaa_object": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.dns_intranet_record_aaaa"
			}
		}
	},
	"definitions": {
		"config.dns_intranet_record_aaaa_list": {
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
					"description": "dns aaaa内网记录",
					"type": "array",
					"items": {
						"$ref": "#/definitions/config.dns_intranet_record_aaaa"
					}
				}
			}
		},
		"config.dns_intranet_record_aaaa": {
			"type": "object",
			"required": [
				"name"
			],
			"properties": {
				"name": {
					"type": "string",
					"description": "必选参数；内网DNS记录——AAAA记录的域名。",
					"example": "localhost"
				},
				"description": {
					"type": "string",
					"description": "可选参数；用来对此配置增加额外的备注。"
				},
				"state": {
					"type": "string",
					"description": "可选参数；记录的状态，可选值有：enalbe（启用），disable（禁用）；默认为启用。",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"default": "ENABLE",
					"example": "ENABLE"
				},
				"type": {
					"type": "string",
					"description": "可选参数；记录的类型，AAAA记录的类型为aaaa。",
					"enum": [
						"AAAA"
					],
					"default": "AAAA"
				},
				"aaaa_records": {
					"type": "array",
					"description": "可选参数；AAAA记录的列表，类型为数组。",
					"maxItems": 8,
					"minItems": 1,
					"items": {
						"type": "object",
						"description": "可选参数；AAAA记录，类型为结构体。",
						"required": [
							"address"
						],
						"properties": {
							"address": {
								"type": "string",
								"description": "必选参数；AAAA记录的IP地址，例如2001::1。"
							},
							"ttl": {
								"type": "integer",
								"description": "可选参数；AAAA记录的TTL，类型为整数，单位是秒，默认是60。",
								"default": 0,
								"example": 60,
								"minimum": 0,
								"maximum": 86400
							}
						}
					}
				}
			}
		}
	}
}