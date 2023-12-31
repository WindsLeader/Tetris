// 基础的七种方块
export {
    I, J, L, O, S, T, Z, base
}

/**
 * 一次性返回全部方块
 * @returns 全部的方块
 */
const base = (): number[][][] => [I, J, L, O, S, T, Z]

// I字形
// ▨▨▨▨
const I = [[1], [1], [1], [1]]

// J字形
// ▢▨
// ▢▨
// ▨▨
const J = [[0, 1], [0, 1], [1, 1]]

// L字形
// ▨▢
// ▨▢
// ▨▨
const L = [[1, 0], [1, 0], [1, 1]]

// T字形
// ▨▨▨
// ▢▨▢
const T = [[1, 1, 1], [0, 1, 0]]

// S字形
// ▢▨▨
// ▨▨▢
const S = [[0, 1, 1], [1, 1, 0]]

// Z字形
// ▨▨▢
// ▢▨▨
const Z = [[1, 1, 0], [0, 1, 1]]

// O字形
// ▨▨
// ▨▨
const O = [[1, 1], [1, 1]]