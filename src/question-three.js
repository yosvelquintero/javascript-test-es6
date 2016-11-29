import HtmlHelper from './html-helper';

/**
 * Question three
 * 
 * @class QuestionThree
 */
export default class QuestionThree {

	/**
	 * Get formatted html
	 * 
	 * @param {String} str 
	 * @returns {String} error message or formatted html
	 */
	getFormattedHtml(arr) {
		let htmlHelper = new HtmlHelper(),
			html = []
			.concat(
				htmlHelper.setTags(arr),
				htmlHelper.setTags(arr, '/').reverse()
			)
			.join('');
		
    html = htmlHelper.getEscaped(html);

		return htmlHelper.getPreCode(html);
	}
}
