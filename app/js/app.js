!function(i){var e={};function t(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return i[s].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=i,t.c=e,t.d=function(i,e,s){t.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:s})},t.r=function(i){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},t.t=function(i,e){if(1&e&&(i=t(i)),8&e)return i;if(4&e&&"object"==typeof i&&i&&i.__esModule)return i;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var n in i)t.d(s,n,function(e){return i[e]}.bind(null,n));return s},t.n=function(i){var e=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(e,"a",e),e},t.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},t.p="",t(t.s=0)}([function(i,e,t){"use strict";function s(i,e){for(var t=0;t<e.length;t++){var s=e[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(i,s.key,s)}}t.r(e);var n=function(){function i(e,t){var s=this;!function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),this.slider=e,this.options=t,this.sliderTrack=this.slider.querySelector(".slider-track"),this.sliderWidth=this.slider.offsetWidth,this.maximumSwipingAtSlider=0,this.positionFinal=0,this.singleSwipe=0,this.positionPressedX,this.positionPressedY,this.positionSliderTrack=0,this.positionFingerPressSliderX,this.positionFingerPressSliderY,this.positionX_FingetCurrentMoment_OnSlider,this.positionY_FingetCurrentMoment_OnSlider,this.allowSwipe=!0,this.isScrollingSlider=!1,this.measuresMaximumSwipeOfSlider(),this.addOptions(),this._swipeAction=function(){s.swipeAction()},this._swipeEnd=function(){s.swipeEnd()},this.goingOutBoundsSlider=function(){s.swipeEnd(),s.sliderTrack.removeEventListener("mouseout",s.goingOutBoundsSlider)}}var e,t,n;return e=i,(t=[{key:"addOptions",value:function(){this.scrollAfterAbruptStop=!this.options||this.options.scrollAfterAbruptStop}},{key:"getEvent",value:function(){return-1!=event.type.search("touch")?event.touches[0]:event}},{key:"measuresMaximumSwipeOfSlider",value:function(){var i=this;this.sliderTrack.querySelectorAll(".slide").forEach((function(e){i.maximumSwipingAtSlider+=e.offsetWidth})),this.maximumSwipingAtSlider-=this.slider.querySelector(".slider-list").offsetWidth}},{key:"checksOutOfBounds",value:function(){(this.positionX_FingetCurrentMoment_OnSlider>=this.positionFingerPressSliderX&&this.positionSliderTrack-this.positionFinal>0||this.positionX_FingetCurrentMoment_OnSlider>=this.sliderWidth-this.positionFingerPressSliderX&&this.positionSliderTrack-this.positionFinal<0)&&(this.sliderTrack.removeEventListener("touchmove",this._swipeAction),this.swipeEnd())}},{key:"checkSliderCanBeMoved",value:function(i){Math.abs(i.clientY-this.positionPressedY)>=5&&"touchmove"===event.type&&(this.isScrolledPage=!0,this.isScrolledPage&&!this.isScrollingSlider?(this.allowSwipe=!1,this.removeEventsSliderTrack()):this.isScrolledPage&&this.isScrollingSlider&&(this.allowSwipe=!0))}},{key:"measuresSpeedTrafficSliderTrack",value:function(){var i=(this.singleSwipe/this.swipeSlider_Time).toFixed(2);this.autoPushingSlider(i)}},{key:"autoPushingSlider",value:function(i){if(!(i<=.6)){var e=i*this.positionSliderTrack;e<this.positionSliderTrack&&(e=this.positionSliderTrack),"right"===this.directionSliderTrack&&(e=Math.round(e-(e-this.positionSliderTrack/1.45))),e>this.maximumSwipingAtSlider?e=this.maximumSwipingAtSlider:e<0&&(e=0),this.setsStyle_For_autoPushingSlider(e)}}},{key:"setsStyle_For_autoPushingSlider",value:function(i){var e=this;this.sliderTrack.style.transform="translate3d(-".concat(this.positionSliderTrack,"px, 0px, 0px)"),setTimeout((function(){e.sliderTrack.style.transform="translate3d(-".concat(i,"px, 0px, 0px)"),e.sliderTrack.style.transition="transform 1s ease-out",e.sliderTrack.addEventListener("transitionend",(function(){e.sliderTrack.style.transition="none",e.positionFinal=i}))}),0)}},{key:"stopsAutoScrolling",value:function(){this.sliderTrack.style.transition="none"}},{key:"pushingSlider",value:function(){this.singleSwipe=Math.abs(this.positionSliderTrack-this.positionFinal),this.singleSwipe>=5&&(this.isScrollingSlider=!0),this.positionSliderTrack<=this.maximumSwipingAtSlider&&this.allowSwipe&&this.positionSliderTrack>0&&this.allowSwipe&&(this.sliderTrack.style.transform="translate3d(-".concat(this.positionSliderTrack,"px, 0px, 0px)"))}},{key:"swipeStart",value:function(){this.stopsAutoScrolling();var i=this.getEvent();this.time_1=performance.now(),this.positionPressedX=i.clientX,this.positionPressedY=i.clientY,this.positionFingerPressSliderX=i.clientX-this.slider.getBoundingClientRect().x,this.positionFingerPressSliderY=i.clientY-this.slider.getBoundingClientRect().y,this.sliderTrack.style.transform="translate3d(".concat(-this.positionFinal,"px, 0px, 0px)"),this.sliderTrack.addEventListener("mousemove",this._swipeAction),this.sliderTrack.addEventListener("touchmove",this._swipeAction,{passive:!0}),this.sliderTrack.addEventListener("mouseout",this.goingOutBoundsSlider),this.slider.classList.add("slider-active")}},{key:"swipeAction",value:function(){var i=this.getEvent();this.directionSliderTrack=this.positionPressedX<i.clientX?"right":"left",this.checkSliderCanBeMoved(this.evt=i),this.allowSwipe&&("touchmove"===event.type&&(this.positionX_FingetCurrentMoment_OnSlider=Math.abs(this.positionPressedX-i.clientX),this.positionY_FingetCurrentMoment_OnSlider=Math.abs(this.positionPressedY-i.clientY),this.checksOutOfBounds()),this.allowSwipe&&(this.positionSliderTrack=this.positionPressedX-i.clientX+this.positionFinal,this.pushingSlider()))}},{key:"swipeEnd",value:function(){this.allowSwipe?(this.singleSwipe=Math.abs(this.positionSliderTrack-this.positionFinal),this.positionFinal=this.positionSliderTrack,this.positionFinal>this.maximumSwipingAtSlider?this.positionFinal=this.maximumSwipingAtSlider:this.positionFinal<0&&(this.positionFinal=0),this.allowSwipe=!0,this.isScrollingSlider=!1,this.scrollAfterAbruptStop&&(this.swipeSlider_Time=performance.now()-this.time_1,this.measuresSpeedTrafficSliderTrack()),this.removeEventsSliderTrack()):this.allowSwipe=!0}},{key:"removeEventsSliderTrack",value:function(){this.sliderTrack.removeEventListener("mousemove",this._swipeAction),this.sliderTrack.removeEventListener("touchmove",this._swipeAction),this.sliderTrack.removeEventListener("mouseout",this.goingOutBoundsSlider),this.slider.classList.remove("slider-active")}},{key:"run",value:function(){var i=this;this.sliderTrack.addEventListener("touchstart",(function(){i.swipeStart()}),{passive:!0}),this.sliderTrack.addEventListener("touchend",this._swipeEnd,{passive:!0}),this.sliderTrack.addEventListener("mousedown",(function(){i.swipeStart()})),this.sliderTrack.addEventListener("mouseup",this._swipeEnd)}}])&&s(e.prototype,t),n&&s(e,n),i}();function r(i,e){for(var t=0;t<e.length;t++){var s=e[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(i,s.key,s)}}var o=function(){function i(e,t){var s=this;!function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),this.slider=e,this.options=t,this.sliderWidth=this.slider.clientWidth,this.sliderTrack=this.slider.querySelector(".slider-track"),this.currentSlide=0,this.numberSlides=this.sliderTrack.querySelectorAll(".slide"),this.positionSlider=0,this.positionFinal=0,this.positionPressedX,this.positionPressedY,this.positionFingerPressSliderX,this.positionFingerPressSliderY,this.positionX_FingetCurrentMoment_OnSlider,this.positionY_FingetCurrentMoment_OnSlider,this.allowSwipe=!0,this.isScrollingSlider=!1,this.addOptions(),this._swipeStart=function(){s.swipeStart()},this._swipeAction=function(){s.swipeAction()},this._swipeEnd=function(){s.swipeEnd()},this.goingOutBoundsSlider=function(){s.swipeEnd(),s.sliderTrack.removeEventListener("mouseout",s.goingOutBoundsSlider)}}var e,t,s;return e=i,(t=[{key:"addOptions",value:function(){this.percentageForSuccessfulScrolling=this.options.percentageForSuccessfulScrolling?this.options.percentageForSuccessfulScrolling:35,this.infinity=!!this.options.infinity&&this.options.infinity}},{key:"getEvent",value:function(){return-1!=event.type.search("touch")?event.touches[0]:event}},{key:"checksOutOfBounds",value:function(){(this.positionX_FingetCurrentMoment_OnSlider>=this.positionFingerPressSliderX&&this.positionSliderTrack-this.positionFinal>0||this.positionX_FingetCurrentMoment_OnSlider>=this.sliderWidth-this.positionFingerPressSliderX&&this.positionSliderTrack-this.positionFinal<0)&&(this.sliderTrack.removeEventListener("touchmove",this._swipeAction),this.swipeEnd())}},{key:"checkSliderCanBeMoved",value:function(i){Math.abs(i.clientY-this.positionPressedY)>=5&&"touchmove"===event.type&&(this.isScrolledPage=!0,this.isScrolledPage&&!this.isScrollingSlider?(this.allowSwipe=!1,this.removeEventsSliderTrack()):this.isScrolledPage&&this.isScrollingSlider&&(this.allowSwipe=!0))}},{key:"removeEventsSliderTrack",value:function(){this.sliderTrack.removeEventListener("touchmove",this._swipeAction),this.sliderTrack.removeEventListener("touchend",this._swipeEnd),this.sliderTrack.removeEventListener("mousemove",this._swipeAction),this.sliderTrack.removeEventListener("mouseout",this.goingOutBoundsSlider),this.sliderTrack.removeEventListener("mouseup",this._swipeEnd),this.slider.classList.remove("slider-active"),this.allowSwipe=!0}},{key:"addTransitionSliderTrack",value:function(i){var e=this;this.sliderTrack.style.transition="transform 0.".concat(i,"s ease"),this.positionFinal=this.currentSlide*this.sliderWidth,this.allowSwipe=!1,setTimeout((function(){e.sliderTrack.style.transform="translate3d(".concat(-e.positionFinal,"px, 0px, 0px)")}),0),setTimeout((function(){e.sliderTrack.style.transition="none",e.allowSwipe=!0}),i)}},{key:"returnsSliderBack",value:function(){this.addTransitionSliderTrack(500)}},{key:"checksIfSliderNeedsPromoted",value:function(){this.singleSwipe>=this.percentForSuccessfulScrolling&&this.currentSlide!==this.numberSlides.length-1?(this.currentSlide++,this.addTransitionSliderTrack(500)):this.singleSwipe<=this.percentForSuccessfulScrolling&&0!==this.currentSlide?(this.currentSlide--,this.addTransitionSliderTrack(500)):this.returnsSliderBack()}},{key:"pushingSlider",value:function(){this.sliderTrack.style.transform="translate3d(".concat(-this.positionSliderTrack,"px, 0px, 0px)"),this.singleSwipe>=5&&(this.isScrollingSlider=!0)}},{key:"swipeStart",value:function(){if(this.allowSwipe){var i=this.getEvent();this.percentForSuccessfulScrolling=Math.round(this.sliderWidth/100*this.percentageForSuccessfulScrolling),this.positionPressedX=i.clientX,this.positionPressedY=i.clientY,this.positionFingerPressSliderX=this.positionPressedX-this.slider.getBoundingClientRect().x,this.positionFingerPressSliderY=this.positionPressedY-this.slider.getBoundingClientRect().y,this.sliderTrack.style.transform="translate3d(-".concat(this.positionFinal,"px, 0px, 0px)"),this.sliderTrack.addEventListener("mouseup",this._swipeEnd),this.sliderTrack.addEventListener("touchend",this._swipeEnd,{passive:!0}),this.sliderTrack.addEventListener("mousemove",this._swipeAction),this.sliderTrack.addEventListener("touchmove",this._swipeAction,{passive:!0}),this.sliderTrack.addEventListener("mouseout",this.goingOutBoundsSlider),this.slider.classList.add("slider-active")}}},{key:"swipeAction",value:function(){var i=this.getEvent();this.checkSliderCanBeMoved(this.evt=i),this.allowSwipe&&(this.singleSwipe=this.positionPressedX-i.clientX,this.positionSliderTrack=this.positionPressedX-i.clientX+this.positionFinal,"touchmove"===event.type&&(this.positionX_FingetCurrentMoment_OnSlider=Math.abs(this.positionPressedX-i.clientX),this.positionY_FingetCurrentMoment_OnSlider=Math.abs(this.positionPressedY-i.clientY),this.checksOutOfBounds()),this.pushingSlider())}},{key:"swipeEnd",value:function(){this.isScrollingSlider=!1,this.allowSwipe=!0,this.removeEventsSliderTrack(),Math.abs(this.singleSwipe)<=this.percentForSuccessfulScrolling?this.returnsSliderBack():this.checksIfSliderNeedsPromoted()}},{key:"run",value:function(){this.sliderTrack.addEventListener("mousedown",this._swipeStart),this.sliderTrack.addEventListener("touchstart",this._swipeStart,{passive:!0})}}])&&r(e.prototype,t),s&&r(e,s),i}();function l(i,e){for(var t=0;t<e.length;t++){var s=e[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(i,s.key,s)}}var a=function(){function i(e,t){!function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),this.slider=e,this.options=t,this.sliderTrack=this.slider.querySelector(".slider-track"),this.positionSliderTrack=0,this.slides=this.sliderTrack.children,this.numberSlides=this.slides.length,this.widthSlide=this.slides[0].offsetWidth,this.intervals=[],this.timeouts=[],this.sliderBtnPushLast=this.slider.querySelector(".btn-slider-push-last"),this.sliderBtnPushNext=this.slider.querySelector(".btn-slider-push-next")}var e,t,s;return e=i,(t=[{key:"addOptions",value:function(){this.speed=this.options&&this.options.speed?this.options.speed:200,this.timerAdvance=this.options&&this.options.timerAdvance?[this.options.timerAdvance[0],this.options.timerAdvance[1]]:[!1],this.freezeSliderMouseHover=!!this.options.freezeSliderMouseHover&&this.options.freezeSliderMouseHover,this.options&&this.timerAdvance[0]&&(this.addSetInterval_For_Slider(),this.checks_If_UserOnSite(),this.freezeSliderMouseHover&&this.addEventMouse_TouchMove_Slider())}},{key:"addEventClick_BtnsSliderPush",value:function(){var i=this;this.sliderBtnPushLast.addEventListener("click",(function(){i.pressedBtnPushSlider()})),this.sliderBtnPushNext.addEventListener("click",(function(){i.pressedBtnPushSlider()}))}},{key:"pushingSlider",value:function(){var i=this,e=event.currentTarget.dataset.direction,t="next"===e?2*-this.widthSlide:0;this.sliderTrack.style.transform="translate3d(".concat(t,"px, 0px, 0px)"),this.addCssSliderTrack(),this.movesSlider_If_OnlyTwoSlides()||setTimeout((function(){"next"===e?i.movesFirstSlide_TheEnd():i.movesLastSlide_Start()}),1.5*this.speed)}},{key:"movesSlider_If_OnlyTwoSlides",value:function(){var i=this;if(2===this.numberSlides)return setTimeout((function(){i.changeFirst_LastSlide()}),1.5*this.speed),!0}},{key:"pressedBtnPushSlider",value:function(){var i=this;this.clearnsSetIntervals(),this.blocking_unlockingBtnsSliders("none"),this.pushingSlider(),setTimeout((function(){i.blocking_unlockingBtnsSliders("auto"),i.freezeSliderMouseHover||i.createSetInterval_For_Slider()}),1.5*this.speed)}},{key:"movesFirstSlide_TheEnd",value:function(){var i=this.slides[0];i.remove(),this.sliderTrack.append(i),this.nullifiesCssSliderTrack()}},{key:"movesLastSlide_Start",value:function(){var i=this.slides[this.numberSlides-1];i.remove(),this.sliderTrack.prepend(i),this.nullifiesCssSliderTrack()}},{key:"changeFirst_LastSlide",value:function(){var i=this.slides[0],e=this.slides[this.slides.length-1],t=this.slides[1].cloneNode(!0);this.sliderTrack.prepend(t),this.sliderTrack.append(i),this.sliderTrack.append(t),e.remove(),this.nullifiesCssSliderTrack()}},{key:"addLastSlideStart",value:function(){var i=this.slides[this.slides.length-1].cloneNode(!0);this.sliderTrack.prepend(i),this.checkNumbersSlides()||this.slides[this.slides.length-1].remove()}},{key:"checkNumbersSlides",value:function(){if(2===this.numberSlides)return!0}},{key:"addCssSliderTrack",value:function(){this.sliderTrack.style.transition="transform 0.".concat(1.5*this.speed,"s")}},{key:"blocking_unlockingBtnsSliders",value:function(i){this.sliderBtnPushLast.style.pointerEvents="".concat(i),this.sliderBtnPushNext.style.pointerEvents="".concat(i)}},{key:"nullifiesCssSliderTrack",value:function(){this.sliderTrack.style.transition="none",this.sliderTrack.style.transform="translate3d(-".concat(this.slider.clientWidth,"px, 0px, 0px)")}},{key:"addSetInterval_For_Slider",value:function(){this.addEventScroll_BlurWindow(),this.countsPositionSlider_Window()}},{key:"addEventScroll_BlurWindow",value:function(){var i=this;this.isVisible=!1,window.addEventListener("scroll",(function(){i.countsPositionSlider_Window()}))}},{key:"countsPositionSlider_Window",value:function(){var i={top:window.pageYOffset+this.slider.getBoundingClientRect().top,bottom:window.pageXOffset+this.slider.getBoundingClientRect().bottom},e={top:window.pageYOffset,bottom:window.pageYOffset+document.documentElement.clientHeight};this.checks_If_SliderVisible(i,e)}},{key:"checks_If_SliderVisible",value:function(i,e){if(e.top-this.slider.clientHeight<=i.top&&i.top<e.bottom){if(this.isVisible)return;this.createSetInterval_For_Slider(),this.isVisible=!0}else this.clearnsSetIntervals(),this.isVisible=!1}},{key:"checks_If_UserOnSite",value:function(){var i=this;this.timerAdvance[0]&&document.addEventListener("visibilitychange",(function(){document.hidden?(i.clearnsSetIntervals(),i.isVisible=!1):i.countsPositionSlider_Window()}))}},{key:"addEventMouse_TouchMove_Slider",value:function(){var i=this;this.slider.addEventListener("mousemove",(function(){i.clearnsSetIntervals()})),this.slider.addEventListener("mouseout",(function(){i.createSetInterval_For_Slider()})),this.slider.addEventListener("touchstart",(function(){i.clearnsSetIntervals(),i.clearnsSetTimeouts()}),{passive:!0}),this.slider.addEventListener("touchend",(function(){i.timeout=setTimeout((function(){i.createSetInterval_For_Slider()}),300),i.timeouts.push(i.timeout)}),{passive:!0})}},{key:"createSetInterval_For_Slider",value:function(){var i=this;this.timeInterval=setInterval((function(){i.sliderTrack.style.transform="translate3d(-".concat(2*i.widthSlide,"px, 0px, 0px)"),i.addCssSliderTrack(),i.blocking_unlockingBtnsSliders("none"),i.movesSlider_If_OnlyTwoSlides()||setTimeout((function(){i.movesFirstSlide_TheEnd(),i.blocking_unlockingBtnsSliders("auto")}),1.5*i.speed)}),this.timerAdvance[1]),this.intervals.push(this.timeInterval)}},{key:"clearnsSetIntervals",value:function(){this.intervals.forEach((function(i){window.clearInterval(i)}))}},{key:"clearnsSetTimeouts",value:function(){this.timeouts.forEach((function(i){window.clearInterval(i)}))}},{key:"run",value:function(){this.addOptions(),this.addLastSlideStart(),this.addEventClick_BtnsSliderPush(),this.sliderTrack.style.transform="translate3d(-".concat(this.slider.clientWidth,"px, 0px, 0px)")}}])&&l(e.prototype,t),s&&l(e,s),i}();function d(i,e){for(var t=0;t<e.length;t++){var s=e[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(i,s.key,s)}}var c=function(){function i(e,t){!function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),this.slider=e,this.options=t,this.sliderTrack=this.slider.querySelector(".slider-track"),this.maximumSwipingAtSlider=0,this.positionSliderTrack=0,this.numberSecondsAfterStartingSlider=0,this.isVisible=!1,this.isHideSlider_For_FirstTime=!1,this.isSwiping=!0,this.options&&this.addOptions()}var e,t,s;return e=i,(t=[{key:"addOptions",value:function(){this.duration=this.options.duration?this.options.duration:10,this.temporaryFunction=this.options.temporaryFunction?this.options.temporaryFunction:"linear",this.delay=this.options.delay?this.options.delay:0,this.delayBeforeStartingAfterHiding=this.options.delayBeforeStartingAfterHiding?this.options.delayBeforeStartingAfterHiding:1.5,this.repeatSlider=!!this.options.repeatSlider&&this.options.repeatSlider}},{key:"getSpeedSliderTrack",value:function(){this.speedSliderTrack=this.maximumSwipingAtSlider/this.duration}},{key:"measuresMaximumSwipeOfSlider",value:function(){var i=this;this.maximumSwipingAtSlider=0,this.sliderTrack.querySelectorAll(".slide").forEach((function(e){i.maximumSwipingAtSlider+=e.offsetWidth})),this.maximumSwipingAtSlider-=this.slider.querySelector(".slider-list").offsetWidth,this.positionSliderTrack=this.maximumSwipingAtSlider}},{key:"countsTimeSinceStartOfSlider",value:function(){this.numberSecondsAfterStartingSlider=this.isHideSlider_For_FirstTime?(this.time_2-this.time_1)/1e3-this.delayBeforeStartingAfterHiding:(this.time_2-this.time_1)/1e3-this.delay,this.numberSecondsAfterStartingSlider=this.numberSecondsAfterStartingSlider.toFixed(2),this.duration-=this.numberSecondsAfterStartingSlider,this.resetTimers()}},{key:"calculateDistanceAfterStartingSlider",value:function(){this.positionSliderTrack=this.isHideSlider_For_FirstTime?this.positionSliderTrack+this.numberSecondsAfterStartingSlider*this.speedSliderTrack:this.numberSecondsAfterStartingSlider*this.speedSliderTrack,this.positionSliderTrack=Math.round(this.positionSliderTrack)}},{key:"resetTimers",value:function(){this.time_2=0,this.time_1=0}},{key:"deleteStyleSlider",value:function(){this.sliderTrack.removeAttribute("style")}},{key:"addEventScrollWindow",value:function(){var i=this;window.addEventListener("scroll",(function(){i.countsPositionSlider_Window()}))}},{key:"countsPositionSlider_Window",value:function(){var i={top:window.pageYOffset+this.slider.getBoundingClientRect().top,bottom:window.pageXOffset+this.slider.getBoundingClientRect().bottom},e={top:window.pageYOffset,bottom:window.pageYOffset+document.documentElement.clientHeight};this.checks_If_SliderVisible(i,e)}},{key:"checks_If_SliderVisible",value:function(i,e){var t=this;this.isSwiping&&(e.top-this.slider.clientHeight<=i.top&&i.top<e.bottom?(this.isVisible||(this.time_1=performance.now(),this.unblockingSlider(),this.isHideSlider_For_FirstTime||this.sliderTrack.addEventListener("transitionend",(function(){t.prohibitsMovingSliderAfter_TheEndTransition()}))),this.isVisible=!0):(this.isVisible&&(this.time_2=performance.now(),this.blockingSlider(),this.isHideSlider_For_FirstTime=!0),this.isVisible=!1))}},{key:"blockingSlider",value:function(){this.repeatSlider?this.repeatSlider&&this.blockingSlider_For_EndLess():this.blockingSlider_For_OneEnd()}},{key:"blockingSlider_For_OneEnd",value:function(){if(this.deleteStyleSlider(),window.clearTimeout(this.setTimeoutStartSlider),!this.isHideSlider_For_FirstTime&&(this.time_2-this.time_1)/1e3<=this.delay||this.isHideSlider_For_FirstTime&&(this.time_2-this.time_1)/1e3<=this.delayBeforeStartingAfterHiding)return this.positionSliderTrack=1200===this.positionSliderTrack?0:this.positionSliderTrack,void this.resetTimers();this.countsTimeSinceStartOfSlider(),this.calculateDistanceAfterStartingSlider()}},{key:"blockingSlider_For_EndLess",value:function(){}},{key:"unblockingSlider",value:function(){this.repeatSlider?this.repeatSlider&&this.unblockingSlider_For_EndLess():this.unblockingSlider_For_OneEnd()}},{key:"unblockingSlider_For_OneEnd",value:function(){var i=this;this.isHideSlider_For_FirstTime||this.setsTransition_For_SliderOneEnd(),1600===this.positionSliderTrack&&this.isHideSlider_For_FirstTime&&(this.positionSliderTrack=0),this.sliderTrack.style.transform="translate3d(-".concat(this.positionSliderTrack,"px, 0px, 0px)"),this.isHideSlider_For_FirstTime&&(this.setTimeoutStartSlider=setTimeout((function(){i.setsTransition_For_SliderOneEnd(),i.sliderTrack.style.transform="translate3d(-".concat(i.maximumSwipingAtSlider,"px, 0px, 0px)")}),1e3*this.delayBeforeStartingAfterHiding))}},{key:"unblockingSlider_For_EndLess",value:function(){this.setsTransition_For_SliderEndLess()}},{key:"prohibitsMovingSliderAfter_TheEndTransition",value:function(){this.isSwiping=!1,this.resetTimers()}},{key:"setsTransition_For_SliderOneEnd",value:function(){this.isHideSlider_For_FirstTime?this.isHideSlider_For_FirstTime&&(this.sliderTrack.style.transition="transform ".concat(this.duration,"s ").concat(this.temporaryFunction)):this.sliderTrack.style.transition="transform ".concat(this.duration,"s ").concat(this.temporaryFunction," ").concat(this.delay,"s")}},{key:"setsTransition_For_SliderEndLess",value:function(){var i=this;this.slides=this.sliderTrack.children;var e=this.duration/(this.sliderTrack.querySelectorAll(".slide").length-1);this.sliderTrack.style.transition="transform ".concat(e,"s ").concat(this.temporaryFunction," ").concat(this.delay,"s"),this.sliderTrack.style.transform="translate3d(-".concat(this.slider.clientWidth,"px, 0px, 0px)"),this.sliderTrack.addEventListener("transitionend",(function(){i.transitionEndAtSlider(e)}))}},{key:"checks_If_UserOnSite",value:function(){var i=this;document.addEventListener("visibilitychange",(function(){i.isVisible&&i.isSwiping&&(document.hidden?(i.time_2=performance.now(),i.blockingSlider()):i.unblockingSlider())}))}},{key:"transitionEndAtSlider",value:function(i){var e=this;this.movesFirstSlide_TheEnd(),this.nullifiesCssSliderTrack(),setTimeout((function(){e.setsStyle_For_SliderEndLess(i)}),0)}},{key:"movesFirstSlide_TheEnd",value:function(){var i=this.slides[0];i.remove(),this.sliderTrack.append(i)}},{key:"calculatesTransitTimeOneSlide",value:function(){return this.duration/(this.sliderTrack.querySelectorAll(".slide").length-1)}},{key:"setsInteval_For_EndLessSlider",value:function(i){var e=this;setInterval((function(){e.movesFirstSlide_TheEnd(),e.nullifiesCssSliderTrack()}),i)}},{key:"nullifiesCssSliderTrack",value:function(){this.sliderTrack.style.transition="none",this.sliderTrack.style.transform="translate3d(0px, 0px, 0px)"}},{key:"setsStyle_For_SliderEndLess",value:function(i){this.sliderTrack.style.transition="transform ".concat(i,"s ").concat(this.temporaryFunction),this.sliderTrack.style.transform="translate3d(-".concat(this.slider.clientWidth,"px, 0px, 0px)")}},{key:"run",value:function(){this.measuresMaximumSwipeOfSlider(),this.getSpeedSliderTrack(),this.countsPositionSlider_Window(),this.addEventScrollWindow(),this.checks_If_UserOnSite()}}])&&d(e.prototype,t),s&&d(e,s),i}();function u(i,e){for(var t=0;t<e.length;t++){var s=e[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(i,s.key,s)}}var h=function(){function i(e){var t=this;!function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),this.popupContainer=e,this.btnOpenPopup=this.popupContainer.querySelector(".popup-disposable-btn-open"),this.deletePopup=function(){if(!event.target.closest(".pop-up")&&!event.target.classList.contains("popup-disposable-btn-open")){var i=document.querySelector(".popup-disposable");i.classList.remove("popup-disposable-active"),i.classList.add("popup-disposable-delete-popup"),document.removeEventListener("click",t.deletePopup),setTimeout((function(){i.classList.remove("popup-disposable-delete-popup"),t.hides_showVerticalScrolling()}),300)}}}var e,t,s;return e=i,(t=[{key:"hides_showVerticalScrolling",value:function(){var i=document.querySelector("body"),e=window.innerWidth-this.popupContainer.querySelector(".popup-disposable__container-content").clientWidth;i.style.cssText="\n\t\t\t\tpadding-right: ".concat(e,e?"px;\n\t\t\t\toverflow: hidden;\n\t\t\t":"px;\n\t\t\t\toverflow: auto;\n\t\t\t")}},{key:"addEventClickBtnOpenPopup",value:function(){var i=this;this.btnOpenPopup.addEventListener("click",(function(){i.openPopup()}))}},{key:"openPopup",value:function(){this.popupContainer.classList.add("popup-disposable-active"),this.hides_showVerticalScrolling(),this.addEventClickDocument()}},{key:"addEventClickDocument",value:function(){document.addEventListener("click",this.deletePopup)}},{key:"run",value:function(){this.addEventClickBtnOpenPopup()}}])&&u(e.prototype,t),s&&u(e,s),i}();function p(i){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(i){return typeof i}:function(i){return i&&"function"==typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i})(i)}function S(i,e){for(var t=0;t<e.length;t++){var s=e[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(i,s.key,s)}}var v=function(){function i(e,t,s){var n=this;!function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),this.popupContainer=e,this.popupBlockContainer=this.popupContainer.querySelector(".popup-multiple__container"),this.popupContainerContent=this.popupContainer.querySelector(".popup-multiple__container-content"),this.templatePopup=t,this.options=s,this.options&&this.addOptions(),this.deletePopup=function(){if(!event.target.closest(".popup")){var i=document.querySelector(".popup-multiple");i.classList.remove("popup-multiple-active"),i.classList.add("popup-multiple-delete-popup"),document.removeEventListener("click",n.deletePopup),setTimeout((function(){document.querySelector(".popup").remove(),i.classList.remove("popup-multiple-delete-popup"),n.hides_showVerticalScrolling()}),300)}}}var e,t,s;return e=i,(t=[{key:"addOptions",value:function(){this.numberOfPopup=this.options.numberOfPopup?this.options.numberOfPopup:2}},{key:"addEventClick_BtnsOpenPopup",value:function(){var i=this;this.popupContainer.querySelectorAll(".popup-multiple-btn-open").forEach((function(e){e.addEventListener("click",(function(){i.pressedBtnOpenPopup()}))}))}},{key:"pressedBtnOpenPopup",value:function(){var i=this,e=event.currentTarget.dataset.popupNumber,t=this.options.popups[e],s=this.createPopup(this.data=t);this.insertsNewPopup_In_Container(s),this.hides_showVerticalScrolling(),setTimeout((function(){i.addEventClickDocument()}),0)}},{key:"addEventClickDocument",value:function(){document.addEventListener("click",this.deletePopup)}},{key:"hides_showVerticalScrolling",value:function(){var i=document.querySelector("body"),e=window.innerWidth-this.popupBlockContainer.clientWidth;i.style.cssText="\n\t\t\t\tpadding-right: ".concat(e,e?"px;\n\t\t\t\toverflow: hidden;\n\t\t\t":"px;\n\t\t\t\toverflow: auto;\n\t\t\t")}},{key:"createPopup",value:function(i){var e=this.templatePopup;for(var t in i)if("object"!==p(i[t]))e=e.replace("{{ ".concat(t," }}"),i[t]);else for(var s in i[t])e=e.replace("{{ ".concat(t,".").concat(s," }}"),i[t][s]);return e}},{key:"insertsNewPopup_In_Container",value:function(i){this.popupContainerContent.insertAdjacentHTML("beforeend",i),this.popupContainer.classList.add("popup-multiple-active")}},{key:"run",value:function(){this.addEventClick_BtnsOpenPopup()}}])&&S(e.prototype,t),s&&S(e,s),i}(),f=document.querySelector(".slider-without-fight");f&&new n(f,{scrollAfterAbruptStop:!0}).run();var m=document.querySelector(".slider-with-fight");m&&new o(m,{percentageForSuccessfulScrolling:35,infinity:!1}).run();var k=document.querySelector(".slider-endless");k&&new a(k,{speed:400,timerAdvance:[!0,2500],freezeSliderMouseHover:!1}).run();var g=document.querySelector(".slider-self-scrolling");g&&new c(g,{duration:10,temporaryFunction:"linear",delay:2,delayBeforeStartingAfterHiding:2,repeatSlider:!1}).run();var y=document.querySelector(".popup-multiple");if(y){new v(y,'\n        <div class="popup">\n            <h4 class="popup-title">{{ title }}</h4>\n            <div class="popup-back-img">\n                <img src="{{ img.srcImg }}" alt="{{ img.altImg }}" class="popup-img">\n            </div>\n            <div class="popup-text">\n                <p>{{ text }}</p>\n            </div>\n        </div>\n    ',{numberOfPopup:3,popups:{one:{title:"Popup 1",text:"Popup text at number 1",img:{srcImg:"../../doc/popupExample-1.png",altImg:"popup 1"}},two:{title:"Popup 2",text:"Popup text at number 2",img:{srcImg:"../doc/popupExample-2.png",altImg:"popup 2"}},three:{title:"Popup 3",text:"Popup text at number 3",img:{srcImg:"../doc/popupExample-3.png",altImg:"popup 3"}}}}).run()}var T=document.querySelector(".popup-disposable");T&&new h(T).run()}]);