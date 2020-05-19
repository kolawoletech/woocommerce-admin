(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-charts"],{

/***/ "./client/analytics/report/coupons/config.js":
/*!***************************************************!*\
  !*** ./client/analytics/report/coupons/config.js ***!
  \***************************************************/
/*! exports provided: charts, filters, advancedFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charts", function() { return charts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filters", function() { return filters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advancedFilters", function() { return advancedFilters; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_async_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/async-requests */ "./client/lib/async-requests/index.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


var COUPON_REPORT_CHARTS_FILTER = 'woocommerce_admin_coupons_report_charts';
var COUPON_REPORT_FILTERS_FILTER = 'woocommerce_admin_coupons_report_filters';
var COUPON_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_coupon_report_advanced_filters';
var charts = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(COUPON_REPORT_CHARTS_FILTER, [{
  key: 'orders_count',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Discounted Orders', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'orders_count',
  type: 'number'
}, {
  key: 'amount',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Amount', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'amount',
  type: 'currency'
}]);
var filters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(COUPON_REPORT_FILTERS_FILTER, [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Show', 'woocommerce-admin'),
  staticParams: [],
  param: 'filter',
  showFilters: function showFilters() {
    return true;
  },
  filters: [{
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('All Coupons', 'woocommerce-admin'),
    value: 'all'
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Single Coupon', 'woocommerce-admin'),
    value: 'select_coupon',
    chartMode: 'item-comparison',
    subFilters: [{
      component: 'Search',
      value: 'single_coupon',
      chartMode: 'item-comparison',
      path: ['select_coupon'],
      settings: {
        type: 'coupons',
        param: 'coupons',
        getLabels: lib_async_requests__WEBPACK_IMPORTED_MODULE_2__["getCouponLabels"],
        labels: {
          placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Type to search for a coupon', 'woocommerce-admin'),
          button: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Single Coupon', 'woocommerce-admin')
        }
      }
    }]
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Comparison', 'woocommerce-admin'),
    value: 'compare-coupons',
    settings: {
      type: 'coupons',
      param: 'coupons',
      getLabels: lib_async_requests__WEBPACK_IMPORTED_MODULE_2__["getCouponLabels"],
      labels: {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Compare Coupon Codes', 'woocommerce-admin'),
        update: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Compare', 'woocommerce-admin'),
        helpText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Check at least two coupon codes below to compare', 'woocommerce-admin')
      }
    }
  }]
}]);
var advancedFilters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(COUPON_REPORT_ADVANCED_FILTERS_FILTER, {});

/***/ }),

/***/ "./client/analytics/report/orders/config.js":
/*!**************************************************!*\
  !*** ./client/analytics/report/orders/config.js ***!
  \**************************************************/
/*! exports provided: charts, filters, advancedFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charts", function() { return charts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filters", function() { return filters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advancedFilters", function() { return advancedFilters; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @woocommerce/wc-admin-settings */ "./client/settings/index.js");
/* harmony import */ var lib_async_requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/async-requests */ "./client/lib/async-requests/index.js");
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


var ORDERS_REPORT_CHARTS_FILTER = 'woocommerce_admin_orders_report_charts';
var ORDERS_REPORT_FILTERS_FILTER = 'woocommerce_admin_orders_report_filters';
var ORDERS_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_orders_report_advanced_filters';
var charts = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(ORDERS_REPORT_CHARTS_FILTER, [{
  key: 'orders_count',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Orders', 'woocommerce-admin'),
  type: 'number'
}, {
  key: 'net_revenue',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Net Sales', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'net_total',
  type: 'currency'
}, {
  key: 'avg_order_value',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Average Order Value', 'woocommerce-admin'),
  type: 'currency'
}, {
  key: 'avg_items_per_order',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Average Items Per Order', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'num_items_sold',
  type: 'average'
}]);
var filters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(ORDERS_REPORT_FILTERS_FILTER, [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Show', 'woocommerce-admin'),
  staticParams: ['chart'],
  param: 'filter',
  showFilters: function showFilters() {
    return true;
  },
  filters: [{
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('All Orders', 'woocommerce-admin'),
    value: 'all'
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Advanced Filters', 'woocommerce-admin'),
    value: 'advanced'
  }]
}]);
/*eslint-disable max-len*/

