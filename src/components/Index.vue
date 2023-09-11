<style lang="scss">
button {
    border: 1px #fff solid;
    outline: none;
    color: #fff;
}

svg {
    height: 25px;
}

#play_window {
    display: flex;
    justify-content: space-around;
    padding: 5vh 0;

    #preview,
    // 中央方块区
    >#block_box {
        display: flex;
        flex-direction: column;

        >.block_line {
            display: flex;
            justify-content: center;
        }

        .block {
            border: 1px #fff solid;
        }
    }

    // 左侧功能区
    >#fun_area {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        #score,
        #max_score {
            text-align: center;
            font-size: 25px;
            font-weight: 900;
        }

        // 分数
        >#score_box {
            >#score_out {
                margin-bottom: 40px;

                >#score {
                    padding-top: 25px;
                }

                >#score::before {
                    content: "分数";
                    color: #ff514d;
                }
            }

            >#max_score_out {
                >#max_score {
                    padding-top: 25px;
                }

                >#max_score::before {
                    content: "最高分数";
                    color: #ffa700;
                }
            }
        }

        // 操作按钮
        >#btns_out {
            >#btns {
                display: grid;
                grid-template-columns: repeat(3, 1fr);

                >button {
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 5px;
                    font-size: 16px;
                    font-weight: 900;

                    >.dir_logo {
                        width: 20px;
                    }
                }

                >.direction {
                    background-color: #34b7fd;
                }

                >.role {
                    background-color: #1acd72;
                }

                >#space {
                    grid-column-start: span 3;
                }

                >button:hover {
                    background-color: #ffd601;
                }
            }

            // >#btns::before {
            //     content: "按键";
            //     color: #34b7fd;
            // }
        }
    }

    // 右侧功能区
    >#play_info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        // >#preview_out {
        //     display: flex;
        //     justify-content: center;

        //     >#preview {
        //         width: 100%;
        //     }

        //     >#preview::before {
        //         content: "预览";
        //         color: #be54ff;
        //     }
        // }

        >#setting_out {
            >#setting {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                color: #888;

                >label {

                    >input[type="checkbox"] {
                        display: none;
                    }

                    >div,
                    >a {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: space-evenly;
                        margin: 5px;
                        font-size: 12px;
                        height: 70px;
                    }

                    >a:hover,
                    >div:hover,
                    >button:hover {
                        background-color: #5fc61d;
                        color: #fff;
                    }

                    >input[type="checkbox"]:checked~div {
                        color: #5fc61d;
                    }

                    >input[type="checkbox"]:hover~div {
                        background-color: #5fc61d;
                        color: #fff;
                    }

                    // >#dark_mode {
                    //     color: #ff514d;
                    // }

                    // >input[type="checkbox"]:checked~#dark_mode {
                    //     color: #ffd601;
                    // }

                    // >input[type="checkbox"]:hover~#dark_mode {
                    //     background-color: #ff514d;
                    //     color: #fff;
                    // }

                    // >input[type="checkbox"]:checked:hover~#dark_mode {
                    //     background-color: #ffd601;
                    // }

                    >#board_size {
                        color: #ffa700;
                    }

                    >#board_size:hover {
                        background-color: #ffa700;
                        color: #fff;
                    }

                    // >#languages {
                    //     color: #1acdca;
                    // }

                    // >#languages:hover {
                    //     background-color: #1acdca;
                    //     color: #fff;
                    // }

                    // >#save_page:hover {
                    //     background-color: #be54ff;
                    // }

                    // >#mail_link:hover {
                    //     background-color: #34b7fd;
                    // }

                    >#github_link:hover {
                        background-color: #000;
                    }

                    // >#gitee_link:hover {
                    //     background-color: #ff514d;
                    // }
                }

                // button {
                //     grid-column-start: span 3;
                //     background-color: #5fc61d;
                //     margin: 5px;
                //     height: 35px;
                //     font-size: 16px;
                //     font-weight: 900;
                // }
            }

            // >#setting::before {
            //     content: "设置";
            //     color: #5fc61d;
            // }
        }
    }
}

// 公用边框
.out {
    position: relative;
    width: 300px;

    >div {
        border: 5px dashed #ddd;
        padding: 5px;
        // padding-top: 25px;
    }

    >div::before {
        position: absolute;
        top: -32px;
        left: 14px;
        font-size: 30px;
        font-weight: 900;
        background-color: #fff;
        padding: 10px 12px;
    }
}
</style>

