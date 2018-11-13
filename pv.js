function generatePV(formi) {


//// To do:

// geen simkaart, simkaart onderwerp wel vermelden maar geen sim in toestel.
// fotobijlage ??
// Ontvangstbewijs ??
// Versie van UFED erbij??
//
//


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

		array[keyname] = '';
		// array[keyname] = '<font color="red">Niet opgegeven</font>';
	}

	else {
		array[keyname] = keys[i][1];
	}
}


var datumaanvraagStr = moment(array['datumaanvraag']).format("dddd LL");
var vanafdatumtijdStr = moment(array['vanafdatumtijd']).format("dddd LLL");
var totdatumtijdStr = moment(array['totdatumtijd']).format("dddd LLL");
/// var datumtoestemmingOVJStr = moment(array['datumtoestemmingOVJ']).format("dddd LLL");
var datumtoestemmingOVJStr = moment(array['datumtoestemmingOVJ']).format("dddd LL");
var datumonderzoekStr = moment(array['datumonderzoek']).format("dddd LL");

var werkelijkedatumtijdStr = moment(array['werkelijkedatumtijd']).format("dddd LLL");
var werkelijkedatumtijdStr1 = moment(array['werkelijkedatumtijd']).format("LLL");

var documentcodeStr = moment(array['werkelijkedatumtijd']).format("YYYYMMDD.HHMM") + '.' + array['verbalisantdienstnummer'] ;


var recorderdatumtijdStr = moment(array['recorderdatumtijd']).format("LLL");
var werkelijkedatumtijd_1Str = moment(array['werkelijkedatumtijd_1']).format("LLL");
var recorderdatumtijd_1Str = moment(array['recorderdatumtijd_1']).format("LLL");

if ( moment(array['recorderdatumtijd']).format("x") > moment(array['werkelijkedatumtijd']).format("x") ) {
	var voorachterloopStr = 'voor liep';
}
else {
	var voorachterloopStr = 'achter liep';
}

if ( moment(array['recorderdatumtijd_1']).format("x") > moment(array['werkelijkedatumtijd_1']).format("x") ) {
	var voorachterloopStr1 = 'voor liep';
}
else {
	var voorachterloopStr1 = 'achter liep';
}

var pvdatumtijd_1Str = moment().format("dddd LLL");


var htmlhead = 			 '<!DOCTYPE html>'
						+ '<html '
						+ 'xmlns:o="urn:schemas-microsoft-com:office:office" '
						+ 'xmlns:w="urn:schemas-microsoft-com:office:word" '
						+ 'xmlns="http://www.w3.org/TR/REC-html40">';

	htmlhead = htmlhead + '<head>'
						+ 	'<style>'
						+ 	 'body 		 { font-size: 08pt; font-family: arial; } '
						+ 	 'h1 		 { font-size: 12pt; 				margin-top: 10px; } '
						+ 	 'h2 		 { font-size: 16pt; 				margin-top: 10px; margin-bottom: 0px; 	 } '
						+ 	 'h3 		 { font-size: 10pt; 				margin-top: 10px; margin-bottom: 0px; 	 } '
						+ 	 '.grey 	 { background-color:#EEEEEE; 	font-weight: bold; width: 20%;} '
						+ 	 '.black 	 { background-color:#404040; 	font-weight: bold; color:#FFFFFF; } '
						+ 	 '.hidden 	 { display: none } '
						+ 	 'p 		 { margin-top: 0px; margin-bottom: 5px; } '
						+ 	 '.pdf table { width: 100%; overflow: auto; } '
						+ 	 'table 	 { width: 100%; overflow: auto; } '
						+ 	 '.white 	 { width: 30%; } '
						+ 	'</style>';

	htmlhead = htmlhead	+ '<style>'
						+ ' p.MsoFooter, li.MsoFooter, div.MsoFooter { '
						+ '		margin:0in 0in 1in 0in; '
						+ '		margin-bottom:.0001pt; '
						+ '		mso-pagination:widow-orphan; '
						+ '		tab-stops:center 3.0in right 6.0in; '
						+ ' } '

						+ '	.footer { '
						+ '		font-size: 9pt; '
						+ '	} '

						+ '	@page page { '
//						+ '		size:8.5in 11.0in; '
						+ '		size: 21cm 29.7cm; '
						+ '		mso-header-margin:0.5in; '
						+ '		mso-header:h1; '
						+ '		mso-footer:f1; '
						+ '		mso-footer-margin:0.5in; '
						+ '		mso-paper-source:0; '
						+ '	} '

						+ '	div.page { '
						+ '		page:page; '
						+ '	} '

						+ '	table#hrdftrtbl { '
						+ '		margin:0in 0in 0in 9in; '
						+ '	} '

						+ '</style>';

	htmlhead = htmlhead	 +  '</head>';

//var img = "http://www.keijsper.com/kpsm_small.jpg";
//var logo =	"http://www.keijsper.com/logo.jpeg";
var logo =	"http://www.keijsper.com/logo.png";

var content = 			'<div class="page"> ';