var advancedFilters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(ORDERS_REPORT_ADVANCED_FILTERS_FILTER, {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Orders Match {{select /}} Filters', 'A sentence describing filters for Orders. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ', 'woocommerce-admin'),
  filters: {
    status: {
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Order Status', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove order status filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select an order status filter match', 'woocommerce-admin'),

        /* translators: A sentence describing an Order Status filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('{{title}}Order Status{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select an order status', 'woocommerce-admin')
      },
      rules: [{
        value: 'is',

        /* translators: Sentence fragment, logical, "Is" refers to searching for orders matching a chosen order status. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Is', 'order status', 'woocommerce-admin')
      }, {
        value: 'is_not',

        /* translators: Sentence fragment, logical, "Is Not" refers to searching for orders that don\'t match a chosen order status. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Is Not', 'order status', 'woocommerce-admin')
      }],
      input: {
        component: 'SelectControl',
        options: Object.keys(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__["ORDER_STATUSES"]).map(function (key) {
          return {
            value: key,
            label: _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__["ORDER_STATUSES"][key]
          };
        })
      }
    },
    product: {
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Products', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Search products', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove products filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select a product filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('{{title}}Product{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select products', 'woocommerce-admin')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to orders including a given product(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Includes', 'products', 'woocommerce-admin')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to orders excluding a given product(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Excludes', 'products', 'woocommerce-admin')
      }],
      input: {
        component: 'Search',
        type: 'products',
        getLabels: lib_async_requests__WEBPACK_IMPORTED_MODULE_3__["getProductLabels"]
      }
    },
    coupon: {
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Coupon Codes', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Search coupons', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove coupon filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select a coupon filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a Coupon filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('{{title}}Coupon Code{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select coupon codes', 'woocommerce-admin')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to orders including a given coupon code(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Includes', 'coupon code', 'woocommerce-admin')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to orders excluding a given coupon code(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Excludes', 'coupon code', 'woocommerce-admin')
      }],
      input: {
        component: 'Search',
        type: 'coupons',
        getLabels: lib_async_requests__WEBPACK_IMPORTED_MODULE_3__["getCouponLabels"]
      }
    },
    customer_type: {
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Customer Type', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove customer filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select a customer filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a Customer filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('{{title}}Customer is{{/title}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select a customer type', 'woocommerce-admin')
      },
      input: {
        component: 'SelectControl',
        options: [{
          value: 'new',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('New', 'woocommerce-admin')
        }, {
          value: 'returning',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Returning', 'woocommerce-admin')
        }],
        defaultOption: 'new'
      }
    },
    refunds: {
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Refunds', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove refunds filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select a refund filter match', 'woocommerce-admin'),
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('{{title}}Refunds{{/title}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select a refund type', 'woocommerce-admin')
      },
      input: {
        component: 'SelectControl',
        options: [{
          value: 'all',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('All', 'woocommerce-admin')
        }, {
          value: 'partial',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Partially refunded', 'woocommerce-admin')
        }, {
          value: 'full',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Fully refunded', 'woocommerce-admin')
        }, {
          value: 'none',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('None', 'woocommerce-admin')
        }],
        defaultOption: 'all'
      }
    },
    tax_rate: {
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Tax Rates', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Search tax rates', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove tax rate filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select a tax rate filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a tax rate filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('{{title}}Tax Rate{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select tax rates', 'woocommerce-admin')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to orders including a given tax rate(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Includes', 'tax rate', 'woocommerce-admin')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to orders excluding a given tax rate(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Excludes', 'tax rate', 'woocommerce-admin')
      }],
      input: {
        component: 'Search',
        type: 'taxes',
        getLabels: lib_async_requests__WEBPACK_IMPORTED_MODULE_3__["getTaxRateLabels"]
      }
    }
  }
});
/*eslint-enable max-len*/

/***/ }),

/***/ "./client/analytics/report/products/config.js":
/*!****************************************************!*\
  !*** ./client/analytics/report/products/config.js ***!
  \****************************************************/
/*! exports provided: charts, filters, advancedFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charts", function() { return charts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filters", function() { return filters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advancedFilters", function() { return advancedFilters; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_async_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/async-requests */ "./client/lib/async-requests/index.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


var PRODUCTS_REPORT_CHARTS_FILTER = 'woocommerce_admin_products_report_charts';
var PRODUCTS_REPORT_FILTERS_FILTER = 'woocommerce_admin_products_report_filters';
var PRODUCTS_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_products_report_advanced_filters';
var charts = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(PRODUCTS_REPORT_CHARTS_FILTER, [{
  key: 'items_sold',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Items Sold', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'items_sold',
  type: 'number'
}, {
  key: 'net_revenue',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Net Sales', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'net_revenue',
  type: 'currency'
}, {
  key: 'orders_count',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Orders', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'orders_count',
  type: 'number'
}]);
var filterConfig = {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Show', 'woocommerce-admin'),
  staticParams: [],
  param: 'filter',
  showFilters: function showFilters() {
    return true;
  },
  filters: [{
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('All Products', 'woocommerce-admin'),
    value: 'all'
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Single Product', 'woocommerce-admin'),
    value: 'select_product',
    chartMode: 'item-comparison',
    subFilters: [{
      component: 'Search',
      value: 'single_product',
      chartMode: 'item-comparison',
      path: ['select_product'],
      settings: {
        type: 'products',
        param: 'products',
        getLabels: lib_async_requests__WEBPACK_IMPORTED_MODULE_2__["getProductLabels"],
        labels: {
          placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Type to search for a product', 'woocommerce-admin'),
          button: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Single Product', 'woocommerce-admin')
        }
      }
    }]
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Comparison', 'woocommerce-admin'),
    value: 'compare-products',
    chartMode: 'item-comparison',
    settings: {
      type: 'products',
      param: 'products',
      getLabels: lib_async_requests__WEBPACK_IMPORTED_MODULE_2__["getProductLabels"],
      labels: {
        helpText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Check at least two products below to compare', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Search for products to compare', 'woocommerce-admin'),
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Compare Products', 'woocommerce-admin'),
        update: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Compare', 'woocommerce-admin')
      }
    }
  }]
};
var variationsConfig = {
  showFilters: function showFilters(query) {
    return query.filter === 'single_product' && !!query.products && query['is-variable'];
  },
  staticParams: ['filter', 'products'],
  param: 'filter-variations',
  filters: [{
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('All Variations', 'woocommerce-admin'),
    chartMode: 'item-comparison',
    value: 'all'
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Comparison', 'woocommerce-admin'),
    chartMode: 'item-comparison',
    value: 'compare-variations',
    settings: {
      type: 'variations',
      param: 'variations',
      getLabels: lib_async_requests__WEBPACK_IMPORTED_MODULE_2__["getVariationLabels"],
      labels: {
        helpText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Check at least two variations below to compare', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Search for variations to compare', 'woocommerce-admin'),
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Compare Variations', 'woocommerce-admin'),
        update: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Compare', 'woocommerce-admin')
      }
    }
  }]
};
var filters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(PRODUCTS_REPORT_FILTERS_FILTER, [filterConfig, variationsConfig]);
var advancedFilters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(PRODUCTS_REPORT_ADVANCED_FILTERS_FILTER, {});

