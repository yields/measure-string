
/**
 * Measure the width of the given `str` with `el`.
 *
 * @param {Element} el
 * @param {String} str
 * @return {Number}
 * @api public
 */

module.exports = function(el, str){
  var dup = document.createElement('span');
  var styl = window.getComputedStyle(el);
  dup.style.letterSpacing = styl.letterSpacing;
  dup.style.textTransform = styl.textTransform;
  dup.style.font = styl.font;
  dup.style.position = 'absolute';
  dup.style.whiteSpace = 'nowrap';
  dup.style.top = -1000 + 'px';
  dup.style.width = 'auto';
  dup.style.padding = 0;
  dup.textContent = str;
  document.body.appendChild(dup);
  var width = dup.clientWidth;
  document.body.removeChild(dup);
  return width;
};
