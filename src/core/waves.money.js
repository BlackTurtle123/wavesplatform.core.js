/******************************************************************************
 * Copyright © 2016 The Waves Developers.                                *
 *                                                                            *
 * See the LICENSE files at                                                   *
 * the top-level directory of this distribution for the individual copyright  *
 * holder information and the developer policies on copyright and licensing.  *
 *                                                                            *
 * Unless otherwise agreed in a custom licensing agreement, no part of the    *
 * Waves software, including this file, may be copied, modified, propagated,  *
 * or distributed except according to the terms contained in the LICENSE      *
 * file.                                                                      *
 *                                                                            *
 * Removal or modification of this copyright notice is prohibited.            *
 *                                                                            *
 ******************************************************************************/

/**
 * @requires {decimal.js}
 */

var Currency = (function () {
    var currencyCache = {};

    function Currency(data) {
        data = data || {};

        this.id = data.id; // base58 encoded asset id of the currency
        this.displayName = data.displayName;
        this.shortName = data.shortName || data.displayName;
        this.precision = data.precision; // number of decimal places after a decimal point
        this.verified = data.verified || false;

        if (data.roundingMode !== undefined) {
            this.roundingMode = data.roundingMode;
        } else {
            this.roundingMode = Decimal.ROUND_HALF_UP;
        }

        return this;
    }

    Currency.prototype.toString = function () {
        if (this.shortName)
            return this.shortName;

        return this.displayName;
    };

    var TN = new Currency({
        id: '',
        displayName: 'TurtleNode',
        shortName: 'TN',
        precision: 8,
        verified: true
    });

    var TEST = new Currency({
        id: 'HDSpZtSRWjSavaWDoDWimsbdsAkQwT8EAhyPnKnTFTui',
        displayName: 'TEST',
        shortName: 'TEST',
        precision: 2,
        verified: true
    });
    var BTC = new Currency({
        id: '5Asy9P3xjcvBAgbeyiitZhBRJZJ2TPGSZJz9ihDTnB3d',
        displayName: 'Bitcoin',
        shortName: 'BTC',
        precision: 8,
        verified: true
    });

    var HN = new Currency({
        id: '3GvqjyJFBe1fpiYnGsmiZ1YJTkYiRktQ86M2KMzcTb2s',
        displayName: 'Hellenic Node\n',
        shortName: 'HN',
        precision: 2,
        verified: true
    });

    var LTC = new Currency({
        id: '3vB9hXHTCYbPiQNuyxCQgXF6AvFg51ozGKL9QkwoCwaS',
        displayName: 'Litecoin',
        shortName: 'LTC',
        precision: 8,
        verified: true
    });

    var MN = new Currency({
        id: 'DfutD8DdUhDphHoaMds2RQhw7oCmsf7W41s2zR5ZDq9F',
        displayName: 'MapleNode',
        shortName: 'MN',
        precision: 0,
        verified: true
    });
    var NATA = new Currency({
        id: '79jWQxTiV925jubY2c48vwJqVN2z1hU3rXX8uqdhuQnY',
        displayName: 'NATA POINTS',
        shortName: 'NATA',
        precision: 2,
        verified: true
    });
    var POL = new Currency({
        id: 'DiBtP52GhwJrbwQCRTdiEmDmnS43UPb83rRJyCNFKhzZ',
        displayName: 'POLTOKEN.PL',
        shortName: 'POL',
        precision: 8,
        verified: true
    });
    var MAXIM = new Currency({
        id: 'B5gHxDADo6Qj1t2BHB893kAivsZn6paWriSNgf7nDUVR',
        displayName: 'MAXIM',
        shortName: 'MXM',
        precision: 8,
        verified: true
    });
    var CWV = new Currency({
        id: 'gkLVV56jMqhCS9A2SJKowgcx9YySgstZXGjtQCoxJD8',
        displayName: 'Cryptowave',
        shortName: 'CWV',
        precision: 3,
        verified: true
    });
    var EURO = new Currency({
        id: 'Esm7giMGN5TwNDAeasmrEJJMXmrbcizyTDevf1Qmnn9F',
        displayName: 'EURO',
        shortName: 'EUR',
        precision: 2,
        verified: true
    });
    var WAVES = new Currency({
        id: 'EzwaF58ssALcUCZ9FbyeD1GTSteoZAQZEDTqBAXHfq8y',
        displayName: 'WAVES',
        shortName: 'WAVES',
        precision: 8,
        verified: true
    });
    var TAN = new Currency({
        id: '8SPSfMDoMCCUFZjVBQZpnspYdxCjj8Z4vuo7iaBj6Gbd',
        displayName: 'TeAuNo',
        shortName: 'TAN',
        precision: 8,
        verified: true
    });
    var PDN = new Currency({
        id: '7pAxzBTL4HZjTmSvDXRPwsGXhxwPtd41vY9Wp7GFFL4q',
        displayName: 'POSEIDON',
        shortName: 'PDN',
        precision: 0,
        verified: true
    });

    function isCached(assetId) {
        return currencyCache.hasOwnProperty(assetId);
    }

    function invalidateCache() {
        currencyCache = {};

        currencyCache[TN.id] = TN;
        currencyCache[TEST.id] = TEST;
        currencyCache[BTC.id] = BTC;
        currencyCache[HN.id] = HN;
        currencyCache[LTC.id] = LTC;
        currencyCache[MN.id] = MN;
        currencyCache[NATA.id] = NATA;
        currencyCache[POL.id] = POL;
        currencyCache[MAXIM.id] = MAXIM;
        currencyCache[CWV.id] = CWV;
        currencyCache[EURO.id] = EURO;
        currencyCache[WAVES.id] = WAVES;
        currencyCache[TAN.id] = TAN;
        currencyCache[PDN.id] = PDN;

    }

    invalidateCache();

    return {
        create: function (data) {
            // if currency data.id is not set - it's a temporary instance
            if (!_.has(data, 'id')) {
                return new Currency(data);
            }

            if (!currencyCache[data.id]) {
                currencyCache[data.id] = new Currency(data);
            }

            return currencyCache[data.id];
        },
        invalidateCache: invalidateCache,
        isCached: isCached,
        TN: TN,
        TEST: TEST,
        BTC: BTC,
        HN: HN,
        LTC: LTC,
        MN: MN,
        NATA: NATA,
        POL: POL,
        MAXIM: MAXIM,
        CWV: CWV,
        EURO: EURO,
        WAVES: WAVES,
        TAN: TAN,
        PDN: PDN
    };
})();

