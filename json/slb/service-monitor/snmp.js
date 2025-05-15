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
		"/api/ad/v3/slb/service-monitor/snmp/": {
			"description": "新建、查看监视器（SNMP）配置",
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
				"summary": "get all service-monitor-snmp",
				"description": "查看当前已有的监视器（SNMP）配置信息",
				"operationId": "get_service_monitor_snmp_list",
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
						"$ref": "#/responses/operation_config_service_monitor_snmp_list"
					}
				}
			},
			"post": {
				"tags": [
					"service-monitor"
				],
				"summary": "create new service-monitor-snmp",
				"description": "新建一个监视器（SNMP）配置",
				"operationId": "add_service_monitor_snmp_list",
				"parameters": [
					{
						"$ref": "#/parameters/SERVICE-MONITOR-SNMP-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_snmp_object"
					}
				}
			},
			"__sfcli_example__": [
				{
					"command": "create slb service-monitor snmp snmpmonitor cpu_usage_threshold 70 disk_usage_threshold 50 memory_usage_threshold 30 cpu_usage_weight 10 memory_usage_weight 20 disk_usage_weight 5 snmp_community public",
					"description": "新建snmp类型的监视器snmpmonitor,cpu占用阈值70%,磁盘占用阈值50%,内存占用阈值30%,CPU权重10%,内存权重20%,磁盘阈值5%,SNMP团体名称为public"
				},
				{
					"command": "modify slb service-monitor snmp snmpmonitor debug_mode enable",
					"description": "修改snmp类型监视器snmpmonitor开启调试日志"
				},
				{
					"command": "list slb service-monitor snmp snmpmonitor",
					"description": "查看snmp监视器snmpmonitor的配置信息"
				}
			]
		},
		"/api/ad/v3/slb/service-monitor/snmp/{name}": {
			"description": "新建、查看、修改、删除指定的监视器（SNMP）配置",
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
				"summary": "get specific service-monitor-snmp",
				"description": "查看指定的监视器（SNMP）配置",
				"operationId": "get_service_monitor_snmp",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_snmp_object"
					}
				}
			},
			"post": {
				"deprecated": true,
				"tags": [
					"service-monitor"
				],
				"summary": "create new service-monitor-snmp",
				"description": "新建指定的监视器（SNMP）配置",
				"operationId": "create_service_monitor_snmp",
				"parameters": [
					{
						"$ref": "#/parameters/SERVICE-MONITOR-SNMP-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_snmp_object"
					}
				}
			},
			"put": {
				"tags": [
					"service-monitor"
				],
				"summary": "replace specific service-monitor-snmp",
				"description": "修改指定的监视器（SNMP）配置",
				"operationId": "replace_service_monitor_snmp",
				"parameters": [
					{
						"$ref": "#/parameters/SERVICE-MONITOR-SNMP-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_snmp_object"
					}
				}
			},
			"patch": {
				"tags": [
					"service-monitor"
				],
				"summary": "modify specific service-monitor-snmp",
				"description": "修改指定的监视器（SNMP）配置",
				"operationId": "edit_service_monitor_snmp",
				"parameters": [
					{
						"$ref": "#/parameters/SERVICE-MONITOR-SNMP-PROPERTY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_snmp_object"
					}
				}
			},
			"delete": {
				"tags": [
					"service-monitor"
				],
				"summary": "delete specific service-monitor-snmp",
				"description": "删除指定的监视器（SNMP）配置",
				"operationId": "delete_service_monitor_snmp",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_snmp_object"
					}
				}
			}
		}
	},
	"parameters": {
		"SERVICE-MONITOR-SNMP-CONFIG": {
			"name": "SERVICE-MONITOR-SNMP-CONFIG",
			"in": "body",
			"required": true,
			"description": "JSON Config Object",
			"schema": {
				"$ref": "#/definitions/config.service_monitor_snmp"
			}
		},
		"SERVICE-MONITOR-SNMP-PROPERTY": {
			"name": "SERVICE-MONITOR-SNMP-PROPERTY",
			"in": "body",
			"required": true,
			"description": "JSON Config Properties",
			"schema": {
				"$ref": "#/definitions/config.service_monitor_snmp"
			}
		}
	},
	"responses": {
		"operation_config_service_monitor_snmp_list": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.service_monitor_snmp_list"
			}
		},
		"operation_config_service_monitor_snmp_object": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.service_monitor_snmp"
			}
		}
	},
	"definitions": {
		"config.service_monitor_snmp_list": {
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
						"$ref": "#/definitions/config.service_monitor_snmp"
					}
				}
			}
		},
		"config.service_monitor_snmp": {
			"type": "object",
			"required": [
				"name"
			],
			"properties": {
				"name": {
					"description": "必选参数；指定监视器的名称, 在配置中必须唯一。",
					"type": "string",
					"example": "http"
				},
				"description": {
					"type": "string",
					"description": "可选参数；用来对此配置增加额外的备注。"
				},
				"type": {
					"description": "只读参数；监视器类型。",
					"type": "string",
					"enum": [
						"SNMP"
					],
					"default": "SNMP"
				},
				"timeout": {
					"description": "可选参数；设置监视超时时间。",
					"type": "integer",
					"default": 16,
					"minimum": 1,
					"maximum": 86400,
					"example": 16
				},
				"interval": {
					"description": "可选参数；设置监视间隔时间。",
					"type": "integer",
					"default": 5,
					"minimum": 1,
					"maximum": 86400,
					"example": 5
				},
				"host": {
					"description": "可选参数；支持ip地址和*;默认为*，表示监视节点池中的地址；当启用gateway_detect时必须指定ip地址",
					"type": "string",
					"default": "*",
					"optionalEnum": [
						"*"
					],
					"example": "8.8.8.8"
				},
				"port": {
					"description": "可选参数；指定监视端口；取值范围[0,65535]，默认为161",
					"type": "integer",
					"default": 161,
					"maximum": 65535,
					"minimum": 0,
					"example": 161
				},
				"debug_mode": {
					"description": "可选参数；调试模式开关，disable表示禁用，enable表示启用；默认禁用。",
					"type": "string",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"default": "DISABLE",
					"example": "DISABLE"
				},
				"snmp_community": {
					"description": "可选参数；指定snmp的共同体,默认为public",
					"type": "string",
					"minLength": 1,
					"maxLength": 255,
					"example": "public"
				},
				"pk_snmp_community": {
					"description": "加密查询密码",
					"type": "string",
					"example": "A1B2C3D4"
				},
				"encrypted_snmp_community": {
					"description": "加密查询密码",
					"type": "string",
					"example": "A1B2C3D4"
				},
				"cpu_usage_threshold": {
					"description": "可选参数;指定CPU占用阈值,取值范围为[1,100],默认80;单位为%",
					"type": "integer",
					"default": 80,
					"maximum": 100,
					"minimum": 1,
					"example": 60
				},
				"cpu_usage_weight": {
					"description": "可选参数;指定CPU占用的权值，取值范围为[1,100],默认为3",
					"type": "integer",
					"default": 3,
					"maximum": 100,
					"minimum": 1,
					"example": 10
				},
				"memory_usage_threshold": {
					"description": "可选参数;指定内存占用阈值,取值范围为[1,100],默认70;单位为%",
					"type": "integer",
					"default": 70,
					"maximum": 100,
					"minimum": 1,
					"example": 80
				},
				"memory_usage_weight": {
					"description": "可选参数;指定内存占用的权值，取值范围为[1,100],默认为2",
					"type": "integer",
					"default": 2,
					"maximum": 100,
					"minimum": 1,
					"example": 10
				},
				"disk_usage_threshold": {
					"description": "可选参数;指定磁盘占用阈值,取值范围为[1,100],默认90;单位为%",
					"type": "integer",
					"default": 90,
					"maximum": 100,
					"minimum": 1,
					"example": 75
				},
				"disk_usage_weight": {
					"description": "可选参数;指定磁盘占用的权值，取值范围为[1,100],默认为4",
					"type": "integer",
					"default": 4,
					"maximum": 100,
					"minimum": 1,
					"example": 10
				}
			}
		}
	}
}