/***/ }),

/***/ "./client/analytics/report/revenue/config.js":
/*!***************************************************!*\
  !*** ./client/analytics/report/revenue/config.js ***!
  \***************************************************/
/*! exports provided: charts, filters, advancedFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charts", function() { return charts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filters", function() { return filters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advancedFilters", function() { return advancedFilters; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */


var REVENUE_REPORT_CHARTS_FILTER = 'woocommerce_admin_revenue_report_charts';
var REVENUE_REPORT_FILTERS_FILTER = 'woocommerce_admin_revenue_report_filters';
var REVENUE_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_revenue_report_advanced_filters';
var charts = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(REVENUE_REPORT_CHARTS_FILTER, [{
  key: 'gross_sales',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Gross Sales', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'gross_sales',
  type: 'currency'
}, {
  key: 'refunds',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Returns', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'refunds',
  type: 'currency'
}, {
  key: 'coupons',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Coupons', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'coupons',
  type: 'currency'
}, {
  key: 'net_revenue',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Net Sales', 'woocommerce-admin'),
  orderby: 'net_revenue',
  type: 'currency'
}, {
  key: 'taxes',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Taxes', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'taxes',
  type: 'currency'
}, {
  key: 'shipping',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Shipping', 'woocommerce-admin'),
  orderby: 'shipping',
  type: 'currency'
}, {
  key: 'total_sales',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Total Sales', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'total_sales',
  type: 'currency'
}]);
var filters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(REVENUE_REPORT_FILTERS_FILTER, []);
var advancedFilters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(REVENUE_REPORT_ADVANCED_FILTERS_FILTER, {});

