
var hulk = { 
 	element: undefined,

 	select: function(selector) {

 		this.element = document.querySelectorAll(selector);

 		return this;
 	},

 	addClass: function(clsNames) {

 		for(var i = 0; i < this.element.length; i++) {
 			{
	 			this.element[i].className += " " + clsNames;
	 		}
 		
 		
 	},


 	append: function(tag) {

 		for(var i = 0; i < this.element.length; i++) {
 			this.element[i].appendChild(document.createElement(tag));
 		}

 	
 	},

 	attr: function() {

 		if(arguments.length == 1) {
 			for(var i = 0; i < this.element.length; i++) {
 				console.log(this.element[i].getAttribute(arguments[0]));
 			}
 		}
 		else {
 			for(var i = 0; i < this.element.length; i++) {
 				this.element[i].setAttribute(arguments[0], arguments[1]);
 			}
 		}

 	},

 	children: function() {
            
        return  this.element[0].childNodes;
 	},
   

 	css: function() {

 		if(arguments.length ==1) {
 			for(var i = 0; i < this.element.length; i++) {
 				 this.element[i].style.getPropertyValue(arguments[0]);
 		}
 		}

 		if(arguments.length == 2) {
 			for(var i = 0; i < this.element.length; i++) {
 			 this.element[i].style.setProperty(arguments[0],arguments[1]);
 			}
 		}
 	},

 	empty: function() {

 		for(var i = 0; i < this.element.length; i++) {
 			
 				this.element[i].innerHTML="";
 			}

 	},

 	find: function(selector) {
 		
 		var a = [];
        for(var i = 0;i< this.element.length;i++){
            var el = this.element[i].querySelectorAll(selector);
            for(var j = 0, j< el.length; j++){
                a.push(el[j]);
            }
        }
        return a;
    }
 	
 	hasClass: function(className) {

 		for(var i = 0; i < this.element.length; i++) {
 			if(!this.element[i].className.match(className)) {
 				return false;
 			}
 		}
 		return true;
 	},

 	html: function() {
 	
 		return this.element[0].innerHTML;

 	},

 	on: function(eventName, func) {

 		for(var i = 0; i < this.element.length; i++) {
 			this.element[i].addEventListener(eventName, func;
 		}

 		return this;
 	},

 	parent: function() {

 		return this.element[0].parentNode;

 	},

 	remove: function() {

 		for(var i = 0; i< this.element.length; i++){
            this.element[i].remove();
        }
    },

 	removeAttr: function(attrName) {

 		for(var i = 0; i < this.element.length; i++) {
 			this.element[i].removeAttribute(attrName);
 		}

 	
 	},

 	removeClass: function(clsNames) {
    
        var arr = clsNames.split(" ");
         for(var i = 0; i< this.element.length; i++){
			for(var j=0; j< arr.length; j++) 
			{
			this.element[i].className.replace(arr[j], '');
		    }
	    }
	},
		

 	toggleClass: function(clsNames) {
 		
 		var mas= clsNames.split(" ");
 		for(var i=0; i< this.element.length; i++)
 		{
 			 for( var j=0; j< mas.length; j++)
 		         if(this.element[i].className.match(mas[j]))
 		    {
 		   	this.element[i].className.replace(mas[j], '')
 		    }
 		     else
 		    {
 		   	 this.element[i].className += " " + mas[j];
 		    }

 		}
 	},

 	unbind: function(eventName, func) {

 		for(var i = 0; i < this.element.length; i++) {
 			this.elem[i].removeEventListener(eventName, func);
 		}

 		return this;
 	},

 	wrap: function(tagName) {

 		for(var i = 0; i < this.element.length;i++){
			var newEl = document.createElement(tagName);
			var parent = this.element[i].parentNode;
	
	        parent.appendChild(newEl);
			newEl.appendChild(obj.arr[i]);
						
		}
	 }
 	 
};
