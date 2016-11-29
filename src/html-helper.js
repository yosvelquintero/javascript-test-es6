import htmlBeautifer from './html-beautifer';

/**
 * Html helper
 * 
 * @class HtmlHelper
 */
export default class HtmlHelper {

	/**
	 * Constructor
	 */
	constructor() {
		this._tabSize = 4;
	}

	/**
	 * Get tabs size
	 * 
	 * @returns {Integer} tabs size
	 */
	get tabSize() {
		return this._tabSize;
	}

	/**
	 * Is valid html
	 * 
	 * @param {String} str 
	 * @returns {Boolean} html validation
	 */
	isValid(str) {
		let doc = new DOMParser()
			.parseFromString(str, 'text/html');

		return Array
			.from(doc.body.childNodes)
			.some(node => node.nodeType === 1);
	}

	/**
	 * Get formatted html
	 * 
	 * @param {String} html
	 * @returns {String} formatted html
	 */
	getFormatted(html) {
		return htmlBeautifer(html, {
			'indent_size': this.tabSize,
			'indent_inner_html': true,
			'extra_liners': [],
			'end_with_newline': true
		});
	}

	/**
	 * Get escaped html
	 * 
	 * @param {String} html
	 * @returns {String}  escaped html
	 */
	getEscaped(html) {
		return html
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#039;');
	}

	/**
	 * Set html tags
	 * 
	 * @param {Array} arr array of elements
	 * @param {String} [close=''] closing backslash
	 * @returns {String} html tag elements
	 */
	setTags(arr, close = '') {
		return arr.map((item, index) => {
			return `${this.indentedByTabSize(index)}<${close}${item}>\n`;
		});
	}

	/**
	 * Set indentation by tabs size
	 * 
	 * @param {Integer} times
	 * @returns {String} hhml
	 */
	indentedByTabSize(times) {
		return ' '.repeat(times * this.tabSize);
	}

	/**
	 * Get error
	 * 
	 * @param {String} str Error string
	 * @returns {String}  Html error
	 */
	getError(str) {
		return `<p class="error">${str}</p>`;
	}

	/**
	 * Get pre code
	 * 
	 * @param {String} code
	 * @returns Html bloc with in pre code tags
	 */
	getPreCode(code) {
		return `<pre><code>${code}</code></pre>`;
	}
}
