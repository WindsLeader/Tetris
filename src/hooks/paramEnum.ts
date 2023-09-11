
export {
    DIRECTION, COLOR, COLOR_NAME, LANGUAGE, BOARD_SIZE
}

/**
 * 操作
 */
const DIRECTION: Record<string, string> = {
    TOP: 'top',
    LEFT: 'left',
    RIGHT: 'right',
    DOWN: 'down',
    ROTATE: 'rotate',
    /**
     * 瞬落
     */
    MOMENT: 'moment'
}

const COLOR = [
    '#ff514d',
    '#ffa700',
    '#ffd601',
    '#5fc61d',
    '#1acdca',
    '#34b7fd',
    '#be54ff'
]

/**
 * 颜色
 */
const COLOR_NAME: Record<string, string> = {
    RED: COLOR[0],
    ORANGE: COLOR[1],
    YELLOW: COLOR[2],
    GREEN: COLOR[3],
    CYAN: COLOR[4],
    BLUE: COLOR[5],
    PURPLE: COLOR[6],
}

/**
 * 棋盘大小
 */
const BOARD_SIZE = [
    [10, 15],
    [10, 20],
    [12, 18],
    [16, 24],
    [20, 30]
]

/**
 * 语言
 */
const LANGUAGE: Record<string, string> = {
    CN: 'cn',
    TC: 'tc',
    EN: 'en'
}