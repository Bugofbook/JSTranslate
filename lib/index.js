var { translate, translateWithArg } = require('./translate')

/**
 * 根據translateArrayIterator的設定翻譯物件
 * @param {Object} i18nInstance
 * i18n實體
 * @param {Array[]} translateArrayIterator
 * 一個Array Iterator，Array[[物件的鍵值,i18n實體翻譯鍵值]]
 * @param {Object} data
 * 一個準備翻譯的物件
 * @returns {Object}
 * 翻譯後的物件
 */
function useObjectTranslateFunction (i18nInstance, translateArrayIterator = {}.entries(), data = {}) {
  return [...translateArrayIterator]
    .reduce((preData, keyData = []) => {
      if (keyData.length === 3) {
        const [dataKey = '', tanslateKey = '', arg = ''] = keyData
        return { ...preData, [dataKey]: translateWithArg(i18nInstance, tanslateKey, arg, preData[dataKey]) }
      } else if (keyData.length === 2) {
        const [dataKey = '', tanslateKey = ''] = keyData
        return { ...preData, [dataKey]: translate(i18nInstance, tanslateKey, preData[dataKey]) }
      } else {
        return { ...preData, [keyData[0]]: translate(i18nInstance, keyData[0], preData[keyData[0]]) }
      }
    }
    , data)
}

/**
 * 根據translateKeyArray的設定翻譯陣列
 * @param {Object} i18nInstance
 * i18n實體
 * @param {Array} translateKeyArray
 * 一個存儲i18n實體翻譯鍵值的陣列
 * @param {Object} data
 * 一個準備翻譯的陣列
 * @returns {Array}
 * 翻譯後的陣列
 */
function useArrayTranslateFunction (i18nInstance, translateKeyArray = [], data = []) {
  return data.map((element, index) => translate(i18nInstance, translateKeyArray[index], element))
}

/**
 * 可以生產特定翻譯函式的high order function
 * @param {Function} translateFunction
 * 指定的翻譯函式
 */

/**
 * 指定翻譯函式，對一個陣列翻譯
 * @param {(i18nInstance,data)=>data} translateFunction
 * 翻譯函式(i18nInstance,data)=>data
 * @param {Object} i18nInstance
 * i18n實體
 * @param {Array} dataArr
 * 一個準備翻譯的陣列
 */
function useTranslateArrayDataByFunction (translateFunction = f => f, i18nInstance = {}, dataArr = []) {
  return [...dataArr].map(element => translateFunction(i18nInstance, element))
}

module.exports = {
  useObjectTranslateFunction,
  useArrayTranslateFunction,
  useTranslateArrayDataByFunction
}
