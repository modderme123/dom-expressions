import { template as _$template } from "r-dom";
import { memo as _$memo } from "r-dom";
import { For as _$For } from "r-dom";
import { createComponent as _$createComponent } from "r-dom";
import { assignProps as _$assignProps } from "r-dom";
import { dynamicProperty as _$dynamicProperty } from "r-dom";
import { getNextElement as _$getNextElement } from "r-dom";
import { insert as _$insert } from "r-dom";

const _tmpl$ = _$template(`<div>Hello <!--#--><!--/--></div>`, 4),
  _tmpl$2 = _$template(`<div></div>`, 2),
  _tmpl$3 = _$template(`<div>From Parent</div>`, 2),
  _tmpl$4 = _$template(`<div><!--#--><!--/--><!--#--><!--/--><!--#--><!--/--></div>`, 8),
  _tmpl$5 = _$template(
    `<div><!--#--><!--/--> | <!--#--><!--/--> | <!--#--><!--/--> | <!--#--><!--/--> | <!--#--><!--/--> | <!--#--><!--/--></div>`,
    14
  ),
  _tmpl$6 = _$template(
    `<div><!--#--><!--/--> | <!--#--><!--/--><!--#--><!--/--> | <!--#--><!--/--><!--#--><!--/--> | <!--#--><!--/--></div>`,
    14
  ),
  _tmpl$7 = _$template(`<div> | <!--#--><!--/--> |  |  | <!--#--><!--/--> | </div>`, 6);

const Child = props => [
  (() => {
    const _el$ = _$getNextElement(_tmpl$, true),
      _el$2 = _el$.firstChild,
      _el$3 = _el$2.nextSibling,
      _el$4 = _el$3.nextSibling;

    const _ref$ = props.ref;
    typeof _ref$ === "function" ? _ref$(_el$) : (props.ref = _el$);

    _$insert(_el$, () => props.name, _el$4);

    return _el$;
  })(),
  (() => {
    const _el$5 = _$getNextElement(_tmpl$2, true);

    _$insert(_el$5, () => props.children);

    return _el$5;
  })()
];

const template = props => {
  let childRef;
  const { content } = props;
  return (() => {
    const _el$6 = _$getNextElement(_tmpl$4, true),
      _el$9 = _el$6.firstChild,
      _el$10 = _el$9.nextSibling,
      _el$11 = _el$10.nextSibling,
      _el$12 = _el$11.nextSibling,
      _el$13 = _el$12.nextSibling,
      _el$14 = _el$13.nextSibling;

    _$insert(
      _el$6,
      _$createComponent(
        Child,
        _$assignProps(
          {
            name: "John"
          },
          Object.keys(props).reduce(
            (m$, k$) => ((m$[k$] = () => props[k$]), _$dynamicProperty(m$, k$)),
            {}
          ),
          {
            ref(r$) {
              const _ref$2 = childRef;
              typeof _ref$2 === "function" ? _ref$2(r$) : (childRef = r$);
            },

            booleanProperty: true,

            get children() {
              return _$getNextElement(_tmpl$3, true);
            }
          }
        )
      ),
      _el$10
    );

    _$insert(
      _el$6,
      _$createComponent(Child, {
        name: "Jason",

        ref(r$) {
          const _ref$3 = props.ref;
          typeof _ref$3 === "function" ? _ref$3(r$) : (props.ref = r$);
        },

        get children() {
          const _el$8 = _$getNextElement(_tmpl$2, true);

          _$insert(_el$8, content);

          return _el$8;
        }
      }),
      _el$12
    );

    _$insert(
      _el$6,
      _$createComponent(Context.Consumer, {
        children: context => context
      }),
      _el$14
    );

    return _el$6;
  })();
};

const template2 = _$createComponent(Child, {
  name: "Jake",

  get dynamic() {
    return state.data;
  },

  stale: state.data,
  handleClick: clickHandler,

  get ["hyphen-ated"]() {
    return state.data;
  },

  ref: el => (e = el)
});

const template3 = _$createComponent(Child, {
  get children() {
    return [
      _$getNextElement(_tmpl$2, true),
      _$getNextElement(_tmpl$2, true),
      _$getNextElement(_tmpl$2, true),
      "After"
    ];
  }
});

const template4 = _$createComponent(Child, {
  get children() {
    return _$getNextElement(_tmpl$2, true);
  }
});

const template5 = _$createComponent(Child, {
  get dynamic() {
    return state.dynamic;
  },

  get children() {
    return state.dynamic;
  }
}); // builtIns

const template6 = _$createComponent(_$For, {
  get each() {
    return state.list;
  },

  get fallback() {
    return _$createComponent(Loading, {});
  },

  children: item => item
});