<template>
    <div id="play_window">
        <!-- 功能区 -->
        <div id="fun_area">
            <div id="score_box">
                <div id="score_out" class="out">
                    <div id="score">{{ score }}</div>
                </div>
                <div id="max_score_out" class="out">
                    <div id="max_score">{{ maxScore }}</div>
                </div>
            </div>
            <!-- 按键 -->
            <div id="btns_out" class="out">
                <div id="btns">
                    <button class="role" @click="replay()">重开(R)</button>
                    <button class="direction pk" @click="move(DIRECTION.ROTATE)">
                        旋转
                        <CaretTop class="dir_logo" />
                    </button>
                    <button class="role" @click="plan(pause)">暂停(P)</button>
                    <button class="direction pk" @click="move(DIRECTION.LEFT)">
                        左移
                        <CaretLeft class="dir_logo" />
                    </button>
                    <button class="direction pk" @click="move(DIRECTION.DOWN)">
                        下移
                        <CaretBottom class="dir_logo" />
                    </button>
                    <button class="direction pk" @click="move(DIRECTION.RIGHT)">
                        右移
                        <CaretRight class="dir_logo" />
                    </button>
                    <button class="role pk" id="space" @click="move(DIRECTION.MOMENT)">瞬落(空格)</button>
                </div>
            </div>
        </div>
        <!-- 显示方块区 -->
        <div id="block_box">
            <div class="block_line" v-for="bl in board" :key="nanoid()">
                <div class="block" v-for="b in bl" :key="b.id" :id="b.id"
                    :style="`width:${len};height:${len};background-color:${b.color}`"></div>
            </div>
        </div>
        <!-- 游戏信息 -->
        <div id="play_info">
            <!-- 预览 -->
            <div id="preview_out" class="out">
                <div id="preview">
                    <div class="block_line" v-for="bl in previewBoard" :key="nanoid()">
                        <div class="block" v-for="b in bl" :key="b.id" :id="b.id"
                            :style="`width:${len};height:${len};max-width:35px;max-height:35px;background-color:${b.color}`">
                        </div>
                    </div>
                </div>
            </div>
            <!-- 基本设置 -->
            <div id="setting_out" class="out">
                <div id="setting">
                    <!-- <label>
                        <input type="checkbox">
                        <div>
                            <Headset />
                            音乐
                        </div>
                    </label> -->
                    <!-- <label>
                        <input type="checkbox">
                        <div>
                            <Sugar />
                            音效
                        </div>
                    </label> -->
                    <!-- <label>
                        <input type="checkbox" v-model="dark">
                        <div id="dark_mode">
                            <Sunny v-show="!dark" />
                            <Moon v-show="dark" />
                            {{ dark ? "深色模式" : "浅色模式" }}
                        </div>
                    </label> -->
                    <label>
                        <div id="board_size" @click="writeConfig('board', (++gameConfig.board) % BOARD_SIZE.length,
                            () => {
                                preWH[0] = BOARD_SIZE[gameConfig.board][0],
                                    preWH[1] = BOARD_SIZE[gameConfig.board][1]
                            })">
                            <Rank />
                            {{ preWH[0] }} × {{ preWH[1] }}
                        </div>
                    </label>
                    <label>
                        <input id="special" type="checkbox">
                        <div @click="writeConfig('special', !gameConfig.special)">
                            <Orange />趣味方块
                        </div>
                    </label>
                    <label>
                        <input id="few" type="checkbox">
                        <div @click="writeConfig('few', !gameConfig.few)">
                            <Cherry />减数方块
                        </div>
                    </label>
                    <!-- 全屏功能已经可用，需要解开对应的被注释的代码 -->
                    <!-- <label>
                        <input id="full_screen" type="checkbox">
                        <div @click="fullScreen()">
                            <FullScreen />全屏
                        </div>
                    </label> -->
                    <!-- 此处的多语言功能在代码上已经可用，
                        需要将显示的文字替换为 {{ language.变量名 }} 并在 语言.ts 文件中补充对应的值 -->
                    <!-- <label>
                        <div id="languages" @click="writeConfig('language', (++gameConfig.language) % 3,
                            () => {
                                language = changeLanguage(gameConfig.language).lanObj
                            })">
                            <Connection />
                            {{ language.language }}
                        </div>
                    </label> -->
                    <!-- <label>
                        <div id="save_page">
                            <Download />离线保存
                        </div>
                    </label> -->
                    <!-- <label>
                        <a id="mail_link">
                            <Message />
                            发送反馈
                        </a>
                    </label> -->
                    <!-- <label>
                        <a id="github_link">
                            <svg id="github_logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                <path fill="currentColor"
                                    d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z">
                                </path>
                            </svg>
                            Github
                        </a>
                    </label> -->
                    <!-- <label>
                        <a id="gitee_link">
                            <svg id="gitee_logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                <path fill="currentColor"
                                    d="M490.81,485.52a11,11,0,1,0,11,11A11,11,0,0,0,490.81,485.52Zm2.66,17.73c-2.69.29-5.44.06-8.16.14-1.5,0-1.78-.77-1.73-2s0-2.62,0-3.92c0-7.28,1.07-8.33,8.47-8.33h4.27c1,0,1.46.46,1.48,1.51s-.54,1.47-1.5,1.47c-2.26,0-4.51,0-6.76,0-3.9.12-3,3.93-2.87,5.28.19,2.43.8,3.24,3.07,2.94.7-.09,1.42,0,2.13,0,1.06-.06,2.53,0,2.49-1.41-.05-1.95-1.76-1.21-2.33-1.19-1.14,0-2.86.64-2.74-1.64.11-2,1.7-1.77,2.72-1.85,5.59-.46,5.32-1.19,5.78,2.27S496.44,502.92,493.47,503.25Z"
                                    transform="translate(-479.8 -485.52)" />
                            </svg>
                            Gitee
                        </a>
                    </label> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { base } from '@/hooks/blocks/base'
