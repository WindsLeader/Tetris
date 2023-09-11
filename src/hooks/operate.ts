export {
    fullScreen, changeLanguage
}

// 全屏
let isFullScreen = true
const fullScreen = () => {
    if (isFullScreen)
        document.documentElement.requestFullscreen()
    else
        document.exitFullscreen()
    isFullScreen = !isFullScreen
}

// 切换语言
import { LANGUAGE } from '@/hooks/paramEnum'
import { l as cn } from '@/hooks/languages/cn'
import { l as en } from '@/hooks/languages/en'
import { l as tc } from '@/hooks/languages/tc'
let languageCount = 0
/**
 * 切换为指定的语言或切换为下一种语言
 * @param currentLanguage 直接输入语言对应的枚举
 * @returns [语言内容对象, 语言索引]
 */
const changeLanguage = (currentLanguage?: string | number) => {
    if (typeof currentLanguage == 'undefined')
        currentLanguage = (++languageCount) % 3
    switch (currentLanguage) {
        case LANGUAGE.CN:
        case 0:
            return { lanObj: cn, lanIndex: LANGUAGE.CN }
        case LANGUAGE.EN:
        case 1:
            return { lanObj: en, lanIndex: LANGUAGE.EN }
        case LANGUAGE.TC:
        case 2:
            return { lanObj: tc, lanIndex: LANGUAGE.TC }
    }
    return { lanObj: cn, lanIndex: LANGUAGE.CN }
}