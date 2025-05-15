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
		"/api/ad/v3/slb/service-monitor/mysql-database/": {
			"description": "新建、查看监视器（MYSQL）配置",
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
				"summary": "get all service-monitor-mysql-database",
				"description": "查看当前已有的监视器（MYSQL）配置信息",
				"operationId": "get_service_monitor_mysql_database_list",
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
						"$ref": "#/responses/operation_config_service_monitor_mysql_database_list"
					}
				}
			},
			"post": {
				"tags": [
					"service-monitor"
				],
				"summary": "create new service-monitor-mysql-database",
				"description": "新建一个监视器（MYSQL）配置",
				"operationId": "add_service_monitor_mysql_database_list",
				"parameters": [
					{
						"$ref": "#/parameters/SERVICE-MONITOR-MYSQL-DATABASE-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_mysql_database_object"
					}
				}
			},
			"__sfcli_example__": [
				{
					"command": " create slb service-monitor mysql-database mysqltest database userdb username test password test query_string 'select * from user' mysql_detect_method query-result query_result { position_column 1 position_row 1 result_match abc }",
					"description": "新建mysql数据库监视器mysqltest,监控数据库userdb,账号和密码分别为test,查询语句为select * from user;检测对象为查询结果集,期望结果为第1行第1列包含字符串abc"
				},
				{
					"command": "modify slb service-monitor mysql-database mysqltest database test",
					"description": "将mysql数据库监视器mysqltest监控数据库修改为test"
				},
				{
					"command": "list slb service-monitor mysql-database mysqltest",
					"description": "查看mysql数据库监视器mysqltest的配置信息"
				}
			]
		},
		"/api/ad/v3/slb/service-monitor/mysql-database/{name}": {
			"description": "新建、查看、修改、删除指定的监视器（MYSQL）配置",
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
				"summary": "get specific service-monitor-mysql-database",
				"description": "查看指定的监视器（MYSQL）配置",
				"operationId": "get_service_monitor_mysql_database",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_mysql_database_object"
					}
				}
			},
			"post": {
				"deprecated": true,
				"tags": [
					"service-monitor"
				],
				"summary": "create new service-monitor-mysql-database",
				"description": "新建指定的监视器（MYSQL）配置",
				"operationId": "create_service_monitor_mysql_database",
				"parameters": [
					{
						"$ref": "#/parameters/SERVICE-MONITOR-MYSQL-DATABASE-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_mysql_database_object"
					}
				}
			},
			"put": {
				"tags": [
					"service-monitor"
				],
				"summary": "replace specific service-monitor-mysql-database",
				"description": "修改指定的监视器（MYSQL）配置",
				"operationId": "replace_service_monitor_mysql_database",
				"parameters": [
					{
						"$ref": "#/parameters/SERVICE-MONITOR-MYSQL-DATABASE-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_mysql_database_object"
					}
				}
			},
			"patch": {
				"tags": [
					"service-monitor"
				],
				"summary": "modify specific service-monitor-mysql-database",
				"description": "修改指定的监视器（MYSQL）配置",
				"operationId": "edit_service_monitor_mysql_database",
				"parameters": [
					{
						"$ref": "#/parameters/SERVICE-MONITOR-MYSQL-DATABASE-PROPERTY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_mysql_database_object"
					}
				}
			},
			"delete": {
				"tags": [
					"service-monitor"
				],
				"summary": "delete specific service-monitor-mysql-database",
				"description": "删除指定的监视器（MYSQL）配置",
				"operationId": "delete_service_monitor_mysql_database",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_service_monitor_mysql_database_object"
					}
				}
			}
		}
	},
	"parameters": {
		"SERVICE-MONITOR-MYSQL-DATABASE-CONFIG": {
			"name": "SERVICE-MONITOR-MYSQL-DATABASE-CONFIG",
			"in": "body",
			"required": true,
			"description": "JSON Config Object",
			"schema": {
				"$ref": "#/definitions/config.service_monitor_mysql_database"
			}
		},
		"SERVICE-MONITOR-MYSQL-DATABASE-PROPERTY": {
			"name": "SERVICE-MONITOR-MYSQL-DATABASE-PROPERTY",
			"in": "body",
			"required": true,
			"description": "JSON Config Properties",
			"schema": {
				"$ref": "#/definitions/config.service_monitor_mysql_database"
			}
		}
	},
	"responses": {
		"operation_config_service_monitor_mysql_database_list": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.service_monitor_mysql_database_list"
			}
		},
		"operation_config_service_monitor_mysql_database_object": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.service_monitor_mysql_database"
			}
		}
	},
	"definitions": {
		"config.service_monitor_mysql_database_list": {
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
						"$ref": "#/definitions/config.service_monitor_mysql_database"
					}
				}
			}
		},
		"config.service_monitor_mysql_database": {
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
						"MYSQL-DATABASE"
					],
					"default": "MYSQL-DATABASE"
				},
				"timeout": {
					"description": "可选参数；设置监视超时时间。",
					"type": "integer",
					"default": 31,
					"minimum": 1,
					"maximum": 86400,
					"example": 31
				},
				"interval": {
					"description": "可选参数；设置监视间隔时间。",
					"type": "integer",
					"default": 10,
					"minimum": 1,
					"maximum": 86400,
					"example": 10
				},
				"host": {
					"description": "可选参数；支持ip地址和*;默认为*，表示监视节点池中的地址",
					"type": "string",
					"default": "*",
					"optionalEnum": [
						"*"
					],
					"example": "8.8.8.8"
				},
				"port": {
					"description": "可选参数；指定监视端口；取值范围[0,65535]，默认为3306",
					"type": "integer",
					"default": 3306,
					"maximum": 65535,
					"minimum": 0,
					"example": 3306
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
				"username": {
					"description": "可选参数；指定数据库用户名",
					"type": "string",
					"maxLength": 63,
					"example": "root"
				},
				"password": {
					"description": "可选参数；指定数据库用户的密码",
					"passwdOnce": true,
					"type": "string",
					"maxLength": 63,
					"example": ""
				},
				"pk_password": {
					"description": "旧密码",
					"type": "string",
					"example": "A1B2C3D4"
				},
				"encrypted_password": {
					"description": "可选参数；已加密的用户名密码",
					"type": "string",
					"example": "A1B2C3D4"
				},
				"database": {
					"description": "可选参数；指定数据库名称",
					"type": "string",
					"maxLength": 63,
					"example": ""
				},
				"mysql_detect_method": {
					"description": "可选参数；指定检测对象,query-result表示查询结果集,sync-status表示同步状态,默认为query-result",
					"type": "string",
					"enum": [
						"QUERY-RESULT",
						"SYNC-STATUS"
					],
					"default": "QUERY-RESULT"
				},
				"query_string": {
					"description": "可选参数;指定查询语句",
					"type": "string",
					"maxLength": 2048,
					"example": "select * from account_table;"
				},
				"query_result": {
					"description": "可选参数;指定查询结果的匹配条件;position_row指定所在行,position_column指定所在列,result_match指定必须包含的内容",
					"type": "object",
					"properties": {
						"position_row": {
							"description": "可选参数;指定所在行",
							"type": "integer",
							"maximum": 4294967295,
							"minimum": 1,
							"example": 2,
							"default": 1
						},
						"position_column": {
							"description": "可选参数;指定所在列",
							"type": "integer",
							"maximum": 4294967295,
							"minimum": 1,
							"example": 2,
							"default": 1
						},
						"result_match": {
							"description": "可选参数;指定需要匹配的内容",
							"type": "string",
							"maxLength": 256,
							"default": "",
							"example": "success"
						}
					},
					"required": []
				},
				"sync_status": {
					"description": "可选参数;指定监视同步状态",
					"type": "object",
					"properties": {
						"check_replication_timeout": {
							"description": "可选参数;指定是否监视同步超时,默认disable",
							"type": "string",
							"enum": [
								"ENABLE",
								"DISABLE"
							],
							"default": "DISABLE",
							"example": "ENABLE"
						},
						"replication_timeout": {
							"description": "可选参数;指定同步超时时间",
							"type": "integer",
							"default": 0,
							"maximum": 3600,
							"minimum": 0,
							"example": 0
						}
					},
					"required": []
				}
			}
		}
	}
}