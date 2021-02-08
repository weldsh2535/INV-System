(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~login-login-module~password-reset-password-reset-module~sign-up-sign-up-module"], {
    /***/
    "./node_modules/@firebase/analytics/dist/index.esm.js":
    /*!************************************************************!*\
      !*** ./node_modules/@firebase/analytics/dist/index.esm.js ***!
      \************************************************************/

    /*! exports provided: factory, getGlobalVars, registerAnalytics, resetGlobalVars, settings */

    /***/
    function node_modulesFirebaseAnalyticsDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "factory", function () {
        return factory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getGlobalVars", function () {
        return getGlobalVars;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerAnalytics", function () {
        return registerAnalytics;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "resetGlobalVars", function () {
        return resetGlobalVars;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "settings", function () {
        return settings;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @firebase/app */
      "./node_modules/@firebase/app/dist/index.cjs.js");
      /* harmony import */


      var _firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _firebase_installations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @firebase/installations */
      "./node_modules/@firebase/installations/dist/index.esm.js");
      /* harmony import */


      var _firebase_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @firebase/logger */
      "./node_modules/@firebase/logger/dist/index.esm.js");
      /* harmony import */


      var _firebase_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @firebase/util */
      "./node_modules/@firebase/util/dist/index.cjs.js");
      /* harmony import */


      var _firebase_util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_firebase_util__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _firebase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @firebase/component */
      "./node_modules/@firebase/component/dist/index.cjs.js");
      /* harmony import */


      var _firebase_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_firebase_component__WEBPACK_IMPORTED_MODULE_5__);
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // Key to attach FID to in gtag params.


      var GA_FID_KEY = 'firebase_id';
      var ORIGIN_KEY = 'origin';
      var FETCH_TIMEOUT_MILLIS = 60 * 1000;
      var DYNAMIC_CONFIG_URL = 'https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig';
      var GTAG_URL = 'https://www.googletagmanager.com/gtag/js';
      var GtagCommand;

      (function (GtagCommand) {
        GtagCommand["EVENT"] = "event";
        GtagCommand["SET"] = "set";
        GtagCommand["CONFIG"] = "config";
      })(GtagCommand || (GtagCommand = {}));
      /*
       * Officially recommended event names for gtag.js
       * Any other string is also allowed.
       */


      var EventName;

      (function (EventName) {
        EventName["ADD_SHIPPING_INFO"] = "add_shipping_info";
        EventName["ADD_PAYMENT_INFO"] = "add_payment_info";
        EventName["ADD_TO_CART"] = "add_to_cart";
        EventName["ADD_TO_WISHLIST"] = "add_to_wishlist";
        EventName["BEGIN_CHECKOUT"] = "begin_checkout";
        /** @deprecated */

        EventName["CHECKOUT_PROGRESS"] = "checkout_progress";
        EventName["EXCEPTION"] = "exception";
        EventName["GENERATE_LEAD"] = "generate_lead";
        EventName["LOGIN"] = "login";
        EventName["PAGE_VIEW"] = "page_view";
        EventName["PURCHASE"] = "purchase";
        EventName["REFUND"] = "refund";
        EventName["REMOVE_FROM_CART"] = "remove_from_cart";
        EventName["SCREEN_VIEW"] = "screen_view";
        EventName["SEARCH"] = "search";
        EventName["SELECT_CONTENT"] = "select_content";
        EventName["SELECT_ITEM"] = "select_item";
        EventName["SELECT_PROMOTION"] = "select_promotion";
        /** @deprecated */

        EventName["SET_CHECKOUT_OPTION"] = "set_checkout_option";
        EventName["SHARE"] = "share";
        EventName["SIGN_UP"] = "sign_up";
        EventName["TIMING_COMPLETE"] = "timing_complete";
        EventName["VIEW_CART"] = "view_cart";
        EventName["VIEW_ITEM"] = "view_item";
        EventName["VIEW_ITEM_LIST"] = "view_item_list";
        EventName["VIEW_PROMOTION"] = "view_promotion";
        EventName["VIEW_SEARCH_RESULTS"] = "view_search_results";
      })(EventName || (EventName = {}));
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Logs an analytics event through the Firebase SDK.
       *
       * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
       * @param eventName Google Analytics event name, choose from standard list or use a custom string.
       * @param eventParams Analytics event parameters.
       */


      function _logEvent(gtagFunction, initializationPromise, eventName, eventParams, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var measurementId, params;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (!(options && options.global)) return [3
                /*break*/
                , 1];
                gtagFunction(GtagCommand.EVENT, eventName, eventParams);
                return [2
                /*return*/
                ];

              case 1:
                return [4
                /*yield*/
                , initializationPromise];

              case 2:
                measurementId = _a.sent();
                params = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, eventParams), {
                  'send_to': measurementId
                });
                gtagFunction(GtagCommand.EVENT, eventName, params);
                _a.label = 3;

              case 3:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Set screen_name parameter for this Google Analytics ID.
       *
       * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
       * @param screenName Screen name string to set.
       */


      function _setCurrentScreen(gtagFunction, initializationPromise, screenName, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var measurementId;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (!(options && options.global)) return [3
                /*break*/
                , 1];
                gtagFunction(GtagCommand.SET, {
                  'screen_name': screenName
                });
                return [2
                /*return*/
                , Promise.resolve()];

              case 1:
                return [4
                /*yield*/
                , initializationPromise];

              case 2:
                measurementId = _a.sent();
                gtagFunction(GtagCommand.CONFIG, measurementId, {
                  update: true,
                  'screen_name': screenName
                });
                _a.label = 3;

              case 3:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Set user_id parameter for this Google Analytics ID.
       *
       * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
       * @param id User ID string to set
       */


      function _setUserId(gtagFunction, initializationPromise, id, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var measurementId;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (!(options && options.global)) return [3
                /*break*/
                , 1];
                gtagFunction(GtagCommand.SET, {
                  'user_id': id
                });
                return [2
                /*return*/
                , Promise.resolve()];

              case 1:
                return [4
                /*yield*/
                , initializationPromise];

              case 2:
                measurementId = _a.sent();
                gtagFunction(GtagCommand.CONFIG, measurementId, {
                  update: true,
                  'user_id': id
                });
                _a.label = 3;

              case 3:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Set all other user properties other than user_id and screen_name.
       *
       * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
       * @param properties Map of user properties to set
       */


      function _setUserProperties(gtagFunction, initializationPromise, properties, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var flatProperties, _i, _a, key, measurementId;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                if (!(options && options.global)) return [3
                /*break*/
                , 1];
                flatProperties = {};

                for (_i = 0, _a = Object.keys(properties); _i < _a.length; _i++) {
                  key = _a[_i]; // use dot notation for merge behavior in gtag.js

                  flatProperties["user_properties." + key] = properties[key];
                }

                gtagFunction(GtagCommand.SET, flatProperties);
                return [2
                /*return*/
                , Promise.resolve()];

              case 1:
                return [4
                /*yield*/
                , initializationPromise];

              case 2:
                measurementId = _b.sent();
                gtagFunction(GtagCommand.CONFIG, measurementId, {
                  update: true,
                  'user_properties': properties
                });
                _b.label = 3;

              case 3:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Set whether collection is enabled for this ID.
       *
       * @param enabled If true, collection is enabled for this ID.
       */


      function _setAnalyticsCollectionEnabled(initializationPromise, enabled) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var measurementId;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , initializationPromise];

              case 1:
                measurementId = _a.sent();
                window["ga-disable-" + measurementId] = !enabled;
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var logger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_3__["Logger"]('@firebase/analytics');
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Inserts gtag script tag into the page to asynchronously download gtag.
       * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
       */

      function insertScriptTag(dataLayerName) {
        var script = document.createElement('script'); // We are not providing an analyticsId in the URL because it would trigger a `page_view`
        // without fid. We will initialize ga-id using gtag (config) command together with fid.

        script.src = GTAG_URL + "?l=" + dataLayerName;
        script.async = true;
        document.head.appendChild(script);
      }
      /**
       * Get reference to, or create, global datalayer.
       * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
       */


      function getOrCreateDataLayer(dataLayerName) {
        // Check for existing dataLayer and create if needed.
        var dataLayer = [];

        if (Array.isArray(window[dataLayerName])) {
          dataLayer = window[dataLayerName];
        } else {
          window[dataLayerName] = dataLayer;
        }

        return dataLayer;
      }
      /**
       * Wrapped gtag logic when gtag is called with 'config' command.
       *
       * @param gtagCore Basic gtag function that just appends to dataLayer.
       * @param initializationPromisesMap Map of appIds to their initialization promises.
       * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
       * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
       * @param measurementId GA Measurement ID to set config for.
       * @param gtagParams Gtag config params to set.
       */


      function gtagOnConfig(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, measurementId, gtagParams) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var correspondingAppId, dynamicConfigResults, foundConfig, e_1;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                correspondingAppId = measurementIdToAppId[measurementId];
                _a.label = 1;

              case 1:
                _a.trys.push([1, 7,, 8]);

                if (!correspondingAppId) return [3
                /*break*/
                , 3];
                return [4
                /*yield*/
                , initializationPromisesMap[correspondingAppId]];

              case 2:
                _a.sent();

                return [3
                /*break*/
                , 6];

              case 3:
                return [4
                /*yield*/
                , Promise.all(dynamicConfigPromisesList)];

              case 4:
                dynamicConfigResults = _a.sent();
                foundConfig = dynamicConfigResults.find(function (config) {
                  return config.measurementId === measurementId;
                });
                if (!foundConfig) return [3
                /*break*/
                , 6];
                return [4
                /*yield*/
                , initializationPromisesMap[foundConfig.appId]];

              case 5:
                _a.sent();

                _a.label = 6;

              case 6:
                return [3
                /*break*/
                , 8];

              case 7:
                e_1 = _a.sent();
                logger.error(e_1);
                return [3
                /*break*/
                , 8];

              case 8:
                gtagCore(GtagCommand.CONFIG, measurementId, gtagParams);
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Wrapped gtag logic when gtag is called with 'event' command.
       *
       * @param gtagCore Basic gtag function that just appends to dataLayer.
       * @param initializationPromisesMap Map of appIds to their initialization promises.
       * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
       * @param measurementId GA Measurement ID to log event to.
       * @param gtagParams Params to log with this event.
       */


      function gtagOnEvent(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementId, gtagParams) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var initializationPromisesToWaitFor, gaSendToList, dynamicConfigResults, _loop_1, _i, gaSendToList_1, sendToId, state_1, e_2;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                _a.trys.push([0, 4,, 5]);

                initializationPromisesToWaitFor = [];
                if (!(gtagParams && gtagParams['send_to'])) return [3
                /*break*/
                , 2];
                gaSendToList = gtagParams['send_to']; // Make it an array if is isn't, so it can be dealt with the same way.

                if (!Array.isArray(gaSendToList)) {
                  gaSendToList = [gaSendToList];
                }

                return [4
                /*yield*/
                , Promise.all(dynamicConfigPromisesList)];

              case 1:
                dynamicConfigResults = _a.sent();

                _loop_1 = function _loop_1(sendToId) {
                  // Any fetched dynamic measurement ID that matches this 'send_to' ID
                  var foundConfig = dynamicConfigResults.find(function (config) {
                    return config.measurementId === sendToId;
                  });
                  var initializationPromise = foundConfig && initializationPromisesMap[foundConfig.appId];

                  if (initializationPromise) {
                    initializationPromisesToWaitFor.push(initializationPromise);
                  } else {
                    // Found an item in 'send_to' that is not associated
                    // directly with an FID, possibly a group.  Empty this array,
                    // exit the loop early, and let it get populated below.
                    initializationPromisesToWaitFor = [];
                    return "break";
                  }
                };

                for (_i = 0, gaSendToList_1 = gaSendToList; _i < gaSendToList_1.length; _i++) {
                  sendToId = gaSendToList_1[_i];
                  state_1 = _loop_1(sendToId);
                  if (state_1 === "break") break;
                }

                _a.label = 2;

              case 2:
                // This will be unpopulated if there was no 'send_to' field , or
                // if not all entries in the 'send_to' field could be mapped to
                // a FID. In these cases, wait on all pending initialization promises.
                if (initializationPromisesToWaitFor.length === 0) {
                  initializationPromisesToWaitFor = Object.values(initializationPromisesMap);
                } // Run core gtag function with args after all relevant initialization
                // promises have been resolved.


                return [4
                /*yield*/
                , Promise.all(initializationPromisesToWaitFor)];

              case 3:
                // Run core gtag function with args after all relevant initialization
                // promises have been resolved.
                _a.sent(); // Workaround for http://b/141370449 - third argument cannot be undefined.


                gtagCore(GtagCommand.EVENT, measurementId, gtagParams || {});
                return [3
                /*break*/
                , 5];

              case 4:
                e_2 = _a.sent();
                logger.error(e_2);
                return [3
                /*break*/
                , 5];

              case 5:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Wraps a standard gtag function with extra code to wait for completion of
       * relevant initialization promises before sending requests.
       *
       * @param gtagCore Basic gtag function that just appends to dataLayer.
       * @param initializationPromisesMap Map of appIds to their initialization promises.
       * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
       * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
       */


      function wrapGtag(gtagCore,
      /**
       * Allows wrapped gtag calls to wait on whichever intialization promises are required,
       * depending on the contents of the gtag params' `send_to` field, if any.
       */
      initializationPromisesMap,
      /**
       * Wrapped gtag calls sometimes require all dynamic config fetches to have returned
       * before determining what initialization promises (which include FIDs) to wait for.
       */
      dynamicConfigPromisesList,
      /**
       * Wrapped gtag config calls can narrow down which initialization promise (with FID)
       * to wait for if the measurementId is already fetched, by getting the corresponding appId,
       * which is the key for the initialization promises map.
       */
      measurementIdToAppId) {
        /**
         * Wrapper around gtag that ensures FID is sent with gtag calls.
         * @param command Gtag command type.
         * @param idOrNameOrParams Measurement ID if command is EVENT/CONFIG, params if command is SET.
         * @param gtagParams Params if event is EVENT/CONFIG.
         */
        function gtagWrapper(command, idOrNameOrParams, gtagParams) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var e_3;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  _a.trys.push([0, 6,, 7]);

                  if (!(command === GtagCommand.EVENT)) return [3
                  /*break*/
                  , 2]; // If EVENT, second arg must be measurementId.

                  return [4
                  /*yield*/
                  , gtagOnEvent(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, idOrNameOrParams, gtagParams)];

                case 1:
                  // If EVENT, second arg must be measurementId.
                  _a.sent();

                  return [3
                  /*break*/
                  , 5];

                case 2:
                  if (!(command === GtagCommand.CONFIG)) return [3
                  /*break*/
                  , 4]; // If CONFIG, second arg must be measurementId.

                  return [4
                  /*yield*/
                  , gtagOnConfig(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, idOrNameOrParams, gtagParams)];

                case 3:
                  // If CONFIG, second arg must be measurementId.
                  _a.sent();

                  return [3
                  /*break*/
                  , 5];

                case 4:
                  // If SET, second arg must be params.
                  gtagCore(GtagCommand.SET, idOrNameOrParams);
                  _a.label = 5;

                case 5:
                  return [3
                  /*break*/
                  , 7];

                case 6:
                  e_3 = _a.sent();
                  logger.error(e_3);
                  return [3
                  /*break*/
                  , 7];

                case 7:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        }

        return gtagWrapper;
      }
      /**
       * Creates global gtag function or wraps existing one if found.
       * This wrapped function attaches Firebase instance ID (FID) to gtag 'config' and
       * 'event' calls that belong to the GAID associated with this Firebase instance.
       *
       * @param initializationPromisesMap Map of appIds to their initialization promises.
       * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
       * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
       * @param dataLayerName Name of global GA datalayer array.
       * @param gtagFunctionName Name of global gtag function ("gtag" if not user-specified).
       */


      function wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagFunctionName) {
        // Create a basic core gtag function
        var gtagCore = function gtagCore() {
          var _args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            _args[_i] = arguments[_i];
          } // Must push IArguments object, not an array.


          window[dataLayerName].push(arguments);
        }; // Replace it with existing one if found


        if (window[gtagFunctionName] && typeof window[gtagFunctionName] === 'function') {
          // @ts-ignore
          gtagCore = window[gtagFunctionName];
        }

        window[gtagFunctionName] = wrapGtag(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId);
        return {
          gtagCore: gtagCore,
          wrappedGtag: window[gtagFunctionName]
        };
      }
      /**
       * Returns first script tag in DOM matching our gtag url pattern.
       */


      function findGtagScriptOnPage() {
        var scriptTags = window.document.getElementsByTagName('script');

        for (var _i = 0, _a = Object.values(scriptTags); _i < _a.length; _i++) {
          var tag = _a[_i];

          if (tag.src && tag.src.includes(GTAG_URL)) {
            return tag;
          }
        }

        return null;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var _a;

      var ERRORS = (_a = {}, _a["already-exists"
      /* ALREADY_EXISTS */
      ] = 'A Firebase Analytics instance with the appId {$id} ' + ' already exists. ' + 'Only one Firebase Analytics instance can be created for each appId.', _a["already-initialized"
      /* ALREADY_INITIALIZED */
      ] = 'Firebase Analytics has already been initialized.' + 'settings() must be called before initializing any Analytics instance' + 'or it will have no effect.', _a["interop-component-reg-failed"
      /* INTEROP_COMPONENT_REG_FAILED */
      ] = 'Firebase Analytics Interop Component failed to instantiate: {$reason}', _a["invalid-analytics-context"
      /* INVALID_ANALYTICS_CONTEXT */
      ] = 'Firebase Analytics is not supported in this environment. ' + 'Wrap initialization of analytics in analytics.isSupported() ' + 'to prevent initialization in unsupported environments. Details: {$errorInfo}', _a["indexeddb-unavailable"
      /* INDEXEDDB_UNAVAILABLE */
      ] = 'IndexedDB unavailable or restricted in this environment. ' + 'Wrap initialization of analytics in analytics.isSupported() ' + 'to prevent initialization in unsupported environments. Details: {$errorInfo}', _a["fetch-throttle"
      /* FETCH_THROTTLE */
      ] = 'The config fetch request timed out while in an exponential backoff state.' + ' Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.', _a["config-fetch-failed"
      /* CONFIG_FETCH_FAILED */
      ] = 'Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}', _a["no-api-key"
      /* NO_API_KEY */
      ] = 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field to' + 'contain a valid API key.', _a["no-app-id"
      /* NO_APP_ID */
      ] = 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field to' + 'contain a valid app ID.', _a);
      var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_4__["ErrorFactory"]('analytics', 'Analytics', ERRORS);
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Backoff factor for 503 errors, which we want to be conservative about
       * to avoid overloading servers. Each retry interval will be
       * BASE_INTERVAL_MILLIS * LONG_RETRY_FACTOR ^ retryCount, so the second one
       * will be ~30 seconds (with fuzzing).
       */

      var LONG_RETRY_FACTOR = 30;
      /**
       * Base wait interval to multiplied by backoffFactor^backoffCount.
       */

      var BASE_INTERVAL_MILLIS = 1000;
      /**
       * Stubbable retry data storage class.
       */

      var RetryData =
      /** @class */
      function () {
        function RetryData(throttleMetadata, intervalMillis) {
          if (throttleMetadata === void 0) {
            throttleMetadata = {};
          }

          if (intervalMillis === void 0) {
            intervalMillis = BASE_INTERVAL_MILLIS;
          }

          this.throttleMetadata = throttleMetadata;
          this.intervalMillis = intervalMillis;
        }

        RetryData.prototype.getThrottleMetadata = function (appId) {
          return this.throttleMetadata[appId];
        };

        RetryData.prototype.setThrottleMetadata = function (appId, metadata) {
          this.throttleMetadata[appId] = metadata;
        };

        RetryData.prototype.deleteThrottleMetadata = function (appId) {
          delete this.throttleMetadata[appId];
        };

        return RetryData;
      }();

      var defaultRetryData = new RetryData();
      /**
       * Set GET request headers.
       * @param apiKey App API key.
       */

      function getHeaders(apiKey) {
        return new Headers({
          Accept: 'application/json',
          'x-goog-api-key': apiKey
        });
      }
      /**
       * Fetches dynamic config from backend.
       * @param app Firebase app to fetch config for.
       */


      function fetchDynamicConfig(appFields) {
        var _a;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var appId, apiKey, request, appUrl, response, errorMessage, jsonResponse, _ignored_1;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                appId = appFields.appId, apiKey = appFields.apiKey;
                request = {
                  method: 'GET',
                  headers: getHeaders(apiKey)
                };
                appUrl = DYNAMIC_CONFIG_URL.replace('{app-id}', appId);
                return [4
                /*yield*/
                , fetch(appUrl, request)];

              case 1:
                response = _b.sent();
                if (!(response.status !== 200 && response.status !== 304)) return [3
                /*break*/
                , 6];
                errorMessage = '';
                _b.label = 2;

              case 2:
                _b.trys.push([2, 4,, 5]);

                return [4
                /*yield*/
                , response.json()];

              case 3:
                jsonResponse = _b.sent();

                if ((_a = jsonResponse.error) === null || _a === void 0 ? void 0 : _a.message) {
                  errorMessage = jsonResponse.error.message;
                }

                return [3
                /*break*/
                , 5];

              case 4:
                _ignored_1 = _b.sent();
                return [3
                /*break*/
                , 5];

              case 5:
                throw ERROR_FACTORY.create("config-fetch-failed"
                /* CONFIG_FETCH_FAILED */
                , {
                  httpStatus: response.status,
                  responseMessage: errorMessage
                });

              case 6:
                return [2
                /*return*/
                , response.json()];
            }
          });
        });
      }
      /**
       * Fetches dynamic config from backend, retrying if failed.
       * @param app Firebase app to fetch config for.
       */


      function fetchDynamicConfigWithRetry(app, // retryData and timeoutMillis are parameterized to allow passing a different value for testing.
      retryData, timeoutMillis) {
        if (retryData === void 0) {
          retryData = defaultRetryData;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var _a, appId, apiKey, measurementId, throttleMetadata, signal;

          var _this = this;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
            _a = app.options, appId = _a.appId, apiKey = _a.apiKey, measurementId = _a.measurementId;

            if (!appId) {
              throw ERROR_FACTORY.create("no-app-id"
              /* NO_APP_ID */
              );
            }

            if (!apiKey) {
              if (measurementId) {
                return [2
                /*return*/
                , {
                  measurementId: measurementId,
                  appId: appId
                }];
              }

              throw ERROR_FACTORY.create("no-api-key"
              /* NO_API_KEY */
              );
            }

            throttleMetadata = retryData.getThrottleMetadata(appId) || {
              backoffCount: 0,
              throttleEndTimeMillis: Date.now()
            };
            signal = new AnalyticsAbortSignal();
            setTimeout(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                  // Note a very low delay, eg < 10ms, can elapse before listeners are initialized.
                  signal.abort();
                  return [2
                  /*return*/
                  ];
                });
              });
            }, timeoutMillis !== undefined ? timeoutMillis : FETCH_TIMEOUT_MILLIS);
            return [2
            /*return*/
            , attemptFetchDynamicConfigWithRetry({
              appId: appId,
              apiKey: apiKey,
              measurementId: measurementId
            }, throttleMetadata, signal, retryData)];
          });
        });
      }
      /**
       * Runs one retry attempt.
       * @param appFields Necessary app config fields.
       * @param throttleMetadata Ongoing metadata to determine throttling times.
       * @param signal Abort signal.
       */


      function attemptFetchDynamicConfigWithRetry(appFields, _a, signal, retryData // for testing
      ) {
        var throttleEndTimeMillis = _a.throttleEndTimeMillis,
            backoffCount = _a.backoffCount;

        if (retryData === void 0) {
          retryData = defaultRetryData;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var appId, measurementId, e_1, response, e_2, backoffMillis, throttleMetadata;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                appId = appFields.appId, measurementId = appFields.measurementId;
                _b.label = 1;

              case 1:
                _b.trys.push([1, 3,, 4]);

                return [4
                /*yield*/
                , setAbortableTimeout(signal, throttleEndTimeMillis)];

              case 2:
                _b.sent();

                return [3
                /*break*/
                , 4];

              case 3:
                e_1 = _b.sent();

                if (measurementId) {
                  logger.warn("Timed out fetching this Firebase app's measurement ID from the server." + (" Falling back to the measurement ID " + measurementId) + (" provided in the \"measurementId\" field in the local Firebase config. [" + e_1.message + "]"));
                  return [2
                  /*return*/
                  , {
                    appId: appId,
                    measurementId: measurementId
                  }];
                }

                throw e_1;

              case 4:
                _b.trys.push([4, 6,, 7]);

                return [4
                /*yield*/
                , fetchDynamicConfig(appFields)];

              case 5:
                response = _b.sent(); // Note the SDK only clears throttle state if response is success or non-retriable.

                retryData.deleteThrottleMetadata(appId);
                return [2
                /*return*/
                , response];

              case 6:
                e_2 = _b.sent();

                if (!isRetriableError(e_2)) {
                  retryData.deleteThrottleMetadata(appId);

                  if (measurementId) {
                    logger.warn("Failed to fetch this Firebase app's measurement ID from the server." + (" Falling back to the measurement ID " + measurementId) + (" provided in the \"measurementId\" field in the local Firebase config. [" + e_2.message + "]"));
                    return [2
                    /*return*/
                    , {
                      appId: appId,
                      measurementId: measurementId
                    }];
                  } else {
                    throw e_2;
                  }
                }

                backoffMillis = Number(e_2.httpStatus) === 503 ? Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["calculateBackoffMillis"])(backoffCount, retryData.intervalMillis, LONG_RETRY_FACTOR) : Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["calculateBackoffMillis"])(backoffCount, retryData.intervalMillis);
                throttleMetadata = {
                  throttleEndTimeMillis: Date.now() + backoffMillis,
                  backoffCount: backoffCount + 1
                }; // Persists state.

                retryData.setThrottleMetadata(appId, throttleMetadata);
                logger.debug("Calling attemptFetch again in " + backoffMillis + " millis");
                return [2
                /*return*/
                , attemptFetchDynamicConfigWithRetry(appFields, throttleMetadata, signal, retryData)];

              case 7:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Supports waiting on a backoff by:
       *
       * <ul>
       *   <li>Promisifying setTimeout, so we can set a timeout in our Promise chain</li>
       *   <li>Listening on a signal bus for abort events, just like the Fetch API</li>
       *   <li>Failing in the same way the Fetch API fails, so timing out a live request and a throttled
       *       request appear the same.</li>
       * </ul>
       *
       * <p>Visible for testing.
       */


      function setAbortableTimeout(signal, throttleEndTimeMillis) {
        return new Promise(function (resolve, reject) {
          // Derives backoff from given end time, normalizing negative numbers to zero.
          var backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
          var timeout = setTimeout(resolve, backoffMillis); // Adds listener, rather than sets onabort, because signal is a shared object.

          signal.addEventListener(function () {
            clearTimeout(timeout); // If the request completes before this timeout, the rejection has no effect.

            reject(ERROR_FACTORY.create("fetch-throttle"
            /* FETCH_THROTTLE */
            , {
              throttleEndTimeMillis: throttleEndTimeMillis
            }));
          });
        });
      }
      /**
       * Returns true if the {@link Error} indicates a fetch request may succeed later.
       */


      function isRetriableError(e) {
        if (!(e instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_4__["FirebaseError"])) {
          return false;
        } // Uses string index defined by ErrorData, which FirebaseError implements.


        var httpStatus = Number(e['httpStatus']);
        return httpStatus === 429 || httpStatus === 500 || httpStatus === 503 || httpStatus === 504;
      }
      /**
       * Shims a minimal AbortSignal (copied from Remote Config).
       *
       * <p>AbortController's AbortSignal conveniently decouples fetch timeout logic from other aspects
       * of networking, such as retries. Firebase doesn't use AbortController enough to justify a
       * polyfill recommendation, like we do with the Fetch API, but this minimal shim can easily be
       * swapped out if/when we do.
       */


      var AnalyticsAbortSignal =
      /** @class */
      function () {
        function AnalyticsAbortSignal() {
          this.listeners = [];
        }

        AnalyticsAbortSignal.prototype.addEventListener = function (listener) {
          this.listeners.push(listener);
        };

        AnalyticsAbortSignal.prototype.abort = function () {
          this.listeners.forEach(function (listener) {
            return listener();
          });
        };

        return AnalyticsAbortSignal;
      }();
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function validateIndexedDB() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e_1;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (!!Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["isIndexedDBAvailable"])()) return [3
                /*break*/
                , 1];
                logger.warn(ERROR_FACTORY.create("indexeddb-unavailable"
                /* INDEXEDDB_UNAVAILABLE */
                , {
                  errorInfo: 'IndexedDB is not available in this environment.'
                }).message);
                return [2
                /*return*/
                , false];

              case 1:
                _a.trys.push([1, 3,, 4]);

                return [4
                /*yield*/
                , Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["validateIndexedDBOpenable"])()];

              case 2:
                _a.sent();

                return [3
                /*break*/
                , 4];

              case 3:
                e_1 = _a.sent();
                logger.warn(ERROR_FACTORY.create("indexeddb-unavailable"
                /* INDEXEDDB_UNAVAILABLE */
                , {
                  errorInfo: e_1
                }).message);
                return [2
                /*return*/
                , false];

              case 4:
                return [2
                /*return*/
                , true];
            }
          });
        });
      }
      /**
       * Initialize the analytics instance in gtag.js by calling config command with fid.
       *
       * NOTE: We combine analytics initialization and setting fid together because we want fid to be
       * part of the `page_view` event that's sent during the initialization
       * @param app Firebase app
       * @param gtagCore The gtag function that's not wrapped.
       * @param dynamicConfigPromisesList Array of all dynamic config promises.
       * @param measurementIdToAppId Maps measurementID to appID.
       * @param installations FirebaseInstallations instance.
       *
       * @returns Measurement ID.
       */


      function initializeIds(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCore) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var dynamicConfigPromise, fidPromise, _a, dynamicConfig, fid, configProperties;

          var _b;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
            switch (_c.label) {
              case 0:
                dynamicConfigPromise = fetchDynamicConfigWithRetry(app); // Once fetched, map measurementIds to appId, for ease of lookup in wrapped gtag function.

                dynamicConfigPromise.then(function (config) {
                  measurementIdToAppId[config.measurementId] = config.appId;

                  if (app.options.measurementId && config.measurementId !== app.options.measurementId) {
                    logger.warn("The measurement ID in the local Firebase config (" + app.options.measurementId + ")" + (" does not match the measurement ID fetched from the server (" + config.measurementId + ").") + " To ensure analytics events are always sent to the correct Analytics property," + " update the" + " measurement ID field in the local config or remove it from the local config.");
                  }
                })["catch"](function (e) {
                  return logger.error(e);
                }); // Add to list to track state of all dynamic config promises.

                dynamicConfigPromisesList.push(dynamicConfigPromise);
                fidPromise = validateIndexedDB().then(function (envIsValid) {
                  if (envIsValid) {
                    return installations.getId();
                  } else {
                    return undefined;
                  }
                });
                return [4
                /*yield*/
                , Promise.all([dynamicConfigPromise, fidPromise])];

              case 1:
                _a = _c.sent(), dynamicConfig = _a[0], fid = _a[1]; // This command initializes gtag.js and only needs to be called once for the entire web app,
                // but since it is idempotent, we can call it multiple times.
                // We keep it together with other initialization logic for better code structure.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any

                gtagCore('js', new Date());
                configProperties = (_b = {}, // guard against developers accidentally setting properties with prefix `firebase_`
                _b[ORIGIN_KEY] = 'firebase', _b.update = true, _b);

                if (fid != null) {
                  configProperties[GA_FID_KEY] = fid;
                } // It should be the first config command called on this GA-ID
                // Initialize this GA-ID and set FID on it using the gtag config API.


                gtagCore(GtagCommand.CONFIG, dynamicConfig.measurementId, configProperties);
                return [2
                /*return*/
                , dynamicConfig.measurementId];
            }
          });
        });
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Maps appId to full initialization promise. Wrapped gtag calls must wait on
       * all or some of these, depending on the call's `send_to` param and the status
       * of the dynamic config fetches (see below).
       */


      var initializationPromisesMap = {};
      /**
       * List of dynamic config fetch promises. In certain cases, wrapped gtag calls
       * wait on all these to be complete in order to determine if it can selectively
       * wait for only certain initialization (FID) promises or if it must wait for all.
       */

      var dynamicConfigPromisesList = [];
      /**
       * Maps fetched measurementIds to appId. Populated when the app's dynamic config
       * fetch completes. If already populated, gtag config calls can use this to
       * selectively wait for only this app's initialization promise (FID) instead of all
       * initialization promises.
       */

      var measurementIdToAppId = {};
      /**
       * Name for window global data layer array used by GA: defaults to 'dataLayer'.
       */

      var dataLayerName = 'dataLayer';
      /**
       * Name for window global gtag function used by GA: defaults to 'gtag'.
       */

      var gtagName = 'gtag';
      /**
       * Reproduction of standard gtag function or reference to existing
       * gtag function on window object.
       */

      var gtagCoreFunction;
      /**
       * Wrapper around gtag function that ensures FID is sent with all
       * relevant event and config calls.
       */

      var wrappedGtagFunction;
      /**
       * Flag to ensure page initialization steps (creation or wrapping of
       * dataLayer and gtag script) are only run once per page load.
       */

      var globalInitDone = false;
      /**
       * For testing
       */

      function resetGlobalVars(newGlobalInitDone, newInitializationPromisesMap, newDynamicPromises) {
        if (newGlobalInitDone === void 0) {
          newGlobalInitDone = false;
        }

        if (newInitializationPromisesMap === void 0) {
          newInitializationPromisesMap = {};
        }

        if (newDynamicPromises === void 0) {
          newDynamicPromises = [];
        }

        globalInitDone = newGlobalInitDone;
        initializationPromisesMap = newInitializationPromisesMap;
        dynamicConfigPromisesList = newDynamicPromises;
        dataLayerName = 'dataLayer';
        gtagName = 'gtag';
      }
      /**
       * For testing
       */


      function getGlobalVars() {
        return {
          initializationPromisesMap: initializationPromisesMap,
          dynamicConfigPromisesList: dynamicConfigPromisesList
        };
      }
      /**
       * This must be run before calling firebase.analytics() or it won't
       * have any effect.
       * @param options Custom gtag and dataLayer names.
       */


      function settings(options) {
        if (globalInitDone) {
          throw ERROR_FACTORY.create("already-initialized"
          /* ALREADY_INITIALIZED */
          );
        }

        if (options.dataLayerName) {
          dataLayerName = options.dataLayerName;
        }

        if (options.gtagName) {
          gtagName = options.gtagName;
        }
      }
      /**
       * Returns true if no environment mismatch is found.
       * If environment mismatches are found, throws an INVALID_ANALYTICS_CONTEXT
       * error that also lists details for each mismatch found.
       */


      function warnOnBrowserContextMismatch() {
        var mismatchedEnvMessages = [];

        if (Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["isBrowserExtension"])()) {
          mismatchedEnvMessages.push('This is a browser extension environment.');
        }

        if (!Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["areCookiesEnabled"])()) {
          mismatchedEnvMessages.push('Cookies are not available.');
        }

        if (mismatchedEnvMessages.length > 0) {
          var details = mismatchedEnvMessages.map(function (message, index) {
            return "(" + (index + 1) + ") " + message;
          }).join(' ');
          var err = ERROR_FACTORY.create("invalid-analytics-context"
          /* INVALID_ANALYTICS_CONTEXT */
          , {
            errorInfo: details
          });
          logger.warn(err.message);
        }
      }

      function factory(app, installations) {
        warnOnBrowserContextMismatch();
        var appId = app.options.appId;

        if (!appId) {
          throw ERROR_FACTORY.create("no-app-id"
          /* NO_APP_ID */
          );
        }

        if (!app.options.apiKey) {
          if (app.options.measurementId) {
            logger.warn("The \"apiKey\" field is empty in the local Firebase config. This is needed to fetch the latest" + (" measurement ID for this Firebase app. Falling back to the measurement ID " + app.options.measurementId) + " provided in the \"measurementId\" field in the local Firebase config.");
          } else {
            throw ERROR_FACTORY.create("no-api-key"
            /* NO_API_KEY */
            );
          }
        }

        if (initializationPromisesMap[appId] != null) {
          throw ERROR_FACTORY.create("already-exists"
          /* ALREADY_EXISTS */
          , {
            id: appId
          });
        }

        if (!globalInitDone) {
          // Steps here should only be done once per page: creation or wrapping
          // of dataLayer and global gtag function.
          // Detect if user has already put the gtag <script> tag on this page.
          if (!findGtagScriptOnPage()) {
            insertScriptTag(dataLayerName);
          }

          getOrCreateDataLayer(dataLayerName);

          var _a = wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagName),
              wrappedGtag = _a.wrappedGtag,
              gtagCore = _a.gtagCore;

          wrappedGtagFunction = wrappedGtag;
          gtagCoreFunction = gtagCore;
          globalInitDone = true;
        } // Async but non-blocking.
        // This map reflects the completion state of all promises for each appId.


        initializationPromisesMap[appId] = initializeIds(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCoreFunction);
        var analyticsInstance = {
          app: app,
          // Public methods return void for API simplicity and to better match gtag,
          // while internal implementations return promises.
          logEvent: function logEvent(eventName, eventParams, options) {
            _logEvent(wrappedGtagFunction, initializationPromisesMap[appId], eventName, eventParams, options)["catch"](function (e) {
              return logger.error(e);
            });
          },
          setCurrentScreen: function setCurrentScreen(screenName, options) {
            _setCurrentScreen(wrappedGtagFunction, initializationPromisesMap[appId], screenName, options)["catch"](function (e) {
              return logger.error(e);
            });
          },
          setUserId: function setUserId(id, options) {
            _setUserId(wrappedGtagFunction, initializationPromisesMap[appId], id, options)["catch"](function (e) {
              return logger.error(e);
            });
          },
          setUserProperties: function setUserProperties(properties, options) {
            _setUserProperties(wrappedGtagFunction, initializationPromisesMap[appId], properties, options)["catch"](function (e) {
              return logger.error(e);
            });
          },
          setAnalyticsCollectionEnabled: function setAnalyticsCollectionEnabled(enabled) {
            _setAnalyticsCollectionEnabled(initializationPromisesMap[appId], enabled)["catch"](function (e) {
              return logger.error(e);
            });
          },
          INTERNAL: {
            "delete": function _delete() {
              delete initializationPromisesMap[appId];
              return Promise.resolve();
            }
          }
        };
        return analyticsInstance;
      }

      var name = "@firebase/analytics";
      var version = "0.6.0";
      /**
       * Type constant for Firebase Analytics.
       */

      var ANALYTICS_TYPE = 'analytics';

      function registerAnalytics(instance) {
        instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_5__["Component"](ANALYTICS_TYPE, function (container) {
          // getImmediate for FirebaseApp will always succeed
          var app = container.getProvider('app').getImmediate();
          var installations = container.getProvider('installations').getImmediate();
          return factory(app, installations);
        }, "PUBLIC"
        /* PUBLIC */
        ).setServiceProps({
          settings: settings,
          EventName: EventName,
          isSupported: isSupported
        }));
        instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_5__["Component"]('analytics-internal', internalFactory, "PRIVATE"
        /* PRIVATE */
        ));
        instance.registerVersion(name, version);

        function internalFactory(container) {
          try {
            var analytics = container.getProvider(ANALYTICS_TYPE).getImmediate();
            return {
              logEvent: analytics.logEvent
            };
          } catch (e) {
            throw ERROR_FACTORY.create("interop-component-reg-failed"
            /* INTEROP_COMPONENT_REG_FAILED */
            , {
              reason: e
            });
          }
        }
      }

      registerAnalytics(_firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a);
      /**
       * this is a public static method provided to users that wraps four different checks:
       *
       * 1. check if it's not a browser extension environment.
       * 1. check if cookie is enabled in current browser.
       * 3. check if IndexedDB is supported by the browser environment.
       * 4. check if the current browser context is valid for using IndexedDB.
       *
       */

      function isSupported() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var isDBOpenable, error_1;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["isBrowserExtension"])()) {
                  return [2
                  /*return*/
                  , false];
                }

                if (!Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["areCookiesEnabled"])()) {
                  return [2
                  /*return*/
                  , false];
                }

                if (!Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["isIndexedDBAvailable"])()) {
                  return [2
                  /*return*/
                  , false];
                }

                _a.label = 1;

              case 1:
                _a.trys.push([1, 3,, 4]);

                return [4
                /*yield*/
                , Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["validateIndexedDBOpenable"])()];

              case 2:
                isDBOpenable = _a.sent();
                return [2
                /*return*/
                , isDBOpenable];

              case 3:
                error_1 = _a.sent();
                return [2
                /*return*/
                , false];

              case 4:
                return [2
                /*return*/
                ];
            }
          });
        });
      } //# sourceMappingURL=index.esm.js.map

      /***/

    },

    /***/
    "./node_modules/@firebase/functions/dist/index.cjs.js":
    /*!************************************************************!*\
      !*** ./node_modules/@firebase/functions/dist/index.cjs.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesFirebaseFunctionsDistIndexCjsJs(module, exports, __webpack_require__) {
      "use strict";

      var firebase = __webpack_require__(
      /*! @firebase/app */
      "./node_modules/@firebase/app/dist/index.cjs.js");

      var tslib = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");

      var component = __webpack_require__(
      /*! @firebase/component */
      "./node_modules/@firebase/component/dist/index.cjs.js");

      function _interopDefaultLegacy(e) {
        return e && typeof e === 'object' && 'default' in e ? e : {
          'default': e
        };
      }

      var firebase__default = /*#__PURE__*/_interopDefaultLegacy(firebase);
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Standard error codes for different ways a request can fail, as defined by:
       * https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto
       *
       * This map is used primarily to convert from a backend error code string to
       * a client SDK error code string, and make sure it's in the supported set.
       */


      var errorCodeMap = {
        OK: 'ok',
        CANCELLED: 'cancelled',
        UNKNOWN: 'unknown',
        INVALID_ARGUMENT: 'invalid-argument',
        DEADLINE_EXCEEDED: 'deadline-exceeded',
        NOT_FOUND: 'not-found',
        ALREADY_EXISTS: 'already-exists',
        PERMISSION_DENIED: 'permission-denied',
        UNAUTHENTICATED: 'unauthenticated',
        RESOURCE_EXHAUSTED: 'resource-exhausted',
        FAILED_PRECONDITION: 'failed-precondition',
        ABORTED: 'aborted',
        OUT_OF_RANGE: 'out-of-range',
        UNIMPLEMENTED: 'unimplemented',
        INTERNAL: 'internal',
        UNAVAILABLE: 'unavailable',
        DATA_LOSS: 'data-loss'
      };
      /**
       * An explicit error that can be thrown from a handler to send an error to the
       * client that called the function.
       */

      var HttpsErrorImpl =
      /** @class */
      function (_super) {
        tslib.__extends(HttpsErrorImpl, _super);

        function HttpsErrorImpl(code, message, details) {
          var _this = _super.call(this, message) || this; // This is a workaround for a bug in TypeScript when extending Error:
          // tslint:disable-next-line
          // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work


          Object.setPrototypeOf(_this, HttpsErrorImpl.prototype);
          _this.code = code;
          _this.details = details;
          return _this;
        }

        return HttpsErrorImpl;
      }(Error);
      /**
       * Takes an HTTP status code and returns the corresponding ErrorCode.
       * This is the standard HTTP status code -> error mapping defined in:
       * https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto
       *
       * @param status An HTTP status code.
       * @return The corresponding ErrorCode, or ErrorCode.UNKNOWN if none.
       */


      function codeForHTTPStatus(status) {
        // Make sure any successful status is OK.
        if (status >= 200 && status < 300) {
          return 'ok';
        }

        switch (status) {
          case 0:
            // This can happen if the server returns 500.
            return 'internal';

          case 400:
            return 'invalid-argument';

          case 401:
            return 'unauthenticated';

          case 403:
            return 'permission-denied';

          case 404:
            return 'not-found';

          case 409:
            return 'aborted';

          case 429:
            return 'resource-exhausted';

          case 499:
            return 'cancelled';

          case 500:
            return 'internal';

          case 501:
            return 'unimplemented';

          case 503:
            return 'unavailable';

          case 504:
            return 'deadline-exceeded';
        }

        return 'unknown';
      }
      /**
       * Takes an HTTP response and returns the corresponding Error, if any.
       */


      function _errorForResponse(status, bodyJSON, serializer) {
        var code = codeForHTTPStatus(status); // Start with reasonable defaults from the status code.

        var description = code;
        var details = undefined; // Then look through the body for explicit details.

        try {
          var errorJSON = bodyJSON && bodyJSON.error;

          if (errorJSON) {
            var status_1 = errorJSON.status;

            if (typeof status_1 === 'string') {
              if (!errorCodeMap[status_1]) {
                // They must've included an unknown error code in the body.
                return new HttpsErrorImpl('internal', 'internal');
              }

              code = errorCodeMap[status_1]; // TODO(klimt): Add better default descriptions for error enums.
              // The default description needs to be updated for the new code.

              description = status_1;
            }

            var message = errorJSON.message;

            if (typeof message === 'string') {
              description = message;
            }

            details = errorJSON.details;

            if (details !== undefined) {
              details = serializer.decode(details);
            }
          }
        } catch (e) {// If we couldn't parse explicit error data, that's fine.
        }

        if (code === 'ok') {
          // Technically, there's an edge case where a developer could explicitly
          // return an error code of OK, and we will treat it as success, but that
          // seems reasonable.
          return null;
        }

        return new HttpsErrorImpl(code, description, details);
      }
      /**
       * Helper class to get metadata that should be included with a function call.
       */


      var ContextProvider =
      /** @class */
      function () {
        function ContextProvider(authProvider, messagingProvider) {
          var _this = this;

          this.auth = null;
          this.messaging = null;
          this.auth = authProvider.getImmediate({
            optional: true
          });
          this.messaging = messagingProvider.getImmediate({
            optional: true
          });

          if (!this.auth) {
            authProvider.get().then(function (auth) {
              return _this.auth = auth;
            }, function () {
              /* get() never rejects */
            });
          }

          if (!this.messaging) {
            messagingProvider.get().then(function (messaging) {
              return _this.messaging = messaging;
            }, function () {
              /* get() never rejects */
            });
          }
        }

        ContextProvider.prototype.getAuthToken = function () {
          return tslib.__awaiter(this, void 0, void 0, function () {
            var token, e_1;
            return tslib.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  if (!this.auth) {
                    return [2
                    /*return*/
                    , undefined];
                  }

                  _a.label = 1;

                case 1:
                  _a.trys.push([1, 3,, 4]);

                  return [4
                  /*yield*/
                  , this.auth.getToken()];

                case 2:
                  token = _a.sent();

                  if (!token) {
                    return [2
                    /*return*/
                    , undefined];
                  }

                  return [2
                  /*return*/
                  , token.accessToken];

                case 3:
                  e_1 = _a.sent(); // If there's any error when trying to get the auth token, leave it off.

                  return [2
                  /*return*/
                  , undefined];

                case 4:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };

        ContextProvider.prototype.getInstanceIdToken = function () {
          return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_a) {
              if (!this.messaging || !('Notification' in self) || Notification.permission !== 'granted') {
                return [2
                /*return*/
                , undefined];
              }

              try {
                return [2
                /*return*/
                , this.messaging.getToken()];
              } catch (e) {
                // We don't warn on this, because it usually means messaging isn't set up.
                // console.warn('Failed to retrieve instance id token.', e);
                // If there's any error when trying to get the token, leave it off.
                return [2
                /*return*/
                , undefined];
              }

              return [2
              /*return*/
              ];
            });
          });
        };

        ContextProvider.prototype.getContext = function () {
          return tslib.__awaiter(this, void 0, void 0, function () {
            var authToken, instanceIdToken;
            return tslib.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4
                  /*yield*/
                  , this.getAuthToken()];

                case 1:
                  authToken = _a.sent();
                  return [4
                  /*yield*/
                  , this.getInstanceIdToken()];

                case 2:
                  instanceIdToken = _a.sent();
                  return [2
                  /*return*/
                  , {
                    authToken: authToken,
                    instanceIdToken: instanceIdToken
                  }];
              }
            });
          });
        };

        return ContextProvider;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var LONG_TYPE = 'type.googleapis.com/google.protobuf.Int64Value';
      var UNSIGNED_LONG_TYPE = 'type.googleapis.com/google.protobuf.UInt64Value';

      function mapValues( // { [k: string]: unknown } is no longer a wildcard assignment target after typescript 3.5
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      o, f) {
        var result = {};

        for (var key in o) {
          if (o.hasOwnProperty(key)) {
            result[key] = f(o[key]);
          }
        }

        return result;
      }

      var Serializer =
      /** @class */
      function () {
        function Serializer() {} // Takes data and encodes it in a JSON-friendly way, such that types such as
        // Date are preserved.


        Serializer.prototype.encode = function (data) {
          var _this = this;

          if (data == null) {
            return null;
          }

          if (data instanceof Number) {
            data = data.valueOf();
          }

          if (typeof data === 'number' && isFinite(data)) {
            // Any number in JS is safe to put directly in JSON and parse as a double
            // without any loss of precision.
            return data;
          }

          if (data === true || data === false) {
            return data;
          }

          if (Object.prototype.toString.call(data) === '[object String]') {
            return data;
          }

          if (Array.isArray(data)) {
            return data.map(function (x) {
              return _this.encode(x);
            });
          }

          if (typeof data === 'function' || typeof data === 'object') {
            return mapValues(data, function (x) {
              return _this.encode(x);
            });
          } // If we got this far, the data is not encodable.


          throw new Error('Data cannot be encoded in JSON: ' + data);
        }; // Takes data that's been encoded in a JSON-friendly form and returns a form
        // with richer datatypes, such as Dates, etc.


        Serializer.prototype.decode = function (json) {
          var _this = this;

          if (json == null) {
            return json;
          }

          if (json['@type']) {
            switch (json['@type']) {
              case LONG_TYPE: // Fall through and handle this the same as unsigned.

              case UNSIGNED_LONG_TYPE:
                {
                  // Technically, this could work return a valid number for malformed
                  // data if there was a number followed by garbage. But it's just not
                  // worth all the extra code to detect that case.
                  var value = Number(json['value']);

                  if (isNaN(value)) {
                    throw new Error('Data cannot be decoded from JSON: ' + json);
                  }

                  return value;
                }

              default:
                {
                  throw new Error('Data cannot be decoded from JSON: ' + json);
                }
            }
          }

          if (Array.isArray(json)) {
            return json.map(function (x) {
              return _this.decode(x);
            });
          }

          if (typeof json === 'function' || typeof json === 'object') {
            return mapValues(json, function (x) {
              return _this.decode(x);
            });
          } // Anything else is safe to return.


          return json;
        };

        return Serializer;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Returns a Promise that will be rejected after the given duration.
       * The error will be of type HttpsErrorImpl.
       *
       * @param millis Number of milliseconds to wait before rejecting.
       */


      function failAfter(millis) {
        var timer;
        var promise = new Promise(function (_, reject) {
          timer = setTimeout(function () {
            reject(new HttpsErrorImpl('deadline-exceeded', 'deadline-exceeded'));
          }, millis);
        });
        return {
          timer: timer,
          promise: promise
        };
      }
      /**
       * The main class for the Firebase Functions SDK.
       */


      var Service =
      /** @class */
      function () {
        /**
         * Creates a new Functions service for the given app and (optional) region or custom domain.
         * @param app_ The FirebaseApp to use.
         * @param regionOrCustomDomain_ one of:
         *   a) A region to call functions from, such as us-central1
         *   b) A custom domain to use as a functions prefix, such as https://mydomain.com
         */
        function Service(app_, authProvider, messagingProvider, regionOrCustomDomain_, fetchImpl) {
          var _this = this;

          if (regionOrCustomDomain_ === void 0) {
            regionOrCustomDomain_ = 'us-central1';
          }

          this.app_ = app_;
          this.fetchImpl = fetchImpl;
          this.serializer = new Serializer();
          this.emulatorOrigin = null;
          this.INTERNAL = {
            "delete": function _delete() {
              return Promise.resolve(_this.deleteService());
            }
          };
          this.contextProvider = new ContextProvider(authProvider, messagingProvider); // Cancels all ongoing requests when resolved.

          this.cancelAllRequests = new Promise(function (resolve) {
            _this.deleteService = function () {
              return resolve();
            };
          }); // Resolve the region or custom domain overload by attempting to parse it.

          try {
            var url = new URL(regionOrCustomDomain_);
            this.customDomain = url.origin;
            this.region = 'us-central1';
          } catch (e) {
            this.customDomain = null;
            this.region = regionOrCustomDomain_;
          }
        }

        Object.defineProperty(Service.prototype, "app", {
          get: function get() {
            return this.app_;
          },
          enumerable: false,
          configurable: true
        });
        /**
         * Returns the URL for a callable with the given name.
         * @param name The name of the callable.
         */

        Service.prototype._url = function (name) {
          var projectId = this.app_.options.projectId;

          if (this.emulatorOrigin !== null) {
            var origin_1 = this.emulatorOrigin;
            return origin_1 + "/" + projectId + "/" + this.region + "/" + name;
          }

          if (this.customDomain !== null) {
            return this.customDomain + "/" + name;
          }

          return "https://" + this.region + "-" + projectId + ".cloudfunctions.net/" + name;
        };
        /**
         * Changes this instance to point to a Cloud Functions emulator running
         * locally. See https://firebase.google.com/docs/functions/local-emulator
         *
         * @param origin The origin of the local emulator, such as
         * "http://localhost:5005".
         */


        Service.prototype.useFunctionsEmulator = function (origin) {
          this.emulatorOrigin = origin;
        };
        /**
         * Returns a reference to the callable https trigger with the given name.
         * @param name The name of the trigger.
         */


        Service.prototype.httpsCallable = function (name, options) {
          var _this = this;

          return function (data) {
            return _this.call(name, data, options || {});
          };
        };
        /**
         * Does an HTTP POST and returns the completed response.
         * @param url The url to post to.
         * @param body The JSON body of the post.
         * @param headers The HTTP headers to include in the request.
         * @return A Promise that will succeed when the request finishes.
         */


        Service.prototype.postJSON = function (url, body, headers) {
          return tslib.__awaiter(this, void 0, void 0, function () {
            var response, e_1, json, e_2;
            return tslib.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  headers['Content-Type'] = 'application/json';
                  _a.label = 1;

                case 1:
                  _a.trys.push([1, 3,, 4]);

                  return [4
                  /*yield*/
                  , this.fetchImpl(url, {
                    method: 'POST',
                    body: JSON.stringify(body),
                    headers: headers
                  })];

                case 2:
                  response = _a.sent();
                  return [3
                  /*break*/
                  , 4];

                case 3:
                  e_1 = _a.sent(); // This could be an unhandled error on the backend, or it could be a
                  // network error. There's no way to know, since an unhandled error on the
                  // backend will fail to set the proper CORS header, and thus will be
                  // treated as a network error by fetch.

                  return [2
                  /*return*/
                  , {
                    status: 0,
                    json: null
                  }];

                case 4:
                  json = null;
                  _a.label = 5;

                case 5:
                  _a.trys.push([5, 7,, 8]);

                  return [4
                  /*yield*/
                  , response.json()];

                case 6:
                  json = _a.sent();
                  return [3
                  /*break*/
                  , 8];

                case 7:
                  e_2 = _a.sent();
                  return [3
                  /*break*/
                  , 8];

                case 8:
                  return [2
                  /*return*/
                  , {
                    status: response.status,
                    json: json
                  }];
              }
            });
          });
        };
        /**
         * Calls a callable function asynchronously and returns the result.
         * @param name The name of the callable trigger.
         * @param data The data to pass as params to the function.s
         */


        Service.prototype.call = function (name, data, options) {
          return tslib.__awaiter(this, void 0, void 0, function () {
            var url, body, headers, context, timeout, _a, timer, failAfterPromise, response, error, responseData, decodedData;

            return tslib.__generator(this, function (_b) {
              switch (_b.label) {
                case 0:
                  url = this._url(name); // Encode any special types, such as dates, in the input data.

                  data = this.serializer.encode(data);
                  body = {
                    data: data
                  };
                  headers = {};
                  return [4
                  /*yield*/
                  , this.contextProvider.getContext()];

                case 1:
                  context = _b.sent();

                  if (context.authToken) {
                    headers['Authorization'] = 'Bearer ' + context.authToken;
                  }

                  if (context.instanceIdToken) {
                    headers['Firebase-Instance-ID-Token'] = context.instanceIdToken;
                  }

                  timeout = options.timeout || 70000;
                  _a = failAfter(timeout), timer = _a.timer, failAfterPromise = _a.promise;
                  return [4
                  /*yield*/
                  , Promise.race([clearTimeoutWrapper(timer, this.postJSON(url, body, headers)), failAfterPromise, clearTimeoutWrapper(timer, this.cancelAllRequests)])];

                case 2:
                  response = _b.sent(); // If service was deleted, interrupted response throws an error.

                  if (!response) {
                    throw new HttpsErrorImpl('cancelled', 'Firebase Functions instance was deleted.');
                  }

                  error = _errorForResponse(response.status, response.json, this.serializer);

                  if (error) {
                    throw error;
                  }

                  if (!response.json) {
                    throw new HttpsErrorImpl('internal', 'Response is not valid JSON object.');
                  }

                  responseData = response.json.data; // TODO(klimt): For right now, allow "result" instead of "data", for
                  // backwards compatibility.

                  if (typeof responseData === 'undefined') {
                    responseData = response.json.result;
                  }

                  if (typeof responseData === 'undefined') {
                    // Consider the response malformed.
                    throw new HttpsErrorImpl('internal', 'Response is missing data field.');
                  }

                  decodedData = this.serializer.decode(responseData);
                  return [2
                  /*return*/
                  , {
                    data: decodedData
                  }];
              }
            });
          });
        };

        return Service;
      }();

      function clearTimeoutWrapper(timer, promise) {
        return tslib.__awaiter(this, void 0, void 0, function () {
          var result;
          return tslib.__generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , promise];

              case 1:
                result = _a.sent(); // eslint-disable-next-line @typescript-eslint/no-explicit-any

                clearTimeout(timer);
                return [2
                /*return*/
                , result];
            }
          });
        });
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Type constant for Firebase Functions.
       */


      var FUNCTIONS_TYPE = 'functions';

      function registerFunctions(instance, fetchImpl) {
        var namespaceExports = {
          // no-inline
          Functions: Service
        };

        function factory(container, regionOrCustomDomain) {
          // Dependencies
          var app = container.getProvider('app').getImmediate();
          var authProvider = container.getProvider('auth-internal');
          var messagingProvider = container.getProvider('messaging'); // eslint-disable-next-line @typescript-eslint/no-explicit-any

          return new Service(app, authProvider, messagingProvider, regionOrCustomDomain, fetchImpl);
        }

        instance.INTERNAL.registerComponent(new component.Component(FUNCTIONS_TYPE, factory, "PUBLIC"
        /* PUBLIC */
        ).setServiceProps(namespaceExports).setMultipleInstances(true));
      }

      var name = "@firebase/functions";
      var version = "0.5.1";
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      registerFunctions(firebase__default['default'], fetch.bind(self));
      firebase__default['default'].registerVersion(name, version); //# sourceMappingURL=index.cjs.js.map

      /***/
    },

    /***/
    "./node_modules/@firebase/installations/dist/index.esm.js":
    /*!****************************************************************!*\
      !*** ./node_modules/@firebase/installations/dist/index.esm.js ***!
      \****************************************************************/

    /*! exports provided: registerInstallations */

    /***/
    function node_modulesFirebaseInstallationsDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerInstallations", function () {
        return registerInstallations;
      });
      /* harmony import */


      var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @firebase/app */
      "./node_modules/@firebase/app/dist/index.cjs.js");
      /* harmony import */


      var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _firebase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @firebase/component */
      "./node_modules/@firebase/component/dist/index.cjs.js");
      /* harmony import */


      var _firebase_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_firebase_component__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _firebase_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @firebase/util */
      "./node_modules/@firebase/util/dist/index.cjs.js");
      /* harmony import */


      var _firebase_util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_firebase_util__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var idb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! idb */
      "./node_modules/idb/build/idb.js");
      /* harmony import */


      var idb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(idb__WEBPACK_IMPORTED_MODULE_4__);

      var name = "@firebase/installations";
      var version = "0.4.17";
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var PENDING_TIMEOUT_MS = 10000;
      var PACKAGE_VERSION = "w:" + version;
      var INTERNAL_AUTH_VERSION = 'FIS_v2';
      var INSTALLATIONS_API_URL = 'https://firebaseinstallations.googleapis.com/v1';
      var TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1000; // One hour

      var SERVICE = 'installations';
      var SERVICE_NAME = 'Installations';
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var _a;

      var ERROR_DESCRIPTION_MAP = (_a = {}, _a["missing-app-config-values"
      /* MISSING_APP_CONFIG_VALUES */
      ] = 'Missing App configuration value: "{$valueName}"', _a["not-registered"
      /* NOT_REGISTERED */
      ] = 'Firebase Installation is not registered.', _a["installation-not-found"
      /* INSTALLATION_NOT_FOUND */
      ] = 'Firebase Installation not found.', _a["request-failed"
      /* REQUEST_FAILED */
      ] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"', _a["app-offline"
      /* APP_OFFLINE */
      ] = 'Could not process request. Application offline.', _a["delete-pending-registration"
      /* DELETE_PENDING_REGISTRATION */
      ] = "Can't delete installation while there is a pending registration request.", _a);
      var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_3__["ErrorFactory"](SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
      /** Returns true if error is a FirebaseError that is based on an error from the server. */

      function isServerError(error) {
        return error instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_3__["FirebaseError"] && error.code.includes("request-failed"
        /* REQUEST_FAILED */
        );
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function getInstallationsEndpoint(_a) {
        var projectId = _a.projectId;
        return INSTALLATIONS_API_URL + "/projects/" + projectId + "/installations";
      }

      function extractAuthTokenInfoFromResponse(response) {
        return {
          token: response.token,
          requestStatus: 2
          /* COMPLETED */
          ,
          expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
          creationTime: Date.now()
        };
      }

      function getErrorFromResponse(requestName, response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var responseJson, errorData;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , response.json()];

              case 1:
                responseJson = _a.sent();
                errorData = responseJson.error;
                return [2
                /*return*/
                , ERROR_FACTORY.create("request-failed"
                /* REQUEST_FAILED */
                , {
                  requestName: requestName,
                  serverCode: errorData.code,
                  serverMessage: errorData.message,
                  serverStatus: errorData.status
                })];
            }
          });
        });
      }

      function getHeaders(_a) {
        var apiKey = _a.apiKey;
        return new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'x-goog-api-key': apiKey
        });
      }

      function getHeadersWithAuth(appConfig, _a) {
        var refreshToken = _a.refreshToken;
        var headers = getHeaders(appConfig);
        headers.append('Authorization', getAuthorizationHeader(refreshToken));
        return headers;
      }
      /**
       * Calls the passed in fetch wrapper and returns the response.
       * If the returned response has a status of 5xx, re-runs the function once and
       * returns the response.
       */


      function retryIfServerError(fn) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var result;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , fn()];

              case 1:
                result = _a.sent();

                if (result.status >= 500 && result.status < 600) {
                  // Internal Server Error. Retry request.
                  return [2
                  /*return*/
                  , fn()];
                }

                return [2
                /*return*/
                , result];
            }
          });
        });
      }

      function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
        // This works because the server will never respond with fractions of a second.
        return Number(responseExpiresIn.replace('s', '000'));
      }

      function getAuthorizationHeader(refreshToken) {
        return INTERNAL_AUTH_VERSION + " " + refreshToken;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function createInstallationRequest(appConfig, _a) {
        var fid = _a.fid;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var endpoint, headers, body, request, response, responseValue, registeredInstallationEntry;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                endpoint = getInstallationsEndpoint(appConfig);
                headers = getHeaders(appConfig);
                body = {
                  fid: fid,
                  authVersion: INTERNAL_AUTH_VERSION,
                  appId: appConfig.appId,
                  sdkVersion: PACKAGE_VERSION
                };
                request = {
                  method: 'POST',
                  headers: headers,
                  body: JSON.stringify(body)
                };
                return [4
                /*yield*/
                , retryIfServerError(function () {
                  return fetch(endpoint, request);
                })];

              case 1:
                response = _b.sent();
                if (!response.ok) return [3
                /*break*/
                , 3];
                return [4
                /*yield*/
                , response.json()];

              case 2:
                responseValue = _b.sent();
                registeredInstallationEntry = {
                  fid: responseValue.fid || fid,
                  registrationStatus: 2
                  /* COMPLETED */
                  ,
                  refreshToken: responseValue.refreshToken,
                  authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
                };
                return [2
                /*return*/
                , registeredInstallationEntry];

              case 3:
                return [4
                /*yield*/
                , getErrorFromResponse('Create Installation', response)];

              case 4:
                throw _b.sent();
            }
          });
        });
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /** Returns a promise that resolves after given time passes. */


      function sleep(ms) {
        return new Promise(function (resolve) {
          setTimeout(resolve, ms);
        });
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function bufferToBase64UrlSafe(array) {
        var b64 = btoa(String.fromCharCode.apply(String, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(array)));
        return b64.replace(/\+/g, '-').replace(/\//g, '_');
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
      var INVALID_FID = '';
      /**
       * Generates a new FID using random values from Web Crypto API.
       * Returns an empty string if FID generation fails for any reason.
       */

      function generateFid() {
        try {
          // A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
          // bytes. our implementation generates a 17 byte array instead.
          var fidByteArray = new Uint8Array(17);
          var crypto_1 = self.crypto || self.msCrypto;
          crypto_1.getRandomValues(fidByteArray); // Replace the first 4 random bits with the constant FID header of 0b0111.

          fidByteArray[0] = 112 + fidByteArray[0] % 16;
          var fid = encode(fidByteArray);
          return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
        } catch (_a) {
          // FID generation errored
          return INVALID_FID;
        }
      }
      /** Converts a FID Uint8Array to a base64 string representation. */


      function encode(fidByteArray) {
        var b64String = bufferToBase64UrlSafe(fidByteArray); // Remove the 23rd character that was added because of the extra 4 bits at the
        // end of our 17 byte array, and the '=' padding.

        return b64String.substr(0, 22);
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /** Returns a string key that can be used to identify the app. */


      function getKey(appConfig) {
        return appConfig.appName + "!" + appConfig.appId;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var fidChangeCallbacks = new Map();
      /**
       * Calls the onIdChange callbacks with the new FID value, and broadcasts the
       * change to other tabs.
       */

      function fidChanged(appConfig, fid) {
        var key = getKey(appConfig);
        callFidChangeCallbacks(key, fid);
        broadcastFidChange(key, fid);
      }

      function addCallback(appConfig, callback) {
        // Open the broadcast channel if it's not already open,
        // to be able to listen to change events from other tabs.
        getBroadcastChannel();
        var key = getKey(appConfig);
        var callbackSet = fidChangeCallbacks.get(key);

        if (!callbackSet) {
          callbackSet = new Set();
          fidChangeCallbacks.set(key, callbackSet);
        }

        callbackSet.add(callback);
      }

      function removeCallback(appConfig, callback) {
        var key = getKey(appConfig);
        var callbackSet = fidChangeCallbacks.get(key);

        if (!callbackSet) {
          return;
        }

        callbackSet["delete"](callback);

        if (callbackSet.size === 0) {
          fidChangeCallbacks["delete"](key);
        } // Close broadcast channel if there are no more callbacks.


        closeBroadcastChannel();
      }

      function callFidChangeCallbacks(key, fid) {
        var e_1, _a;

        var callbacks = fidChangeCallbacks.get(key);

        if (!callbacks) {
          return;
        }

        try {
          for (var callbacks_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__values"])(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
            var callback = callbacks_1_1.value;
            callback(fid);
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (callbacks_1_1 && !callbacks_1_1.done && (_a = callbacks_1["return"])) _a.call(callbacks_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }

      function broadcastFidChange(key, fid) {
        var channel = getBroadcastChannel();

        if (channel) {
          channel.postMessage({
            key: key,
            fid: fid
          });
        }

        closeBroadcastChannel();
      }

      var broadcastChannel = null;
      /** Opens and returns a BroadcastChannel if it is supported by the browser. */

      function getBroadcastChannel() {
        if (!broadcastChannel && 'BroadcastChannel' in self) {
          broadcastChannel = new BroadcastChannel('[Firebase] FID Change');

          broadcastChannel.onmessage = function (e) {
            callFidChangeCallbacks(e.data.key, e.data.fid);
          };
        }

        return broadcastChannel;
      }

      function closeBroadcastChannel() {
        if (fidChangeCallbacks.size === 0 && broadcastChannel) {
          broadcastChannel.close();
          broadcastChannel = null;
        }
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var DATABASE_NAME = 'firebase-installations-database';
      var DATABASE_VERSION = 1;
      var OBJECT_STORE_NAME = 'firebase-installations-store';
      var dbPromise = null;

      function getDbPromise() {
        if (!dbPromise) {
          dbPromise = Object(idb__WEBPACK_IMPORTED_MODULE_4__["openDb"])(DATABASE_NAME, DATABASE_VERSION, function (upgradeDB) {
            // We don't use 'break' in this switch statement, the fall-through
            // behavior is what we want, because if there are multiple versions between
            // the old version and the current version, we want ALL the migrations
            // that correspond to those versions to run, not only the last one.
            // eslint-disable-next-line default-case
            switch (upgradeDB.oldVersion) {
              case 0:
                upgradeDB.createObjectStore(OBJECT_STORE_NAME);
            }
          });
        }

        return dbPromise;
      }
      /** Assigns or overwrites the record for the given key with the given value. */


      function set(appConfig, value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var key, db, tx, objectStore, oldValue;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                key = getKey(appConfig);
                return [4
                /*yield*/
                , getDbPromise()];

              case 1:
                db = _a.sent();
                tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                objectStore = tx.objectStore(OBJECT_STORE_NAME);
                return [4
                /*yield*/
                , objectStore.get(key)];

              case 2:
                oldValue = _a.sent();
                return [4
                /*yield*/
                , objectStore.put(value, key)];

              case 3:
                _a.sent();

                return [4
                /*yield*/
                , tx.complete];

              case 4:
                _a.sent();

                if (!oldValue || oldValue.fid !== value.fid) {
                  fidChanged(appConfig, value.fid);
                }

                return [2
                /*return*/
                , value];
            }
          });
        });
      }
      /** Removes record(s) from the objectStore that match the given key. */


      function remove(appConfig) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var key, db, tx;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                key = getKey(appConfig);
                return [4
                /*yield*/
                , getDbPromise()];

              case 1:
                db = _a.sent();
                tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                return [4
                /*yield*/
                , tx.objectStore(OBJECT_STORE_NAME)["delete"](key)];

              case 2:
                _a.sent();

                return [4
                /*yield*/
                , tx.complete];

              case 3:
                _a.sent();

                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Atomically updates a record with the result of updateFn, which gets
       * called with the current value. If newValue is undefined, the record is
       * deleted instead.
       * @return Updated value
       */


      function update(appConfig, updateFn) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var key, db, tx, store, oldValue, newValue;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                key = getKey(appConfig);
                return [4
                /*yield*/
                , getDbPromise()];

              case 1:
                db = _a.sent();
                tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                store = tx.objectStore(OBJECT_STORE_NAME);
                return [4
                /*yield*/
                , store.get(key)];

              case 2:
                oldValue = _a.sent();
                newValue = updateFn(oldValue);
                if (!(newValue === undefined)) return [3
                /*break*/
                , 4];
                return [4
                /*yield*/
                , store["delete"](key)];

              case 3:
                _a.sent();

                return [3
                /*break*/
                , 6];

              case 4:
                return [4
                /*yield*/
                , store.put(newValue, key)];

              case 5:
                _a.sent();

                _a.label = 6;

              case 6:
                return [4
                /*yield*/
                , tx.complete];

              case 7:
                _a.sent();

                if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
                  fidChanged(appConfig, newValue.fid);
                }

                return [2
                /*return*/
                , newValue];
            }
          });
        });
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Updates and returns the InstallationEntry from the database.
       * Also triggers a registration request if it is necessary and possible.
       */


      function getInstallationEntry(appConfig) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var registrationPromise, installationEntry;

          var _a;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                return [4
                /*yield*/
                , update(appConfig, function (oldEntry) {
                  var installationEntry = updateOrCreateInstallationEntry(oldEntry);
                  var entryWithPromise = triggerRegistrationIfNecessary(appConfig, installationEntry);
                  registrationPromise = entryWithPromise.registrationPromise;
                  return entryWithPromise.installationEntry;
                })];

              case 1:
                installationEntry = _b.sent();
                if (!(installationEntry.fid === INVALID_FID)) return [3
                /*break*/
                , 3];
                _a = {};
                return [4
                /*yield*/
                , registrationPromise];

              case 2:
                // FID generation failed. Waiting for the FID from the server.
                return [2
                /*return*/
                , (_a.installationEntry = _b.sent(), _a)];

              case 3:
                return [2
                /*return*/
                , {
                  installationEntry: installationEntry,
                  registrationPromise: registrationPromise
                }];
            }
          });
        });
      }
      /**
       * Creates a new Installation Entry if one does not exist.
       * Also clears timed out pending requests.
       */


      function updateOrCreateInstallationEntry(oldEntry) {
        var entry = oldEntry || {
          fid: generateFid(),
          registrationStatus: 0
          /* NOT_STARTED */

        };
        return clearTimedOutRequest(entry);
      }
      /**
       * If the Firebase Installation is not registered yet, this will trigger the
       * registration and return an InProgressInstallationEntry.
       *
       * If registrationPromise does not exist, the installationEntry is guaranteed
       * to be registered.
       */


      function triggerRegistrationIfNecessary(appConfig, installationEntry) {
        if (installationEntry.registrationStatus === 0
        /* NOT_STARTED */
        ) {
            if (!navigator.onLine) {
              // Registration required but app is offline.
              var registrationPromiseWithError = Promise.reject(ERROR_FACTORY.create("app-offline"
              /* APP_OFFLINE */
              ));
              return {
                installationEntry: installationEntry,
                registrationPromise: registrationPromiseWithError
              };
            } // Try registering. Change status to IN_PROGRESS.


            var inProgressEntry = {
              fid: installationEntry.fid,
              registrationStatus: 1
              /* IN_PROGRESS */
              ,
              registrationTime: Date.now()
            };
            var registrationPromise = registerInstallation(appConfig, inProgressEntry);
            return {
              installationEntry: inProgressEntry,
              registrationPromise: registrationPromise
            };
          } else if (installationEntry.registrationStatus === 1
        /* IN_PROGRESS */
        ) {
            return {
              installationEntry: installationEntry,
              registrationPromise: waitUntilFidRegistration(appConfig)
            };
          } else {
          return {
            installationEntry: installationEntry
          };
        }
      }
      /** This will be executed only once for each new Firebase Installation. */


      function registerInstallation(appConfig, installationEntry) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var registeredInstallationEntry, e_1;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                _a.trys.push([0, 2,, 7]);

                return [4
                /*yield*/
                , createInstallationRequest(appConfig, installationEntry)];

              case 1:
                registeredInstallationEntry = _a.sent();
                return [2
                /*return*/
                , set(appConfig, registeredInstallationEntry)];

              case 2:
                e_1 = _a.sent();
                if (!(isServerError(e_1) && e_1.serverCode === 409)) return [3
                /*break*/
                , 4]; // Server returned a "FID can not be used" error.
                // Generate a new ID next time.

                return [4
                /*yield*/
                , remove(appConfig)];

              case 3:
                // Server returned a "FID can not be used" error.
                // Generate a new ID next time.
                _a.sent();

                return [3
                /*break*/
                , 6];

              case 4:
                // Registration failed. Set FID as not registered.
                return [4
                /*yield*/
                , set(appConfig, {
                  fid: installationEntry.fid,
                  registrationStatus: 0
                  /* NOT_STARTED */

                })];

              case 5:
                // Registration failed. Set FID as not registered.
                _a.sent();

                _a.label = 6;

              case 6:
                throw e_1;

              case 7:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /** Call if FID registration is pending in another request. */


      function waitUntilFidRegistration(appConfig) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var entry, _a, installationEntry, registrationPromise;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                return [4
                /*yield*/
                , updateInstallationRequest(appConfig)];

              case 1:
                entry = _b.sent();
                _b.label = 2;

              case 2:
                if (!(entry.registrationStatus === 1
                /* IN_PROGRESS */
                )) return [3
                  /*break*/
                  , 5]; // createInstallation request still in progress.

                return [4
                /*yield*/
                , sleep(100)];

              case 3:
                // createInstallation request still in progress.
                _b.sent();

                return [4
                /*yield*/
                , updateInstallationRequest(appConfig)];

              case 4:
                entry = _b.sent();
                return [3
                /*break*/
                , 2];

              case 5:
                if (!(entry.registrationStatus === 0
                /* NOT_STARTED */
                )) return [3
                  /*break*/
                  , 7];
                return [4
                /*yield*/
                , getInstallationEntry(appConfig)];

              case 6:
                _a = _b.sent(), installationEntry = _a.installationEntry, registrationPromise = _a.registrationPromise;

                if (registrationPromise) {
                  return [2
                  /*return*/
                  , registrationPromise];
                } else {
                  // if there is no registrationPromise, entry is registered.
                  return [2
                  /*return*/
                  , installationEntry];
                }

              case 7:
                return [2
                /*return*/
                , entry];
            }
          });
        });
      }
      /**
       * Called only if there is a CreateInstallation request in progress.
       *
       * Updates the InstallationEntry in the DB based on the status of the
       * CreateInstallation request.
       *
       * Returns the updated InstallationEntry.
       */


      function updateInstallationRequest(appConfig) {
        return update(appConfig, function (oldEntry) {
          if (!oldEntry) {
            throw ERROR_FACTORY.create("installation-not-found"
            /* INSTALLATION_NOT_FOUND */
            );
          }

          return clearTimedOutRequest(oldEntry);
        });
      }

      function clearTimedOutRequest(entry) {
        if (hasInstallationRequestTimedOut(entry)) {
          return {
            fid: entry.fid,
            registrationStatus: 0
            /* NOT_STARTED */

          };
        }

        return entry;
      }

      function hasInstallationRequestTimedOut(installationEntry) {
        return installationEntry.registrationStatus === 1
        /* IN_PROGRESS */
        && installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now();
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function generateAuthTokenRequest(_a, installationEntry) {
        var appConfig = _a.appConfig,
            platformLoggerProvider = _a.platformLoggerProvider;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var endpoint, headers, platformLogger, body, request, response, responseValue, completedAuthToken;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
                headers = getHeadersWithAuth(appConfig, installationEntry);
                platformLogger = platformLoggerProvider.getImmediate({
                  optional: true
                });

                if (platformLogger) {
                  headers.append('x-firebase-client', platformLogger.getPlatformInfoString());
                }

                body = {
                  installation: {
                    sdkVersion: PACKAGE_VERSION
                  }
                };
                request = {
                  method: 'POST',
                  headers: headers,
                  body: JSON.stringify(body)
                };
                return [4
                /*yield*/
                , retryIfServerError(function () {
                  return fetch(endpoint, request);
                })];

              case 1:
                response = _b.sent();
                if (!response.ok) return [3
                /*break*/
                , 3];
                return [4
                /*yield*/
                , response.json()];

              case 2:
                responseValue = _b.sent();
                completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
                return [2
                /*return*/
                , completedAuthToken];

              case 3:
                return [4
                /*yield*/
                , getErrorFromResponse('Generate Auth Token', response)];

              case 4:
                throw _b.sent();
            }
          });
        });
      }

      function getGenerateAuthTokenEndpoint(appConfig, _a) {
        var fid = _a.fid;
        return getInstallationsEndpoint(appConfig) + "/" + fid + "/authTokens:generate";
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Returns a valid authentication token for the installation. Generates a new
       * token if one doesn't exist, is expired or about to expire.
       *
       * Should only be called if the Firebase Installation is registered.
       */


      function refreshAuthToken(dependencies, forceRefresh) {
        if (forceRefresh === void 0) {
          forceRefresh = false;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var tokenPromise, entry, authToken, _a;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                return [4
                /*yield*/
                , update(dependencies.appConfig, function (oldEntry) {
                  if (!isEntryRegistered(oldEntry)) {
                    throw ERROR_FACTORY.create("not-registered"
                    /* NOT_REGISTERED */
                    );
                  }

                  var oldAuthToken = oldEntry.authToken;

                  if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
                    // There is a valid token in the DB.
                    return oldEntry;
                  } else if (oldAuthToken.requestStatus === 1
                  /* IN_PROGRESS */
                  ) {
                      // There already is a token request in progress.
                      tokenPromise = waitUntilAuthTokenRequest(dependencies, forceRefresh);
                      return oldEntry;
                    } else {
                    // No token or token expired.
                    if (!navigator.onLine) {
                      throw ERROR_FACTORY.create("app-offline"
                      /* APP_OFFLINE */
                      );
                    }

                    var inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
                    tokenPromise = fetchAuthTokenFromServer(dependencies, inProgressEntry);
                    return inProgressEntry;
                  }
                })];

              case 1:
                entry = _b.sent();
                if (!tokenPromise) return [3
                /*break*/
                , 3];
                return [4
                /*yield*/
                , tokenPromise];

              case 2:
                _a = _b.sent();
                return [3
                /*break*/
                , 4];

              case 3:
                _a = entry.authToken;
                _b.label = 4;

              case 4:
                authToken = _a;
                return [2
                /*return*/
                , authToken];
            }
          });
        });
      }
      /**
       * Call only if FID is registered and Auth Token request is in progress.
       *
       * Waits until the current pending request finishes. If the request times out,
       * tries once in this thread as well.
       */


      function waitUntilAuthTokenRequest(dependencies, forceRefresh) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var entry, authToken;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , updateAuthTokenRequest(dependencies.appConfig)];

              case 1:
                entry = _a.sent();
                _a.label = 2;

              case 2:
                if (!(entry.authToken.requestStatus === 1
                /* IN_PROGRESS */
                )) return [3
                  /*break*/
                  , 5]; // generateAuthToken still in progress.

                return [4
                /*yield*/
                , sleep(100)];

              case 3:
                // generateAuthToken still in progress.
                _a.sent();

                return [4
                /*yield*/
                , updateAuthTokenRequest(dependencies.appConfig)];

              case 4:
                entry = _a.sent();
                return [3
                /*break*/
                , 2];

              case 5:
                authToken = entry.authToken;

                if (authToken.requestStatus === 0
                /* NOT_STARTED */
                ) {
                    // The request timed out or failed in a different call. Try again.
                    return [2
                    /*return*/
                    , refreshAuthToken(dependencies, forceRefresh)];
                  } else {
                  return [2
                  /*return*/
                  , authToken];
                }

            }
          });
        });
      }
      /**
       * Called only if there is a GenerateAuthToken request in progress.
       *
       * Updates the InstallationEntry in the DB based on the status of the
       * GenerateAuthToken request.
       *
       * Returns the updated InstallationEntry.
       */


      function updateAuthTokenRequest(appConfig) {
        return update(appConfig, function (oldEntry) {
          if (!isEntryRegistered(oldEntry)) {
            throw ERROR_FACTORY.create("not-registered"
            /* NOT_REGISTERED */
            );
          }

          var oldAuthToken = oldEntry.authToken;

          if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, oldEntry), {
              authToken: {
                requestStatus: 0
                /* NOT_STARTED */

              }
            });
          }

          return oldEntry;
        });
      }

      function fetchAuthTokenFromServer(dependencies, installationEntry) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var authToken, updatedInstallationEntry, e_1, updatedInstallationEntry;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                _a.trys.push([0, 3,, 8]);

                return [4
                /*yield*/
                , generateAuthTokenRequest(dependencies, installationEntry)];

              case 1:
                authToken = _a.sent();
                updatedInstallationEntry = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, installationEntry), {
                  authToken: authToken
                });
                return [4
                /*yield*/
                , set(dependencies.appConfig, updatedInstallationEntry)];

              case 2:
                _a.sent();

                return [2
                /*return*/
                , authToken];

              case 3:
                e_1 = _a.sent();
                if (!(isServerError(e_1) && (e_1.serverCode === 401 || e_1.serverCode === 404))) return [3
                /*break*/
                , 5]; // Server returned a "FID not found" or a "Invalid authentication" error.
                // Generate a new ID next time.

                return [4
                /*yield*/
                , remove(dependencies.appConfig)];

              case 4:
                // Server returned a "FID not found" or a "Invalid authentication" error.
                // Generate a new ID next time.
                _a.sent();

                return [3
                /*break*/
                , 7];

              case 5:
                updatedInstallationEntry = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, installationEntry), {
                  authToken: {
                    requestStatus: 0
                    /* NOT_STARTED */

                  }
                });
                return [4
                /*yield*/
                , set(dependencies.appConfig, updatedInstallationEntry)];

              case 6:
                _a.sent();

                _a.label = 7;

              case 7:
                throw e_1;

              case 8:
                return [2
                /*return*/
                ];
            }
          });
        });
      }

      function isEntryRegistered(installationEntry) {
        return installationEntry !== undefined && installationEntry.registrationStatus === 2
        /* COMPLETED */
        ;
      }

      function isAuthTokenValid(authToken) {
        return authToken.requestStatus === 2
        /* COMPLETED */
        && !isAuthTokenExpired(authToken);
      }

      function isAuthTokenExpired(authToken) {
        var now = Date.now();
        return now < authToken.creationTime || authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER;
      }
      /** Returns an updated InstallationEntry with an InProgressAuthToken. */


      function makeAuthTokenRequestInProgressEntry(oldEntry) {
        var inProgressAuthToken = {
          requestStatus: 1
          /* IN_PROGRESS */
          ,
          requestTime: Date.now()
        };
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, oldEntry), {
          authToken: inProgressAuthToken
        });
      }

      function hasAuthTokenRequestTimedOut(authToken) {
        return authToken.requestStatus === 1
        /* IN_PROGRESS */
        && authToken.requestTime + PENDING_TIMEOUT_MS < Date.now();
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function _getId(dependencies) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var _a, installationEntry, registrationPromise;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                return [4
                /*yield*/
                , getInstallationEntry(dependencies.appConfig)];

              case 1:
                _a = _b.sent(), installationEntry = _a.installationEntry, registrationPromise = _a.registrationPromise;

                if (registrationPromise) {
                  registrationPromise["catch"](console.error);
                } else {
                  // If the installation is already registered, update the authentication
                  // token if needed.
                  refreshAuthToken(dependencies)["catch"](console.error);
                }

                return [2
                /*return*/
                , installationEntry.fid];
            }
          });
        });
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function _getToken(dependencies, forceRefresh) {
        if (forceRefresh === void 0) {
          forceRefresh = false;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var authToken;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , completeInstallationRegistration(dependencies.appConfig)];

              case 1:
                _a.sent();

                return [4
                /*yield*/
                , refreshAuthToken(dependencies, forceRefresh)];

              case 2:
                authToken = _a.sent();
                return [2
                /*return*/
                , authToken.token];
            }
          });
        });
      }

      function completeInstallationRegistration(appConfig) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var registrationPromise;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , getInstallationEntry(appConfig)];

              case 1:
                registrationPromise = _a.sent().registrationPromise;
                if (!registrationPromise) return [3
                /*break*/
                , 3]; // A createInstallation request is in progress. Wait until it finishes.

                return [4
                /*yield*/
                , registrationPromise];

              case 2:
                // A createInstallation request is in progress. Wait until it finishes.
                _a.sent();

                _a.label = 3;

              case 3:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function deleteInstallationRequest(appConfig, installationEntry) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var endpoint, headers, request, response;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                endpoint = getDeleteEndpoint(appConfig, installationEntry);
                headers = getHeadersWithAuth(appConfig, installationEntry);
                request = {
                  method: 'DELETE',
                  headers: headers
                };
                return [4
                /*yield*/
                , retryIfServerError(function () {
                  return fetch(endpoint, request);
                })];

              case 1:
                response = _a.sent();
                if (!!response.ok) return [3
                /*break*/
                , 3];
                return [4
                /*yield*/
                , getErrorFromResponse('Delete Installation', response)];

              case 2:
                throw _a.sent();

              case 3:
                return [2
                /*return*/
                ];
            }
          });
        });
      }

      function getDeleteEndpoint(appConfig, _a) {
        var fid = _a.fid;
        return getInstallationsEndpoint(appConfig) + "/" + fid;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function deleteInstallation(dependencies) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var appConfig, entry;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                appConfig = dependencies.appConfig;
                return [4
                /*yield*/
                , update(appConfig, function (oldEntry) {
                  if (oldEntry && oldEntry.registrationStatus === 0
                  /* NOT_STARTED */
                  ) {
                      // Delete the unregistered entry without sending a deleteInstallation request.
                      return undefined;
                    }

                  return oldEntry;
                })];

              case 1:
                entry = _a.sent();
                if (!entry) return [3
                /*break*/
                , 6];
                if (!(entry.registrationStatus === 1
                /* IN_PROGRESS */
                )) return [3
                  /*break*/
                  , 2]; // Can't delete while trying to register.

                throw ERROR_FACTORY.create("delete-pending-registration"
                /* DELETE_PENDING_REGISTRATION */
                );

              case 2:
                if (!(entry.registrationStatus === 2
                /* COMPLETED */
                )) return [3
                  /*break*/
                  , 6];
                if (!!navigator.onLine) return [3
                /*break*/
                , 3];
                throw ERROR_FACTORY.create("app-offline"
                /* APP_OFFLINE */
                );

              case 3:
                return [4
                /*yield*/
                , deleteInstallationRequest(appConfig, entry)];

              case 4:
                _a.sent();

                return [4
                /*yield*/
                , remove(appConfig)];

              case 5:
                _a.sent();

                _a.label = 6;

              case 6:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Sets a new callback that will get called when Installation ID changes.
       * Returns an unsubscribe function that will remove the callback when called.
       */


      function _onIdChange(_a, callback) {
        var appConfig = _a.appConfig;
        addCallback(appConfig, callback);
        return function () {
          removeCallback(appConfig, callback);
        };
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function extractAppConfig(app) {
        var e_1, _a;

        if (!app || !app.options) {
          throw getMissingValueError('App Configuration');
        }

        if (!app.name) {
          throw getMissingValueError('App Name');
        } // Required app config keys


        var configKeys = ['projectId', 'apiKey', 'appId'];

        try {
          for (var configKeys_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__values"])(configKeys), configKeys_1_1 = configKeys_1.next(); !configKeys_1_1.done; configKeys_1_1 = configKeys_1.next()) {
            var keyName = configKeys_1_1.value;

            if (!app.options[keyName]) {
              throw getMissingValueError(keyName);
            }
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (configKeys_1_1 && !configKeys_1_1.done && (_a = configKeys_1["return"])) _a.call(configKeys_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }

        return {
          appName: app.name,
          projectId: app.options.projectId,
          apiKey: app.options.apiKey,
          appId: app.options.appId
        };
      }

      function getMissingValueError(valueName) {
        return ERROR_FACTORY.create("missing-app-config-values"
        /* MISSING_APP_CONFIG_VALUES */
        , {
          valueName: valueName
        });
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function registerInstallations(instance) {
        var installationsName = 'installations';
        instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__["Component"](installationsName, function (container) {
          var app = container.getProvider('app').getImmediate(); // Throws if app isn't configured properly.

          var appConfig = extractAppConfig(app);
          var platformLoggerProvider = container.getProvider('platform-logger');
          var dependencies = {
            appConfig: appConfig,
            platformLoggerProvider: platformLoggerProvider
          };
          var installations = {
            app: app,
            getId: function getId() {
              return _getId(dependencies);
            },
            getToken: function getToken(forceRefresh) {
              return _getToken(dependencies, forceRefresh);
            },
            "delete": function _delete() {
              return deleteInstallation(dependencies);
            },
            onIdChange: function onIdChange(callback) {
              return _onIdChange(dependencies, callback);
            }
          };
          return installations;
        }, "PUBLIC"
        /* PUBLIC */
        ));
        instance.registerVersion(name, version);
      }

      registerInstallations(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceMappingURL=index.esm.js.map

      /***/
    },

    /***/
    "./node_modules/@firebase/messaging/dist/index.esm.js":
    /*!************************************************************!*\
      !*** ./node_modules/@firebase/messaging/dist/index.esm.js ***!
      \************************************************************/

    /*! no exports provided */

    /***/
    function node_modulesFirebaseMessagingDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _firebase_installations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @firebase/installations */
      "./node_modules/@firebase/installations/dist/index.esm.js");
      /* harmony import */


      var _firebase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @firebase/component */
      "./node_modules/@firebase/component/dist/index.cjs.js");
      /* harmony import */


      var _firebase_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_firebase_component__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @firebase/util */
      "./node_modules/@firebase/util/dist/index.cjs.js");
      /* harmony import */


      var _firebase_util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_firebase_util__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var idb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! idb */
      "./node_modules/idb/build/idb.js");
      /* harmony import */


      var idb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(idb__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @firebase/app */
      "./node_modules/@firebase/app/dist/index.cjs.js");
      /* harmony import */


      var _firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_5__);
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var _a;

      var ERROR_MAP = (_a = {}, _a["missing-app-config-values"
      /* MISSING_APP_CONFIG_VALUES */
      ] = 'Missing App configuration value: "{$valueName}"', _a["only-available-in-window"
      /* AVAILABLE_IN_WINDOW */
      ] = 'This method is available in a Window context.', _a["only-available-in-sw"
      /* AVAILABLE_IN_SW */
      ] = 'This method is available in a service worker context.', _a["permission-default"
      /* PERMISSION_DEFAULT */
      ] = 'The notification permission was not granted and dismissed instead.', _a["permission-blocked"
      /* PERMISSION_BLOCKED */
      ] = 'The notification permission was not granted and blocked instead.', _a["unsupported-browser"
      /* UNSUPPORTED_BROWSER */
      ] = "This browser doesn't support the API's required to use the firebase SDK.", _a["failed-service-worker-registration"
      /* FAILED_DEFAULT_REGISTRATION */
      ] = 'We are unable to register the default service worker. {$browserErrorMessage}', _a["token-subscribe-failed"
      /* TOKEN_SUBSCRIBE_FAILED */
      ] = 'A problem occurred while subscribing the user to FCM: {$errorInfo}', _a["token-subscribe-no-token"
      /* TOKEN_SUBSCRIBE_NO_TOKEN */
      ] = 'FCM returned no token when subscribing the user to push.', _a["token-unsubscribe-failed"
      /* TOKEN_UNSUBSCRIBE_FAILED */
      ] = 'A problem occurred while unsubscribing the ' + 'user from FCM: {$errorInfo}', _a["token-update-failed"
      /* TOKEN_UPDATE_FAILED */
      ] = 'A problem occurred while updating the user from FCM: {$errorInfo}', _a["token-update-no-token"
      /* TOKEN_UPDATE_NO_TOKEN */
      ] = 'FCM returned no token when updating the user to push.', _a["use-sw-after-get-token"
      /* USE_SW_AFTER_GET_TOKEN */
      ] = 'The useServiceWorker() method may only be called once and must be ' + 'called before calling getToken() to ensure your service worker is used.', _a["invalid-sw-registration"
      /* INVALID_SW_REGISTRATION */
      ] = 'The input to useServiceWorker() must be a ServiceWorkerRegistration.', _a["invalid-bg-handler"
      /* INVALID_BG_HANDLER */
      ] = 'The input to setBackgroundMessageHandler() must be a function.', _a["invalid-vapid-key"
      /* INVALID_VAPID_KEY */
      ] = 'The public VAPID key must be a string.', _a["use-vapid-key-after-get-token"
      /* USE_VAPID_KEY_AFTER_GET_TOKEN */
      ] = 'The usePublicVapidKey() method may only be called once and must be ' + 'called before calling getToken() to ensure your VAPID key is used.', _a);
      var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__["ErrorFactory"]('messaging', 'Messaging', ERROR_MAP);
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var DEFAULT_SW_PATH = '/firebase-messaging-sw.js';
      var DEFAULT_SW_SCOPE = '/firebase-cloud-messaging-push-scope';
      var DEFAULT_VAPID_KEY = 'BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4';
      var ENDPOINT = 'https://fcmregistrations.googleapis.com/v1';
      /** Key of FCM Payload in Notification's data field. */

      var FCM_MSG = 'FCM_MSG';
      var CONSOLE_CAMPAIGN_ID = 'google.c.a.c_id';
      var CONSOLE_CAMPAIGN_NAME = 'google.c.a.c_l';
      var CONSOLE_CAMPAIGN_TIME = 'google.c.a.ts';
      /** Set to '1' if Analytics is enabled for the campaign */

      var CONSOLE_CAMPAIGN_ANALYTICS_ENABLED = 'google.c.a.e';
      var TAG = 'FirebaseMessaging: ';
      /**
       * @license
       * Copyright 2018 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
       * in compliance with the License. You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software distributed under the License
       * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
       * or implied. See the License for the specific language governing permissions and limitations under
       * the License.
       */

      var MessageType;

      (function (MessageType) {
        MessageType["PUSH_RECEIVED"] = "push-received";
        MessageType["NOTIFICATION_CLICKED"] = "notification-clicked";
      })(MessageType || (MessageType = {}));
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function arrayToBase64(array) {
        var uint8Array = new Uint8Array(array);
        var base64String = btoa(String.fromCharCode.apply(String, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spread"])(uint8Array)));
        return base64String.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
      }

      function base64ToArray(base64String) {
        var padding = '='.repeat((4 - base64String.length % 4) % 4);
        var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
        var rawData = atob(base64);
        var outputArray = new Uint8Array(rawData.length);

        for (var i = 0; i < rawData.length; ++i) {
          outputArray[i] = rawData.charCodeAt(i);
        }

        return outputArray;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var OLD_DB_NAME = 'fcm_token_details_db';
      /**
       * The last DB version of 'fcm_token_details_db' was 4. This is one higher, so that the upgrade
       * callback is called for all versions of the old DB.
       */

      var OLD_DB_VERSION = 5;
      var OLD_OBJECT_STORE_NAME = 'fcm_token_object_Store';

      function migrateOldDatabase(senderId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var databases, dbNames, tokenDetails, db;

          var _this = this;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (!('databases' in indexedDB)) return [3
                /*break*/
                , 2];
                return [4
                /*yield*/
                , indexedDB.databases()];

              case 1:
                databases = _a.sent();
                dbNames = databases.map(function (db) {
                  return db.name;
                });

                if (!dbNames.includes(OLD_DB_NAME)) {
                  // old DB didn't exist, no need to open.
                  return [2
                  /*return*/
                  , null];
                }

                _a.label = 2;

              case 2:
                tokenDetails = null;
                return [4
                /*yield*/
                , Object(idb__WEBPACK_IMPORTED_MODULE_4__["openDb"])(OLD_DB_NAME, OLD_DB_VERSION, function (db) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(_this, void 0, void 0, function () {
                    var objectStore, value, oldDetails, oldDetails, oldDetails;

                    var _a;

                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_b) {
                      switch (_b.label) {
                        case 0:
                          if (db.oldVersion < 2) {
                            // Database too old, skip migration.
                            return [2
                            /*return*/
                            ];
                          }

                          if (!db.objectStoreNames.contains(OLD_OBJECT_STORE_NAME)) {
                            // Database did not exist. Nothing to do.
                            return [2
                            /*return*/
                            ];
                          }

                          objectStore = db.transaction.objectStore(OLD_OBJECT_STORE_NAME);
                          return [4
                          /*yield*/
                          , objectStore.index('fcmSenderId').get(senderId)];

                        case 1:
                          value = _b.sent();
                          return [4
                          /*yield*/
                          , objectStore.clear()];

                        case 2:
                          _b.sent();

                          if (!value) {
                            // No entry in the database, nothing to migrate.
                            return [2
                            /*return*/
                            ];
                          }

                          if (db.oldVersion === 2) {
                            oldDetails = value;

                            if (!oldDetails.auth || !oldDetails.p256dh || !oldDetails.endpoint) {
                              return [2
                              /*return*/
                              ];
                            }

                            tokenDetails = {
                              token: oldDetails.fcmToken,
                              createTime: (_a = oldDetails.createTime) !== null && _a !== void 0 ? _a : Date.now(),
                              subscriptionOptions: {
                                auth: oldDetails.auth,
                                p256dh: oldDetails.p256dh,
                                endpoint: oldDetails.endpoint,
                                swScope: oldDetails.swScope,
                                vapidKey: typeof oldDetails.vapidKey === 'string' ? oldDetails.vapidKey : arrayToBase64(oldDetails.vapidKey)
                              }
                            };
                          } else if (db.oldVersion === 3) {
                            oldDetails = value;
                            tokenDetails = {
                              token: oldDetails.fcmToken,
                              createTime: oldDetails.createTime,
                              subscriptionOptions: {
                                auth: arrayToBase64(oldDetails.auth),
                                p256dh: arrayToBase64(oldDetails.p256dh),
                                endpoint: oldDetails.endpoint,
                                swScope: oldDetails.swScope,
                                vapidKey: arrayToBase64(oldDetails.vapidKey)
                              }
                            };
                          } else if (db.oldVersion === 4) {
                            oldDetails = value;
                            tokenDetails = {
                              token: oldDetails.fcmToken,
                              createTime: oldDetails.createTime,
                              subscriptionOptions: {
                                auth: arrayToBase64(oldDetails.auth),
                                p256dh: arrayToBase64(oldDetails.p256dh),
                                endpoint: oldDetails.endpoint,
                                swScope: oldDetails.swScope,
                                vapidKey: arrayToBase64(oldDetails.vapidKey)
                              }
                            };
                          }

                          return [2
                          /*return*/
                          ];
                      }
                    });
                  });
                })];

              case 3:
                db = _a.sent();
                db.close(); // Delete all old databases.

                return [4
                /*yield*/
                , Object(idb__WEBPACK_IMPORTED_MODULE_4__["deleteDb"])(OLD_DB_NAME)];

              case 4:
                // Delete all old databases.
                _a.sent();

                return [4
                /*yield*/
                , Object(idb__WEBPACK_IMPORTED_MODULE_4__["deleteDb"])('fcm_vapid_details_db')];

              case 5:
                _a.sent();

                return [4
                /*yield*/
                , Object(idb__WEBPACK_IMPORTED_MODULE_4__["deleteDb"])('undefined')];

              case 6:
                _a.sent();

                return [2
                /*return*/
                , checkTokenDetails(tokenDetails) ? tokenDetails : null];
            }
          });
        });
      }

      function checkTokenDetails(tokenDetails) {
        if (!tokenDetails || !tokenDetails.subscriptionOptions) {
          return false;
        }

        var subscriptionOptions = tokenDetails.subscriptionOptions;
        return typeof tokenDetails.createTime === 'number' && tokenDetails.createTime > 0 && typeof tokenDetails.token === 'string' && tokenDetails.token.length > 0 && typeof subscriptionOptions.auth === 'string' && subscriptionOptions.auth.length > 0 && typeof subscriptionOptions.p256dh === 'string' && subscriptionOptions.p256dh.length > 0 && typeof subscriptionOptions.endpoint === 'string' && subscriptionOptions.endpoint.length > 0 && typeof subscriptionOptions.swScope === 'string' && subscriptionOptions.swScope.length > 0 && typeof subscriptionOptions.vapidKey === 'string' && subscriptionOptions.vapidKey.length > 0;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // Exported for tests.


      var DATABASE_NAME = 'firebase-messaging-database';
      var DATABASE_VERSION = 1;
      var OBJECT_STORE_NAME = 'firebase-messaging-store';
      var dbPromise = null;

      function getDbPromise() {
        if (!dbPromise) {
          dbPromise = Object(idb__WEBPACK_IMPORTED_MODULE_4__["openDb"])(DATABASE_NAME, DATABASE_VERSION, function (upgradeDb) {
            // We don't use 'break' in this switch statement, the fall-through behavior is what we want,
            // because if there are multiple versions between the old version and the current version, we
            // want ALL the migrations that correspond to those versions to run, not only the last one.
            // eslint-disable-next-line default-case
            switch (upgradeDb.oldVersion) {
              case 0:
                upgradeDb.createObjectStore(OBJECT_STORE_NAME);
            }
          });
        }

        return dbPromise;
      }
      /** Gets record(s) from the objectStore that match the given key. */


      function dbGet(firebaseDependencies) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var key, db, tokenDetails, oldTokenDetails;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                key = getKey(firebaseDependencies);
                return [4
                /*yield*/
                , getDbPromise()];

              case 1:
                db = _a.sent();
                return [4
                /*yield*/
                , db.transaction(OBJECT_STORE_NAME).objectStore(OBJECT_STORE_NAME).get(key)];

              case 2:
                tokenDetails = _a.sent();
                if (!tokenDetails) return [3
                /*break*/
                , 3];
                return [2
                /*return*/
                , tokenDetails];

              case 3:
                return [4
                /*yield*/
                , migrateOldDatabase(firebaseDependencies.appConfig.senderId)];

              case 4:
                oldTokenDetails = _a.sent();
                if (!oldTokenDetails) return [3
                /*break*/
                , 6];
                return [4
                /*yield*/
                , dbSet(firebaseDependencies, oldTokenDetails)];

              case 5:
                _a.sent();

                return [2
                /*return*/
                , oldTokenDetails];

              case 6:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /** Assigns or overwrites the record for the given key with the given value. */


      function dbSet(firebaseDependencies, tokenDetails) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var key, db, tx;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                key = getKey(firebaseDependencies);
                return [4
                /*yield*/
                , getDbPromise()];

              case 1:
                db = _a.sent();
                tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                return [4
                /*yield*/
                , tx.objectStore(OBJECT_STORE_NAME).put(tokenDetails, key)];

              case 2:
                _a.sent();

                return [4
                /*yield*/
                , tx.complete];

              case 3:
                _a.sent();

                return [2
                /*return*/
                , tokenDetails];
            }
          });
        });
      }
      /** Removes record(s) from the objectStore that match the given key. */


      function dbRemove(firebaseDependencies) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var key, db, tx;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                key = getKey(firebaseDependencies);
                return [4
                /*yield*/
                , getDbPromise()];

              case 1:
                db = _a.sent();
                tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                return [4
                /*yield*/
                , tx.objectStore(OBJECT_STORE_NAME)["delete"](key)];

              case 2:
                _a.sent();

                return [4
                /*yield*/
                , tx.complete];

              case 3:
                _a.sent();

                return [2
                /*return*/
                ];
            }
          });
        });
      }

      function getKey(_a) {
        var appConfig = _a.appConfig;
        return appConfig.appId;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function requestGetToken(firebaseDependencies, subscriptionOptions) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var headers, body, subscribeOptions, responseData, response, err_1, message;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , getHeaders(firebaseDependencies)];

              case 1:
                headers = _a.sent();
                body = getBody(subscriptionOptions);
                subscribeOptions = {
                  method: 'POST',
                  headers: headers,
                  body: JSON.stringify(body)
                };
                _a.label = 2;

              case 2:
                _a.trys.push([2, 5,, 6]);

                return [4
                /*yield*/
                , fetch(getEndpoint(firebaseDependencies.appConfig), subscribeOptions)];

              case 3:
                response = _a.sent();
                return [4
                /*yield*/
                , response.json()];

              case 4:
                responseData = _a.sent();
                return [3
                /*break*/
                , 6];

              case 5:
                err_1 = _a.sent();
                throw ERROR_FACTORY.create("token-subscribe-failed"
                /* TOKEN_SUBSCRIBE_FAILED */
                , {
                  errorInfo: err_1
                });

              case 6:
                if (responseData.error) {
                  message = responseData.error.message;
                  throw ERROR_FACTORY.create("token-subscribe-failed"
                  /* TOKEN_SUBSCRIBE_FAILED */
                  , {
                    errorInfo: message
                  });
                }

                if (!responseData.token) {
                  throw ERROR_FACTORY.create("token-subscribe-no-token"
                  /* TOKEN_SUBSCRIBE_NO_TOKEN */
                  );
                }

                return [2
                /*return*/
                , responseData.token];
            }
          });
        });
      }

      function requestUpdateToken(firebaseDependencies, tokenDetails) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var headers, body, updateOptions, responseData, response, err_2, message;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , getHeaders(firebaseDependencies)];

              case 1:
                headers = _a.sent();
                body = getBody(tokenDetails.subscriptionOptions);
                updateOptions = {
                  method: 'PATCH',
                  headers: headers,
                  body: JSON.stringify(body)
                };
                _a.label = 2;

              case 2:
                _a.trys.push([2, 5,, 6]);

                return [4
                /*yield*/
                , fetch(getEndpoint(firebaseDependencies.appConfig) + "/" + tokenDetails.token, updateOptions)];

              case 3:
                response = _a.sent();
                return [4
                /*yield*/
                , response.json()];

              case 4:
                responseData = _a.sent();
                return [3
                /*break*/
                , 6];

              case 5:
                err_2 = _a.sent();
                throw ERROR_FACTORY.create("token-update-failed"
                /* TOKEN_UPDATE_FAILED */
                , {
                  errorInfo: err_2
                });

              case 6:
                if (responseData.error) {
                  message = responseData.error.message;
                  throw ERROR_FACTORY.create("token-update-failed"
                  /* TOKEN_UPDATE_FAILED */
                  , {
                    errorInfo: message
                  });
                }

                if (!responseData.token) {
                  throw ERROR_FACTORY.create("token-update-no-token"
                  /* TOKEN_UPDATE_NO_TOKEN */
                  );
                }

                return [2
                /*return*/
                , responseData.token];
            }
          });
        });
      }

      function requestDeleteToken(firebaseDependencies, token) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var headers, unsubscribeOptions, response, responseData, message, err_3;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , getHeaders(firebaseDependencies)];

              case 1:
                headers = _a.sent();
                unsubscribeOptions = {
                  method: 'DELETE',
                  headers: headers
                };
                _a.label = 2;

              case 2:
                _a.trys.push([2, 5,, 6]);

                return [4
                /*yield*/
                , fetch(getEndpoint(firebaseDependencies.appConfig) + "/" + token, unsubscribeOptions)];

              case 3:
                response = _a.sent();
                return [4
                /*yield*/
                , response.json()];

              case 4:
                responseData = _a.sent();

                if (responseData.error) {
                  message = responseData.error.message;
                  throw ERROR_FACTORY.create("token-unsubscribe-failed"
                  /* TOKEN_UNSUBSCRIBE_FAILED */
                  , {
                    errorInfo: message
                  });
                }

                return [3
                /*break*/
                , 6];

              case 5:
                err_3 = _a.sent();
                throw ERROR_FACTORY.create("token-unsubscribe-failed"
                /* TOKEN_UNSUBSCRIBE_FAILED */
                , {
                  errorInfo: err_3
                });

              case 6:
                return [2
                /*return*/
                ];
            }
          });
        });
      }

      function getEndpoint(_a) {
        var projectId = _a.projectId;
        return ENDPOINT + "/projects/" + projectId + "/registrations";
      }

      function getHeaders(_a) {
        var appConfig = _a.appConfig,
            installations = _a.installations;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var authToken;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                return [4
                /*yield*/
                , installations.getToken()];

              case 1:
                authToken = _b.sent();
                return [2
                /*return*/
                , new Headers({
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                  'x-goog-api-key': appConfig.apiKey,
                  'x-goog-firebase-installations-auth': "FIS " + authToken
                })];
            }
          });
        });
      }

      function getBody(_a) {
        var p256dh = _a.p256dh,
            auth = _a.auth,
            endpoint = _a.endpoint,
            vapidKey = _a.vapidKey;
        var body = {
          web: {
            endpoint: endpoint,
            auth: auth,
            p256dh: p256dh
          }
        };

        if (vapidKey !== DEFAULT_VAPID_KEY) {
          body.web.applicationPubKey = vapidKey;
        }

        return body;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /** UpdateRegistration will be called once every week. */


      var TOKEN_EXPIRATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

      function getToken(firebaseDependencies, swRegistration, vapidKey) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var pushSubscription, tokenDetails, subscriptionOptions, e_1;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (Notification.permission !== 'granted') {
                  throw ERROR_FACTORY.create("permission-blocked"
                  /* PERMISSION_BLOCKED */
                  );
                }

                return [4
                /*yield*/
                , getPushSubscription(swRegistration, vapidKey)];

              case 1:
                pushSubscription = _a.sent();
                return [4
                /*yield*/
                , dbGet(firebaseDependencies)];

              case 2:
                tokenDetails = _a.sent();
                subscriptionOptions = {
                  vapidKey: vapidKey,
                  swScope: swRegistration.scope,
                  endpoint: pushSubscription.endpoint,
                  auth: arrayToBase64(pushSubscription.getKey('auth')),
                  p256dh: arrayToBase64(pushSubscription.getKey('p256dh'))
                };
                if (!!tokenDetails) return [3
                /*break*/
                , 3]; // No token, get a new one.

                return [2
                /*return*/
                , getNewToken(firebaseDependencies, subscriptionOptions)];

              case 3:
                if (!!isTokenValid(tokenDetails.subscriptionOptions, subscriptionOptions)) return [3
                /*break*/
                , 8];
                _a.label = 4;

              case 4:
                _a.trys.push([4, 6,, 7]);

                return [4
                /*yield*/
                , requestDeleteToken(firebaseDependencies, tokenDetails.token)];

              case 5:
                _a.sent();

                return [3
                /*break*/
                , 7];

              case 6:
                e_1 = _a.sent(); // Suppress errors because of #2364

                console.warn(e_1);
                return [3
                /*break*/
                , 7];

              case 7:
                return [2
                /*return*/
                , getNewToken(firebaseDependencies, subscriptionOptions)];

              case 8:
                if (Date.now() >= tokenDetails.createTime + TOKEN_EXPIRATION_MS) {
                  // Weekly token refresh
                  return [2
                  /*return*/
                  , updateToken({
                    token: tokenDetails.token,
                    createTime: Date.now(),
                    subscriptionOptions: subscriptionOptions
                  }, firebaseDependencies, swRegistration)];
                } else {
                  // Valid token, nothing to do.
                  return [2
                  /*return*/
                  , tokenDetails.token];
                }

              case 9:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * This method deletes the token from the database, unsubscribes the token from FCM, and unregisters
       * the push subscription if it exists.
       */


      function deleteToken(firebaseDependencies, swRegistration) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var tokenDetails, pushSubscription;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , dbGet(firebaseDependencies)];

              case 1:
                tokenDetails = _a.sent();
                if (!tokenDetails) return [3
                /*break*/
                , 4];
                return [4
                /*yield*/
                , requestDeleteToken(firebaseDependencies, tokenDetails.token)];

              case 2:
                _a.sent();

                return [4
                /*yield*/
                , dbRemove(firebaseDependencies)];

              case 3:
                _a.sent();

                _a.label = 4;

              case 4:
                return [4
                /*yield*/
                , swRegistration.pushManager.getSubscription()];

              case 5:
                pushSubscription = _a.sent();

                if (pushSubscription) {
                  return [2
                  /*return*/
                  , pushSubscription.unsubscribe()];
                } // If there's no SW, consider it a success.


                return [2
                /*return*/
                , true];
            }
          });
        });
      }

      function updateToken(tokenDetails, firebaseDependencies, swRegistration) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var updatedToken, updatedTokenDetails, e_2;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                _a.trys.push([0, 3,, 5]);

                return [4
                /*yield*/
                , requestUpdateToken(firebaseDependencies, tokenDetails)];

              case 1:
                updatedToken = _a.sent();
                updatedTokenDetails = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, tokenDetails), {
                  token: updatedToken,
                  createTime: Date.now()
                });
                return [4
                /*yield*/
                , dbSet(firebaseDependencies, updatedTokenDetails)];

              case 2:
                _a.sent();

                return [2
                /*return*/
                , updatedToken];

              case 3:
                e_2 = _a.sent();
                return [4
                /*yield*/
                , deleteToken(firebaseDependencies, swRegistration)];

              case 4:
                _a.sent();

                throw e_2;

              case 5:
                return [2
                /*return*/
                ];
            }
          });
        });
      }

      function getNewToken(firebaseDependencies, subscriptionOptions) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var token, tokenDetails;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , requestGetToken(firebaseDependencies, subscriptionOptions)];

              case 1:
                token = _a.sent();
                tokenDetails = {
                  token: token,
                  createTime: Date.now(),
                  subscriptionOptions: subscriptionOptions
                };
                return [4
                /*yield*/
                , dbSet(firebaseDependencies, tokenDetails)];

              case 2:
                _a.sent();

                return [2
                /*return*/
                , tokenDetails.token];
            }
          });
        });
      }
      /**
       * Gets a PushSubscription for the current user.
       */


      function getPushSubscription(swRegistration, vapidKey) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var subscription;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , swRegistration.pushManager.getSubscription()];

              case 1:
                subscription = _a.sent();

                if (subscription) {
                  return [2
                  /*return*/
                  , subscription];
                }

                return [2
                /*return*/
                , swRegistration.pushManager.subscribe({
                  userVisibleOnly: true,
                  // Chrome <= 75 doesn't support base64-encoded VAPID key. For backward compatibility, VAPID key
                  // submitted to pushManager#subscribe must be of type Uint8Array.
                  applicationServerKey: base64ToArray(vapidKey)
                })];
            }
          });
        });
      }
      /**
       * Checks if the saved tokenDetails object matches the configuration provided.
       */


      function isTokenValid(dbOptions, currentOptions) {
        var isVapidKeyEqual = currentOptions.vapidKey === dbOptions.vapidKey;
        var isEndpointEqual = currentOptions.endpoint === dbOptions.endpoint;
        var isAuthEqual = currentOptions.auth === dbOptions.auth;
        var isP256dhEqual = currentOptions.p256dh === dbOptions.p256dh;
        return isVapidKeyEqual && isEndpointEqual && isAuthEqual && isP256dhEqual;
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function externalizePayload(internalPayload) {
        var payload = {
          from: internalPayload.from,
          // eslint-disable-next-line camelcase
          collapseKey: internalPayload.collapse_key
        };
        propagateNotificationPayload(payload, internalPayload);
        propagateDataPayload(payload, internalPayload);
        propagateFcmOptions(payload, internalPayload);
        return payload;
      }

      function propagateNotificationPayload(payload, messagePayloadInternal) {
        if (!messagePayloadInternal.notification) {
          return;
        }

        payload.notification = {};
        var title = messagePayloadInternal.notification.title;

        if (!!title) {
          payload.notification.title = title;
        }

        var body = messagePayloadInternal.notification.body;

        if (!!body) {
          payload.notification.body = body;
        }

        var image = messagePayloadInternal.notification.image;

        if (!!image) {
          payload.notification.image = image;
        }
      }

      function propagateDataPayload(payload, messagePayloadInternal) {
        if (!messagePayloadInternal.data) {
          return;
        }

        payload.data = messagePayloadInternal.data;
      }

      function propagateFcmOptions(payload, messagePayloadInternal) {
        if (!messagePayloadInternal.fcmOptions) {
          return;
        }

        payload.fcmOptions = {};
        var link = messagePayloadInternal.fcmOptions.link;

        if (!!link) {
          payload.fcmOptions.link = link;
        } // eslint-disable-next-line camelcase


        var analyticsLabel = messagePayloadInternal.fcmOptions.analytics_label;

        if (!!analyticsLabel) {
          payload.fcmOptions.analyticsLabel = analyticsLabel;
        }
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function isConsoleMessage(data) {
        // This message has a campaign ID, meaning it was sent using the Firebase Console.
        return typeof data === 'object' && !!data && CONSOLE_CAMPAIGN_ID in data;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /** Returns a promise that resolves after given time passes. */


      function sleep(ms) {
        return new Promise(function (resolve) {
          setTimeout(resolve, ms);
        });
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var SwController =
      /** @class */
      function () {
        function SwController(firebaseDependencies) {
          var _this = this;

          this.firebaseDependencies = firebaseDependencies; // A boolean flag to determine wether an app is using onBackgroundMessage or
          // setBackgroundMessageHandler. onBackgroundMessage will receive a MessagePayload regardless of if
          // a notification is displayed. Whereas, setBackgroundMessageHandler will swallow the
          // MessagePayload if a NotificationPayload is included.

          this.isOnBackgroundMessageUsed = null;
          this.vapidKey = null;
          this.bgMessageHandler = null;
          self.addEventListener('push', function (e) {
            e.waitUntil(_this.onPush(e));
          });
          self.addEventListener('pushsubscriptionchange', function (e) {
            e.waitUntil(_this.onSubChange(e));
          });
          self.addEventListener('notificationclick', function (e) {
            e.waitUntil(_this.onNotificationClick(e));
          });
        }

        Object.defineProperty(SwController.prototype, "app", {
          get: function get() {
            return this.firebaseDependencies.app;
          },
          enumerable: false,
          configurable: true
        });
        /**
         * @deprecated. Use onBackgroundMessage(nextOrObserver: NextFn<object> | Observer<object>):
         * Unsubscribe instead.
         *
         * Calling setBackgroundMessageHandler will opt in to some specific behaviors.
         *
         * 1.) If a notification doesn't need to be shown due to a window already being visible, then push
         * messages will be sent to the page. 2.) If a notification needs to be shown, and the message
         * contains no notification data this method will be called and the promise it returns will be
         * passed to event.waitUntil. If you do not set this callback then all push messages will let and
         * the developer can handle them in a their own 'push' event callback
         *
         * @param callback The callback to be called when a push message is received and a notification
         * must be shown. The callback will be given the data from the push message.
         */

        SwController.prototype.setBackgroundMessageHandler = function (callback) {
          this.isOnBackgroundMessageUsed = false;

          if (!callback || typeof callback !== 'function') {
            throw ERROR_FACTORY.create("invalid-bg-handler"
            /* INVALID_BG_HANDLER */
            );
          }

          this.bgMessageHandler = callback;
        };

        SwController.prototype.onBackgroundMessage = function (nextOrObserver) {
          var _this = this;

          this.isOnBackgroundMessageUsed = true;
          this.bgMessageHandler = nextOrObserver;
          return function () {
            _this.bgMessageHandler = null;
          };
        }; // TODO: Remove getToken from SW Controller. Calling this from an old SW can cause all kinds of
        // trouble.


        SwController.prototype.getToken = function () {
          var _a, _b;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
            var tokenDetails;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_c) {
              switch (_c.label) {
                case 0:
                  if (!!this.vapidKey) return [3
                  /*break*/
                  , 2];
                  return [4
                  /*yield*/
                  , dbGet(this.firebaseDependencies)];

                case 1:
                  tokenDetails = _c.sent();
                  this.vapidKey = (_b = (_a = tokenDetails === null || tokenDetails === void 0 ? void 0 : tokenDetails.subscriptionOptions) === null || _a === void 0 ? void 0 : _a.vapidKey) !== null && _b !== void 0 ? _b : DEFAULT_VAPID_KEY;
                  _c.label = 2;

                case 2:
                  return [2
                  /*return*/
                  , getToken(this.firebaseDependencies, self.registration, this.vapidKey)];
              }
            });
          });
        }; // TODO: Remove deleteToken from SW Controller. Calling this from an old SW can cause all kinds of
        // trouble.


        SwController.prototype.deleteToken = function () {
          return deleteToken(this.firebaseDependencies, self.registration);
        };

        SwController.prototype.requestPermission = function () {
          throw ERROR_FACTORY.create("only-available-in-window"
          /* AVAILABLE_IN_WINDOW */
          );
        }; // TODO: Remove this together with getToken from SW Controller.


        SwController.prototype.usePublicVapidKey = function (vapidKey) {
          if (this.vapidKey !== null) {
            throw ERROR_FACTORY.create("use-vapid-key-after-get-token"
            /* USE_VAPID_KEY_AFTER_GET_TOKEN */
            );
          }

          if (typeof vapidKey !== 'string' || vapidKey.length === 0) {
            throw ERROR_FACTORY.create("invalid-vapid-key"
            /* INVALID_VAPID_KEY */
            );
          }

          this.vapidKey = vapidKey;
        };

        SwController.prototype.useServiceWorker = function () {
          throw ERROR_FACTORY.create("only-available-in-window"
          /* AVAILABLE_IN_WINDOW */
          );
        };

        SwController.prototype.onMessage = function () {
          throw ERROR_FACTORY.create("only-available-in-window"
          /* AVAILABLE_IN_WINDOW */
          );
        };

        SwController.prototype.onTokenRefresh = function () {
          throw ERROR_FACTORY.create("only-available-in-window"
          /* AVAILABLE_IN_WINDOW */
          );
        };
        /**
         * A handler for push events that shows notifications based on the content of the payload.
         *
         * The payload must be a JSON-encoded Object with a `notification` key. The value of the
         * `notification` property will be used as the NotificationOptions object passed to
         * showNotification. Additionally, the `title` property of the notification object will be used as
         * the title.
         *
         * If there is no notification data in the payload then no notification will be shown.
         */


        SwController.prototype.onPush = function (event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
            var internalPayload, clientList, isNotificationShown, payload;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  internalPayload = getMessagePayloadInternal(event);

                  if (!internalPayload) {
                    console.debug(TAG + 'failed to get parsed MessagePayload from the PushEvent. Skip handling the push.');
                    return [2
                    /*return*/
                    ];
                  }

                  return [4
                  /*yield*/
                  , getClientList()];

                case 1:
                  clientList = _a.sent();

                  if (hasVisibleClients(clientList)) {
                    return [2
                    /*return*/
                    , sendMessagePayloadInternalToWindows(clientList, internalPayload)];
                  }

                  isNotificationShown = false;
                  if (!!!internalPayload.notification) return [3
                  /*break*/
                  , 3];
                  return [4
                  /*yield*/
                  , showNotification(wrapInternalPayload(internalPayload))];

                case 2:
                  _a.sent();

                  isNotificationShown = true;
                  _a.label = 3;

                case 3:
                  // MessagePayload is only passed to `onBackgroundMessage`. Skip passing MessagePayload for
                  // the legacy `setBackgroundMessageHandler` to preserve the SDK behaviors.
                  if (isNotificationShown === true && this.isOnBackgroundMessageUsed === false) {
                    return [2
                    /*return*/
                    ];
                  }

                  if (!!this.bgMessageHandler) {
                    payload = externalizePayload(internalPayload);

                    if (typeof this.bgMessageHandler === 'function') {
                      this.bgMessageHandler(payload);
                    } else {
                      this.bgMessageHandler.next(payload);
                    }
                  }

                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };

        SwController.prototype.onSubChange = function (event) {
          var _a, _b;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
            var newSubscription, tokenDetails;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_c) {
              switch (_c.label) {
                case 0:
                  newSubscription = event.newSubscription;
                  if (!!newSubscription) return [3
                  /*break*/
                  , 2]; // Subscription revoked, delete token

                  return [4
                  /*yield*/
                  , deleteToken(this.firebaseDependencies, self.registration)];

                case 1:
                  // Subscription revoked, delete token
                  _c.sent();

                  return [2
                  /*return*/
                  ];

                case 2:
                  return [4
                  /*yield*/
                  , dbGet(this.firebaseDependencies)];

                case 3:
                  tokenDetails = _c.sent();
                  return [4
                  /*yield*/
                  , deleteToken(this.firebaseDependencies, self.registration)];

                case 4:
                  _c.sent();

                  return [4
                  /*yield*/
                  , getToken(this.firebaseDependencies, self.registration, (_b = (_a = tokenDetails === null || tokenDetails === void 0 ? void 0 : tokenDetails.subscriptionOptions) === null || _a === void 0 ? void 0 : _a.vapidKey) !== null && _b !== void 0 ? _b : DEFAULT_VAPID_KEY)];

                case 5:
                  _c.sent();

                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };

        SwController.prototype.onNotificationClick = function (event) {
          var _a, _b;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
            var internalPayload, link, url, originUrl, client;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_c) {
              switch (_c.label) {
                case 0:
                  internalPayload = (_b = (_a = event.notification) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b[FCM_MSG];

                  if (!internalPayload) {
                    return [2
                    /*return*/
                    ];
                  } else if (event.action) {
                    // User clicked on an action button. This will allow developers to act on action button clicks
                    // by using a custom onNotificationClick listener that they define.
                    return [2
                    /*return*/
                    ];
                  } // Prevent other listeners from receiving the event


                  event.stopImmediatePropagation();
                  event.notification.close();
                  link = getLink(internalPayload);

                  if (!link) {
                    return [2
                    /*return*/
                    ];
                  }

                  url = new URL(link, self.location.href);
                  originUrl = new URL(self.location.origin);

                  if (url.host !== originUrl.host) {
                    return [2
                    /*return*/
                    ];
                  }

                  return [4
                  /*yield*/
                  , getWindowClient(url)];

                case 1:
                  client = _c.sent();
                  if (!!client) return [3
                  /*break*/
                  , 4];
                  return [4
                  /*yield*/
                  , self.clients.openWindow(link)];

                case 2:
                  client = _c.sent(); // Wait three seconds for the client to initialize and set up the message handler so that it
                  // can receive the message.

                  return [4
                  /*yield*/
                  , sleep(3000)];

                case 3:
                  // Wait three seconds for the client to initialize and set up the message handler so that it
                  // can receive the message.
                  _c.sent();

                  return [3
                  /*break*/
                  , 6];

                case 4:
                  return [4
                  /*yield*/
                  , client.focus()];

                case 5:
                  client = _c.sent();
                  _c.label = 6;

                case 6:
                  if (!client) {
                    // Window Client will not be returned if it's for a third party origin.
                    return [2
                    /*return*/
                    ];
                  }

                  internalPayload.messageType = MessageType.NOTIFICATION_CLICKED;
                  internalPayload.isFirebaseMessaging = true;
                  return [2
                  /*return*/
                  , client.postMessage(internalPayload)];
              }
            });
          });
        };

        return SwController;
      }();

      function wrapInternalPayload(internalPayload) {
        var _a;

        var wrappedInternalPayload = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, internalPayload.notification); // Put the message payload under FCM_MSG name so we can identify the notification as being an FCM
        // notification vs a notification from somewhere else (i.e. normal web push or developer generated
        // notification).

        wrappedInternalPayload.data = (_a = {}, _a[FCM_MSG] = internalPayload, _a);
        return wrappedInternalPayload;
      }

      function getMessagePayloadInternal(_a) {
        var data = _a.data;

        if (!data) {
          return null;
        }

        try {
          return data.json();
        } catch (err) {
          // Not JSON so not an FCM message.
          return null;
        }
      }
      /**
       * @param url The URL to look for when focusing a client.
       * @return Returns an existing window client or a newly opened WindowClient.
       */


      function getWindowClient(url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var clientList, clientList_1, clientList_1_1, client, clientUrl;

          var e_1, _a;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                return [4
                /*yield*/
                , getClientList()];

              case 1:
                clientList = _b.sent();

                try {
                  for (clientList_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(clientList), clientList_1_1 = clientList_1.next(); !clientList_1_1.done; clientList_1_1 = clientList_1.next()) {
                    client = clientList_1_1.value;
                    clientUrl = new URL(client.url, self.location.href);

                    if (url.host === clientUrl.host) {
                      return [2
                      /*return*/
                      , client];
                    }
                  }
                } catch (e_1_1) {
                  e_1 = {
                    error: e_1_1
                  };
                } finally {
                  try {
                    if (clientList_1_1 && !clientList_1_1.done && (_a = clientList_1["return"])) _a.call(clientList_1);
                  } finally {
                    if (e_1) throw e_1.error;
                  }
                }

                return [2
                /*return*/
                , null];
            }
          });
        });
      }
      /**
       * @returns If there is currently a visible WindowClient, this method will resolve to true,
       * otherwise false.
       */


      function hasVisibleClients(clientList) {
        return clientList.some(function (client) {
          return client.visibilityState === 'visible' && // Ignore chrome-extension clients as that matches the background pages of extensions, which
          // are always considered visible for some reason.
          !client.url.startsWith('chrome-extension://');
        });
      }

      function sendMessagePayloadInternalToWindows(clientList, internalPayload) {
        var e_2, _a;

        internalPayload.isFirebaseMessaging = true;
        internalPayload.messageType = MessageType.PUSH_RECEIVED;

        try {
          for (var clientList_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(clientList), clientList_2_1 = clientList_2.next(); !clientList_2_1.done; clientList_2_1 = clientList_2.next()) {
            var client = clientList_2_1.value;
            client.postMessage(internalPayload);
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (clientList_2_1 && !clientList_2_1.done && (_a = clientList_2["return"])) _a.call(clientList_2);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      }

      function getClientList() {
        return self.clients.matchAll({
          type: 'window',
          includeUncontrolled: true // TS doesn't know that "type: 'window'" means it'll return WindowClient[]

        });
      }

      function showNotification(notificationPayloadInternal) {
        var _a; // Note: Firefox does not support the maxActions property.
        // https://developer.mozilla.org/en-US/docs/Web/API/notification/maxActions


        var actions = notificationPayloadInternal.actions;
        var maxActions = Notification.maxActions;

        if (actions && maxActions && actions.length > maxActions) {
          console.warn("This browser only supports " + maxActions + " actions. The remaining actions will not be displayed.");
        }

        return self.registration.showNotification((_a =
        /* title= */
        notificationPayloadInternal.title) !== null && _a !== void 0 ? _a : '', notificationPayloadInternal);
      }

      function getLink(payload) {
        var _a, _b, _c; // eslint-disable-next-line camelcase


        var link = (_b = (_a = payload.fcmOptions) === null || _a === void 0 ? void 0 : _a.link) !== null && _b !== void 0 ? _b : (_c = payload.notification) === null || _c === void 0 ? void 0 : _c.click_action;

        if (link) {
          return link;
        }

        if (isConsoleMessage(payload.data)) {
          // Notification created in the Firebase Console. Redirect to origin.
          return self.location.origin;
        } else {
          return null;
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var WindowController =
      /** @class */
      function () {
        function WindowController(firebaseDependencies) {
          var _this = this;

          this.firebaseDependencies = firebaseDependencies;
          this.vapidKey = null;
          this.onMessageCallback = null;
          navigator.serviceWorker.addEventListener('message', function (e) {
            return _this.messageEventListener(e);
          });
        }

        Object.defineProperty(WindowController.prototype, "app", {
          get: function get() {
            return this.firebaseDependencies.app;
          },
          enumerable: false,
          configurable: true
        });

        WindowController.prototype.messageEventListener = function (event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
            var internalPayload, dataPayload;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  internalPayload = event.data;

                  if (!internalPayload.isFirebaseMessaging) {
                    return [2
                    /*return*/
                    ];
                  } // onMessageCallback is either a function or observer/subscriber.
                  // TODO: in the modularization release, have onMessage handle type MessagePayload as supposed to
                  // the legacy payload where some fields are in snake cases.


                  if (this.onMessageCallback && internalPayload.messageType === MessageType.PUSH_RECEIVED) {
                    if (typeof this.onMessageCallback === 'function') {
                      this.onMessageCallback(stripInternalFields(Object.assign({}, internalPayload)));
                    } else {
                      this.onMessageCallback.next(Object.assign({}, internalPayload));
                    }
                  }

                  dataPayload = internalPayload.data;
                  if (!(isConsoleMessage(dataPayload) && dataPayload[CONSOLE_CAMPAIGN_ANALYTICS_ENABLED] === '1')) return [3
                  /*break*/
                  , 2];
                  return [4
                  /*yield*/
                  , this.logEvent(internalPayload.messageType, dataPayload)];

                case 1:
                  _a.sent();

                  _a.label = 2;

                case 2:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };

        WindowController.prototype.getVapidKey = function () {
          return this.vapidKey;
        };

        WindowController.prototype.getSwReg = function () {
          return this.swRegistration;
        };

        WindowController.prototype.getToken = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  if (!(Notification.permission === 'default')) return [3
                  /*break*/
                  , 2];
                  return [4
                  /*yield*/
                  , Notification.requestPermission()];

                case 1:
                  _a.sent();

                  _a.label = 2;

                case 2:
                  if (Notification.permission !== 'granted') {
                    throw ERROR_FACTORY.create("permission-blocked"
                    /* PERMISSION_BLOCKED */
                    );
                  }

                  return [4
                  /*yield*/
                  , this.updateVapidKey(options === null || options === void 0 ? void 0 : options.vapidKey)];

                case 3:
                  _a.sent();

                  return [4
                  /*yield*/
                  , this.updateSwReg(options === null || options === void 0 ? void 0 : options.serviceWorkerRegistration)];

                case 4:
                  _a.sent();

                  return [2
                  /*return*/
                  , getToken(this.firebaseDependencies, this.swRegistration, this.vapidKey)];
              }
            });
          });
        };

        WindowController.prototype.updateVapidKey = function (vapidKey) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
              if (!!vapidKey) {
                this.vapidKey = vapidKey;
              } else if (!this.vapidKey) {
                this.vapidKey = DEFAULT_VAPID_KEY;
              }

              return [2
              /*return*/
              ];
            });
          });
        };

        WindowController.prototype.updateSwReg = function (swRegistration) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  if (!(!swRegistration && !this.swRegistration)) return [3
                  /*break*/
                  , 2];
                  return [4
                  /*yield*/
                  , this.registerDefaultSw()];

                case 1:
                  _a.sent();

                  _a.label = 2;

                case 2:
                  if (!swRegistration && !!this.swRegistration) {
                    return [2
                    /*return*/
                    ];
                  }

                  if (!(swRegistration instanceof ServiceWorkerRegistration)) {
                    throw ERROR_FACTORY.create("invalid-sw-registration"
                    /* INVALID_SW_REGISTRATION */
                    );
                  }

                  this.swRegistration = swRegistration;
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };

        WindowController.prototype.registerDefaultSw = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
            var _a, e_1;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_b) {
              switch (_b.label) {
                case 0:
                  _b.trys.push([0, 2,, 3]);

                  _a = this;
                  return [4
                  /*yield*/
                  , navigator.serviceWorker.register(DEFAULT_SW_PATH, {
                    scope: DEFAULT_SW_SCOPE
                  })];

                case 1:
                  _a.swRegistration = _b.sent(); // The timing when browser updates sw when sw has an update is unreliable by my experiment. It
                  // leads to version conflict when the SDK upgrades to a newer version in the main page, but sw
                  // is stuck with the old version. For example,
                  // https://github.com/firebase/firebase-js-sdk/issues/2590 The following line reliably updates
                  // sw if there was an update.

                  this.swRegistration.update()["catch"](function () {
                    /* it is non blocking and we don't care if it failed */
                  });
                  return [3
                  /*break*/
                  , 3];

                case 2:
                  e_1 = _b.sent();
                  throw ERROR_FACTORY.create("failed-service-worker-registration"
                  /* FAILED_DEFAULT_REGISTRATION */
                  , {
                    browserErrorMessage: e_1.message
                  });

                case 3:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };

        WindowController.prototype.deleteToken = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  if (!!this.swRegistration) return [3
                  /*break*/
                  , 2];
                  return [4
                  /*yield*/
                  , this.registerDefaultSw()];

                case 1:
                  _a.sent();

                  _a.label = 2;

                case 2:
                  return [2
                  /*return*/
                  , deleteToken(this.firebaseDependencies, this.swRegistration)];
              }
            });
          });
        };
        /**
         * Request permission if it is not currently granted.
         *
         * @return Resolves if the permission was granted, rejects otherwise.
         *
         * @deprecated Use Notification.requestPermission() instead.
         * https://developer.mozilla.org/en-US/docs/Web/API/Notification/requestPermission
         */


        WindowController.prototype.requestPermission = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
            var permissionResult;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  if (Notification.permission === 'granted') {
                    return [2
                    /*return*/
                    ];
                  }

                  return [4
                  /*yield*/
                  , Notification.requestPermission()];

                case 1:
                  permissionResult = _a.sent();

                  if (permissionResult === 'granted') {
                    return [2
                    /*return*/
                    ];
                  } else if (permissionResult === 'denied') {
                    throw ERROR_FACTORY.create("permission-blocked"
                    /* PERMISSION_BLOCKED */
                    );
                  } else {
                    throw ERROR_FACTORY.create("permission-default"
                    /* PERMISSION_DEFAULT */
                    );
                  }

              }
            });
          });
        };
        /**
         * @deprecated. Use getToken(options?: {vapidKey?: string; serviceWorkerRegistration?:
         * ServiceWorkerRegistration;}): Promise<string> instead.
         */


        WindowController.prototype.usePublicVapidKey = function (vapidKey) {
          if (this.vapidKey !== null) {
            throw ERROR_FACTORY.create("use-vapid-key-after-get-token"
            /* USE_VAPID_KEY_AFTER_GET_TOKEN */
            );
          }

          if (typeof vapidKey !== 'string' || vapidKey.length === 0) {
            throw ERROR_FACTORY.create("invalid-vapid-key"
            /* INVALID_VAPID_KEY */
            );
          }

          this.vapidKey = vapidKey;
        };
        /**
         * @deprecated. Use getToken(options?: {vapidKey?: string; serviceWorkerRegistration?:
         * ServiceWorkerRegistration;}): Promise<string> instead.
         */


        WindowController.prototype.useServiceWorker = function (swRegistration) {
          if (!(swRegistration instanceof ServiceWorkerRegistration)) {
            throw ERROR_FACTORY.create("invalid-sw-registration"
            /* INVALID_SW_REGISTRATION */
            );
          }

          if (this.swRegistration) {
            throw ERROR_FACTORY.create("use-sw-after-get-token"
            /* USE_SW_AFTER_GET_TOKEN */
            );
          }

          this.swRegistration = swRegistration;
        };
        /**
         * @param nextOrObserver An observer object or a function triggered on message.
         *
         * @return The unsubscribe function for the observer.
         */


        WindowController.prototype.onMessage = function (nextOrObserver) {
          var _this = this;

          this.onMessageCallback = nextOrObserver;
          return function () {
            _this.onMessageCallback = null;
          };
        };

        WindowController.prototype.setBackgroundMessageHandler = function () {
          throw ERROR_FACTORY.create("only-available-in-sw"
          /* AVAILABLE_IN_SW */
          );
        };

        WindowController.prototype.onBackgroundMessage = function () {
          throw ERROR_FACTORY.create("only-available-in-sw"
          /* AVAILABLE_IN_SW */
          );
        };
        /**
         * @deprecated No-op. It was initially designed with token rotation requests from server in mind.
         * However, the plan to implement such feature was abandoned.
         */


        WindowController.prototype.onTokenRefresh = function () {
          return function () {};
        };

        WindowController.prototype.logEvent = function (messageType, data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
            var eventType, analytics;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  eventType = getEventType(messageType);
                  return [4
                  /*yield*/
                  , this.firebaseDependencies.analyticsProvider.get()];

                case 1:
                  analytics = _a.sent();
                  analytics.logEvent(eventType, {
                    /* eslint-disable camelcase */
                    message_id: data[CONSOLE_CAMPAIGN_ID],
                    message_name: data[CONSOLE_CAMPAIGN_NAME],
                    message_time: data[CONSOLE_CAMPAIGN_TIME],
                    message_device_time: Math.floor(Date.now() / 1000)
                    /* eslint-enable camelcase */

                  });
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };

        return WindowController;
      }();

      function getEventType(messageType) {
        switch (messageType) {
          case MessageType.NOTIFICATION_CLICKED:
            return 'notification_open';

          case MessageType.PUSH_RECEIVED:
            return 'notification_foreground';

          default:
            throw new Error();
        }
      }

      function stripInternalFields(internalPayload) {
        delete internalPayload.messageType;
        delete internalPayload.isFirebaseMessaging;
        return internalPayload;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function extractAppConfig(app) {
        var e_1, _a;

        if (!app || !app.options) {
          throw getMissingValueError('App Configuration Object');
        }

        if (!app.name) {
          throw getMissingValueError('App Name');
        } // Required app config keys


        var configKeys = ['projectId', 'apiKey', 'appId', 'messagingSenderId'];
        var options = app.options;

        try {
          for (var configKeys_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(configKeys), configKeys_1_1 = configKeys_1.next(); !configKeys_1_1.done; configKeys_1_1 = configKeys_1.next()) {
            var keyName = configKeys_1_1.value;

            if (!options[keyName]) {
              throw getMissingValueError(keyName);
            }
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (configKeys_1_1 && !configKeys_1_1.done && (_a = configKeys_1["return"])) _a.call(configKeys_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }

        return {
          appName: app.name,
          projectId: options.projectId,
          apiKey: options.apiKey,
          appId: options.appId,
          senderId: options.messagingSenderId
        };
      }

      function getMissingValueError(valueName) {
        return ERROR_FACTORY.create("missing-app-config-values"
        /* MISSING_APP_CONFIG_VALUES */
        , {
          valueName: valueName
        });
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var MESSAGING_NAME = 'messaging';

      function factoryMethod(container) {
        // Dependencies.
        var app = container.getProvider('app').getImmediate();
        var appConfig = extractAppConfig(app);
        var installations = container.getProvider('installations').getImmediate();
        var analyticsProvider = container.getProvider('analytics-internal');
        var firebaseDependencies = {
          app: app,
          appConfig: appConfig,
          installations: installations,
          analyticsProvider: analyticsProvider
        };

        if (!isSupported()) {
          throw ERROR_FACTORY.create("unsupported-browser"
          /* UNSUPPORTED_BROWSER */
          );
        }

        if (self && 'ServiceWorkerGlobalScope' in self) {
          // Running in ServiceWorker context
          return new SwController(firebaseDependencies);
        } else {
          // Assume we are in the window context.
          return new WindowController(firebaseDependencies);
        }
      }

      var NAMESPACE_EXPORTS = {
        isSupported: isSupported
      };

      _firebase_app__WEBPACK_IMPORTED_MODULE_5___default.a.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__["Component"](MESSAGING_NAME, factoryMethod, "PUBLIC"
      /* PUBLIC */
      ).setServiceProps(NAMESPACE_EXPORTS));

      function isSupported() {
        if (self && 'ServiceWorkerGlobalScope' in self) {
          // Running in ServiceWorker context
          return isSWControllerSupported();
        } else {
          // Assume we are in the window context.
          return isWindowControllerSupported();
        }
      }
      /**
       * Checks to see if the required APIs exist.
       */


      function isWindowControllerSupported() {
        return 'indexedDB' in window && indexedDB !== null && navigator.cookieEnabled && 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window && 'fetch' in window && ServiceWorkerRegistration.prototype.hasOwnProperty('showNotification') && PushSubscription.prototype.hasOwnProperty('getKey');
      }
      /**
       * Checks to see if the required APIs exist within SW Context.
       */


      function isSWControllerSupported() {
        return 'indexedDB' in self && indexedDB !== null && 'PushManager' in self && 'Notification' in self && ServiceWorkerRegistration.prototype.hasOwnProperty('showNotification') && PushSubscription.prototype.hasOwnProperty('getKey');
      } //# sourceMappingURL=index.esm.js.map

      /***/

    },

    /***/
    "./node_modules/@firebase/performance/dist/index.cjs.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@firebase/performance/dist/index.cjs.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesFirebasePerformanceDistIndexCjsJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var firebase = __webpack_require__(
      /*! @firebase/app */
      "./node_modules/@firebase/app/dist/index.cjs.js");

      __webpack_require__(
      /*! @firebase/installations */
      "./node_modules/@firebase/installations/dist/index.esm.js");

      var tslib = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");

      var util = __webpack_require__(
      /*! @firebase/util */
      "./node_modules/@firebase/util/dist/index.cjs.js");

      var logger$1 = __webpack_require__(
      /*! @firebase/logger */
      "./node_modules/@firebase/logger/dist/index.esm.js");

      var component = __webpack_require__(
      /*! @firebase/component */
      "./node_modules/@firebase/component/dist/index.cjs.js");

      function _interopDefaultLegacy(e) {
        return e && typeof e === 'object' && 'default' in e ? e : {
          'default': e
        };
      }

      var firebase__default = /*#__PURE__*/_interopDefaultLegacy(firebase);

      var name = "@firebase/performance";
      var version = "0.4.2";
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var SDK_VERSION = version;
      /** The prefix for start User Timing marks used for creating Traces. */

      var TRACE_START_MARK_PREFIX = 'FB-PERF-TRACE-START';
      /** The prefix for stop User Timing marks used for creating Traces. */

      var TRACE_STOP_MARK_PREFIX = 'FB-PERF-TRACE-STOP';
      /** The prefix for User Timing measure used for creating Traces. */

      var TRACE_MEASURE_PREFIX = 'FB-PERF-TRACE-MEASURE';
      /** The prefix for out of the box page load Trace name. */

      var OOB_TRACE_PAGE_LOAD_PREFIX = '_wt_';
      var FIRST_PAINT_COUNTER_NAME = '_fp';
      var FIRST_CONTENTFUL_PAINT_COUNTER_NAME = '_fcp';
      var FIRST_INPUT_DELAY_COUNTER_NAME = '_fid';
      var CONFIG_LOCAL_STORAGE_KEY = '@firebase/performance/config';
      var CONFIG_EXPIRY_LOCAL_STORAGE_KEY = '@firebase/performance/configexpire';
      var SERVICE = 'performance';
      var SERVICE_NAME = 'Performance';
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var _a;

      var ERROR_DESCRIPTION_MAP = (_a = {}, _a["trace started"
      /* TRACE_STARTED_BEFORE */
      ] = 'Trace {$traceName} was started before.', _a["trace stopped"
      /* TRACE_STOPPED_BEFORE */
      ] = 'Trace {$traceName} is not running.', _a["nonpositive trace startTime"
      /* NONPOSITIVE_TRACE_START_TIME */
      ] = 'Trace {$traceName} startTime should be positive.', _a["nonpositive trace duration"
      /* NONPOSITIVE_TRACE_DURATION */
      ] = 'Trace {$traceName} duration should be positive.', _a["no window"
      /* NO_WINDOW */
      ] = 'Window is not available.', _a["no app id"
      /* NO_APP_ID */
      ] = 'App id is not available.', _a["no project id"
      /* NO_PROJECT_ID */
      ] = 'Project id is not available.', _a["no api key"
      /* NO_API_KEY */
      ] = 'Api key is not available.', _a["invalid cc log"
      /* INVALID_CC_LOG */
      ] = 'Attempted to queue invalid cc event', _a["FB not default"
      /* FB_NOT_DEFAULT */
      ] = 'Performance can only start when Firebase app instance is the default one.', _a["RC response not ok"
      /* RC_NOT_OK */
      ] = 'RC response is not ok', _a["invalid attribute name"
      /* INVALID_ATTRIBUTE_NAME */
      ] = 'Attribute name {$attributeName} is invalid.', _a["invalid attribute value"
      /* INVALID_ATTRIBUTE_VALUE */
      ] = 'Attribute value {$attributeValue} is invalid.', _a["invalid custom metric name"
      /* INVALID_CUSTOM_METRIC_NAME */
      ] = 'Custom metric name {$customMetricName} is invalid', _a["invalid String merger input"
      /* INVALID_STRING_MERGER_PARAMETER */
      ] = 'Input for String merger is invalid, contact support team to resolve.', _a);
      var ERROR_FACTORY = new util.ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var consoleLogger = new logger$1.Logger(SERVICE_NAME);
      consoleLogger.logLevel = logger$1.LogLevel.INFO;
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var apiInstance;
      var windowInstance;
      /**
       * This class holds a reference to various browser related objects injected by
       * set methods.
       */

      var Api =
      /** @class */
      function () {
        function Api(window) {
          this.window = window;

          if (!window) {
            throw ERROR_FACTORY.create("no window"
            /* NO_WINDOW */
            );
          }

          this.performance = window.performance;
          this.PerformanceObserver = window.PerformanceObserver;
          this.windowLocation = window.location;
          this.navigator = window.navigator;
          this.document = window.document;

          if (this.navigator && this.navigator.cookieEnabled) {
            // If user blocks cookies on the browser, accessing localStorage will
            // throw an exception.
            this.localStorage = window.localStorage;
          }

          if (window.perfMetrics && window.perfMetrics.onFirstInputDelay) {
            this.onFirstInputDelay = window.perfMetrics.onFirstInputDelay;
          }
        }

        Api.prototype.getUrl = function () {
          // Do not capture the string query part of url.
          return this.windowLocation.href.split('?')[0];
        };

        Api.prototype.mark = function (name) {
          if (!this.performance || !this.performance.mark) {
            return;
          }

          this.performance.mark(name);
        };

        Api.prototype.measure = function (measureName, mark1, mark2) {
          if (!this.performance || !this.performance.measure) {
            return;
          }

          this.performance.measure(measureName, mark1, mark2);
        };

        Api.prototype.getEntriesByType = function (type) {
          if (!this.performance || !this.performance.getEntriesByType) {
            return [];
          }

          return this.performance.getEntriesByType(type);
        };

        Api.prototype.getEntriesByName = function (name) {
          if (!this.performance || !this.performance.getEntriesByName) {
            return [];
          }

          return this.performance.getEntriesByName(name);
        };

        Api.prototype.getTimeOrigin = function () {
          // Polyfill the time origin with performance.timing.navigationStart.
          return this.performance && (this.performance.timeOrigin || this.performance.timing.navigationStart);
        };

        Api.prototype.requiredApisAvailable = function () {
          if (!fetch || !Promise || !this.navigator || !this.navigator.cookieEnabled) {
            consoleLogger.info('Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled.');
            return false;
          }

          if (!util.isIndexedDBAvailable()) {
            consoleLogger.info('IndexedDB is not supported by current browswer');
            return false;
          }

          return true;
        };

        Api.prototype.setupObserver = function (entryType, callback) {
          if (!this.PerformanceObserver) {
            return;
          }

          var observer = new this.PerformanceObserver(function (list) {
            for (var _i = 0, _a = list.getEntries(); _i < _a.length; _i++) {
              var entry = _a[_i]; // `entry` is a PerformanceEntry instance.

              callback(entry);
            }
          }); // Start observing the entry types you care about.

          observer.observe({
            entryTypes: [entryType]
          });
        };

        Api.getInstance = function () {
          if (apiInstance === undefined) {
            apiInstance = new Api(windowInstance);
          }

          return apiInstance;
        };

        return Api;
      }();

      function setupApi(window) {
        windowInstance = window;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function mergeStrings(part1, part2) {
        var sizeDiff = part1.length - part2.length;

        if (sizeDiff < 0 || sizeDiff > 1) {
          throw ERROR_FACTORY.create("invalid String merger input"
          /* INVALID_STRING_MERGER_PARAMETER */
          );
        }

        var resultArray = [];

        for (var i = 0; i < part1.length; i++) {
          resultArray.push(part1.charAt(i));

          if (part2.length > i) {
            resultArray.push(part2.charAt(i));
          }
        }

        return resultArray.join('');
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var settingsServiceInstance;

      var SettingsService =
      /** @class */
      function () {
        function SettingsService() {
          // The variable which controls logging of automatic traces and HTTP/S network monitoring.
          this.instrumentationEnabled = true; // The variable which controls logging of custom traces.

          this.dataCollectionEnabled = true; // Configuration flags set through remote config.

          this.loggingEnabled = false; // Sampling rate between 0 and 1.

          this.tracesSamplingRate = 1;
          this.networkRequestsSamplingRate = 1; // Address of logging service.

          this.logEndPointUrl = 'https://firebaselogging.googleapis.com/v0cc/log?format=json_proto'; // Performance event transport endpoint URL which should be compatible with proto3.
          // New Address for transport service, not configurable via Remote Config.

          this.flTransportEndpointUrl = mergeStrings('hts/frbslgigp.ogepscmv/ieo/eaylg', 'tp:/ieaeogn-agolai.o/1frlglgc/o');
          this.transportKey = mergeStrings('AzSC8r6ReiGqFMyfvgow', 'Iayx0u-XT3vksVM-pIV'); // Source type for performance event logs.

          this.logSource = 462; // Flags which control per session logging of traces and network requests.

          this.logTraceAfterSampling = false;
          this.logNetworkAfterSampling = false; // TTL of config retrieved from remote config in hours.

          this.configTimeToLive = 12;
        }

        SettingsService.prototype.getAppId = function () {
          var appId = this.firebaseAppInstance && this.firebaseAppInstance.options && this.firebaseAppInstance.options.appId;

          if (!appId) {
            throw ERROR_FACTORY.create("no app id"
            /* NO_APP_ID */
            );
          }

          return appId;
        };

        SettingsService.prototype.getProjectId = function () {
          var projectId = this.firebaseAppInstance && this.firebaseAppInstance.options && this.firebaseAppInstance.options.projectId;

          if (!projectId) {
            throw ERROR_FACTORY.create("no project id"
            /* NO_PROJECT_ID */
            );
          }

          return projectId;
        };

        SettingsService.prototype.getApiKey = function () {
          var apiKey = this.firebaseAppInstance && this.firebaseAppInstance.options && this.firebaseAppInstance.options.apiKey;

          if (!apiKey) {
            throw ERROR_FACTORY.create("no api key"
            /* NO_API_KEY */
            );
          }

          return apiKey;
        };

        SettingsService.prototype.getFlTransportFullUrl = function () {
          return this.flTransportEndpointUrl.concat('?key=', this.transportKey);
        };

        SettingsService.getInstance = function () {
          if (settingsServiceInstance === undefined) {
            settingsServiceInstance = new SettingsService();
          }

          return settingsServiceInstance;
        };

        return SettingsService;
      }();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var iid;

      function getIidPromise() {
        var iidPromise = SettingsService.getInstance().installationsService.getId(); // eslint-disable-next-line @typescript-eslint/no-floating-promises

        iidPromise.then(function (iidVal) {
          iid = iidVal;
        });
        return iidPromise;
      } // This method should be used after the iid is retrieved by getIidPromise method.


      function getIid() {
        return iid;
      }

      function getAuthTokenPromise() {
        var authTokenPromise = SettingsService.getInstance().installationsService.getToken(); // eslint-disable-next-line @typescript-eslint/no-floating-promises

        authTokenPromise.then(function (authTokenVal) {});
        return authTokenPromise;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var VisibilityState;

      (function (VisibilityState) {
        VisibilityState[VisibilityState["UNKNOWN"] = 0] = "UNKNOWN";
        VisibilityState[VisibilityState["VISIBLE"] = 1] = "VISIBLE";
        VisibilityState[VisibilityState["HIDDEN"] = 2] = "HIDDEN";
      })(VisibilityState || (VisibilityState = {}));

      var RESERVED_ATTRIBUTE_PREFIXES = ['firebase_', 'google_', 'ga_'];
      var ATTRIBUTE_FORMAT_REGEX = new RegExp('^[a-zA-Z]\\w*$');
      var MAX_ATTRIBUTE_NAME_LENGTH = 40;
      var MAX_ATTRIBUTE_VALUE_LENGTH = 100;

      function getServiceWorkerStatus() {
        var navigator = Api.getInstance().navigator;

        if ('serviceWorker' in navigator) {
          if (navigator.serviceWorker.controller) {
            return 2
            /* CONTROLLED */
            ;
          } else {
              return 3
              /* UNCONTROLLED */
              ;
            }
        } else {
            return 1
            /* UNSUPPORTED */
            ;
          }
      }

      function getVisibilityState() {
        var document = Api.getInstance().document;
        var visibilityState = document.visibilityState;

        switch (visibilityState) {
          case 'visible':
            return VisibilityState.VISIBLE;

          case 'hidden':
            return VisibilityState.HIDDEN;

          default:
            return VisibilityState.UNKNOWN;
        }
      }

      function getEffectiveConnectionType() {
        var navigator = Api.getInstance().navigator;
        var navigatorConnection = navigator.connection;
        var effectiveType = navigatorConnection && navigatorConnection.effectiveType;

        switch (effectiveType) {
          case 'slow-2g':
            return 1
            /* CONNECTION_SLOW_2G */
            ;

          case '2g':
            return 2
            /* CONNECTION_2G */
            ;

          case '3g':
            return 3
            /* CONNECTION_3G */
            ;

          case '4g':
            return 4
            /* CONNECTION_4G */
            ;

          default:
            return 0
            /* UNKNOWN */
            ;
        }
      }

      function isValidCustomAttributeName(name) {
        if (name.length === 0 || name.length > MAX_ATTRIBUTE_NAME_LENGTH) {
          return false;
        }

        var matchesReservedPrefix = RESERVED_ATTRIBUTE_PREFIXES.some(function (prefix) {
          return name.startsWith(prefix);
        });
        return !matchesReservedPrefix && !!name.match(ATTRIBUTE_FORMAT_REGEX);
      }

      function isValidCustomAttributeValue(value) {
        return value.length !== 0 && value.length <= MAX_ATTRIBUTE_VALUE_LENGTH;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var REMOTE_CONFIG_SDK_VERSION = '0.0.1'; // These values will be used if the remote config object is successfully
      // retrieved, but the template does not have these fields.

      var DEFAULT_CONFIGS = {
        loggingEnabled: true
      };
      var FIS_AUTH_PREFIX = 'FIREBASE_INSTALLATIONS_AUTH';

      function getConfig(iid) {
        var config = getStoredConfig();

        if (config) {
          processConfig(config);
          return Promise.resolve();
        }

        return getRemoteConfig(iid).then(processConfig).then(function (config) {
          return storeConfig(config);
        },
        /** Do nothing for error, use defaults set in settings service. */
        function () {});
      }

      function getStoredConfig() {
        var localStorage = Api.getInstance().localStorage;

        if (!localStorage) {
          return;
        }

        var expiryString = localStorage.getItem(CONFIG_EXPIRY_LOCAL_STORAGE_KEY);

        if (!expiryString || !configValid(expiryString)) {
          return;
        }

        var configStringified = localStorage.getItem(CONFIG_LOCAL_STORAGE_KEY);

        if (!configStringified) {
          return;
        }

        try {
          var configResponse = JSON.parse(configStringified);
          return configResponse;
        } catch (_a) {
          return;
        }
      }

      function storeConfig(config) {
        var localStorage = Api.getInstance().localStorage;

        if (!config || !localStorage) {
          return;
        }

        localStorage.setItem(CONFIG_LOCAL_STORAGE_KEY, JSON.stringify(config));
        localStorage.setItem(CONFIG_EXPIRY_LOCAL_STORAGE_KEY, String(Date.now() + SettingsService.getInstance().configTimeToLive * 60 * 60 * 1000));
      }

      var COULD_NOT_GET_CONFIG_MSG = 'Could not fetch config, will use default configs';

      function getRemoteConfig(iid) {
        // Perf needs auth token only to retrieve remote config.
        return getAuthTokenPromise().then(function (authToken) {
          var projectId = SettingsService.getInstance().getProjectId();
          var configEndPoint = "https://firebaseremoteconfig.googleapis.com/v1/projects/" + projectId + "/namespaces/fireperf:fetch?key=" + SettingsService.getInstance().getApiKey();
          var request = new Request(configEndPoint, {
            method: 'POST',
            headers: {
              Authorization: FIS_AUTH_PREFIX + " " + authToken
            },

            /* eslint-disable camelcase */
            body: JSON.stringify({
              app_instance_id: iid,
              app_instance_id_token: authToken,
              app_id: SettingsService.getInstance().getAppId(),
              app_version: SDK_VERSION,
              sdk_version: REMOTE_CONFIG_SDK_VERSION
            })
            /* eslint-enable camelcase */

          });
          return fetch(request).then(function (response) {
            if (response.ok) {
              return response.json();
            } // In case response is not ok. This will be caught by catch.


            throw ERROR_FACTORY.create("RC response not ok"
            /* RC_NOT_OK */
            );
          });
        })["catch"](function () {
          consoleLogger.info(COULD_NOT_GET_CONFIG_MSG);
          return undefined;
        });
      }
      /**
       * Processes config coming either from calling RC or from local storage.
       * This method only runs if call is successful or config in storage
       * is valid.
       */


      function processConfig(config) {
        if (!config) {
          return config;
        }

        var settingsServiceInstance = SettingsService.getInstance();
        var entries = config.entries || {};

        if (entries.fpr_enabled !== undefined) {
          // TODO: Change the assignment of loggingEnabled once the received type is
          // known.
          settingsServiceInstance.loggingEnabled = String(entries.fpr_enabled) === 'true';
        } else {
          // Config retrieved successfully, but there is no fpr_enabled in template.
          // Use secondary configs value.
          settingsServiceInstance.loggingEnabled = DEFAULT_CONFIGS.loggingEnabled;
        }

        if (entries.fpr_log_source) {
          settingsServiceInstance.logSource = Number(entries.fpr_log_source);
        }

        if (entries.fpr_log_endpoint_url) {
          settingsServiceInstance.logEndPointUrl = entries.fpr_log_endpoint_url;
        } // Key from Remote Config has to be non-empty string, otherwsie use local value.


        if (entries.fpr_log_transport_key) {
          settingsServiceInstance.transportKey = entries.fpr_log_transport_key;
        }

        if (entries.fpr_vc_network_request_sampling_rate !== undefined) {
          settingsServiceInstance.networkRequestsSamplingRate = Number(entries.fpr_vc_network_request_sampling_rate);
        }

        if (entries.fpr_vc_trace_sampling_rate !== undefined) {
          settingsServiceInstance.tracesSamplingRate = Number(entries.fpr_vc_trace_sampling_rate);
        } // Set the per session trace and network logging flags.


        settingsServiceInstance.logTraceAfterSampling = shouldLogAfterSampling(settingsServiceInstance.tracesSamplingRate);
        settingsServiceInstance.logNetworkAfterSampling = shouldLogAfterSampling(settingsServiceInstance.networkRequestsSamplingRate);
        return config;
      }

      function configValid(expiry) {
        return Number(expiry) > Date.now();
      }

      function shouldLogAfterSampling(samplingRate) {
        return Math.random() <= samplingRate;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var initializationStatus = 1
      /* notInitialized */
      ;
      var initializationPromise;

      function getInitializationPromise() {
        initializationStatus = 2
        /* initializationPending */
        ;
        initializationPromise = initializationPromise || initializePerf();
        return initializationPromise;
      }

      function isPerfInitialized() {
        return initializationStatus === 3
        /* initialized */
        ;
      }

      function initializePerf() {
        return getDocumentReadyComplete().then(function () {
          return getIidPromise();
        }).then(function (iid) {
          return getConfig(iid);
        }).then(function () {
          return changeInitializationStatus();
        }, function () {
          return changeInitializationStatus();
        });
      }
      /**
       * Returns a promise which resolves whenever the document readystate is complete or
       * immediately if it is called after page load complete.
       */


      function getDocumentReadyComplete() {
        var document = Api.getInstance().document;
        return new Promise(function (resolve) {
          if (document && document.readyState !== 'complete') {
            var handler_1 = function handler_1() {
              if (document.readyState === 'complete') {
                document.removeEventListener('readystatechange', handler_1);
                resolve();
              }
            };

            document.addEventListener('readystatechange', handler_1);
          } else {
            resolve();
          }
        });
      }

      function changeInitializationStatus() {
        initializationStatus = 3
        /* initialized */
        ;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var DEFAULT_SEND_INTERVAL_MS = 10 * 1000;
      var INITIAL_SEND_TIME_DELAY_MS = 5.5 * 1000; // If end point does not work, the call will be tried for these many times.

      var DEFAULT_REMAINING_TRIES = 3;
      var remainingTries = DEFAULT_REMAINING_TRIES;
      /* eslint-enable camelcase */

      var queue = [];
      var isTransportSetup = false;

      function setupTransportService() {
        if (!isTransportSetup) {
          processQueue(INITIAL_SEND_TIME_DELAY_MS);
          isTransportSetup = true;
        }
      }

      function processQueue(timeOffset) {
        setTimeout(function () {
          // If there is no remainingTries left, stop retrying.
          if (remainingTries === 0) {
            return;
          } // If there are no events to process, wait for DEFAULT_SEND_INTERVAL_MS and try again.


          if (!queue.length) {
            return processQueue(DEFAULT_SEND_INTERVAL_MS);
          }

          dispatchQueueEvents();
        }, timeOffset);
      }

      function dispatchQueueEvents() {
        // Capture a snapshot of the queue and empty the "official queue".
        var staged = tslib.__spreadArrays(queue);

        queue = [];
        /* eslint-disable camelcase */
        // We will pass the JSON serialized event to the backend.

        var log_event = staged.map(function (evt) {
          return {
            source_extension_json_proto3: evt.message,
            event_time_ms: String(evt.eventTime)
          };
        });
        var data = {
          request_time_ms: String(Date.now()),
          client_info: {
            client_type: 1,
            js_client_info: {}
          },
          log_source: SettingsService.getInstance().logSource,
          log_event: log_event
        };
        /* eslint-enable camelcase */

        sendEventsToFl(data, staged)["catch"](function () {
          // If the request fails for some reason, add the events that were attempted
          // back to the primary queue to retry later.
          queue = tslib.__spreadArrays(staged, queue);
          remainingTries--;
          consoleLogger.info("Tries left: " + remainingTries + ".");
          processQueue(DEFAULT_SEND_INTERVAL_MS);
        });
      }

      function sendEventsToFl(data, staged) {
        return postToFlEndpoint(data).then(function (res) {
          if (!res.ok) {
            consoleLogger.info('Call to Firebase backend failed.');
          }

          return res.json();
        }).then(function (res) {
          // Find the next call wait time from the response.
          var transportWait = Number(res.nextRequestWaitMillis);
          var requestOffset = DEFAULT_SEND_INTERVAL_MS;

          if (!isNaN(transportWait)) {
            requestOffset = Math.max(transportWait, requestOffset);
          } // Delete request if response include RESPONSE_ACTION_UNKNOWN or DELETE_REQUEST action.
          // Otherwise, retry request using normal scheduling if response include RETRY_REQUEST_LATER.


          var logResponseDetails = res.logResponseDetails;

          if (Array.isArray(logResponseDetails) && logResponseDetails.length > 0 && logResponseDetails[0].responseAction === 'RETRY_REQUEST_LATER') {
            queue = tslib.__spreadArrays(staged, queue);
            consoleLogger.info("Retry transport request later.");
          }

          remainingTries = DEFAULT_REMAINING_TRIES; // Schedule the next process.

          processQueue(requestOffset);
        });
      }

      function postToFlEndpoint(data) {
        var flTransportFullUrl = SettingsService.getInstance().getFlTransportFullUrl();
        return fetch(flTransportFullUrl, {
          method: 'POST',
          body: JSON.stringify(data)
        });
      }

      function addToQueue(evt) {
        if (!evt.eventTime || !evt.message) {
          throw ERROR_FACTORY.create("invalid cc log"
          /* INVALID_CC_LOG */
          );
        } // Add the new event to the queue.


        queue = tslib.__spreadArrays(queue, [evt]);
      }
      /** Log handler for cc service to send the performance logs to the server. */


      function transportHandler( // eslint-disable-next-line @typescript-eslint/no-explicit-any
      serializer) {
        return function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          var message = serializer.apply(void 0, args);
          addToQueue({
            message: message,
            eventTime: Date.now()
          });
        };
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /* eslint-enble camelcase */


      var logger; // This method is not called before initialization.

      function sendLog(resource, resourceType) {
        if (!logger) {
          logger = transportHandler(serializer);
        }

        logger(resource, resourceType);
      }

      function logTrace(trace) {
        var settingsService = SettingsService.getInstance(); // Do not log if trace is auto generated and instrumentation is disabled.

        if (!settingsService.instrumentationEnabled && trace.isAuto) {
          return;
        } // Do not log if trace is custom and data collection is disabled.


        if (!settingsService.dataCollectionEnabled && !trace.isAuto) {
          return;
        } // Do not log if required apis are not available.


        if (!Api.getInstance().requiredApisAvailable()) {
          return;
        } // Only log the page load auto traces if page is visible.


        if (trace.isAuto && getVisibilityState() !== VisibilityState.VISIBLE) {
          return;
        }

        if (isPerfInitialized()) {
          sendTraceLog(trace);
        } else {
          // Custom traces can be used before the initialization but logging
          // should wait until after.
          getInitializationPromise().then(function () {
            return sendTraceLog(trace);
          }, function () {
            return sendTraceLog(trace);
          });
        }
      }

      function sendTraceLog(trace) {
        if (!getIid()) {
          return;
        }

        var settingsService = SettingsService.getInstance();

        if (!settingsService.loggingEnabled || !settingsService.logTraceAfterSampling) {
          return;
        }

        setTimeout(function () {
          return sendLog(trace, 1
          /* Trace */
          );
        }, 0);
      }

      function logNetworkRequest(networkRequest) {
        var settingsService = SettingsService.getInstance(); // Do not log network requests if instrumentation is disabled.

        if (!settingsService.instrumentationEnabled) {
          return;
        } // Do not log the js sdk's call to transport service domain to avoid unnecessary cycle.
        // Need to blacklist both old and new endpoints to avoid migration gap.


        var networkRequestUrl = networkRequest.url; // Blacklist old log endpoint and new transport endpoint.
        // Because Performance SDK doesn't instrument requests sent from SDK itself.

        var logEndpointUrl = settingsService.logEndPointUrl.split('?')[0];
        var flEndpointUrl = settingsService.flTransportEndpointUrl.split('?')[0];

        if (networkRequestUrl === logEndpointUrl || networkRequestUrl === flEndpointUrl) {
          return;
        }

        if (!settingsService.loggingEnabled || !settingsService.logNetworkAfterSampling) {
          return;
        }

        setTimeout(function () {
          return sendLog(networkRequest, 0
          /* NetworkRequest */
          );
        }, 0);
      }

      function serializer(resource, resourceType) {
        if (resourceType === 0
        /* NetworkRequest */
        ) {
            return serializeNetworkRequest(resource);
          }

        return serializeTrace(resource);
      }

      function serializeNetworkRequest(networkRequest) {
        var networkRequestMetric = {
          url: networkRequest.url,
          http_method: networkRequest.httpMethod || 0,
          http_response_code: 200,
          response_payload_bytes: networkRequest.responsePayloadBytes,
          client_start_time_us: networkRequest.startTimeUs,
          time_to_response_initiated_us: networkRequest.timeToResponseInitiatedUs,
          time_to_response_completed_us: networkRequest.timeToResponseCompletedUs
        };
        var perfMetric = {
          application_info: getApplicationInfo(),
          network_request_metric: networkRequestMetric
        };
        return JSON.stringify(perfMetric);
      }

      function serializeTrace(trace) {
        var traceMetric = {
          name: trace.name,
          is_auto: trace.isAuto,
          client_start_time_us: trace.startTimeUs,
          duration_us: trace.durationUs
        };

        if (Object.keys(trace.counters).length !== 0) {
          traceMetric.counters = trace.counters;
        }

        var customAttributes = trace.getAttributes();

        if (Object.keys(customAttributes).length !== 0) {
          traceMetric.custom_attributes = customAttributes;
        }

        var perfMetric = {
          application_info: getApplicationInfo(),
          trace_metric: traceMetric
        };
        return JSON.stringify(perfMetric);
      }

      function getApplicationInfo() {
        return {
          google_app_id: SettingsService.getInstance().getAppId(),
          app_instance_id: getIid(),
          web_app_info: {
            sdk_version: SDK_VERSION,
            page_url: Api.getInstance().getUrl(),
            service_worker_status: getServiceWorkerStatus(),
            visibility_state: getVisibilityState(),
            effective_connection_type: getEffectiveConnectionType()
          },
          application_process_state: 0
        };
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var MAX_METRIC_NAME_LENGTH = 100;
      var RESERVED_AUTO_PREFIX = '_';
      var oobMetrics = [FIRST_PAINT_COUNTER_NAME, FIRST_CONTENTFUL_PAINT_COUNTER_NAME, FIRST_INPUT_DELAY_COUNTER_NAME];
      /**
       * Returns true if the metric is custom and does not start with reserved prefix, or if
       * the metric is one of out of the box page load trace metrics.
       */

      function isValidMetricName(name, traceName) {
        if (name.length === 0 || name.length > MAX_METRIC_NAME_LENGTH) {
          return false;
        }

        return traceName && traceName.startsWith(OOB_TRACE_PAGE_LOAD_PREFIX) && oobMetrics.indexOf(name) > -1 || !name.startsWith(RESERVED_AUTO_PREFIX);
      }
      /**
       * Converts the provided value to an integer value to be used in case of a metric.
       * @param providedValue Provided number value of the metric that needs to be converted to an integer.
       *
       * @returns Converted integer number to be set for the metric.
       */


      function convertMetricValueToInteger(providedValue) {
        var valueAsInteger = Math.floor(providedValue);

        if (valueAsInteger < providedValue) {
          consoleLogger.info("Metric value should be an Integer, setting the value as : " + valueAsInteger + ".");
        }

        return valueAsInteger;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var Trace =
      /** @class */
      function () {
        /**
         * @param name The name of the trace.
         * @param isAuto If the trace is auto-instrumented.
         * @param traceMeasureName The name of the measure marker in user timing specification. This field
         * is only set when the trace is built for logging when the user directly uses the user timing
         * api (performance.mark and performance.measure).
         */
        function Trace(name, isAuto, traceMeasureName) {
          if (isAuto === void 0) {
            isAuto = false;
          }

          this.name = name;
          this.isAuto = isAuto;
          this.state = 1
          /* UNINITIALIZED */
          ;
          this.customAttributes = {};
          this.counters = {};
          this.api = Api.getInstance();
          this.randomId = Math.floor(Math.random() * 1000000);

          if (!this.isAuto) {
            this.traceStartMark = TRACE_START_MARK_PREFIX + "-" + this.randomId + "-" + this.name;
            this.traceStopMark = TRACE_STOP_MARK_PREFIX + "-" + this.randomId + "-" + this.name;
            this.traceMeasure = traceMeasureName || TRACE_MEASURE_PREFIX + "-" + this.randomId + "-" + this.name;

            if (traceMeasureName) {
              // For the case of direct user timing traces, no start stop will happen. The measure object
              // is already available.
              this.calculateTraceMetrics();
            }
          }
        }
        /**
         * Starts a trace. The measurement of the duration starts at this point.
         */


        Trace.prototype.start = function () {
          if (this.state !== 1
          /* UNINITIALIZED */
          ) {
              throw ERROR_FACTORY.create("trace started"
              /* TRACE_STARTED_BEFORE */
              , {
                traceName: this.name
              });
            }

          this.api.mark(this.traceStartMark);
          this.state = 2
          /* RUNNING */
          ;
        };
        /**
         * Stops the trace. The measurement of the duration of the trace stops at this point and trace
         * is logged.
         */


        Trace.prototype.stop = function () {
          if (this.state !== 2
          /* RUNNING */
          ) {
              throw ERROR_FACTORY.create("trace stopped"
              /* TRACE_STOPPED_BEFORE */
              , {
                traceName: this.name
              });
            }

          this.state = 3
          /* TERMINATED */
          ;
          this.api.mark(this.traceStopMark);
          this.api.measure(this.traceMeasure, this.traceStartMark, this.traceStopMark);
          this.calculateTraceMetrics();
          logTrace(this);
        };
        /**
         * Records a trace with predetermined values. If this method is used a trace is created and logged
         * directly. No need to use start and stop methods.
         * @param startTime Trace start time since epoch in millisec
         * @param duration The duraction of the trace in millisec
         * @param options An object which can optionally hold maps of custom metrics and custom attributes
         */


        Trace.prototype.record = function (startTime, duration, options) {
          if (startTime <= 0) {
            throw ERROR_FACTORY.create("nonpositive trace startTime"
            /* NONPOSITIVE_TRACE_START_TIME */
            , {
              traceName: this.name
            });
          }

          if (duration <= 0) {
            throw ERROR_FACTORY.create("nonpositive trace duration"
            /* NONPOSITIVE_TRACE_DURATION */
            , {
              traceName: this.name
            });
          }

          this.durationUs = Math.floor(duration * 1000);
          this.startTimeUs = Math.floor(startTime * 1000);

          if (options && options.attributes) {
            this.customAttributes = tslib.__assign({}, options.attributes);
          }

          if (options && options.metrics) {
            for (var _i = 0, _a = Object.keys(options.metrics); _i < _a.length; _i++) {
              var metric = _a[_i];

              if (!isNaN(Number(options.metrics[metric]))) {
                this.counters[metric] = Number(Math.floor(options.metrics[metric]));
              }
            }
          }

          logTrace(this);
        };
        /**
         * Increments a custom metric by a certain number or 1 if number not specified. Will create a new
         * custom metric if one with the given name does not exist. The value will be floored down to an
         * integer.
         * @param counter Name of the custom metric
         * @param numAsInteger Increment by value
         */


        Trace.prototype.incrementMetric = function (counter, numAsInteger) {
          if (numAsInteger === void 0) {
            numAsInteger = 1;
          }

          if (this.counters[counter] === undefined) {
            this.putMetric(counter, numAsInteger);
          } else {
            this.putMetric(counter, this.counters[counter] + numAsInteger);
          }
        };
        /**
         * Sets a custom metric to a specified value. Will create a new custom metric if one with the
         * given name does not exist. The value will be floored down to an integer.
         * @param counter Name of the custom metric
         * @param numAsInteger Set custom metric to this value
         */


        Trace.prototype.putMetric = function (counter, numAsInteger) {
          if (isValidMetricName(counter, this.name)) {
            this.counters[counter] = convertMetricValueToInteger(numAsInteger);
          } else {
            throw ERROR_FACTORY.create("invalid custom metric name"
            /* INVALID_CUSTOM_METRIC_NAME */
            , {
              customMetricName: counter
            });
          }
        };
        /**
         * Returns the value of the custom metric by that name. If a custom metric with that name does
         * not exist will return zero.
         * @param counter
         */


        Trace.prototype.getMetric = function (counter) {
          return this.counters[counter] || 0;
        };
        /**
         * Sets a custom attribute of a trace to a certain value.
         * @param attr
         * @param value
         */


        Trace.prototype.putAttribute = function (attr, value) {
          var isValidName = isValidCustomAttributeName(attr);
          var isValidValue = isValidCustomAttributeValue(value);

          if (isValidName && isValidValue) {
            this.customAttributes[attr] = value;
            return;
          } // Throw appropriate error when the attribute name or value is invalid.


          if (!isValidName) {
            throw ERROR_FACTORY.create("invalid attribute name"
            /* INVALID_ATTRIBUTE_NAME */
            , {
              attributeName: attr
            });
          }

          if (!isValidValue) {
            throw ERROR_FACTORY.create("invalid attribute value"
            /* INVALID_ATTRIBUTE_VALUE */
            , {
              attributeValue: value
            });
          }
        };
        /**
         * Retrieves the value a custom attribute of a trace is set to.
         * @param attr
         */


        Trace.prototype.getAttribute = function (attr) {
          return this.customAttributes[attr];
        };

        Trace.prototype.removeAttribute = function (attr) {
          if (this.customAttributes[attr] === undefined) {
            return;
          }

          delete this.customAttributes[attr];
        };

        Trace.prototype.getAttributes = function () {
          return tslib.__assign({}, this.customAttributes);
        };

        Trace.prototype.setStartTime = function (startTime) {
          this.startTimeUs = startTime;
        };

        Trace.prototype.setDuration = function (duration) {
          this.durationUs = duration;
        };
        /**
         * Calculates and assigns the duration and start time of the trace using the measure performance
         * entry.
         */


        Trace.prototype.calculateTraceMetrics = function () {
          var perfMeasureEntries = this.api.getEntriesByName(this.traceMeasure);
          var perfMeasureEntry = perfMeasureEntries && perfMeasureEntries[0];

          if (perfMeasureEntry) {
            this.durationUs = Math.floor(perfMeasureEntry.duration * 1000);
            this.startTimeUs = Math.floor((perfMeasureEntry.startTime + this.api.getTimeOrigin()) * 1000);
          }
        };
        /**
         * @param navigationTimings A single element array which contains the navigationTIming object of
         * the page load
         * @param paintTimings A array which contains paintTiming object of the page load
         * @param firstInputDelay First input delay in millisec
         */


        Trace.createOobTrace = function (navigationTimings, paintTimings, firstInputDelay) {
          var route = Api.getInstance().getUrl();

          if (!route) {
            return;
          }

          var trace = new Trace(OOB_TRACE_PAGE_LOAD_PREFIX + route, true);
          var timeOriginUs = Math.floor(Api.getInstance().getTimeOrigin() * 1000);
          trace.setStartTime(timeOriginUs); // navigationTimings includes only one element.

          if (navigationTimings && navigationTimings[0]) {
            trace.setDuration(Math.floor(navigationTimings[0].duration * 1000));
            trace.putMetric('domInteractive', Math.floor(navigationTimings[0].domInteractive * 1000));
            trace.putMetric('domContentLoadedEventEnd', Math.floor(navigationTimings[0].domContentLoadedEventEnd * 1000));
            trace.putMetric('loadEventEnd', Math.floor(navigationTimings[0].loadEventEnd * 1000));
          }

          var FIRST_PAINT = 'first-paint';
          var FIRST_CONTENTFUL_PAINT = 'first-contentful-paint';

          if (paintTimings) {
            var firstPaint = paintTimings.find(function (paintObject) {
              return paintObject.name === FIRST_PAINT;
            });

            if (firstPaint && firstPaint.startTime) {
              trace.putMetric(FIRST_PAINT_COUNTER_NAME, Math.floor(firstPaint.startTime * 1000));
            }

            var firstContentfulPaint = paintTimings.find(function (paintObject) {
              return paintObject.name === FIRST_CONTENTFUL_PAINT;
            });

            if (firstContentfulPaint && firstContentfulPaint.startTime) {
              trace.putMetric(FIRST_CONTENTFUL_PAINT_COUNTER_NAME, Math.floor(firstContentfulPaint.startTime * 1000));
            }

            if (firstInputDelay) {
              trace.putMetric(FIRST_INPUT_DELAY_COUNTER_NAME, Math.floor(firstInputDelay * 1000));
            }
          }

          logTrace(trace);
        };

        Trace.createUserTimingTrace = function (measureName) {
          var trace = new Trace(measureName, false, measureName);
          logTrace(trace);
        };

        return Trace;
      }();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function createNetworkRequestEntry(entry) {
        var performanceEntry = entry;

        if (!performanceEntry || performanceEntry.responseStart === undefined) {
          return;
        }

        var timeOrigin = Api.getInstance().getTimeOrigin();
        var startTimeUs = Math.floor((performanceEntry.startTime + timeOrigin) * 1000);
        var timeToResponseInitiatedUs = performanceEntry.responseStart ? Math.floor((performanceEntry.responseStart - performanceEntry.startTime) * 1000) : undefined;
        var timeToResponseCompletedUs = Math.floor((performanceEntry.responseEnd - performanceEntry.startTime) * 1000); // Remove the query params from logged network request url.

        var url = performanceEntry.name && performanceEntry.name.split('?')[0];
        var networkRequest = {
          url: url,
          responsePayloadBytes: performanceEntry.transferSize,
          startTimeUs: startTimeUs,
          timeToResponseInitiatedUs: timeToResponseInitiatedUs,
          timeToResponseCompletedUs: timeToResponseCompletedUs
        };
        logNetworkRequest(networkRequest);
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var FID_WAIT_TIME_MS = 5000;

      function setupOobResources() {
        // Do not initialize unless iid is available.
        if (!getIid()) {
          return;
        } // The load event might not have fired yet, and that means performance navigation timing
        // object has a duration of 0. The setup should run after all current tasks in js queue.


        setTimeout(function () {
          return setupOobTraces();
        }, 0);
        setTimeout(function () {
          return setupNetworkRequests();
        }, 0);
        setTimeout(function () {
          return setupUserTimingTraces();
        }, 0);
      }

      function setupNetworkRequests() {
        var api = Api.getInstance();
        var resources = api.getEntriesByType('resource');

        for (var _i = 0, resources_1 = resources; _i < resources_1.length; _i++) {
          var resource = resources_1[_i];
          createNetworkRequestEntry(resource);
        }

        api.setupObserver('resource', createNetworkRequestEntry);
      }

      function setupOobTraces() {
        var api = Api.getInstance();
        var navigationTimings = api.getEntriesByType('navigation');
        var paintTimings = api.getEntriesByType('paint'); // If First Input Desly polyfill is added to the page, report the fid value.
        // https://github.com/GoogleChromeLabs/first-input-delay

        if (api.onFirstInputDelay) {
          // If the fid call back is not called for certain time, continue without it.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          var timeoutId_1 = setTimeout(function () {
            Trace.createOobTrace(navigationTimings, paintTimings);
            timeoutId_1 = undefined;
          }, FID_WAIT_TIME_MS);
          api.onFirstInputDelay(function (fid) {
            if (timeoutId_1) {
              clearTimeout(timeoutId_1);
              Trace.createOobTrace(navigationTimings, paintTimings, fid);
            }
          });
        } else {
          Trace.createOobTrace(navigationTimings, paintTimings);
        }
      }

      function setupUserTimingTraces() {
        var api = Api.getInstance(); // Run through the measure performance entries collected up to this point.

        var measures = api.getEntriesByType('measure');

        for (var _i = 0, measures_1 = measures; _i < measures_1.length; _i++) {
          var measure = measures_1[_i];
          createUserTimingTrace(measure);
        } // Setup an observer to capture the measures from this point on.


        api.setupObserver('measure', createUserTimingTrace);
      }

      function createUserTimingTrace(measure) {
        var measureName = measure.name; // Do not create a trace, if the user timing marks and measures are created by the sdk itself.

        if (measureName.substring(0, TRACE_MEASURE_PREFIX.length) === TRACE_MEASURE_PREFIX) {
          return;
        }

        Trace.createUserTimingTrace(measureName);
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var PerformanceController =
      /** @class */
      function () {
        function PerformanceController(app) {
          this.app = app;

          if (Api.getInstance().requiredApisAvailable()) {
            util.validateIndexedDBOpenable().then(function (isAvailable) {
              if (isAvailable) {
                setupTransportService();
                getInitializationPromise().then(setupOobResources, setupOobResources);
              }
            })["catch"](function (error) {
              consoleLogger.info("Environment doesn't support IndexedDB: " + error);
            });
          }
        }

        PerformanceController.prototype.trace = function (name) {
          return new Trace(name);
        };

        Object.defineProperty(PerformanceController.prototype, "instrumentationEnabled", {
          get: function get() {
            return SettingsService.getInstance().instrumentationEnabled;
          },
          set: function set(val) {
            SettingsService.getInstance().instrumentationEnabled = val;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(PerformanceController.prototype, "dataCollectionEnabled", {
          get: function get() {
            return SettingsService.getInstance().dataCollectionEnabled;
          },
          set: function set(val) {
            SettingsService.getInstance().dataCollectionEnabled = val;
          },
          enumerable: false,
          configurable: true
        });
        return PerformanceController;
      }();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var DEFAULT_ENTRY_NAME = '[DEFAULT]';

      function registerPerformance(instance) {
        var factoryMethod = function factoryMethod(app, installations) {
          if (app.name !== DEFAULT_ENTRY_NAME) {
            throw ERROR_FACTORY.create("FB not default"
            /* FB_NOT_DEFAULT */
            );
          }

          if (typeof window === 'undefined') {
            throw ERROR_FACTORY.create("no window"
            /* NO_WINDOW */
            );
          }

          setupApi(window);
          SettingsService.getInstance().firebaseAppInstance = app;
          SettingsService.getInstance().installationsService = installations;
          return new PerformanceController(app);
        }; // Register performance with firebase-app.


        instance.INTERNAL.registerComponent(new component.Component('performance', function (container) {
          /* Dependencies */
          // getImmediate for FirebaseApp will always succeed
          var app = container.getProvider('app').getImmediate(); // The following call will always succeed because perf has `import '@firebase/installations'`

          var installations = container.getProvider('installations').getImmediate();
          return factoryMethod(app, installations);
        }, "PUBLIC"
        /* PUBLIC */
        ));
        instance.registerVersion(name, version);
      }

      registerPerformance(firebase__default['default']);
      exports.registerPerformance = registerPerformance; //# sourceMappingURL=index.cjs.js.map

      /***/
    },

    /***/
    "./node_modules/@firebase/remote-config/dist/index.cjs.js":
    /*!****************************************************************!*\
      !*** ./node_modules/@firebase/remote-config/dist/index.cjs.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesFirebaseRemoteConfigDistIndexCjsJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var firebase = __webpack_require__(
      /*! @firebase/app */
      "./node_modules/@firebase/app/dist/index.cjs.js");

      __webpack_require__(
      /*! @firebase/installations */
      "./node_modules/@firebase/installations/dist/index.esm.js");

      var tslib = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");

      var util = __webpack_require__(
      /*! @firebase/util */
      "./node_modules/@firebase/util/dist/index.cjs.js");

      var logger = __webpack_require__(
      /*! @firebase/logger */
      "./node_modules/@firebase/logger/dist/index.esm.js");

      var component = __webpack_require__(
      /*! @firebase/component */
      "./node_modules/@firebase/component/dist/index.cjs.js");

      function _interopDefaultLegacy(e) {
        return e && typeof e === 'object' && 'default' in e ? e : {
          'default': e
        };
      }

      var firebase__default = /*#__PURE__*/_interopDefaultLegacy(firebase);
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Implements the {@link RemoteConfigClient} abstraction with success response caching.
       *
       * <p>Comparable to the browser's Cache API for responses, but the Cache API requires a Service
       * Worker, which requires HTTPS, which would significantly complicate SDK installation. Also, the
       * Cache API doesn't support matching entries by time.
       */


      var CachingClient =
      /** @class */
      function () {
        function CachingClient(client, storage, storageCache, logger) {
          this.client = client;
          this.storage = storage;
          this.storageCache = storageCache;
          this.logger = logger;
        }
        /**
         * Returns true if the age of the cached fetched configs is less than or equal to
         * {@link Settings#minimumFetchIntervalInSeconds}.
         *
         * <p>This is comparable to passing `headers = { 'Cache-Control': max-age <maxAge> }` to the
         * native Fetch API.
         *
         * <p>Visible for testing.
         */


        CachingClient.prototype.isCachedDataFresh = function (cacheMaxAgeMillis, lastSuccessfulFetchTimestampMillis) {
          // Cache can only be fresh if it's populated.
          if (!lastSuccessfulFetchTimestampMillis) {
            this.logger.debug('Config fetch cache check. Cache unpopulated.');
            return false;
          } // Calculates age of cache entry.


          var cacheAgeMillis = Date.now() - lastSuccessfulFetchTimestampMillis;
          var isCachedDataFresh = cacheAgeMillis <= cacheMaxAgeMillis;
          this.logger.debug('Config fetch cache check.' + (" Cache age millis: " + cacheAgeMillis + ".") + (" Cache max age millis (minimumFetchIntervalMillis setting): " + cacheMaxAgeMillis + ".") + (" Is cache hit: " + isCachedDataFresh + "."));
          return isCachedDataFresh;
        };

        CachingClient.prototype.fetch = function (request) {
          return tslib.__awaiter(this, void 0, void 0, function () {
            var _a, lastSuccessfulFetchTimestampMillis, lastSuccessfulFetchResponse, response, storageOperations;

            return tslib.__generator(this, function (_b) {
              switch (_b.label) {
                case 0:
                  return [4
                  /*yield*/
                  , Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(), this.storage.getLastSuccessfulFetchResponse()])];

                case 1:
                  _a = _b.sent(), lastSuccessfulFetchTimestampMillis = _a[0], lastSuccessfulFetchResponse = _a[1]; // Exits early on cache hit.

                  if (lastSuccessfulFetchResponse && this.isCachedDataFresh(request.cacheMaxAgeMillis, lastSuccessfulFetchTimestampMillis)) {
                    return [2
                    /*return*/
                    , lastSuccessfulFetchResponse];
                  } // Deviates from pure decorator by not honoring a passed ETag since we don't have a public API
                  // that allows the caller to pass an ETag.


                  request.eTag = lastSuccessfulFetchResponse && lastSuccessfulFetchResponse.eTag;
                  return [4
                  /*yield*/
                  , this.client.fetch(request)];

                case 2:
                  response = _b.sent();
                  storageOperations = [// Uses write-through cache for consistency with synchronous public API.
                  this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];

                  if (response.status === 200) {
                    // Caches response only if it has changed, ie non-304 responses.
                    storageOperations.push(this.storage.setLastSuccessfulFetchResponse(response));
                  }

                  return [4
                  /*yield*/
                  , Promise.all(storageOperations)];

                case 3:
                  _b.sent();

                  return [2
                  /*return*/
                  , response];
              }
            });
          });
        };

        return CachingClient;
      }();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var _a;

      var ERROR_DESCRIPTION_MAP = (_a = {}, _a["registration-window"
      /* REGISTRATION_WINDOW */
      ] = 'Undefined window object. This SDK only supports usage in a browser environment.', _a["registration-project-id"
      /* REGISTRATION_PROJECT_ID */
      ] = 'Undefined project identifier. Check Firebase app initialization.', _a["registration-api-key"
      /* REGISTRATION_API_KEY */
      ] = 'Undefined API key. Check Firebase app initialization.', _a["registration-app-id"
      /* REGISTRATION_APP_ID */
      ] = 'Undefined app identifier. Check Firebase app initialization.', _a["storage-open"
      /* STORAGE_OPEN */
      ] = 'Error thrown when opening storage. Original error: {$originalErrorMessage}.', _a["storage-get"
      /* STORAGE_GET */
      ] = 'Error thrown when reading from storage. Original error: {$originalErrorMessage}.', _a["storage-set"
      /* STORAGE_SET */
      ] = 'Error thrown when writing to storage. Original error: {$originalErrorMessage}.', _a["storage-delete"
      /* STORAGE_DELETE */
      ] = 'Error thrown when deleting from storage. Original error: {$originalErrorMessage}.', _a["fetch-client-network"
      /* FETCH_NETWORK */
      ] = 'Fetch client failed to connect to a network. Check Internet connection.' + ' Original error: {$originalErrorMessage}.', _a["fetch-timeout"
      /* FETCH_TIMEOUT */
      ] = 'The config fetch request timed out. ' + ' Configure timeout using "fetchTimeoutMillis" SDK setting.', _a["fetch-throttle"
      /* FETCH_THROTTLE */
      ] = 'The config fetch request timed out while in an exponential backoff state.' + ' Configure timeout using "fetchTimeoutMillis" SDK setting.' + ' Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.', _a["fetch-client-parse"
      /* FETCH_PARSE */
      ] = 'Fetch client could not parse response.' + ' Original error: {$originalErrorMessage}.', _a["fetch-status"
      /* FETCH_STATUS */
      ] = 'Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.', _a);
      var ERROR_FACTORY = new util.ErrorFactory('remoteconfig'
      /* service */
      , 'Remote Config'
      /* service name */
      , ERROR_DESCRIPTION_MAP); // Note how this is like typeof/instanceof, but for ErrorCode.

      function hasErrorCode(e, errorCode) {
        return e instanceof util.FirebaseError && e.code.indexOf(errorCode) !== -1;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Attempts to get the most accurate browser language setting.
       *
       * <p>Adapted from getUserLanguage in packages/auth/src/utils.js for TypeScript.
       *
       * <p>Defers default language specification to server logic for consistency.
       *
       * @param navigatorLanguage Enables tests to override read-only {@link NavigatorLanguage}.
       */


      function getUserLanguage(navigatorLanguage) {
        if (navigatorLanguage === void 0) {
          navigatorLanguage = navigator;
        }

        return (// Most reliable, but only supported in Chrome/Firefox.
          navigatorLanguage.languages && navigatorLanguage.languages[0] || // Supported in most browsers, but returns the language of the browser
          // UI, not the language set in browser settings.
          navigatorLanguage.language // Polyfill otherwise.

        );
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Implements the Client abstraction for the Remote Config REST API.
       */


      var RestClient =
      /** @class */
      function () {
        function RestClient(firebaseInstallations, sdkVersion, namespace, projectId, apiKey, appId) {
          this.firebaseInstallations = firebaseInstallations;
          this.sdkVersion = sdkVersion;
          this.namespace = namespace;
          this.projectId = projectId;
          this.apiKey = apiKey;
          this.appId = appId;
        }
        /**
         * Fetches from the Remote Config REST API.
         *
         * @throws a {@link ErrorCode.FETCH_NETWORK} error if {@link GlobalFetch#fetch} can't
         * connect to the network.
         * @throws a {@link ErrorCode.FETCH_PARSE} error if {@link Response#json} can't parse the
         * fetch response.
         * @throws a {@link ErrorCode.FETCH_STATUS} error if the service returns an HTTP error status.
         */


        RestClient.prototype.fetch = function (request) {
          return tslib.__awaiter(this, void 0, void 0, function () {
            var _a, installationId, installationToken, urlBase, url, headers, requestBody, options, fetchPromise, timeoutPromise, response, originalError_1, errorCode, status, responseEtag, config, state, responseBody, originalError_2;

            return tslib.__generator(this, function (_b) {
              switch (_b.label) {
                case 0:
                  return [4
                  /*yield*/
                  , Promise.all([this.firebaseInstallations.getId(), this.firebaseInstallations.getToken()])];

                case 1:
                  _a = _b.sent(), installationId = _a[0], installationToken = _a[1];
                  urlBase = window.FIREBASE_REMOTE_CONFIG_URL_BASE || 'https://firebaseremoteconfig.googleapis.com';
                  url = urlBase + "/v1/projects/" + this.projectId + "/namespaces/" + this.namespace + ":fetch?key=" + this.apiKey;
                  headers = {
                    'Content-Type': 'application/json',
                    'Content-Encoding': 'gzip',
                    // Deviates from pure decorator by not passing max-age header since we don't currently have
                    // service behavior using that header.
                    'If-None-Match': request.eTag || '*'
                  };
                  requestBody = {
                    /* eslint-disable camelcase */
                    sdk_version: this.sdkVersion,
                    app_instance_id: installationId,
                    app_instance_id_token: installationToken,
                    app_id: this.appId,
                    language_code: getUserLanguage()
                    /* eslint-enable camelcase */

                  };
                  options = {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(requestBody)
                  };
                  fetchPromise = fetch(url, options);
                  timeoutPromise = new Promise(function (_resolve, reject) {
                    // Maps async event listener to Promise API.
                    request.signal.addEventListener(function () {
                      // Emulates https://heycam.github.io/webidl/#aborterror
                      var error = new Error('The operation was aborted.');
                      error.name = 'AbortError';
                      reject(error);
                    });
                  });
                  _b.label = 2;

                case 2:
                  _b.trys.push([2, 5,, 6]);

                  return [4
                  /*yield*/
                  , Promise.race([fetchPromise, timeoutPromise])];

                case 3:
                  _b.sent();

                  return [4
                  /*yield*/
                  , fetchPromise];

                case 4:
                  response = _b.sent();
                  return [3
                  /*break*/
                  , 6];

                case 5:
                  originalError_1 = _b.sent();
                  errorCode = "fetch-client-network"
                  /* FETCH_NETWORK */
                  ;

                  if (originalError_1.name === 'AbortError') {
                    errorCode = "fetch-timeout"
                    /* FETCH_TIMEOUT */
                    ;
                  }

                  throw ERROR_FACTORY.create(errorCode, {
                    originalErrorMessage: originalError_1.message
                  });

                case 6:
                  status = response.status;
                  responseEtag = response.headers.get('ETag') || undefined;
                  if (!(response.status === 200)) return [3
                  /*break*/
                  , 11];
                  responseBody = void 0;
                  _b.label = 7;

                case 7:
                  _b.trys.push([7, 9,, 10]);

                  return [4
                  /*yield*/
                  , response.json()];

                case 8:
                  responseBody = _b.sent();
                  return [3
                  /*break*/
                  , 10];

                case 9:
                  originalError_2 = _b.sent();
                  throw ERROR_FACTORY.create("fetch-client-parse"
                  /* FETCH_PARSE */
                  , {
                    originalErrorMessage: originalError_2.message
                  });

                case 10:
                  config = responseBody['entries'];
                  state = responseBody['state'];
                  _b.label = 11;

                case 11:
                  // Normalizes based on legacy state.
                  if (state === 'INSTANCE_STATE_UNSPECIFIED') {
                    status = 500;
                  } else if (state === 'NO_CHANGE') {
                    status = 304;
                  } else if (state === 'NO_TEMPLATE' || state === 'EMPTY_CONFIG') {
                    // These cases can be fixed remotely, so normalize to safe value.
                    config = {};
                  } // Normalize to exception-based control flow for non-success cases.
                  // Encapsulates HTTP specifics in this class as much as possible. Status is still the best for
                  // differentiating success states (200 from 304; the state body param is undefined in a
                  // standard 304).


                  if (status !== 304 && status !== 200) {
                    throw ERROR_FACTORY.create("fetch-status"
                    /* FETCH_STATUS */
                    , {
                      httpStatus: status
                    });
                  }

                  return [2
                  /*return*/
                  , {
                    status: status,
                    eTag: responseEtag,
                    config: config
                  }];
              }
            });
          });
        };

        return RestClient;
      }();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Shims a minimal AbortSignal.
       *
       * <p>AbortController's AbortSignal conveniently decouples fetch timeout logic from other aspects
       * of networking, such as retries. Firebase doesn't use AbortController enough to justify a
       * polyfill recommendation, like we do with the Fetch API, but this minimal shim can easily be
       * swapped out if/when we do.
       */


      var RemoteConfigAbortSignal =
      /** @class */
      function () {
        function RemoteConfigAbortSignal() {
          this.listeners = [];
        }

        RemoteConfigAbortSignal.prototype.addEventListener = function (listener) {
          this.listeners.push(listener);
        };

        RemoteConfigAbortSignal.prototype.abort = function () {
          this.listeners.forEach(function (listener) {
            return listener();
          });
        };

        return RemoteConfigAbortSignal;
      }();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var DEFAULT_VALUE_FOR_BOOLEAN = false;
      var DEFAULT_VALUE_FOR_STRING = '';
      var DEFAULT_VALUE_FOR_NUMBER = 0;
      var BOOLEAN_TRUTHY_VALUES = ['1', 'true', 't', 'yes', 'y', 'on'];

      var Value =
      /** @class */
      function () {
        function Value(_source, _value) {
          if (_value === void 0) {
            _value = DEFAULT_VALUE_FOR_STRING;
          }

          this._source = _source;
          this._value = _value;
        }

        Value.prototype.asString = function () {
          return this._value;
        };

        Value.prototype.asBoolean = function () {
          if (this._source === 'static') {
            return DEFAULT_VALUE_FOR_BOOLEAN;
          }

          return BOOLEAN_TRUTHY_VALUES.indexOf(this._value.toLowerCase()) >= 0;
        };

        Value.prototype.asNumber = function () {
          if (this._source === 'static') {
            return DEFAULT_VALUE_FOR_NUMBER;
          }

          var num = Number(this._value);

          if (isNaN(num)) {
            num = DEFAULT_VALUE_FOR_NUMBER;
          }

          return num;
        };

        Value.prototype.getSource = function () {
          return this._source;
        };

        return Value;
      }();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var DEFAULT_FETCH_TIMEOUT_MILLIS = 60 * 1000; // One minute

      var DEFAULT_CACHE_MAX_AGE_MILLIS = 12 * 60 * 60 * 1000; // Twelve hours.

      /**
       * Encapsulates business logic mapping network and storage dependencies to the public SDK API.
       *
       * See {@link https://github.com/FirebasePrivate/firebase-js-sdk/blob/master/packages/firebase/index.d.ts|interface documentation} for method descriptions.
       */

      var RemoteConfig =
      /** @class */
      function () {
        function RemoteConfig( // Required by FirebaseServiceFactory interface.
        app, // JS doesn't support private yet
        // (https://github.com/tc39/proposal-class-fields#private-fields), so we hint using an
        // underscore prefix.
        _client, _storageCache, _storage, _logger) {
          this.app = app;
          this._client = _client;
          this._storageCache = _storageCache;
          this._storage = _storage;
          this._logger = _logger; // Tracks completion of initialization promise.

          this._isInitializationComplete = false;
          this.settings = {
            fetchTimeoutMillis: DEFAULT_FETCH_TIMEOUT_MILLIS,
            minimumFetchIntervalMillis: DEFAULT_CACHE_MAX_AGE_MILLIS
          };
          this.defaultConfig = {};
        } // Based on packages/firestore/src/util/log.ts but not static because we need per-instance levels
        // to differentiate 2p and 3p use-cases.


        RemoteConfig.prototype.setLogLevel = function (logLevel) {
          switch (logLevel) {
            case 'debug':
              this._logger.logLevel = logger.LogLevel.DEBUG;
              break;

            case 'silent':
              this._logger.logLevel = logger.LogLevel.SILENT;
              break;

            default:
              this._logger.logLevel = logger.LogLevel.ERROR;
          }
        };

        Object.defineProperty(RemoteConfig.prototype, "fetchTimeMillis", {
          get: function get() {
            return this._storageCache.getLastSuccessfulFetchTimestampMillis() || -1;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(RemoteConfig.prototype, "lastFetchStatus", {
          get: function get() {
            return this._storageCache.getLastFetchStatus() || 'no-fetch-yet';
          },
          enumerable: false,
          configurable: true
        });

        RemoteConfig.prototype.activate = function () {
          return tslib.__awaiter(this, void 0, void 0, function () {
            var _a, lastSuccessfulFetchResponse, activeConfigEtag;

            return tslib.__generator(this, function (_b) {
              switch (_b.label) {
                case 0:
                  return [4
                  /*yield*/
                  , Promise.all([this._storage.getLastSuccessfulFetchResponse(), this._storage.getActiveConfigEtag()])];

                case 1:
                  _a = _b.sent(), lastSuccessfulFetchResponse = _a[0], activeConfigEtag = _a[1];

                  if (!lastSuccessfulFetchResponse || !lastSuccessfulFetchResponse.config || !lastSuccessfulFetchResponse.eTag || lastSuccessfulFetchResponse.eTag === activeConfigEtag) {
                    // Either there is no successful fetched config, or is the same as current active
                    // config.
                    return [2
                    /*return*/
                    , false];
                  }

                  return [4
                  /*yield*/
                  , Promise.all([this._storageCache.setActiveConfig(lastSuccessfulFetchResponse.config), this._storage.setActiveConfigEtag(lastSuccessfulFetchResponse.eTag)])];

                case 2:
                  _b.sent();

                  return [2
                  /*return*/
                  , true];
              }
            });
          });
        };

        RemoteConfig.prototype.ensureInitialized = function () {
          var _this = this;

          if (!this._initializePromise) {
            this._initializePromise = this._storageCache.loadFromStorage().then(function () {
              _this._isInitializationComplete = true;
            });
          }

          return this._initializePromise;
        };
        /**
         * @throws a {@link ErrorCode.FETCH_CLIENT_TIMEOUT} if the request takes longer than
         * {@link Settings.fetchTimeoutInSeconds} or
         * {@link DEFAULT_FETCH_TIMEOUT_SECONDS}.
         */


        RemoteConfig.prototype.fetch = function () {
          return tslib.__awaiter(this, void 0, void 0, function () {
            var abortSignal, e_1, lastFetchStatus;

            var _this = this;

            return tslib.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  abortSignal = new RemoteConfigAbortSignal();
                  setTimeout(function () {
                    return tslib.__awaiter(_this, void 0, void 0, function () {
                      return tslib.__generator(this, function (_a) {
                        // Note a very low delay, eg < 10ms, can elapse before listeners are initialized.
                        abortSignal.abort();
                        return [2
                        /*return*/
                        ];
                      });
                    });
                  }, this.settings.fetchTimeoutMillis);
                  _a.label = 1;

                case 1:
                  _a.trys.push([1, 4,, 6]);

                  return [4
                  /*yield*/
                  , this._client.fetch({
                    cacheMaxAgeMillis: this.settings.minimumFetchIntervalMillis,
                    signal: abortSignal
                  })];

                case 2:
                  _a.sent();

                  return [4
                  /*yield*/
                  , this._storageCache.setLastFetchStatus('success')];

                case 3:
                  _a.sent();

                  return [3
                  /*break*/
                  , 6];

                case 4:
                  e_1 = _a.sent();
                  lastFetchStatus = hasErrorCode(e_1, "fetch-throttle"
                  /* FETCH_THROTTLE */
                  ) ? 'throttle' : 'failure';
                  return [4
                  /*yield*/
                  , this._storageCache.setLastFetchStatus(lastFetchStatus)];

                case 5:
                  _a.sent();

                  throw e_1;

                case 6:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };

        RemoteConfig.prototype.fetchAndActivate = function () {
          return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4
                  /*yield*/
                  , this.fetch()];

                case 1:
                  _a.sent();

                  return [2
                  /*return*/
                  , this.activate()];
              }
            });
          });
        };

        RemoteConfig.prototype.getAll = function () {
          var _this = this;

          return getAllKeys(this._storageCache.getActiveConfig(), this.defaultConfig).reduce(function (allConfigs, key) {
            allConfigs[key] = _this.getValue(key);
            return allConfigs;
          }, {});
        };

        RemoteConfig.prototype.getBoolean = function (key) {
          return this.getValue(key).asBoolean();
        };

        RemoteConfig.prototype.getNumber = function (key) {
          return this.getValue(key).asNumber();
        };

        RemoteConfig.prototype.getString = function (key) {
          return this.getValue(key).asString();
        };

        RemoteConfig.prototype.getValue = function (key) {
          if (!this._isInitializationComplete) {
            this._logger.debug("A value was requested for key \"" + key + "\" before SDK initialization completed." + ' Await on ensureInitialized if the intent was to get a previously activated value.');
          }

          var activeConfig = this._storageCache.getActiveConfig();

          if (activeConfig && activeConfig[key] !== undefined) {
            return new Value('remote', activeConfig[key]);
          } else if (this.defaultConfig && this.defaultConfig[key] !== undefined) {
            return new Value('default', String(this.defaultConfig[key]));
          }

          this._logger.debug("Returning static value for key \"" + key + "\"." + ' Define a default or remote value if this is unintentional.');

          return new Value('static');
        };

        return RemoteConfig;
      }();
      /**
       * Dedupes and returns an array of all the keys of the received objects.
       */


      function getAllKeys(obj1, obj2) {
        if (obj1 === void 0) {
          obj1 = {};
        }

        if (obj2 === void 0) {
          obj2 = {};
        }

        return Object.keys(tslib.__assign(tslib.__assign({}, obj1), obj2));
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Converts an error event associated with a {@link IDBRequest} to a {@link FirebaseError}.
       */


      function toFirebaseError(event, errorCode) {
        var originalError = event.target.error || undefined;
        return ERROR_FACTORY.create(errorCode, {
          originalErrorMessage: originalError && originalError.message
        });
      }
      /**
       * A general-purpose store keyed by app + namespace + {@link
       * ProjectNamespaceKeyFieldValue}.
       *
       * <p>The Remote Config SDK can be used with multiple app installations, and each app can interact
       * with multiple namespaces, so this store uses app (ID + name) and namespace as common parent keys
       * for a set of key-value pairs. See {@link Storage#createCompositeKey}.
       *
       * <p>Visible for testing.
       */


      var APP_NAMESPACE_STORE = 'app_namespace_store';
      var DB_NAME = 'firebase_remote_config';
      var DB_VERSION = 1; // Visible for testing.

      function openDatabase() {
        return new Promise(function (resolve, reject) {
          var request = indexedDB.open(DB_NAME, DB_VERSION);

          request.onerror = function (event) {
            reject(toFirebaseError(event, "storage-open"
            /* STORAGE_OPEN */
            ));
          };

          request.onsuccess = function (event) {
            resolve(event.target.result);
          };

          request.onupgradeneeded = function (event) {
            var db = event.target.result; // We don't use 'break' in this switch statement, the fall-through
            // behavior is what we want, because if there are multiple versions between
            // the old version and the current version, we want ALL the migrations
            // that correspond to those versions to run, not only the last one.
            // eslint-disable-next-line default-case

            switch (event.oldVersion) {
              case 0:
                db.createObjectStore(APP_NAMESPACE_STORE, {
                  keyPath: 'compositeKey'
                });
            }
          };
        });
      }
      /**
       * Abstracts data persistence.
       */


      var Storage =
      /** @class */
      function () {
        /**
         * @param appId enables storage segmentation by app (ID + name).
         * @param appName enables storage segmentation by app (ID + name).
         * @param namespace enables storage segmentation by namespace.
         */
        function Storage(appId, appName, namespace, openDbPromise) {
          if (openDbPromise === void 0) {
            openDbPromise = openDatabase();
          }

          this.appId = appId;
          this.appName = appName;
          this.namespace = namespace;
          this.openDbPromise = openDbPromise;
        }

        Storage.prototype.getLastFetchStatus = function () {
          return this.get('last_fetch_status');
        };

        Storage.prototype.setLastFetchStatus = function (status) {
          return this.set('last_fetch_status', status);
        }; // This is comparable to a cache entry timestamp. If we need to expire other data, we could
        // consider adding timestamp to all storage records and an optional max age arg to getters.


        Storage.prototype.getLastSuccessfulFetchTimestampMillis = function () {
          return this.get('last_successful_fetch_timestamp_millis');
        };

        Storage.prototype.setLastSuccessfulFetchTimestampMillis = function (timestamp) {
          return this.set('last_successful_fetch_timestamp_millis', timestamp);
        };

        Storage.prototype.getLastSuccessfulFetchResponse = function () {
          return this.get('last_successful_fetch_response');
        };

        Storage.prototype.setLastSuccessfulFetchResponse = function (response) {
          return this.set('last_successful_fetch_response', response);
        };

        Storage.prototype.getActiveConfig = function () {
          return this.get('active_config');
        };

        Storage.prototype.setActiveConfig = function (config) {
          return this.set('active_config', config);
        };

        Storage.prototype.getActiveConfigEtag = function () {
          return this.get('active_config_etag');
        };

        Storage.prototype.setActiveConfigEtag = function (etag) {
          return this.set('active_config_etag', etag);
        };

        Storage.prototype.getThrottleMetadata = function () {
          return this.get('throttle_metadata');
        };

        Storage.prototype.setThrottleMetadata = function (metadata) {
          return this.set('throttle_metadata', metadata);
        };

        Storage.prototype.deleteThrottleMetadata = function () {
          return this["delete"]('throttle_metadata');
        };

        Storage.prototype.get = function (key) {
          return tslib.__awaiter(this, void 0, void 0, function () {
            var db;

            var _this = this;

            return tslib.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4
                  /*yield*/
                  , this.openDbPromise];

                case 1:
                  db = _a.sent();
                  return [2
                  /*return*/
                  , new Promise(function (resolve, reject) {
                    var transaction = db.transaction([APP_NAMESPACE_STORE], 'readonly');
                    var objectStore = transaction.objectStore(APP_NAMESPACE_STORE);

                    var compositeKey = _this.createCompositeKey(key);

                    try {
                      var request = objectStore.get(compositeKey);

                      request.onerror = function (event) {
                        reject(toFirebaseError(event, "storage-get"
                        /* STORAGE_GET */
                        ));
                      };

                      request.onsuccess = function (event) {
                        var result = event.target.result;

                        if (result) {
                          resolve(result.value);
                        } else {
                          resolve(undefined);
                        }
                      };
                    } catch (e) {
                      reject(ERROR_FACTORY.create("storage-get"
                      /* STORAGE_GET */
                      , {
                        originalErrorMessage: e && e.message
                      }));
                    }
                  })];
              }
            });
          });
        };

        Storage.prototype.set = function (key, value) {
          return tslib.__awaiter(this, void 0, void 0, function () {
            var db;

            var _this = this;

            return tslib.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4
                  /*yield*/
                  , this.openDbPromise];

                case 1:
                  db = _a.sent();
                  return [2
                  /*return*/
                  , new Promise(function (resolve, reject) {
                    var transaction = db.transaction([APP_NAMESPACE_STORE], 'readwrite');
                    var objectStore = transaction.objectStore(APP_NAMESPACE_STORE);

                    var compositeKey = _this.createCompositeKey(key);

                    try {
                      var request = objectStore.put({
                        compositeKey: compositeKey,
                        value: value
                      });

                      request.onerror = function (event) {
                        reject(toFirebaseError(event, "storage-set"
                        /* STORAGE_SET */
                        ));
                      };

                      request.onsuccess = function () {
                        resolve();
                      };
                    } catch (e) {
                      reject(ERROR_FACTORY.create("storage-set"
                      /* STORAGE_SET */
                      , {
                        originalErrorMessage: e && e.message
                      }));
                    }
                  })];
              }
            });
          });
        };

        Storage.prototype["delete"] = function (key) {
          return tslib.__awaiter(this, void 0, void 0, function () {
            var db;

            var _this = this;

            return tslib.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4
                  /*yield*/
                  , this.openDbPromise];

                case 1:
                  db = _a.sent();
                  return [2
                  /*return*/
                  , new Promise(function (resolve, reject) {
                    var transaction = db.transaction([APP_NAMESPACE_STORE], 'readwrite');
                    var objectStore = transaction.objectStore(APP_NAMESPACE_STORE);

                    var compositeKey = _this.createCompositeKey(key);

                    try {
                      var request = objectStore["delete"](compositeKey);

                      request.onerror = function (event) {
                        reject(toFirebaseError(event, "storage-delete"
                        /* STORAGE_DELETE */
                        ));
                      };

                      request.onsuccess = function () {
                        resolve();
                      };
                    } catch (e) {
                      reject(ERROR_FACTORY.create("storage-delete"
                      /* STORAGE_DELETE */
                      , {
                        originalErrorMessage: e && e.message
                      }));
                    }
                  })];
              }
            });
          });
        }; // Facilitates composite key functionality (which is unsupported in IE).


        Storage.prototype.createCompositeKey = function (key) {
          return [this.appId, this.appName, this.namespace, key].join();
        };

        return Storage;
      }();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * A memory cache layer over storage to support the SDK's synchronous read requirements.
       */


      var StorageCache =
      /** @class */
      function () {
        function StorageCache(storage) {
          this.storage = storage;
        }
        /**
         * Memory-only getters
         */


        StorageCache.prototype.getLastFetchStatus = function () {
          return this.lastFetchStatus;
        };

        StorageCache.prototype.getLastSuccessfulFetchTimestampMillis = function () {
          return this.lastSuccessfulFetchTimestampMillis;
        };

        StorageCache.prototype.getActiveConfig = function () {
          return this.activeConfig;
        };
        /**
         * Read-ahead getter
         */


        StorageCache.prototype.loadFromStorage = function () {
          return tslib.__awaiter(this, void 0, void 0, function () {
            var lastFetchStatusPromise, lastSuccessfulFetchTimestampMillisPromise, activeConfigPromise, lastFetchStatus, lastSuccessfulFetchTimestampMillis, activeConfig;
            return tslib.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  lastFetchStatusPromise = this.storage.getLastFetchStatus();
                  lastSuccessfulFetchTimestampMillisPromise = this.storage.getLastSuccessfulFetchTimestampMillis();
                  activeConfigPromise = this.storage.getActiveConfig();
                  return [4
                  /*yield*/
                  , lastFetchStatusPromise];

                case 1:
                  lastFetchStatus = _a.sent();

                  if (lastFetchStatus) {
                    this.lastFetchStatus = lastFetchStatus;
                  }

                  return [4
                  /*yield*/
                  , lastSuccessfulFetchTimestampMillisPromise];

                case 2:
                  lastSuccessfulFetchTimestampMillis = _a.sent();

                  if (lastSuccessfulFetchTimestampMillis) {
                    this.lastSuccessfulFetchTimestampMillis = lastSuccessfulFetchTimestampMillis;
                  }

                  return [4
                  /*yield*/
                  , activeConfigPromise];

                case 3:
                  activeConfig = _a.sent();

                  if (activeConfig) {
                    this.activeConfig = activeConfig;
                  }

                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };
        /**
         * Write-through setters
         */


        StorageCache.prototype.setLastFetchStatus = function (status) {
          this.lastFetchStatus = status;
          return this.storage.setLastFetchStatus(status);
        };

        StorageCache.prototype.setLastSuccessfulFetchTimestampMillis = function (timestampMillis) {
          this.lastSuccessfulFetchTimestampMillis = timestampMillis;
          return this.storage.setLastSuccessfulFetchTimestampMillis(timestampMillis);
        };

        StorageCache.prototype.setActiveConfig = function (activeConfig) {
          this.activeConfig = activeConfig;
          return this.storage.setActiveConfig(activeConfig);
        };

        return StorageCache;
      }();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Supports waiting on a backoff by:
       *
       * <ul>
       *   <li>Promisifying setTimeout, so we can set a timeout in our Promise chain</li>
       *   <li>Listening on a signal bus for abort events, just like the Fetch API</li>
       *   <li>Failing in the same way the Fetch API fails, so timing out a live request and a throttled
       *       request appear the same.</li>
       * </ul>
       *
       * <p>Visible for testing.
       */


      function setAbortableTimeout(signal, throttleEndTimeMillis) {
        return new Promise(function (resolve, reject) {
          // Derives backoff from given end time, normalizing negative numbers to zero.
          var backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
          var timeout = setTimeout(resolve, backoffMillis); // Adds listener, rather than sets onabort, because signal is a shared object.

          signal.addEventListener(function () {
            clearTimeout(timeout); // If the request completes before this timeout, the rejection has no effect.

            reject(ERROR_FACTORY.create("fetch-throttle"
            /* FETCH_THROTTLE */
            , {
              throttleEndTimeMillis: throttleEndTimeMillis
            }));
          });
        });
      }
      /**
       * Returns true if the {@link Error} indicates a fetch request may succeed later.
       */


      function isRetriableError(e) {
        if (!(e instanceof util.FirebaseError)) {
          return false;
        } // Uses string index defined by ErrorData, which FirebaseError implements.


        var httpStatus = Number(e['httpStatus']);
        return httpStatus === 429 || httpStatus === 500 || httpStatus === 503 || httpStatus === 504;
      }
      /**
       * Decorates a Client with retry logic.
       *
       * <p>Comparable to CachingClient, but uses backoff logic instead of cache max age and doesn't cache
       * responses (because the SDK has no use for error responses).
       */


      var RetryingClient =
      /** @class */
      function () {
        function RetryingClient(client, storage) {
          this.client = client;
          this.storage = storage;
        }

        RetryingClient.prototype.fetch = function (request) {
          return tslib.__awaiter(this, void 0, void 0, function () {
            var throttleMetadata;
            return tslib.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4
                  /*yield*/
                  , this.storage.getThrottleMetadata()];

                case 1:
                  throttleMetadata = _a.sent() || {
                    backoffCount: 0,
                    throttleEndTimeMillis: Date.now()
                  };
                  return [2
                  /*return*/
                  , this.attemptFetch(request, throttleMetadata)];
              }
            });
          });
        };
        /**
         * A recursive helper for attempting a fetch request repeatedly.
         *
         * @throws any non-retriable errors.
         */


        RetryingClient.prototype.attemptFetch = function (request, _a) {
          var throttleEndTimeMillis = _a.throttleEndTimeMillis,
              backoffCount = _a.backoffCount;
          return tslib.__awaiter(this, void 0, void 0, function () {
            var response, e_1, throttleMetadata;
            return tslib.__generator(this, function (_b) {
              switch (_b.label) {
                case 0:
                  // Starts with a (potentially zero) timeout to support resumption from stored state.
                  // Ensures the throttle end time is honored if the last attempt timed out.
                  // Note the SDK will never make a request if the fetch timeout expires at this point.
                  return [4
                  /*yield*/
                  , setAbortableTimeout(request.signal, throttleEndTimeMillis)];

                case 1:
                  // Starts with a (potentially zero) timeout to support resumption from stored state.
                  // Ensures the throttle end time is honored if the last attempt timed out.
                  // Note the SDK will never make a request if the fetch timeout expires at this point.
                  _b.sent();

                  _b.label = 2;

                case 2:
                  _b.trys.push([2, 5,, 7]);

                  return [4
                  /*yield*/
                  , this.client.fetch(request)];

                case 3:
                  response = _b.sent(); // Note the SDK only clears throttle state if response is success or non-retriable.

                  return [4
                  /*yield*/
                  , this.storage.deleteThrottleMetadata()];

                case 4:
                  // Note the SDK only clears throttle state if response is success or non-retriable.
                  _b.sent();

                  return [2
                  /*return*/
                  , response];

                case 5:
                  e_1 = _b.sent();

                  if (!isRetriableError(e_1)) {
                    throw e_1;
                  }

                  throttleMetadata = {
                    throttleEndTimeMillis: Date.now() + util.calculateBackoffMillis(backoffCount),
                    backoffCount: backoffCount + 1
                  }; // Persists state.

                  return [4
                  /*yield*/
                  , this.storage.setThrottleMetadata(throttleMetadata)];

                case 6:
                  // Persists state.
                  _b.sent();

                  return [2
                  /*return*/
                  , this.attemptFetch(request, throttleMetadata)];

                case 7:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };

        return RetryingClient;
      }();

      var name = "@firebase/remote-config";
      var version = "0.1.28";
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      function registerRemoteConfig(firebaseInstance) {
        firebaseInstance.INTERNAL.registerComponent(new component.Component('remoteConfig', remoteConfigFactory, "PUBLIC"
        /* PUBLIC */
        ).setMultipleInstances(true));
        firebaseInstance.registerVersion(name, version);

        function remoteConfigFactory(container, namespace) {
          /* Dependencies */
          // getImmediate for FirebaseApp will always succeed
          var app = container.getProvider('app').getImmediate(); // The following call will always succeed because rc has `import '@firebase/installations'`

          var installations = container.getProvider('installations').getImmediate(); // Guards against the SDK being used in non-browser environments.

          if (typeof window === 'undefined') {
            throw ERROR_FACTORY.create("registration-window"
            /* REGISTRATION_WINDOW */
            );
          } // Normalizes optional inputs.


          var _a = app.options,
              projectId = _a.projectId,
              apiKey = _a.apiKey,
              appId = _a.appId;

          if (!projectId) {
            throw ERROR_FACTORY.create("registration-project-id"
            /* REGISTRATION_PROJECT_ID */
            );
          }

          if (!apiKey) {
            throw ERROR_FACTORY.create("registration-api-key"
            /* REGISTRATION_API_KEY */
            );
          }

          if (!appId) {
            throw ERROR_FACTORY.create("registration-app-id"
            /* REGISTRATION_APP_ID */
            );
          }

          namespace = namespace || 'firebase';
          var storage = new Storage(appId, app.name, namespace);
          var storageCache = new StorageCache(storage);
          var logger$1 = new logger.Logger(name); // Sets ERROR as the default log level.
          // See RemoteConfig#setLogLevel for corresponding normalization to ERROR log level.

          logger$1.logLevel = logger.LogLevel.ERROR;
          var restClient = new RestClient(installations, // Uses the JS SDK version, by which the RC package version can be deduced, if necessary.
          firebaseInstance.SDK_VERSION, namespace, projectId, apiKey, appId);
          var retryingClient = new RetryingClient(restClient, storage);
          var cachingClient = new CachingClient(retryingClient, storage, storageCache, logger$1);
          var remoteConfigInstance = new RemoteConfig(app, cachingClient, storageCache, storage, logger$1); // Starts warming cache.
          // eslint-disable-next-line @typescript-eslint/no-floating-promises

          remoteConfigInstance.ensureInitialized();
          return remoteConfigInstance;
        }
      }

      registerRemoteConfig(firebase__default['default']);
      exports.registerRemoteConfig = registerRemoteConfig; //# sourceMappingURL=index.cjs.js.map

      /***/
    },

    /***/
    "./node_modules/@firebase/storage/dist/index.esm.js":
    /*!**********************************************************!*\
      !*** ./node_modules/@firebase/storage/dist/index.esm.js ***!
      \**********************************************************/

    /*! exports provided: registerStorage */

    /***/
    function node_modulesFirebaseStorageDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerStorage", function () {
        return registerStorage;
      });
      /* harmony import */


      var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @firebase/app */
      "./node_modules/@firebase/app/dist/index.cjs.js");
      /* harmony import */


      var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _firebase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @firebase/component */
      "./node_modules/@firebase/component/dist/index.cjs.js");
      /* harmony import */


      var _firebase_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_firebase_component__WEBPACK_IMPORTED_MODULE_2__);
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @fileoverview Constants used in the Firebase Storage library.
       */

      /**
       * Domain name for firebase storage.
       */


      var DEFAULT_HOST = 'firebasestorage.googleapis.com';
      /**
       * The key in Firebase config json for the storage bucket.
       */

      var CONFIG_STORAGE_BUCKET_KEY = 'storageBucket';
      /**
       * 2 minutes
       *
       * The timeout for all operations except upload.
       */

      var DEFAULT_MAX_OPERATION_RETRY_TIME = 2 * 60 * 1000;
      /**
       * 10 minutes
       *
       * The timeout for upload.
       */

      var DEFAULT_MAX_UPLOAD_RETRY_TIME = 10 * 60 * 1000;
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var FirebaseStorageError =
      /** @class */
      function () {
        function FirebaseStorageError(code, message) {
          this.code_ = prependCode(code);
          this.message_ = 'Firebase Storage: ' + message;
          this.serverResponse_ = null;
          this.name_ = 'FirebaseError';
        }

        FirebaseStorageError.prototype.codeProp = function () {
          return this.code;
        };

        FirebaseStorageError.prototype.codeEquals = function (code) {
          return prependCode(code) === this.codeProp();
        };

        FirebaseStorageError.prototype.serverResponseProp = function () {
          return this.serverResponse_;
        };

        FirebaseStorageError.prototype.setServerResponseProp = function (serverResponse) {
          this.serverResponse_ = serverResponse;
        };

        Object.defineProperty(FirebaseStorageError.prototype, "name", {
          get: function get() {
            return this.name_;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(FirebaseStorageError.prototype, "code", {
          get: function get() {
            return this.code_;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(FirebaseStorageError.prototype, "message", {
          get: function get() {
            if (this.serverResponse_) {
              return this.message_ + '\n' + this.serverResponse_;
            } else {
              return this.message_;
            }
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(FirebaseStorageError.prototype, "serverResponse", {
          get: function get() {
            return this.serverResponse_;
          },
          enumerable: false,
          configurable: true
        });
        return FirebaseStorageError;
      }();

      var Code = {
        // Shared between all platforms
        UNKNOWN: 'unknown',
        OBJECT_NOT_FOUND: 'object-not-found',
        BUCKET_NOT_FOUND: 'bucket-not-found',
        PROJECT_NOT_FOUND: 'project-not-found',
        QUOTA_EXCEEDED: 'quota-exceeded',
        UNAUTHENTICATED: 'unauthenticated',
        UNAUTHORIZED: 'unauthorized',
        RETRY_LIMIT_EXCEEDED: 'retry-limit-exceeded',
        INVALID_CHECKSUM: 'invalid-checksum',
        CANCELED: 'canceled',
        // JS specific
        INVALID_EVENT_NAME: 'invalid-event-name',
        INVALID_URL: 'invalid-url',
        INVALID_DEFAULT_BUCKET: 'invalid-default-bucket',
        NO_DEFAULT_BUCKET: 'no-default-bucket',
        CANNOT_SLICE_BLOB: 'cannot-slice-blob',
        SERVER_FILE_WRONG_SIZE: 'server-file-wrong-size',
        NO_DOWNLOAD_URL: 'no-download-url',
        INVALID_ARGUMENT: 'invalid-argument',
        INVALID_ARGUMENT_COUNT: 'invalid-argument-count',
        APP_DELETED: 'app-deleted',
        INVALID_ROOT_OPERATION: 'invalid-root-operation',
        INVALID_FORMAT: 'invalid-format',
        INTERNAL_ERROR: 'internal-error'
      };

      function prependCode(code) {
        return 'storage/' + code;
      }

      function unknown() {
        var message = 'An unknown error occurred, please check the error payload for ' + 'server response.';
        return new FirebaseStorageError(Code.UNKNOWN, message);
      }

      function objectNotFound(path) {
        return new FirebaseStorageError(Code.OBJECT_NOT_FOUND, "Object '" + path + "' does not exist.");
      }

      function quotaExceeded(bucket) {
        return new FirebaseStorageError(Code.QUOTA_EXCEEDED, "Quota for bucket '" + bucket + "' exceeded, please view quota on " + 'https://firebase.google.com/pricing/.');
      }

      function unauthenticated() {
        var message = 'User is not authenticated, please authenticate using Firebase ' + 'Authentication and try again.';
        return new FirebaseStorageError(Code.UNAUTHENTICATED, message);
      }

      function unauthorized(path) {
        return new FirebaseStorageError(Code.UNAUTHORIZED, "User does not have permission to access '" + path + "'.");
      }

      function retryLimitExceeded() {
        return new FirebaseStorageError(Code.RETRY_LIMIT_EXCEEDED, 'Max retry time for operation exceeded, please try again.');
      }

      function canceled() {
        return new FirebaseStorageError(Code.CANCELED, 'User canceled the upload/download.');
      }

      function invalidUrl(url) {
        return new FirebaseStorageError(Code.INVALID_URL, "Invalid URL '" + url + "'.");
      }

      function invalidDefaultBucket(bucket) {
        return new FirebaseStorageError(Code.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + bucket + "'.");
      }

      function cannotSliceBlob() {
        return new FirebaseStorageError(Code.CANNOT_SLICE_BLOB, 'Cannot slice blob for upload. Please retry the upload.');
      }

      function serverFileWrongSize() {
        return new FirebaseStorageError(Code.SERVER_FILE_WRONG_SIZE, 'Server recorded incorrect upload file size, please retry the upload.');
      }

      function noDownloadURL() {
        return new FirebaseStorageError(Code.NO_DOWNLOAD_URL, 'The given file does not have any download URLs.');
      }

      function invalidArgument(index, fnName, message) {
        return new FirebaseStorageError(Code.INVALID_ARGUMENT, 'Invalid argument in `' + fnName + '` at index ' + index + ': ' + message);
      }

      function invalidArgumentCount(argMin, argMax, fnName, real) {
        var countPart;
        var plural;

        if (argMin === argMax) {
          countPart = argMin;
          plural = argMin === 1 ? 'argument' : 'arguments';
        } else {
          countPart = 'between ' + argMin + ' and ' + argMax;
          plural = 'arguments';
        }

        return new FirebaseStorageError(Code.INVALID_ARGUMENT_COUNT, 'Invalid argument count in `' + fnName + '`: Expected ' + countPart + ' ' + plural + ', received ' + real + '.');
      }

      function appDeleted() {
        return new FirebaseStorageError(Code.APP_DELETED, 'The Firebase app was deleted.');
      }
      /**
       * @param name The name of the operation that was invalid.
       */


      function invalidRootOperation(name) {
        return new FirebaseStorageError(Code.INVALID_ROOT_OPERATION, "The operation '" + name + "' cannot be performed on a root reference, create a non-root " + "reference using child, such as .child('file.png').");
      }
      /**
       * @param format The format that was not valid.
       * @param message A message describing the format violation.
       */


      function invalidFormat(format, message) {
        return new FirebaseStorageError(Code.INVALID_FORMAT, "String does not match format '" + format + "': " + message);
      }
      /**
       * @param message A message describing the internal error.
       */


      function internalError(message) {
        throw new FirebaseStorageError(Code.INTERNAL_ERROR, 'Internal error: ' + message);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var StringFormat = {
        RAW: 'raw',
        BASE64: 'base64',
        BASE64URL: 'base64url',
        DATA_URL: 'data_url'
      };

      function formatValidator(stringFormat) {
        switch (stringFormat) {
          case StringFormat.RAW:
          case StringFormat.BASE64:
          case StringFormat.BASE64URL:
          case StringFormat.DATA_URL:
            return;

          default:
            throw 'Expected one of the event types: [' + StringFormat.RAW + ', ' + StringFormat.BASE64 + ', ' + StringFormat.BASE64URL + ', ' + StringFormat.DATA_URL + '].';
        }
      }
      /**
       * @struct
       */


      var StringData =
      /** @class */
      function () {
        function StringData(data, contentType) {
          this.data = data;
          this.contentType = contentType || null;
        }

        return StringData;
      }();

      function dataFromString(format, stringData) {
        switch (format) {
          case StringFormat.RAW:
            return new StringData(utf8Bytes_(stringData));

          case StringFormat.BASE64:
          case StringFormat.BASE64URL:
            return new StringData(base64Bytes_(format, stringData));

          case StringFormat.DATA_URL:
            return new StringData(dataURLBytes_(stringData), dataURLContentType_(stringData));
          // do nothing
        } // assert(false);


        throw unknown();
      }

      function utf8Bytes_(value) {
        var b = [];

        for (var i = 0; i < value.length; i++) {
          var c = value.charCodeAt(i);

          if (c <= 127) {
            b.push(c);
          } else {
            if (c <= 2047) {
              b.push(192 | c >> 6, 128 | c & 63);
            } else {
              if ((c & 64512) === 55296) {
                // The start of a surrogate pair.
                var valid = i < value.length - 1 && (value.charCodeAt(i + 1) & 64512) === 56320;

                if (!valid) {
                  // The second surrogate wasn't there.
                  b.push(239, 191, 189);
                } else {
                  var hi = c;
                  var lo = value.charCodeAt(++i);
                  c = 65536 | (hi & 1023) << 10 | lo & 1023;
                  b.push(240 | c >> 18, 128 | c >> 12 & 63, 128 | c >> 6 & 63, 128 | c & 63);
                }
              } else {
                if ((c & 64512) === 56320) {
                  // Invalid low surrogate.
                  b.push(239, 191, 189);
                } else {
                  b.push(224 | c >> 12, 128 | c >> 6 & 63, 128 | c & 63);
                }
              }
            }
          }
        }

        return new Uint8Array(b);
      }

      function percentEncodedBytes_(value) {
        var decoded;

        try {
          decoded = decodeURIComponent(value);
        } catch (e) {
          throw invalidFormat(StringFormat.DATA_URL, 'Malformed data URL.');
        }

        return utf8Bytes_(decoded);
      }

      function base64Bytes_(format, value) {
        switch (format) {
          case StringFormat.BASE64:
            {
              var hasMinus = value.indexOf('-') !== -1;
              var hasUnder = value.indexOf('_') !== -1;

              if (hasMinus || hasUnder) {
                var invalidChar = hasMinus ? '-' : '_';
                throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64url encoded?");
              }

              break;
            }

          case StringFormat.BASE64URL:
            {
              var hasPlus = value.indexOf('+') !== -1;
              var hasSlash = value.indexOf('/') !== -1;

              if (hasPlus || hasSlash) {
                var invalidChar = hasPlus ? '+' : '/';
                throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
              }

              value = value.replace(/-/g, '+').replace(/_/g, '/');
              break;
            }
          // do nothing
        }

        var bytes;

        try {
          bytes = atob(value);
        } catch (e) {
          throw invalidFormat(format, 'Invalid character found');
        }

        var array = new Uint8Array(bytes.length);

        for (var i = 0; i < bytes.length; i++) {
          array[i] = bytes.charCodeAt(i);
        }

        return array;
      }
      /**
       * @struct
       */


      var DataURLParts =
      /** @class */
      function () {
        function DataURLParts(dataURL) {
          this.base64 = false;
          this.contentType = null;
          var matches = dataURL.match(/^data:([^,]+)?,/);

          if (matches === null) {
            throw invalidFormat(StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
          }

          var middle = matches[1] || null;

          if (middle != null) {
            this.base64 = endsWith(middle, ';base64');
            this.contentType = this.base64 ? middle.substring(0, middle.length - ';base64'.length) : middle;
          }

          this.rest = dataURL.substring(dataURL.indexOf(',') + 1);
        }

        return DataURLParts;
      }();

      function dataURLBytes_(dataUrl) {
        var parts = new DataURLParts(dataUrl);

        if (parts.base64) {
          return base64Bytes_(StringFormat.BASE64, parts.rest);
        } else {
          return percentEncodedBytes_(parts.rest);
        }
      }

      function dataURLContentType_(dataUrl) {
        var parts = new DataURLParts(dataUrl);
        return parts.contentType;
      }

      function endsWith(s, end) {
        var longEnough = s.length >= end.length;

        if (!longEnough) {
          return false;
        }

        return s.substring(s.length - end.length) === end;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var TaskEvent = {
        /** Triggered whenever the task changes or progress is updated. */
        STATE_CHANGED: 'state_changed'
      };
      var InternalTaskState = {
        RUNNING: 'running',
        PAUSING: 'pausing',
        PAUSED: 'paused',
        SUCCESS: 'success',
        CANCELING: 'canceling',
        CANCELED: 'canceled',
        ERROR: 'error'
      };
      var TaskState = {
        /** The task is currently transferring data. */
        RUNNING: 'running',

        /** The task was paused by the user. */
        PAUSED: 'paused',

        /** The task completed successfully. */
        SUCCESS: 'success',

        /** The task was canceled. */
        CANCELED: 'canceled',

        /** The task failed with an error. */
        ERROR: 'error'
      };

      function taskStateFromInternalTaskState(state) {
        switch (state) {
          case InternalTaskState.RUNNING:
          case InternalTaskState.PAUSING:
          case InternalTaskState.CANCELING:
            return TaskState.RUNNING;

          case InternalTaskState.PAUSED:
            return TaskState.PAUSED;

          case InternalTaskState.SUCCESS:
            return TaskState.SUCCESS;

          case InternalTaskState.CANCELED:
            return TaskState.CANCELED;

          case InternalTaskState.ERROR:
            return TaskState.ERROR;

          default:
            // TODO(andysoto): assert(false);
            return TaskState.ERROR;
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @return False if the object is undefined or null, true otherwise.
       */


      function isDef(p) {
        return p != null;
      }

      function isJustDef(p) {
        return p !== void 0;
      } // eslint-disable-next-line @typescript-eslint/ban-types


      function isFunction(p) {
        return typeof p === 'function';
      }

      function isObject(p) {
        return typeof p === 'object';
      }

      function isNonNullObject(p) {
        return isObject(p) && p !== null;
      }

      function isNonArrayObject(p) {
        return isObject(p) && !Array.isArray(p);
      }

      function isString(p) {
        return typeof p === 'string' || p instanceof String;
      }

      function isInteger(p) {
        return isNumber(p) && Number.isInteger(p);
      }

      function isNumber(p) {
        return typeof p === 'number' || p instanceof Number;
      }

      function isNativeBlob(p) {
        return isNativeBlobDefined() && p instanceof Blob;
      }

      function isNativeBlobDefined() {
        return typeof Blob !== 'undefined';
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @enum{number}
       */


      var ErrorCode;

      (function (ErrorCode) {
        ErrorCode[ErrorCode["NO_ERROR"] = 0] = "NO_ERROR";
        ErrorCode[ErrorCode["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
        ErrorCode[ErrorCode["ABORT"] = 2] = "ABORT";
      })(ErrorCode || (ErrorCode = {}));
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * We use this instead of goog.net.XhrIo because goog.net.XhrIo is hyuuuuge and
       * doesn't work in React Native on Android.
       */


      var NetworkXhrIo =
      /** @class */
      function () {
        function NetworkXhrIo() {
          var _this = this;

          this.sent_ = false;
          this.xhr_ = new XMLHttpRequest();
          this.errorCode_ = ErrorCode.NO_ERROR;
          this.sendPromise_ = new Promise(function (resolve) {
            _this.xhr_.addEventListener('abort', function () {
              _this.errorCode_ = ErrorCode.ABORT;
              resolve(_this);
            });

            _this.xhr_.addEventListener('error', function () {
              _this.errorCode_ = ErrorCode.NETWORK_ERROR;
              resolve(_this);
            });

            _this.xhr_.addEventListener('load', function () {
              resolve(_this);
            });
          });
        }
        /**
         * @override
         */


        NetworkXhrIo.prototype.send = function (url, method, body, headers) {
          if (this.sent_) {
            throw internalError('cannot .send() more than once');
          }

          this.sent_ = true;
          this.xhr_.open(method, url, true);

          if (isDef(headers)) {
            for (var key in headers) {
              if (headers.hasOwnProperty(key)) {
                this.xhr_.setRequestHeader(key, headers[key].toString());
              }
            }
          }

          if (isDef(body)) {
            this.xhr_.send(body);
          } else {
            this.xhr_.send();
          }

          return this.sendPromise_;
        };
        /**
         * @override
         */


        NetworkXhrIo.prototype.getErrorCode = function () {
          if (!this.sent_) {
            throw internalError('cannot .getErrorCode() before sending');
          }

          return this.errorCode_;
        };
        /**
         * @override
         */


        NetworkXhrIo.prototype.getStatus = function () {
          if (!this.sent_) {
            throw internalError('cannot .getStatus() before sending');
          }

          try {
            return this.xhr_.status;
          } catch (e) {
            return -1;
          }
        };
        /**
         * @override
         */


        NetworkXhrIo.prototype.getResponseText = function () {
          if (!this.sent_) {
            throw internalError('cannot .getResponseText() before sending');
          }

          return this.xhr_.responseText;
        };
        /**
         * Aborts the request.
         * @override
         */


        NetworkXhrIo.prototype.abort = function () {
          this.xhr_.abort();
        };
        /**
         * @override
         */


        NetworkXhrIo.prototype.getResponseHeader = function (header) {
          return this.xhr_.getResponseHeader(header);
        };
        /**
         * @override
         */


        NetworkXhrIo.prototype.addUploadProgressListener = function (listener) {
          if (isDef(this.xhr_.upload)) {
            this.xhr_.upload.addEventListener('progress', listener);
          }
        };
        /**
         * @override
         */


        NetworkXhrIo.prototype.removeUploadProgressListener = function (listener) {
          if (isDef(this.xhr_.upload)) {
            this.xhr_.upload.removeEventListener('progress', listener);
          }
        };

        return NetworkXhrIo;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Factory-like class for creating XhrIo instances.
       */


      var XhrIoPool =
      /** @class */
      function () {
        function XhrIoPool() {}

        XhrIoPool.prototype.createXhrIo = function () {
          return new NetworkXhrIo();
        };

        return XhrIoPool;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function getBlobBuilder() {
        if (typeof BlobBuilder !== 'undefined') {
          return BlobBuilder;
        } else if (typeof WebKitBlobBuilder !== 'undefined') {
          return WebKitBlobBuilder;
        } else {
          return undefined;
        }
      }
      /**
       * Concatenates one or more values together and converts them to a Blob.
       *
       * @param args The values that will make up the resulting blob.
       * @return The blob.
       */


      function getBlob() {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        var BlobBuilder = getBlobBuilder();

        if (BlobBuilder !== undefined) {
          var bb = new BlobBuilder();

          for (var i = 0; i < args.length; i++) {
            bb.append(args[i]);
          }

          return bb.getBlob();
        } else {
          if (isNativeBlobDefined()) {
            return new Blob(args);
          } else {
            throw Error("This browser doesn't seem to support creating Blobs");
          }
        }
      }
      /**
       * Slices the blob. The returned blob contains data from the start byte
       * (inclusive) till the end byte (exclusive). Negative indices cannot be used.
       *
       * @param blob The blob to be sliced.
       * @param start Index of the starting byte.
       * @param end Index of the ending byte.
       * @return The blob slice or null if not supported.
       */


      function sliceBlob(blob, start, end) {
        if (blob.webkitSlice) {
          return blob.webkitSlice(start, end);
        } else if (blob.mozSlice) {
          return blob.mozSlice(start, end);
        } else if (blob.slice) {
          return blob.slice(start, end);
        }

        return null;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @param opt_elideCopy If true, doesn't copy mutable input data
       *     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
       *     modified after this blob's construction.
       */


      var FbsBlob =
      /** @class */
      function () {
        function FbsBlob(data, elideCopy) {
          var size = 0;
          var blobType = '';

          if (isNativeBlob(data)) {
            this.data_ = data;
            size = data.size;
            blobType = data.type;
          } else if (data instanceof ArrayBuffer) {
            if (elideCopy) {
              this.data_ = new Uint8Array(data);
            } else {
              this.data_ = new Uint8Array(data.byteLength);
              this.data_.set(new Uint8Array(data));
            }

            size = this.data_.length;
          } else if (data instanceof Uint8Array) {
            if (elideCopy) {
              this.data_ = data;
            } else {
              this.data_ = new Uint8Array(data.length);
              this.data_.set(data);
            }

            size = data.length;
          }

          this.size_ = size;
          this.type_ = blobType;
        }

        FbsBlob.prototype.size = function () {
          return this.size_;
        };

        FbsBlob.prototype.type = function () {
          return this.type_;
        };

        FbsBlob.prototype.slice = function (startByte, endByte) {
          if (isNativeBlob(this.data_)) {
            var realBlob = this.data_;
            var sliced = sliceBlob(realBlob, startByte, endByte);

            if (sliced === null) {
              return null;
            }

            return new FbsBlob(sliced);
          } else {
            var slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
            return new FbsBlob(slice, true);
          }
        };

        FbsBlob.getBlob = function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          if (isNativeBlobDefined()) {
            var blobby = args.map(function (val) {
              if (val instanceof FbsBlob) {
                return val.data_;
              } else {
                return val;
              }
            });
            return new FbsBlob(getBlob.apply(null, blobby));
          } else {
            var uint8Arrays = args.map(function (val) {
              if (isString(val)) {
                return dataFromString(StringFormat.RAW, val).data;
              } else {
                // Blobs don't exist, so this has to be a Uint8Array.
                return val.data_;
              }
            });
            var finalLength_1 = 0;
            uint8Arrays.forEach(function (array) {
              finalLength_1 += array.byteLength;
            });
            var merged_1 = new Uint8Array(finalLength_1);
            var index_1 = 0;
            uint8Arrays.forEach(function (array) {
              for (var i = 0; i < array.length; i++) {
                merged_1[index_1++] = array[i];
              }
            });
            return new FbsBlob(merged_1, true);
          }
        };

        FbsBlob.prototype.uploadData = function () {
          return this.data_;
        };

        return FbsBlob;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @struct
       */


      var Location =
      /** @class */
      function () {
        function Location(bucket, path) {
          this.bucket = bucket;
          this.path_ = path;
        }

        Object.defineProperty(Location.prototype, "path", {
          get: function get() {
            return this.path_;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Location.prototype, "isRoot", {
          get: function get() {
            return this.path.length === 0;
          },
          enumerable: false,
          configurable: true
        });

        Location.prototype.fullServerUrl = function () {
          var encode = encodeURIComponent;
          return '/b/' + encode(this.bucket) + '/o/' + encode(this.path);
        };

        Location.prototype.bucketOnlyServerUrl = function () {
          var encode = encodeURIComponent;
          return '/b/' + encode(this.bucket) + '/o';
        };

        Location.makeFromBucketSpec = function (bucketString) {
          var bucketLocation;

          try {
            bucketLocation = Location.makeFromUrl(bucketString);
          } catch (e) {
            // Not valid URL, use as-is. This lets you put bare bucket names in
            // config.
            return new Location(bucketString, '');
          }

          if (bucketLocation.path === '') {
            return bucketLocation;
          } else {
            throw invalidDefaultBucket(bucketString);
          }
        };

        Location.makeFromUrl = function (url) {
          var location = null;
          var bucketDomain = '([A-Za-z0-9.\\-_]+)';

          function gsModify(loc) {
            if (loc.path.charAt(loc.path.length - 1) === '/') {
              loc.path_ = loc.path_.slice(0, -1);
            }
          }

          var gsPath = '(/(.*))?$';
          var gsRegex = new RegExp('^gs://' + bucketDomain + gsPath, 'i');
          var gsIndices = {
            bucket: 1,
            path: 3
          };

          function httpModify(loc) {
            loc.path_ = decodeURIComponent(loc.path);
          }

          var version = 'v[A-Za-z0-9_]+';
          var firebaseStorageHost = DEFAULT_HOST.replace(/[.]/g, '\\.');
          var firebaseStoragePath = '(/([^?#]*).*)?$';
          var firebaseStorageRegExp = new RegExp("^https?://" + firebaseStorageHost + "/" + version + "/b/" + bucketDomain + "/o" + firebaseStoragePath, 'i');
          var firebaseStorageIndices = {
            bucket: 1,
            path: 3
          };
          var cloudStorageHost = '(?:storage.googleapis.com|storage.cloud.google.com)';
          var cloudStoragePath = '([^?#]*)';
          var cloudStorageRegExp = new RegExp("^https?://" + cloudStorageHost + "/" + bucketDomain + "/" + cloudStoragePath, 'i');
          var cloudStorageIndices = {
            bucket: 1,
            path: 2
          };
          var groups = [{
            regex: gsRegex,
            indices: gsIndices,
            postModify: gsModify
          }, {
            regex: firebaseStorageRegExp,
            indices: firebaseStorageIndices,
            postModify: httpModify
          }, {
            regex: cloudStorageRegExp,
            indices: cloudStorageIndices,
            postModify: httpModify
          }];

          for (var i = 0; i < groups.length; i++) {
            var group = groups[i];
            var captures = group.regex.exec(url);

            if (captures) {
              var bucketValue = captures[group.indices.bucket];
              var pathValue = captures[group.indices.path];

              if (!pathValue) {
                pathValue = '';
              }

              location = new Location(bucketValue, pathValue);
              group.postModify(location);
              break;
            }
          }

          if (location == null) {
            throw invalidUrl(url);
          }

          return location;
        };

        return Location;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Returns the Object resulting from parsing the given JSON, or null if the
       * given string does not represent a JSON object.
       */


      function jsonObjectOrNull(s) {
        var obj;

        try {
          obj = JSON.parse(s);
        } catch (e) {
          return null;
        }

        if (isNonArrayObject(obj)) {
          return obj;
        } else {
          return null;
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @fileoverview Contains helper methods for manipulating paths.
       */

      /**
       * @return Null if the path is already at the root.
       */


      function parent(path) {
        if (path.length === 0) {
          return null;
        }

        var index = path.lastIndexOf('/');

        if (index === -1) {
          return '';
        }

        var newPath = path.slice(0, index);
        return newPath;
      }

      function child(path, childPath) {
        var canonicalChildPath = childPath.split('/').filter(function (component) {
          return component.length > 0;
        }).join('/');

        if (path.length === 0) {
          return canonicalChildPath;
        } else {
          return path + '/' + canonicalChildPath;
        }
      }
      /**
       * Returns the last component of a path.
       * '/foo/bar' -> 'bar'
       * '/foo/bar/baz/' -> 'baz/'
       * '/a' -> 'a'
       */


      function lastComponent(path) {
        var index = path.lastIndexOf('/', path.length - 2);

        if (index === -1) {
          return path;
        } else {
          return path.slice(index + 1);
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function makeUrl(urlPart) {
        return "https://" + DEFAULT_HOST + "/v0" + urlPart;
      }

      function makeQueryString(params) {
        var encode = encodeURIComponent;
        var queryPart = '?';

        for (var key in params) {
          if (params.hasOwnProperty(key)) {
            // @ts-ignore TODO: remove once typescript is upgraded to 3.5.x
            var nextPart = encode(key) + '=' + encode(params[key]);
            queryPart = queryPart + nextPart + '&';
          }
        } // Chop off the extra '&' or '?' on the end


        queryPart = queryPart.slice(0, -1);
        return queryPart;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function noXform_(metadata, value) {
        return value;
      }
      /**
       * @struct
       */


      var Mapping =
      /** @class */
      function () {
        function Mapping(server, local, writable, xform) {
          this.server = server;
          this.local = local || server;
          this.writable = !!writable;
          this.xform = xform || noXform_;
        }

        return Mapping;
      }();

      var mappings_ = null;

      function xformPath(fullPath) {
        if (!isString(fullPath) || fullPath.length < 2) {
          return fullPath;
        } else {
          return lastComponent(fullPath);
        }
      }

      function getMappings() {
        if (mappings_) {
          return mappings_;
        }

        var mappings = [];
        mappings.push(new Mapping('bucket'));
        mappings.push(new Mapping('generation'));
        mappings.push(new Mapping('metageneration'));
        mappings.push(new Mapping('name', 'fullPath', true));

        function mappingsXformPath(_metadata, fullPath) {
          return xformPath(fullPath);
        }

        var nameMapping = new Mapping('name');
        nameMapping.xform = mappingsXformPath;
        mappings.push(nameMapping);
        /**
         * Coerces the second param to a number, if it is defined.
         */

        function xformSize(_metadata, size) {
          if (isDef(size)) {
            return Number(size);
          } else {
            return size;
          }
        }

        var sizeMapping = new Mapping('size');
        sizeMapping.xform = xformSize;
        mappings.push(sizeMapping);
        mappings.push(new Mapping('timeCreated'));
        mappings.push(new Mapping('updated'));
        mappings.push(new Mapping('md5Hash', null, true));
        mappings.push(new Mapping('cacheControl', null, true));
        mappings.push(new Mapping('contentDisposition', null, true));
        mappings.push(new Mapping('contentEncoding', null, true));
        mappings.push(new Mapping('contentLanguage', null, true));
        mappings.push(new Mapping('contentType', null, true));
        mappings.push(new Mapping('metadata', 'customMetadata', true));
        mappings_ = mappings;
        return mappings_;
      }

      function addRef(metadata, service) {
        function generateRef() {
          var bucket = metadata['bucket'];
          var path = metadata['fullPath'];
          var loc = new Location(bucket, path);
          return service.makeStorageReference(loc);
        }

        Object.defineProperty(metadata, 'ref', {
          get: generateRef
        });
      }

      function fromResource(service, resource, mappings) {
        var metadata = {};
        metadata['type'] = 'file';
        var len = mappings.length;

        for (var i = 0; i < len; i++) {
          var mapping = mappings[i];
          metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
        }

        addRef(metadata, service);
        return metadata;
      }

      function fromResourceString(service, resourceString, mappings) {
        var obj = jsonObjectOrNull(resourceString);

        if (obj === null) {
          return null;
        }

        var resource = obj;
        return fromResource(service, resource, mappings);
      }

      function downloadUrlFromResourceString(metadata, resourceString) {
        var obj = jsonObjectOrNull(resourceString);

        if (obj === null) {
          return null;
        }

        if (!isString(obj['downloadTokens'])) {
          // This can happen if objects are uploaded through GCS and retrieved
          // through list, so we don't want to throw an Error.
          return null;
        }

        var tokens = obj['downloadTokens'];

        if (tokens.length === 0) {
          return null;
        }

        var encode = encodeURIComponent;
        var tokensList = tokens.split(',');
        var urls = tokensList.map(function (token) {
          var bucket = metadata['bucket'];
          var path = metadata['fullPath'];
          var urlPart = '/b/' + encode(bucket) + '/o/' + encode(path);
          var base = makeUrl(urlPart);
          var queryString = makeQueryString({
            alt: 'media',
            token: token
          });
          return base + queryString;
        });
        return urls[0];
      }

      function toResourceString(metadata, mappings) {
        var resource = {};
        var len = mappings.length;

        for (var i = 0; i < len; i++) {
          var mapping = mappings[i];

          if (mapping.writable) {
            resource[mapping.server] = metadata[mapping.local];
          }
        }

        return JSON.stringify(resource);
      }

      function metadataValidator(p) {
        if (!isObject(p) || !p) {
          throw 'Expected Metadata object.';
        }

        for (var key in p) {
          if (p.hasOwnProperty(key)) {
            var val = p[key];

            if (key === 'customMetadata') {
              if (!isObject(val)) {
                throw 'Expected object for \'customMetadata\' mapping.';
              }
            } else {
              if (isNonNullObject(val)) {
                throw "Mapping for '" + key + "' cannot be an object.";
              }
            }
          }
        }
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var MAX_RESULTS_KEY = 'maxResults';
      var MAX_MAX_RESULTS = 1000;
      var PAGE_TOKEN_KEY = 'pageToken';
      var PREFIXES_KEY = 'prefixes';
      var ITEMS_KEY = 'items';

      function fromBackendResponse(service, bucket, resource) {
        var listResult = {
          prefixes: [],
          items: [],
          nextPageToken: resource['nextPageToken']
        };

        if (resource[PREFIXES_KEY]) {
          for (var _i = 0, _a = resource[PREFIXES_KEY]; _i < _a.length; _i++) {
            var path = _a[_i];
            var pathWithoutTrailingSlash = path.replace(/\/$/, '');
            var reference = service.makeStorageReference(new Location(bucket, pathWithoutTrailingSlash));
            listResult.prefixes.push(reference);
          }
        }

        if (resource[ITEMS_KEY]) {
          for (var _b = 0, _c = resource[ITEMS_KEY]; _b < _c.length; _b++) {
            var item = _c[_b];
            var reference = service.makeStorageReference(new Location(bucket, item['name']));
            listResult.items.push(reference);
          }
        }

        return listResult;
      }

      function fromResponseString(service, bucket, resourceString) {
        var obj = jsonObjectOrNull(resourceString);

        if (obj === null) {
          return null;
        }

        var resource = obj;
        return fromBackendResponse(service, bucket, resource);
      }

      function listOptionsValidator(p) {
        if (!isObject(p) || !p) {
          throw 'Expected ListOptions object.';
        }

        for (var key in p) {
          if (key === MAX_RESULTS_KEY) {
            if (!isInteger(p[MAX_RESULTS_KEY]) || p[MAX_RESULTS_KEY] <= 0) {
              throw 'Expected maxResults to be a positive number.';
            }

            if (p[MAX_RESULTS_KEY] > 1000) {
              throw "Expected maxResults to be less than or equal to " + MAX_MAX_RESULTS + ".";
            }
          } else if (key === PAGE_TOKEN_KEY) {
            if (p[PAGE_TOKEN_KEY] && !isString(p[PAGE_TOKEN_KEY])) {
              throw 'Expected pageToken to be string.';
            }
          } else {
            throw 'Unknown option: ' + key;
          }
        }
      }

      var RequestInfo =
      /** @class */
      function () {
        function RequestInfo(url, method,
        /**
         * Returns the value with which to resolve the request's promise. Only called
         * if the request is successful. Throw from this function to reject the
         * returned Request's promise with the thrown error.
         * Note: The XhrIo passed to this function may be reused after this callback
         * returns. Do not keep a reference to it in any way.
         */
        handler, timeout) {
          this.url = url;
          this.method = method;
          this.handler = handler;
          this.timeout = timeout;
          this.urlParams = {};
          this.headers = {};
          this.body = null;
          this.errorHandler = null;
          /**
           * Called with the current number of bytes uploaded and total size (-1 if not
           * computable) of the request body (i.e. used to report upload progress).
           */

          this.progressCallback = null;
          this.successCodes = [200];
          this.additionalRetryCodes = [];
        }

        return RequestInfo;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Throws the UNKNOWN FirebaseStorageError if cndn is false.
       */


      function handlerCheck(cndn) {
        if (!cndn) {
          throw unknown();
        }
      }

      function metadataHandler(service, mappings) {
        function handler(xhr, text) {
          var metadata = fromResourceString(service, text, mappings);
          handlerCheck(metadata !== null);
          return metadata;
        }

        return handler;
      }

      function listHandler(service, bucket) {
        function handler(xhr, text) {
          var listResult = fromResponseString(service, bucket, text);
          handlerCheck(listResult !== null);
          return listResult;
        }

        return handler;
      }

      function downloadUrlHandler(service, mappings) {
        function handler(xhr, text) {
          var metadata = fromResourceString(service, text, mappings);
          handlerCheck(metadata !== null);
          return downloadUrlFromResourceString(metadata, text);
        }

        return handler;
      }

      function sharedErrorHandler(location) {
        function errorHandler(xhr, err) {
          var newErr;

          if (xhr.getStatus() === 401) {
            newErr = unauthenticated();
          } else {
            if (xhr.getStatus() === 402) {
              newErr = quotaExceeded(location.bucket);
            } else {
              if (xhr.getStatus() === 403) {
                newErr = unauthorized(location.path);
              } else {
                newErr = err;
              }
            }
          }

          newErr.setServerResponseProp(err.serverResponseProp());
          return newErr;
        }

        return errorHandler;
      }

      function objectErrorHandler(location) {
        var shared = sharedErrorHandler(location);

        function errorHandler(xhr, err) {
          var newErr = shared(xhr, err);

          if (xhr.getStatus() === 404) {
            newErr = objectNotFound(location.path);
          }

          newErr.setServerResponseProp(err.serverResponseProp());
          return newErr;
        }

        return errorHandler;
      }

      function getMetadata(service, location, mappings) {
        var urlPart = location.fullServerUrl();
        var url = makeUrl(urlPart);
        var method = 'GET';
        var timeout = service.maxOperationRetryTime;
        var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
        requestInfo.errorHandler = objectErrorHandler(location);
        return requestInfo;
      }

      function list(service, location, delimiter, pageToken, maxResults) {
        var urlParams = {};

        if (location.isRoot) {
          urlParams['prefix'] = '';
        } else {
          urlParams['prefix'] = location.path + '/';
        }

        if (delimiter && delimiter.length > 0) {
          urlParams['delimiter'] = delimiter;
        }

        if (pageToken) {
          urlParams['pageToken'] = pageToken;
        }

        if (maxResults) {
          urlParams['maxResults'] = maxResults;
        }

        var urlPart = location.bucketOnlyServerUrl();
        var url = makeUrl(urlPart);
        var method = 'GET';
        var timeout = service.maxOperationRetryTime;
        var requestInfo = new RequestInfo(url, method, listHandler(service, location.bucket), timeout);
        requestInfo.urlParams = urlParams;
        requestInfo.errorHandler = sharedErrorHandler(location);
        return requestInfo;
      }

      function getDownloadUrl(service, location, mappings) {
        var urlPart = location.fullServerUrl();
        var url = makeUrl(urlPart);
        var method = 'GET';
        var timeout = service.maxOperationRetryTime;
        var requestInfo = new RequestInfo(url, method, downloadUrlHandler(service, mappings), timeout);
        requestInfo.errorHandler = objectErrorHandler(location);
        return requestInfo;
      }

      function updateMetadata(service, location, metadata, mappings) {
        var urlPart = location.fullServerUrl();
        var url = makeUrl(urlPart);
        var method = 'PATCH';
        var body = toResourceString(metadata, mappings);
        var headers = {
          'Content-Type': 'application/json; charset=utf-8'
        };
        var timeout = service.maxOperationRetryTime;
        var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
        requestInfo.headers = headers;
        requestInfo.body = body;
        requestInfo.errorHandler = objectErrorHandler(location);
        return requestInfo;
      }

      function deleteObject(service, location) {
        var urlPart = location.fullServerUrl();
        var url = makeUrl(urlPart);
        var method = 'DELETE';
        var timeout = service.maxOperationRetryTime;

        function handler(_xhr, _text) {}

        var requestInfo = new RequestInfo(url, method, handler, timeout);
        requestInfo.successCodes = [200, 204];
        requestInfo.errorHandler = objectErrorHandler(location);
        return requestInfo;
      }

      function determineContentType_(metadata, blob) {
        return metadata && metadata['contentType'] || blob && blob.type() || 'application/octet-stream';
      }

      function metadataForUpload_(location, blob, metadata) {
        var metadataClone = Object.assign({}, metadata);
        metadataClone['fullPath'] = location.path;
        metadataClone['size'] = blob.size();

        if (!metadataClone['contentType']) {
          metadataClone['contentType'] = determineContentType_(null, blob);
        }

        return metadataClone;
      }

      function multipartUpload(service, location, mappings, blob, metadata) {
        var urlPart = location.bucketOnlyServerUrl();
        var headers = {
          'X-Goog-Upload-Protocol': 'multipart'
        };

        function genBoundary() {
          var str = '';

          for (var i = 0; i < 2; i++) {
            str = str + Math.random().toString().slice(2);
          }

          return str;
        }

        var boundary = genBoundary();
        headers['Content-Type'] = 'multipart/related; boundary=' + boundary;
        var metadata_ = metadataForUpload_(location, blob, metadata);
        var metadataString = toResourceString(metadata_, mappings);
        var preBlobPart = '--' + boundary + '\r\n' + 'Content-Type: application/json; charset=utf-8\r\n\r\n' + metadataString + '\r\n--' + boundary + '\r\n' + 'Content-Type: ' + metadata_['contentType'] + '\r\n\r\n';
        var postBlobPart = '\r\n--' + boundary + '--';
        var body = FbsBlob.getBlob(preBlobPart, blob, postBlobPart);

        if (body === null) {
          throw cannotSliceBlob();
        }

        var urlParams = {
          name: metadata_['fullPath']
        };
        var url = makeUrl(urlPart);
        var method = 'POST';
        var timeout = service.maxUploadRetryTime;
        var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
        requestInfo.urlParams = urlParams;
        requestInfo.headers = headers;
        requestInfo.body = body.uploadData();
        requestInfo.errorHandler = sharedErrorHandler(location);
        return requestInfo;
      }
      /**
       * @param current The number of bytes that have been uploaded so far.
       * @param total The total number of bytes in the upload.
       * @param opt_finalized True if the server has finished the upload.
       * @param opt_metadata The upload metadata, should
       *     only be passed if opt_finalized is true.
       * @struct
       */


      var ResumableUploadStatus =
      /** @class */
      function () {
        function ResumableUploadStatus(current, total, finalized, metadata) {
          this.current = current;
          this.total = total;
          this.finalized = !!finalized;
          this.metadata = metadata || null;
        }

        return ResumableUploadStatus;
      }();

      function checkResumeHeader_(xhr, allowed) {
        var status = null;

        try {
          status = xhr.getResponseHeader('X-Goog-Upload-Status');
        } catch (e) {
          handlerCheck(false);
        }

        var allowedStatus = allowed || ['active'];
        handlerCheck(!!status && allowedStatus.indexOf(status) !== -1);
        return status;
      }

      function createResumableUpload(service, location, mappings, blob, metadata) {
        var urlPart = location.bucketOnlyServerUrl();
        var metadataForUpload = metadataForUpload_(location, blob, metadata);
        var urlParams = {
          name: metadataForUpload['fullPath']
        };
        var url = makeUrl(urlPart);
        var method = 'POST';
        var headers = {
          'X-Goog-Upload-Protocol': 'resumable',
          'X-Goog-Upload-Command': 'start',
          'X-Goog-Upload-Header-Content-Length': blob.size(),
          'X-Goog-Upload-Header-Content-Type': metadataForUpload['contentType'],
          'Content-Type': 'application/json; charset=utf-8'
        };
        var body = toResourceString(metadataForUpload, mappings);
        var timeout = service.maxUploadRetryTime;

        function handler(xhr) {
          checkResumeHeader_(xhr);
          var url;

          try {
            url = xhr.getResponseHeader('X-Goog-Upload-URL');
          } catch (e) {
            handlerCheck(false);
          }

          handlerCheck(isString(url));
          return url;
        }

        var requestInfo = new RequestInfo(url, method, handler, timeout);
        requestInfo.urlParams = urlParams;
        requestInfo.headers = headers;
        requestInfo.body = body;
        requestInfo.errorHandler = sharedErrorHandler(location);
        return requestInfo;
      }
      /**
       * @param url From a call to fbs.requests.createResumableUpload.
       */


      function getResumableUploadStatus(service, location, url, blob) {
        var headers = {
          'X-Goog-Upload-Command': 'query'
        };

        function handler(xhr) {
          var status = checkResumeHeader_(xhr, ['active', 'final']);
          var sizeString = null;

          try {
            sizeString = xhr.getResponseHeader('X-Goog-Upload-Size-Received');
          } catch (e) {
            handlerCheck(false);
          }

          if (!sizeString) {
            // null or empty string
            handlerCheck(false);
          }

          var size = Number(sizeString);
          handlerCheck(!isNaN(size));
          return new ResumableUploadStatus(size, blob.size(), status === 'final');
        }

        var method = 'POST';
        var timeout = service.maxUploadRetryTime;
        var requestInfo = new RequestInfo(url, method, handler, timeout);
        requestInfo.headers = headers;
        requestInfo.errorHandler = sharedErrorHandler(location);
        return requestInfo;
      }
      /**
       * Any uploads via the resumable upload API must transfer a number of bytes
       * that is a multiple of this number.
       */


      var resumableUploadChunkSize = 256 * 1024;
      /**
       * @param url From a call to fbs.requests.createResumableUpload.
       * @param chunkSize Number of bytes to upload.
       * @param status The previous status.
       *     If not passed or null, we start from the beginning.
       * @throws fbs.Error If the upload is already complete, the passed in status
       *     has a final size inconsistent with the blob, or the blob cannot be sliced
       *     for upload.
       */

      function continueResumableUpload(location, service, url, blob, chunkSize, mappings, status, progressCallback) {
        // TODO(andysoto): standardize on internal asserts
        // assert(!(opt_status && opt_status.finalized));
        var status_ = new ResumableUploadStatus(0, 0);

        if (status) {
          status_.current = status.current;
          status_.total = status.total;
        } else {
          status_.current = 0;
          status_.total = blob.size();
        }

        if (blob.size() !== status_.total) {
          throw serverFileWrongSize();
        }

        var bytesLeft = status_.total - status_.current;
        var bytesToUpload = bytesLeft;

        if (chunkSize > 0) {
          bytesToUpload = Math.min(bytesToUpload, chunkSize);
        }

        var startByte = status_.current;
        var endByte = startByte + bytesToUpload;
        var uploadCommand = bytesToUpload === bytesLeft ? 'upload, finalize' : 'upload';
        var headers = {
          'X-Goog-Upload-Command': uploadCommand,
          'X-Goog-Upload-Offset': status_.current
        };
        var body = blob.slice(startByte, endByte);

        if (body === null) {
          throw cannotSliceBlob();
        }

        function handler(xhr, text) {
          // TODO(andysoto): Verify the MD5 of each uploaded range:
          // the 'x-range-md5' header comes back with status code 308 responses.
          // We'll only be able to bail out though, because you can't re-upload a
          // range that you previously uploaded.
          var uploadStatus = checkResumeHeader_(xhr, ['active', 'final']);
          var newCurrent = status_.current + bytesToUpload;
          var size = blob.size();
          var metadata;

          if (uploadStatus === 'final') {
            metadata = metadataHandler(service, mappings)(xhr, text);
          } else {
            metadata = null;
          }

          return new ResumableUploadStatus(newCurrent, size, uploadStatus === 'final', metadata);
        }

        var method = 'POST';
        var timeout = service.maxUploadRetryTime;
        var requestInfo = new RequestInfo(url, method, handler, timeout);
        requestInfo.headers = headers;
        requestInfo.body = body.uploadData();
        requestInfo.progressCallback = progressCallback || null;
        requestInfo.errorHandler = sharedErrorHandler(location);
        return requestInfo;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @struct
       */


      var Observer =
      /** @class */
      function () {
        function Observer(nextOrObserver, error, complete) {
          var asFunctions = isFunction(nextOrObserver) || isDef(error) || isDef(complete);

          if (asFunctions) {
            this.next = nextOrObserver;
            this.error = error || null;
            this.complete = complete || null;
          } else {
            var observer = nextOrObserver;
            this.next = observer.next || null;
            this.error = observer.error || null;
            this.complete = observer.complete || null;
          }
        }

        return Observer;
      }();

      var UploadTaskSnapshot =
      /** @class */
      function () {
        function UploadTaskSnapshot(bytesTransferred, totalBytes, state, metadata, task, ref) {
          this.bytesTransferred = bytesTransferred;
          this.totalBytes = totalBytes;
          this.state = state;
          this.metadata = metadata;
          this.task = task;
          this.ref = ref;
        }

        return UploadTaskSnapshot;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @param name Name of the function.
       * @param specs Argument specs.
       * @param passed The actual arguments passed to the function.
       * @throws {fbs.Error} If the arguments are invalid.
       */


      function validate(name, specs, passed) {
        var minArgs = specs.length;
        var maxArgs = specs.length;

        for (var i = 0; i < specs.length; i++) {
          if (specs[i].optional) {
            minArgs = i;
            break;
          }
        }

        var validLength = minArgs <= passed.length && passed.length <= maxArgs;

        if (!validLength) {
          throw invalidArgumentCount(minArgs, maxArgs, name, passed.length);
        }

        for (var i = 0; i < passed.length; i++) {
          try {
            specs[i].validator(passed[i]);
          } catch (e) {
            if (e instanceof Error) {
              throw invalidArgument(i, name, e.message);
            } else {
              throw invalidArgument(i, name, e);
            }
          }
        }
      }
      /**
       * @struct
       */


      var ArgSpec =
      /** @class */
      function () {
        function ArgSpec(validator, optional) {
          var self = this;

          this.validator = function (p) {
            if (self.optional && !isJustDef(p)) {
              return;
            }

            validator(p);
          };

          this.optional = !!optional;
        }

        return ArgSpec;
      }();

      function and_(v1, v2) {
        return function (p) {
          v1(p);
          v2(p);
        };
      }

      function stringSpec(validator, optional) {
        function stringValidator(p) {
          if (!isString(p)) {
            throw 'Expected string.';
          }
        }

        var chainedValidator;

        if (validator) {
          chainedValidator = and_(stringValidator, validator);
        } else {
          chainedValidator = stringValidator;
        }

        return new ArgSpec(chainedValidator, optional);
      }

      function uploadDataSpec() {
        function validator(p) {
          var valid = p instanceof Uint8Array || p instanceof ArrayBuffer || isNativeBlobDefined() && p instanceof Blob;

          if (!valid) {
            throw 'Expected Blob or File.';
          }
        }

        return new ArgSpec(validator);
      }

      function metadataSpec(optional) {
        return new ArgSpec(metadataValidator, optional);
      }

      function listOptionSpec(optional) {
        return new ArgSpec(listOptionsValidator, optional);
      }

      function nonNegativeNumberSpec() {
        function validator(p) {
          var valid = isNumber(p) && p >= 0;

          if (!valid) {
            throw 'Expected a number 0 or greater.';
          }
        }

        return new ArgSpec(validator);
      }

      function looseObjectSpec(validator, optional) {
        function isLooseObjectValidator(p) {
          var isLooseObject = p === null || isDef(p) && p instanceof Object;

          if (!isLooseObject) {
            throw 'Expected an Object.';
          }

          if (validator !== undefined && validator !== null) {
            validator(p);
          }
        }

        return new ArgSpec(isLooseObjectValidator, optional);
      }

      function nullFunctionSpec(optional) {
        function validator(p) {
          var valid = p === null || isFunction(p);

          if (!valid) {
            throw 'Expected a Function.';
          }
        }

        return new ArgSpec(validator, optional);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Returns a function that invokes f with its arguments asynchronously as a
       * microtask, i.e. as soon as possible after the current script returns back
       * into browser code.
       */
      // eslint-disable-next-line @typescript-eslint/ban-types


      function async(f) {
        return function () {
          var argsToForward = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            argsToForward[_i] = arguments[_i];
          } // eslint-disable-next-line @typescript-eslint/no-floating-promises


          Promise.resolve().then(function () {
            return f.apply(void 0, argsToForward);
          });
        };
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Represents a blob being uploaded. Can be used to pause/resume/cancel the
       * upload and manage callbacks for various events.
       */


      var UploadTask =
      /** @class */
      function () {
        /**
         * @param ref The firebaseStorage.Reference object this task came
         *     from, untyped to avoid cyclic dependencies.
         * @param blob The blob to upload.
         */
        function UploadTask(ref, service, location, mappings, blob, metadata) {
          var _this = this;

          if (metadata === void 0) {
            metadata = null;
          }

          this.transferred_ = 0;
          this.needToFetchStatus_ = false;
          this.needToFetchMetadata_ = false;
          this.observers_ = [];
          this.error_ = null;
          this.uploadUrl_ = null;
          this.request_ = null;
          this.chunkMultiplier_ = 1;
          this.resolve_ = null;
          this.reject_ = null;
          this.ref_ = ref;
          this.service_ = service;
          this.location_ = location;
          this.blob_ = blob;
          this.metadata_ = metadata;
          this.mappings_ = mappings;
          this.resumable_ = this.shouldDoResumable_(this.blob_);
          this.state_ = InternalTaskState.RUNNING;

          this.errorHandler_ = function (error) {
            _this.request_ = null;
            _this.chunkMultiplier_ = 1;

            if (error.codeEquals(Code.CANCELED)) {
              _this.needToFetchStatus_ = true;

              _this.completeTransitions_();
            } else {
              _this.error_ = error;

              _this.transition_(InternalTaskState.ERROR);
            }
          };

          this.metadataErrorHandler_ = function (error) {
            _this.request_ = null;

            if (error.codeEquals(Code.CANCELED)) {
              _this.completeTransitions_();
            } else {
              _this.error_ = error;

              _this.transition_(InternalTaskState.ERROR);
            }
          };

          this.promise_ = new Promise(function (resolve, reject) {
            _this.resolve_ = resolve;
            _this.reject_ = reject;

            _this.start_();
          }); // Prevent uncaught rejections on the internal promise from bubbling out
          // to the top level with a dummy handler.

          this.promise_.then(null, function () {});
        }

        UploadTask.prototype.makeProgressCallback_ = function () {
          var _this = this;

          var sizeBefore = this.transferred_;
          return function (loaded) {
            return _this.updateProgress_(sizeBefore + loaded);
          };
        };

        UploadTask.prototype.shouldDoResumable_ = function (blob) {
          return blob.size() > 256 * 1024;
        };

        UploadTask.prototype.start_ = function () {
          if (this.state_ !== InternalTaskState.RUNNING) {
            // This can happen if someone pauses us in a resume callback, for example.
            return;
          }

          if (this.request_ !== null) {
            return;
          }

          if (this.resumable_) {
            if (this.uploadUrl_ === null) {
              this.createResumable_();
            } else {
              if (this.needToFetchStatus_) {
                this.fetchStatus_();
              } else {
                if (this.needToFetchMetadata_) {
                  // Happens if we miss the metadata on upload completion.
                  this.fetchMetadata_();
                } else {
                  this.continueUpload_();
                }
              }
            }
          } else {
            this.oneShotUpload_();
          }
        };

        UploadTask.prototype.resolveToken_ = function (callback) {
          var _this = this; // eslint-disable-next-line @typescript-eslint/no-floating-promises


          this.service_.getAuthToken().then(function (authToken) {
            switch (_this.state_) {
              case InternalTaskState.RUNNING:
                callback(authToken);
                break;

              case InternalTaskState.CANCELING:
                _this.transition_(InternalTaskState.CANCELED);

                break;

              case InternalTaskState.PAUSING:
                _this.transition_(InternalTaskState.PAUSED);

                break;
            }
          });
        }; // TODO(andysoto): assert false


        UploadTask.prototype.createResumable_ = function () {
          var _this = this;

          this.resolveToken_(function (authToken) {
            var requestInfo = createResumableUpload(_this.service_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);

            var createRequest = _this.service_.makeRequest(requestInfo, authToken);

            _this.request_ = createRequest;
            createRequest.getPromise().then(function (url) {
              _this.request_ = null;
              _this.uploadUrl_ = url;
              _this.needToFetchStatus_ = false;

              _this.completeTransitions_();
            }, _this.errorHandler_);
          });
        };

        UploadTask.prototype.fetchStatus_ = function () {
          var _this = this; // TODO(andysoto): assert(this.uploadUrl_ !== null);


          var url = this.uploadUrl_;
          this.resolveToken_(function (authToken) {
            var requestInfo = getResumableUploadStatus(_this.service_, _this.location_, url, _this.blob_);

            var statusRequest = _this.service_.makeRequest(requestInfo, authToken);

            _this.request_ = statusRequest;
            statusRequest.getPromise().then(function (status) {
              status = status;
              _this.request_ = null;

              _this.updateProgress_(status.current);

              _this.needToFetchStatus_ = false;

              if (status.finalized) {
                _this.needToFetchMetadata_ = true;
              }

              _this.completeTransitions_();
            }, _this.errorHandler_);
          });
        };

        UploadTask.prototype.continueUpload_ = function () {
          var _this = this;

          var chunkSize = resumableUploadChunkSize * this.chunkMultiplier_;
          var status = new ResumableUploadStatus(this.transferred_, this.blob_.size()); // TODO(andysoto): assert(this.uploadUrl_ !== null);

          var url = this.uploadUrl_;
          this.resolveToken_(function (authToken) {
            var requestInfo;

            try {
              requestInfo = continueResumableUpload(_this.location_, _this.service_, url, _this.blob_, chunkSize, _this.mappings_, status, _this.makeProgressCallback_());
            } catch (e) {
              _this.error_ = e;

              _this.transition_(InternalTaskState.ERROR);

              return;
            }

            var uploadRequest = _this.service_.makeRequest(requestInfo, authToken);

            _this.request_ = uploadRequest;
            uploadRequest.getPromise().then(function (newStatus) {
              _this.increaseMultiplier_();

              _this.request_ = null;

              _this.updateProgress_(newStatus.current);

              if (newStatus.finalized) {
                _this.metadata_ = newStatus.metadata;

                _this.transition_(InternalTaskState.SUCCESS);
              } else {
                _this.completeTransitions_();
              }
            }, _this.errorHandler_);
          });
        };

        UploadTask.prototype.increaseMultiplier_ = function () {
          var currentSize = resumableUploadChunkSize * this.chunkMultiplier_; // Max chunk size is 32M.

          if (currentSize < 32 * 1024 * 1024) {
            this.chunkMultiplier_ *= 2;
          }
        };

        UploadTask.prototype.fetchMetadata_ = function () {
          var _this = this;

          this.resolveToken_(function (authToken) {
            var requestInfo = getMetadata(_this.service_, _this.location_, _this.mappings_);

            var metadataRequest = _this.service_.makeRequest(requestInfo, authToken);

            _this.request_ = metadataRequest;
            metadataRequest.getPromise().then(function (metadata) {
              _this.request_ = null;
              _this.metadata_ = metadata;

              _this.transition_(InternalTaskState.SUCCESS);
            }, _this.metadataErrorHandler_);
          });
        };

        UploadTask.prototype.oneShotUpload_ = function () {
          var _this = this;

          this.resolveToken_(function (authToken) {
            var requestInfo = multipartUpload(_this.service_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);

            var multipartRequest = _this.service_.makeRequest(requestInfo, authToken);

            _this.request_ = multipartRequest;
            multipartRequest.getPromise().then(function (metadata) {
              _this.request_ = null;
              _this.metadata_ = metadata;

              _this.updateProgress_(_this.blob_.size());

              _this.transition_(InternalTaskState.SUCCESS);
            }, _this.errorHandler_);
          });
        };

        UploadTask.prototype.updateProgress_ = function (transferred) {
          var old = this.transferred_;
          this.transferred_ = transferred; // A progress update can make the "transferred" value smaller (e.g. a
          // partial upload not completed by server, after which the "transferred"
          // value may reset to the value at the beginning of the request).

          if (this.transferred_ !== old) {
            this.notifyObservers_();
          }
        };

        UploadTask.prototype.transition_ = function (state) {
          if (this.state_ === state) {
            return;
          }

          switch (state) {
            case InternalTaskState.CANCELING:
              // TODO(andysoto):
              // assert(this.state_ === InternalTaskState.RUNNING ||
              //        this.state_ === InternalTaskState.PAUSING);
              this.state_ = state;

              if (this.request_ !== null) {
                this.request_.cancel();
              }

              break;

            case InternalTaskState.PAUSING:
              // TODO(andysoto):
              // assert(this.state_ === InternalTaskState.RUNNING);
              this.state_ = state;

              if (this.request_ !== null) {
                this.request_.cancel();
              }

              break;

            case InternalTaskState.RUNNING:
              // TODO(andysoto):
              // assert(this.state_ === InternalTaskState.PAUSED ||
              //        this.state_ === InternalTaskState.PAUSING);
              var wasPaused = this.state_ === InternalTaskState.PAUSED;
              this.state_ = state;

              if (wasPaused) {
                this.notifyObservers_();
                this.start_();
              }

              break;

            case InternalTaskState.PAUSED:
              // TODO(andysoto):
              // assert(this.state_ === InternalTaskState.PAUSING);
              this.state_ = state;
              this.notifyObservers_();
              break;

            case InternalTaskState.CANCELED:
              // TODO(andysoto):
              // assert(this.state_ === InternalTaskState.PAUSED ||
              //        this.state_ === InternalTaskState.CANCELING);
              this.error_ = canceled();
              this.state_ = state;
              this.notifyObservers_();
              break;

            case InternalTaskState.ERROR:
              // TODO(andysoto):
              // assert(this.state_ === InternalTaskState.RUNNING ||
              //        this.state_ === InternalTaskState.PAUSING ||
              //        this.state_ === InternalTaskState.CANCELING);
              this.state_ = state;
              this.notifyObservers_();
              break;

            case InternalTaskState.SUCCESS:
              // TODO(andysoto):
              // assert(this.state_ === InternalTaskState.RUNNING ||
              //        this.state_ === InternalTaskState.PAUSING ||
              //        this.state_ === InternalTaskState.CANCELING);
              this.state_ = state;
              this.notifyObservers_();
              break;
          }
        };

        UploadTask.prototype.completeTransitions_ = function () {
          switch (this.state_) {
            case InternalTaskState.PAUSING:
              this.transition_(InternalTaskState.PAUSED);
              break;

            case InternalTaskState.CANCELING:
              this.transition_(InternalTaskState.CANCELED);
              break;

            case InternalTaskState.RUNNING:
              this.start_();
              break;
          }
        };

        Object.defineProperty(UploadTask.prototype, "snapshot", {
          get: function get() {
            var externalState = taskStateFromInternalTaskState(this.state_);
            return new UploadTaskSnapshot(this.transferred_, this.blob_.size(), externalState, this.metadata_, this, this.ref_);
          },
          enumerable: false,
          configurable: true
        });
        /**
         * Adds a callback for an event.
         * @param type The type of event to listen for.
         */

        UploadTask.prototype.on = function (type, nextOrObserver, error, completed) {
          function typeValidator() {
            if (type !== TaskEvent.STATE_CHANGED) {
              throw "Expected one of the event types: [" + TaskEvent.STATE_CHANGED + "].";
            }
          }

          var nextOrObserverMessage = 'Expected a function or an Object with one of ' + '`next`, `error`, `complete` properties.';
          var nextValidator = nullFunctionSpec(true).validator;
          var observerValidator = looseObjectSpec(null, true).validator; // eslint-disable-next-line @typescript-eslint/no-explicit-any

          function nextOrObserverValidator(p) {
            try {
              nextValidator(p);
              return;
            } catch (e) {}

            try {
              observerValidator(p);
              var anyDefined = isJustDef(p['next']) || isJustDef(p['error']) || isJustDef(p['complete']);

              if (!anyDefined) {
                throw '';
              }

              return;
            } catch (e) {
              throw nextOrObserverMessage;
            }
          }

          var specs = [stringSpec(typeValidator), looseObjectSpec(nextOrObserverValidator, true), nullFunctionSpec(true), nullFunctionSpec(true)];
          validate('on', specs, arguments);
          var self = this;

          function makeBinder(specs) {
            function binder(nextOrObserver, error, complete) {
              if (specs !== null) {
                validate('on', specs, arguments);
              }

              var observer = new Observer(nextOrObserver, error, completed);
              self.addObserver_(observer);
              return function () {
                self.removeObserver_(observer);
              };
            }

            return binder;
          }

          function binderNextOrObserverValidator(p) {
            if (p === null) {
              throw nextOrObserverMessage;
            }

            nextOrObserverValidator(p);
          }

          var binderSpecs = [looseObjectSpec(binderNextOrObserverValidator), nullFunctionSpec(true), nullFunctionSpec(true)];
          var typeOnly = !(isJustDef(nextOrObserver) || isJustDef(error) || isJustDef(completed));

          if (typeOnly) {
            return makeBinder(binderSpecs);
          } else {
            return makeBinder(null)(nextOrObserver, error, completed);
          }
        };
        /**
         * This object behaves like a Promise, and resolves with its snapshot data
         * when the upload completes.
         * @param onFulfilled The fulfillment callback. Promise chaining works as normal.
         * @param onRejected The rejection callback.
         */


        UploadTask.prototype.then = function (onFulfilled, onRejected) {
          // These casts are needed so that TypeScript can infer the types of the
          // resulting Promise.
          return this.promise_.then(onFulfilled, onRejected);
        };
        /**
         * Equivalent to calling `then(null, onRejected)`.
         */


        UploadTask.prototype["catch"] = function (onRejected) {
          return this.then(null, onRejected);
        };
        /**
         * Adds the given observer.
         */


        UploadTask.prototype.addObserver_ = function (observer) {
          this.observers_.push(observer);
          this.notifyObserver_(observer);
        };
        /**
         * Removes the given observer.
         */


        UploadTask.prototype.removeObserver_ = function (observer) {
          var i = this.observers_.indexOf(observer);

          if (i !== -1) {
            this.observers_.splice(i, 1);
          }
        };

        UploadTask.prototype.notifyObservers_ = function () {
          var _this = this;

          this.finishPromise_();
          var observers = this.observers_.slice();
          observers.forEach(function (observer) {
            _this.notifyObserver_(observer);
          });
        };

        UploadTask.prototype.finishPromise_ = function () {
          if (this.resolve_ !== null) {
            var triggered = true;

            switch (taskStateFromInternalTaskState(this.state_)) {
              case TaskState.SUCCESS:
                async(this.resolve_.bind(null, this.snapshot))();
                break;

              case TaskState.CANCELED:
              case TaskState.ERROR:
                var toCall = this.reject_;
                async(toCall.bind(null, this.error_))();
                break;

              default:
                triggered = false;
                break;
            }

            if (triggered) {
              this.resolve_ = null;
              this.reject_ = null;
            }
          }
        };

        UploadTask.prototype.notifyObserver_ = function (observer) {
          var externalState = taskStateFromInternalTaskState(this.state_);

          switch (externalState) {
            case TaskState.RUNNING:
            case TaskState.PAUSED:
              if (observer.next) {
                async(observer.next.bind(observer, this.snapshot))();
              }

              break;

            case TaskState.SUCCESS:
              if (observer.complete) {
                async(observer.complete.bind(observer))();
              }

              break;

            case TaskState.CANCELED:
            case TaskState.ERROR:
              if (observer.error) {
                async(observer.error.bind(observer, this.error_))();
              }

              break;

            default:
              // TODO(andysoto): assert(false);
              if (observer.error) {
                async(observer.error.bind(observer, this.error_))();
              }

          }
        };
        /**
         * Resumes a paused task. Has no effect on a currently running or failed task.
         * @return True if the operation took effect, false if ignored.
         */


        UploadTask.prototype.resume = function () {
          validate('resume', [], arguments);
          var valid = this.state_ === InternalTaskState.PAUSED || this.state_ === InternalTaskState.PAUSING;

          if (valid) {
            this.transition_(InternalTaskState.RUNNING);
          }

          return valid;
        };
        /**
         * Pauses a currently running task. Has no effect on a paused or failed task.
         * @return True if the operation took effect, false if ignored.
         */


        UploadTask.prototype.pause = function () {
          validate('pause', [], arguments);
          var valid = this.state_ === InternalTaskState.RUNNING;

          if (valid) {
            this.transition_(InternalTaskState.PAUSING);
          }

          return valid;
        };
        /**
         * Cancels a currently running or paused task. Has no effect on a complete or
         * failed task.
         * @return True if the operation took effect, false if ignored.
         */


        UploadTask.prototype.cancel = function () {
          validate('cancel', [], arguments);
          var valid = this.state_ === InternalTaskState.RUNNING || this.state_ === InternalTaskState.PAUSING;

          if (valid) {
            this.transition_(InternalTaskState.CANCELING);
          }

          return valid;
        };

        return UploadTask;
      }();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Provides methods to interact with a bucket in the Firebase Storage service.
       * @param location An fbs.location, or the URL at
       *     which to base this object, in one of the following forms:
       *         gs://<bucket>/<object-path>
       *         http[s]://firebasestorage.googleapis.com/
       *                     <api-version>/b/<bucket>/o/<object-path>
       *     Any query or fragment strings will be ignored in the http[s]
       *     format. If no value is passed, the storage object will use a URL based on
       *     the project ID of the base firebase.App instance.
       */


      var Reference =
      /** @class */
      function () {
        function Reference(service, location) {
          this.service = service;

          if (location instanceof Location) {
            this.location = location;
          } else {
            this.location = Location.makeFromUrl(location);
          }
        }
        /**
         * @return The URL for the bucket and path this object references,
         *     in the form gs://<bucket>/<object-path>
         * @override
         */


        Reference.prototype.toString = function () {
          validate('toString', [], arguments);
          return 'gs://' + this.location.bucket + '/' + this.location.path;
        };

        Reference.prototype.newRef = function (service, location) {
          return new Reference(service, location);
        };

        Reference.prototype.mappings = function () {
          return getMappings();
        };
        /**
         * @return A reference to the object obtained by
         *     appending childPath, removing any duplicate, beginning, or trailing
         *     slashes.
         */


        Reference.prototype.child = function (childPath) {
          validate('child', [stringSpec()], arguments);
          var newPath = child(this.location.path, childPath);
          var location = new Location(this.location.bucket, newPath);
          return this.newRef(this.service, location);
        };

        Object.defineProperty(Reference.prototype, "parent", {
          /**
           * @return A reference to the parent of the
           *     current object, or null if the current object is the root.
           */
          get: function get() {
            var newPath = parent(this.location.path);

            if (newPath === null) {
              return null;
            }

            var location = new Location(this.location.bucket, newPath);
            return this.newRef(this.service, location);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Reference.prototype, "root", {
          /**
           * @return An reference to the root of this
           *     object's bucket.
           */
          get: function get() {
            var location = new Location(this.location.bucket, '');
            return this.newRef(this.service, location);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Reference.prototype, "bucket", {
          get: function get() {
            return this.location.bucket;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Reference.prototype, "fullPath", {
          get: function get() {
            return this.location.path;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Reference.prototype, "name", {
          get: function get() {
            return lastComponent(this.location.path);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Reference.prototype, "storage", {
          get: function get() {
            return this.service;
          },
          enumerable: false,
          configurable: true
        });
        /**
         * Uploads a blob to this object's location.
         * @param data The blob to upload.
         * @return An UploadTask that lets you control and
         *     observe the upload.
         */

        Reference.prototype.put = function (data, metadata) {
          if (metadata === void 0) {
            metadata = null;
          }

          validate('put', [uploadDataSpec(), metadataSpec(true)], arguments);
          this.throwIfRoot_('put');
          return new UploadTask(this, this.service, this.location, this.mappings(), new FbsBlob(data), metadata);
        };
        /**
         * Uploads a string to this object's location.
         * @param value The string to upload.
         * @param format The format of the string to upload.
         * @return An UploadTask that lets you control and
         *     observe the upload.
         */


        Reference.prototype.putString = function (value, format, metadata) {
          if (format === void 0) {
            format = StringFormat.RAW;
          }

          validate('putString', [stringSpec(), stringSpec(formatValidator, true), metadataSpec(true)], arguments);
          this.throwIfRoot_('putString');
          var data = dataFromString(format, value);
          var metadataClone = Object.assign({}, metadata);

          if (!isDef(metadataClone['contentType']) && isDef(data.contentType)) {
            metadataClone['contentType'] = data.contentType;
          }

          return new UploadTask(this, this.service, this.location, this.mappings(), new FbsBlob(data.data, true), metadataClone);
        };
        /**
         * Deletes the object at this location.
         * @return A promise that resolves if the deletion succeeds.
         */


        Reference.prototype["delete"] = function () {
          var _this = this;

          validate('delete', [], arguments);
          this.throwIfRoot_('delete');
          return this.service.getAuthToken().then(function (authToken) {
            var requestInfo = deleteObject(_this.service, _this.location);
            return _this.service.makeRequest(requestInfo, authToken).getPromise();
          });
        };
        /**
         * List all items (files) and prefixes (folders) under this storage reference.
         *
         * This is a helper method for calling list() repeatedly until there are
         * no more results. The default pagination size is 1000.
         *
         * Note: The results may not be consistent if objects are changed while this
         * operation is running.
         *
         * Warning: listAll may potentially consume too many resources if there are
         * too many results.
         *
         * @return A Promise that resolves with all the items and prefixes under
         *      the current storage reference. `prefixes` contains references to
         *      sub-directories and `items` contains references to objects in this
         *      folder. `nextPageToken` is never returned.
         */


        Reference.prototype.listAll = function () {
          validate('listAll', [], arguments);
          var accumulator = {
            prefixes: [],
            items: []
          };
          return this.listAllHelper(accumulator).then(function () {
            return accumulator;
          });
        };

        Reference.prototype.listAllHelper = function (accumulator, pageToken) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var opt, nextPage;

            var _a, _b;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_c) {
              switch (_c.label) {
                case 0:
                  opt = {
                    // maxResults is 1000 by default.
                    pageToken: pageToken
                  };
                  return [4
                  /*yield*/
                  , this.list(opt)];

                case 1:
                  nextPage = _c.sent();

                  (_a = accumulator.prefixes).push.apply(_a, nextPage.prefixes);

                  (_b = accumulator.items).push.apply(_b, nextPage.items);

                  if (!(nextPage.nextPageToken != null)) return [3
                  /*break*/
                  , 3];
                  return [4
                  /*yield*/
                  , this.listAllHelper(accumulator, nextPage.nextPageToken)];

                case 2:
                  _c.sent();

                  _c.label = 3;

                case 3:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };
        /**
         * List items (files) and prefixes (folders) under this storage reference.
         *
         * List API is only available for Firebase Rules Version 2.
         *
         * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
         * delimited folder structure.
         * Refer to GCS's List API if you want to learn more.
         *
         * To adhere to Firebase Rules's Semantics, Firebase Storage does not
         * support objects whose paths end with "/" or contain two consecutive
         * "/"s. Firebase Storage List API will filter these unsupported objects.
         * list() may fail if there are too many unsupported objects in the bucket.
         *
         * @param options See ListOptions for details.
         * @return A Promise that resolves with the items and prefixes.
         *      `prefixes` contains references to sub-folders and `items`
         *      contains references to objects in this folder. `nextPageToken`
         *      can be used to get the rest of the results.
         */


        Reference.prototype.list = function (options) {
          validate('list', [listOptionSpec(true)], arguments);
          var self = this;
          return this.service.getAuthToken().then(function (authToken) {
            var op = options || {};
            var requestInfo = list(self.service, self.location,
            /*delimiter= */
            '/', op.pageToken, op.maxResults);
            return self.service.makeRequest(requestInfo, authToken).getPromise();
          });
        };
        /**
         *     A promise that resolves with the metadata for this object. If this
         *     object doesn't exist or metadata cannot be retreived, the promise is
         *     rejected.
         */


        Reference.prototype.getMetadata = function () {
          var _this = this;

          validate('getMetadata', [], arguments);
          this.throwIfRoot_('getMetadata');
          return this.service.getAuthToken().then(function (authToken) {
            var requestInfo = getMetadata(_this.service, _this.location, _this.mappings());
            return _this.service.makeRequest(requestInfo, authToken).getPromise();
          });
        };
        /**
         * Updates the metadata for this object.
         * @param metadata The new metadata for the object.
         *     Only values that have been explicitly set will be changed. Explicitly
         *     setting a value to null will remove the metadata.
         * @return A promise that resolves
         *     with the new metadata for this object.
         *     @see firebaseStorage.Reference.prototype.getMetadata
         */


        Reference.prototype.updateMetadata = function (metadata) {
          var _this = this;

          validate('updateMetadata', [metadataSpec()], arguments);
          this.throwIfRoot_('updateMetadata');
          return this.service.getAuthToken().then(function (authToken) {
            var requestInfo = updateMetadata(_this.service, _this.location, metadata, _this.mappings());
            return _this.service.makeRequest(requestInfo, authToken).getPromise();
          });
        };
        /**
         * @return A promise that resolves with the download
         *     URL for this object.
         */


        Reference.prototype.getDownloadURL = function () {
          var _this = this;

          validate('getDownloadURL', [], arguments);
          this.throwIfRoot_('getDownloadURL');
          return this.service.getAuthToken().then(function (authToken) {
            var requestInfo = getDownloadUrl(_this.service, _this.location, _this.mappings());
            return _this.service.makeRequest(requestInfo, authToken).getPromise().then(function (url) {
              if (url === null) {
                throw noDownloadURL();
              }

              return url;
            });
          });
        };

        Reference.prototype.throwIfRoot_ = function (name) {
          if (this.location.path === '') {
            throw invalidRootOperation(name);
          }
        };

        return Reference;
      }();
      /**
       * A request whose promise always fails.
       * @struct
       * @template T
       */


      var FailRequest =
      /** @class */
      function () {
        function FailRequest(error) {
          this.promise_ = Promise.reject(error);
        }
        /** @inheritDoc */


        FailRequest.prototype.getPromise = function () {
          return this.promise_;
        };
        /** @inheritDoc */


        FailRequest.prototype.cancel = function (_appDelete) {};

        return FailRequest;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @param f May be invoked
       *     before the function returns.
       * @param callback Get all the arguments passed to the function
       *     passed to f, including the initial boolean.
       */


      function start(f, // eslint-disable-next-line @typescript-eslint/no-explicit-any
      callback, timeout) {
        // TODO(andysoto): make this code cleaner (probably refactor into an actual
        // type instead of a bunch of functions with state shared in the closure)
        var waitSeconds = 1; // Would type this as "number" but that doesn't work for Node so ¯\_(ツ)_/¯
        // TODO: find a way to exclude Node type definition for storage because storage only works in browser
        // eslint-disable-next-line @typescript-eslint/no-explicit-any

        var timeoutId = null;
        var hitTimeout = false;
        var cancelState = 0;

        function canceled() {
          return cancelState === 2;
        }

        var triggeredCallback = false; // TODO: This disable can be removed and the 'ignoreRestArgs' option added to
        // the no-explicit-any rule when ESlint releases it.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any

        function triggerCallback() {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          if (!triggeredCallback) {
            triggeredCallback = true;
            callback.apply(null, args);
          }
        }

        function callWithDelay(millis) {
          timeoutId = setTimeout(function () {
            timeoutId = null;
            f(handler, canceled());
          }, millis);
        } // TODO: This disable can be removed and the 'ignoreRestArgs' option added to
        // the no-explicit-any rule when ESlint releases it.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any


        function handler(success) {
          var args = [];

          for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
          }

          if (triggeredCallback) {
            return;
          }

          if (success) {
            triggerCallback.call.apply(triggerCallback, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([null, success], args));
            return;
          }

          var mustStop = canceled() || hitTimeout;

          if (mustStop) {
            triggerCallback.call.apply(triggerCallback, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([null, success], args));
            return;
          }

          if (waitSeconds < 64) {
            /* TODO(andysoto): don't back off so quickly if we know we're offline. */
            waitSeconds *= 2;
          }

          var waitMillis;

          if (cancelState === 1) {
            cancelState = 2;
            waitMillis = 0;
          } else {
            waitMillis = (waitSeconds + Math.random()) * 1000;
          }

          callWithDelay(waitMillis);
        }

        var stopped = false;

        function stop(wasTimeout) {
          if (stopped) {
            return;
          }

          stopped = true;

          if (triggeredCallback) {
            return;
          }

          if (timeoutId !== null) {
            if (!wasTimeout) {
              cancelState = 2;
            }

            clearTimeout(timeoutId);
            callWithDelay(0);
          } else {
            if (!wasTimeout) {
              cancelState = 1;
            }
          }
        }

        callWithDelay(0);
        setTimeout(function () {
          hitTimeout = true;
          stop(true);
        }, timeout);
        return stop;
      }
      /**
       * Stops the retry loop from repeating.
       * If the function is currently "in between" retries, it is invoked immediately
       * with the second parameter as "true". Otherwise, it will be invoked once more
       * after the current invocation finishes iff the current invocation would have
       * triggered another retry.
       */


      function stop(id) {
        id(false);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * @struct
       * @template T
       */


      var NetworkRequest =
      /** @class */
      function () {
        function NetworkRequest(url, method, headers, body, successCodes, additionalRetryCodes, callback, errorCallback, timeout, progressCallback, pool) {
          var _this = this;

          this.pendingXhr_ = null;
          this.backoffId_ = null;
          this.canceled_ = false;
          this.appDelete_ = false;
          this.url_ = url;
          this.method_ = method;
          this.headers_ = headers;
          this.body_ = body;
          this.successCodes_ = successCodes.slice();
          this.additionalRetryCodes_ = additionalRetryCodes.slice();
          this.callback_ = callback;
          this.errorCallback_ = errorCallback;
          this.progressCallback_ = progressCallback;
          this.timeout_ = timeout;
          this.pool_ = pool;
          this.promise_ = new Promise(function (resolve, reject) {
            _this.resolve_ = resolve;
            _this.reject_ = reject;

            _this.start_();
          });
        }
        /**
         * Actually starts the retry loop.
         */


        NetworkRequest.prototype.start_ = function () {
          var self = this;

          function doTheRequest(backoffCallback, canceled) {
            if (canceled) {
              backoffCallback(false, new RequestEndStatus(false, null, true));
              return;
            }

            var xhr = self.pool_.createXhrIo();
            self.pendingXhr_ = xhr;

            function progressListener(progressEvent) {
              var loaded = progressEvent.loaded;
              var total = progressEvent.lengthComputable ? progressEvent.total : -1;

              if (self.progressCallback_ !== null) {
                self.progressCallback_(loaded, total);
              }
            }

            if (self.progressCallback_ !== null) {
              xhr.addUploadProgressListener(progressListener);
            } // eslint-disable-next-line @typescript-eslint/no-floating-promises


            xhr.send(self.url_, self.method_, self.body_, self.headers_).then(function (xhr) {
              if (self.progressCallback_ !== null) {
                xhr.removeUploadProgressListener(progressListener);
              }

              self.pendingXhr_ = null;
              xhr = xhr;
              var hitServer = xhr.getErrorCode() === ErrorCode.NO_ERROR;
              var status = xhr.getStatus();

              if (!hitServer || self.isRetryStatusCode_(status)) {
                var wasCanceled = xhr.getErrorCode() === ErrorCode.ABORT;
                backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
                return;
              }

              var successCode = self.successCodes_.indexOf(status) !== -1;
              backoffCallback(true, new RequestEndStatus(successCode, xhr));
            });
          }
          /**
           * @param requestWentThrough True if the request eventually went
           *     through, false if it hit the retry limit or was canceled.
           */


          function backoffDone(requestWentThrough, status) {
            var resolve = self.resolve_;
            var reject = self.reject_;
            var xhr = status.xhr;

            if (status.wasSuccessCode) {
              try {
                var result = self.callback_(xhr, xhr.getResponseText());

                if (isJustDef(result)) {
                  resolve(result);
                } else {
                  resolve();
                }
              } catch (e) {
                reject(e);
              }
            } else {
              if (xhr !== null) {
                var err = unknown();
                err.setServerResponseProp(xhr.getResponseText());

                if (self.errorCallback_) {
                  reject(self.errorCallback_(xhr, err));
                } else {
                  reject(err);
                }
              } else {
                if (status.canceled) {
                  var err = self.appDelete_ ? appDeleted() : canceled();
                  reject(err);
                } else {
                  var err = retryLimitExceeded();
                  reject(err);
                }
              }
            }
          }

          if (this.canceled_) {
            backoffDone(false, new RequestEndStatus(false, null, true));
          } else {
            this.backoffId_ = start(doTheRequest, backoffDone, this.timeout_);
          }
        };
        /** @inheritDoc */


        NetworkRequest.prototype.getPromise = function () {
          return this.promise_;
        };
        /** @inheritDoc */


        NetworkRequest.prototype.cancel = function (appDelete) {
          this.canceled_ = true;
          this.appDelete_ = appDelete || false;

          if (this.backoffId_ !== null) {
            stop(this.backoffId_);
          }

          if (this.pendingXhr_ !== null) {
            this.pendingXhr_.abort();
          }
        };

        NetworkRequest.prototype.isRetryStatusCode_ = function (status) {
          // The codes for which to retry came from this page:
          // https://cloud.google.com/storage/docs/exponential-backoff
          var isFiveHundredCode = status >= 500 && status < 600;
          var extraRetryCodes = [// Request Timeout: web server didn't receive full request in time.
          408, // Too Many Requests: you're getting rate-limited, basically.
          429];
          var isExtraRetryCode = extraRetryCodes.indexOf(status) !== -1;
          var isRequestSpecificRetryCode = this.additionalRetryCodes_.indexOf(status) !== -1;
          return isFiveHundredCode || isExtraRetryCode || isRequestSpecificRetryCode;
        };

        return NetworkRequest;
      }();
      /**
       * A collection of information about the result of a network request.
       * @param opt_canceled Defaults to false.
       * @struct
       */


      var RequestEndStatus =
      /** @class */
      function () {
        function RequestEndStatus(wasSuccessCode, xhr, canceled) {
          this.wasSuccessCode = wasSuccessCode;
          this.xhr = xhr;
          this.canceled = !!canceled;
        }

        return RequestEndStatus;
      }();

      function addAuthHeader_(headers, authToken) {
        if (authToken !== null && authToken.length > 0) {
          headers['Authorization'] = 'Firebase ' + authToken;
        }
      }

      function addVersionHeader_(headers) {
        var version = typeof _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a !== 'undefined' ? _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION : 'AppManager';
        headers['X-Firebase-Storage-Version'] = 'webjs/' + version;
      }

      function addGmpidHeader_(headers, appId) {
        if (appId) {
          headers['X-Firebase-GMPID'] = appId;
        }
      }
      /**
       * @template T
       */


      function makeRequest(requestInfo, appId, authToken, pool) {
        var queryPart = makeQueryString(requestInfo.urlParams);
        var url = requestInfo.url + queryPart;
        var headers = Object.assign({}, requestInfo.headers);
        addGmpidHeader_(headers, appId);
        addAuthHeader_(headers, authToken);
        addVersionHeader_(headers);
        return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, pool);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * A service that provides firebaseStorage.Reference instances.
       * @param opt_url gs:// url to a custom Storage Bucket
       *
       * @struct
       */


      var StorageService =
      /** @class */
      function () {
        function StorageService(app, authProvider, pool, url) {
          var _a;

          this.bucket_ = null;
          this.appId_ = null;
          this.deleted_ = false;
          this.app_ = app;
          this.authProvider_ = authProvider;
          this.maxOperationRetryTime_ = DEFAULT_MAX_OPERATION_RETRY_TIME;
          this.maxUploadRetryTime_ = DEFAULT_MAX_UPLOAD_RETRY_TIME;
          this.requests_ = new Set();
          this.pool_ = pool;

          if (url != null) {
            this.bucket_ = Location.makeFromBucketSpec(url);
          } else {
            this.bucket_ = StorageService.extractBucket_((_a = this.app_) === null || _a === void 0 ? void 0 : _a.options);
          }

          this.internals_ = new ServiceInternals(this);
        }

        StorageService.extractBucket_ = function (config) {
          var bucketString = config === null || config === void 0 ? void 0 : config[CONFIG_STORAGE_BUCKET_KEY];

          if (bucketString == null) {
            return null;
          }

          return Location.makeFromBucketSpec(bucketString);
        };

        StorageService.prototype.getAuthToken = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var auth, tokenData;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  auth = this.authProvider_.getImmediate({
                    optional: true
                  });
                  if (!auth) return [3
                  /*break*/
                  , 2];
                  return [4
                  /*yield*/
                  , auth.getToken()];

                case 1:
                  tokenData = _a.sent();

                  if (tokenData !== null) {
                    return [2
                    /*return*/
                    , tokenData.accessToken];
                  }

                  _a.label = 2;

                case 2:
                  return [2
                  /*return*/
                  , null];
              }
            });
          });
        };
        /**
         * Stop running requests and prevent more from being created.
         */


        StorageService.prototype.deleteApp = function () {
          this.deleted_ = true;
          this.app_ = null;
          this.requests_.forEach(function (request) {
            return request.cancel();
          });
          this.requests_.clear();
        };
        /**
         * Returns a new firebaseStorage.Reference object referencing this StorageService
         * at the given Location.
         * @param loc The Location.
         * @return A firebaseStorage.Reference.
         */


        StorageService.prototype.makeStorageReference = function (loc) {
          return new Reference(this, loc);
        };

        StorageService.prototype.makeRequest = function (requestInfo, authToken) {
          var _this = this;

          if (!this.deleted_) {
            var request_1 = makeRequest(requestInfo, this.appId_, authToken, this.pool_);
            this.requests_.add(request_1); // Request removes itself from set when complete.

            request_1.getPromise().then(function () {
              return _this.requests_["delete"](request_1);
            }, function () {
              return _this.requests_["delete"](request_1);
            });
            return request_1;
          } else {
            return new FailRequest(appDeleted());
          }
        };
        /**
         * Returns a firebaseStorage.Reference for the given path in the default
         * bucket.
         */


        StorageService.prototype.ref = function (path) {
          function validator(path) {
            if (typeof path !== 'string') {
              throw 'Path is not a string.';
            }

            if (/^[A-Za-z]+:\/\//.test(path)) {
              throw 'Expected child path but got a URL, use refFromURL instead.';
            }
          }

          validate('ref', [stringSpec(validator, true)], arguments);

          if (this.bucket_ == null) {
            throw new Error('No Storage Bucket defined in Firebase Options.');
          }

          var ref = new Reference(this, this.bucket_);

          if (path != null) {
            return ref.child(path);
          } else {
            return ref;
          }
        };
        /**
         * Returns a firebaseStorage.Reference object for the given absolute URL,
         * which must be a gs:// or http[s]:// URL.
         */


        StorageService.prototype.refFromURL = function (url) {
          function validator(p) {
            if (typeof p !== 'string') {
              throw 'Path is not a string.';
            }

            if (!/^[A-Za-z]+:\/\//.test(p)) {
              throw 'Expected full URL but got a child path, use ref instead.';
            }

            try {
              Location.makeFromUrl(p);
            } catch (e) {
              throw 'Expected valid full URL but got an invalid one.';
            }
          }

          validate('refFromURL', [stringSpec(validator, false)], arguments);
          return new Reference(this, url);
        };

        Object.defineProperty(StorageService.prototype, "maxUploadRetryTime", {
          get: function get() {
            return this.maxUploadRetryTime_;
          },
          enumerable: false,
          configurable: true
        });

        StorageService.prototype.setMaxUploadRetryTime = function (time) {
          validate('setMaxUploadRetryTime', [nonNegativeNumberSpec()], arguments);
          this.maxUploadRetryTime_ = time;
        };

        Object.defineProperty(StorageService.prototype, "maxOperationRetryTime", {
          get: function get() {
            return this.maxOperationRetryTime_;
          },
          enumerable: false,
          configurable: true
        });

        StorageService.prototype.setMaxOperationRetryTime = function (time) {
          validate('setMaxOperationRetryTime', [nonNegativeNumberSpec()], arguments);
          this.maxOperationRetryTime_ = time;
        };

        Object.defineProperty(StorageService.prototype, "app", {
          get: function get() {
            return this.app_;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(StorageService.prototype, "INTERNAL", {
          get: function get() {
            return this.internals_;
          },
          enumerable: false,
          configurable: true
        });
        return StorageService;
      }();
      /**
       * @struct
       */


      var ServiceInternals =
      /** @class */
      function () {
        function ServiceInternals(service) {
          this.service_ = service;
        }
        /**
         * Called when the associated app is deleted.
         */


        ServiceInternals.prototype["delete"] = function () {
          this.service_.deleteApp();
          return Promise.resolve();
        };

        return ServiceInternals;
      }();

      var name = "@firebase/storage";
      var version = "0.3.43";
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Type constant for Firebase Storage.
       */

      var STORAGE_TYPE = 'storage';

      function factory(container, url) {
        // Dependencies
        var app = container.getProvider('app').getImmediate();
        var authProvider = container.getProvider('auth-internal');
        return new StorageService(app, authProvider, new XhrIoPool(), url);
      }

      function registerStorage(instance) {
        var namespaceExports = {
          // no-inline
          TaskState: TaskState,
          TaskEvent: TaskEvent,
          StringFormat: StringFormat,
          Storage: StorageService,
          Reference: Reference
        };
        instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_2__["Component"](STORAGE_TYPE, factory, "PUBLIC"
        /* PUBLIC */
        ).setServiceProps(namespaceExports).setMultipleInstances(true));
        instance.registerVersion(name, version);
      }

      registerStorage(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceMappingURL=index.esm.js.map

      /***/
    },

    /***/
    "./node_modules/firebase/dist/index.cjs.js":
    /*!*************************************************!*\
      !*** ./node_modules/firebase/dist/index.cjs.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function node_modulesFirebaseDistIndexCjsJs(module, exports, __webpack_require__) {
      "use strict";

      var firebase = __webpack_require__(
      /*! @firebase/app */
      "./node_modules/@firebase/app/dist/index.cjs.js");

      __webpack_require__(
      /*! @firebase/auth */
      "./node_modules/@firebase/auth/dist/auth.js");

      __webpack_require__(
      /*! @firebase/database */
      "./node_modules/@firebase/database/dist/index.cjs.js");

      __webpack_require__(
      /*! @firebase/firestore */
      "./node_modules/@firebase/firestore/dist/index.cjs.js");

      __webpack_require__(
      /*! @firebase/functions */
      "./node_modules/@firebase/functions/dist/index.cjs.js");

      __webpack_require__(
      /*! @firebase/messaging */
      "./node_modules/@firebase/messaging/dist/index.esm.js");

      __webpack_require__(
      /*! @firebase/storage */
      "./node_modules/@firebase/storage/dist/index.esm.js");

      __webpack_require__(
      /*! @firebase/performance */
      "./node_modules/@firebase/performance/dist/index.cjs.js");

      __webpack_require__(
      /*! @firebase/analytics */
      "./node_modules/@firebase/analytics/dist/index.esm.js");

      __webpack_require__(
      /*! @firebase/remote-config */
      "./node_modules/@firebase/remote-config/dist/index.cjs.js");

      function _interopDefaultLegacy(e) {
        return e && typeof e === 'object' && 'default' in e ? e : {
          'default': e
        };
      }

      var firebase__default = /*#__PURE__*/_interopDefaultLegacy(firebase);

      var name = "firebase";
      var version = "7.24.0";
      /**
       * @license
       * Copyright 2018 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      firebase__default['default'].registerVersion(name, version, 'app');
      var name$1 = "firebase";
      var version$1 = "7.24.0";
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      console.warn("\nIt looks like you're using the development build of the Firebase JS SDK.\nWhen deploying Firebase apps to production, it is advisable to only import\nthe individual SDK components you intend to use.\n\nFor the module builds, these are available in the following manner\n(replace <PACKAGE> with the name of a component - i.e. auth, database, etc):\n\nCommonJS Modules:\nconst firebase = require('firebase/app');\nrequire('firebase/<PACKAGE>');\n\nES Modules:\nimport firebase from 'firebase/app';\nimport 'firebase/<PACKAGE>';\n\nTypescript:\nimport * as firebase from 'firebase/app';\nimport 'firebase/<PACKAGE>';\n");
      firebase__default['default'].registerVersion(name$1, version$1);
      module.exports = firebase__default['default']; //# sourceMappingURL=index.cjs.js.map

      /***/
    },

    /***/
    "./node_modules/idb/build/idb.js":
    /*!***************************************!*\
      !*** ./node_modules/idb/build/idb.js ***!
      \***************************************/

    /*! no static exports found */

    /***/
    function node_modulesIdbBuildIdbJs(module, exports, __webpack_require__) {
      (function (global, factory) {
        true ? factory(exports) : undefined;
      })(this, function (exports) {
        'use strict';

        function toArray(arr) {
          return Array.prototype.slice.call(arr);
        }

        function promisifyRequest(request) {
          return new Promise(function (resolve, reject) {
            request.onsuccess = function () {
              resolve(request.result);
            };

            request.onerror = function () {
              reject(request.error);
            };
          });
        }

        function promisifyRequestCall(obj, method, args) {
          var request;
          var p = new Promise(function (resolve, reject) {
            request = obj[method].apply(obj, args);
            promisifyRequest(request).then(resolve, reject);
          });
          p.request = request;
          return p;
        }

        function promisifyCursorRequestCall(obj, method, args) {
          var p = promisifyRequestCall(obj, method, args);
          return p.then(function (value) {
            if (!value) return;
            return new Cursor(value, p.request);
          });
        }

        function proxyProperties(ProxyClass, targetProp, properties) {
          properties.forEach(function (prop) {
            Object.defineProperty(ProxyClass.prototype, prop, {
              get: function get() {
                return this[targetProp][prop];
              },
              set: function set(val) {
                this[targetProp][prop] = val;
              }
            });
          });
        }

        function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
          properties.forEach(function (prop) {
            if (!(prop in Constructor.prototype)) return;

            ProxyClass.prototype[prop] = function () {
              return promisifyRequestCall(this[targetProp], prop, arguments);
            };
          });
        }

        function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
          properties.forEach(function (prop) {
            if (!(prop in Constructor.prototype)) return;

            ProxyClass.prototype[prop] = function () {
              return this[targetProp][prop].apply(this[targetProp], arguments);
            };
          });
        }

        function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
          properties.forEach(function (prop) {
            if (!(prop in Constructor.prototype)) return;

            ProxyClass.prototype[prop] = function () {
              return promisifyCursorRequestCall(this[targetProp], prop, arguments);
            };
          });
        }

        function Index(index) {
          this._index = index;
        }

        proxyProperties(Index, '_index', ['name', 'keyPath', 'multiEntry', 'unique']);
        proxyRequestMethods(Index, '_index', IDBIndex, ['get', 'getKey', 'getAll', 'getAllKeys', 'count']);
        proxyCursorRequestMethods(Index, '_index', IDBIndex, ['openCursor', 'openKeyCursor']);

        function Cursor(cursor, request) {
          this._cursor = cursor;
          this._request = request;
        }

        proxyProperties(Cursor, '_cursor', ['direction', 'key', 'primaryKey', 'value']);
        proxyRequestMethods(Cursor, '_cursor', IDBCursor, ['update', 'delete']); // proxy 'next' methods

        ['advance', 'continue', 'continuePrimaryKey'].forEach(function (methodName) {
          if (!(methodName in IDBCursor.prototype)) return;

          Cursor.prototype[methodName] = function () {
            var cursor = this;
            var args = arguments;
            return Promise.resolve().then(function () {
              cursor._cursor[methodName].apply(cursor._cursor, args);

              return promisifyRequest(cursor._request).then(function (value) {
                if (!value) return;
                return new Cursor(value, cursor._request);
              });
            });
          };
        });

        function ObjectStore(store) {
          this._store = store;
        }

        ObjectStore.prototype.createIndex = function () {
          return new Index(this._store.createIndex.apply(this._store, arguments));
        };

        ObjectStore.prototype.index = function () {
          return new Index(this._store.index.apply(this._store, arguments));
        };

        proxyProperties(ObjectStore, '_store', ['name', 'keyPath', 'indexNames', 'autoIncrement']);
        proxyRequestMethods(ObjectStore, '_store', IDBObjectStore, ['put', 'add', 'delete', 'clear', 'get', 'getAll', 'getKey', 'getAllKeys', 'count']);
        proxyCursorRequestMethods(ObjectStore, '_store', IDBObjectStore, ['openCursor', 'openKeyCursor']);
        proxyMethods(ObjectStore, '_store', IDBObjectStore, ['deleteIndex']);

        function Transaction(idbTransaction) {
          this._tx = idbTransaction;
          this.complete = new Promise(function (resolve, reject) {
            idbTransaction.oncomplete = function () {
              resolve();
            };

            idbTransaction.onerror = function () {
              reject(idbTransaction.error);
            };

            idbTransaction.onabort = function () {
              reject(idbTransaction.error);
            };
          });
        }

        Transaction.prototype.objectStore = function () {
          return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
        };

        proxyProperties(Transaction, '_tx', ['objectStoreNames', 'mode']);
        proxyMethods(Transaction, '_tx', IDBTransaction, ['abort']);

        function UpgradeDB(db, oldVersion, transaction) {
          this._db = db;
          this.oldVersion = oldVersion;
          this.transaction = new Transaction(transaction);
        }

        UpgradeDB.prototype.createObjectStore = function () {
          return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
        };

        proxyProperties(UpgradeDB, '_db', ['name', 'version', 'objectStoreNames']);
        proxyMethods(UpgradeDB, '_db', IDBDatabase, ['deleteObjectStore', 'close']);

        function DB(db) {
          this._db = db;
        }

        DB.prototype.transaction = function () {
          return new Transaction(this._db.transaction.apply(this._db, arguments));
        };

        proxyProperties(DB, '_db', ['name', 'version', 'objectStoreNames']);
        proxyMethods(DB, '_db', IDBDatabase, ['close']); // Add cursor iterators
        // TODO: remove this once browsers do the right thing with promises

        ['openCursor', 'openKeyCursor'].forEach(function (funcName) {
          [ObjectStore, Index].forEach(function (Constructor) {
            // Don't create iterateKeyCursor if openKeyCursor doesn't exist.
            if (!(funcName in Constructor.prototype)) return;

            Constructor.prototype[funcName.replace('open', 'iterate')] = function () {
              var args = toArray(arguments);
              var callback = args[args.length - 1];
              var nativeObject = this._store || this._index;
              var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));

              request.onsuccess = function () {
                callback(request.result);
              };
            };
          });
        }); // polyfill getAll

        [Index, ObjectStore].forEach(function (Constructor) {
          if (Constructor.prototype.getAll) return;

          Constructor.prototype.getAll = function (query, count) {
            var instance = this;
            var items = [];
            return new Promise(function (resolve) {
              instance.iterateCursor(query, function (cursor) {
                if (!cursor) {
                  resolve(items);
                  return;
                }

                items.push(cursor.value);

                if (count !== undefined && items.length == count) {
                  resolve(items);
                  return;
                }

                cursor["continue"]();
              });
            });
          };
        });

        function openDb(name, version, upgradeCallback) {
          var p = promisifyRequestCall(indexedDB, 'open', [name, version]);
          var request = p.request;

          if (request) {
            request.onupgradeneeded = function (event) {
              if (upgradeCallback) {
                upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
              }
            };
          }

          return p.then(function (db) {
            return new DB(db);
          });
        }

        function deleteDb(name) {
          return promisifyRequestCall(indexedDB, 'deleteDatabase', [name]);
        }

        exports.openDb = openDb;
        exports.deleteDb = deleteDb;
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
      });
      /***/

    },

    /***/
    "./src/app/Service/auth.service.ts":
    /*!*****************************************!*\
      !*** ./src/app/Service/auth.service.ts ***!
      \*****************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppServiceAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! firebase */
      "./node_modules/firebase/dist/index.cjs.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);

      var AuthService = /*#__PURE__*/function () {
        function AuthService() {
          _classCallCheck(this, AuthService);
        }

        _createClass(AuthService, [{
          key: "loginUser",
          value: function loginUser(email, password) {
            return firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(email, password);
          }
        }, {
          key: "signUpUser",
          value: function signUpUser(email, password) {
            return firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(email, password);
          }
        }, {
          key: "resetPassword",
          value: function resetPassword(email) {
            return firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().sendPasswordResetEmail(email);
          }
        }, {
          key: "logOutUser",
          value: function logOutUser() {
            return firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signOut();
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~home-home-module~login-login-module~password-reset-password-reset-module~sign-up-sign-up-module-es5.js.map