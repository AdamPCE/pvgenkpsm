//   Todo
// - Naukeurigheid van de standaardafwijking, 1 minuut?

function showStep(step, skipvalidation) {
	
	var previousstep = step - 1;
	var continu = true;
	
	if (previousstep > 0 && skipvalidation != true) {
		continu = validateform(previousstep);
	}
	 
	 if (step == 0) { readCookies (); }
	 setCookies ();
	
	if (continu == false) { alert("Niet alle verplichte velden zijn ingevuld") }
	
	if (continu == true) {
		var fieldsets = document.getElementsByTagName("fieldset");
		var complete = 0;

		for (index = 0; index < fieldsets.length; ++index) {
			$("#" + fieldsets[index].id).fadeOut( 300 );
		}
			$("#stap" + step).delay( 301 ).fadeIn( 300 );
			$("#stapx").delay( 301 ).fadeIn( 300 );
			
		
		var complete = (step * 10) + 10;
		$( "#progressbar" ).progressbar({ value: complete });

		if (step == 0) { 
			console.log('stap 0');
			var d = new Date();
			var day = (d.getDate() < 10 ? '0' : '') + d.getDate();
			var month = ((d.getMonth() + 1) < 10 ? '0' : '') + (d.getMonth() + 1) ;  // + 1 want begint bij 0
			var year = d.getFullYear();
			var currentdate = year + "-" + month + "-" + day;
			document.getElementById('datumaanvraag').value = currentdate;
			document.getElementById('vanafdatumtijd').value = currentdate + "T12:00";
			document.getElementById('totdatumtijd').value = currentdate + "T12:00"; // T for time
		}
		
		if (step == 2) { 
			console.log('stap 2');
			getValues(); 
			loadVariables();
			
			if (choice == "intake") {

			choicetext 	= " "

//								+ "<legend>Intakeformulier </legend> "
//								+ "<p>Het intakeformulier is nu gereed. Klik op onderstaande button om deze te genereren en stuur deze naar <b><a href=\"mailto:email@adres.nl\">email@adres.nl </a></b>. Multimedia zal dan de beelden veiligstellen.</p>"
//								+ "<button type=\"button\" class=\"btn btn-default\" onclick=\"generatePdf($('#form'))\">Genereer aanvraagformulier</button>"
//								+ "<br><br>"
//								+ "<legend>Veiligstellen </legend>"
//								+ "<p>Je hebt eerder aangegeven alleen een intakeformulier te willen genereren. Het is ook mogelijk om alsnog de beelden zelf veilig te stellen of deze te verkrijgen van de eigenaar."
//								+ "Klik op onderstaande button om dit te doen en een proces verbaal te genereren. Aanvullende informatie zal gevraagd worden. </p>"
//								+ "<button type=\"button\" class=\"btn btn-primary\" onclick=\"showStep(7)\">Verder gaan & zelf veiligstellen</button>"
//								+ "<br>";								
			}
			
			else if (choice == "pv") {
				choicetext 	= " "
								+ "<legend>Veiligstellen </legend>"
								+ "<p>Je kunt nu het PV gaan samenstellen."
								+ "Klik op onderstaande button om te starten met het veiligstellen en een proces verbaal te genereren. Aanvullende informatie zal gevraagd worden. </p>"
								+ "<button type=\"button\" class=\"btn btn-primary\" onclick=\"showStep(7)\">Verder gaan & zelf veiligstellen</button>"
								+ "<br><br>"
//								+ "<legend>Intakeformulier </legend> "
//								+ "<p>Lukt het niet om de beelden veilig te stellen? Klik op onderstaande button om een intakeformulier te genereren en stuur deze naar <b><a href=\"mailto:email@adres.nl\">email@adres.nl </a></b>. Multimedia zal dan de beelden veiligstellen.</p>"
//								+ "<button type=\"button\" class=\"btn btn-default\" onclick=\"generatePdf($('#form'))\">Genereer aanvraagformulier</button>"
								+ "<br>";
							
			}
			
			console.log("choicetext is: " + choicetext);
			$( "#stap6" ).html(choicetext);
		
		}
		
		if (step == 6) { 
			var vanaf = moment(document.getElementById('vanafdatumtijd').value);
			var tot = moment(document.getElementById('totdatumtijd').value);
			
			console.log('vanaf: ' + vanaf);
			console.log('tot: ' + tot);
			
			if (vanaf > tot) { 
			
				alert ('De vanaf datum ligt verder dan de tot datum');
				showStep(5);
			
			}

		}
		
		if (step == 7) { 
			console.log('stap 7');
			var d = new Date();
			var day = (d.getDate() < 10 ? '0' : '') + d.getDate();
			var month = ((d.getMonth() + 1) < 10 ? '0' : '') + (d.getMonth() + 1) ;  // + 1 want begint bij 0
			var year = d.getFullYear();
			var hours = (d.getHours() < 10 ? '0' : '') + d.getHours(); // => 9
			var minutes = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes() ; // =>  30
			
			var currentdate = year + "-" + month + "-" + day;
			
			console.log(currentdate + "T" + hours + ":" + minutes);
			
			
			document.getElementById('werkelijkedatumtijd').value = currentdate + "T" + hours + ":" + minutes;
			document.getElementById('gewenstebeelden_1').value = document.getElementById('gewenstebeelden').value;
			document.getElementById('vanafdatumtijd_1').value = document.getElementById('vanafdatumtijd').value;
			document.getElementById('totdatumtijd_1').value = document.getElementById('totdatumtijd').value;
		}
		


		if (step == 9) { 
			console.log('stap 9');
			
			if (document.getElementById('locatieveiligstellen').value != 'Overgebracht naar bureau') {
				generatePV($('#form'));
				showStep(10, true)
			}
			
			else {
				var d = new Date();
				var day = (d.getDate() < 10 ? '0' : '') + d.getDate();
				var month = ((d.getMonth() + 1) < 10 ? '0' : '') + (d.getMonth() + 1) ;  // + 1 want begint bij 0
				var year = d.getFullYear();
				var hours = (d.getHours() < 10 ? '0' : '') + d.getHours(); // => 9
				var minutes = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes() ; // =>  30
				
				var currentdate = year + "-" + month + "-" + day;
				
				console.log(currentdate + "T" + hours + ":" + minutes);
				
				
				document.getElementById('werkelijkedatumtijd_1').value = currentdate + "T" + hours + ":" + minutes;
				document.getElementById('gewenstebeelden_2').value = document.getElementById('gewenstebeelden').value;
				document.getElementById('vanafdatumtijd_2').value = document.getElementById('vanafdatumtijd').value;
				document.getElementById('totdatumtijd_2').value = document.getElementById('totdatumtijd').value;
			}
		}
		
		if (step == 99) { 
			console.log('stap 99');
			
		
				var d = new Date();
				var day = (d.getDate() < 10 ? '0' : '') + d.getDate();
				var month = ((d.getMonth() + 1) < 10 ? '0' : '') + (d.getMonth() + 1) ;  // + 1 want begint bij 0
				var year = d.getFullYear();
				var hours = (d.getHours() < 10 ? '0' : '') + d.getHours(); // => 9
				var minutes = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes() ; // =>  30
				
				var currentdate = year + "-" + month + "-" + day;
				
				console.log(currentdate + "T" + hours + ":" + minutes);
				
				
				document.getElementById('werkelijkedatumtijd_2').value = currentdate + "T" + hours + ":" + minutes;
				document.getElementById('gewenstebeelden_3').value = document.getElementById('gewenstebeelden').value;
				document.getElementById('vanafdatumtijd_3').value = document.getElementById('vanafdatumtijd').value;
				document.getElementById('totdatumtijd_3').value = document.getElementById('totdatumtijd').value;
			
		}
		
		
	}
}

