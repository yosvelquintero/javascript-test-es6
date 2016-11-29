import Circle from './circle';
import Pentagon from './pentagon';
import Square from './square';
import Triangle from './triangle';

/**
 * Question four
 * 
 * @class QuestionFour
 */
export default class QuestionFour {

  /**
   * Ajax
   * 
   * @param {String} method
   * @param {String} url
   * @param {Function} callback
   */
  ajax(method, url, callback) {
    // compatible with IE7+, Firefox, Chrome, Opera, Safari
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        callback(xmlhttp.responseText);
      }
    };

    xmlhttp.open(method, url, true);
    xmlhttp.send();
  }

  /**
   * Get shapes
   * 
   * @returns {Object} shapes objject
   */
  shapes() {
    return {
      circle: sl => new Circle(sl),
      pentagon: sl => new Pentagon(sl),
      square: sl => new Square(sl),
      triangle: sl => new Triangle(sl),
    };
  }
}
