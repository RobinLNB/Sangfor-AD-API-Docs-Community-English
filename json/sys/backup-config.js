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
		"/api/ad/v3/sys/backup-config/": {
			"description": "新建、查看备份配置",
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
					"backup-config"
				],
				"summary": "get all backup-config",
				"description": "查看当前已有的备份配置信息",
				"operationId": "get_backup_config_list",
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
						"$ref": "#/responses/operation_config_backup_config_list"
					}
				}
			},
			"post": {
				"tags": [
					"backup-config"
				],
				"summary": "create new backup-config",
				"description": "新建一个备份配置",
				"operationId": "add_backup_config_list",
				"parameters": [
					{
						"$ref": "#/parameters/BACKUP-CONFIG-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_backup_config_object"
					}
				}
			},
			"__sfcli_example__": [
				{
					"command": "create sys backup-config test_1",
					"description": "将当前配置保存为一个名称为test_1的备份配置"
				},
				{
					"command": "modify  sys backup-config  test_1 name test_2",
					"description": "将备份配置包test_1的名字修改为test_2"
				},
				{
					"command": "list sys backup-config",
					"description": "查看已有的备份配置信息"
				},
				{
					"command": "save sys backup-config test package",
					"description": "将名称为test的备份配置下载到本地"
				},
				{
					"command": "save sys backup-config-package type json-config-package",
					"description": "导出当前明文配置到本地"
				}
			]
		},
		"/api/ad/v3/sys/backup-config/{name}": {
			"description": "新建、查看、修改、删除指定的备份配置",
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
					"backup-config"
				],
				"summary": "get specific backup-config",
				"description": "查看指定的备份配置",
				"operationId": "get_backup_config",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_backup_config_object"
					}
				}
			},
			"post": {
				"deprecated": true,
				"tags": [
					"backup-config"
				],
				"summary": "create new backup-config",
				"description": "新建指定的备份配置",
				"operationId": "create_backup_config",
				"parameters": [
					{
						"$ref": "#/parameters/BACKUP-CONFIG-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_backup_config_object"
					},
					"202": {
						"$ref": "/api/{common}.yaml#/responses/operation_config_async_operation"
					}
				}
			},
			"put": {
				"tags": [
					"backup-config"
				],
				"summary": "replace specific backup-config",
				"description": "修改指定的备份配置",
				"operationId": "replace_backup_config",
				"parameters": [
					{
						"$ref": "#/parameters/BACKUP-CONFIG-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_backup_config_object"
					}
				}
			},
			"patch": {
				"tags": [
					"backup-config"
				],
				"summary": "modify specific backup-config",
				"description": "修改指定的备份配置",
				"operationId": "edit_backup_config",
				"parameters": [
					{
						"$ref": "#/parameters/BACKUP-CONFIG-PROPERTY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_backup_config_object"
					}
				}
			},
			"delete": {
				"tags": [
					"backup-config"
				],
				"summary": "delete specific backup-config",
				"description": "删除指定的备份配置",
				"operationId": "delete_backup_config",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_backup_config_object"
					}
				}
			}
		},
		"/api/ad/v3/sys/backup-config/{name}/package": {
			"description": "通过指定备份的名字，获取一个备份文件，返回备份文件的token等信息",
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
					"backup-config"
				],
				"summary": "get specific backup-config package",
				"description": "通过指定备份的名字，获取一个备份文件，返回备份文件的token等信息",
				"operationId": "get_backup_config_package",
				"responses": {
					"200": {
						"$ref": "/api/{common}.yaml#/responses/operation_cgi_file_resource_response"
					}
				}
			}
		},
		"/api/ad/v3/sys/backup-config/{name}/recovery": {
			"description": "通过备份的名字，恢复配置",
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
					"$ref": "#/parameters/force"
				}
			],
			"post": {
				"tags": [
					"backup-config"
				],
				"summary": "recover specific backup-config",
				"description": "通过备份的名字，恢复配置",
				"operationId": "recover_backup_config",
				"parameters": [
					{
						"$ref": "#/parameters/RECOVERY"
					}
				],
				"responses": {
					"202": {
						"$ref": "/api/{common}.yaml#/responses/operation_config_async_operation"
					}
				}
			}
		},
		"/api/ad/v3/sys/backup-config/default/recovery": {
			"description": "使设备恢复默认配置",
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
					"$ref": "#/parameters/force"
				}
			],
			"post": {
				"tags": [
					"backup-config"
				],
				"summary": "recover default backup-config",
				"description": "使设备恢复默认配置",
				"operationId": "recover_default_backup_config",
				"parameters": [
					{
						"$ref": "#/parameters/RECOVERY"
					}
				],
				"responses": {
					"202": {
						"$ref": "/api/{common}.yaml#/responses/operation_config_async_operation"
					}
				}
			}
		},
		"/api/ad/v3/sys/backup-config-package": {
			"description": "导出AD设备整体配置，根据传入参数决定走原有打包逻辑还是明文导出逻辑",
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
					"backup-config"
				],
				"summary": "export backup-config package",
				"description": "系統备份包用get接口进行导出",
				"operationId": "export_backup_config_package",
				"responses": {
					"200": {
						"$ref": "/api/{common}.yaml#/responses/operation_cgi_file_resource_response"
					}
				}
			},
			"post": {
				"tags": [
					"backup-config"
				],
				"summary": "export backup-config package",
				"description": "业务配置包用post接口进行导出",
				"operationId": "export_backup_config_package",
				"parameters": [
					{
						"$ref": "#/parameters/BACKUP-PACKAGE-PASSWORD"
					}
				],
				"responses": {
					"200": {
						"$ref": "/api/{common}.yaml#/responses/operation_cgi_file_resource_response"
					}
				}
			}
		},
		"/api/ad/v3/sys/backup-config-recovery": {
			"description": "系统配置导入路由，转调明文导入或系统备份包导入",
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
					"$ref": "#/parameters/force"
				}
			],
			"post": {
				"tags": [
					"backup-config"
				],
				"summary": "recover external backup-config.",
				"description": "系统配置导入路由，转调明文导入或系统备份包导入",
				"operationId": "recover_external_backup_config",
				"parameters": [
					{
						"$ref": "#/parameters/BACKUP-PACKAGE-IMPORT"
					}
				],
				"responses": {
					"202": {
						"$ref": "/api/{common}.yaml#/responses/operation_config_async_operation"
					}
				}
			}
		}
	},
	"parameters": {
		"BACKUP-CONFIG-CONFIG": {
			"name": "BACKUP-CONFIG-CONFIG",
			"in": "body",
			"required": true,
			"description": "JSON Config Object",
			"schema": {
				"$ref": "#/definitions/config.backup_config"
			}
		},
		"BACKUP-CONFIG-PROPERTY": {
			"name": "BACKUP-CONFIG-PROPERTY",
			"in": "body",
			"required": true,
			"description": "JSON Config Properties",
			"schema": {
				"$ref": "#/definitions/config.backup_config"
			}
		},
		"BACKUP-PACKAGE-IMPORT": {
			"name": "BACKUP-PACKAGE-IMPORT",
			"in": "body",
			"required": true,
			"description": "JSON Object for import",
			"schema": {
				"$ref": "#/definitions/config.backup_config_import"
			}
		},
		"BACKUP-PACKAGE-PASSWORD": {
			"name": "BACKUP-PACKAGE-PASSWORD",
			"in": "body",
			"required": true,
			"description": "JSON Config Password",
			"schema": {
				"$ref": "#/definitions/config.backup_config_password"
			}
		},
		"RECOVERY": {
			"name": "RECOVERY",
			"in": "body",
			"required": true,
			"description": "JSON Config Password",
			"schema": {
				"$ref": "#/definitions/config.recovery"
			}
		},
		"force": {
			"name": "force",
			"in": "query",
			"required": false,
			"description": "Force recover package of different hardware.",
			"type": "boolean",
			"default": false,
			"example": false
		}
	},
	"responses": {
		"operation_config_backup_config_list": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.backup_config_list"
			}
		},
		"operation_config_backup_config_object": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.backup_config"
			}
		}
	},
	"definitions": {
		"config.backup_config_list": {
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
						"$ref": "#/definitions/config.backup_config"
					}
				}
			}
		},
		"config.backup_config": {
			"type": "object",
			"required": [
				"name"
			],
			"properties": {
				"name": {
					"description": "系统备份的名称",
					"type": "string",
					"example": "backup1"
				},
				"description": {
					"type": "string",
					"description": "系统备份的描述信息",
					"example": "change CNC link ip"
				},
				"time_point": {
					"type": "string",
					"description": "系统备份的时间 Format: {YYYY-MM-DD hh:mm:ss}",
					"readOnly": true,
					"example": "2018-01-04 08:05:10"
				},
				"version": {
					"type": "string",
					"description": "系统备份的版本",
					"readOnly": true,
					"example": "AD-7.0.21"
				}
			}
		},
		"config.backup_config_import": {
			"type": "object",
			"required": [
				"file_token",
				"username"
			],
			"properties": {
				"file_token": {
					"description": "token of file-resource",
					"type": "string"
				},
				"username": {
					"description": "系统恢复需要输入当前用户名",
					"type": "string"
				},
				"password": {
					"description": "系统恢复需要输入用户的密码",
					"type": "string"
				},
				"pk_password": {
					"description": "系统恢复需要输入用户的密码",
					"type": "string"
				},
				"package_password": {
					"description": "导入包解压密码",
					"type": "string",
					"maxLength": 64,
					"minLength": 8
				},
				"pk_package_password": {
					"description": "导入包解压加密密码",
					"type": "string"
				},
				"mgmt_recover_enable": {
					"description": "恢复配置时需要确认管理口IP是否恢复",
					"type": "string",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"default": "ENABLE",
					"example": "DISABLE"
				}
			}
		},
		"config.backup_config_password": {
			"type": "object",
			"required": [
				"type"
			],
			"properties": {
				"type": {
					"type": "string",
					"description": "导入的配置类型",
					"enum": [
						"BACKUP-CONFIG-PACKAGE",
						"JSON-CONFIG-PACKAGE"
					],
					"default": "BACKUP-CONFIG-PACKAGE"
				},
				"package_password": {
					"description": "配置压缩包加密密码",
					"type": "string",
					"maxLength": 64,
					"minLength": 0
				},
				"pk_package_password": {
					"description": "导入包解压加密密码",
					"type": "string"
				}
			}
		},
		"config.recovery": {
			"type": "object",
			"required": [
				"username"
			],
			"properties": {
				"username": {
					"description": "系统恢复需要输入当前用户名",
					"type": "string"
				},
				"password": {
					"description": "系统恢复需要输入用户的密码",
					"type": "string"
				},
				"pk_password": {
					"description": "系统恢复需要输入用户的密码的加密格式",
					"type": "string"
				},
				"mgmt_recover_enable": {
					"description": "恢复配置时需要确认管理口IP是否恢复",
					"type": "string",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"default": "ENABLE",
					"example": "DISABLE"
				}
			}
		}
	}
}