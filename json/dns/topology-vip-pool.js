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
		"/api/ad/v3/dns/topology-vip-pool/{dns_config_area}/": {
			"description": "虚拟IP级别的静态就近性规则配置管理操作",
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
					"topology-vip-pool"
				],
				"summary": "get all topology-vip-pool",
				"description": "虚拟IP池级别的静态就近性规则配置",
				"operationId": "get_topology_vip_pool_list",
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
						"$ref": "#/responses/operation_config_topology_vip_pool_list"
					}
				}
			},
			"post": {
				"tags": [
					"topology-vip-pool"
				],
				"summary": "create new topology-vip-pool",
				"description": "创建虚拟IP池级别的静态就近性规则配置",
				"operationId": "add_topology_vip_pool_list",
				"parameters": [
					{
						"$ref": "#/parameters/TOPOLOGY-VIP-POOL-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_topology_vip_pool_object"
					}
				}
			},
			"patch": {
				"deprecated": true,
				"tags": [
					"topology-vip-pool"
				],
				"summary": "modify topology-vip-pool",
				"description": "增量修改虚拟IP池级别的静态就近性规则配置",
				"operationId": "edit_topology_vip_pool_list",
				"parameters": [
					{
						"$ref": "#/parameters/TOPOLOGY-VIP-POOL-PROPERTY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_topology_vip_pool_list"
					}
				}
			}
		},
		"/api/ad/v3/dns/topology-vip-pool/{dns_config_area}/{name}": {
			"description": "虚拟IP级别的静态就近性规则配置管理操作",
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
					"topology-vip-pool"
				],
				"summary": "get specific topology-vip-pool",
				"description": "查看指定已有的虚拟IP池级别的静态就近性规则配置",
				"operationId": "get_topology_vip_pool",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_topology_vip_pool_object"
					}
				}
			},
			"post": {
				"deprecated": true,
				"tags": [
					"topology-vip-pool"
				],
				"summary": "create new topology-vip-pool",
				"description": "创建虚拟IP池级别的静态就近性规则配置",
				"operationId": "create_topology_vip_pool",
				"parameters": [
					{
						"$ref": "#/parameters/TOPOLOGY-VIP-POOL-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_topology_vip_pool_object"
					}
				}
			},
			"put": {
				"tags": [
					"topology-vip-pool"
				],
				"summary": "replace specific topology-vip-pool",
				"description": "修改指定已有虚拟IP池级别的静态就近性规则配置",
				"operationId": "replace_topology_vip_pool",
				"parameters": [
					{
						"$ref": "#/parameters/TOPOLOGY-VIP-POOL-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_topology_vip_pool_object"
					}
				}
			},
			"patch": {
				"tags": [
					"topology-vip-pool"
				],
				"summary": "modify specific topology-vip-pool",
				"description": "增量修改指定已有的虚拟IP池级别的静态就近性规则配置",
				"operationId": "edit_topology_vip_pool",
				"parameters": [
					{
						"$ref": "#/parameters/TOPOLOGY-VIP-POOL-PROPERTY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_topology_vip_pool_object"
					}
				}
			},
			"delete": {
				"tags": [
					"topology-vip-pool"
				],
				"summary": "删除指定已有的虚拟IP池级别的静态就近性规则配置",
				"description": "",
				"operationId": "delete_topology_vip_pool",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_topology_vip_pool_object"
					}
				}
			},
			"__sfcli_example__": [
				{
					"command": "list dns topology-vip-pool global tvpg",
					"description": "查看全局DNS映射级别的静态就近性规则，名称：tvpg"
				},
				{
					"command": "list dns topology-vip-pool local tvpl",
					"description": "查看本地DNS映射级别的静态就近性规则，名称：tvpl"
				},
				{
					"command": "create dns topology-vip-pool global tvpg description create_dns_vp position 1 state enable vips add [192.168.3.15] local_dns ldg vip_pool vpg",
					"description": "创建全局DNS映射级别的静态就近性规则，名称：tvpg 引用的虚拟IP：192.168.3.15 引用的本地DNS集合：ldg 引用的虚拟IP池：vpg"
				},
				{
					"command": "create dns topology-vip-pool local tvpl description create_dns_vp position 1 state enable vips add [192.168.3.16] local_dns ldl vip_pool vpl",
					"description": "创建本地DNS映射级别的静态就近性规则，名称：tnml 引用的虚拟IP：192.168.3.16 引用的本地DNS集合：ldl 引用的虚拟IP池：vpl"
				},
				{
					"command": "modify dns topology-vip-pool global tvpg name new_tvpg description modify_tvpg state disable position 2 vips add [168.3.6.9] local_dns new_ldg vip_pool new_vpg",
					"description": "修改全局DNS映射级别的静态就近性规则，修改后名称：new_tvpg 添加虚拟IP：168.3.6.9 修改引用的本地DNS集合：new_ldg 修改引用的虚拟IP池：new_vpg"
				},
				{
					"command": "modify dns topology-vip-pool local tvpg name new_tvpl description modify_tvpg state disable position 2 vips add [168.3.9.10] local_dns new_ldl vip_pool new_vpl",
					"description": "修改本地DNS映射级别的静态就近性规则，修改后名称：new_tvpl 添加虚拟IP：168.3.6.10 修改后引用的本地DNS集合：new_ldl 修改后引用的虚拟IP池：new_vpl"
				},
				{
					"command": "delete dns topology-vip-pool global new_tvpg",
					"description": "删除全局DNS映射级别的静态就近性规则，名称：new_tvpg"
				},
				{
					"command": "delete dns topology-vip-pool local new_tnml",
					"description": "删除本地DNS映射级别的静态就近性规则，名称：new_tvpl"
				}
			]
		}
	},
	"parameters": {
		"TOPOLOGY-VIP-POOL-CONFIG": {
			"name": "TOPOLOGY-VIP-POOL-CONFIG",
			"in": "body",
			"required": true,
			"description": "虚拟IP池级别的静态就近性规则配置",
			"schema": {
				"$ref": "#/definitions/config.topology_vip_pool"
			}
		},
		"TOPOLOGY-VIP-POOL-PROPERTY": {
			"name": "TOPOLOGY-VIP-POOL-PROPERTY",
			"in": "body",
			"required": true,
			"description": "虚拟IP池级别的静态就近性规则配置属性",
			"schema": {
				"$ref": "#/definitions/config.topology_vip_pool"
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
		"operation_config_topology_vip_pool_list": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.topology_vip_pool_list"
			}
		},
		"operation_config_topology_vip_pool_object": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.topology_vip_pool"
			}
		}
	},
	"definitions": {
		"config.topology_vip_pool_list": {
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
						"$ref": "#/definitions/config.topology_vip_pool"
					}
				}
			}
		},
		"config.topology_vip_pool": {
			"type": "object",
			"required": [
				"name",
				"vip_pool",
				"local_dns",
				"vips"
			],
			"properties": {
				"name": {
					"description": "虚拟IP池级别的静态就近性规则名称，必须唯一",
					"type": "string",
					"example": "abc.com"
				},
				"description": {
					"description": "虚拟IP池级别的静态就近性规则配置描述信息",
					"type": "string"
				},
				"position": {
					"description": "静态就近性规则的位置序号",
					"type": "integer",
					"default": 65535,
					"example": 1,
					"minimum": 0,
					"maximum": 65535
				},
				"state": {
					"description": "虚拟IP池级别的静态就近性规则状态，默认ENABLE",
					"type": "string",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"default": "ENABLE"
				},
				"vip_pool": {
					"description": "虚拟IP池，必须已经存在",
					"type": "string",
					"example": "www.abc.com"
				},
				"local_dns": {
					"description": "本地DNS集合名称，必须存在",
					"type": "string",
					"example": "northesatern"
				},
				"vips": {
					"type": "array",
					"description": "虚拟IP地址列表",
					"items": {
						"description": "虚拟IP地址，必须在虚拟IP池中",
						"type": "string",
						"example": "192.168.2.67"
					},
					"minItems": 1
				}
			}
		}
	}
}