/***/ }),

/***/ "./client/analytics/report/taxes/config.js":
/*!*************************************************!*\
  !*** ./client/analytics/report/taxes/config.js ***!
  \*************************************************/
/*! exports provided: charts, filters, advancedFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charts", function() { return charts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filters", function() { return filters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advancedFilters", function() { return advancedFilters; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_async_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/async-requests */ "./client/lib/async-requests/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./client/analytics/report/taxes/utils.js");
/* harmony import */ var wc_api_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wc-api/constants */ "./client/wc-api/constants.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */




var TAXES_REPORT_CHARTS_FILTER = 'woocommerce_admin_taxes_report_charts';
var TAXES_REPORT_FILTERS_FILTER = 'woocommerce_admin_taxes_report_filters';
var TAXES_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_taxes_report_advanced_filters';
var charts = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(TAXES_REPORT_CHARTS_FILTER, [{
  key: 'total_tax',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Total Tax', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'total_tax',
  type: 'currency'
}, {
  key: 'order_tax',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Order Tax', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'order_tax',
  type: 'currency'
}, {
  key: 'shipping_tax',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Shipping Tax', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'shipping_tax',
  type: 'currency'
}, {
  key: 'orders_count',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Orders', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'orders_count',
  type: 'number'
}]);
var filters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(TAXES_REPORT_FILTERS_FILTER, [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Show', 'woocommerce-admin'),
  staticParams: ['chart'],
  param: 'filter',
  showFilters: function showFilters() {
    return true;
  },
  filters: [{
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('All Taxes', 'woocommerce-admin'),
    value: 'all'
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Comparison', 'woocommerce-admin'),
    value: 'compare-taxes',
    chartMode: 'item-comparison',
    settings: {
      type: 'taxes',
      param: 'taxes',
      getLabels: Object(lib_async_requests__WEBPACK_IMPORTED_MODULE_2__["getRequestByIdString"])(wc_api_constants__WEBPACK_IMPORTED_MODULE_4__["NAMESPACE"] + '/taxes', function (tax) {
        return {
          id: tax.id,
          label: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getTaxCode"])(tax)
        };
      }),
      labels: {
        helpText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Check at least two tax codes below to compare', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Search for tax codes to compare', 'woocommerce-admin'),
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Compare Tax Codes', 'woocommerce-admin'),
        update: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Compare', 'woocommerce-admin')
      }
    }
  }]
}]);
var advancedFilters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(TAXES_REPORT_ADVANCED_FILTERS_FILTER, {});