const template7 = _$createComponent(Child, {
  get children() {
    return [_$getNextElement(_tmpl$2, true), _$memo(() => state.dynamic)];
  }
});

const template8 = _$createComponent(Child, {
  get children() {
    return [item => item, item => item];
  }
});

const template9 = _$createComponent(_garbage, {
  children: "Hi"
});

const template10 = (() => {
  const _el$20 = _$getNextElement(_tmpl$5, true),
    _el$26 = _el$20.firstChild,
    _el$27 = _el$26.nextSibling,
    _el$21 = _el$27.nextSibling,
    _el$28 = _el$21.nextSibling,
    _el$29 = _el$28.nextSibling,
    _el$22 = _el$29.nextSibling,
    _el$30 = _el$22.nextSibling,
    _el$31 = _el$30.nextSibling,
    _el$23 = _el$31.nextSibling,
    _el$32 = _el$23.nextSibling,
    _el$33 = _el$32.nextSibling,
    _el$24 = _el$33.nextSibling,
    _el$34 = _el$24.nextSibling,
    _el$35 = _el$34.nextSibling,
    _el$25 = _el$35.nextSibling,
    _el$36 = _el$25.nextSibling,
    _el$37 = _el$36.nextSibling;

  _$insert(
    _el$20,
    _$createComponent(Link, {
      children: "new"
    }),
    _el$27
  );

  _$insert(
    _el$20,
    _$createComponent(Link, {
      children: "comments"
    }),
    _el$29
  );

  _$insert(
    _el$20,
    _$createComponent(Link, {
      children: "show"
    }),
    _el$31
  );

  _$insert(
    _el$20,
    _$createComponent(Link, {
      children: "ask"
    }),
    _el$33
  );

  _$insert(
    _el$20,
    _$createComponent(Link, {
      children: "jobs"
    }),
    _el$35
  );

  _$insert(
    _el$20,
    _$createComponent(Link, {
      children: "submit"
    }),
    _el$37
  );

  return _el$20;
})();

const template11 = (() => {
  const _el$38 = _$getNextElement(_tmpl$6, true),
    _el$42 = _el$38.firstChild,
    _el$43 = _el$42.nextSibling,
    _el$39 = _el$43.nextSibling,
    _el$44 = _el$39.nextSibling,
    _el$45 = _el$44.nextSibling,
    _el$46 = _el$45.nextSibling,
    _el$47 = _el$46.nextSibling,
    _el$40 = _el$47.nextSibling,
    _el$48 = _el$40.nextSibling,
    _el$49 = _el$48.nextSibling,
    _el$50 = _el$49.nextSibling,
    _el$51 = _el$50.nextSibling,
    _el$41 = _el$51.nextSibling,
    _el$52 = _el$41.nextSibling,
    _el$53 = _el$52.nextSibling;

  _$insert(
    _el$38,
    _$createComponent(Link, {
      children: "new"
    }),
    _el$43
  );

  _$insert(
    _el$38,
    _$createComponent(Link, {
      children: "comments"
    }),
    _el$45
  );

  _$insert(
    _el$38,
    _$createComponent(Link, {
      children: "show"
    }),
    _el$47
  );

  _$insert(
    _el$38,
    _$createComponent(Link, {
      children: "ask"
    }),
    _el$49
  );

  _$insert(
    _el$38,
    _$createComponent(Link, {
      children: "jobs"
    }),
    _el$51
  );

  _$insert(
    _el$38,
    _$createComponent(Link, {
      children: "submit"
    }),
    _el$53
  );

  return _el$38;
})();

const template12 = (() => {
  const _el$54 = _$getNextElement(_tmpl$7, true),
    _el$55 = _el$54.firstChild,
    _el$60 = _el$55.nextSibling,
    _el$61 = _el$60.nextSibling,
    _el$56 = _el$61.nextSibling,
    _el$62 = _el$56.nextSibling,
    _el$63 = _el$62.nextSibling,
    _el$59 = _el$63.nextSibling;

  _$insert(
    _el$54,
    _$createComponent(Link, {
      children: "comments"
    }),
    _el$61
  );

  _$insert(
    _el$54,
    _$createComponent(Link, {
      children: "show"
    }),
    _el$63
  );

  return _el$54;
})();

class Template13 {
  render() {
    const _self$ = this;

    _$createComponent(Component, {
      get prop() {
        return _self$.something;
      },

      get children() {
        return _$createComponent(Nested, {
          get prop() {
            return _self$.data;
          },

          get children() {
            return _self$.content;
          }
        });
      }
    });
  }
}
