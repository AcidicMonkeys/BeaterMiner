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

// # ////////////////| [📚] - Libraries

const color = require('chalk')
const CFonts = require('cfonts')
const fs = require('fs')
const yaml = require('js-yaml')
const { clear } = require('console')
const { exec } = require('child_process')
const shell = require('shelljs')

// # ////////////////| [📓] - Files

const settings = yaml.load(fs.readFileSync('./settings.yml', 'utf8'))

// # ////////////////| [🧪] - Constants

const wallet = settings.wallet
const worker = settings.worker
const donation = settings.donate
 
const green = color.greenBright
const magenta = color.magentaBright
const cyan = color.cyanBright
const yellow = color.yellowBright
const red = color.redBright
const white = color.whiteBright

// # ////////////////| [🍣] - Variables

let os = process.platform

// # ////////////////| [❗] - Functions

function line() {
    line_cyan = cyan('================================')
    line_magenta = magenta('================================')
    console.info(line_cyan + line_magenta + line_cyan + line_magenta)
}

function space_line() {
    console.log()
}

function error_line() {
    line_red = red('================================')
    console.info(line_red + line_red + line_red + line_red)
}

function info(info) {
    return new Promise((resolve) => {
        console.log(cyan('['), magenta('-'), cyan(']'), yellow('-'), white(info))
    })
}

function error_info(error) {
    return new Promise((resolve) => {
        console.log(red('['), white('!'), red(']'), yellow('-'), white(error))
    })
}

function banner() {
    CFonts.say('Beater|Miner', {
        font: 'block',
        align: 'center',
        colors: ['cyan','magenta']
    })
}

function start_banner() {
    CFonts.say('Beater|Miner', {
        font: 'chrome',
        align: 'center',
        colors: ['cyan','magenta']
    })
}

function beater_start() {
    exec('chmod +x ./beater', (error) => {
        if (error) {
            console.log(error)
        } else {
            shell.exec(`./beater -u ${wallet} -p ${worker} --donate-level ${donation} -k`)
        }
    })
}

async function check_files() {
    try {
        fs.accessSync('config.json')
    } catch {
        await fs.writeFile('./config.json', 
        `{
            "autosave": true,
            "cpu": true,
            "opencl": false,
            "cuda": false,
            "pools": [
                {
                    "algo": "astrobwt",
                    "url": "dero.herominers.com:10121",
                    "user": "dERoRxZ3HjZDsY5m2ws9HJ71cQJKuZ3cn268rrxj5vYD6Qj4itwb8GUa9RgGAxxoAJFJMki68mMoY9yTUunJ7H4K28j8tdfA5P",
                    "pass": "Pepe",
                    "keepalive": true,
                    "tls": true
                }
            ]
        }`, function (error) {
                if (error)
                    null;
                })
    }
}

function check_os() {
    if (os == 'win32') {
        space_line()
        error_line()
        space_line()
            setTimeout( () => {
                error_info("You CAN'T run BeaterMiner on Windows, you MUST use a GNU/Linux OS!")
                space_line()
                    setTimeout( () => {
                        error_line()
                            setTimeout( () => {
                                process.exit()
                            }, 1500)
                    }, 1500)
            }, 2000)
    } else {
        check_files()
            space_line()
            line()
            space_line()
                setTimeout( () => {
                    start_banner()
                    setTimeout( () => {
                    info('Welcome to BeaterMiner!')
                        space_line()
                        setTimeout( () => {
                                info('Showing settings...')
                                setTimeout( () => {
                                    info(`Donation: ${donation}%`)
                                    space_line()
                                    setTimeout( () => {
                                        info('Starting BeaterMiner...')
                                        space_line()
                                        setTimeout( () => {
                                            line()
                                                beater_start()
                                        }, 1500)
                                    }, 1000)
                                }, 1500)
                        }, 1500)
                    }, 1500)
                }, 2000)
    }
}

async function beater() {
    clear()
    setTimeout( () => {
        banner()
        setTimeout( () => {
            space_line()
            info('Loading...')
            setTimeout( () => {
                clear()
                    setTimeout( () => {
                        check_os()
                }, 2100)
            }, 4500)
        }, 2000)
    }, 1000)
}

// # ////////////////| [☢️] - Start

beater()

// # EDUCATION PURPOSES ONLY 🥽