/***/ }),

/***/ "./client/dashboard/dashboard-charts/block.js":
/*!****************************************************!*\
  !*** ./client/dashboard/dashboard-charts/block.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @woocommerce/components */ "@woocommerce/components");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @woocommerce/navigation */ "@woocommerce/navigation");
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @woocommerce/wc-admin-settings */ "./client/settings/index.js");
/* harmony import */ var analytics_components_report_chart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! analytics/components/report-chart */ "./client/analytics/components/report-chart/index.js");
/* harmony import */ var _block_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./block.scss */ "./client/dashboard/dashboard-charts/block.scss");
/* harmony import */ var _block_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_block_scss__WEBPACK_IMPORTED_MODULE_12__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */



/**
 * WooCommerce dependencies
 */




/**
 * Internal dependencies
 */




var ChartBlock = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ChartBlock, _Component);

  var _super = _createSuper(ChartBlock);

  function ChartBlock() {
    var _temp, _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ChartBlock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(_this, (_temp = _this = _super.call.apply(_super, [this].concat(args)), _this.handleChartClick = function () {
      var selectedChart = _this.props.selectedChart;
      Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_9__["getHistory"])().push(_this.getChartPath(selectedChart));
    }, _temp));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ChartBlock, [{
    key: "getChartPath",
    value: function getChartPath(chart) {
      return Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_9__["getNewPath"])({
        chart: chart.key
      }, '/analytics/' + chart.endpoint, Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_9__["getPersistedQuery"])());
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          charts = _this$props.charts,
          endpoint = _this$props.endpoint,
          path = _this$props.path,
          query = _this$props.query,
          selectedChart = _this$props.selectedChart;

      if (!selectedChart) {
        return null;
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        role: "presentation",
        className: "woocommerce-dashboard__chart-block-wrapper",
        onClick: this.handleChartClick
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "woocommerce-dashboard__chart-block woocommerce-analytics__card",
        title: selectedChart.label
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("a", {
        className: "screen-reader-text",
        href: Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_10__["getAdminLink"])(this.getChartPath(selectedChart))
      },
      /* translators: %s is the chart type */
      Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('%s Report', 'woocommerce-admin'), selectedChart.label)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(analytics_components_report_chart__WEBPACK_IMPORTED_MODULE_11__["default"], {
        charts: charts,
        endpoint: endpoint,
        query: query,
        interactiveLegend: false,
        legendPosition: "bottom",
        path: path,
        selectedChart: selectedChart,
        showHeaderControls: false
      })));
    }
  }]);

  return ChartBlock;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

ChartBlock.propTypes = {
  charts: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
  endpoint: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired,
  path: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired,
  query: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  selectedChart: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ChartBlock);

/***/ }),

/***/ "./client/dashboard/dashboard-charts/block.scss":
/*!******************************************************!*\
  !*** ./client/dashboard/dashboard-charts/block.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./client/dashboard/dashboard-charts/config.js":
/*!*****************************************************!*\
  !*** ./client/dashboard/dashboard-charts/config.js ***!
  \*****************************************************/
/*! exports provided: uniqCharts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqCharts", function() { return uniqCharts; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var analytics_report_orders_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! analytics/report/orders/config */ "./client/analytics/report/orders/config.js");
/* harmony import */ var analytics_report_products_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! analytics/report/products/config */ "./client/analytics/report/products/config.js");
/* harmony import */ var analytics_report_revenue_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! analytics/report/revenue/config */ "./client/analytics/report/revenue/config.js");
/* harmony import */ var analytics_report_coupons_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! analytics/report/coupons/config */ "./client/analytics/report/coupons/config.js");
/* harmony import */ var analytics_report_taxes_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! analytics/report/taxes/config */ "./client/analytics/report/taxes/config.js");
/* harmony import */ var analytics_report_downloads_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! analytics/report/downloads/config */ "./client/analytics/report/downloads/config.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */







