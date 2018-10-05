/// Ontvangstbewijs

/// opmaak:


/// logo met briefhoofd KPSM

/// Welke Zaak met nummer en volgnummer
/// Welk Goed
/// Eigenaar kenmerken




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

var img =	"http://www.keijsper.com/logo.jpeg";

var htmlhead = 			 '<!DOCTYPE html>'
						+ '<html>';

	htmlhead = htmlhead + '<head>'
						+ 	'<style>'
						+ 	 'body 		 { font-size: 08pt; font-family: arial; } '
						+ 	 'h1 		 { font-size: 12pt; 				margin-top: 10px; } '
						+ 	 'h2 		 { font-size: 16pt; 				margin-top: 10px; margin-bottom: 0px; 	 } '
						+ 	 'h3 		 { font-size: 12pt; 				margin-top: 10px; margin-bottom: 0px; 	 } '
						+ 	 '.grey 	 { background-color:#EEEEEE; 	font-weight: bold; } '
						+ 	 '.black 	 { background-color:#404040; 	font-weight: bold; color:#FFFFFF; } '
						+ 	 '.hidden 	 { display: none } '
						+ 	 'p 		 { margin-top: 0px; margin-bottom: 5px; } '
						+ 	 '.pdf table { width: 100%; overflow: auto; } '
						+ 	 'table 	 { width: 100%; overflow: auto; } '
						+ 	'</style>'
						+  '</head>';

var content = 			  '<body>';

///	content = content	+ '<h1 align="center">Korps Politie Sint Maarten</h1>';

///	content = content	+ '<p align="center"><img src="' + img + '" height="50px" ></p>';

content = content	+ '<p align="right"><img src="' + logo + '" height="50px"></p>';

content = content 	+ '<table width="1%">'
//						+ 	'<tr><td class="grey" colspan=1></tr></td>'
					+ 	'<tr>'
					+ 		'<td class="white">Korps Politie </td>'
					+	'</tr>'
					+	'<tr>'
					+		'<td class="white">SINT MAARTEN</td>'
					+ 	'</tr>'
					+	'<tr>'
					+		'<td class="white">Forensisch Digitale Opsporing</td>'
					+ 	'</tr>'
					+	'<tr>'
					+		'<td class="white">E. Camille Richardson Street 24</td>'
					+ 	'</tr>'
					+	'<tr>'
					+		'<td class="white">Philipsburg, Sint Maarten</td>'
					+ 	'</tr>'
					+ '</table>'
					+ '<br><br><br>;'


	content = content 	+ '<table width="100%" style="border-bottom: solid 1px black; ">';
	content = content	+ 	'<tr>';
	content = content	+		'<td align="center"><h2>ONTVANGSTBEWIJS</h2></td>';
	content = content	+	'</tr>';
	content = content	+ '</table>';

///	content = content	+ '<h2 align="center"><u>ONTVANGSTBEWIJS</u></h2>';

///	content = content	+ '<h2>Algemeen</h2>';

// hier komt overzicht van het onderzoek

content = content 	+ '<table width="100%">'
					+ 	'<tr><td class="black" colspan=4>Onderzoek </tr></td>'
					+ 	'<tr>'
					+ 		'<td class="grey">Naam </td>'
					+ 		'<td class="white">' + capitalizeFirstLetter ( array['naamonderzoek'] ) + '</td>'
					+ 		'<td class="grey">Inbeslagname nr. </td>'
					+ 		'<td class="white">' + capitalizeFirstLetter ( array['inbeslagnamenummer'] ) + '</td>'

					+ 	'</tr>'
					+ 	'<tr>'
					+ 		'<td class="grey">Onderzoeks nr. </td>'
					+ 		'<td class="white">' + capitalizeFirstLetter ( array['onderzoeksnummer'] ) + '</td>'
					+		'<td class="grey">Volgnummer goed </td>'
					+ 		'<td class="white">' + capitalizeFirstLetter ( array['volgnummer'] ) + '</td>'

					+ 	'</tr>'
					+ '</table>';

					content = content 	+ '<table width="100%">'
										+ 	'<tr><td class="black" colspan=4>Aanvullende gegevens</tr></td>'
										+ 	'<tr>'
										+ 		'<td class="grey">Officier van Justitie </td>'
										+ 		'<td class="white"> ' + array['OVJname'] + '</td>'
										+		'<td class="grey">Datum toestemming </td>'
										+ 		'<td class="white">' + datumtoestemmingOVJStr + '</td>'
										+ 	'</tr>'
										+	'<tr>'
										+ 		'<td class="grey">Status eigenaar</td>'
										+ 		'<td class="white"> ' + array['verdachte'] + '</td>'
										+		'<td class="grey">Naam</td>'
										+ 		'<td class="white">' + array['NAW'] + '</td>'
										+ 	'</tr>'
										+ '</table>';




	content = content	+ '<h2>Ontvangstbewijs</h2>';

	content = content 	+ '<table>'
						+ 	'<tr>'
						+		'<td class="grey" width="25%">Datum Retour </td>'
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
