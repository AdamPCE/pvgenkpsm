function generatePdf(formi) {

var values = formi.serialize();
	values = decodeURIComponent(values); // decoderen vanwege special characters 
var keys = values.split("&");
var array = {};

for (var i = 0; i < keys.length; i++) {
   keys[i] = keys[i].split("=");
}

for (var i = 0; i < keys.length; i++) {
	keyname = keys[i][0];
	
	if (keys[i][1] == "") {
		array[keyname] = "Niet opgegeven";
	}
	else {
		array[keyname] = keys[i][1];
	}
}

						
var datumaanvraagStr = moment(array['datumaanvraag']).format("LL");
var vanafdatumtijdStr = moment(array['vanafdatumtijd']).format("LLL");
var totdatumtijdStr = moment(array['totdatumtijd']).format("LLL");	

var img = "data:image/png;base64,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";

var htmlhead = 			 '<!DOCTYPE html>' 
						+ '<html>';

	htmlhead = htmlhead + '<head>'
						+ 	'<style>'
						+ 	 'body 		 { font-size: 12px; font-family: arial; } '
						+ 	 'h1 		 { font-size: 20px; 				margin-top: 10px; } '
						+ 	 'h2 		 { font-size: 16px; 				margin-top: 10px; margin-bottom: 0px; 	 } '
						+ 	 'h3 		 { font-size: 12px; 				margin-top: 10px; margin-bottom: 0px; 	 } '
						+ 	 '.grey 	 { background-color:#EEEEEE; 	font-weight: bold; } '
						+ 	 '.black 	 { background-color:#404040; 	font-weight: bold; color:#FFFFFF; } '
						+ 	 '.hidden 	 { display: none } '
						+ 	 'p 		 { margin-top: 0px; margin-bottom: 5px; } '
						+ 	 '.pdf table { width: 100%; overflow: auto; } '						
						+ 	 'table 	 { width: 100%; overflow: auto; } '
						+ 	'</style>'
						+  '</head>';
						
var content = 			  '<body>';
						
	content = content	+ '<h1 align="center">Politie - Eenheid Noord-Holland</h1>';

	content = content	+ '<p align="center"><img src="' + img + '" height="50px" ></p>';
	
	content = content	+ '<h2 align="center"><u>INTAKEFORMULIER MULTIMEDIA</u></h2>';

	content = content	+ '<h2>Algemeen</h2>';
	
	content = content 	+ '<table>'
						+ 	'<tr>'
						+		'<td class="black" colspan=6>Aanvrager</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+ 		'<td class="grey">Naam</td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['naam'] ) + '</td>'
						+ 		'<td class="grey">Dienstnummer </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['dienstnummer'] ) + '</td>'
						+		'<td class="grey">Functie </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['functie'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+ 		'<td class="grey">Telefoonnummer </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['telefoonnummer'] ) + '</td>'
						+		'<td class="grey">Locatie werkplek </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['locatiewerkplek'] ) + '</td>'
						+		'<td class="grey"></td>'
						+ 		'<td></td>'
						+ 	'</tr>'
						+ '</table>';

					
	content = content 	+ '<table>'
						+ 	'<tr>'
						+		'<td class="black" colspan=6>Onderzoek </td>'
						+	'</tr>'
						+ 	'<tr>'
						+ 		'<td class="grey">Naam onderzoek </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['naamonderzoek'] )+ '</td>'
						+ 		'<td class="grey">BVH nr </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['bvhnummer'] ) + '</td>'
						+		'<td class="grey">Intern id nr </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['monalisanummer'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+ 		'<td class="grey">Inbeslagnamenummer </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['inbeslagnamenummer'] ) + '</td>'
						+		'<td class="grey">Soort delict </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['soortdelict'] ) + '</td>'
						+		'<td class="grey">Datum aanvraag</td>'
						+ 		'<td>' + datumaanvraagStr + '</td>'
						+ 	'</tr>'
						+ '</table>';
						
	content = content	+ '<h2>Plaats delict</h2>';
	
	content = content 	+ '<table>'
						+ 	'<tr>'
						+		'<td class="black" colspan=2>Locatie gegevens </td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+ 		'<td class="grey" width="15%">Soort </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['soortlaatsdelict'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+ 		'<td class="grey" width="15%">(Bedrijfs) Naam </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['naamplaatsdelict'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="15%">Adres </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['adresplaatsdelict'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="15%">Postcode </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['postcodeplaatsdelict'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="15%">Plaats </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['plaatsnaamplaatsdelict'] ) + '</td>'
						+ 	'</tr>'

						+ '</table>';
	
	content = content 	+ '<table>'
						+ 	'<tr><td class="black" colspan=4>Contactpersoon </td></tr>'
						+ 	'<tr>'
						+ 		'<td class="grey" width="15%">Naam </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['naamcontactpersoon'] ) + '</td>'
						+ 		'<td class="grey"  width="15%">Functie </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['functiecontactpersoon'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="15%">Telefoonnummer </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['telefoonnummercontactpersoon'] ) +  '</td>'
						+		'<td class="grey" width="15%">Email </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['emailcontactpersoon'] ) + '</td>'
						+ 	'</tr>'
						+ '</table>';
						
	content = content	+ '<h2>(Video)Bewakingssysteem</h2>';

	content = content 	+ '<table>'
						+ 	'<tr>'
						+		'<td class="black" colspan=4>Gegevens </td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+ 		'<td class="grey" width="15%">Merk </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['videorecordermerk'] ) + '</td>'
						+ 		'<td class="grey"  width="15%">Type </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['videorecordertype'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="15%">Serienummer </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['videorecorderserienummer'] ) + '</td>'
						+		'<td class="grey" width="15%">Installateur </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['videorecorderinstallateur'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="15%">Gebruikersnaam </td>'
						+ 		'<td>' + array['videorecordergebruikersnaam'] + '</td>'
						+		'<td class="grey" width="15%">Wachtwoord </td>'
						+ 		'<td>' + array['videorecorderwachtwoord'] + '</td>'
						+ 	'</tr>'
						+ '</table>';

	content = content 	+ '<table>'
						+ 	'<tr>'
						+		'<td class="black" colspan=4>Vraagstelling </td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+ 		'<td class="grey" colspan=4>Gewenste beelden / camera\'s </td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+ 		'<td colspan=4>' + array['gewenstebeelden'] + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey">Vanaf datum & tijd </td>'
						+ 		'<td>' + vanafdatumtijdStr + '</td>'
						+		'<td class="grey">Tot datum & tijd </td>'
						+ 		'<td>' + totdatumtijdStr + '</td>'
						+ 	'</tr>'
						+ '</table>';
	
	content = content 	+ '<table>'
						+ 	'<tr>'
						+ 		'<td class="grey" >Overige vragen / opmerkingen </td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+ 		'<td>' + array['overigevragen'] + '</td>'
						+ 	'</tr>'
						+ '</table>';	
	
	content = content	+ '<h2>Opmerkingen afdeling multimedia</h2>';					
	
	content = content 	+ '<table>'
						+  '<tr>'
						+		'<td class="black" colspan=2>Opmerkingen afdeling multimedia </td>'
						+	'</tr>'	
						+ 		'<td> &nbsp; </td>'
						+ 	'</tr>'
						+	'</tr>'	
						+ 		'<td> &nbsp; </td>'
						+ 	'</tr>'
						+	'</tr>'	
						+ 		'<td> &nbsp; </td>'
						+ 	'</tr>'
						+	'</tr>'	
						+ 		'<td> &nbsp; </td>'
						+ 	'</tr>'
						+ '</table>';
	
	
	content = content	+ '<h2>Retour verklaring</h2>';					
	
	content = content 	+ '<table>'
						+  '<tr>'
						+		'<td class="black" colspan=2>Retour verklaring </td>'
						+	'</tr>'	
						+ 	'<tr>'
						+		'<td class="grey" width="25%">Datum gereerd gemeld </td>'
						+ 		'<td> </td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="25%">Datum retour ontvangen </td>'
						+ 		'<td> </td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="25%">Naam </td>'
						+ 		'<td> </td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="25%">Dienstnummer </td>'
						+ 		'<td> </td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="25%">Plaats </td>'
						+ 		'<td> </td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="25%">Hantekening </td>'
						+ 		'<td> </td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="25%"> &nbsp; </td>'
						+ 		'<td> </td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="25%"> &nbsp; </td>'
						+ 		'<td> </td>'
						+ 	'</tr>'
						+ '</table>';
						
	content = content	+ '</body> </html>';	
	
var htmlstring = htmlhead + content;
	
var hiddenfooter 		=  'OFV00011101010001001000100010OFV' + values + 'END00011101010001001000100010END';	

	html2pdf(htmlstring, 
	{
	  margin:       0.30,
	  filename:     array['datumaanvraag'] + '-' +  array['dienstnummer'] + '-' + array['naamonderzoek'] + '-aanvraagformulier.pdf',
	  image:        { type: 'jpeg', quality: 1 },
	  html2canvas:  { dpi: 192 },
	  jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait',  }
	},
	hiddenfooter);
	
/* oude ms word code 

		var byteNumbers = new Uint8Array(htmlString.length);
		for (var i = 0; i < htmlString.length; i++) {
		byteNumbers[i] = htmlString.charCodeAt(i);
		}

		var blob = new Blob([byteNumbers], {type: 'text/html'});
		saveAs(blob, array['datumaanvraag'] + '-' +  array['dienstnummer'] + '-' + array['naamonderzoek'] + '-aanvraagformulier.doc');
*/
			
}