///	content = content 	+ '<h1 align="center">Politie - KPSMv0.3</h1>';

	content = content	+ '<p align="right"><img src="' + logo + '"></p>';

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
						+ '</table>';


	content = content 	+ '<table width="100%" style="border-bottom: solid 1px black; ">';
	content = content	+ 	'<tr>';
	content = content	+		'<td align="center"><h2>PROCES-VERBAAL</h2></td>';
	content = content	+	'</tr>';
	content = content	+ '</table>';

	content = content 	+ '<table width="100%">'
						+ 	'<tr><td class="black" colspan=6>Verbalisant </tr></td>'
						+ 	'<tr>'
						+ 		'<td class="grey">Naam </td>'
						+ 		'<td class="white">' + capitalizeFirstLetter ( array['verbalisantnaam'] ) + '</td>'
						+ 		'<td class="grey">Dienstnummer </td>'
						+ 		'<td class="white">' + array['verbalisantdienstnummer'] + '</td>'
						+	'</tr>'
						+	'<tr>'
						+		'<td class="grey">Rang </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['verbalisantrang'] ) + '</td>'
						+		'<td class="hidden"> </td>'
						+ 		'<td class="hidden"> </td>'
						+ 	'</tr>'
						+ '</table>';

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
						+ 		'<td class="grey">Documentcode </td>'
						+ 		'<td class="white">' + documentcodeStr + '</td>'
						+		'<td class="grey">Betreft </td>'
						+ 		'<td class="white">' + 'Veiligstellen / onderzoek' + '</td>'
						+ 	'</tr>'
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

	content = content 	+ '<table width="100%" style="border-bottom: solid 1px black; ">';
	content = content	+ 	'<tr>';
	content = content	+		'<td align="center"><h2>PROCES-VERBAAL VEILIGSTELLEN</h2></td>';
	content = content	+	'</tr>';
	content = content	+ '</table>';

	content = content 	+ '<p><br>'
						+  'Hierbij verklaar ik, ' + array['verbalisantnaam'] + ', ' + lowercaseFirstLetter( array['verbalisantrang'] ) + ' van KPSM, werkzaam bij de afdeling '
						+   lowercaseFirstLetter( array['verbalisantafdeling'] ) + ' van de forensische opsporing, '

if 	(array['cctv'] == "CCTV Gecertificeerd") {
	content = content	+ 'tevens gecertificeerd installatiedeskundige Beveiligings-camerasystemen CCTV, ';
}

	content = content	+  'het volgende:'
						+ '</p>';


	content = content 	+ ' '
						+ '<h3>Aanvang onderzoek</h3>'

						+ 	'<p>'
						+ 	'Op ' + datumaanvraagStr + '  kreeg ik, verbalisant, het verzoek van ' + capitalizeFirstLetter( array['naam'] ) + ' om te assisteren bij het onderzoek van een ' + capitalizeFirstLetter( array['SoortGoed'] ) + ', in verband met het onderzoek ' + capitalizeFirstLetter( array['naamonderzoek'] ) + ', in behandeling bij de afdeling ' + capitalizeFirstLetter( array['aanvraagafd'] ) + '.'
						+ '<p>'
						+ 'Voor meer bijzonderheden betreffende de toedracht, verwijs ik naar het door een medewerker van ' + capitalizeFirstLetter( array['aanvraagafd'] ) + ' opgemaakt proces-verbaal.'
						+ 	'</p>';

	content = content 	+	' '
						+	'<h3>Toestemming OvJ</h3>'
						+ 	'<p>'
						+ 	'Op bevel van de Officier van Justitie, ' + array['OVJname'] +', op ' + datumtoestemmingOVJStr + ', is volgens artikel 184 jo. 183 jo. 120 en 121 van het Wetboek van Strafvordering, de inhoud van de goed uitgelezen en onderzocht.'
						+ 	'</p>';

	content = content	+	' '
						+	'<h3>Goed</h3>'

						+ 	'<p>'
						+ 	'Het betrof hier het volgende goed: '
						+ 	'</p>';