var DASHBOARD_CHARTS_FILTER = 'woocommerce_admin_dashboard_charts_filter';
var charts = {
  revenue: analytics_report_revenue_config__WEBPACK_IMPORTED_MODULE_5__["charts"],
  orders: analytics_report_orders_config__WEBPACK_IMPORTED_MODULE_3__["charts"],
  products: analytics_report_products_config__WEBPACK_IMPORTED_MODULE_4__["charts"],
  coupons: analytics_report_coupons_config__WEBPACK_IMPORTED_MODULE_6__["charts"],
  taxes: analytics_report_taxes_config__WEBPACK_IMPORTED_MODULE_7__["charts"],
  downloads: analytics_report_downloads_config__WEBPACK_IMPORTED_MODULE_8__["charts"]
};
var defaultCharts = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Total Sales', 'woocommerce-admin'),
  report: 'revenue',
  key: 'total_sales'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Net Sales', 'woocommerce-admin'),
  report: 'revenue',
  key: 'net_revenue'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Orders', 'woocommerce-admin'),
  report: 'orders',
  key: 'orders_count'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Average Order Value', 'woocommerce-admin'),
  report: 'orders',
  key: 'avg_order_value'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Items Sold', 'woocommerce-admin'),
  report: 'products',
  key: 'items_sold'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Returns', 'woocommerce-admin'),
  report: 'revenue',
  key: 'refunds'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Discounted Orders', 'woocommerce-admin'),
  report: 'coupons',
  key: 'orders_count'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Gross discounted', 'woocommerce-admin'),
  report: 'coupons',
  key: 'amount'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Total Tax', 'woocommerce-admin'),
  report: 'taxes',
  key: 'total_tax'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Order Tax', 'woocommerce-admin'),
  report: 'taxes',
  key: 'order_tax'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Shipping Tax', 'woocommerce-admin'),
  report: 'taxes',
  key: 'shipping_tax'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Shipping', 'woocommerce-admin'),
  report: 'revenue',
  key: 'shipping'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Downloads', 'woocommerce-admin'),
  report: 'downloads',
  key: 'download_count'
}];
var uniqCharts = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__["applyFilters"])(DASHBOARD_CHARTS_FILTER, defaultCharts.map(function (chartDef) {
  return _objectSpread({}, charts[chartDef.report].find(function (chart) {
    return chart.key === chartDef.key;
  }), {
    label: chartDef.label,
    endpoint: chartDef.report
  });
}));

/***/ }),

/***/ "./client/dashboard/dashboard-charts/index.js":
/*!****************************************************!*\
  !*** ./client/dashboard/dashboard-charts/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/compose */ "./node_modules/@wordpress/compose/build-module/index.js");
/* harmony import */ var gridicons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gridicons */ "./node_modules/gridicons/dist/index.js");
/* harmony import */ var gridicons__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(gridicons__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/index.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @woocommerce/components */ "@woocommerce/components");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var lib_date__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lib/date */ "./client/lib/date.js");
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./block */ "./client/dashboard/dashboard-charts/block.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./config */ "./client/dashboard/dashboard-charts/config.js");
/* harmony import */ var wc_api_with_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! wc-api/with-select */ "./client/wc-api/with-select.js");
/* harmony import */ var lib_tracks__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lib/tracks */ "./client/lib/tracks.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./style.scss */ "./client/dashboard/dashboard-charts/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_20__);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */








/**
 * WooCommerce dependencies
 */



/**
 * Internal dependencies
 */







