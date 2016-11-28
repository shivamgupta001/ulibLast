var TFValidations = function(){
	
	//keyboard event event.key List ( Not event.code - will be used in case to differentiate 'ShiftLeft' & 'shiftRight')
	var alphaKeyList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var numberKeyList = ['0','1','2','3','4','5','6','7','8','9'];
	var generalKeyList = ['Tab','CapsLock','Shift','Enter','Backspace','Alt','Control'];
	var cursorControlKeyList = ['ScrollLock', 'Delete', 'Insert','Home','End','PageUp','PageDown','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'];
	var functionKeyList = ['F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12'];
	var charKeyList = [',' , '.', ';' , '[' , ']' , '{', '}' , '|', '\\', '\'','"', '`','~','!', '@', '$', '%' , '^' , '&', '(' ,')' ,'_']; 
	var mathKeyList = ['+','-','*','/', '='];


	
	// allows validation on key lists
	function isKeyAllowed(key , lists){
		var status = false;
		for(var i=0 ; i < lists.length ;i++){
			if(lists[i].indexOf(key) > -1){
				status = true;
				break;
			}
		}
		return status;
	}

	// required validation
	this.isRequired = function(e){
		
		var control = this.controlComp;
		var inputControl = this.innerComp;
		if(e.type === 'blur'){
			if(e.target.value === ''){
				control.classList.add('tooltip', 'tf-err-border--red');
				control.setAttribute('data-tooltip', this.validations.isRequired.errmsg);	
				inputControl.setAttribute('title',this.validations.isRequired.errmsg);	

			}else{
				if(control.classList.contains('tooltip')){
					control.classList.remove('tooltip', 'tf-err-border--red');
					control.removeAttribute('data-tooltip');
					inputControl.setAttribute('title',this.validations.isRequired.errmsg);
				}
			}	
		}else if(e.type === 'input'){

			// second condition prevents regex tooltip is present
			if(e.target.value.length > 0 && (control.getAttribute('data-tooltip') === this.validations.isRequired.errmsg)){
				if(control.classList.contains('tooltip')){
					control.classList.remove('tooltip', 'tf-err-border--red');
					control.removeAttribute('data-tooltip');
					inputControl.setAttribute('title',this.validations.isRequired.errmsg);	
				}
			}else if(e.target.value === ''){
					// handles after setting value if value deleted and goes blank
					control.classList.add('tooltip', 'tf-err-border--red');
					control.setAttribute('data-tooltip', this.validations.isRequired.errmsg);	
					inputControl.setAttribute('title',this.validations.isRequired.errmsg);	
			}	
		}else if(e.type === "change"){
			
			var chkStatus = false;
			for(var i=0; i<inputControl.length ;i++){
				if(inputControl[i].checked){
					chkStatus = true;
					break;
				}
			}
			if(!chkStatus){
				control.classList.add('tooltip', 'tf-err-border--red');
				control.setAttribute('data-tooltip', this.validations.isRequired.errmsg);	
			}else{
				control.classList.remove('tooltip', 'tf-err-border--red');
				control.removeAttribute('data-tooltip');
			}
		}
		
	};

	// only number validation
	this.onlyNumber = function(e){
		
		if( isKeyAllowed(e.key ,[numberKeyList , generalKeyList, functionKeyList, cursorControlKeyList]) ){

		}else e.preventDefault(); 	
	};

	// only text validation
	this.onlyText = function(e){
		
		if(isKeyAllowed(e.key ,[alphaKeyList , generalKeyList, functionKeyList, cursorControlKeyList])){

		}else e.preventDefault();
	};

	// regEx validation
	this.regex = function(e){

		// add same validation code in webagent project [ yet to be done] 
		var control = this.controlComp;
		var inputControl = this.innerComp;
		if(this.validations.regex.value){

			var regex = new RegExp(this.validations.regex.pattern);
			if(e.type === 'blur' || e.type === 'input'){
				if(e.target.value.length > 0){
					if(!regex.test(e.target.value)){
						control.classList.add('tooltip', 'tf-err-border--red');
						control.setAttribute('data-tooltip', this.validations.regex.errmsg);	
						inputControl.setAttribute('title',this.validations.regex.errmsg);	

					}else{
						if(control.classList.contains('tooltip')){
							control.classList.remove('tooltip', 'tf-err-border--red');
							control.removeAttribute('data-tooltip');
							inputControl.setAttribute('title',this.validations.regex.errmsg);
						}
					}	
				}			
			}	
		}
		
	};

}