import { special } from '@/hooks/blocks/special'
import { few } from '@/hooks/blocks/few'
import { rotate, toBoard, toBoardSimple1, blockBorder } from '@/hooks/blockOperate'
// import { fullScreen, changeLanguage } from '@/hooks/operate'
import { nanoid } from 'nanoid'
// import { l } from '@/hooks/languages/cn'
import { Cherry, Orange, Rank, CaretLeft, CaretTop, CaretRight, CaretBottom } from '@element-plus/icons-vue'
// import { Sunny, Moon, Connection, FullScreen, Download, Message } from '@element-plus/icons-vue'
import { DIRECTION, COLOR, BOARD_SIZE } from '@/hooks/paramEnum'

// 宽高格数
const boxWidth = ref(10)
const boxHeight = ref(15)
// 每小格的边长（单位vh）
const len = computed(() => `${90 / boxHeight.value}vh`)
// 暂未生效的宽高
const preWH = ref([boxWidth.value, boxHeight.value])
// 棋盘
const board = ref()
// 预览棋盘
const previewBoard = ref()
// 可能出现的方块类型，如果有扩展类型，则也需要将其合并入此处
let blockType: number[][][] = [...base()]
// 当前方块在blockType中的索引
let current: number
// 即将出现的方块队列
let blockQueue: number[] = []
// 当前活动方块
let piece: number[][]
// 记录活动方块的旋转状态
let rotateState: number[][]
// 控制方块自动下落的定时器
let fall: NodeJS.Timeout
// 方块自动下落的时间间隔，会逐渐减少
let intermission = 1300
// 使得方块触底后，在下一次自动下移前可以合法的左右移动或旋转的标记
let endMove = 0
// 得分
const score = ref(0)
// 最高得分
const maxScore = ref(0)
// 日夜间模式
// const dark = ref(false)
// 语言
// const language = ref(l)
// 配置项
let gameConfig: Record<string, any> = {
    max: 0,
    // music: false,
    // 音效
    // effect: false,
    board: 0,
    special: false,
    few: false,
    // language: 0
}

onMounted(() => {
    initBoard(board, boxHeight.value, boxWidth.value)
    initBoard(previewBoard, 4, 8)
    window.addEventListener('keydown', funKey)
    window.addEventListener('keydown', playKey)
    readConfig()
})

/**
 * 读取本地配置，并进行一些初始化
 */
const readConfig = () => {
    const cs = localStorage.getItem('gameConfig')
    if (cs)
        gameConfig = { ...JSON.parse(cs) }
    // 读取最高分
    maxScore.value = gameConfig.max
    // 设置棋盘大小
    boxWidth.value = BOARD_SIZE[gameConfig.board][0]
    boxHeight.value = BOARD_SIZE[gameConfig.board][1]
    preWH.value[0] = boxWidth.value
    preWH.value[1] = boxHeight.value
    initBoard(board, boxHeight.value, boxWidth.value)
    // 设置方块类型
    blockType = [...base()]
    if (gameConfig.special) {
        blockType.push(...special());
        (document.getElementById('special') as HTMLInputElement).checked = true
    }
    if (gameConfig.few) {
        blockType.push(...few());
        (document.getElementById('few') as HTMLInputElement).checked = true
    }
    // 设置语言
    // language.value = changeLanguage(gameConfig.language).lanObj
    into(getBlock())
}