var DashboardCharts = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(DashboardCharts, _Component);

  var _super = _createSuper(DashboardCharts);

  function DashboardCharts(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DashboardCharts);

    _this = _super.apply(this, arguments);

    _this.setInterval = function (interval) {
      _this.setState({
        interval: interval
      }, function () {
        var userDataFields = {
          dashboard_chart_interval: _this.state.interval
        };

        _this.props.updateCurrentUserData(userDataFields);

        Object(lib_tracks__WEBPACK_IMPORTED_MODULE_19__["recordEvent"])('dash_charts_interval', {
          interval: interval
        });
      });
    };

    _this.state = {
      chartType: props.userPrefChartType || 'line',
      interval: props.userPrefChartInterval || 'day'
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(DashboardCharts, [{
    key: "handleTypeToggle",
    value: function handleTypeToggle(chartType) {
      var _this2 = this;

      return function () {
        _this2.setState({
          chartType: chartType
        });

        var userDataFields = {
          dashboard_chart_type: chartType
        };

        _this2.props.updateCurrentUserData(userDataFields);

        Object(lib_tracks__WEBPACK_IMPORTED_MODULE_19__["recordEvent"])('dash_charts_type_toggle', {
          chart_type: chartType
        });
      };
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this$props = this.props,
          hiddenBlocks = _this$props.hiddenBlocks,
          isFirst = _this$props.isFirst,
          isLast = _this$props.isLast,
          onMove = _this$props.onMove,
          onRemove = _this$props.onRemove,
          onTitleBlur = _this$props.onTitleBlur,
          onTitleChange = _this$props.onTitleChange,
          onToggleHiddenBlock = _this$props.onToggleHiddenBlock,
          titleInput = _this$props.titleInput,
          Controls = _this$props.controls;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_14__["EllipsisMenu"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Choose which charts to display', 'woocommerce-admin'),
        renderContent: function renderContent(_ref) {
          var onToggle = _ref.onToggle;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_14__["MenuTitle"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Charts', 'woocommerce-admin')), _config__WEBPACK_IMPORTED_MODULE_17__["uniqCharts"].map(function (chart) {
            var key = chart.endpoint + '_' + chart.key;
            var checked = !hiddenBlocks.includes(key);
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_14__["MenuItem"], {
              checked: checked,
              isCheckbox: true,
              isClickable: true,
              key: chart.endpoint + '_' + chart.key,
              onInvoke: function onInvoke() {
                onToggleHiddenBlock(key)();
                Object(lib_tracks__WEBPACK_IMPORTED_MODULE_19__["recordEvent"])('dash_charts_chart_toggle', {
                  status: checked ? 'off' : 'on',
                  key: key
                });
              }
            }, chart.label);
          }),  true && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Controls, {
            onToggle: onToggle,
            onMove: onMove,
            onRemove: onRemove,
            isFirst: isFirst,
            isLast: isLast,
            onTitleBlur: onTitleBlur,
            onTitleChange: onTitleChange,
            titleInput: titleInput
          }));
        }
      });
    }
  }, {
    key: "renderIntervalSelector",
    value: function renderIntervalSelector() {
      var allowedIntervals = Object(lib_date__WEBPACK_IMPORTED_MODULE_15__["getAllowedIntervalsForQuery"])(this.props.query);

      if (!allowedIntervals || allowedIntervals.length < 1) {
        return null;
      }

      var intervalLabels = {
        hour: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('By hour', 'woocommerce-admin'),
        day: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('By day', 'woocommerce-admin'),
        week: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('By week', 'woocommerce-admin'),
        month: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('By month', 'woocommerce-admin'),
        quarter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('By quarter', 'woocommerce-admin'),
        year: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('By year', 'woocommerce-admin')
      };
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["SelectControl"], {
        className: "woocommerce-chart__interval-select",
        value: this.state.interval,
        options: allowedIntervals.map(function (allowedInterval) {
          return {
            value: allowedInterval,
            label: intervalLabels[allowedInterval]
          };
        }),
        onChange: this.setInterval
      });
    }
  }, {
    key: "renderChartBlocks",
    value: function renderChartBlocks(query) {
      var _this$props2 = this.props,
          hiddenBlocks = _this$props2.hiddenBlocks,
          path = _this$props2.path; // Reduce the API response to only the necessary stat fields
      // by supplying all charts common to each endpoint.

      var chartsByEndpoint = _config__WEBPACK_IMPORTED_MODULE_17__["uniqCharts"].reduce(function (byEndpoint, chart) {
        if (typeof byEndpoint[chart.endpoint] === 'undefined') {
          byEndpoint[chart.endpoint] = [];
        }

        byEndpoint[chart.endpoint].push(chart);
        return byEndpoint;
      }, {});
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "woocommerce-dashboard__columns"
      }, _config__WEBPACK_IMPORTED_MODULE_17__["uniqCharts"].map(function (chart) {
        return hiddenBlocks.includes(chart.endpoint + '_' + chart.key) ? null : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_block__WEBPACK_IMPORTED_MODULE_16__["default"], {
          charts: chartsByEndpoint[chart.endpoint],
          endpoint: chart.endpoint,
          key: chart.endpoint + '_' + chart.key,
          path: path,
          query: query,
          selectedChart: chart
        });
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var title = this.props.title;
      var _this$state = this.state,
          chartType = _this$state.chartType,
          interval = _this$state.interval;

      var query = _objectSpread({}, this.props.query, {
        chartType: chartType,
        interval: interval
      });

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "woocommerce-dashboard__dashboard-charts"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_14__["SectionHeader"], {
        title: title || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Charts', 'woocommerce-admin'),
        menu: this.renderMenu(),
        className: 'has-interval-select'
      }, this.renderIntervalSelector(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["NavigableMenu"], {
        className: "woocommerce-chart__types",
        orientation: "horizontal",
        role: "menubar"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["IconButton"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('woocommerce-chart__type-button', {
          'woocommerce-chart__type-button-selected': !query.chartType || query.chartType === 'line'
        }),
        icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(gridicons__WEBPACK_IMPORTED_MODULE_10___default.a, {
          icon: "line-graph"
        }),
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Line chart', 'woocommerce-admin'),
        "aria-checked": query.chartType === 'line',
        role: "menuitemradio",
        tabIndex: query.chartType === 'line' ? 0 : -1,
        onClick: this.handleTypeToggle('line')
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["IconButton"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('woocommerce-chart__type-button', {
          'woocommerce-chart__type-button-selected': query.chartType === 'bar'
        }),
        icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(gridicons__WEBPACK_IMPORTED_MODULE_10___default.a, {
          icon: "stats-alt"
        }),
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Bar chart', 'woocommerce-admin'),
        "aria-checked": query.chartType === 'bar',
        role: "menuitemradio",
        tabIndex: query.chartType === 'bar' ? 0 : -1,
        onClick: this.handleTypeToggle('bar')
      }))), this.renderChartBlocks(query)));
    }
  }]);

  return DashboardCharts;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

DashboardCharts.propTypes = {
  path: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string.isRequired,
  query: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_9__["compose"])(Object(wc_api_with_select__WEBPACK_IMPORTED_MODULE_18__["default"])(function (select) {
  var _select = select('wc-api'),
      getCurrentUserData = _select.getCurrentUserData;

  var userData = getCurrentUserData();
  return {
    userPrefChartType: userData.dashboard_chart_type,
    userPrefChartInterval: userData.dashboard_chart_interval
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_13__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('wc-api'),
      updateCurrentUserData = _dispatch.updateCurrentUserData;

  return {
    updateCurrentUserData: updateCurrentUserData
  };
}))(DashboardCharts));

/***/ }),

/***/ "./client/dashboard/dashboard-charts/style.scss":
/*!******************************************************!*\
  !*** ./client/dashboard/dashboard-charts/style.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=dashboard-charts.529014c95ecacd97f3d0.min.js.map