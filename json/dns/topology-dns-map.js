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
		"/api/ad/v3/dns/topology-dns-map/{dns_config_area}/": {
			"description": "DNS映射级别的静态就近性规则配置管理操作",
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
					"topology-dns-map"
				],
				"summary": "get all topology-dns-map",
				"description": "DNS映射级别的静态就近性规则配置",
				"operationId": "get_topology_dns_map_list",
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
						"$ref": "#/responses/operation_config_topology_dns_map_list"
					}
				}
			},
			"post": {
				"tags": [
					"topology-dns-map"
				],
				"summary": "create new topology-dns-map",
				"description": "创建DNS映射级别的静态就近性规则配置",
				"operationId": "add_topology_dns_map_list",
				"parameters": [
					{
						"$ref": "#/parameters/TOPOLOGY-DNS-MAP-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_topology_dns_map_object"
					}
				}
			},
			"patch": {
				"deprecated": true,
				"tags": [
					"topology-dns-map"
				],
				"summary": "modify topology-dns-map",
				"description": "增量修改DNS映射级别的静态就近性规则配置",
				"operationId": "edit_topology_dns_map_list",
				"parameters": [
					{
						"$ref": "#/parameters/TOPOLOGY-DNS-MAP-PROPERTY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_topology_dns_map_list"
					}
				}
			}
		},
		"/api/ad/v3/dns/topology-dns-map/{dns_config_area}/{name}": {
			"description": "DNS映射级别的静态就近性规则配置相关操作",
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
					"topology-dns-map"
				],
				"summary": "get specific topology-dns-map",
				"description": "查看指定已有的DNS映射级别的静态就近性规则配置",
				"operationId": "get_topology_dns_map",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_topology_dns_map_object"
					}
				}
			},
			"post": {
				"deprecated": true,
				"tags": [
					"topology-dns-map"
				],
				"summary": "create new topology-dns-map",
				"description": "创建DNS映射级别的静态就近性规则配置",
				"operationId": "create_topology_dns_map",
				"parameters": [
					{
						"$ref": "#/parameters/TOPOLOGY-DNS-MAP-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_topology_dns_map_object"
					}
				}
			},
			"put": {
				"tags": [
					"topology-dns-map"
				],
				"summary": "replace specific topology-dns-map",
				"description": "修改指定已有DNS映射级别的静态就近性规则配置",
				"operationId": "replace_topology_dns_map",
				"parameters": [
					{
						"$ref": "#/parameters/TOPOLOGY-DNS-MAP-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_topology_dns_map_object"
					}
				}
			},
			"patch": {
				"tags": [
					"topology-dns-map"
				],
				"summary": "modify specific topology-dns-map",
				"description": "增量修改指定已有的DNS映射级别的静态就近性规则配置",
				"operationId": "edit_topology_dns_map",
				"parameters": [
					{
						"$ref": "#/parameters/TOPOLOGY-DNS-MAP-PROPERTY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_topology_dns_map_object"
					}
				}
			},
			"delete": {
				"tags": [
					"topology-dns-map"
				],
				"summary": "delete specific topology-dns-map",
				"description": "删除指定已有的DNS映射级别的静态就近性规则配置",
				"operationId": "delete_topology_dns_map",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_topology_dns_map_object"
					}
				}
			},
			"__sfcli_example__": [
				{
					"command": "list dns topology-dns-map global tnmg",
					"description": "查看全局DNS映射级别的静态就近性规则，名称：tnmg"
				},
				{
					"command": "list dns topology-dns-map local tnml",
					"description": "查看本地DNS映射级别的静态就近性规则，名称：tnml"
				},
				{
					"command": "create dns topology-dns-map global tnmg description create_dns_map position 1 state enable dns_map dmg local_dns ldg vip_pool vpg",
					"description": "创建全局DNS映射级别的静态就近性规则，名称：tnmg 引用的DNS映射：dmg 引用的本地DNS集合：ldg 引用的虚拟IP池：vpg"
				},
				{
					"command": "create dns topology-dns-map local tnml description create_dns_map position 1 state enable dns_map dml local_dns ldl vip_pool vpl",
					"description": "创建本地DNS映射级别的静态就近性规则，名称：tnml 引用的DNS映射：dml 引用的本地DNS集合：ldl 引用的虚拟IP池：vpl"
				},
				{
					"command": "modify dns topology-dns-map global tnmg name new_tnmg description modify_tnmg state disable position 2 dns_map new_dmg local_dns new_ldg vip_pool new_vpg",
					"description": "修改全局DNS映射级别的静态就近性规则，修改后名称：new_tnmg 修改引用的DNS映射：new_dmg 修改引用的本地DNS集合：new_ldg 修改引用的虚拟IP池：new_vpg"
				},
				{
					"command": "modify dns topology-dns-map local tnmg name new_tnml description modify_tnmg state disable position 2 dns_map new_dml local_dns new_ldl vip_pool new_vpl",
					"description": "修改本地DNS映射级别的静态就近性规则，修改后名称：new_tnml 修改后引用的DNS映射：new_dml 修改后引用的本地DNS集合：new_ldl 修改后引用的虚拟IP池：new_vpl"
				},
				{
					"command": "delete dns topology-dns-map global new_tnmg",
					"description": "删除全局DNS映射级别的静态就近性规则，名称：new_tnmg"
				},
				{
					"command": "delete dns topology-dns-map local new_tnml",
					"description": "删除本地DNS映射级别的静态就近性规则，名称：new_tnml"
				}
			]
		}
	},
	"parameters": {
		"TOPOLOGY-DNS-MAP-CONFIG": {
			"name": "TOPOLOGY-DNS-MAP-CONFIG",
			"in": "body",
			"required": true,
			"description": "DNS映射级别的静态就近性规则配置",
			"schema": {
				"$ref": "#/definitions/config.topology_dns_map"
			}
		},
		"TOPOLOGY-DNS-MAP-PROPERTY": {
			"name": "TOPOLOGY-DNS-MAP-PROPERTY",
			"in": "body",
			"required": true,
			"description": "DNS映射级别的静态就近性规则配置属性",
			"schema": {
				"$ref": "#/definitions/config.topology_dns_map"
			}
		},
		"dns_config_area": {
			"name": "dns_config_area",
			"in": "path",
			"required": true,
			"type": "string",
			"description": "全局和本地区域",
			"enum": [
				"local",
				"global"
			],
			"example": "global"
		}
	},
	"responses": {
		"operation_config_topology_dns_map_list": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.topology_dns_map_list"
			}
		},
		"operation_config_topology_dns_map_object": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.topology_dns_map"
			}
		}
	},
	"definitions": {
		"config.topology_dns_map_list": {
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
						"$ref": "#/definitions/config.topology_dns_map"
					}
				}
			}
		},
		"config.topology_dns_map": {
			"type": "object",
			"required": [
				"name",
				"dns_map",
				"local_dns",
				"vip_pool"
			],
			"properties": {
				"name": {
					"description": "DNS映射级别的静态就近性规则名称，必须唯一",
					"type": "string",
					"example": "abc.com"
				},
				"description": {
					"description": "DNS映射级别的静态就近性规则配置描述信息",
					"type": "string"
				},
				"position": {
					"type": "integer",
					"description": "位置",
					"default": 65535,
					"example": 1,
					"minimum": 0,
					"maximum": 65535
				},
				"state": {
					"description": "DNS映射级别的静态就近性规则状态，默认ENABLE",
					"type": "string",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"default": "ENABLE"
				},
				"dns_map": {
					"description": "DNS映射配置名称，必须存在",
					"type": "string",
					"example": "www.abc.com"
				},
				"local_dns": {
					"description": "本地DNS集合名称，必须存在",
					"type": "string",
					"example": "northesatern"
				},
				"vip_pool": {
					"description": "虚拟IP池，必须已经存在",
					"type": "string",
					"example": "http_80_vpool"
				}
			}
		}
	}
}