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
		"/api/ad/v3/dns/vip-pool/global/": {
			"description": "虚拟IP池配置相关操作",
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
					"vip-pool"
				],
				"summary": "get all vip-pool",
				"description": "查看虚拟IP池配置",
				"operationId": "get_vip_pool_list",
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
						"$ref": "#/responses/operation_config_vip_pool_list"
					}
				}
			},
			"post": {
				"tags": [
					"vip-pool"
				],
				"summary": "create new vip-pool",
				"description": "创建虚拟IP池配置",
				"operationId": "add_vip_pool_list",
				"parameters": [
					{
						"$ref": "#/parameters/VIP-POOL-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_vip_pool_object"
					}
				}
			},
			"patch": {
				"deprecated": true,
				"tags": [
					"vip-pool"
				],
				"summary": "modify vip-pool",
				"description": "增量修改虚拟IP池配置",
				"operationId": "增量修改虚拟IP池配置",
				"parameters": [
					{
						"$ref": "#/parameters/VIP-POOL-PROPERTY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_vip_pool_list"
					}
				}
			}
		},
		"/api/ad/v3/dns/vip-pool/global/{name}": {
			"description": "虚拟IP池配置相关操作",
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
					"vip-pool"
				],
				"summary": "get specific vip-pool",
				"description": "查看指定已有的虚拟IP池",
				"operationId": "get_vip_pool",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_vip_pool_object"
					}
				}
			},
			"post": {
				"deprecated": true,
				"tags": [
					"vip-pool"
				],
				"summary": "create new vip-pool",
				"description": "创建虚拟IP池",
				"operationId": "create_vip_pool",
				"parameters": [
					{
						"$ref": "#/parameters/VIP-POOL-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_vip_pool_object"
					}
				}
			},
			"put": {
				"tags": [
					"vip-pool"
				],
				"summary": "replace specific vip-pool",
				"description": "修改指定已有的虚拟IP池",
				"operationId": "replace_vip_pool",
				"parameters": [
					{
						"$ref": "#/parameters/VIP-POOL-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_vip_pool_object"
					}
				}
			},
			"patch": {
				"tags": [
					"vip-pool"
				],
				"summary": "modify specific vip-pool",
				"description": "修改指定已有的虚拟IP池",
				"operationId": "修改指定已有的虚拟IP池",
				"parameters": [
					{
						"$ref": "#/parameters/VIP-POOL-PROPERTY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_vip_pool_object"
					}
				}
			},
			"delete": {
				"tags": [
					"vip-pool"
				],
				"summary": "delete specific vip-pool",
				"description": "删除指定已有的虚拟IP池",
				"operationId": "delete_vip_pool",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_vip_pool_object"
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
		},
		"/api/ad/v3/dns/vip-pool/global/{vip_pool_name}/vips/": {
			"description": "虚拟IP池中的虚拟IP配置相关操作",
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
					"$ref": "#/parameters/vip_pool_name"
				}
			],
			"get": {
				"tags": [
					"vip-pool"
				],
				"summary": "get all vips of specific vip-pool",
				"description": "查看指定已有的虚拟IP池中的虚拟IP",
				"operationId": "get_vip_list_specific_vip_pool",
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
						"$ref": "#/responses/operation_config_vip_pool_vip_list"
					}
				}
			},
			"post": {
				"tags": [
					"vip-pool"
				],
				"summary": "create new vip of specific vip-pool",
				"description": "在指定已有的虚拟IP池中创建虚拟IP",
				"operationId": "add_vip_list_specific_vip_pool",
				"parameters": [
					{
						"$ref": "#/parameters/VIP-VIP-POOL-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_vip_pool_vip"
					}
				}
			},
			"patch": {
				"deprecated": true,
				"tags": [
					"vip-pool"
				],
				"summary": "modify vip of specific vip-pool",
				"description": "修改指定已有的虚拟IP池的虚拟IP",
				"operationId": "edit_vip_list_specific_vip_pool",
				"parameters": [
					{
						"$ref": "#/parameters/VIP-VIP-POOL-PROPERTY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_vip_pool_vip_list"
					}
				}
			}
		},
		"/api/ad/v3/dns/vip-pool/global/{vip_pool_name}/vips/{vip}": {
			"description": "虚拟IP池中的虚拟IP配置相关操作",
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
					"$ref": "#/parameters/vip_pool_name"
				},
				{
					"$ref": "#/parameters/vip"
				}
			],
			"get": {
				"tags": [
					"vip-pool"
				],
				"summary": "get specific vip of vip-pool",
				"description": "查看指定已有的虚拟IP池的指定已有的虚拟IP信息",
				"operationId": "get_specific_vip_of_vip_pool",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_vip_pool_vip"
					}
				}
			},
			"post": {
				"deprecated": true,
				"tags": [
					"vip-pool"
				],
				"summary": "create new vip of vip-pool",
				"description": "在指定已有的虚拟IP池中创建虚拟IP",
				"operationId": "create_vip_of_vip_pool",
				"parameters": [
					{
						"$ref": "#/parameters/VIP-VIP-POOL-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_vip_pool_vip"
					}
				}
			},
			"put": {
				"tags": [
					"vip-pool"
				],
				"summary": "replace specific vip of vip-pool",
				"description": "修改指定已有的虚拟IP池中的指定已有的虚拟IP",
				"operationId": "replace_specific_vip_of_vip_pool",
				"parameters": [
					{
						"$ref": "#/parameters/VIP-VIP-POOL-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_vip_pool_vip"
					}
				}
			},
			"patch": {
				"tags": [
					"vip-pool"
				],
				"summary": "modify specific vip-pool",
				"description": "增量修改指定已有的虚拟IP池中的指定已有的虚拟IP",
				"operationId": "edit_specific_vip_of_vip_pool",
				"parameters": [
					{
						"$ref": "#/parameters/VIP-VIP-POOL-PROPERTY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_vip_pool_vip"
					}
				}
			},
			"delete": {
				"tags": [
					"vip-pool"
				],
				"summary": "delete specific vip of vip-pool",
				"description": "删除指定已有的虚拟IP池中的指定已有的虚拟IP",
				"operationId": "delete_specific_vip_of_vip_pool",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_vip_pool_vip"
					}
				}
			}
		}
	},
	"parameters": {
		"VIP-POOL-CONFIG": {
			"name": "VIP-POOL-CONFIG",
			"in": "body",
			"required": true,
			"description": "虚拟IP池配置",
			"schema": {
				"$ref": "#/definitions/config.vip_pool"
			}
		},
		"VIP-POOL-PROPERTY": {
			"name": "VIP-POOL-PROPERTY",
			"in": "body",
			"required": true,
			"description": "虚拟IP池配置属性",
			"schema": {
				"$ref": "#/definitions/config.vip_pool"
			}
		},
		"VIP-VIP-POOL-CONFIG": {
			"name": "VIP-POOL-CONFIG",
			"in": "body",
			"required": true,
			"description": "虚拟IP池中的虚拟IP配置",
			"schema": {
				"$ref": "#/definitions/config.vip_pool_vip"
			}
		},
		"VIP-VIP-POOL-PROPERTY": {
			"name": "VIP-POOL-PROPERTY",
			"in": "body",
			"required": true,
			"description": "虚拟IP池中的虚拟IP配置属性",
			"schema": {
				"$ref": "#/definitions/config.vip_pool_vip"
			}
		},
		"vip_pool_name": {
			"description": "虚拟IP池名称",
			"name": "vip_pool_name",
			"in": "path",
			"required": true,
			"type": "string"
		},
		"vip": {
			"name": "vip",
			"in": "path",
			"required": true,
			"type": "string",
			"description": "虚拟IP"
		}
	},
	"responses": {
		"operation_config_vip_pool_list": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.vip_pool_list"
			}
		},
		"operation_config_vip_pool_object": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.vip_pool"
			}
		},
		"operation_config_vip_pool_vip_list": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.vip_pool_vip_list"
			}
		},
		"operation_config_vip_pool_vip": {
			"description": "Display config with JSON formatted",
			"schema": {
				"$ref": "#/definitions/config.vip_pool_vip"
			}
		}
	},
	"definitions": {
		"config.vip_pool_list": {
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
						"$ref": "#/definitions/config.vip_pool"
					}
				}
			}
		},
		"config.vip_pool": {
			"type": "object",
			"required": [
				"name"
			],
			"properties": {
				"name": {
					"description": "虚拟IP池名称，必须不冲突",
					"type": "string",
					"example": "abc.com"
				},
				"description": {
					"description": "描述信息",
					"type": "string"
				},
				"type": {
					"description": "虚拟IP池类型，有IPV4、IPV6两种类型",
					"type": "string",
					"enum": [
						"IPV4",
						"IPV6"
					],
					"example": "IPV4",
					"default": "IPV4"
				},
				"vips": {
					"description": "VIP列表",
					"type": "array",
					"items": {
						"description": "VIP地址",
						"$ref": "#/definitions/config.vip_pool_vip"
					},
					"maxItems": 64,
					"minItems": 0
				},
				"state": {
					"description": "是否启用",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"type": "string",
					"default": "ENABLE"
				},
				"service_monitors": {
					"description": "健康检查方法列表",
					"type": "array",
					"items": {
						"description": "健康检查方法",
						"type": "string"
					},
					"maxItems": 5,
					"minItems": 0,
					"example": [
						"ping",
						"http"
					]
				},
				"available_requirement": {
					"type": "integer",
					"description": "虚拟IP通过条件",
					"default": 0,
					"example": 0,
					"minimum": 0,
					"maximum": 5
				},
				"related_virtual_service": {
					"type": "array",
					"description": "关联虚拟服务，个数为0-80",
					"items": {
						"type": "object",
						"required": [
							"data_center",
							"device",
							"virtual_service"
						],
						"properties": {
							"data_center": {
								"description": "数据中心名称",
								"type": "string",
								"example": "north_dc"
							},
							"device": {
								"description": "本地服务设备，默认localhost",
								"type": "string",
								"default": "localhost",
								"example": "localhost"
							},
							"virtual_service": {
								"description": "虚拟服务名称",
								"type": "string",
								"example": "vs_http_80"
							}
						}
					},
					"minItems": 0,
					"maxItems": 80
				},
				"busy_protect": {
					"description": "繁忙保护，默认ENABLE",
					"type": "string",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"default": "ENABLE",
					"example": "ENABLE"
				},
				"policy": {
					"type": "string",
					"enum": [
						"ROUND-ROBIN",
						"WEIGHTED-ROUND-ROBIN",
						"WEIGHTED-LEAST-CONNECTIONS",
						"WEIGHTED-LEAST-THROUGHPUT",
						"HASH",
						"FIRST-AVAILABLE",
						"LEAST-RTT",
						"TOPOLOGY",
						"RETURN-ALL",
						"BEST-RESOURCE"
					],
					"description": "首选策略，其中最佳资源调度在本地区域时失效，默认为轮询",
					"default": "ROUND-ROBIN",
					"example": "TOPOLOGY"
				},
				"alternative_policy": {
					"type": "string",
					"enum": [
						"ROUND-ROBIN",
						"WEIGHTED-ROUND-ROBIN",
						"WEIGHTED-LEAST-CONNECTIONS",
						"WEIGHTED-LEAST-THROUGHPUT",
						"HASH",
						"FIRST-AVAILABLE",
						"LEAST-RTT",
						"TOPOLOGY",
						"RETURN-ALL",
						"REFUSE",
						"DROP",
						"ALTERNATIVE-IP",
						"BEST-RESOURCE"
					],
					"description": "备选策略，其中最佳资源调度在本地区域时失效，默认为加权轮询",
					"default": "WEIGHTED-ROUND-ROBIN",
					"example": "ALTERNATIVE-IP"
				},
				"topology_failover_delay": {
					"description": "静态就近性延迟切换，必须在静态就近性策略下",
					"type": "integer",
					"default": 0,
					"example": 0,
					"minimum": 0,
					"maximum": 86400
				},
				"csubnet": {
					"type": "string",
					"description": "客户端优先配置",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"default": "DISABLE",
					"example": "DISABLE"
				},
				"best_resource_rules": {
					"description": "最佳资源调度条件列表",
					"type": "array",
					"items": {
						"description": "最佳资源调度条件",
						"type": "object",
						"required": [
							"resource",
							"threshold",
							"weight"
						],
						"properties": {
							"resource": {
								"description": "资源类型",
								"type": "string",
								"enum": [
									"CPU-USAGE",
									"CONNECTION",
									"CONNECTION-RATE",
									"UPSTREAM-THROUGHPUT",
									"DOWNSTREAM-THROUGHPUT",
									"VIRTUAL-SERVICE-NUMBER",
									"VIRTUAL-SERVICE-CONNECTION",
									"VIRTUAL-SERVICE-CONNECTION-RATE",
									"VIRTUAL-SERVICE-UPSTREAM-THROUGHPUT",
									"VIRTUAL-SERVICE-DOWNSTREAM-THROUGHPUT",
									"HEALTH-NODE"
								]
							},
							"threshold": {
								"description": "阈值",
								"type": "integer",
								"maximum": 4294967295,
								"minimum": 1
							},
							"weight": {
								"description": "权重",
								"type": "integer",
								"minimum": 1,
								"maximum": 100
							}
						}
					},
					"maxItems": 64,
					"minItems": 0
				},
				"alternative_ip": {
					"description": "备选IP",
					"type": "string",
					"example": "1.1.1.1"
				}
			}
		},
		"config.vip_pool_vip_list": {
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
						"$ref": "#/definitions/config.vip_pool_vip"
					}
				}
			}
		},
		"config.vip_pool_vip": {
			"required": [
				"name"
			],
			"type": "object",
			"properties": {
				"name": {
					"description": "虚拟IP名称",
					"type": "string"
				},
				"description": {
					"description": "虚拟IP描述信息",
					"type": "string"
				},
				"type": {
					"description": "虚拟IP类型，默认为STATIC-IP",
					"type": "string",
					"enum": [
						"STATIC-IP",
						"VS-VIP",
						"LINK-PPPOE"
					],
					"default": "STATIC-IP"
				},
				"static_ip": {
					"description": "静态IP",
					"type": "string",
					"example": "192.168.1.1"
				},
				"vs_vip": {
					"description": "虚拟IP，来自虚拟服务上的IP",
					"type": "string",
					"example": "200.200.0.1"
				},
				"link_pppoe": {
					"description": "Format: {link-wan}",
					"type": "string",
					"example": "CTEL_ADSL_100M"
				},
				"port": {
					"description": "端口",
					"type": "integer",
					"default": 1,
					"minimum": 1,
					"maximum": 65535
				},
				"priority": {
					"description": "优先级，默认10",
					"type": "integer",
					"default": 10,
					"minimum": 1,
					"maximum": 100
				},
				"protocol": {
					"description": "协议，默认TCP",
					"type": "string",
					"enum": [
						"TCP",
						"UDP"
					],
					"default": "TCP",
					"example": "TCP"
				},
				"monitor_inherit": {
					"description": "监视器继承，默认ENABLE",
					"type": "string",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"default": "ENABLE",
					"example": "ENABLE"
				},
				"service_monitors": {
					"description": "监视器列表，监视器数量为0-5",
					"type": "array",
					"items": {
						"description": "健康检查方法",
						"type": "string"
					},
					"maxItems": 5,
					"minItems": 0,
					"example": [
						"ping",
						"http"
					]
				},
				"available_requirement": {
					"type": "integer",
					"description": "虚拟IP有效条件，0表示所有检查方法通过时虚拟IP在线，默认为0",
					"default": 0,
					"example": 0,
					"minimum": 0,
					"maximum": 5
				},
				"related_virtual_service": {
					"type": "array",
					"description": "关联虚拟服务列表",
					"items": {
						"description": "关联的虚拟服务",
						"type": "object",
						"required": [
							"data_center",
							"device",
							"virtual_service"
						],
						"properties": {
							"data_center": {
								"description": "数据中心",
								"type": "string",
								"example": "north_dc"
							},
							"device": {
								"description": "本地服务设备名称，必须存在，默认localhost",
								"type": "string",
								"default": "localhost",
								"example": "localhost"
							},
							"virtual_service": {
								"description": "虚拟服务名称",
								"type": "string",
								"example": "vs_http_80"
							}
						}
					},
					"minItems": 0,
					"maxItems": 80
				}
			}
		}
	}
}