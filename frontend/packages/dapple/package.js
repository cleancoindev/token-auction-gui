Package.describe({
  name: 'token-auction:dapple',
  version: '0.0.1',
  summary: 'Dapple related code for Token auction',
  git: '',
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.2.1')

  api.use('ethereum:web3', 'client')

  api.addFiles(['package-pre-init.js'], 'client')
  api.addFiles(['build/meteor.js'], 'client')
  api.addFiles(['build/erc20.js'], 'client')
  api.addFiles(['package-post-init.js'], 'client')

  api.export('web3', 'client')
  api.export('Dapple', 'client')
})
