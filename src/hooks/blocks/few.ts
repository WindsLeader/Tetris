// 比四个更少的基本单元组成的方块
export {
    f1, f2, f3, f4, few
}

/**
 * 一次性返回全部方块
 * @returns 全部的方块
 */
const few = (): number[][][] => [f1, f2, f3, f4]

const f1 = [[1]]

const f2 = [[1, 1]]

const f3 = [[1, 1, 1]]

const f4 = [[1, 1], [0, 1]]