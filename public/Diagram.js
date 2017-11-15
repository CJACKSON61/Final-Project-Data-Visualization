(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



// stage content:
(lib.Untitled1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 54
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6600").s().p("EAAPAkMIgZgNQgXgNgUgTQg5g7AAhTQAAhTA5g6QAUgTAXgOQALgHAOgFQAigOAnAAQBTAAA7A7QA6A6AABTQAABTg6A7Qg7A6hTAAQgnAAgigNgA91D9IgagNQgXgNgTgUQg6g6AAhUQAAhRA6g7QATgTAXgNQAMgIAOgFQAjgNAnAAQBTAAA6A6QA7A7AABRQAABUg7A6Qg6A7hTAAQgnAAgjgNgAbiD8IgagNQgXgNgTgTQg6g7AAhTQAAhSA6g6QATgTAXgOQAMgHAOgFQAjgOAnAAQBTAAA6A7QA7A6AABSQAABTg7A7Qg6A6hTAAQgnAAgjgNgAAL+VIgZgNQgWgNgUgUQg6g6AAhUQAAhSA6g7QAUgTAWgNQANgIAMgFQAigNAoAAQBTAAA6A6QA7A7AABSQAABUg7A6Qg6A7hTAAQgoAAgigNg");
	this.shape.setTransform(389,397.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgAVAloQgUgIgTgLQgggUgdgdQhXhXAAh9QAAh8BXhXQAdgdAggUQATgLAUgHQAygVA6AAQB8AABWBYQBWBXAAB8QAAB9hWBXQhWBYh8AAQg6AAgygUgAAOeZQgNAFgMAIQgWANgUATQg6A7AABSQAABUA6A6QAUAUAWANIAZANQAjANAnAAQBTAAA6g7QA7g6AAhUQAAhSg7g7Qg6g6hTAAQgnAAgjANgAa7FZQgTgIgUgLQgggTgdgeQhXhXAAh8QAAh7BXhYQAdgcAggUQAUgMATgHQAzgUA6AAQB8AABWBXQBWBYAAB7QAAB8hWBXQhWBYh8AAQg6AAgzgUgAbih2QgOAFgMAIQgXANgTATQg6A7AABRQAABUA6A6QATAUAXANIAaANQAiANAoAAQBTAAA6g7QA7g6AAhUQAAhRg7g7Qg6g6hTAAQgoAAgiANgA+UFZQgUgIgTgLQghgTgdgeQhWhXAAh8QAAh7BWhYQAdgcAhgUQATgMAUgHQAygUA7AAQB7AABWBXQBXBYAAB7QAAB8hXBXQhWBYh7AAQg7AAgygUgA91h1QgOAFgMAHQgXAOgTATQg6A6AABSQAABTA6A7QATATAXANIAaANQAiANAoAAQBTAAA6g6QA7g7AAhTQAAhSg7g6Qg6g7hTAAQgoAAgiAOgAgY84QgUgIgTgLQghgUgdgdQhWhXAAh9QAAh8BWhXQAdgdAhgUQATgLAUgHQAxgVA7AAQB7AABWBYQBXBXAAB8QAAB9hXBXQhWBYh7AAQg7AAgxgUgEAALgkIQgNAFgMAHQgXAOgTATQg6A6AABTQAABTA6A7QATATAXANIAZANQAiANAoAAQBTAAA6g6QA7g7AAhTQAAhTg7g6Qg6g7hTAAQgoAAgiAOg");
	this.shape_1.setTransform(389,397.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 8
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066CC").s().p("AgIAKIAAgTIARgIIAAAKIgIAFIAAAEIAIAGIAAAKg");
	this.shape_2.setTransform(465.9,441.7,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 9
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066CC").s().p("AgIALIAAgUIARgIIAAAKIgIAHIAAACIAIAHIAAAKg");
	this.shape_3.setTransform(468.7,389.1,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 10
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066CC").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAHgGAHQgGAGgIAAQgHAAgGgGg");
	this.shape_4.setTransform(429.8,357.2,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 11
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066CC").s().p("AgNAOQgGgGAAgIQAAgHAGgHQAGgFAHAAQAJAAAFAFQAGAHAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_5.setTransform(429.8,456.2,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer 12
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066CC").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_6.setTransform(410.6,351.3,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer 37
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066CC").s().p("AAqLXIAAg8IhXAAIAAA5ImSAAIAAg5Ig+AAIAAA5ImNAAIAAhFQgngRgWgkQgYgkAAgrIAAxRQAAg9ApgpQApgqA7AAIZsAAQA7AAApAqQApApAAA9IAADOIA5AAIAAFaIg5AAIAACRIA5AAIAAGYIg9AAQAAA8gpAqQgpAqg8AAIoGAAIAAA8gABjKdIBzAAIAAjrIhzAAgAmGKbIEhAAIAAjpIkhAAgApvJgIAAA5IA5AAIAAg5IB3AAIAAjoIGSAAIAADoIBXAAIAAjoIDlAAIAADoIIIAAQAjAAAYgaQAagaAAgiIlzAAIAAmXIF2AAIAAiRIk+AAIAAlaIE+AAIAAjOQAAgmgagYQgZgYgiAAI5sAAQglAAgYAZQgYAaAAAjIAARQQAAAkAaAZQAYAZAjAAIAAA5IA5AAIAAg5IA5AAIAAA5IA4AAIAAg5gAIxHSIF2AAIAAkmIl2AAgAJqhYIE9AAIAAjnIk9AAg");
	this.shape_7.setTransform(391.1,409.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer 13
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066CC").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_8.setTransform(410.6,362.8,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Layer 14
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066CC").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_9.setTransform(399.3,351.3,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Layer 15
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0066CC").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_10.setTransform(399.3,362.8,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer 16
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0066CC").s().p("AhBBBIAAhiIAhgfIBiAAIAACBgAgtgZIAABGIBaAAIAAhaIhFAAg");
	this.shape_11.setTransform(388.4,398,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// Layer 17
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0066CC").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_12.setTransform(372.3,467.7,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	// Layer 18
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0066CC").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_13.setTransform(376.6,362.8,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer 19
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0066CC").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_14.setTransform(365.3,351.3,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	// Layer 20
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0066CC").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_15.setTransform(365.3,362.8,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

	// Layer 21
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0066CC").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_16.setTransform(353.9,351.3,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));

	// Layer 22
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066CC").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_17.setTransform(353.9,362.8,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(1));

	// Layer 23
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0066CC").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_18.setTransform(342.5,351.3,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(1));

	// Layer 24
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0066CC").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_19.setTransform(342.5,362.8,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(1));

	// Layer 25
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0066CC").s().p("AgoApIAAhQIBQAAIAABQgAgUAUIAoAAIAAgnIgoAAIAAAng");
	this.shape_20.setTransform(337.9,428.7,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));

	// Layer 26
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0066CC").s().p("AgTAyIAAgSIATAAIAAgUIgTAAIAAgVIATAAIAAgUIgTAAIAAgUIAnAAIAABjg");
	this.shape_21.setTransform(332.1,393.7,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(1));

	// Layer 27
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0066CC").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_22.setTransform(331.1,362.8,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(1));

	// Layer 28
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0066CC").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_23.setTransform(331.1,351.3,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1));

	// Layer 29
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0066CC").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_24.setTransform(376.6,351.3,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1));

	// Layer 30
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0066CC").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_25.setTransform(387.9,362.8,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1));

	// Layer 31
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0066CC").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_26.setTransform(387.9,351.3,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(1));

	// Layer 32
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0066CC").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAHgGAHQgGAGgIAAQgHAAgGgGg");
	this.shape_27.setTransform(312,357.2,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(1));

	// Layer 33
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0066CC").s().p("AgOAOQgFgGAAgIQAAgHAFgHQAHgFAHAAQAJAAAFAFQAGAHAAAHQAAAIgGAGQgFAGgJAAQgHAAgHgGg");
	this.shape_28.setTransform(312,456.2,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1));

	// Layer 34
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0066CC").s().p("AgTBIIAAiOIAnAAIAAAUIgUAAIAAATIAUAAIAAAUIgUAAIAAAVIAUAAIAAAUIgUAAIAAAVIAUAAIAAAVg");
	this.shape_29.setTransform(311.7,419.8,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1));

	// Layer 35
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0066CC").s().p("AgTAPIAAgdIAnAAIAAAdg");
	this.shape_30.setTransform(311.7,383.5,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(1));

	// Layer 36
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0066CC").s().p("AgJAAQAAgDADgDQADgDADAAQAKAAAAAJQAAAKgKAAQgJAAAAgKg");
	this.shape_31.setTransform(337.9,428.8,2.835,2.867);

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(1));

	// Layer 38
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0066CC").s().p("AlTDoIAAnPIKnAAIAAHPg");
	this.shape_32.setTransform(259.4,404.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(1));

	// Layer 40
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAjAAIhFAA");
	this.shape_33.setTransform(424.9,332.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(1));

	// Layer 41
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0066CC").s().p("AjkKYIAA0vIHJAAIAAUvg");
	this.shape_34.setTransform(397.3,271.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(1));

	// Layer 42
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0066CC").s().p("AlTDoIAAnPIKnAAIAAHPg");
	this.shape_35.setTransform(517.6,404.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1));

	// Layer 43
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0066CC").s().p("AgnAKQAAgIAGgFQAFgGAJAAIAnAAQAIAAAGAGQAGAFAAAIg");
	this.shape_36.setTransform(416.5,30.2,3.433,3.47);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0066CC").s().p("AgnAKQAAgIAFgFQAHgGAIAAIAnAAQAJAAAFAGQAGAFAAAIg");
	this.shape_37.setTransform(378.8,30.2,3.433,3.47);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0066CC").s().p("Ah8APQAAgMAIgIQAJgJANAAIC9AAQAMAAAJAJQAJAIAAAMg");
	this.shape_38.setTransform(397.7,42.3,3.433,3.47);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0066CC").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_39.setTransform(397.6,70.3,3.433,3.47);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0066CC").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_40.setTransform(418.2,70.3,3.433,3.47);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0066CC").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_41.setTransform(377,70.3,3.433,3.47);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0066CC").s().p("AhKA8IAAh3ICVAAIAAB3gAg2gTIBtAAIAAgUIhtAAg");
	this.shape_42.setTransform(397.7,99.6,3.433,3.47);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0066CC").s().p("AhnBzQgJAAgGgGQgGgGAAgIIAAjRID5AAIAADRQAAAIgGAGQgGAGgJAAgAhoBXQAAAIAJAAIC/AAQAJAAAAgIIAAi1IjRAAg");
	this.shape_43.setTransform(397.7,94.4,3.433,3.47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]}).wait(1));

	// Layer 44
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0066CC").s().p("AA5AaQgSgagVgBQgFAAgCABQgCABgFAHQgOAYgZgBQgQgCgLgJQgHgGgIgMIgEgEQgEgFABgGQABgHAFgDQAFgEAGABQAGABAEAFIAFAGIAJAMQAEACAGABQAFAAACgBQACgBAFgHQAPgYAYABQAhADAdAkQADAGgBAGQgBAGgFADQgDADgGAAQgHAAgFgGg");
	this.shape_44.setTransform(453.9,706.4,2.019,2.041);

	this.timeline.addTween(cjs.Tween.get(this.shape_44).wait(1));

	// Layer 45
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0066CC").s().p("Ag8AZQgHgGgKgLIgEgGQgEgDABgGQAAgHAFgEQAEgDAGAAQAHAAAEAFIAFAGIAKAKQAEAEAGAAQAFgBACgCIAGgIQAOgaAYAAQAiABAeAiQAEAFAAAHQgBAGgFAEQgFAEgGgBQgGAAgEgFQgVgZgUABQgFAAgCACQgCAAgEAHQgGAMgGAFQgKAKgQAAQgPAAgMgJg");
	this.shape_45.setTransform(454,686.3,2.019,2.041);

	this.timeline.addTween(cjs.Tween.get(this.shape_45).wait(1));

	// Layer 46
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0066CC").s().p("Ag/BAQgagbgBglQABgkAagbQAbgaAkAAQAlAAAbAaQAbAbgBAkQABAlgbAbQgbAaglAAQgkAAgbgagAgqgqQgRASgBAYQABAZARASQASARAYAAQAZAAASgRQARgSABgZQgBgYgRgSQgSgRgZAAQgYAAgSARg");
	this.shape_46.setTransform(361.7,699.6,2.019,2.041);

	this.timeline.addTween(cjs.Tween.get(this.shape_46).wait(1));

	// Layer 47
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0066CC").s().p("AhjETQgSAAgPgMQgOgNgDgRIgnjYQgegVgRgiQgSgiAAgnQAAhDAvgwQAwgwBDAAIEuAiQASACANAOQAMAOAAASIAACAQAAASgMAPQgMAPgRADQhRASiFAcIAADFQAAASgNANQgOAOgSAAgAh4DjQABAHAHAGQAGAFAHAAIA1AAQAGAAAEgFQAFgEAAgGIAAi/QgyALgKAAQghAAgegNgAi5jNQgmAnAAA3QAAA2AmAnQAnAmA3AAQAQgBDMgsIAAjCQjEgXgYgCQg3AAgnAngACfgfIAwgLQAHgBAFgHQAFgHAAgHIAAiAQAAgGgFgGQgFgFgGgBIgxgGg");
	this.shape_47.setTransform(382.1,722.6,2.019,2.041);

	this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(1));

	// Layer 48
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0066CC").s().p("ADmDwQgZAAgRgRQgSgSAAgZIAAgUIlTAAIAAAUQAAAYgSATQgSARgYAAIg8AAQgYAAgTgRQgRgSAAgZIAAgUIgeAAQgYAAgTgRQgRgSAAgZIAAkXQAAgZARgRQATgSAYAAIL3AAQAZAAARASQASARAAAZIAAEXQAAAYgSATQgRARgZAAIgeAAIAAAUQAAAYgSATQgRARgZAAgADSC0QAAAIAFAHQAGAFAJAAIA8AAQAIAAAGgFQAGgHAAgIIAAgUIhkAAgAk1C0QAAAIAFAHQAHAFAIAAIA8AAQAJAAAFgFQAGgHAAgIIAAgUIhkAAgAmKjBQgFAFAAAJIAAEXQAAAIAFAHQAHAFAIAAIL3AAQAIAAAGgFQAGgHAAgIIAAkXQAAgIgGgGQgGgGgIAAIr3AAQgIAAgHAGgADwBQQgIAAgHgGQgFgFAAgJIAAjHQAAgIAFgGQAHgFAIgBIBmAAQAIABAEAFQAGAGAAAIIAADHQgBAJgFAFQgGAGgIAAgAEEAoIA8AAIAAifIg8AAgABGBQQgIAAgHgGQgFgFAAgJIAAjHQAAgIAFgGQAHgFAIgBIBlAAQAJABAFAFQAFAGAAAIIAADHQgBAJgFAFQgFAGgJAAgABaAoIA8AAIAAifIg8AAgAipBQQgJAAgFgGQgGgFAAgJIAAjHQAAgIAFgGQAFgFAIgBIBmAAQAIABAGAFQAGAGAAAIIAADHQAAAJgGAFQgGAGgIAAgAiVAoIA8AAIAAifIg8AAgAlTBQQgJAAgFgGQgGgFAAgJIAAjHQAAgIAFgGQAFgFAIgBIBmAAQAJABAFAFQAGAGAAAIIAADHQAAAJgGAFQgFAGgJAAgAk/AoIA8AAIAAifIg8AAgAgOAjQgFgHAAgIQAAgIAFgGQAHgGAHAAQAIAAAGAGQAGAGAAAIQAAAIgGAHQgGAFgIAAQgHAAgHgFgAgOhUQgFgHAAgIQAAgJAFgFQAHgGAHAAQAIAAAGAGQAGAGAAAIQAAAIgGAHQgGAFgIAAQgHAAgHgFg");
	this.shape_48.setTransform(705.1,408,1.48,1.495);

	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(1));

	// Layer 49
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0066CC").s().p("AkCH+QgOAAgFgMQgFgLALgLIA7g/QAGgIAIgFQALgGAIAAIB5AAIAAgrIoFAAQgRAAgMgMQgMgMAAgRIAAsKQAAgRAMgMQAMgMARAAIR/AAQARAAAMAMQAMAMAAARIAAMKQAAARgMAMQgMAMgRAAIoFAAIAAAqIB5AAQASAAAQATIA7A/QAKAMgFALQgFAMgOAAgAm2E7QgEAEAAAEQAAAGAEAEQAEAEAFAAQAFAAADgEQAEgEAAgGQAAgEgEgEQgDgEgFAAQgFAAgEAEgAnaE7QgFAEAAAEQAAAGAFAEQADAEAFAAQAFAAAEgEQAEgEAAgGQAAgFgEgDQgEgEgFAAQgFAAgDAEgAn/E7QgDAEAAAEQAAAGADAEQADAEAFAAQAGAAAEgEQADgEAAgGQAAgFgDgDQgEgEgGAAQgEAAgEAEgAgEE9IAAANQAAABAAAAQAAAAAAAAQAAABAAAAQABAAAAAAIAHAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBIAAgNQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIgHAAgAHLFAIgCADQAAAGAFAAIA4AAQAFAAAAgGQAAgFgFAAIg4AAIgDACgAGBFAIgBADQAAAGAFAAIA3AAQAFAAAAgGIgCgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAIg3AAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBABgAE3FAIgBADQAAAGAFAAIA3AAQAGAAAAgGQAAgFgGAAIg3AAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBABgAoQEqIQhAAIAArSIwhAAg");
	this.shape_49.setTransform(81.9,399.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_49).wait(1));

	// Layer 50
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0066CC").s().p("AjKFUQgngYgjgkQhzh0AAikQAAijBzh0QByh0CiAAQCjAABzB0QByB0AACjQAACkhyB0QgjAkgoAYQhaA4hxAAQhwAAhag4g");
	this.shape_50.setTransform(397.3,609.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_50).wait(1));

	// Layer 51
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0066CC").s().p("AkVEYQhyh0AAikQAAikByh0QBzhzCiAAQCjAAByBzQBzB0AACkQAACkhzB0QhyB0ijAAQiiAAhzh0g");
	this.shape_51.setTransform(206.5,404.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_51).wait(1));

	// Layer 52
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(1,1,1).p("AIimwQgvhVAAhpQAAhpAvhVAohDjQAbgxApgqQAwgwA4gcQBPgoBfAAQBOAABCAaAg3MTQhCAahOAAQijAAhzh0Qgpgqgbgx");
	this.shape_52.setTransform(388.5,141.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0066CC").s().p("AiPFyQgbgKgZgPQgsgbglgmQhzh0AAikQAAijBzh0QAlgmAsgbIAVgLQAPgIAQgGQBCgaBNAAQBgAABPAoQA3AcAwAwQByB0AACjQAACkhyB0QhzB0ijAAQhNAAhCgagAhskOQgUAHgTALQghAUgcAdQhXBXAAB7QAAB9BXBXQAcAdAhAUQATALAUAIQAzAUA5AAQB8AABVhYQBXhXAAh9QAAh7hXhXQhVhYh8AAQg5AAgzAVg");
	this.shape_53.setTransform(397.3,183.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52}]}).wait(1));

	// Layer 53
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0066CC").s().p("AkUEYQhzh0AAikQAAikBzh0QByhzCiAAQCjAABzBzQBKBMAaBgIAAiMIABADIAACDQANAxAAA4QAAA2gNAyIAAiBIgBAEIAACLQgaBghKBLQhzB0ijAAQiiAAhyh0g");
	this.shape_54.setTransform(572,404.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_54).wait(1));

	// Layer 39
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0066CC").s().p("AjlIXIAAwtIHKAAIAAQtg");
	this.shape_55.setTransform(398.5,527.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_55).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(420.2,426.7,750,751.9);
// library properties:
lib.properties = {
	width: 800,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;