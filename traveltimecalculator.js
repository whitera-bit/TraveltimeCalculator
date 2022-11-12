<script type="text/javascript">/* ############## REISEZEITBERECHNER ##################

Code by White_Rabbit, https://epic.quodvide.de/member.php?action=profile&uid=2 */


function travelConverter() {
  var input = document.getElementById("input").value;

  /* Fortbewegungsmittel */

  var method = document.getElementById("method").value;
  var calcTime;

  /* Auswahl Fortbewegungsmittel */

  if (method === "konvoi") {
    calcTime = 22; /* Wie viele Minuten pro Meile es dauert */
  } else if (method === "pferd") {
    calcTime = 12;
  } else if (method === "fuss") {
    calcTime = 18;
  } else if (method === "flussauf") {
    calcTime = 22;
  } else if (method === "fussab") {
    calcTime = 6;
  }

  /* Zusazubedingungen */

  var streets = document.getElementById("streets");
  if (streets.checked) {
    var calcStreets = 4; /* Der Faktor, um den die Zeit pro Meile beeinflusst wird, in der Kalkulation wird mit + oder - entschieden, ob es die Reisezeit erhöht oder vermindert */
  } else {
    var calcStreets = 0; /* Wenn die Checkbox nicht ausgewählt ist, bleibt der Parameter 0, nicht ändern! */
  }

  var mountains = document.getElementById("mountains");
  if (mountains.checked) {
    var calcMountains = 12;
  } else {
    var calcMountains = 0;
  }

  var practised = document.getElementById("practised");
  if (practised.checked) {
    var calcPractised = 6;
  } else {
    var calcPractised = 0;
  }

  var wilderness = document.getElementById("wilderness");
  if (wilderness.checked) {
    var calcWilderness = 8;
  } else {
    var calcWilderness = 0;
  }

  var weight = document.getElementById("weight");
  if (weight.checked) {
    var calcWeight = 6;
  } else {
    var calcWeight = 0;
  }

  /* The Maths */

  var calcInput =
    (input *
      (calcTime -
        calcStreets + /* Die Parameter von oben, hier ggf. neue ergänzen. + = die Reise dauert länger, - = es geht schneller */
        calcMountains +
        calcWilderness +
        calcWeight -
        calcPractised)) /
    1444;

  document.getElementById("result").innerHTML = (
    Math.round(calcInput * 10) / 10 /* Aufrunden auf eine Dezimalstelle, nicht ändern!*/
  ).toFixed(1);
}
</script>
