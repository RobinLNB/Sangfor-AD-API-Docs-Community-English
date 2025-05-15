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
		"/api/ad/v3/net/link/lan/": {
			"description": "链路LAN类别配置管理操作",
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
					"link-lan"
				],
				"summary": "get all link-lan",
				"description": "查看链路LAN类别配置",
				"operationId": "get_link_lan_list",
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
						"$ref": "#/responses/operation_config_link_lan_list"
					}
				}
			},
			"post": {
				"tags": [
					"link-lan"
				],
				"summary": "create new link-lan",
				"description": "新建链路LAN类别配置",
				"operationId": "add_link_lan_list",
				"parameters": [
					{
						"$ref": "#/parameters/LAN-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_link_lan_object"
					}
				}
			},
			"patch": {
				"deprecated": true,
				"tags": [
					"link-lan"
				],
				"summary": "modify link-lan",
				"description": "修改链路LAN类别配置",
				"operationId": "edit_link_lan_list",
				"parameters": [
					{
						"$ref": "#/parameters/LAN-PROPERTY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_link_lan_list"
					}
				}
			},
			"__sfcli_example__": [
				{
					"command": "list net link lan",
					"description": "查看所有lan口配置"
				},
				{
					"command": "create net link lan mylan state enable interface { interface mybond type bond } addresses ['192.168.1.1/24' '192.168.1.2/24'] monitors [ { monitor ping target_host '192.168.1.254'} ] cable_plugin_detect enable arp_detect { state enable target_host '192.168.1.254' interval 5 timeout 15 }",
					"description": "在bond口mybond上创建并启用lan口mylan，配置地址192.168.4.4/24和192.168.1.2/14；配置ping监视器并监视192.168.1.254；启用掉线检测； 启用arp探测:探测地址192.168.1.254，每隔5s探测一次，每次探测超时15s"
				},
				{
					"command": "list net link lan mylan",
					"description": "查看lan口mylan配置"
				},
				{
					"command": "modify net link lan mylan interface { interface NET5 type physical } addresses add [ '192.168.1.3/24' '192.168.1.4/24' ]",
					"description": "更新lan口mylan的引用口为NET5，并新增加ip地址192.168.1.3/24和192.168.1.4/24"
				},
				{
					"command": "delete net link lan mylan",
					"description": "删除lan口mylan"
				}
			]
		},
		"/api/ad/v3/net/link/lan/{name}": {
			"description": "指定LAN类别链路相关操作",
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
					"link-lan"
				],
				"summary": "get specific link-lan",
				"description": "查看指定链路LAN类别配置",
				"operationId": "get_link_lan",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_link_lan_object"
					}
				}
			},
			"post": {
				"deprecated": true,
				"tags": [
					"link-lan"
				],
				"summary": "create new link-lan",
				"description": "新建链路LAN类别配置",
				"operationId": "create_link_lan",
				"parameters": [
					{
						"$ref": "#/parameters/LAN-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_link_lan_object"
					}
				}
			},
			"put": {
				"tags": [
					"link-lan"
				],
				"summary": "replace specific link-lan",
				"description": "替换指定链路LAN类别配置",
				"operationId": "replace_link_lan",
				"parameters": [
					{
						"$ref": "#/parameters/LAN-CONFIG"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_link_lan_object"
					}
				}
			},
			"patch": {
				"tags": [
					"link-lan"
				],
				"summary": "modify specific link-lan",
				"description": "修改指定链路LAN类别配置",
				"operationId": "edit_link_lan",
				"parameters": [
					{
						"$ref": "#/parameters/LAN-PROPERTY"
					}
				],
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_link_lan_object"
					}
				}
			},
			"delete": {
				"tags": [
					"link-lan"
				],
				"summary": "delete specific link-lan",
				"description": "删除指定链路LAN类别配置",
				"operationId": "delete_link_lan",
				"responses": {
					"200": {
						"$ref": "#/responses/operation_config_link_lan_object"
					}
				}
			}
		}
	},
	"parameters": {
		"LAN-CONFIG": {
			"name": "LAN-CONFIG",
			"in": "body",
			"required": true,
			"description": "链路LAN类别配置",
			"schema": {
				"$ref": "#/definitions/config.link_lan"
			}
		},
		"LAN-PROPERTY": {
			"name": "LAN-PROPERTY",
			"in": "body",
			"required": true,
			"description": "链路LAN类别属性",
			"schema": {
				"$ref": "#/definitions/config.link_lan"
			}
		}
	},
	"responses": {
		"operation_config_link_lan_list": {
			"description": "链路LAN类别配置列表",
			"schema": {
				"$ref": "#/definitions/config.link_lan_list"
			}
		},
		"operation_config_link_lan_object": {
			"description": "链路LAN类别配置对象",
			"schema": {
				"$ref": "#/definitions/config.link_lan"
			}
		}
	},
	"definitions": {
		"config.link_lan_list": {
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
						"$ref": "#/definitions/config.link_lan"
					}
				}
			}
		},
		"config.link_lan": {
			"type": "object",
			"required": [
				"name",
				"interface"
			],
			"properties": {
				"name": {
					"description": "必选参数；配置名称",
					"type": "string",
					"example": "link_lan_1",
					"maxLength": 511,
					"minLength": 1
				},
				"description": {
					"description": "可选参数；所配置lan口描述标签",
					"type": "string"
				},
				"state": {
					"description": "可选参数；启/禁用（enable-启用/disable-禁用），默认值enable",
					"type": "string",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"default": "ENABLE",
					"example": "ENABLE"
				},
				"type": {
					"description": "可选参数；类别（lan），默认值lan",
					"type": "string",
					"enum": [
						"LAN"
					],
					"default": "LAN",
					"example": "LAN"
				},
				"interface": {
					"description": "必选参数；网络接口",
					"type": "object",
					"required": [
						"interface"
					],
					"properties": {
						"type": {
							"description": "可选参数；接口类型（physical-物理口/bond-端口聚合/vlan-VLAN子接口/bridge-交换口），默认值physical",
							"type": "string",
							"enum": [
								"PHYSICAL",
								"BOND",
								"VLAN",
								"BRIDGE",
								"MACVLAN"
							],
							"default": "PHYSICAL",
							"example": "VLAN"
						},
						"interface": {
							"description": "必选参数；接口配置名称",
							"type": "string",
							"example": "bond-134",
							"maxLength": 511,
							"minLength": 1
						}
					},
					"maxItems": 1,
					"minItems": 1
				},
				"addresses": {
					"description": "必选参数；地址列表（集群模式浮动IP地址）",
					"type": "array",
					"items": {
						"description": "链路IP地址需要指定子网掩码或前缀长度",
						"type": "string",
						"example": "192.168.1.100/24"
					},
					"maxItems": 512
				},
				"dns_servers": {
					"description": "可选参数；DNS列表",
					"type": "array",
					"items": {
						"description": "DNS服务器IP地址",
						"type": "string",
						"example": "192.168.1.1"
					},
					"maxItems": 10
				},
				"cluster_addresses": {
					"description": "可选参数；集群成员静态IP地址（仅在集群模式下生效）",
					"type": "array",
					"items": {
						"description": "单个静态IP地址",
						"type": "object",
						"properties": {
							"address": {
								"description": "静态IP地址",
								"type": "string",
								"example": "192.168.1.100/24"
							},
							"associated_member": {
								"description": "分配集群成员",
								"type": "string",
								"example": "{member}"
							}
						}
					},
					"maxItems": 512
				},
				"arp_detect": {
					"type": "object",
					"description": "可选参数；arp探测配置项",
					"properties": {
						"state": {
							"description": "可选参数；ARP检查启/禁用开关（enable-启用/disable-禁用），默认值disable",
							"type": "string",
							"enum": [
								"ENABLE",
								"DISABLE"
							],
							"default": "DISABLE",
							"example": "ENABLE"
						},
						"target_host": {
							"description": "必选参数；检测目标主机",
							"type": "string",
							"example": "192.168.1.1"
						},
						"timeout": {
							"description": "可选参数；超时时间，默认值15",
							"type": "integer",
							"default": 15,
							"example": 15,
							"maximum": 255,
							"minimum": 1
						},
						"interval": {
							"description": "可选参数；检测间隔，默认值5",
							"type": "integer",
							"default": 5,
							"example": 5,
							"maximum": 255,
							"minimum": 1
						}
					}
				},
				"monitors": {
					"description": "可选参数；链路健康检查列表",
					"type": "array",
					"items": {
						"description": "必选参数；单个链路健康检查方法",
						"type": "object",
						"required": [
							"monitor",
							"target_host"
						],
						"properties": {
							"monitor": {
								"description": "必选参数；引用的链路监视器名称",
								"type": "string",
								"example": "ping",
								"maxLength": 511,
								"minLength": 1
							},
							"target_host": {
								"description": "必选参数；检测目标主机",
								"type": "string",
								"example": "10.10.10.254",
								"maxLength": 255,
								"minLength": 1
							}
						}
					},
					"maxItems": 16
				},
				"cable_plugin_detect": {
					"description": "可选参数；插拔网线检测（enable-启用/disable-禁用），默认值disable",
					"type": "string",
					"enum": [
						"ENABLE",
						"DISABLE"
					],
					"default": "ENABLE",
					"example": "ENABLE"
				},
				"failsafe": {
					"description": "可选参数；零流量监测，双机/集群模式下才可配置",
					"type": "object",
					"properties": {
						"state": {
							"description": "可选参数；启禁用开关（enable-启用/disable-禁用），默认值disable",
							"type": "string",
							"enum": [
								"ENABLE",
								"DISABLE"
							],
							"default": "DISABLE",
							"example": "ENABLE"
						},
						"timeout": {
							"description": "可选参数；零流量检测超时时间，默认值120",
							"type": "integer",
							"default": 120,
							"example": 120,
							"maximum": 3600,
							"minimum": 10
						},
						"action": {
							"description": "可选参数；监测到无流量时的动作（failover-故障并切换/reboot-重启设备/restart-service-重启服务），默认值failover",
							"type": "string",
							"enum": [
								"FAILOVER",
								"RESTART-SERVICE",
								"REBOOT"
							],
							"default": "FAILOVER",
							"example": "FAILOVER"
						}
					}
				}
			}
		}
	}
}