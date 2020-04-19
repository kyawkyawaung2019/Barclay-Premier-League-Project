
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

function VIDEOS(){
	var VIDEOS = document.getElementById("VIDEOS");
	var fun = function(){
		alert("VIDEOS page မွ ၾကိဳဆိုပါသည္...\nသာယာေပ်ာ္ရႊင္ဖြယ္ အခ်ိန္ေလးျဖစ္ပါေစ...");
	};
	EventUtil.addHandler(VIDEOS, "click", fun);
}

function LOGOUT(){
	var LOGOUT = document.getElementById("LOGOUT");
	var fun = function(){
		var result = confirm("Are you sure?");
		if(result)
		{
			alert("Bye! \nBarclay Premier League Page မွ နွဳတ္ဆက္ပါသည္။\nသာယာေပ်ာ္ရႊင္ဖြယ္ အခ်ိန္ေလးေတြကို ပိုင္ဆိုင္နိဳင္ပါေစ..");
			location = "../login.html";
		}
	};
	EventUtil.addHandler(LOGOUT, "click", fun);
}




function T1(){
	var team = document.getElementById("T1");
	var fun = function(){
		alert("Manchester United FC အသင္းမွ ၾကိဳဆိုပါသည္။\nသာယာေပ်ာ္ရႊင္ဖြယ္ အခ်ိန္ေလးျဖစ္ပါေစ......");
		};
	EventUtil.addHandler(team, "click", fun);
}
function T2(){
	var team = document.getElementById("T2");
	var fun = function(){
		alert("Arsenal FC Page မွ ၾကိဳဆိုပါသည္။"+
			"\nသာယာေပ်ာ္ရႊင္ဖြယ္ အခ်ိန္ေလးျဖစ္ပါေစ....");
		};
	EventUtil.addHandler(team, "click", fun);
}
function T3(){
	var team = document.getElementById("T3");
	var fun = function(){
		alert("Burnley FC Page မွ ၾကိဳဆိုပါသည္။"+
			"\nသာယာေပ်ာ္ရႊင္ဖြယ္ အခ်ိန္ေလးျဖစ္ပါေစ....");
		};
	EventUtil.addHandler(team, "click", fun);
}
function T4(){
	var team = document.getElementById("T4");
	var fun = function(){
		alert("Chelsea FC Page မွ ၾကိဳဆိုပါသည္။"+
			"\nသာယာေပ်ာ္ရႊင္ဖြယ္ အခ်ိန္ေလးျဖစ္ပါေစ....");
		};
	EventUtil.addHandler(team, "click", fun);
}
function T5(){
	var team = document.getElementById("T5");
	var fun = function(){
		alert("Crystal Palace FC Page မွ ၾကိဳဆိုပါသည္။"+
			"\nသာယာေပ်ာ္ရႊင္ဖြယ္ အခ်ိန္ေလးျဖစ္ပါေစ....");
		};
	EventUtil.addHandler(team, "click", fun);
}
function T6(){
	var team = document.getElementById("T6");
	var fun = function(){
		alert("Everton FC Page မွ ၾကိဳဆိုပါသည္။"+
			"\nသာယာေပ်ာ္ရႊင္ဖြယ္ အခ်ိန္ေလးျဖစ္ပါေစ....")
		};
	EventUtil.addHandler(team, "click", fun);
}
function T7(){
	var team = document.getElementById("T7");
	var fun = function(){
		alert("Hull City FC Page မွ ၾကိဳဆိုပါသည္။"+
			"\nသာယာေပ်ာ္ရႊင္ဖြယ္ အခ်ိန္ေလးျဖစ္ပါေစ....");
		};
	EventUtil.addHandler(team, "click", fun);
}
function T8(){
	var team = document.getElementById("T8");
	var fun = function(){
		alert("Leicester City FC Page မွ ၾကိဳဆိုပါသည္။"+
			"\nသာယာေပ်ာ္ရႊင္ဖြယ္ အခ်ိန္ေလးျဖစ္ပါေစ....");
		};
	EventUtil.addHandler(team, "click", fun);
}
function T9(){
	var team = document.getElementById("T9");
	var fun = function(){
		alert("Liverpool FC Page မွ ၾကိဳဆိုပါသည္။"+
			"\nသာယာေပ်ာ္ရႊင္ဖြယ္ အခ်ိန္ေလးျဖစ္ပါေစ....");
		};
	EventUtil.addHandler(team, "click", fun);
}
function T10(){
	var team = document.getElementById("T10");
	var fun = function(){
		alert("Manchester City FC Page မွ ၾကိဳဆိုပါသည္။"+
			"\nသာယာေပ်ာ္ရႊင္ဖြယ္ အခ်ိန္ေလးျဖစ္ပါေစ....");
		};
	EventUtil.addHandler(team, "click", fun);
}
function T11(){
	var team = document.getElementById("T11");
	var fun = function(){
		alert("AFC Bournemouth FC Page မွ ၾကိဳဆိုပါသည္။"+
			"\nသာယာေပ်ာ္ရႊင္ဖြယ္ အခ်ိန္ေလးျဖစ္ပါေစ....");
		};
	EventUtil.addHandler(team, "click", fun);
}
function T12(){
	var team = document.getElementById("T12");
	var fun = function(){
		alert("Middlesbrugh FC Page မွ ၾကိဳဆိုပါသည္။"+
			"\nသာယာေပ်ာ္ရႊင္ဖြယ္ အခ်ိန္ေလးျဖစ္ပါေစ....");
		};
	EventUtil.addHandler(team, "click", fun);
}
function T13(){
	var team = document.getElementById("T13");
	var fun = function(){
		alert("Southampton FC Page မွ ၾကိဳဆိုပါသည္။"+
			"\nသာယာေပ်ာ္ရႊင္ဖြယ္ အခ်ိန္ေလးျဖစ္ပါေစ....");
		};
	EventUtil.addHandler(team, "click", fun);
}
function T14(){
	var team = document.getElementById("T14");
	var fun = function(){
		alert("Stoke City FC Page မွ ၾကိဳဆိုပါသည္။"+
			"\nသာယာေပ်ာ္ရႊင္ဖြယ္ အခ်ိန္ေလးျဖစ္ပါေစ....");
		};
	EventUtil.addHandler(team, "click", fun);
}
function T15(){
	var team = document.getElementById("T15");
	var fun = function(){
		alert("Sunderland FC Page မွ ၾကိဳဆိုပါသည္။"+
			"\nသာယာေပ်ာ္ရႊင္ဖြယ္ အခ်ိန္ေလးျဖစ္ပါေစ....");
		};
	EventUtil.addHandler(team, "click", fun);
}
function T16(){
	var team = document.getElementById("T16");
	var fun = function(){
		alert("Swansea City FC Page မွ ၾကိဳဆိုပါသည္။"+
			"\nသာယာေပ်ာ္ရႊင္ဖြယ္ အခ်ိန္ေလးျဖစ္ပါေစ....");
		};
	EventUtil.addHandler(team, "click", fun);
}
function T17(){
	var team = document.getElementById("T17");
	var fun = function(){
		alert("Tottenham Hotspar FC Page မွ ၾကိဳဆိုပါသည္။"+
			"\nသာယာေပ်ာ္ရႊင္ဖြယ္ အခ်ိန္ေလးျဖစ္ပါေစ....");
		};
	EventUtil.addHandler(team, "click", fun);
}
function T18(){
	var team = document.getElementById("T18");
	var fun = function(){
		alert("Waltford FC Page မွ ၾကိဳဆိုပါသည္။"+
			"\nသာယာေပ်ာ္ရႊင္ဖြယ္ အခ်ိန္ေလးျဖစ္ပါေစ....");
		};
	EventUtil.addHandler(team, "click", fun);
}
function T19(){
	var team = document.getElementById("T19");
	var fun = function(){
		alert("West Bromwich Albion FC Page မွ ၾကိဳဆိုပါသည္။"+
			"\nသာယာေပ်ာ္ရႊင္ဖြယ္ အခ်ိန္ေလးျဖစ္ပါေစ....");
		};
	EventUtil.addHandler(team, "click", fun);
}
function T20(){
	var team = document.getElementById("T20");
	var fun = function(){
		alert("West Ham United FC Page မွ ၾကိဳဆိုပါသည္။"+
			"\nသာယာေပ်ာ္ရႊင္ဖြယ္ အခ်ိန္ေလးျဖစ္ပါေစ....");
		};
	EventUtil.addHandler(team, "click", fun);
}
			
