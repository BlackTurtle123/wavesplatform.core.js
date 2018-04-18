(function () {
    'use strict';

    angular
        .module('waves.core.services')
        .service('coinomatCurrencyMappingService', [function () {
            function unsupportedCurrency(currency) {
                throw new Error('Unsupported currency: ' + currency.displayName);
            }

            /**
             * Currency codes for Waves Platform
             * @param {Currency} currency
             * @returns {string} currency code
             */
            this.platformCurrencyCode = function (currency) {
                switch (currency.id) {
                    case Currency.TEST.id:
                        return 'TEST';

                    case Currency.TN.id:
                        return 'TN';
                }

                unsupportedCurrency(currency);
            };

            /**
             * Currency codes for Coinomat gateway
             * @param {Currency} currency
             * @returns {string} currency code
             */
            this.gatewayCurrencyCode = function (currency) {
                switch (currency.id) {
                    case Currency.TEST.id:
                        return 'TEST';

                }

                unsupportedCurrency(currency);
            };
        }]);
})();
