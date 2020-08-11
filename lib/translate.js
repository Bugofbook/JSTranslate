// 現在只有vue-i18n的版本，react-i18n的版本之後補上
/**
 * 利用i18n翻譯文字
 * @param {Object} i18nInstance
 * i18n的實體
 * @param {String} i18nPath
 * 要翻譯的鍵值在實體中的路徑
 * @param {String} defaultValue
 * 沒有對應的鍵值時的輸出
 * @returns {String}
 * 翻譯後的文字，如果沒有對應的鍵值，就會輸出defaultValue的值
 */
function translate (i18nInstance = {}, i18nPath = '', defaultValue = '') {
  return (i18nInstance.te(i18nPath)) ? i18nInstance.t(i18nPath) : defaultValue
}
/**
 * 利用i18n翻譯文字，有變數的版本
 * @param {Object} i18nInstance
 * i18n的實體
 * @param {String} i18nPath
 * 要翻譯的鍵值在實體中的路徑
 * @param {Object} arg
 * 翻譯文字的變數值
 * @param {String} defaultValue
 * 沒有對應的鍵值時的輸出
 * @returns {String}
 * 翻譯後的文字，如果沒有對應的鍵值，就會輸出defaultValue的值
 */
function translateWithArg (i18nInstance = {}, i18nPath = '', arg = {}, defaultValue = '') {
  return (i18nInstance.te(i18nPath)) ? i18nInstance.t(i18nPath, arg) : defaultValue
}

module.exports = {
  translate,
  translateWithArg
}