var Money = function(amount, currency) {
    var DECIMAL_SEPARATOR = '.';
    var THOUSANDS_SEPARATOR = ',';

    if (amount === undefined)
        throw Error('Amount is required');

    if (currency === undefined)
        throw Error('Currency is required');

    this.amount = new Decimal(amount)
        .toDecimalPlaces(currency.precision, Decimal.ROUND_FLOOR);
    this.currency = currency;

    var integerPart = function (value) {
        return value.trunc();
    };

    var fractionPart = function (value) {
        return value.minus(integerPart(value));
    };

    var format = function (value) {
        return value.toFixed(currency.precision, currency.roundingMode);
    };

    var validateCurrency = function (expected, actual) {
        if (expected.id !== actual.id)
            throw new Error('Currencies must be the same for operands. Expected: ' +
                expected.displayName + '; Actual: ' + actual.displayName);
    };

    var fromTokensToCoins = function (valueInTokens, currencyPrecision) {
        return valueInTokens.mul(Math.pow(10, currencyPrecision)).trunc();
    };

    var fromCoinsToTokens = function (valueInCoins, currencyPrecision) {
        return valueInCoins.trunc().div(Math.pow(10, currencyPrecision));
    };

    // in 2016 Safari doesn't support toLocaleString()
    // that's why we need this method
    var formatWithThousandsSeparator = function (formattedAmount) {
        var parts = formattedAmount.split(DECIMAL_SEPARATOR);
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, THOUSANDS_SEPARATOR);

        return parts.join(DECIMAL_SEPARATOR);
    };

    this.formatAmount = function (stripZeroes, useThousandsSeparator) {
        var result = stripZeroes ?
            this.toTokens().toFixed(this.amount.decimalPlaces()) :
            format(this.amount);

        return useThousandsSeparator ? formatWithThousandsSeparator(result) : result;
    };

    this.formatIntegerPart = function () {
        return integerPart(this.amount).toFixed(0);
    };

    this.formatFractionPart = function () {
        var valueWithLeadingZero = format(fractionPart(this.amount));

        return valueWithLeadingZero.slice(1); // stripping the leading zero
    };

    this.toTokens = function () {
        var result = fromCoinsToTokens(fromTokensToCoins(this.amount, this.currency.precision),
            this.currency.precision);

        return result.toNumber();
    };

    this.toCoins = function () {
        return fromTokensToCoins(this.amount, this.currency.precision).toNumber();
    };

    this.plus = function (money) {
        validateCurrency(this.currency, money.currency);

        return new Money(this.amount.plus(money.amount), this.currency);
    };

    this.minus = function (money) {
        validateCurrency(this.currency, money.currency);

        return new Money(this.amount.minus(money.amount), this.currency);
    };

    this.greaterThan = function (other) {
        validateCurrency(this.currency, other.currency);

        return this.amount.greaterThan(other.amount);
    };

    this.greaterThanOrEqualTo = function (other) {
        validateCurrency(this.currency, other.currency);

        return this.amount.greaterThanOrEqualTo(other.amount);
    };

    this.lessThan = function (other) {
        validateCurrency(this.currency, other.currency);

        return this.amount.lessThan(other.amount);
    };

    this.lessThanOrEqualTo = function (other) {
        validateCurrency(this.currency, other.currency);

        return this.amount.lessThanOrEqualTo(other.amount);
    };

    this.multiply = function (multiplier) {
        if (!_.isNumber(multiplier))
            throw new Error('Number is expected');

        if (isNaN(multiplier))
            throw new Error('Multiplication by NaN is not supported');

        return new Money(this.amount.mul(multiplier), this.currency);
    };

    this.toString = function () {
        return this.formatAmount(false, true) + ' ' + this.currency.toString();
    };

    return this;
};

Money.fromTokens = function (amount, currency) {
    return new Money(amount, currency);
};

Money.fromCoins = function (amount, currency) {
    currency = currency || {};
    if (currency.precision === undefined)
        throw new Error('A valid currency must be provided');

    amount = new Decimal(amount);
    amount = amount.div(Math.pow(10, currency.precision));

    return new Money(amount, currency);
};

// set up decimal to format 0.00000001 as is instead of 1e-8
Decimal.config({toExpNeg: -(Currency.TN.precision + 1)});

