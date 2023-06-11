(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{296:function(_,v,t){"use strict";t.r(v);var a=t(12),r=Object(a.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"uml类图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#uml类图"}},[_._v("#")]),_._v(" UML类图")]),_._v(" "),v("blockquote",[v("ol",[v("li",[v("a",{attrs:{href:"https://www.zhihu.com/question/419312525",target:"_blank",rel:"noopener noreferrer"}},[_._v("详细说明UML类图是什么"),v("OutboundLink")],1)]),_._v(" "),v("li",[v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/109655171",target:"_blank",rel:"noopener noreferrer"}},[_._v("30min学会UML类图"),v("OutboundLink")],1)])])]),_._v(" "),v("h2",{attrs:{id:"_1、类的表示法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、类的表示法"}},[_._v("#")]),_._v(" 1、类的表示法")]),_._v(" "),v("h3",{attrs:{id:"_1、具体类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、具体类"}},[_._v("#")]),_._v(" 1、具体类")]),_._v(" "),v("p",[_._v("矩型框表示具体类")]),_._v(" "),v("ul",[v("li",[_._v("第一层：类名字")]),_._v(" "),v("li",[_._v("第二层：属性名")]),_._v(" "),v("li",[_._v("第三层：类方法")])]),_._v(" "),v("p",[_._v("成员属性和方法的访问修饰符：")]),_._v(" "),v("ul",[v("li",[_._v("“+”表示 "),v("code",[_._v("public")])]),_._v(" "),v("li",[_._v("“-”表示 "),v("code",[_._v("private")])]),_._v(" "),v("li",[_._v("“#”表示 "),v("code",[_._v("protected")])]),_._v(" "),v("li",[_._v("不带符号表示 "),v("code",[_._v("default")])])]),_._v(" "),v("h3",{attrs:{id:"_2、抽象类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、抽象类"}},[_._v("#")]),_._v(" 2、抽象类")]),_._v(" "),v("p",[_._v("类名和抽象方法用斜体")]),_._v(" "),v("h3",{attrs:{id:"_3、接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、接口"}},[_._v("#")]),_._v(" 3、接口")]),_._v(" "),v("ul",[v("li",[_._v("类名："),v("code",[_._v("<<interface>>")]),_._v(" + 类名")]),_._v(" "),v("li",[_._v("第二层：方法")])]),_._v(" "),v("h2",{attrs:{id:"_2、类的关系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、类的关系"}},[_._v("#")]),_._v(" 2、类的关系")]),_._v(" "),v("p",[_._v("6种类型：实现、泛化、关联、依赖、聚合、组合关系")]),_._v(" "),v("ul",[v("li",[_._v("接口与类：实现关系。 --▶️")]),_._v(" "),v("li",[_._v("对象和对象\n"),v("ul",[v("li",[_._v("泛化关系：is a。-▶️")]),_._v(" "),v("li",[_._v("关联关系\n"),v("ul",[v("li",[_._v("聚合关系：has a    菱型（空） + 实线")]),_._v(" "),v("li",[_._v("组合关系：contains a 菱型（实） + 实线")]),_._v(" "),v("li",[_._v("依赖关系：use a 虚线 + 箭头")])])])])])]),_._v(" "),v("h3",{attrs:{id:"_1、实现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、实现"}},[_._v("#")]),_._v(" 1、实现")]),_._v(" "),v("p",[_._v("接口及其实现类之间的关系（implement），用空心三角和虚线组成的箭头来表示，从实现类指向接口")]),_._v(" "),v("h3",{attrs:{id:"_2、泛化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、泛化"}},[_._v("#")]),_._v(" 2、泛化")]),_._v(" "),v("p",[_._v("对象与对象之间的继承关系（extends），泛化关系用空心三角和实线组成的箭头表示，从子类指向父类")]),_._v(" "),v("h3",{attrs:{id:"_3、关联关系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、关联关系"}},[_._v("#")]),_._v(" 3、关联关系")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("对象和对象之间的连接，一个对象含有另一个对象的引用，关联关系有单向关联和双向关联")])]),_._v(" "),v("li",[v("p",[_._v("双向关联关系用带双箭头的实线或者无箭头的实线双线表示，单向关联用一个带箭头的实线表示，箭头指向被关联的对象，关联关系又分为依赖关联、聚合关联和组合关联三种类型")])]),_._v(" "),v("li",[v("p",[_._v("一个对象可以持有其它对象的数组或者集合。在UML中，通过放置多重性（multipicity）表达式在关联线的末端来表示。多重性表达式可以是一个数字、一段范围或者是它们的组合。多重性允许的表达式示例如下：")]),_._v(" "),v("ul",[v("li",[_._v("数字：精确的数量")]),_._v(" "),v("li",[v("code",[_._v("*")]),_._v("或者"),v("code",[_._v("0..*")]),_._v("：表示0到多个")]),_._v(" "),v("li",[v("code",[_._v("0..1")]),_._v("：表示0或者1个，在Java中经常用一个空引用来实现")]),_._v(" "),v("li",[v("code",[_._v("1..*")]),_._v("：表示1到多个")])])])]),_._v(" "),v("h3",{attrs:{id:"_4、依赖关系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4、依赖关系"}},[_._v("#")]),_._v(" 4、依赖关系")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("弱关联关系，如果对象A用到对象B，但是和B的关系不是太明显，如果对象A依赖于对象B，则 A “use a” B。比如驾驶员和汽车的关系，驾驶员使用汽车，二者之间就是依赖关系。")])]),_._v(" "),v("li",[v("p",[_._v("依赖关系用一个带虚线的箭头表示，由使用方指向被使用方，表示使用方对象持有被使用方对象的引用")])]),_._v(" "),v("li",[v("p",[_._v("依赖关系在Java中的具体代码表现形式为"),v("strong",[_._v("B为A的构造器")]),_._v("或"),v("strong",[_._v("方法中的局部变量")]),_._v("、"),v("strong",[_._v("方法或构造器的参数")]),_._v("、"),v("strong",[_._v("方法的返回值")]),_._v("，或者"),v("strong",[_._v("A调用B的静态方法")])])])]),_._v(" "),v("h3",{attrs:{id:"_5、聚合关系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5、聚合关系"}},[_._v("#")]),_._v(" 5、聚合关系")]),_._v(" "),v("ul",[v("li",[_._v("弱关联，整体与部分的拥有关系，即 “has a” 的关系。此时整体与部分之间是可分离的，它们可以具有各自的生命周期，部分可以属于多个整体对象，也可以为多个整体对象共享，所以聚合关系也常称为共享关系")]),_._v(" "),v("li",[_._v("聚合关系用空心菱形加实线箭头表示，空心菱形在整体一方，箭头指向部分一方")])]),_._v(" "),v("h3",{attrs:{id:"_6、组合关系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6、组合关系"}},[_._v("#")]),_._v(" 6、组合关系")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("强关联，体现整体与部分间的包含关系，即 “contains a” 的关系。但此时整体与部分是不可分的，部分也不能给其它整体共享，作为整体的对象负责部分的对象的生命周期。")])]),_._v(" "),v("li",[v("p",[_._v("组合关系用实心菱形加实线箭头表示，实心菱形在整体一方，箭头指向部分一方")])]),_._v(" "),v("li",[v("p",[_._v("在Java代码形式上，聚合和组合关系中的部分对象是整体对象的一个成员变量。但是，在实际应用开发时，两个对象之间的关系到底是聚合还是组合，有时候很难区别")])])])])}),[],!1,null,null,null);v.default=r.exports}}]);