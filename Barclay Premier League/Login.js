function Help(){
var help = document.getElementById("help");
var fun = function(){
	alert("၁။ University Name ေနရာတြင္ Computer University ႏွင့္ Maubin"+
		"\n၂။ Project Name ေနရာတြင္ Barclays Premier League"+
		"\n၃။ Enter Password ေနရာတြင္ CUmaubin ဟု ျဖည့္ျပီး အသံုးျပဳႏိုင္ပါသည္။"+
		"\n**** သာယာေပ်ာ္ရႊင္ဖြယ္ အခ်ိန္ေလးေတြကို ပိုင္ဆိုင္ႏိုင္ပါေစ......");
	};
EventUtil.addHandler(help, "click", fun);
}
function LoginForm()
{
	var login = document.getElementById("login");
	var func = function(){
		var university = document.getElementById("university").value;
		var city = document.getElementById("city").value;
		var project = document.getElementById("project").value;
		var password = document.getElementById("password").value;
		if(university == "Computer University" && city == "Maubin" && project == "Barclays Premier League" && password == "CUmaubin")
		{
			alert("Login Successfully!\nBarclays Premier League Page မွ ၾကိဳဆိုပါသည္။\n***သာယာေပ်ာ္ရႊင္ဖြယ္ အခ်ိန္ေလးေတြကို ပိုင္ဆိုင္နိဳင္ပါေစ..");
			document.f1.setAttribute("action","MAIN/HOME.html");
		}
		else
		{		
			document.f1.setAttribute("action","");
			alert("၁။ အခ်က္အလက္မ်ားကို ေသခ်ာစြာ ျဖည့္စြက္ပါ။"+
				"\n၂။ အကူအညီလိုအပ္ပါက HELP ကို ႏွိပ္ျပီး အကူအညီ ရယူပါ။");
		}
	};
	EventUtil.addHandler(login, "click", func);
}


function myCookie(){
	var check = document.getElementById("check");
	var fun = function(){
			if(check.checked == true){
				alert("Ready to login for later!"+
					"\nအခ်က္အလက္မ်ားကို ေနာက္တစ္ၾကိမ္ အသံုးျပဳသည့္အခါ အလိုအေလွ်ာက္ ျဖည့္စြပ္ရန္ မွတ္သားထားပါမည္။ ");
				var checking = document.getElementById("check").checked;
				var uName = document.getElementById("university").value;
				var cName = document.getElementById("city").value;
				var pName = document.getElementById("project").value;
				var password = document.getElementById("password").value;
				CookieUtil.set("checkingValue", checking);
				CookieUtil.set("universityName", uName);
				CookieUtil.set("cityName", cName);
				CookieUtil.set("projectName", pName);
				CookieUtil.set("password", password);
			}
			else{
				alert("More scure!"+
					"\nအခ်က္အလက္မ်ားကို မွတ္သားထားမည္ မဟုတ္ပါ။..");
				CookieUtil.unset("checkingValue");
				CookieUtil.unset("universityName");
				CookieUtil.unset("cityName");
				CookieUtil.unset("projectName");
				CookieUtil.unset("password");
			}
		};
	EventUtil.addHandler(check, "click", fun);
}
function AUTO(){
	var func = function(){
			document.getElementById("check").checked = CookieUtil.get("checkingValue");	
			document.getElementById("university").value = CookieUtil.get("universityName");
			document.getElementById("city").value = CookieUtil.get("cityName");
			document.getElementById("project").value = CookieUtil.get("projectName");
			document.getElementById("password").value = CookieUtil.get("password");
		};
	EventUtil.addHandler(window, "load", func);
}