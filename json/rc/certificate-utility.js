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
		"/api/ad/v3/rc/certificate-utility/certificate-file-processing": {
			"description": "解析上传的证书文件",
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
			"post": {
				"description": "解析证书文件、获取证书详情",
				"tags": [
					"certificate-utility"
				],
				"summary": "do certificate-utility certificate-file-processing",
				"operationId": "do_certificate_utility_certificate_file_processing",
				"parameters": [
					{
						"$ref": "#/parameters/JSON-FILE-LIST"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_certificate_utility_certificate_list"
					},
					"403": {
						"$ref": "#/responses/operation_certificate_utility_file_abnormal"
					}
				}
			}
		}
	},
	"parameters": {
		"JSON-FILE-LIST": {
			"name": "CERTIFICATE-UTILITY-CONFIG",
			"in": "body",
			"required": true,
			"description": "JSON Config Object",
			"schema": {
				"$ref": "#/definitions/config.certificate_utility_file_list"
			}
		}
	},
	"responses": {
		"operation_certificate_utility_certificate_list": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.certificate_utility_certificate_list"
			}
		},
		"operation_certificate_utility_file_abnormal": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.certificate_utility_file_abnormal"
			}
		}
	},
	"definitions": {
		"config.certificate_utility_file_list": {
			"type": "object",
			"required": [
				"certificate_files"
			],
			"properties": {
				"certificate_files": {
					"description": "证书文件token列表",
					"type": "array",
					"items": {
						"description": "单个证书文件token",
						"type": "object",
						"required": [
							"file_token"
						],
						"properties": {
							"file_token": {
								"description": "必选参数；证书token",
								"type": "string"
							},
							"password": {
								"description": "可选参数；证书密码",
								"type": "string",
								"writeOnly": true,
								"default": ""
							},
							"pk_password": {
								"description": "可选参数；证书加密密码",
								"type": "string",
								"default": "",
								"writeOnly": true
							}
						},
						"maxItems": 10
					}
				},
				"sort_certificate": {
					"description": "是否排序",
					"type": "string",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"default": "DISABLE",
					"example": "ENABLE"
				}
			}
		},
		"config.certificate_utility_certificate_list": {
			"type": "object",
			"properties": {
				"certificate_chains": {
					"description": "证书链",
					"type": "array",
					"items": {
						"$ref": "/api/{common}.yaml#/definitions/config.certificate_detail_with_token"
					}
				}
			}
		},
		"config.certificate_utility_file_abnormal": {
			"type": "object",
			"properties": {
				"certificate_files": {
					"description": "错误证书文件",
					"type": "array",
					"items": {
						"type": "object",
						"properties": {
							"file_token": {
								"description": "证书文件token",
								"type": "string"
							},
							"abnormal": {
								"type": "string",
								"description": "证书错误原因",
								"enum": [
									"REQUIRED-PASSWORD",
									"INCORRECT-PASSWORD",
									"BROKEN-FILE",
									"INVALID-CERTIFICATE",
									"UNKNOWN"
								]
							}
						}
					}
				}
			}
		}
	}
}