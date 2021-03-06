describe('Coinomat.Currency.Mapping.Service', function() {
    var mappingService;

    // Initialization of the module before each test case
    beforeEach(module('waves.core.services'));

    // Injection of dependencies
    beforeEach(inject(function($injector) {
        mappingService = $injector.get('coinomatCurrencyMappingService');
    }));

    it('should throw an error if a currency is not supported', function () {
        expect(function () { mappingService.platformCurrencyCode(Currency.CNY); }).toThrowError();
        expect(function () { mappingService.gatewayCurrencyCode(Currency.EUR); }).toThrowError();
    });

    it('should return correct codes for bitcoin', function() {
        expect(mappingService.platformCurrencyCode(Currency.BTC)).toEqual('BTC');
        expect(mappingService.gatewayCurrencyCode(Currency.BTC)).toEqual('BTC');
    });

    // it('should return correct codes for TN', function() {
    //     expect(mappingService.gatewayCurrencyCode(Currency.TN)).toEqual('TN');
    //     expect(mappingService.platformCurrencyCode(Currency.TN)).toEqual('TN');
    // });
});
