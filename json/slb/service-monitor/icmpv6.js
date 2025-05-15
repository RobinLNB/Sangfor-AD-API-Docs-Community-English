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
		"/api/ad/v3/slb/service-monitor/icmpv6/": {
			"description": "新建、查看监视器（ICMPV6）配置",
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
					"service-monitor"
				],
				"summary": "get all service-monitor-icmpv6",
				"description": "查看当前已有的监视器（ICMPV6）配置信息",
				"operationId": "get_service_monitor_icmpv6_list",
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
						"$ref": "#/responses/operation_config_service_monitor_icmpv6_list"
					}
				}
			},
			"post": {
				"tags": [
					"service-monitor"
				],
				"summary": "create new service-monitor-icmpv6",
				"description": "新建一个监视器（ICMPV6）配置",
				"operationId": "add_service_monitor_icmpv6_list",
				"parameters": [
					{
						"$ref": "#/parameters/SERVICE-MONITOR-ICMPV6-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_icmpv6_object"
					}
				}
			},
			"__sfcli_example__": [
				{
					"command": "create slb service-monitor icmpv6 icmpv6 description icmpv6监视器 host *",
					"description": "新建icmpv6类型的监视器icmpv6"
				},
				{
					"command": "modify slb service-monitor icmpv6 icmpv6 host 1.1.1.1",
					"description": "修改icmpv6监视器icmpv6的监视主机为1.1.1.1"
				},
				{
					"command": "list slb service-monitor icmpv6 icmpv6",
					"description": "查看icmpv6监视器icmpv6的配置信息"
				}
			]
		},
		"/api/ad/v3/slb/service-monitor/icmpv6/{name}": {
			"description": "新建、查看、修改、删除指定的监视器（ICMPV6）配置",
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
					"service-monitor"
				],
				"summary": "get specific service-monitor-icmpv6",
				"description": "查看指定的监视器（ICMPV6）配置",
				"operationId": "get_service_monitor_icmpv6",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_icmpv6_object"
					}
				}
			},
			"post": {
				"deprecated": true,
				"tags": [
					"service-monitor"
				],
				"summary": "create new service-monitor-icmpv6",
				"description": "新建指定的监视器（ICMPV6）配置",
				"operationId": "create_service_monitor_icmpv6",
				"parameters": [
					{
						"$ref": "#/parameters/SERVICE-MONITOR-ICMPV6-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_icmpv6_object"
					}
				}
			},
			"put": {
				"tags": [
					"service-monitor"
				],
				"summary": "replace specific service-monitor-icmpv6",
				"description": "修改指定的监视器（ICMPV6）配置",
				"operationId": "replace_service_monitor_icmpv6",
				"parameters": [
					{
						"$ref": "#/parameters/SERVICE-MONITOR-ICMPV6-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_icmpv6_object"
					}
				}
			},
			"patch": {
				"tags": [
					"service-monitor"
				],
				"summary": "modify specific service-monitor-icmpv6",
				"description": "修改指定的监视器（ICMPV6）配置",
				"operationId": "edit_service_monitor_icmpv6",
				"parameters": [
					{
						"$ref": "#/parameters/SERVICE-MONITOR-ICMPV6-PROPERTY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_icmpv6_object"
					}
				}
			},
			"delete": {
				"tags": [
					"service-monitor"
				],
				"summary": "delete specific service-monitor-icmpv6",
				"description": "删除指定的监视器（ICMPV6）配置",
				"operationId": "delete_service_monitor_icmpv6",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_icmpv6_object"
					}
				}
			}
		}
	},
	"parameters": {
		"SERVICE-MONITOR-ICMPV6-CONFIG": {
			"name": "SERVICE-MONITOR-ICMPV6-CONFIG",
			"in": "body",
			"required": true,
			"description": "JSON Config Object",
			"schema": {
				"$ref": "#/definitions/config.service_monitor_icmpv6"
			}
		},
		"SERVICE-MONITOR-ICMPV6-PROPERTY": {
			"name": "SERVICE-MONITOR-ICMPV6-PROPERTY",
			"in": "body",
			"required": true,
			"description": "JSON Config Properties",
			"schema": {
				"$ref": "#/definitions/config.service_monitor_icmpv6"
			}
		}
	},
	"responses": {
		"operation_config_service_monitor_icmpv6_list": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.service_monitor_icmpv6_list"
			}
		},
		"operation_config_service_monitor_icmpv6_object": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.service_monitor_icmpv6"
			}
		}
	},
	"definitions": {
		"config.service_monitor_icmpv6_list": {
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
						"$ref": "#/definitions/config.service_monitor_icmpv6"
					}
				}
			}
		},
		"config.service_monitor_icmpv6": {
			"type": "object",
			"required": [
				"name"
			],
			"properties": {
				"name": {
					"description": "监视器名称",
					"type": "string",
					"example": "http"
				},
				"description": {
					"type": "string",
					"description": "可选参数；用来对此配置增加额外的备注。"
				},
				"type": {
					"description": "监视器类型",
					"type": "string",
					"enum": [
						"ICMPV6"
					],
					"default": "ICMPV6"
				},
				"timeout": {
					"description": "监视器监视超时时间",
					"type": "integer",
					"default": 16,
					"minimum": 1,
					"maximum": 86400,
					"example": 16
				},
				"interval": {
					"description": "间隔时间",
					"type": "integer",
					"default": 5,
					"minimum": 1,
					"maximum": 86400,
					"example": 5
				},
				"host": {
					"description": "Format: * | {IP} | {DOMAIN} | {HOST}",
					"type": "string",
					"default": "*",
					"optionalEnum": [
						"*"
					],
					"example": "2000::10ff"
				},
				"debug_mode": {
					"description": "调试开关",
					"type": "string",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"default": "DISABLE",
					"example": "DISABLE"
				},
				"gateway_detect": {
					"description": "透明模式开关",
					"type": "string",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"default": "DISABLE",
					"example": "DISABLE"
				}
			}
		}
	}
}