/**
 * 修改配置并保存到本地
 * @param item 修改的配置项
 * @param param 修改后的值
 * @param callback 如有必要，进行一些额外的操作
 */
const writeConfig = (item: string, param: any, callback?: Function): void => {
    gameConfig[item] = param
    callback ? callback() : 0
    localStorage.setItem('gameConfig', JSON.stringify(gameConfig))
}

/**
 * 以指定的参数初始化棋盘
 * @param boardProxy 棋盘
 * @param height 高度
 * @param width 宽度
 * @param bgc 背景色
 */
const initBoard = (boardProxy: any, height: number, width: number, bgc?: string) => {
    boardProxy.value = new Array(height)
    for (let i = 0; i < boardProxy.value.length; i++) {
        boardProxy.value[i] = new Array(width)
        for (let j = 0; j < boardProxy.value[i].length; j++) {
            boardProxy.value[i][j] = {}
            boardProxy.value[i][j].id = nanoid()
            boardProxy.value[i][j].state = 0
            boardProxy.value[i][j].color = bgc ? bgc : '#ddd'
        }
    }
}

/**
 * 清空棋盘，若没有传入颜色，则仅清空状态
 * @param boardProxy 要清理的棋盘
 * @param color 清理后填充的颜色
 */
const clearBoard = (boardProxy: any, color?: string) => {
    boardProxy.value.forEach((b: any) => {
        b.forEach((c: any) => {
            c.state = 0
            if (color)
                c.color = color
        })
    })
}

/**
 * 开始或继续下落，且减少下落间隔
 * @param keep 开始或继续下落，传入false或空值将停止自动下落
 * @param decTime 自动下落减少的时间间隔，默认是10ms
 */
const autoDown = (keep?: boolean, decTime?: number) => {
    if (fall)
        clearInterval(fall)
    if (keep)
        fall = setInterval(() => {
            move(DIRECTION.DOWN)
        }, intermission)
    if (intermission > 500)
        intermission -= typeof decTime == 'number' ? decTime : 10
}

/**
 * 维护一个队列，用于预览至多下两个方块的类型
 */
const getBlock = () => {
    blockQueue.push(Math.floor(Math.random() * blockType.length))
    let n: number | undefined = blockQueue[0]
    if (blockQueue.length < 3) getBlock()
    else n = blockQueue.shift()
    n ? current = n : current = 0
    return blockType[n ? n : 0]
}

/**
 * 将方块置入棋盘
 * @param shape 方块的初始形状
 */
const into = (shape: number[][]) => {
    autoDown(true)
    let over = false
    // 方块放入棋盘
    piece = toBoardSimple1(4, shape)
    piece.forEach(b => {
        board.value[b[0]][b[1]].color = COLOR[current % COLOR.length]
        if (board.value[b[0]][b[1]].state) over = true
    })
    // 预览棋盘更新
    clearBoard(previewBoard, '#ddd')
    blockQueue.forEach((v, k) => {
        toBoardSimple1(k * 4, blockType[v]).forEach(b => {
            previewBoard.value[b[0]][b[1]].color = COLOR[v % COLOR.length]
        })
    })
    // 游戏结束检测
    if (over) {
        gameOver()
    }
    // 刷新旋转状态
    rotateState = []
    shape.forEach(b => {
        rotateState[rotateState.length] = [...b]
    })
}

/**
 * 判断某个操作能否进行，若可以则返回操作后的坐标
 * @param direction 移动方向或旋转指令
 */
const detection = (direction: string): number[][] | undefined => {
    /**
     * 移动后的情形
     * @param inc 上下和左右的偏移量（与方向有关）
     */
    const tool = (inc: number[]) => {
        pieceCopy.forEach(b => {
            b[0] += inc[0]
            b[1] += inc[1]
        })
    }
    // 将原有的块复制一份（深拷贝）
    let pieceCopy: number[][] = []
    piece.forEach(b => {
        pieceCopy[pieceCopy.length] = [...b]
    })
    // 边界检测
    const [top, right, down, left] = blockBorder(pieceCopy)
    switch (direction) {
        case DIRECTION.LEFT:
            if (left == 0) return
            tool([0, -1])
            break
        case DIRECTION.RIGHT:
            if (right == board.value[0].length - 1) return
            tool([0, 1])
            break
        case DIRECTION.DOWN:
            if (down == board.value.length - 1) return
            tool([1, 0])
            break
        // 你还想上移？做梦呢
        // case DIRECTION.TOP:
        //     if (top == 0) return
        //     tool([-1, 0])
        //     break
        case DIRECTION.ROTATE:
            if (down - top > right - left && left + down - top > boxWidth.value - 1) {
                pieceCopy = toBoard(top, top - down + boxWidth.value - 1, rotate(rotateState))
            } else {
                pieceCopy = toBoard(top, left, rotate(rotateState))
            }
            rotateState = rotate(rotateState)
            break
        case DIRECTION.MOMENT:
            while (detection(DIRECTION.DOWN)) {
                move(DIRECTION.DOWN)
                tool([1, 0])
            }
            // 瞬落后直接触底
            endMove = 2
            break
        default:
            return
    }
    // 重合检测
    let flag = true
    pieceCopy.forEach(b => { if (board.value[b[0]][b[1]].state == 1) flag = false })
    if (flag)
        return pieceCopy
}