function calcdatetimediff(recorderdatumtijd, werkelijkedatumtijd, berekendedatumtijdstart, berekendedatumtijdseind, verschildatumtijd, extra, vanafdatumtijd, totdatumtijd) {
	var recorderdatumtijd = document.getElementById(recorderdatumtijd).value;
	var werkelijkedatumtijd = document.getElementById(werkelijkedatumtijd).value;
	
	//console.log('recorderdatumtijd element: ' + recorderdatumtijd);
	//console.log('werkelijkedatumtijd element: ' + werkelijkedatumtijd);
	
	var date1 = moment(recorderdatumtijd); 
	var date2 = moment(werkelijkedatumtijd);
	
	//console.log ("date 1: " + date1);
	//console.log ("date 2: " + date2);
	
	var diffMile = date1.diff(date2);
	console.log("Millisec diff: " + diffMile);
	
	var diffRead = date1.diff(date2, 'years') + ' jaren, ' + date1.diff(date2, 'months') + ' maanden,' + date1.diff(date2, 'days') + ' dagen, ' + date1.diff(date2, 'hours') + ' uren ' + date1.diff(date2, 'minutes') + ' minuten';
	var diffRead = millisecondsToStr(diffMile);

		
	//console.log("Readable diff: " + diffRead);	
		
	document.getElementById(verschildatumtijd).value = diffRead;
	
	vanafdatumtijd = document.getElementById(vanafdatumtijd).value;
	totdatumtijd = document.getElementById(totdatumtijd).value;
	
	//console.log('vanafdatumtijd element: ' + vanafdatumtijd);
	//console.log('totdatumtijd element: ' + totdatumtijd);
	
	var date3 = moment(vanafdatumtijd);
	var date4 = moment(totdatumtijd);
	
	//console.log('date3: ' + date3);
	//console.log('date4: ' + date4);
	
	var date5;
	
	console.log("timezone recorder: " + moment(recorderdatumtijd).format("YYYY-MM-DD HH:MM Z"));
	console.log("zomertijd?: " + moment(recorderdatumtijd).isDST());
	console.log("timezone vanaf: " + moment(vanafdatumtijd).format("YYYY-MM-DD HH:MM Z"));
	console.log("zomertijd?: " + moment(vanafdatumtijd).isDST());
	console.log("timezone vanaf: " + moment(totdatumtijd).format("YYYY-MM-DD HH:MM Z"));
	console.log("zomertijd?: " + moment(totdatumtijd).isDST());
	
	// Als recorder in de zomertijd is, en de gevraagde starttijd OF einddtijd niet -> dan uurtje extra opnemen aan het einde
	if ( (moment(recorderdatumtijd).isDST() == true) && ( moment(vanafdatumtijd).isDST() == false || moment(totdatumtijd).isDST() == false) ) {
		date5	= moment(date3.milliseconds(diffMile) + 3600000);
		console.log ("Extra uurtje aan het begin");
		$(extra).removeClass('hidden');
		var PVflagZone = true;
	}
	else { 
		date5	= moment(date3.milliseconds(diffMile) + 0);
		$(extra).addClass('hidden');
	}
	
	var date6;
	
	// Als recorder in de wintertijd is, en de gevraagde starttijd OF einddtijd niet -> dan uurtje extra opnemen aan het begin
	if ( (moment(recorderdatumtijd).isDST() == false) && ( moment(vanafdatumtijd).isDST() == true || moment(totdatumtijd).isDST() == true) ) {
		date6 = moment(date4.milliseconds(diffMile) + 3600000);
		console.log ("Extra uurtje aan het einde");
		$(extra).removeClass('hidden');
		var PVflagZone = true;
	}
	else { 
		date6 = moment(date4.milliseconds(diffMile) + 0);
		$(extra).addClass('hidden');
	}
	
	var datum = date5;
	document.getElementById(berekendedatumtijdstart).value = datum.format("YYYY-MM-DDTHH:mm");													
	
	datum = date6;
	document.getElementById(berekendedatumtijdseind).value = datum.format("YYYY-MM-DDTHH:mm");
	
}

