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
		"/api/ad/v3/debug/sys/rollback": {
			"description": "系统回滚操作",
			"parameters": [
				{
					"$ref": "/api/{common}.yaml#/parameters/token"
				}
			],
			"post": {
				"tags": [
					"rollback"
				],
				"summary": "rollback",
				"description": "执行系统回滚",
				"operationId": "refresh_system_time_from_ntp",
				"parameters": [
					{
						"$ref": "#/parameters/rollback"
					}
				]
			},
			"__sfcli_example__": [
				{
					"command": "run debug sys rollback username admin password test",
					"description": "回滚到上一个大版本"
				}
			]
		}
	},
	"parameters": {
		"rollback": {
			"name": "rollback",
			"in": "body",
			"required": true,
			"description": "JSON rollback Properties",
			"schema": {
				"$ref": "#/definitions/debug.rollback"
			}
		}
	},
	"definitions": {
		"debug.rollback": {
			"type": "object",
			"properties": {
				"username": {
					"type": "string",
					"description": "验证用户名",
					"example": "admin"
				},
				"password": {
					"type": "string",
					"description": "验证用户名明文密码，password和pk_password必须二选一",
					"example": "password"
				},
				"pk_password": {
					"type": "string",
					"description": "验证用户名明文密码，password和pk_password必须二选一",
					"example": "rnvL3VOlD"
				}
			}
		}
	}
}