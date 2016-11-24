var TFCheckboxMethods = function(){

	//display property handler
	this.displayHide = function(){
		this.outerComp.style.display = "none";
	};
	this.displayShow = function(){
		this.outerComp.style.display = "";
	};
	this.displayLabelHide = function(){
		this.labelComp.style.display = "none";
	};
	this.displayLabelShow = function(){
		this.labelComp.style.display = "";
	};
	this.displayInnerHide = function(){
		this.innerComp.style.display = "none";
	};
	this.displayInnerShow = function(){
		this.innerComp.style.display = "";
	};

	// vsisible property handler
	this.visibleHide = function(){
		this.outerComp.style.visibility = "hidden";
	};
	this.visibleShow = function(){
		this.outerComp.style.visibility = "";
	};
	this.visibleLabelHide = function(){
		this.labelComp.style.visibility = "hidden";
	};
	this.visibleLabelShow = function(){
		this.labelComp.style.visibility = "";
	};
	this.visibleInnerHide = function(){
		this.innerComp.style.visibility = "hidden";
	};
	this.visibleInnerShow = function(){
		this.innerComp.style.visibility = "";
	};

	// add remove style
	this.addStyle = function(prop , val){
		this.outerComp.style[prop] = val;
	};
	this.removeStyle = function(prop){
		this.outerComp.style[prop] = '';
	};
	this.addLabelStyle = function(prop , val){
		this.labelComp.style[prop] = val;
	};
	this.removeLabelStyle = function(prop){
		this.labelComp.style[prop] = '';
	};
	this.addInnerStyle = function(prop , val){
		this.innerComp.style[prop] = val;
	};
	this.removeInnerStyle = function(prop){
		this.innerComp.style[prop] = '';
	};

	// change label name 
	this.changeLabelText = function(newLabelText){
		this.labelComp.innerHTML = newLabelText;
	};

	// add remove class
	this.addClass = function(newClass){
		newClass = newClass.constructor === Array ? newClass : [newClass];
		this.outerComp.classList.add.apply(this.outerComp.classList , newClass); 
	};
	this.removeClass = function(oldClass){
		oldClass = oldClass.constructor === Array ? oldClass : [oldClass];
		this.outerComp.classList.remove.apply(this.outerComp.classList , oldClass);
	};
	this.addLabelClass = function(newClass){
		newClass = newClass.constructor === Array ? newClass : [newClass];
		this.labelComp.classList.add.apply(this.labelComp.classList , newClass); 
	};
	this.removeLabelClass = function(oldClass){
		oldClass = oldClass.constructor === Array ? oldClass : [oldClass];
		this.labelComp.classList.remove.apply(this.labelComp.classList , oldClass);
	};
	this.addInnerClass = function(newClass){
		newClass = newClass.constructor === Array ? newClass : [newClass];
		this.innerComp.classList.add.apply(this.innerComp.classList , newClass); 	
	};
	this.removeInnerClass = function(oldClass){
		oldClass = oldClass.constructor === Array ? oldClass : [oldClass];
		this.innerComp.classList.remove.apply(this.innerComp.classList , oldClass);
	};

	// append dom handlers
	this.appendDom = function(el){
		this.outerComp.appendChild(el);
	};
	this.prependDom = function(el){
		this.outerComp.insertBefore(el , this.outerComp.childNodes[0]);
	};
	this.insertDomAt = function(el , index){
		this.outerComp.insertBefore(el , this.outerComp.childNodes[index]);
	};
	this.appendDomToLabel = function(el){
		this.labelComp.appendChild(el);
	};
	this.prependDomToLabel = function(el){
		this.labelComp.insertBefore(el , this.labelComp.childNodes[0]);
	};
	this.insertDomToLabelAt = function(el , index){
		this.labelComp.insertBefore(el , this.labelComp.childNodes[index]);
	};
	this.appendDomToInner = function(el){
		this.innerComp.appendChild(el);
	};
	this.prependDomToInner = function(el){
		this.innerComp.insertBefore(el , this.innerComp.childNodes[0]);
	};
	this.insertDomToInnerAt = function(el , index){
		this.innerComp.insertBefore(el , this.innerComp.childNodes[index]);
	};

	// add remove attribute
	this.setAttribute = function( attrName , attrVal){
		this.innerComp.setAttribute(attrName , attrVal);
	};
	this.removeAttribute = function(attrName){
		this.innerComp.removeAttribute(attrName);
	};
};