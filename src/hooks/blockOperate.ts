// 方块和棋盘操作的辅助方法
export {
    rotate, toBoard, toBoardSimple1, toBoardSimple2, blockBorder
}

/**
 * 将一个形状矩阵顺时针旋转90°
 * @param beforeShape 旋转前的形状
 * @returns 旋转后的形状
 */
const rotate = (beforeShape: number[][]): number[][] => {
    let afterShape = new Array(beforeShape[0].length)
    for (let i = 0; i < beforeShape.length; i++) {
        for (let j = 0; j < beforeShape[0].length; j++) {
            if (!afterShape[j])
                afterShape[j] = new Array(beforeShape.length)
            afterShape[j][beforeShape.length - 1 - i] = beforeShape[i][j]
        }
    }
    return afterShape
}

/**
 * 将形状矩阵转化为棋盘上的表示
 * @param initX 形状矩阵的上边界在棋盘上的行坐标，一般情况下为0
 * @param initY 形状矩阵的左边界在棋盘上的列坐标
 * @param shape 形状矩阵
 * @param maxX 棋盘的高度-1
 * @param maxY 棋盘的宽度-1
 * @returns 形状在棋盘上的坐标表示
 */
const toBoard = (initX: number, initY: number, shape: number[][], maxX?: number, maxY?: number): number[][] => {
    if (typeof shape == 'undefined')
        return []
    let result = []
    for (let i = 0; i < shape.length; i++) {
        for (let j = 0; j < shape[0].length; j++) {
            if (shape[i][j]) {
                const b = []
                b[0] = initX + i
                b[1] = initY + j
                result[result.length] = b
            }
        }
    }
    if (typeof maxX !== 'undefined' && initX + shape.length > maxX) {
        if (initX > 0)
            toBoard(initX - 1, initY, shape, maxX, maxY)
        else
            return []
    }
    if (typeof maxY !== 'undefined' && initY + shape[0].length > maxY) {
        if (initY > 0)
            toBoard(initX, initY - 1, shape, maxX, maxY)
        else
            return []
    }
    return result
}

/**
 * 将形状矩阵转化为棋盘上的表示，且形状的上边界在棋盘的第一行
 * @param initY 形状矩阵的左边界在棋盘上的列坐标
 * @param shape 形状矩阵
 * @param maxY 棋盘的宽度-1
 * @returns 形状在棋盘上的坐标表示
 */
const toBoardSimple1 = (initY: number, shape: number[][], maxY?: number): number[][] => {
    return toBoard(0, initY, shape, undefined, maxY)
}

/**
 * 将形状矩阵转化为棋盘上的表示，且形状的上边界和左边界分别在棋盘的第一行和第一列
 * @param shape 形状矩阵
 * @returns 形状在棋盘上的坐标表示
 */
const toBoardSimple2 = (shape: number[][]): number[][] => {
    return toBoard(0, 0, shape, undefined, undefined)
}

/**
 * 计算一个方块的上下左右边界
 * @param shape 形状在棋盘上的坐标
 */
const blockBorder = (shape: number[][]): number[] => {
    const sa: number[] = []
    shape.forEach(b => {
        sa.push(b[1])
    })
    sa.sort()
    // 上右下左
    return [shape[0][0], sa[sa.length - 1], shape[shape.length - 1][0], sa[0]]
}