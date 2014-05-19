//Obtaining  the default helper
var AniJSDefaultHelper = AniJS.getHelper();

//Creating a testing scroll before function
AniJSDefaultHelper.isRevealedOnScroll = function(e, animationContext){

	//Current elements that will be animated
	animationContextBehaviorTargetList =  animationContext.behaviorTargetList;

	//We put in this only the nodes that will be animated
	visibleBehaviorTargetList = [];

	for (var i = 0; i < animationContextBehaviorTargetList.length; i++) {
		element = animationContextBehaviorTargetList[i];

		//Check if the element is visible
		if(ScrollRevealHelper.isElementInViewport(element, 0.50)){
		
			//The element is not animated again if it's visible
			if(!element.isRevealed){
				visibleBehaviorTargetList.push(element);
				element.isRevealed = 1;
			}

		} else {
			element.isRevealed = 0;
		}
	}

	//Overwrite the behaviorTargetList of the animation
	animationContext.behaviorTargetList = visibleBehaviorTargetList;

	//Run the animation
	animationContext.run();
}

/**
 * Helper the custom EventTarget
 * ! scrollReveal.js v0.1.2 (c) 2014 Julian Lloyd
 * MIT License
 * https://github.com/julianlloyd/scrollReveal.js
 * @class ScrollRevealHelper
 */
var ScrollRevealHelper  = {

	//ATTRS
	viewportFactor: 1,
	docElem: window.document.documentElement,

    getViewportH : function () {
      var client = this.docElem['clientHeight'],
        inner = window['innerHeight'];

      return (client < inner) ? inner : client;
    },

    getOffset : function(el) {
      var offsetTop = 0,
          offsetLeft = 0;

      do {
        if (!isNaN(el.offsetTop)) {
          offsetTop += el.offsetTop;
        }
        if (!isNaN(el.offsetLeft)) {
          offsetLeft += el.offsetLeft;
        }
      } while (el = el.offsetParent)

      return {
        top: offsetTop,
        left: offsetLeft
      }
    },

    isElementInViewport : function(el, h) {
      var scrolled = window.pageYOffset,
          viewed = scrolled + this.getViewportH(),
          elH = el.offsetHeight,
          elTop = this.getOffset(el).top,
          elBottom = elTop + elH,
          h = h || 0;

       console.log(el);

      return (elTop + elH * h) <= viewed
          && (elBottom) >= scrolled
          || (el.currentStyle? el.currentStyle : window.getComputedStyle(el, null)).position == 'fixed';
    },
};
