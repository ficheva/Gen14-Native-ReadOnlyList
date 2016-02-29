var provider,
    TelerikBackendServices = require('../everlive/everlive.all.min');

provider = new TelerikBackendServices({

    url: '//testtap.telerik.com/bs-api/v1/',

    appId: 'yil89ioibgx5nm1t',
    scheme: 'https'
});

// START_CUSTOM_CODE_readOnlyDataList
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_readOnlyDataList
module.exports = provider;