// inhoud bepalen van het overzicht goed
// Smartphone met Simkaarten microSD
if	(array['SoortGoed'] == "Smartphone met Simkaart en microSD") {
	content = content 	+ '<table width="100%">'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Soort goed </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['SoortGoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Merk goed </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['merkgoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Type </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['typegoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Serienummer </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['serialgoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">imei1 </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['imei1'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">imei2 </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['imei2'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">ICCID </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['iccid'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">IMSI </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['imsi'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Telecomprovider </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['telco'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Geheugen Intern </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['intmemsize'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Extern geheugen </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['extmemmerk'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Extern geheugen </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['extmemtype'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Extern geheugen </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['extmemsize'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Toestel aan of uit? </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['onoff'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Flightmode </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['flightmode'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Toestelcode </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['tstcode'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">SIMcode </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['simcode'] ) + '</td>'
						+ 	'</tr>'
						+ '</table>';

					} else {
	// next item
	}

// Smartphone met simkaart
if 	(array['SoortGoed'] == "Smartphone met Simkaart") {
	content = content 	+ '<table width="100%">'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Soort goed </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['SoortGoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Merk Goed </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['merkgoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Type </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['typegoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Serienummer </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['serialgoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">imei1 </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['imei1'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">imei2 </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['imei2'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">ICCID </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['iccid'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">IMSI </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['imsi'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Telecomprovider </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['telco'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Geheugen intern </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['intmemsize'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Toestel aan of uit? </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['onoff'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Flightmode </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['flightmode'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Toestelcode </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['tstcode'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">SIMcode </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['simcode'] ) + '</td>'
						+ 	'</tr>'
						+ '</table>';

					} else {
	// next item
	}

// Smartphone met microSD
if 	(array['SoortGoed'] == "Smartphone met microSD") {
	content = content 	+ '<table width="100%">'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Soort goed </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['SoortGoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Merk goed </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['merkgoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Type </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['typegoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Serienummer </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['serialgoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">imei1 </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['imei1'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">imei2 </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['imei2'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Geheugen intern </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['intmemsize'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Extern geheugen </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['extmemmerk'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Extern geheugen </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['extmemtype'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Extern geheugen </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['extmemsize'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Toestel aan of uit? </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['onoff'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Flightmode </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['flightmode'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Toestelcode </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['tstcode'] ) + '</td>'
						+ 	'</tr>'
						+ '</table>';
						} else {
	// next item
}

// Smartphone
if 	(array['SoortGoed'] == "Smartphone") {
	content = content 	+ '<table width="100%">'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Soort goed </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['SoortGoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Merk goed </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['merkgoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Type </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['typegoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Serienummer </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['serialgoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">imei1 </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['imei1'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">imei2 </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['imei2'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Geheugen intern </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['intmemsize'] ) + '</td>'
						+ 	'</tr>'
						+	'<tr>'
						+		'<td class="grey" width="20%">Toestel aan of uit? </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['onoff'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Flightmode </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['flightmode'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Toestelcode </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['tstcode'] ) + '</td>'
						+ 	'</tr>'
						+ '</table>';
					} else {
	// next item
	}

// Simkaart
if 	(array['SoortGoed'] == "Simkaart") {
	content = content 	+ '<table width="100%">'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Soort goed </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['SoortGoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Telecomprovider </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['telco'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">ICCID </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['iccid'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">IMSI </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['imsi'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">SIMcode </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['simcode'] ) + '</td>'
						+ 	'</tr>'
						+ '</table>';
					} else {
	// next item
	}

// Tablet met microSD
if 	(array['SoortGoed'] == "Tablet met microSD") {
	content = content 	+ '<table width="100%">'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Soort goed </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['SoortGoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Merk goed </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['merkgoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Type </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['typegoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Serienummer </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['serialgoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Geheugen intern </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['intmemsize'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Extern geheugen </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['extmemmerk'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Extern geheugen </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['extmemtype'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Extern geheugen </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['extmemsize'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Toestel aan of uit? </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['onoff'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Flightmode </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['flightmode'] ) + '</td>'
						+ 	'</tr>'
						+ '</table>';

					} else {
	// next item
}

// Tablet met Simkaart en microSD
if 	(array['SoortGoed'] == "Tablet met Simkaart en microSD") {
	content = content 	+ '<table width="100%">'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Soort goed </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['SoortGoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Merk goed </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['merkgoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Type </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['typegoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Serienummer </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['serialgoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">GeheugenIntern </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['intmemsize'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Extern geheugen </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['extmemmerk'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Extern geheugen </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['extmemtype'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Extern geheugen </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['extmemsize'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Toestel aan of uit? </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['onoff'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Flightmode </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['flightmode'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Telecomprovider </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['telco'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">ICCID </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['iccid'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">IMSI </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['imsi'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">SIMcode </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['simcode'] ) + '</td>'
						+ 	'</tr>'
						+ '</table>';

					} else {
	// next item
}

// Tablet met Simkaart
if 	(array['SoortGoed'] == "Tablet met Simkaart") {
	content = content 	+ '<table width="100%">'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Soort goed </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['SoortGoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Merk goed </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['merkgoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Type </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['typegoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Serienummer </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['serialgoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Toestel aan of uit? </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['onoff'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Toestelcode </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['tstcode'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Flightmode </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['flightmode'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Telecomprovider </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['telco'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">ICCID </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['iccid'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">IMSI </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['imsi'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">SIMcode </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['simcode'] ) + '</td>'
						+ 	'</tr>'
						+ '</table>';

					} else {
	// next item
}

// Geheugenkaart
if	(array['SoortGoed'] == "Geheugenkaart") {

	content = content 	+ '<table width="100%">'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Soort goed </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['SoortGoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Merk goed </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['merkgoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Type </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['typegoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Serienummer </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['serialgoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Extern geheugen </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['extmemmerk'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Extern geheugen </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['extmemtype'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Extern geheugen </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['extmemsize'] ) + '</td>'
						+ 	'</tr>'
						+ '</table>';
					} else {
	// next item
}

// Harde schijf
if	(array['SoortGoed'] == "Harde schijf") {

	content = content 	+ '<table width="100%">'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Soort goed </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['SoortGoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Merk goed </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['merkgoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Type </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['typegoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Serienummer </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['serialgoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Extern geheugen </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['extmemmerk'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Extern geheugen </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['extmemtype'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Capaciteit </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['extmemsize'] ) + '</td>'
						+ 	'</tr>'
						+ '</table>';
					} else {
	// next item
}

// USB stick
if	(array['SoortGoed'] == "USB stick") {

	content = content 	+ '<table width="100%">'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Soort goed </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['SoortGoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Merk goed </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['merkgoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Type </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['typegoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Serienummer </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['serialgoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Extern geheugen </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['extmemmerk'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Extern geheugen </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['extmemtype'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Capaciteit </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['extmemsize'] ) + '</td>'
						+ 	'</tr>'
						+ '</table>';
					} else {
	// next item
}

// Datadrager
if	(array['SoortGoed'] == "Datadrager") {

	content = content 	+ '<table width="100%">'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Soort goed </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['SoortGoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Merk goed </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['merkgoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Type </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['typegoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Serienummer </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['serialgoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Extern geheugen </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['extmemmerk'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Extern geheugen </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['extmemtype'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Capaciteit </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['extmemsize'] ) + '</td>'
						+ 	'</tr>'
						+ '</table>';
					} else {
	// next item
}

// Laptop/Computer
if	(array['SoortGoed'] == "Laptop/Computer") {

	content = content 	+ '<table width="100%">'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Soort goed </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['SoortGoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Merk goed </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['merkgoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Type </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['typegoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Serienummer </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['serialgoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Extern geheugen </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['extmemmerk'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Extern geheugen </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['extmemtype'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Capaciteit </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['extmemsize'] ) + '</td>'
						+ 	'</tr>'
						+ '</table>';
					} else {
	// next item
}

// vluchtige gegevens (nog niet gebruiken)
if	(array['SoortGoed'] == "Vluchtige gegevens (niet gebruiken)") {

	content = content 	+ '<table width="100%">'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Soort goed </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['SoortGoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Merk goed </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['merkgoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Type </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['typegoed'] ) + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Serienummer </td>'
						+ 		'<td>' + capitalizeFirstLetter ( array['serialgoed'] ) + '</td>'
						+ 	'</tr>'
						+ '</table>';
					} else {
	// next item
}




// Vraagstelling onderzoeksteam
	content = content 	+	' '
						+ 	'<h3>Vraagstelling onderzoeksteam</h3>'
						+ 	'<p>'
						+ 	'De vraag van het onderzoeksteam was om informatie vanaf de ' + capitalizeFirstLetter ( array['merkgoed'] ) + ' veilig te stellen, inclusief de eventueel aanwezige andere gegevensdragers.'
						+ 	'</p>';

	content = content	+ '<br style="page-break-after: always">';





// Zijn er bijzdonderheden voor het goed?
if (array['opmerking'] == "Ja"){
		content = content 	+ 	'<h3>Opmerking(en) verbalisant</h3>'
												+ 	'<p>'
												+	'Ten aanzien van het goed zijn de volgende opmerkingen van toepassing: '
												+	capitalizeFirstLetter ( array['overigevragen_1'] ) + ''
												+ 	'</p>';
							} else {
		// next item
}



//Flightmode option
if (array['flightmode'] == "##############"){
	content = content 	+ 	'<h3>Flightmode</h3>'
						+ 	'<p>'
						+	'De optie flightmode is niet juist gekozen. Indien flightmode niet van toepassing, verwijder deze alinea'
					} else {
}



//gebruik forensic tool
if	(array['SoortGoed'] == "Smartphone met Simkaart en microSD"){
	content = content	+	' '
						+	'<h3>Onderzoek en veiligstellen</h3>'
						+  '<p>'
						+  'Op ' + datumonderzoekStr + ' is de ' + array['SoortGoed'] + ' door mij veilig gesteld door gebruik te maken van ' + array['fortool'] + '.'
						+ ' ' + capitalizeFirstLetter(array['fortool']) + ' extraheerd informatie uit het goed om het vervolgens aan de onderzoeker te kunnen presenteren.'
						+  '</p>';
					} else {
	// next item
}

if	(array['SoortGoed'] == "Smartphone met Simkaart"){
	content = content	+ ' '
						+ '<h3>Onderzoek en veiligstellen</h3>'
						+  '<p>'
						+  'Op ' + datumonderzoekStr + ' is de ' + array['SoortGoed'] + ' door mij veilig gesteld door gebruik te maken van ' + array['fortool'] + '.'
						+ ' ' + capitalizeFirstLetter(array['fortool']) + ' extraheerd informatie uit het goed om het vervolgens aan de onderzoeker te kunnen presenteren.'
						+ ' '
						+  '</p>';

					} else {
	// next item
}

if	(array['SoortGoed'] == "Smartphone met microSD"){
	content = content	+ ' '
						+ '<h3>Onderzoek en veiligstellen</h3>'

						+  '<p>'
						+  'Op ' + datumonderzoekStr + ' is de ' + array['SoortGoed'] + ' door mij veilig gesteld door gebruik te maken van ' + array['fortool'] + '.'
						+ ' ' + capitalizeFirstLetter(array['fortool']) + ' extraheerd informatie uit het goed om het vervolgens aan de onderzoeker te kunnen presenteren.'
						+ ' '
						+  '</p>';

					} else {
	// next item
}

if	(array['SoortGoed'] == "Smartphone"){
	content = content	+ ' '
						+ '<h3>Onderzoek en veiligstellen</h3>'

						+  '<p>'
						+  'Op ' + datumonderzoekStr + ' is de ' + array['SoortGoed'] + ' door mij veilig gesteld door gebruik te maken van ' + array['fortool'] + '.'
						+ ' ' + capitalizeFirstLetter(array['fortool']) + ' extraheerd informatie uit het goed om het vervolgens aan de onderzoeker te kunnen presenteren.'
						+ ' '
						+  '</p>';

					} else {
	// next item
}

if	(array['SoortGoed'] == "Simkaart"){
	content = content	+ ' '
						+ '<h3>Onderzoek en veiligstellen</h3>'

						+  '<p>'
						+  'Op ' + datumonderzoekStr + ' is de ' + array['SoortGoed'] + ' door mij veilig gesteld door gebruik te maken van ' + array['fortool'] + '.'
						+ ' ' + capitalizeFirstLetter(array['fortool']) + ' extraheerd informatie uit het goed om het vervolgens aan de onderzoeker te kunnen presenteren.'
						+ ' '
						+  '</p>';

					} else {
	// next item
}

if	(array['SoortGoed'] == "Tablet met microSD"){
	content = content	+ ' '
						+ '<h3>Onderzoek en veiligstellen</h3>'

						+  '<p>'
						+  'Op ' + datumonderzoekStr + ' is de ' + array['SoortGoed'] + ' door mij veilig gesteld door gebruik te maken van ' + array['fortool'] + '.'
						+ ' ' + capitalizeFirstLetter(array['fortool']) + ' extraheerd informatie uit het goed om het vervolgens aan de onderzoeker te kunnen presenteren.'
						+ ' '
						+  '</p>';

	} else {
	// next item
}

if	(array['SoortGoed'] == "Geheugenkaart"){
	content = content	+ ' '
	content = content	+ '<h3>Onderzoek en veiligstellen</h3>'

						+  '<p>'
						+  'Op ' + datumonderzoekStr + ' is de ' + array['SoortGoed'] + ' door mij veilig gesteld door gebruik te maken van ' + array['memtool'] + '.'
						+  '</p>';

					} else {
	// next item
}

if	(array['SoortGoed'] == "Harde schijf"){
	content = content	+ ' '
	content = content	+ '<h3>Onderzoek en veiligstellen</h3>'

						+  '<p>'
						+  'Op ' + datumonderzoekStr + ' is de ' + array['SoortGoed'] + ' door mij veilig gesteld door gebruik te maken van ' + array['memtool'] + '.'
						+  '</p>';

					} else {
	// next item
}

if	(array['SoortGoed'] == "USB stick"){
	content = content	+ ' '
	content = content	+ '<h3>Onderzoek en veiligstellen</h3>'

						+  '<p>'
						+  'Op ' + datumonderzoekStr + ' is de ' + array['SoortGoed'] + ' door mij veilig gesteld door gebruik te maken van ' + array['memtool'] + '.'
						+  '</p>';

					} else {
	// next item
}

if	(array['SoortGoed'] == "Datadrager"){
	content = content	+ ' '
	content = content	+ '<h3>Onderzoek en veiligstellen</h3>'

						+  '<p>'
						+  'Op ' + datumonderzoekStr + ' is de ' + array['SoortGoed'] + ' door mij veilig gesteld door gebruik te maken van ' + array['memtool'] + '.'
						+  '</p>';

					} else {
	// next item
}

if	(array['SoortGoed'] == "Laptop/Computer"){
	content = content	+ ' '
	content = content	+ '<h3>Onderzoek en veiligstellen</h3>'

						+  '<p>'
						+  'Op ' + datumonderzoekStr + ' is de ' + array['SoortGoed'] + ' door mij veilig gesteld door gebruik te maken van ' + array['memtool'] + '.'
						+  '</p>';

					} else {
	// next item
}

if	(array['SoortGoed'] == "Vluchtige gegevens (niet gebruiken)"){
	content = content	+ ' '
	content = content	+ '<h3>Onderzoek en veiligstellen</h3>'

						+  '<p>'
						+  'Op ' + datumonderzoekStr + ' is de ' + array['SoortGoed'] + ' door mij veilig gesteld door gebruik te maken van ' + array['memtool'] + '.'
						+  '</p>';

					} else {
	// next item
}




// memtool explain
//// Tableau TX1
if	(array['memtool'] == "Tableau"){
	content = content	+ ' '
	content = content	+ '<h3>Gebruik Tableau</h3>'

						+  '<p>'
						+  'Door mij is de Tableau TX1 van Guidance Software (OpenText) gebruikt om het goed op een forensische wijze veilig te stellen. Tableau is een hardwarematige oplossing om informatie op een forensische wijze vanaf een datadrager veilig te stellen. Deze beveiliging zorgt ervoor dat er tijdens het veiligstellen geen data geschreven kan worden naar de originele datadrager. De veiliggestelde informatie is gekopieerd naar een bewijsbestand voor verder onderzoek. Het bewijsbestand is vervolgens door mij verder onderzocht waarbij er informatie is gekopieerd vanuit het bewijsbestand door gebruik te maken van PhotoRec, versie 7.1.'
						+  '</p>';

					} else {
	// next item
}

//// Guymager
if	(array['memtool'] == "Guymager"){
	content = content	+ ' '
	content = content	+ '<h3>Gebruik Guymager</h3>'

						+  '<p>'
						+  'Door mij is de softwaretool Guymager gebruikt om het goed op een forensische wijze veilig te stellen door gebruik te maken van een Linux distributie, CAINE versie 9. Linux is een besturingssysteem net als Windows van Microsoft of Mac OS X van Apple. Guymager is een softwarematige oplossing om informatie op een forensische wijze vanaf een datadrager veilig te stellen. Deze beveiliging zorgt ervoor dat er tijdens het veiligstellen geen data geschreven kan worden naar de originele datadrager. De veiliggestelde informatie is gekopieerd naar een bewijsbestand voor verder onderzoek. Het bewijsbestand is vervolgens door mij verder onderzocht waarbij er informatie is gekopieerd vanuit het bewijsbestand door gebruik te maken van PhotoRec, versie 7.1.'
						+  '</p>';

					} else {
	// next item
}

///FTK imager
if	(array['memtool'] == "FTK imager"){
	content = content	+ ' '
	content = content	+ '<h3>Gebruik FTK imager</h3>'

						+  '<p>'
						+  'Door mij is de softwaretool FTK imager van AccessData gebruikt om het goed op een forensische wijze veilig te stellen. FTK imager is met behulp van een software- of hardwarematige schrijfbeveiliging gebruikt om op een forensische wijze vanaf een datadrager, informatie veilig te stellen. Deze beveiliging zorgt ervoor dat er tijdens het veiligstellen geen data geschreven kan worden naar de originele datadrager. De veiliggestelde informatie is gekopieerd naar een bewijsbestand voor verder onderzoek. Het bewijsbestand is vervolgens door mij verder onderzocht waarbij er informatie is gekopieerd vanuit het bewijsbestand door gebruik te maken van PhotoRec, versie 7.1.'
						+  '</p>';

					} else {
	// next item
}




/////testing!!!!!
if	((array['OVJname'] == "##############")||(array['OVJname'] == "test")){
	content = content	+ ' '
	content = content	+ '<h3>testje</h3>'

						+  '<p>'
						+ 'Dit is een testje voor ############## en OvJ Test!!!.'
						+  '</p>'
						+ '<br>';
					}else{
 //next item
}



//gebruik van Tableau en photorec
if	((array['fortool'] == "Ufed Touch van Cellebrite met Tableau")||(array['fortool'] == "Ufed4PC van Cellebrite met Tableau")||(array['fortool'] == "Tableau")){
	content = content	+ ' '
	content = content	+ '<h3>Datadrager</h3>'

						+  '<p>'
						+ 'Het goed was tevens voorzien van een datadrager, een ' + capitalizeFirstLetter ( array['extmemtype'] ) + '. Dit goed is door mij forensisch veiliggesteld met ' + array['memtool'] +', voorzien van een hardwarematige schrijfbeveiliging. Deze beveiliging zorgt ervoor dat er tijdens het veiligstellen geen data geschreven kan worden naar de originele datadrager. '
						+ 'De informatie is weggeschreven in een forensische image en vervolgens door mij onderzocht waarbij er informatie is gekopieerd vanuit de forensische image van de goed door gebruik te maken van PhotoRec, versie 7.1.'
						+  '</p>'
						+ '<br>'
	content = content 	+ '<table width="100%">'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">MD5 hashwaarde: </td>'
						+ 		'<td>' + array['md5'] + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">SHA hashwaarde: </td>'
						+ 		'<td>' + array['sha'] + '</td>'
						+ 	'</tr>'
						+ '</table>'
						+ '<br>'
						+ 'De hashwaarde, die is berekend door ' + array['memtool'] +', is een digitale vingerafdruk van een bestand. Een digitale vingerafdruk bestaat uit een reeks getallen (van vaste lengte) die berekend wordt aan de hand van, en die kenmerkend is voor, de inhoud van een bestand. De berekening geschiedt door middel van een hashalgoritme. Bij gebruik van een goed hashalgoritme is het bijzonder moeilijk om twee verschillende bestanden te vinden die gelijke bestandskenmerken opleveren.'
						+ '<br>';
					}else{
	// next item
}

if	(array['fortool'] == "Guymager (niet gebruiken)"){
	content = content	+ ' '
	content = content	+ '<h3>Datadrager</h3>'

						+  '<p>'
						+ 'Het goed is een datadrager, een ' + capitalizeFirstLetter ( array['extmemtype'] ) + '. Dit goed is door mij forensisch veiliggesteld met ' + array['memtool'] +', voorzien van een softwarematige schrijfbeveiliging. Deze beveiliging zorgt ervoor dat er tijdens het veiligstellen geen data geschreven kan worden naar de originele datadrager.  Het goed is door mij veiliggesteld door gebruik te maken van een Linux distributie, CAINE versie 9. Linux is een besturingssysteem net als Windows van Microsoft of Mac OS X van Apple.'
						+ 'De informatie is weggeschreven in een forensische image en vervolgens door mij onderzocht waarbij er informatie is gekopieerd vanuit de forensische image van het goed door gebruik te maken van PhotoRec, versie 7.1.'
						+  '</p>'
						+ '<br>'
	content = content 	+ '<table width="100%">'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">MD5 hashwaarde: </td>'
						+ 		'<td>' + array['md5'] + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">SHA hashwaarde: </td>'
						+ 		'<td>' + array['sha'] + '</td>'
						+ 	'</tr>'
						+ '</table>'
						+ '<br>'
						+ 'De hashwaarde, die is berekend door ' + array['memtool'] +', is een digitale vingerafdruk van een bestand. Een digitale vingerafdruk bestaat uit een reeks getallen (van vaste lengte) die berekend wordt aan de hand van, en die kenmerkend is voor, de inhoud van een bestand. De berekening geschiedt door middel van een hashalgoritme. Bij gebruik van een goed hashalgoritme is het bijzonder moeilijk om twee verschillende bestanden te vinden die gelijke bestandskenmerken opleveren.'
						+ '<br>';
					} else {
	// next item
}





// Datum en tijd onderzoek
	content = content	+ ' '
						+ '<h3>Onderzoek datum & tijd</h3>'

						+  '<p>'
						+  'Het goed is door mij, verbalisant, gecontroleerd op de datum en tijd. ';

if 	(array['verschildatumtijd'] == "0 minuten") {
	content = content 	+  'Hierbij zag ik, verbalisant, dat de ingestelde datum en tijd overeenkwam met de op dat moment geldige datum en tijd. '
	content = content	+ ' '
	content = content 	+ '<table width="100%">'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Datum en tijd</td>'
						+ 		'<td>' + werkelijkedatumtijdStr1 + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Datum en tijd van het goed</td>'
						+ 		'<td>' + recorderdatumtijdStr + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Timezone</td>'
						+ 		'<td>' + array['TZdata'] + '</td>'
						+ 	'</tr>'
						+ '</table>';

					} else {
	content = content 	+ 'Hierbij zag ik dat de datum en tijd op dat moment stond ingesteld op: '	+ recorderdatumtijdStr + ' uur. '
						+ 'De op dat moment geldige datum en/of tijd bleek echter te zijn: ' + werkelijkedatumtijdStr1 + ' uur. '
						+ 'Gelet op vorenstaande bleek mij dat de ingestelde tijd op het goed derhalve '
						+ array['verschildatumtijd'] + ' ' + voorachterloopStr + ' op de daadwerkelijke tijd. '
						+  '</p>';
	content = content	+ ' '
	content = content 	+ '<table width="100%">'
						+ 	'<tr>'
						+ 		'<td class="grey"  width="20%">Datum en tijd</td>'
						+ 		'<td>' + werkelijkedatumtijdStr1 + '</td>'
						+ 	'</tr>'
						+ 	'<tr>'
						+		'<td class="grey" width="20%">Datum en tijd van het goed</td>'
						+ 		'<td>' + recorderdatumtijdStr + '</td>'
						+ 	'</tr>'
						+ '</table>';
	}


////	overgebracht naar het bureau
// 		ombuigen naar
//		......
	if 	(array['locatieveiligstellen'] == "Overgebracht naar bureau") {
		content = content	+ '<h3>Vervolgonderzoek aan bureau</h3>'
		content = content 	+  'Het bleek ter plaatse niet of niet direct mogelijk de gevraagde beelden te exporteren. '
							+  'In overleg met het aanvragende onderzoeksteam is het goed door mij, verbalisant,'
							+  'ter plaatse losgekoppeld en overgebracht naar het (politie) bureau in Philipsburg voor nader onderzoek. ';

		content = content	+ '<h3>Opnieuw onderzoek datum & tijd</h3>'

							+  '<p>'
							+  'Het goed is door mij, verbalisant, gecontroleerd op de ingestelde systeemdatum en tijd. ';

		if 	(array['verschildatumtijd_1'] == "0 minuten") {
		content = content 	+  'Hierbij zag ik, verbalisant, dat de ingestelde datum en tijd overeenkwam met de op dat moment geldige datum en tijd. '
		}

		else {
		content = content 	+ 'Hierbij zag ik dat de datum en tijd van het goed op dat moment stond ingesteld op: '	+ recorderdatumtijd_1Str + '. '
							+ 'De op dat moment geldige datum en/of tijd bleek echter te zijn: ' + werkelijkedatumtijd_1Str + '. '
							+ 'Gelet op vorenstaande bleek mij dat de ingestelde tijd op het goed derhalve '
							+ array['verschildatumtijd_1'] + ' ' + voorachterloopStr1 + ' op de daadwerkelijke tijd. '
							+  '</p>';
		}
	}



	content = content 	+ 	'<h3>Veiligstellen</h3>'
						+ 	'<p>'

///// naar bureau en geen opnames.
// ombuigen naar:
//  .....
if 	(array['locatieveiligstellen'] != "Overgebracht naar bureau") {
	if 	(array['locatieveiligstellen'] == "Ter plaatse, geen opnames aanwezig") {
	content = content 	+  'Het bleek niet mogelijk informatie veilig te stellen. '
						+  'Nader onderzoek wees namelijk uit dat er binnen eerder gevraagde periode geen opnameactiviteiten '
						+  'hebben plaatsgevonden, lopende opnamen zijn stop gezet of dat de gevraagde data '
						+  'reeds was overschreven door het videobewakingssysteem. ';
	}
	else if (array['locatieveiligstellen'] == "Extractie gelukt") {
	content = content 	+  'Vervolgens is door mij, verbalisant, de op bovenstaande wijze verkregen informatie ge&euml;xporteerd naar een extern opslagmedium. '
		if 	(array['verschildatumtijd'] != "0 minuten") {
		content = content 	+  'Gelet op het tijdsverschil tussen de werkelijke datum en tijd en de datum en tijd op het goed, moet er bij de analyse van de informatie mogelijk rekening mee moeten worden gehouden.'
		}
	}
}videobewakingssysteemvideo


//// EXTRACTIE WEL OF NIET GELUKT?
//	Extractie mislukt
if 	(array['locatieveiligstellen'] == "Extractie mislukt") {
	content = content 	+  'Het bleek niet mogelijk om het goed veilig te stellen.'
	content = content	+ 	'</p>';
	}else{
// next item
}

///	Extractie mislukt, met fotorapportage
if 	(array['locatieveiligstellen'] == "Extractie mislukt, met fotorapportage") {
	//	if 	(array['opnamesaanwezig'] == "Geen informatie geen geheugen") {
		content = content 	+  'Het bleek niet mogelijk om het goed veilig te stellen. Door mij is echter wel een fotorapportage gemaakt van de voor het onderzoek relevante informatie'
		content = content	+ 	'</p>';
		}else{
	// next item
}


////Extractie gelukt, met fotorapportage
	///	Extractie gelukt, met fotorapportage
	if 	(array['locatieveiligstellen'] == "Extractie gelukt, met fotorapportage") {
		//	if 	(array['opnamesaanwezig'] == "Geen informatie geen geheugen") {
			content = content 	+  'Buiten de extractie van het goed is er aanvullend nog een fotorapportage gemaakt door mij met de voor het onderzoek relevante informatie'
			content = content	+ 	'</p>';
			}else{
		// next item
	}



//if 	(array['locatieveiligstellen'] == "Extractie mislukt") {
//	if 	(array['opnamesaanwezig'] == "Geen informatie geen geheugen") {
//	content = content 	+  'Het bleek niet mogelijk om het goed veilig te stellen. '
//	}
//	else if (array['opnamesaanwezig'] == "Geen informatie wel geheugen") {
//	content = content 	+  'Vervolgens zijn door mij, verbalisant, bovengenoemde informatie van het bewijsbestand ge&euml;xporteerd naar een extern opslagmedium.  ';
//	}
//}
//	content = content	+ 	'</p>';






//if (array['simcode'] == "Ja, bekend") {
//		content = content	+ 'De simkaart was voorzien van een bekende pin code. Hierdoor kon de simkaart uitgelezen worden'
//											+ 'met ' + capitalizeFirstLetter(array['ufedtool']) + '.'
//											+  '</p>';
//		}else if (array['simcode'] == "Ja, onbekend") {
//												+ 'De simkaart was voorzien van een onbekende pin code. Hierdoor kon de simkaart niet uitgelezen worden.'
//		}else if (array['simcode'] == "nee, niet actief") {
//												+ 'De simkaart was niet voorzien van een pin code. Hierdoor kon de simkaart uitgelezen worden'
//												+ 'met ' + capitalizeFirstLetter(array['ufedtool']) + '.'
//												+  '</p>';
//				}else{
//		}



if	((array['SoortGoed'] == "Smartphone met Simkaart en microSD")||(array['SoortGoed'] == "Smartphone met Simkaart")||(array['SoortGoed'] == "Simkaart")||(array['SoortGoed'] == "Tablet met Simkaart en microSD")||(array['SoortGoed'] == "Tablet met Simkaart")||(array['OVJname'] == "test")){

					if (array['simcode'] == "Ja, onbekend") {
						content = content + 	'<h3>Simkaartcode</h3>'
															+ 	'<p>'
						content = content	+ 'De simkaart was voorzien van een onbekende pin code. Hierdoor kon de simkaart niet uitgelezen worden.'
						content = content	+  '</p>';


					}else if (array['simcode'] == "Ja, bekend") {
						content = content + 	'<h3>Simkaartcode</h3>'
															+ 	'<p>'
						content = content	+ 'De simkaart was voorzien van een bekende pin code. Hierdoor kon de simkaart uitgelezen worden'
						content = content	+  '</p>';
						content = content + 	'<h3>Simkaart veiligstellen</h3>'
															+ 	'<p>'
															+  'De simkaart is door mij uitgelezen door gebruik te maken van ' + array['ufedtool'] + '.'
															+  ' ' + capitalizeFirstLetter(array['ufedtool']) + ' extraheerd informatie uit de simkaart om het vervolgens aan de onderzoeker te kunnen presenteren.'
						content = content +  'Vervolgens zijn door mij, verbalisant, bovengenoemde informatie van het bewijsbestand ge&euml;xporteerd naar een extern opslagmedium.  ';
						content = content	+  '</p>';


					}else (array['simcode'] == "nee, niet actief") {
						content = content + 	'<h3>Simkaartcode</h3>'
															+ 	'<p>'
						content = content	+ 'De simkaart was niet voorzien van een pin code. Hierdoor kon de simkaart uitgelezen worden'
						content = content	+  '</p>';
						content = content + 	'<h3>Simkaart veiligstellen</h3>'
															+ 	'<p>'
															+  'De simkaart is door mij uitgelezen door gebruik te maken van ' + array['ufedtool'] + '.'
															+  ' ' + capitalizeFirstLetter(array['ufedtool']) + ' extraheerd informatie uit de simkaart om het vervolgens aan de onderzoeker te kunnen presenteren.'
						content = content +  'Vervolgens zijn door mij, verbalisant, bovengenoemde informatie van het bewijsbestand ge&euml;xporteerd naar een extern opslagmedium.  ';
						content = content	+  '</p>';
				}else{
}




/// VERSTREKKING DATA
if 	(array['locatieveiligstellen'] == "Extractie gelukt") {
	var overdracht = 	 	 	'<h3>Vertrekking veiliggestelde data</h3>'
						+ 	'<p>'
						+ 	'De (kopie&euml;n van) de veiliggestelde data, '
						+	'worden tijdelijk bewaard op een server, in gebruik bij de afdeling Digitale Recherche en zijn '
						+	'voor verder onderzoek reeds overgedragen middels een extern opslagmedium aan een '
						+ 	'medewerker van het aanvragende onderzoeksteam.'
						+ 	'</p>';
			}else{
	// next item
}


if 	(array['locatieveiligstellen'] != "Overgebracht naar bureau") {
	if (array['locatieveiligstellen'] == "Extractie gelukt") {
	content = content + overdracht;
	}
}
if 	(array['locatieveiligstellen'] == "Overgebracht naar bureau") {
	if (array['opnamesaanwezig'] == "Ja, opnames aanwezig") {
	content = content + overdracht;
	}
}


	content = content 	+ 	'<p>'
						+ 	'Waarvan door mij is opgemaakt dit proces-verbaal, dat ik sloot en ondertekende op '
						+ 	lowercaseFirstLetter ( array['eedofbelofte'] ) + ' op ' + pvdatumtijd_1Str + ' uur te Philipsburg. '


	content = content 	+ '<br>'
						+ '<table width="30%">'
						+ 	'<tr>'
						+ 		'<td class="white"  width="15%">Verbalisant</td>'
						+ 		'<td class="white"  width="15%">Gezien</td>'
						+ 	'</tr>'
						+ '<br>'
						+ '<br>'
						+ '<br>'
						+ 	'<tr>'
						+ 		'<td class="white"  width="15%">' + array['verbalisantnaam'] + '</td>'
						+ 		'<td class="white"  width="15%">J. Muller-Rijna</td>'
						+ 	'</tr>'
						+ 	'</table>';

	content = content 	+ '<table id="hrdftrtbl" border=1 cellspacing=0 cellpadding=0><tr><td>'
						+	'<div style="mso-element:footer" id="f1"> '
						+ 	'	<p class="MsoFooter">'
						+	'   	<table width="100%" border="0" cellspacing="0" cellpadding="0">'
						+   '    	   <tr> '
						+   ' 				<td align="left" class="footer">'
						+	'                   Documentcode: ' + documentcodeStr
                        + 	'   			</td> '
						+   ' 				<td align="right" class="footer">'
						+	'                   Pagina <g:message code="offer.letter.page.label"/> <span style="mso-field-code: PAGE "></span> van <span style="mso-field-code: NUMPAGES "></span> '
                        + 	'   			</td> '
						+   '          </tr> '
						+	'       </table> '
						+	'  </p>'
						+	'</div>';
						+	'</td> </tr> </table>';

	content = content 	+	'</div> ';

var htmlBody = '<body>' + content  + '</body>';

var htmlFooter = '</html>';

var htmlString = htmlhead + htmlBody + htmlFooter;

// for (var i = 0; i < keys.length; i++) {
//	 keyname = keys[i][0];
//	 if (array[keyname] == '<font color="red">Niet opgegeven</font>') {
//	 	array[keyname] = 'Niet opgegeven';
//	 }
// }

var byteNumbers = new Uint8Array(htmlString.length);
for (var i = 0; i < htmlString.length; i++) {
	byteNumbers[i] = htmlString.charCodeAt(i);
}

var blob = new Blob([byteNumbers], {type: 'text/html'});
saveAs(blob, array['onderzoeksnummer'] + '-' + array['volgnummer'] + '-' + array['naamonderzoek']+ '.' +  array['verbalisantdienstnummer'] + '-' + array['werkelijkedatumtijd'] + '-PV.doc');

}