function validateform (previousstep) {

	var subform = document.getElementById('stap' + previousstep);
	var inputs = subform.getElementsByTagName('input');
	var r = true;
	
	if (inputs != null) {
		for (var i = 0; i < inputs.length; i++) {
			// console.log('attribute: ' + inputs[i].getAttribute("required"));
			console.log('value: ' + inputs[i].value);
			var value = inputs[i].value;
			
			if (value == "" && inputs[i].getAttribute('required') == 'true' ) {
				inputs[i].parentElement.className += ' has-error';
				console.log('error');
				r = false;
			}
			else {
				// console.log('no error')
			}
		}
		
		return r;
	}
	
}


 function readCookies(){
	var values = document.cookie;
	console.log('cookie ' + values);
	var keys = values.split("&");
	var array = [];
	
	for (var i = 0; i < keys.length; i++) {
		keys[i] = keys[i].split("=");
	}
	
	for (var i = 0; i < keys.length; i++) {
		keyname = keys[i][0];
		if (keys[i][1] == "") {
			// array[keyname] = "Niet opgegeven"; niks doen
		}
		else {
			array[keyname] = keys[i][1];
		}
	}
		
	for (var key in array) {
		value = array[key];
		if (value != null) { 
			if (key == 'vanafdatumtijd' || key == 'totdatumtijd') {
				$("#" + key).val(value); // vullen met jquery
			}		 
			else if (key == 'naam' || key == 'dienstnummer' || key == 'functie' || key == 'telefoonnummer' || key == 'locatiewerkplek' || 
			key == 'verbalisantnaam'  || key == 'verbalisantdienstnummer'  || 
			key == 'verbalisantrang'  || key == 'verbalisantafdeling'  || key == 'cctv' || key == 'eedofbelofte'  ) {
				console.log('key ' + key);
				console.log('value ' + value);
				document.getElementById(key).value = value; // gewoon vullen
			}
		  }
	  }  
  }


