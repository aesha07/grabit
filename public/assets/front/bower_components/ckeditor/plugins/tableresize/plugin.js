﻿/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function(){function y(a){return CKEDITOR.env.ie?a.$.clientWidth:parseInt(a.getComputedStyle("width"),10)}function r(a,c){var b=a.getComputedStyle("border-"+c+"-width"),h={thin:"0px",medium:"1px",thick:"2px"};0>b.indexOf("px")&&(b=b in h&&"none"!=a.getComputedStyle("border-style")?h[b]:0);return parseInt(b,10)}function F(a){a=a.$.rows;for(var c=0,b,h,e,k=0,g=a.length;k<g;k++)e=a[k],b=e.cells.length,b>c&&(c=b,h=e);return h}function G(a){function c(a){a&&(a=new CKEDITOR.dom.element(a),e+=a.$.offsetHeight,
k||(k=a.getDocumentPosition()))}var b=[],h=-1,e=0,k=null,g="rtl"==a.getComputedStyle("direction"),f=F(a);c(a.$.tHead);c(a.$.tBodies[0]);c(a.$.tFoot);if(f)for(var d=0,n=f.cells.length;d<n;d++){var t=new CKEDITOR.dom.element(f.cells[d]),l=f.cells[d+1]&&new CKEDITOR.dom.element(f.cells[d+1]),h=h+(t.$.colSpan||1),m,u,p=t.getDocumentPosition().x;g?u=p+r(t,"left"):m=p+t.$.offsetWidth-r(t,"right");l?(p=l.getDocumentPosition().x,g?m=p+l.$.offsetWidth-r(l,"right"):u=p+r(l,"left")):(p=a.getDocumentPosition().x,
g?m=p:u=p+a.$.offsetWidth);t=Math.max(u-m,3);b.push({table:a,index:h,x:m,y:k.y,width:t,height:e,rtl:g})}return b}function z(a){(a.data||a).preventDefault()}function H(a){function c(){x=0;d.setOpacity(0);l&&b();var a=g.table;setTimeout(function(){a.removeCustomData("_cke_table_pillars")},0);f.removeListener("dragstart",z)}function b(){for(var E=g.rtl,b=E?p.length:u.length,e=0,d=0;d<b;d++){var h=u[d],c=p[d],f=g.table;CKEDITOR.tools.setTimeout(function(d,h,c,g,k,l){d&&d.setStyle("width",n(Math.max(h+
l,1)));c&&c.setStyle("width",n(Math.max(g-l,1)));k&&f.setStyle("width",n(k+l*(E?-1:1)));++e==b&&a.fire("saveSnapshot")},0,this,[h,h&&y(h),c,c&&y(c),(!h||!c)&&y(f)+r(f,"left")+r(f,"right"),l])}}function h(b){z(b);a.fire("saveSnapshot");b=g.index;for(var c=CKEDITOR.tools.buildTableMap(g.table),h=[],n=[],m=Number.MAX_VALUE,r=m,w=g.rtl,C=0,A=c.length;C<A;C++){var q=c[C],v=q[b+(w?1:0)],q=q[b+(w?0:1)],v=v&&new CKEDITOR.dom.element(v),q=q&&new CKEDITOR.dom.element(q);v&&q&&v.equals(q)||(v&&(m=Math.min(m,
y(v))),q&&(r=Math.min(r,y(q))),h.push(v),n.push(q))}u=h;p=n;B=g.x-m;D=g.x+r;d.setOpacity(.5);t=parseInt(d.getStyle("left"),10);l=0;x=1;d.on("mousemove",k);f.on("dragstart",z);f.on("mouseup",e,this)}function e(a){a.removeListener();c()}function k(a){m(a.data.getPageOffset().x)}var g,f,d,x,t,l,m,u,p,B,D;f=a.document;d=CKEDITOR.dom.element.createFromHtml('\x3cdiv data-cke-temp\x3d1 contenteditable\x3dfalse unselectable\x3don style\x3d"position:absolute;cursor:col-resize;filter:alpha(opacity\x3d0);opacity:0;padding:0;background-color:#004;background-products:none;border:0px none;z-index:10"\x3e\x3c/div\x3e',
f);a.on("destroy",function(){d.remove()});w||f.getDocumentElement().append(d);this.attachTo=function(a){x||(w&&(f.getBody().append(d),l=0),g=a,d.setStyles({width:n(a.width),height:n(a.height),left:n(a.x),top:n(a.y)}),w&&d.setOpacity(.25),d.on("mousedown",h,this),f.getBody().setStyle("cursor","col-resize"),d.show())};m=this.move=function(a){if(!g)return 0;if(!x&&(a<g.x||a>g.x+g.width))return g=null,x=l=0,f.removeListener("mouseup",e),d.removeListener("mousedown",h),d.removeListener("mousemove",k),
f.getBody().setStyle("cursor","auto"),w?d.remove():d.hide(),0;a-=Math.round(d.$.offsetWidth/2);if(x){if(a==B||a==D)return 1;a=Math.max(a,B);a=Math.min(a,D);l=a-t}d.setStyle("left",n(a));return 1}}function A(a){var c=a.data.getTarget();if("mouseout"==a.name){if(!c.is("table"))return;for(var b=new CKEDITOR.dom.element(a.data.$.relatedTarget||a.data.$.toElement);b&&b.$&&!b.equals(c)&&!b.is("body");)b=b.getParent();if(!b||b.equals(c))return}c.getAscendant("table",1).removeCustomData("_cke_table_pillars");
a.removeListener()}var n=CKEDITOR.tools.cssLength,w=CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks);CKEDITOR.plugins.add("tableresize",{requires:"tabletools",init:function(a){a.on("contentDom",function(){var c,b=a.editable();b.attachListener(b.isInline()?b:a.document,"mousemove",function(b){b=b.data;var e=b.getTarget();if(e.type==CKEDITOR.NODE_ELEMENT){var k=b.getPageOffset().x;if(c&&c.move(k))z(b);else if(e.is("table")||e.getAscendant({thead:1,tbody:1,tfoot:1},1))if(e=e.getAscendant("table",
1),a.editable().contains(e)){(b=e.getCustomData("_cke_table_pillars"))||(e.setCustomData("_cke_table_pillars",b=G(e)),e.on("mouseout",A),e.on("mousedown",A));a:{for(var e=0,g=b.length;e<g;e++){var f=b[e];if(k>=f.x&&k<=f.x+f.width){k=f;break a}}k=null}k&&(!c&&(c=new H(a)),c.attachTo(k))}}})})}})})();
