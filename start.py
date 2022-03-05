# /////////////////////////////////////////////////////////////////////////// #
#                                                                             #
#                      Copyright 2022 TheH2SO4                                #
#                                                                             #
#   Licensed under the Apache License, Version 2.0 (the 'License');           #
#   you may not use this file except in compliance with the License.          #
#   You may obtain a copy of the License at                                   #
#                                                                             #
#       http://www.apache.org/licenses/LICENSE-2.0                            #
#                                                                             #
#   Unless required by applicable law or agreed to in writing, software       #
#   distributed under the License is distributed on an 'AS IS' BASIS,         #
#   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  #
#   See the License for the specific language governing permissions and       #
#   limitations under the License.                                            #
#                                                                             #
# /////////////////////////////////////////////////////////////////////////// #

# ////////////////| [🥽] | TheH2SO4 | [⚗️] |//////////////// #

# ////////////////| [📚] - Libraries

from os import system, name
from time import sleep
from simple_chalk import chalk, greenBright, magentaBright, cyanBright, yellowBright, redBright, whiteBright
import os.path
import yaml

# ////////////////| [🧪] - Constans

green = chalk.greenBright
magenta = chalk.magentaBright
cyan = chalk.cyanBright
yellow = chalk.yellowBright
red = chalk.redBright
white = chalk.whiteBright
file_config = os.path.exists('config.json')

# ////////////////| [❗] - Functions

def clear():
    if name == 'nt':
        clear = system('cls')
    else:
        clear = system('clear')

def line():
    line_cyan = cyan('================================')
    line_magenta = magenta('================================')
    print(line_cyan + line_magenta + line_cyan + line_magenta)

def error_line():
    line_red = red('================================')
    print(line_red + line_red + line_red + line_red)

def banner():
    clear()
    sleep(2)
    if name == 'nt':
        error_line()
        print()
        sleep(1)
        print(red('['), white('!'), red(']'), white('-'), white("You CAN'T run BeaterMiner on Windows, you MUST use a GNU/Linux OS!"))
        sleep(1)
        print()
        error_line()
        sleep(2)
        exit 
    else:
        if file_config == False:
            error_line()
            print()
            sleep(1)
            print(red('['), white('!'), red(']'), white('-'), white("I couldn't find the configuration file (config.json) try making a new one on https://xmrig.com/wizard or please read the documentation."))
            sleep(1)
            print()
            error_line()
        else:
            with open('settings.yaml', 'r') as file_settings:
                interfaces = yaml.load(file_settings, Loader=yaml.FullLoader)
                print(interfaces)
                line()
                print()
                sleep(1)
                print(cyan('['), magenta('-'), cyan(']'), yellow('-'), white('Welcome to BeaterMiner!'))
                sleep(2)
                print(cyan('['), magenta('-'), cyan(']'), yellow('-'), white('Showing actual settings...'))
                sleep(1)
                print(cyan('['), magenta('-'), cyan(']'), yellow('-'), white('Starting BeaterMiner...'))
                sleep(2)
                print()
                line()
                sleep(2)
                print()
                start()
        
def start():
    system('chmod +x ./beater')
    system('./beater pool.xmrfast.com:9000 -a rx -k -u XMR:46Nb3ctGn87NLBxiGD26HqPp5HCwd761RQTopAVy44y6ftDYPwAz1jii6Fas3Gu378cqiz96ygjpVeN5Tk64NrC455AZFy2.PEPE -p x')

# ////////////////| [☢️] - Start

banner()