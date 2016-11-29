import HtmlHelper from './html-helper';

/**
 * Question two
 * 
 * @class QuestionTwo
 */
export default class QuestionTwo {

  /**
   * Get formatted html
   * 
   * @param {String} str 
   * @returns {String} error message or formatted html
   */
  getFormattedHtml(str) {
    let htmlHelper = new HtmlHelper(),
      html = htmlHelper.getFormatted(str),
      tagsLength = html.match(/<\//g),
      middleOpenCloseTag = html.match(/<(\w+)(><)\/\1>/);

    if (!htmlHelper.isValid(html) || !tagsLength || !(middleOpenCloseTag && middleOpenCloseTag[2])) {
      return htmlHelper.getError('You should enter a valid html code.');
    }

    html = html.replace(
      middleOpenCloseTag[2], 
      `>\n${htmlHelper.indentedByTabSize(tagsLength.length - 1)}<`
    );
    html = htmlHelper.getEscaped(html);

    return htmlHelper.getPreCode(html);
  }
}
