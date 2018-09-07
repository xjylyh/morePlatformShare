import { shareToQQ, shareToQZone, shareToWeibo4Web, shareToQZone4Web } from './specifyShare'
import {
    isQQMBrowser,
    isUCMBrowser,
    isWechat,
    isBaiduMBrowser,
    isAndroid,
    isIos,
    isQQ,
    isQZone,
    isSogouMBrowser,
    isBaiduApp,
    isAlipay
} from './utils'
import Share from './Share'
import QQMobileBrowser from './QQMobileBrowser'
import UCIosBrowser from './UCIosBrowser'
import UCAndroidBrowser from './UCAndroidBrowser'
import BaiduAndroidBrowser from './BaiduAndroidBrowser'
import BaiduIosBrowser from './BaiduIosBrowser'
import SogouIosBrowser from './SogouIosBrowser'
import Wechat from './Wechat'
import Others from './Others'
import QQIos from './QQIos'
import QQAndroid from './QQAndroid'
import QZone from './QZone'
import BaiduIos from './BaiduIos'
import BaiduAndroid from './BaiduAndroid'
import Alipay from './Alipay'
let h5ShareToNative

if (isWechat) {
    h5ShareToNative = Wechat
} else if (isQQ && isIos) {
    h5ShareToNative = QQIos
} else if (isQQ && isAndroid) {
    h5ShareToNative = QQAndroid
} else if (isQZone) {
    h5ShareToNative = QZone
} else if (isQQMBrowser) {
    h5ShareToNative = QQMobileBrowser
} else if (isUCMBrowser && isIos) {
    h5ShareToNative = UCIosBrowser
} else if (isUCMBrowser && isAndroid) {
    h5ShareToNative = UCAndroidBrowser
} else if (isBaiduMBrowser && isAndroid) {
    h5ShareToNative = BaiduAndroidBrowser
} else if (isBaiduMBrowser && isIos) {
    h5ShareToNative = BaiduIosBrowser
} else if (isSogouMBrowser && isIos) {
    h5ShareToNative = SogouIosBrowser
} else if (isBaiduApp && isIos) {
    h5ShareToNative = BaiduIos
} else if (isBaiduApp && isAndroid) {
    h5ShareToNative = BaiduAndroid
} else if (isAlipay) {
    h5ShareToNative = Alipay
} else {
    h5ShareToNative = Others
}

export {
    Share,
    QQMobileBrowser,
    UCIosBrowser,
    UCAndroidBrowser,
    BaiduAndroidBrowser,
    BaiduIosBrowser,
    SogouIosBrowser,
    BaiduIos,
    BaiduAndroid,
    Wechat,
    Alipay,
    Others,
    QQIos,
    QQAndroid,
    QZone,
    shareToQQ,
    shareToQZone,
    shareToWeibo4Web,
    shareToQZone4Web,
}

window.h5ShareToNative = h5ShareToNative
export default h5ShareToNative
