function HOME(){ 
	var HOME = document.getElementById("HOME");
	var fun = function(){
		alert("HOME page မွ ၾကိဳဆိုပါသည္...\nသာယာေပ်ာ္ရႊင္ဖြယ္ အခ်ိန္ေလးျဖစ္ပါေစ...");
	};
 	EventUtil.addHandler(HOME, "click",  fun);
}

function ABOUT(){
	var ABOUT = document.getElementById("ABOUT");
	var fun = function(){
		alert("ABOUT page မွ ၾကိဳဆိုပါသည္...\nသာယာေပ်ာ္ရႊင္ဖြယ္ အခ်ိန္ေလးျဖစ္ပါေစ...");
	};
	EventUtil.addHandler(ABOUT, "click", fun);
}

function PHOTOS(){
	var PHOTOS = document.getElementById("PHOTOS");
	var fun = function(){
		alert("PHOTOS page မွ ၾကိဳဆိုပါသည္...\nသာယာေပ်ာ္ရႊင္ဖြယ္ အခ်ိန္ေလးျဖစ္ပါေစ...");
	};
	EventUtil.addHandler(PHOTOS, "click", fun);
}

function LOGOUT(){
	var LOGOUT = document.getElementById("LOGOUT");
	var fun = function(){
		alert("Bye! \nBarclay Premier League Page မွ နွဳတ္ဆက္ပါသည္။\nသာယာေပ်ာ္ရႊင္ဖြယ္ အခ်ိန္ေလးေတြကို ပိုင္ဆိုင္နိဳင္ပါေစ..");
	};
	EventUtil.addHandler(LOGOUT, "click", fun);
}

