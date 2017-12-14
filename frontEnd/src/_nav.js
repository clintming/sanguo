export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: 'API管理',
      url: 'apiMgmt'
    },
    {
      name: '产品测试',
      children:
      [
        {
          name: '兼容测试',
          url: 'compatibilityTest'
        },
        {
          name: '性能测试',
          url: 'performanceTest'
        }]
    }
  ]
}
