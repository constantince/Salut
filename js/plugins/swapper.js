var Swapper = function(x, q, f, h) {
	function r(b, a) {
		var c = a.parentNode;
		c.lastchild === a ? c.appendChild(b) : c.insertBefore(b, a.nextSibling)
	}

	function p(b) {
		//b.parentNode && $(b.parentNode).removeClass('_page_show');
	}

	function i(b, a) {
		b.style["-webkit-transform"] = a;
		b.style["-moz-transform"] = a;
		b.style["-ms-transform"] = a;
		b.style["-o-transform"] = a;
		b.style.transform = a
	}

	function m(b, a) {
		a ? (b.style["-webkit-transition"] = "-webkit-" + a, b.style["-moz-transition"] = "-moz-" + a, b.style["-ms-transition"] = "-ms-" + a, b.style["-o-transition"] = "-o-" + a,
			b.style.transition = a) : (b.style["-webkit-transition"] = "", b.style["-moz-transition"] = "", b.style["-ms-transition"] = "", b.style["-o-transition"] = "", b.style.transition = "")
	}

	function n(b, a) {
		var c;
		c = a ? b.style : q.defaultView.getComputedStyle(b, null);
		return {
			display: c.display,
			opacity: c.opacity,
			top: c.top,
			left: c.left,
			height: c.height,
			width: c.width,
			position: c.position
		}
	}

	function s(b) {
		var a;
		a: if (b) {
			try {
				a = b instanceof Node || b instanceof HTMLElement;
				break a
			} catch (c) {}
			a = "object" !== typeof b || "number" !== typeof b.nodeType ||
				"string" !== typeof b.nodeName ? !1 : !0
		} else a = !1;
		if (!a) throw TypeError("element must be a DOM node, got " + b);
	}

	function j(b, a, c, l) {
		function e() {
			t || (t = !0, a.removeEventListener("webkitTransitionEnd", e), a.removeEventListener("transitionend", e), a.removeEventListener("oTransitionEnd", e), a.removeEventListener("otransitionend", e), a.removeEventListener("MSTransitionEnd", e), a.removeEventListener("transitionend", e), p(b), m(b, ""), m(a, ""), setTimeout(function() {
				i(b, "");
				i(a, "");
				g[0].fade && (a.style.opacity = k.opacity);
				g[1].fade && (b.style.opacity = w.opacity);
				a.style.position = k.position;
				a.style.top = k.top;
				a.style.left = k.left;
				a.style.height = k.height;
				a.style.width = k.width;
				b._swapper = !1;
				a._swapper = !1;
				l()
			}, 0))
		}
		s(b);
		s(a);
		"function" === typeof c && (l = c, c = {});
		switch (typeof c) {
			case "string":
				c = {
					transition: c
				};
				break;
			case "undefined":
				c = {};
				break;
			case "object":
				break;
			default:
				throw TypeError("options must be an object if defined, got " + c);
		}
		switch (typeof c.transition) {
			case "string":
				if (!(c.transition in u) && "instant" !== c.transition) throw TypeError(c.transition +
					" is not a valid transition");
				break;
			case "undefined":
				break;
			default:
				throw TypeError("transition must be a string if defined, got " + c.transition);
		}
		switch (typeof c.duration) {
			case "number":
				if (0 > c.duration) throw TypeError("duration must be a non-negative integer, got " + c.duration);
				break;
			case "undefined":
				break;
			default:
				throw TypeError("duration must be a number if defined, got " + c.duration);
		}
		switch (typeof c.easing) {
			case "string":
				if (!(c.easing in v)) throw TypeError(c.easing + " is not a valid easing");
				break;
			case "undefined":
				break;
			default:
				throw TypeError("easing must be a string if defined, got " + c.easing);
		}
		var d = l;
		switch (typeof d) {
			case "undefined":
				d = function() {};
				break;
			case "function":
				break;
			default:
				throw TypeError("callback must be a function if defined, got " + d);
		}
		l = d;
		if (b._swapper) throw Error("elem1 is currently being swapped");
		if (a._swapper) throw Error("elem2 is currently being swapped");
		a: {
			for (d = b; d = d.parentNode;)
				if (d === q) {
					d = !0;
					break a
				}
			d = !1
		}
		if (!d) throw Error("elem1 must be in the DOM to be swapped");
		b._swapper = !0;
		a._swapper = !0;
		p(a);
		if ("instant" === c.transition) r(a, b), p(b), b._swapper = !1, a._swapper = !1, setTimeout(function() {
			l()
		}, 0);
		else {
			var g = u[c.transition || "fade"],
				f = v[c.easing || "ease-in-out"],
				h = c.duration || 300;
			r(a, b);
			var c = b.getBoundingClientRect(),
				d = n(b),
				j = n(a),
				w = n(b, !0),
				k = n(a, !0);
			"none" !== d.display && (a.style.position = "fixed", a.style.top = c.top + "px", a.style.left = c.left + "px");
			a.style.height = j.height || d.height;
			a.style.width = j.width || d.width;
			g[2] && b.parentNode.insertBefore(a, b);
			i(b, o);
			i(a, g[0].transform ||
				o);
			g[0].fade && (a.style.opacity = "0");
			g[1].fade && (b.style.opacity = "1");
			setTimeout(function() {
				var c = "transform " + h / 1E3 + "s " + f + ", opacity " + h / 1E3 + "s " + f;
				m(b, c);
				m(a, c);
				setTimeout(function() {
					i(b, g[1].transform || o);
					i(a, o);
					if (g[0].fade) a.style.opacity = "1";
					if (g[1].fade) b.style.opacity = "0";
					a.addEventListener("webkitTransitionEnd", e, false);
					a.addEventListener("transitionend", e, false);
					a.addEventListener("oTransitionEnd", e, false);
					a.addEventListener("otransitionend", e, false);
					a.addEventListener("MSTransitionEnd",
						e, false);
					a.addEventListener("transitionend", e, false);
					setTimeout(e, h + 300)
				}, 0)
			}, 0);
			var t = !1
		}
	}
	var o = "translate3d(0,0,0) scale(1)",
		u = {
			fade: [{
				fade: !0
			}, {
				fade: !0
			}],
			"fade-on": [{
				fade: !0
			}, {}],
			"fade-off": [{}, {
				fade: !0
			}, !0],
			"scale-in": [{
				transform: "scale(0.01)"
			}, {}],
			"scale-out": [{}, {
				transform: "scale(0.01)"
			}, !0],
			"rotate-left": [{
				transform: "rotateY(-180deg) perspective(360px)",
				fade: !0
			}, {
				transform: "rotateY( 180deg) perspective(360px)",
				fade: !0
			}],
			"rotate-right": [{
				transform: "rotateY( 180deg) perspective(360px)",
				fade: !0
			}, {
				transform: "rotateY(-180deg) perspective(360px)",
				fade: !0
			}],
			"cube-left": [{
				transform: "translate3d( 50%,0,0) rotateY(-90deg) perspective(360px)"
			}, {
				transform: "translate3d(-50%,0,0) rotateY( 90deg) perspective(360px)"
			}],
			"cube-right": [{
				transform: "translate3d(-50%,0,0) rotateY( 90deg) perspective(360px)"
			}, {
				transform: "translate3d( 50%,0,0) rotateY(-90deg) perspective(360px)"
			}],
			"swap-left": [{
				transform: "translate3d( 65%,0,0) rotateY( 90deg) perspective(360px)"
			}, {
				transform: "translate3d(-65%,0,0) rotateY(-90deg) perspective(360px)"
			}],
			"swap-right": [{
				transform: "translate3d(-65%,0,0) rotateY(-90deg) perspective(360px)"
			}, {
				transform: "translate3d( 65%,0,0) rotateY( 90deg) perspective(360px)"
			}],
			"explode-in": [{
				fade: !0,
				transform: "scale(1.25)"
			}, {}],
			"explode-out": [{}, {
				fade: !0,
				transform: "scale(1.25)"
			}, !0],
			"implode-in": [{}, {
				fade: !0,
				transform: "scale(0.60)"
			}, !0],
			"implode-out": [{
				fade: !0,
				transform: "scale(0.80)"
			}, {}],
			"slide-left": [{
				transform: "translate3d( 100%,0,0)"
			}, {
				transform: "translate3d(-100%,0,0)"
			}],
			"slide-right": [{
				transform: "translate3d(-100%,0,0)"
			}, {
				transform: "translate3d( 100%,0,0)"
			}],
			"slide-up": [{
				transform: "translate3d(0, 100%,0)"
			}, {
				transform: "translate3d(0,-100%,0)"
			}],
			"slide-down": [{
				transform: "translate3d(0,-100%,0)"
			}, {
				transform: "translate3d(0, 100%,0)"
			}],
			"slideon-left": [{
				transform: "translate3d(-100%,0,0)"
			}, {}],
			"slideoff-left": [{}, {
				transform: "translate3d(-100%,0,0)"
			}, !0],
			"slideon-right": [{
				transform: "translate3d(100%,0,0)"
			}, {}],
			"slideoff-right": [{}, {
				transform: "translate3d(100%,0,0)"
			}, !0],
			"slideon-up": [{
				transform: "translate3d(0,-100%,0)"
			}, {}],
			"slideoff-up": [{}, {
				transform: "translate3d(0,-100%,0)"
			}, !0],
			"slideon-down": [{
				transform: "translate3d(0,100%,0)"
			}, {}],
			"slideoff-down": [{}, {
				transform: "translate3d(0,100%,0)"
			}, !0]
		},
		v = {
			linear: "linear",
			ease: "ease",
			"ease-in": "ease-in",
			"ease-out": "ease-out",
			"ease-in-out": "ease-in-out",
			"step-start": "step-start",
			"step-end": "step-end"
		};
	f && f.extend(f.fn, {
		swapper: function(b, a, c) {
			b = f(b)[0];
			this.forEach(function(f) {
				j(f, b, a, c)
			});
			return this
		}
	});
	h && (h.fn.swapper = function(b, a, c) {
		b = h(b)[0];
		this.each(function() {
			j(this,
				b, a, c)
		});
		return this
	});
	return j
}(window, document, window.Zepto, window.jQuery);