// # /////////////////////////////////////////////////////////////////////////// # //
// #                                                                             # //
// #                      Copyright 2022 TheH2SO4                                # //
// #                                                                             # //
// #   Licensed under the Apache License, Version 2.0 (the 'License');           # //
// #   you may not use this file except in compliance with the License.          # //
// #   You may obtain a copy of the License at                                   # //
// #                                                                             # //
// #       http://www.apache.org/licenses/LICENSE-2.0                            # //
// #                                                                             # //
// #   Unless required by applicable law or agreed to in writing, software       # //
// #   distributed under the License is distributed on an 'AS IS' BASIS,         # //
// #   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  # //
// #   See the License for the specific language governing permissions and       # //
// #   limitations under the License.                                            # //
// #                                                                             # //
// # /////////////////////////////////////////////////////////////////////////// # //

// # ////////////////| [🥽] | TheH2SO4 | [⚗️] |//////////////// # //

// # ////////////////| Libraries |////////////////

const fetch = require('node-fetch');

// # ////////////////| Start |////////////////

const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        });
});

export { // Exporting fetchJson
    fetchJson
};