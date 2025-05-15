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
		"/api/ad/v3/dns/dns-map/{dns_config_area}/": {
			"description": "DNS映射配置管理操作",
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
					"$ref": "#/parameters/dns_config_area"
				}
			],
			"get": {
				"tags": [
					"dns-map"
				],
				"summary": "get all dns-map",
				"description": "查看DNS映射",
				"operationId": "get_dns_map_list",
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
						"$ref": "#/responses/operation_config_dns_map_list"
					}
				}
			},
			"post": {
				"tags": [
					"dns-map"
				],
				"summary": "create new dns-map",
				"description": "创建DNS映射",
				"operationId": "add_dns_map_list",
				"parameters": [
					{
						"$ref": "#/parameters/DNS-MAP-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_dns_map_object"
					}
				}
			},
			"patch": {
				"deprecated": true,
				"tags": [
					"dns-map"
				],
				"summary": "modify dns-map",
				"description": "修改DNS映射",
				"operationId": "edit_dns_map_list",
				"parameters": [
					{
						"$ref": "#/parameters/DNS-MAP-PROPERTY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_dns_map_list"
					}
				}
			}
		},
		"/api/ad/v3/dns/dns-map/{dns_config_area}/{name}": {
			"description": "dns映射配置管理操作",
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
					"$ref": "#/parameters/dns_config_area"
				}
			],
			"get": {
				"tags": [
					"dns-map"
				],
				"summary": "get specific dns-map",
				"description": "查看指定已有的DNS映射",
				"operationId": "get_dns_map",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_dns_map_object"
					}
				}
			},
			"post": {
				"deprecated": true,
				"tags": [
					"dns-map"
				],
				"summary": "create new dns-map",
				"description": "创建DNS映射",
				"operationId": "create_dns_map",
				"parameters": [
					{
						"$ref": "#/parameters/DNS-MAP-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_dns_map_object"
					}
				}
			},
			"put": {
				"tags": [
					"dns-map"
				],
				"summary": "replace specific dns-map",
				"description": "修改指定已有的DNS映射",
				"operationId": "replace_dns_map",
				"parameters": [
					{
						"$ref": "#/parameters/DNS-MAP-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_dns_map_object"
					}
				}
			},
			"patch": {
				"tags": [
					"dns-map"
				],
				"summary": "modify specific dns-map",
				"description": "增量指定已有的修改DNS映射",
				"operationId": "edit_dns_map",
				"parameters": [
					{
						"$ref": "#/parameters/DNS-MAP-PROPERTY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_dns_map_object"
					}
				}
			},
			"delete": {
				"tags": [
					"dns-map"
				],
				"summary": "delete specific dns-map",
				"description": "删除指定已有的DNS映射",
				"operationId": "delete_dns_map",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_dns_map_object"
					}
				}
			},
			"__sfcli_example__": [
				{
					"command": "list dns dns-map global global_map",
					"description": "查看全局DNS映射配置，映射名称为：global_map"
				},
				{
					"command": "list dns dns-map local local_map",
					"description": "查看本地DNS映射配置，映射名称为：local_map"
				},
				{
					"command": "create dns dns-map global global_map description create_global_map domains [ global.com ] method topology persist 11 state enable topology_failover_delay 18 ttl 12 type ipv4 vip_pools [ global_pool ]",
					"description": "查看全局DNS映射配置，映射名称为：global_map 域名：global.com 调度策略：静态就近性 会话保持：11 延迟切换：18 引用的虚拟IP池：global_pool"
				},
				{
					"command": "create dns dns-map local local_map description create_local_map domains [ local.com ] method  weighted-round-robin persist 11 state enable topology_failover_delay 18 ttl 12 type ipv4 vip_pools [ local_pool ]",
					"description": "查看本地DNS映射配置，映射名称为：local_map 域名：local.com 调度策略：加权轮询 会话保持：11 延迟切换：18 引用的虚拟IP池：local_pool"
				},
				{
					"command": "modify dns dns-map global global_map name new_global_map description modify_global domains add [ new_global.com ] method round-robin topology_failover_delay 12 persist 300 ttl 120 state disable type ipv4 vip_pools add [ global_new_pool ]",
					"description": "修改全局DNS映射配置，修改映射名称为：new_global_map 添加域名：new_global.com 修改调度策略为：轮询 修改会话保持：300 修改延迟切换：12 添加引用的虚拟IP池：global_new_pool"
				},
				{
					"command": "modify dns dns-map local local_map name new_local_map description modify_local domains add [ new_local.com ] method round-robin topology_failover_delay 12 persist 300 ttl 120 state disable type ipv4 vip_pools add [ local_new_pool ]",
					"description": "修改本地DNS映射配置，修改映射名称为：new_local_map 添加域名：new_local.com 修改调度策略为：轮询 修改会话保持：300 修改延迟切换：12 添加引用的虚拟IP池：local_new_pool"
				},
				{
					"command": "delete dns dns-map global new_global_map",
					"description": "删除全局DNS映射配置，映射名称为：new_global_map"
				},
				{
					"command": "delete dns dns-map local new_local_map",
					"description": "删除本地DNS映射配置，映射名称为：new_local_map"
				}
			]
		}
	},
	"parameters": {
		"DNS-MAP-CONFIG": {
			"name": "DNS-MAP-CONFIG",
			"in": "body",
			"required": true,
			"description": "DNS映射配置",
			"schema": {
				"$ref": "#/definitions/config.dns_map"
			}
		},
		"DNS-MAP-PROPERTY": {
			"name": "DNS-MAP-PROPERTY",
			"in": "body",
			"required": true,
			"description": "DNS映射配置属性",
			"schema": {
				"$ref": "#/definitions/config.dns_map"
			}
		},
		"dns_config_area": {
			"name": "dns_config_area",
			"in": "path",
			"required": true,
			"type": "string",
			"description": "本地和全局区域",
			"enum": [
				"local",
				"global"
			],
			"example": "global"
		}
	},
	"responses": {
		"operation_config_dns_map_list": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.dns_map_list"
			}
		},
		"operation_config_dns_map_object": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.dns_map"
			}
		}
	},
	"definitions": {
		"config.dns_map_list": {
			"type": "object",
			"properties": {
				"maximum_items": {
					"description": "项目数量最大值",
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
					"description": "页面大小",
					"type": "integer",
					"example": 10
				},
				"total_items": {
					"description": "项目总数",
					"type": "integer",
					"example": 48
				},
				"items_offset": {
					"description": "项目偏移量",
					"type": "integer",
					"example": 40
				},
				"items_length": {
					"description": "项目长度",
					"type": "integer",
					"example": 8
				},
				"items": {
					"description": "当前项目列表",
					"type": "array",
					"items": {
						"$ref": "#/definitions/config.dns_map"
					}
				}
			}
		},
		"config.dns_map": {
			"type": "object",
			"required": [
				"name",
				"domains",
				"vip_pools"
			],
			"properties": {
				"name": {
					"description": "DNS映射名称，不冲突",
					"type": "string",
					"example": "abc.com"
				},
				"description": {
					"description": "DNS映射描述信息",
					"type": "string"
				},
				"state": {
					"description": "DNS映射状态信息，默认ENABLE",
					"type": "string",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"default": "ENABLE",
					"example": "ENABLE"
				},
				"type": {
					"description": "DNS映射类型，默认IPV4",
					"type": "string",
					"enum": [
						"IPV4",
						"IPV6"
					],
					"default": "IPV4",
					"example": "IPV4"
				},
				"domains": {
					"description": "域名策略列表",
					"type": "array",
					"items": {
						"description": "域名名称",
						"type": "string",
						"example": "www.abc.com"
					},
					"maxItems": 8,
					"minItems": 1,
					"example": [
						"www.abc.com",
						"mail.abc.com",
						"bbs.abc.com"
					]
				},
				"method": {
					"description": "虚拟IP池调度策略，有轮询、加权轮询、静态就近性 默认为TOPOLOGY",
					"type": "string",
					"enum": [
						"ROUND-ROBIN",
						"WEIGHTED-ROUND-ROBIN",
						"TOPOLOGY"
					],
					"default": "TOPOLOGY",
					"example": "TOPOLOGY"
				},
				"topology_failover_delay": {
					"description": "静态就近性延迟切换时间，默认0",
					"type": "integer",
					"default": 0,
					"example": 0,
					"minimum": 0,
					"maximum": 86400
				},
				"csubnet": {
					"type": "string",
					"description": "客户端优先，启用时，优先使用客户端的真实源IP。",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"default": "DISABLE",
					"example": "DISABLE"
				},
				"persist": {
					"description": "会话保持时间，默认300",
					"type": "integer",
					"default": 300,
					"example": 300,
					"minimum": 0,
					"maximum": 86400
				},
				"ttl": {
					"description": "TTL值，必须为0~86400之间的整数",
					"type": "integer",
					"default": 60,
					"minimum": 0,
					"maximum": 86400
				},
				"vip_pools": {
					"description": "虚拟IP池列表",
					"type": "array",
					"items": {
						"description": "虚拟IP池",
						"type": "object",
						"required": [
							"vip_pool"
						],
						"properties": {
							"vip_pool": {
								"description": "虚拟IP池，必须已存在",
								"type": "string",
								"example": "web_vpool"
							},
							"weight": {
								"description": "权重",
								"type": "integer",
								"default": 10,
								"example": 10,
								"minimum": 1,
								"maximum": 100
							}
						}
					},
					"maxItems": 8,
					"minItems": 1
				}
			}
		}
	}
}