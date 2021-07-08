function _classCallCheck(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,i){for(var t=0;t<i.length;t++){var s=i[t];s.enumerable=s.enumerable||0,s.configurable=1,"value"in s&&(s.writable=1),Object.defineProperty(e,s.key,s)}}function _createClass(e,i,t){return i&&_defineProperties(e.prototype,i),t&&_defineProperties(e,t),e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,i){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,i){return e.__proto__=i,e})(e,i)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _possibleConstructorReturn(e,i){return!i||"object"!=typeof i&&"function"!=typeof i?_assertThisInitialized(e):i}function _createSuper(e){var i=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return 0;if(Reflect.construct.sham)return 0;if("function"==typeof Proxy)return 1;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),1}catch(e){return 0}}();return function _createSuperInternal(){var t,s=_getPrototypeOf(e);if(i){var n=_getPrototypeOf(this).constructor;t=Reflect.construct(s,arguments,n)}else t=s.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _get(e,i,t){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function _get(e,i,t){var s=function _superPropBase(e,i){for(;!Object.prototype.hasOwnProperty.call(e,i)&&null!==(e=_getPrototypeOf(e)););return e}(e,i);if(s){var n=Object.getOwnPropertyDescriptor(s,i);return n.get?n.get.call(t):n.value}})(e,i,t||e)}var Navigation=function(){function Navigation(e){_classCallCheck(this,Navigation),this.slider=e,this.sliderTrack=this.slider.querySelector(".slider-track"),this.slides=this.slider.querySelectorAll(".slide"),this.maximumSwipingAtSlider=0,this.measuresMaximumSwipeOfSlider()}return _createClass(Navigation,[{key:"measuresMaximumSwipeOfSlider",value:function measuresMaximumSwipeOfSlider(){var e=this;this.sliderTrack.querySelectorAll(".slide").forEach((function(i){e.maximumSwipingAtSlider+=i.offsetWidth})),this.maximumSwipingAtSlider-=this.slider.clientWidth}},{key:"getNewPositionSliderTrack",value:function getNewPositionSliderTrack(e){for(var i=0,t=0;t<e;t++)i+=Math.round(this.slides[t].getBoundingClientRect().width);return i=this.checkNewPosition(i)}},{key:"addTransitionSliderTrack",value:function addTransitionSliderTrack(e,i){var t=this;this.sliderTrack.style.transition="transform 0.".concat(e,"s ease"),setTimeout((function(){t.sliderTrack.style.transform="translate3d(".concat(-i,"px, 0px, 0px)")}),0),setTimeout((function(){t.sliderTrack.style.transition="transform 0s ease"}),e)}},{key:"checkNewPosition",value:function checkNewPosition(e){return e>this.maximumSwipingAtSlider?e=this.maximumSwipingAtSlider:e<0&&(e=0),e}},{key:"pushingSliderTrack",value:function pushingSliderTrack(e,i){if(!(i===this.slides.length-1&&"last"!==e||0===i&&"next"!==e)){var t="next"===e?i+1:i-1,s=this.getNewPositionSliderTrack(t);return Math.round(this.slides[i].getBoundingClientRect().width),Math.abs(getComputedStyle(this.sliderTrack).transform.split(",")[4]),this.addTransitionSliderTrack(500,s),{position:s,current_slide:t}}}}]),Navigation}(),Pagination=function(){function Pagination(e){_classCallCheck(this,Pagination),this.slider=e,this.btnsPagination=this.slider.querySelectorAll(".pagination-btn")}return _createClass(Pagination,[{key:"changeBtnPagination",value:function changeBtnPagination(e){this.btnsPagination.forEach((function(e){e.classList.remove("pagination-btn-active")})),this.btnsPagination[e].classList.add("pagination-btn-active")}}]),Pagination}(),Slider=function(){function Slider(){_classCallCheck(this,Slider)}return _createClass(Slider,[{key:"getEvent",value:function getEvent(){return-1!=event.type.search("touch")?event.touches[0]:event}},{key:"measuresMaximumSwipeOfSlider",value:function measuresMaximumSwipeOfSlider(){var e=this;this.sliderTrack.querySelectorAll(".slide").forEach((function(i){e.maximumSwipingAtSlider+=i.offsetWidth})),this.maximumSwipingAtSlider-=this.sliderWidth}},{key:"getPaginationSlider",value:function getPaginationSlider(){return this.slider.querySelector(".slider-pagination")}},{key:"checkIsPaginationSlider",value:function checkIsPaginationSlider(){this.getPaginationSlider()&&this.addPagination()}},{key:"watchSwipeSliderTrack_Pagination",value:function watchSwipeSliderTrack_Pagination(){this.newPagination.changeBtnPagination(this.currentSlide)}},{key:"addPagination",value:function addPagination(){this.isPagination=1,this.newPagination=new Pagination(this.slider)}},{key:"addNavigation",value:function addNavigation(){var e=this;this.isNavigation=1,this.newNavigation=new Navigation(this.slider);var i=this.slider.querySelector(".btn-slider-push-last"),t=this.slider.querySelector(".btn-slider-push-next");i.addEventListener("click",(function(){e.pressedBtnPushSlider()})),t.addEventListener("click",(function(){e.pressedBtnPushSlider()}))}},{key:"pressedBtnPushSlider",value:function pressedBtnPushSlider(){var e=this;if(this.allowSwipe){var i=event.currentTarget.dataset.direction,t=this.newNavigation.pushingSliderTrack(i,this.currentSlide);t&&(this.currentSlide=t.current_slide,this.positionFinal=t.position,this.positionSliderTrack=t.position,this.watchSwipeSliderTrack_Pagination()),this.allowSwipe=0,setTimeout((function(){e.allowSwipe=1}),500)}}},{key:"checkSliderCanBeMoved",value:function checkSliderCanBeMoved(e){Math.abs(e.clientY-this.positionPressedY)>=5&&"touchmove"===event.type&&(this.isScrollingSlider?this.isScrollingSlider&&(this.allowSwipe=1):(this.allowSwipe=0,this.removeEventsSliderTrack()))}},{key:"checksOutOfBounds",value:function checksOutOfBounds(){(this.positionX_FingetCurrentMoment_OnSlider>=this.positionFingerPressSliderX&&this.positionSliderTrack-this.positionFinal>0||this.positionX_FingetCurrentMoment_OnSlider>=this.sliderWidth-this.positionFingerPressSliderX&&this.positionSliderTrack-this.positionFinal<0)&&this.swipeEnd()}},{key:"calculatesTouchCoordinates_SwipeStart",value:function calculatesTouchCoordinates_SwipeStart(e){this.positionPressedX=e.clientX,this.positionPressedY=e.clientY,this.positionFingerPressSliderX=this.positionPressedX-this.slider.getBoundingClientRect().x,this.positionFingerPressSliderY=this.positionPressedY-this.slider.getBoundingClientRect().y}}]),Slider}(),SliderEndLess=function(e){!function _inherits(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,writable:1,configurable:1}}),i&&_setPrototypeOf(e,i)}(SliderEndLess,Slider);var i=_createSuper(SliderEndLess);function SliderEndLess(e,t){var s,n;return _classCallCheck(this,SliderEndLess),(n=i.call(this)).slider=e,n.options=t,n.sliderTrack=n.slider.querySelector(".slider-track"),n.positionSliderTrack=0,n.currentSlide=0,n.slides=n.sliderTrack.children,n.numberSlides=n.slides.length,n.widthSlide=n.slides[0].offsetWidth,n.positionPressedX,n.positionPressedY,n.positionFingerPressSliderX,n.positionFingerPressSliderY,n.positionX_FingetCurrentMoment_OnSlider,n.positionY_FingetCurrentMoment_OnSlider,n.allowSwipe=1,n.isScrollingSlider=0,n.intervals=[],n.timeouts=[],n._swipeStart=function(){n.swipeStart()},n._swipeAction=function(){n.swipeAction()},n._swipeEnd=function(){n.swipeEnd()},n.addOptions(),_get((s=_assertThisInitialized(n),_getPrototypeOf(SliderEndLess.prototype)),"checkIsPaginationSlider",s).call(s),n.goingOutBoundsSlider=function(){n.swipeEnd(),n.sliderTrack.removeEventListener("mouseout",n.goingOutBoundsSlider)},n}return _createClass(SliderEndLess,[{key:"addOptions",value:function addOptions(){this.speed=this.options&&this.options.speed?this.options.speed:200,this.timerAdvance=this.options&&this.options.timerAdvance?[this.options.timerAdvance[0],this.options.timerAdvance[1]]:[0],this.freezeSliderMouseHover=this.options.freezeSliderMouseHover?this.options.freezeSliderMouseHover:0,this.freezeSliderOnLossFocus=this.options.freezeSliderOnLossFocus?this.options.freezeSliderOnLossFocus:0,this.options&&this.timerAdvance[0]&&(this.addSetInterval_For_Slider(),this.checks_If_UserOnSite(),this.freezeSliderMouseHover&&this.addEventMouse_TouchMove_Slider())}},{key:"addEventsSliderTrack",value:function addEventsSliderTrack(){this.sliderTrack.addEventListener("mouseup",this._swipeEnd),this.sliderTrack.addEventListener("touchend",this._swipeEnd,{passive:1}),this.sliderTrack.addEventListener("mousemove",this._swipeAction),this.sliderTrack.addEventListener("touchmove",this._swipeAction,{passive:1}),this.sliderTrack.addEventListener("mouseout",this.goingOutBoundsSlider),this.slider.classList.add("slider-active")}},{key:"removeEventsSliderTrack",value:function removeEventsSliderTrack(){this.sliderTrack.removeEventListener("touchmove",this._swipeAction),this.sliderTrack.removeEventListener("touchend",this._swipeEnd),this.sliderTrack.removeEventListener("mousemove",this._swipeAction),this.sliderTrack.removeEventListener("mouseout",this.goingOutBoundsSlider),this.sliderTrack.removeEventListener("mouseup",this._swipeEnd),this.slider.classList.remove("slider-active")}},{key:"pushingSlider",value:function pushingSlider(){var e=this,i=this.positionSliderTrack>this.widthSlide?"next":"last",t="next"===i?2*-this.widthSlide:0;this.sliderTrack.style.transform="translate3d(".concat(t,"px, 0px, 0px)"),this.addCssSliderTrack(),this.movesSlider_If_OnlyTwoSlides()||setTimeout((function(){"next"===i?e.movesFirstSlide_TheEnd():e.movesLastSlide_Start(),e.changeCurrentSlide(i),e.checkPaginationNumbersSlides()}),1.5*this.speed)}},{key:"checkPaginationNumbersSlides",value:function checkPaginationNumbersSlides(){this.currentSlide===this.numberSlides?this.currentSlide=0:-1===this.currentSlide&&(this.currentSlide=this.numberSlides-1),this.checkIsNavigation_Pagination()}},{key:"checkIsNavigation_Pagination",value:function checkIsNavigation_Pagination(){this.isPagination&&_get(_getPrototypeOf(SliderEndLess.prototype),"watchSwipeSliderTrack_Pagination",this).call(this)}},{key:"changeCurrentSlide",value:function changeCurrentSlide(e){this.currentSlide-="next"===e?-1:1}},{key:"movesSlider_If_OnlyTwoSlides",value:function movesSlider_If_OnlyTwoSlides(){var e=this;if(2===this.numberSlides)return setTimeout((function(){e.changeFirst_LastSlide()}),1.5*this.speed),1}},{key:"startPushSliderEndLess",value:function startPushSliderEndLess(){var e=this;this.allowSwipe=0,this.clearnsSetIntervals(),this.pushingSlider(),setTimeout((function(){e.freezeSliderMouseHover||e.createSetInterval_For_Slider(),e.allowSwipe=1}),1.5*this.speed)}},{key:"movesFirstSlide_TheEnd",value:function movesFirstSlide_TheEnd(){var e=this.slides[0];e.remove(),this.sliderTrack.append(e),this.nullifiesCssSliderTrack()}},{key:"movesLastSlide_Start",value:function movesLastSlide_Start(){var e=this.slides[this.numberSlides-1];e.remove(),this.sliderTrack.prepend(e),this.nullifiesCssSliderTrack()}},{key:"changeFirst_LastSlide",value:function changeFirst_LastSlide(){var e=this.slides[0],i=this.slides[this.slides.length-1],t=this.slides[1].cloneNode(1);this.sliderTrack.prepend(t),this.sliderTrack.append(e),this.sliderTrack.append(t),i.remove(),this.nullifiesCssSliderTrack()}},{key:"addLastSlideStart",value:function addLastSlideStart(){var e=this.slides[this.slides.length-1].cloneNode(1);this.sliderTrack.prepend(e),this.checkNumbersSlides()||this.slides[this.slides.length-1].remove()}},{key:"checkNumbersSlides",value:function checkNumbersSlides(){if(2===this.numberSlides)return 1}},{key:"addCssSliderTrack",value:function addCssSliderTrack(){this.sliderTrack.style.transition="transform 0.".concat(1.5*this.speed,"s")}},{key:"nullifiesCssSliderTrack",value:function nullifiesCssSliderTrack(){this.sliderTrack.style.transition="none",this.sliderTrack.style.transform="translate3d(-".concat(this.slider.clientWidth,"px, 0px, 0px)")}},{key:"addSetInterval_For_Slider",value:function addSetInterval_For_Slider(){this.freezeSliderOnLossFocus?(this.addEventScroll_BlurWindow(),this.countsPositionSlider_Window()):this.createSetInterval_For_Slider()}},{key:"addEventScroll_BlurWindow",value:function addEventScroll_BlurWindow(){var e=this;this.isVisible=0,window.addEventListener("scroll",(function(){e.countsPositionSlider_Window()}))}},{key:"countsPositionSlider_Window",value:function countsPositionSlider_Window(){var e={top:window.pageYOffset+this.slider.getBoundingClientRect().top,bottom:window.pageXOffset+this.slider.getBoundingClientRect().bottom},i={top:window.pageYOffset,bottom:window.pageYOffset+document.documentElement.clientHeight};this.checks_If_SliderVisible(e,i)}},{key:"checks_If_SliderVisible",value:function checks_If_SliderVisible(e,i){if(i.top-this.slider.clientHeight<=e.top&&e.top<i.bottom){if(this.isVisible)return;this.createSetInterval_For_Slider(),this.isVisible=1}else this.clearnsSetIntervals(),this.isVisible=0}},{key:"checks_If_UserOnSite",value:function checks_If_UserOnSite(){var e=this;this.timerAdvance[0]&&document.addEventListener("visibilitychange",(function(){document.hidden?(e.clearnsSetIntervals(),e.isVisible=0):e.countsPositionSlider_Window()}))}},{key:"addEventMouse_TouchMove_Slider",value:function addEventMouse_TouchMove_Slider(){var e=this;this.slider.addEventListener("mousemove",(function(){e.clearnsSetIntervals()})),this.slider.addEventListener("mouseout",(function(){e.createSetInterval_For_Slider()})),this.slider.addEventListener("touchstart",(function(){e.clearnsSetIntervals(),e.clearnsSetTimeouts()}),{passive:1}),this.slider.addEventListener("touchend",(function(){e.timeout=setTimeout((function(){e.createSetInterval_For_Slider()}),300),e.timeouts.push(e.timeout)}),{passive:1})}},{key:"createSetInterval_For_Slider",value:function createSetInterval_For_Slider(){var e=this;this.timeInterval=setInterval((function(){e.sliderTrack.style.transform="translate3d(-".concat(2*e.widthSlide,"px, 0px, 0px)"),e.addCssSliderTrack(),e.allowSwipe=0,e.movesSlider_If_OnlyTwoSlides()||(e.checkIsNavigation_Pagination(),setTimeout((function(){e.movesFirstSlide_TheEnd(),e.allowSwipe=1,e.currentSlide++,e.checkPaginationNumbersSlides()}),1.5*e.speed))}),this.timerAdvance[1]),this.intervals.push(this.timeInterval)}},{key:"pushingSwipeSlider",value:function pushingSwipeSlider(){this.singleSwipe=this.positionSliderTrack,this.sliderTrack.style.transform="translate3d(".concat(-this.positionSliderTrack,"px, 0px, 0px)"),Math.abs(this.singleSwipe)>=5&&(this.isScrollingSlider=1)}},{key:"swipeStart",value:function swipeStart(){var e=this;if(this.allowSwipe){var i=_get(_getPrototypeOf(SliderEndLess.prototype),"getEvent",this).call(this);_get(_getPrototypeOf(SliderEndLess.prototype),"calculatesTouchCoordinates_SwipeStart",this).call(this,this.evt=i),this.clearnsSetIntervals(),this.addEventsSliderTrack()}else setTimeout((function(){e.allowSwipe=1}))}},{key:"swipeAction",value:function swipeAction(){var e=_get(_getPrototypeOf(SliderEndLess.prototype),"getEvent",this).call(this);_get(_getPrototypeOf(SliderEndLess.prototype),"checkSliderCanBeMoved",this).call(this,this.evt=e),this.allowSwipe&&(this.positionSliderTrack=this.positionPressedX-e.clientX+this.widthSlide,"touchmove"===event.type&&(this.positionX_FingetCurrentMoment_OnSlider=Math.abs(this.positionPressedX-e.clientX),this.positionY_FingetCurrentMoment_OnSlider=Math.abs(this.positionPressedY-e.clientY),_get(_getPrototypeOf(SliderEndLess.prototype),"checksOutOfBounds",this).call(this)),this.pushingSwipeSlider())}},{key:"swipeEnd",value:function swipeEnd(){this.isScrollingSlider=0,this.removeEventsSliderTrack(),this.startPushSliderEndLess()}},{key:"clearnsSetIntervals",value:function clearnsSetIntervals(){this.intervals.forEach((function(e){window.clearInterval(e)}))}},{key:"clearnsSetTimeouts",value:function clearnsSetTimeouts(){this.timeouts.forEach((function(e){window.clearInterval(e)}))}},{key:"run",value:function run(){this.addLastSlideStart(),this.sliderTrack.addEventListener("touchstart",this._swipeStart,{passive:1}),this.sliderTrack.addEventListener("mousedown",this._swipeStart),this.sliderTrack.style.transform="translate3d(-".concat(this.slider.clientWidth,"px, 0px, 0px)")}}]),SliderEndLess}();