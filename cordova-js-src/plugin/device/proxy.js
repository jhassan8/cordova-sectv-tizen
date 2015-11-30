/*
 * Copyright 2015 Samsung Electronics Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var tizen = require('cordova/platform');

module.exports = {
    getDeviceInfo: function(success, error) {
        setTimeout(function() {
            success({
                cordova: tizen.cordovaVersion,
                platform: 'sectv-tizen',
                model: webapis.productinfo.getModelCode(), // '15_HAWKP_UHD'
                version: webapis.productinfo.getFirmware(), // 'T-HKPAKUC-0017.10'
                uuid: webapis.productinfo.getDuid(), // 'U7CJYBPYKOKD6'
                manufacturer: 'Samsung Tizen TV'
            });
        }, 0);
    }
};

require('cordova/exec/proxy').add('Device', module.exports);
