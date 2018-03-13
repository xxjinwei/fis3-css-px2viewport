import { postcss } from 'postcss'
import { pxtoviewport } from 'postcss-px-to-viewport'

const defaultConf = {
    viewportWidth: 375,
    viewportHeight: 667,
    unitPrecision: 6
}

export default function (content, file, conf) {
    if (file.isCssLike) {
        const opts = fis.util.merge(defaultConf, conf)
        content = postcss(pxtoviewport(conf)).process(content).css
    }

    return content
}