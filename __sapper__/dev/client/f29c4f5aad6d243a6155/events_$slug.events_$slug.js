(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events_$slug"],{

/***/ "./src/routes/events/[slug].svelte":
/*!*****************************************!*\
  !*** ./src/routes/events/[slug].svelte ***!
  \*****************************************/
/*! exports provided: default, preload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preload", function() { return preload; });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* src/routes/events/[slug].svelte generated by Svelte v3.21.0 */


const { console: console_1 } = svelte_internal__WEBPACK_IMPORTED_MODULE_0__["globals"];
const file = "src/routes/events/[slug].svelte";

function create_fragment(ctx) {
	let h1;
	let t;

	const block = {
		c: function create() {
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Event Name");
			this.h();
		},
		l: function claim(nodes) {
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "H1", {});
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, "Event Name");
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 30, 0, 702);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, h1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h1, t);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(h1);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function preload(page, session) {
	// the `slug` parameter is available because this file
	// is called [slug].svelte
	const { slug } = page.params;

	// `this.fetch` is a wrapper around `fetch` that allows
	// you to make credentialled requests on both
	// server and client
	const res = await this.fetch(`blog/${slug}.json`);

	const article = await res.json();
	return { article };
}

function instance($$self, $$props, $$invalidate) {
	let { event } = $$props;
	const writable_props = ["event"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<U5Bslugu5D> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("U5Bslugu5D", $$slots, []);

	$$self.$set = $$props => {
		if ("event" in $$props) $$invalidate(0, event = $$props.event);
	};

	$$self.$capture_state = () => ({ preload, event });

	$$self.$inject_state = $$props => {
		if ("event" in $$props) $$invalidate(0, event = $$props.event);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*event*/ 1) {
			$: console.log(event);
		}
	};

	return [event];
}

class U5Bslugu5D extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { event: 0 });

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bslugu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*event*/ ctx[0] === undefined && !("event" in props)) {
			console_1.warn("<U5Bslugu5D> was created without expected prop 'event'");
		}
	}

	get event() {
		throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set event(value) {
		throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (U5Bslugu5D);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2V2ZW50cy9bc2x1Z10uc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBSXVCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTzs7O1NBR2xDLElBQUksS0FBSyxJQUFJLENBQUMsTUFBTTs7Ozs7T0FLdEIsR0FBRyxTQUFTLElBQUksQ0FBQyxLQUFLLFNBQVMsSUFBSTs7T0FDbkMsT0FBTyxTQUFTLEdBQUcsQ0FBQyxJQUFJO1VBRXJCLE9BQU87Ozs7T0FiSCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQUVoQixDQUFDLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBRSxLQUFLIiwiZmlsZSI6ImYyOWM0ZjVhYWQ2ZDI0M2E2MTU1L2V2ZW50c18kc2x1Zy5ldmVudHNfJHNsdWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tIHNyYy9yb3V0ZXMvYmxvZy9bc2x1Z10uc3ZlbHRlIC0tPlxuPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cdC8vIHRoZSAob3B0aW9uYWwpIHByZWxvYWQgZnVuY3Rpb24gdGFrZXMgYVxuXHQvLyBgeyBwYXRoLCBwYXJhbXMsIHF1ZXJ5IH1gIG9iamVjdCBhbmQgdHVybnMgaXQgaW50b1xuXHQvLyB0aGUgZGF0YSB3ZSBuZWVkIHRvIHJlbmRlciB0aGUgcGFnZVxuXHRleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZChwYWdlLCBzZXNzaW9uKSB7XG5cdFx0Ly8gdGhlIGBzbHVnYCBwYXJhbWV0ZXIgaXMgYXZhaWxhYmxlIGJlY2F1c2UgdGhpcyBmaWxlXG5cdFx0Ly8gaXMgY2FsbGVkIFtzbHVnXS5zdmVsdGVcblx0XHRjb25zdCB7IHNsdWcgfSA9IHBhZ2UucGFyYW1zO1xuXG5cdFx0Ly8gYHRoaXMuZmV0Y2hgIGlzIGEgd3JhcHBlciBhcm91bmQgYGZldGNoYCB0aGF0IGFsbG93c1xuXHRcdC8vIHlvdSB0byBtYWtlIGNyZWRlbnRpYWxsZWQgcmVxdWVzdHMgb24gYm90aFxuXHRcdC8vIHNlcnZlciBhbmQgY2xpZW50XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaChgYmxvZy8ke3NsdWd9Lmpzb25gKTtcblx0XHRjb25zdCBhcnRpY2xlID0gYXdhaXQgcmVzLmpzb24oKTtcblxuXHRcdHJldHVybiB7IGFydGljbGUgfTtcblx0fVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG5cdFxuICAgIGV4cG9ydCBsZXQgZXZlbnQ7XG5cbiAgICAkOiBjb25zb2xlLmxvZyggZXZlbnQgKVxuXG48L3NjcmlwdD5cblxuXG5cbjxoMT5cbiAgICBFdmVudCBOYW1lXG48L2gxPiJdLCJzb3VyY2VSb290IjoiIn0=