function setCookies () {

	var inputs = document.getElementsByTagName("input");
	var r = true;
	var id;
	var value;
	var str;
	var ii = 0;
	
	if (inputs != null) {
		for (var i = 0; i < inputs.length; i++) {
			
			id = inputs[i].id;
			value = inputs[i].value;
			
			if (id == 'naam' || id == 'dienstnummer' || id == 'functie' || id == 'telefoonnummer' || id == 'locatiewerkplek' || 
			id == 'verbalisantnaam'  || id == 'verbalisantdienstnummer' || 
			id == 'verbalisantrang'  || id == 'verbalisantafdeling'  || id == 'cctv' || id == 'eedofbelofte'  ) {
				if (ii < 1) 	{ str = id + '=' + value; }
				else 			{ str = str + '&' + id + '=' + value; }
				ii = ii + 1;
			}

		}
		document.cookie = str;
		//console.log('str is ' + str);
		return r;
	}
}



function saveForm (formi) {

	var values = formi.serialize();
		values = decodeURIComponent(values); // decoderen vanwege special characters 
		values = 		'Dit is een tussentijds opgeslagen bestand. '
					+ 	'Alle gegevens in dit tekstbestand kunnen opnieuw ingelezen worden door het bestand in de tool te uploaden.'
					+ 	"\r\n \r\n \r\n"
					+ 	'OFV00011101010001001000100010OFV' 
					+ 	values 
					+ 	'END00011101010001001000100010END';

	var keys = values.split("&");	
	var array = {};

	for (var i = 0; i < keys.length; i++) {
	   keys[i] = keys[i].split("=");
	}

	for (var i = 0; i < keys.length; i++) {
		keyname = keys[i][0];
		
		if (keys[i][1] == "") {
			array[keyname] = 'Niet opgegeven';
		}

		else {
			array[keyname] = keys[i][1];
		}
	}
	
	var byteNumbers = new Uint8Array(values.length);
		
	for (var i = 0; i < values.length; i++) {
		byteNumbers[i] = values.charCodeAt(i);
	}

	var blob = new Blob([byteNumbers], {type: 'text/html'});
	saveAs(blob, array['werkelijkedatumtijd'] + '-' +  array['dienstnummer'] + '-' + array['naamonderzoek'] + '-Savefile.txt');

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowercaseFirstLetter(string) {
    return string.toLowerCase();
}