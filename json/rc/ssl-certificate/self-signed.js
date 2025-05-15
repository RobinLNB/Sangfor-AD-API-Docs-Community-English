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
		"/api/ad/v3/rc/ssl-certificate/self-signed/": {
			"description": "自签名证书配置相关操作",
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
					"$ref": "/api/{common}.yaml#/parameters/project"
				}
			],
			"get": {
				"tags": [
					"ssl-certificate"
				],
				"summary": "get all ssl-certificate-self-signed",
				"description": "获取自签名证书配置",
				"operationId": "get_ssl_certificate_self_signed_list",
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
						"$ref": "#/responses/operation_config_ssl_certificate_self_signed_list"
					}
				}
			},
			"post": {
				"tags": [
					"ssl-certificate"
				],
				"summary": "create new ssl-certificate-self-signed",
				"description": "新建自签名证书配置",
				"operationId": "add_ssl_certificate_self_signed_list",
				"parameters": [
					{
						"$ref": "#/parameters/SELF-SIGNED-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_ssl_certificate_self_signed_object"
					}
				}
			},
			"patch": {
				"deprecated": true,
				"tags": [
					"ssl-certificate"
				],
				"summary": "modify ssl-certificate-self-signed",
				"description": "修改自签名证书配置",
				"operationId": "edit_ssl_certificate_self_signed_list",
				"parameters": [
					{
						"$ref": "#/parameters/SELF-SIGNED-PROPERTY-MODIFY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_ssl_certificate_self_signed_list"
					}
				}
			},
			"__sfcli_example__": [
				{
					"command": "create  rc ssl-certificate self-signed  ssl1 type self-signed public_key_algorithm rsa public_key_length 2048 signature_algorithm sha256 subject { cn 34 c DD ou CC o DASD l DSA st SAD }  password  admin",
					"description": "新建自签名ssl证书ssl1"
				},
				{
					"command": "modify rc ssl-certificate self-signed  ssl1 name ssl2",
					"description": "修改自签名ssl证书ssl1名称为ssl2"
				},
				{
					"command": "delete rc ssl-certificate self-signed ssl1",
					"description": "删除自签名ssl证书ssl1"
				},
				{
					"command": "list rc ssl-certificate self-signed ssl1",
					"description": "查看自签名ssl证书ssl1"
				}
			]
		},
		"/api/ad/v3/rc/ssl-certificate/self-signed/{name}": {
			"description": "自签名证书配置相关操作",
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
					"$ref": "/api/{common}.yaml#/parameters/project"
				}
			],
			"get": {
				"tags": [
					"ssl-certificate"
				],
				"summary": "get specific ssl-certificate-self-signed",
				"description": "获取自签名证书配置",
				"operationId": "get_ssl_certificate_self_signed",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_ssl_certificate_self_signed_object"
					}
				}
			},
			"post": {
				"deprecated": true,
				"tags": [
					"ssl-certificate"
				],
				"summary": "create new ssl-certificate-self-signed",
				"description": "新建自签名证书配置",
				"operationId": "create_ssl_certificate_self_signed",
				"parameters": [
					{
						"$ref": "#/parameters/SELF-SIGNED-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_ssl_certificate_self_signed_object"
					}
				}
			},
			"put": {
				"tags": [
					"ssl-certificate"
				],
				"summary": "replace specific ssl-certificate-self-signed",
				"description": "修改自签名证书配置",
				"operationId": "replace_ssl_certificate_self_signed",
				"parameters": [
					{
						"$ref": "#/parameters/SELF-SIGNED-CONFIG-MODIFY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_ssl_certificate_self_signed_object"
					}
				}
			},
			"patch": {
				"tags": [
					"ssl-certificate"
				],
				"summary": "modify specific ssl-certificate-self-signed",
				"description": "修改自签名证书配置",
				"operationId": "edit_ssl_certificate_self_signed",
				"parameters": [
					{
						"$ref": "#/parameters/SELF-SIGNED-PROPERTY-MODIFY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_ssl_certificate_self_signed_object"
					}
				}
			},
			"delete": {
				"tags": [
					"ssl-certificate"
				],
				"summary": "delete specific ssl-certificate-self-signed",
				"description": "删除自签名证书配置",
				"operationId": "delete_ssl_certificate_self_signed",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_ssl_certificate_self_signed_object"
					}
				}
			}
		},
		"/api/ad/v3/rc/ssl-certificate/self-signed/{name}/certificate/": {
			"description": "自签名证书中的证书相关操作",
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
					"$ref": "/api/{common}.yaml#/parameters/project"
				}
			],
			"get": {
				"tags": [
					"ssl-certificate"
				],
				"summary": "export specific ssl-certificate-self-signed file",
				"description": "获取自签名证书的证书详情",
				"operationId": "export_ssl_certificate_self_signed_file",
				"responses": {
					"200": {
						"$ref": "/api/{common}.yaml#/responses/operation_cgi_file_resource_response"
					}
				}
			}
		}
	},
	"parameters": {
		"SELF-SIGNED-CONFIG": {
			"name": "SELF-SIGNED-CONFIG",
			"in": "body",
			"required": true,
			"description": "JSON Config Object",
			"schema": {
				"$ref": "#/definitions/config.ssl_certificate_self_signed"
			}
		},
		"SELF-SIGNED-CONFIG-MODIFY": {
			"name": "SELF-SIGNED-CONFIG-MODIFY",
			"in": "body",
			"required": true,
			"description": "JSON Config Object",
			"schema": {
				"$ref": "#/definitions/config.ssl_certificate_self_signed_modify"
			}
		},
		"SELF-SIGNED-PROPERTY-MODIFY": {
			"name": "SELF-SIGNED-PROPERTY",
			"in": "body",
			"required": true,
			"description": "JSON Config Properties",
			"schema": {
				"$ref": "#/definitions/config.ssl_certificate_self_signed_modify"
			}
		}
	},
	"responses": {
		"operation_config_ssl_certificate_self_signed_list": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.ssl_certificate_self_signed_view_list"
			}
		},
		"operation_config_ssl_certificate_self_signed_object": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.ssl_certificate_self_signed_view"
			}
		}
	},
	"definitions": {
		"config.ssl_certificate_self_signed_view_list": {
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
					"description": "当前项目列表",
					"type": "array",
					"items": {
						"description": "当前项目",
						"$ref": "#/definitions/config.ssl_certificate_self_signed_view"
					}
				}
			}
		},
		"config.ssl_certificate_self_signed_view": {
			"type": "object",
			"required": [
				"name",
				"subject"
			],
			"properties": {
				"name": {
					"description": "证书名称",
					"type": "string",
					"example": "www.abc.com_cert",
					"maxLength": 80,
					"minLength": 1
				},
				"description": {
					"description": "证书描述",
					"type": "string"
				},
				"type": {
					"description": "证书类型，只能是SELF-SIGNED",
					"type": "string",
					"enum": [
						"SELF-SIGNED"
					],
					"default": "SELF-SIGNED",
					"example": "SELF-SIGNED"
				},
				"subject": {
					"description": "证书subject",
					"required": [
						"cn",
						"c",
						"ou",
						"o",
						"l",
						"st"
					],
					"type": "object",
					"properties": {
						"cn": {
							"description": "通用名称",
							"type": "string",
							"minLength": 1,
							"maxLength": 63
						},
						"c": {
							"description": "国家",
							"type": "string"
						},
						"ou": {
							"description": "部门",
							"type": "string",
							"minLength": 1,
							"maxLength": 63
						},
						"o": {
							"description": "公司/机构",
							"type": "string",
							"minLength": 1,
							"maxLength": 63
						},
						"l": {
							"description": "城市",
							"type": "string",
							"minLength": 1,
							"maxLength": 63
						},
						"st": {
							"description": "省份",
							"type": "string",
							"minLength": 1,
							"maxLength": 63
						},
						"email": {
							"description": "EMAIL地址",
							"type": "string",
							"minLength": 1,
							"maxLength": 63
						}
					}
				},
				"public_key_algorithm": {
					"description": "公钥类型",
					"type": "string",
					"enum": [
						"RSA",
						"ECDSA"
					],
					"default": "RSA"
				},
				"public_key_length": {
					"description": "私钥长度",
					"type": "integer",
					"enum": [
						256,
						384,
						1024,
						2048,
						4096
					],
					"default": 2048
				},
				"signature_algorithm": {
					"description": "签名哈希算法",
					"type": "string",
					"enum": [
						"SHA256",
						"SHA1"
					]
				},
				"validity_not_before": {
					"description": "证书有效起始时间",
					"type": "string",
					"readOnly": true
				},
				"validity_not_after": {
					"description": "证书有效结束时间",
					"type": "string",
					"readOnly": true
				},
				"password": {
					"type": "string",
					"writeOnly": true,
					"description": "私钥加密密码",
					"maxLength": 64,
					"minLength": 8
				},
				"pk_password": {
					"type": "string",
					"writeOnly": true,
					"description": "加密的私钥加密密码"
				},
				"encrypted_password": {
					"type": "string",
					"description": "加密的私钥加密密码",
					"writeOnly": true
				},
				"certificate_chains": {
					"description": "证书链列表",
					"type": "array",
					"readOnly": true,
					"items": {
						"description": "单个证书详情",
						"$ref": "/api/{common}.yaml#/definitions/config.certificate_detail"
					}
				},
				"project": {
					"description": "项目名称",
					"type": "string",
					"minLength": 1
				}
			}
		},
		"config.ssl_certificate_self_signed": {
			"type": "object",
			"required": [
				"name",
				"subject"
			],
			"properties": {
				"name": {
					"type": "string",
					"description": "必选参数；指定ssl证书的名称, 在配置中必须唯一。",
					"example": "www.abc.com_cert",
					"maxLength": 80,
					"minLength": 1
				},
				"description": {
					"type": "string",
					"description": "可选参数；配置描述信息。"
				},
				"type": {
					"type": "string",
					"description": "可选参数；指定ssl证书类型。",
					"enum": [
						"SELF-SIGNED"
					],
					"default": "SELF-SIGNED",
					"example": "SELF-SIGNED"
				},
				"subject": {
					"type": "object",
					"description": "可选参数；指定ssl证书信息。",
					"required": [
						"cn",
						"c",
						"ou",
						"o",
						"l",
						"st"
					],
					"properties": {
						"cn": {
							"type": "string",
							"description": "必选参数；指定通用名称。",
							"minLength": 1,
							"maxLength": 63
						},
						"c": {
							"type": "string",
							"description": "必选参数；指定国家。"
						},
						"ou": {
							"type": "string",
							"description": "必选参数；指定部门。",
							"minLength": 1,
							"maxLength": 63
						},
						"o": {
							"type": "string",
							"description": "必选参数；指定公司/机构。",
							"minLength": 1,
							"maxLength": 63
						},
						"l": {
							"type": "string",
							"description": "必选参数；指定城市。",
							"minLength": 1,
							"maxLength": 63
						},
						"st": {
							"type": "string",
							"description": "必选参数；指定省份。",
							"minLength": 1,
							"maxLength": 63
						},
						"email": {
							"type": "string",
							"description": "必选参数；指定email地址。",
							"minLength": 0,
							"maxLength": 63
						}
					}
				},
				"public_key_algorithm": {
					"type": "string",
					"description": "可选参数；指定公钥类型。",
					"enum": [
						"RSA",
						"ECDSA"
					],
					"default": "RSA"
				},
				"public_key_length": {
					"type": "integer",
					"description": "可选参数；指定秘钥长度。",
					"enum": [
						256,
						384,
						1024,
						2048,
						4096
					],
					"default": "2048"
				},
				"signature_algorithm": {
					"type": "string",
					"description": "可选参数；指定签名算法。",
					"enum": [
						"SHA256",
						"SHA1"
					],
					"default": "SHA256"
				},
				"validity_time_year": {
					"description": "证书有效时间（年）",
					"type": "integer",
					"enum": [
						1,
						2,
						3,
						4,
						5,
						10,
						20
					],
					"default": 5
				},
				"password": {
					"type": "string",
					"description": "可选参数；指定私钥加密密码。",
					"writeOnly": true,
					"maxLength": 64,
					"minLength": 8
				},
				"pk_password": {
					"description": "可选参数；加密的私钥加密密码",
					"type": "string",
					"writeOnly": true
				},
				"encrypted_password": {
					"description": "可选参数；加密的私钥加密密码",
					"type": "string"
				},
				"project": {
					"description": "关联的项目",
					"type": "string",
					"maxLength": 511,
					"minLength": 1
				}
			}
		},
		"config.ssl_certificate_self_signed_modify": {
			"type": "object",
			"required": [
				"name"
			],
			"properties": {
				"name": {
					"type": "string",
					"maxLength": 80,
					"minLength": 1,
					"description": "可选参数；指定ssl证书的名称, 在配置中必须唯一。",
					"example": "www.abc.com_cert"
				},
				"description": {
					"type": "string",
					"description": "可选参数；配置描述信息。"
				}
			}
		}
	}
}