/**
 * 向指定方向移动一格或旋转，并进行碰撞检测
 * @param direction 移动方向
 */
const move = (direction: string) => {
    const result = detection(direction)
    // const color = COLOR[Math.floor(Math.random() * 3)]
    if (typeof result === 'object') {
        // 清除棋盘上旧的状态
        piece.forEach(b => {
            board.value[b[0]][b[1]].color = '#ddd'
        })
        // 添加移动后的状态
        result.forEach(b => {
            board.value[b[0]][b[1]].color = COLOR[current % COLOR.length]
        })
        // 保存新状态
        piece = result
    }
    // 触底检测
    if (!detection(DIRECTION.DOWN)) {
        if (endMove < 2 && direction == DIRECTION.DOWN) endMove++
        if (endMove >= 2) {
            // 固定方块
            piece.forEach(b => {
                board.value[b[0]][b[1]].state = 1
            })
            // 消除检测
            const side = blockBorder(piece)
            let count = 0
            for (let i = side[0]; i <= side[2]; i++) {
                let flag = true
                board.value[i].forEach((b: any) => { if (b.state == 0) flag = false })
                if (flag) {
                    board.value.splice(i, 1)
                    board.value.unshift(new Array(boxWidth.value))
                    for (let j = 0; j < board.value[i].length; j++) {
                        board.value[0][j] = {}
                        board.value[0][j].id = nanoid()
                        board.value[0][j].state = 0
                        board.value[0][j].color = '#ddd'
                    }
                    count++
                }
            }
            score.value += count * (1 + count) * 5 * boxWidth.value
            if (score.value > maxScore.value) {
                writeConfig('max', score.value)
                maxScore.value = score.value
            }
            // 放置下一个方块
            into(getBlock())
            endMove = 0
        }
    }
}

/**
 * 通过键盘来进行操作
 * @param e 键盘事件
 */
const playKey = (e: KeyboardEvent) => {
    switch (e.key) {
        case 'ArrowLeft':
            move(DIRECTION.LEFT)
            break
        case 'ArrowRight':
            move(DIRECTION.RIGHT)
            break
        case 'ArrowDown':
            move(DIRECTION.DOWN)
            break
        case 'ArrowUp':
            move(DIRECTION.ROTATE)
            break
        case ' ':
            move(DIRECTION.MOMENT)
            break
        default: return
    }
    e.preventDefault()
}

// 暂停标记
let pause: boolean = false
/**
 * 重开和暂停事件
 * @param e 键盘事件
 * @param go 继续游戏，针对暂停的两种状态
 */
const funKey = (e: KeyboardEvent) => {
    switch (e.key) {
        case 'r':
        case 'R':
            replay()
            break
        case 'p':
        case 'P':
            plan(pause)
            break
        default: return
    }
    e.preventDefault()
}

/**
 * 开始、继续或者暂停、停止
 * @param decision 为true表示继续
 */
const plan = (decision: boolean) => {
    // 为true表示自动下落
    autoDown(decision, 0)
    // 为true表示上下左右按键启用，否则禁用
    decision ? window.addEventListener('keydown', playKey) :
        window.removeEventListener('keydown', playKey)
    // 为true表示按钮可以点击
    const bns = document.getElementsByClassName('pk')
    for (let i = 0; i < bns.length; i++) {
        (bns[i] as HTMLButtonElement).disabled = !decision
    }
    pause = !decision
}

/**
 * 游戏结束
 */
const gameOver = () => {
    plan(false)
    // 仅清空棋盘的标记
    clearBoard(board)
}

/**
 * 重开
 */
const replay = () => {
    score.value=0
    piece = []
    rotateState = []
    endMove = 0
    intermission = 1300
    // 清空棋盘
    clearBoard(board, '#ddd')
    // 清空预览棋盘
    clearBoard(previewBoard, '#ddd')
    // 重新读取配置
    readConfig()
    plan(true)
}
</script>