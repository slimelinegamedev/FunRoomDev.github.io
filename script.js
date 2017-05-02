//var audio = new Audio('audio_file.mp3');
//audio.play();

var currency = ["CurrencyDuplicate.png", "CurrencyAddModToRare.png", "CurrencyModValues.png", "CurrencyPassiveSkillRefund.png", "CurrencyGemQuality.png", "CurrencyRerollRare.png", "CurrencyVaal.png", "CurrencyUpgradeMagicToRare.png", "CurrencyConvertToNormal.png", "CurrencyMapQuality.png", "CurrencyUpgradeToRare.png", "CurrencyImplicitMod.png", "CurrencyRerollSocketLinks.png", "CurrencyUpgradeRandomly.png", "CurrencyFlaskQuality.png", "CurrencyRerollSocketColours.png", "CurrencyRerollSocketNumbers.png", "CurrencyRerollMagic.png", "CurrencyUpgradeToMagic.png", "CurrencyAddModToMagic.png", "CurrencyWeaponQuality.png", "CurrencyArmourQuality.png", "CurrencyIdentification.png", "CurrencyPortal.png", "CurrencyIdentificationFragment.png", "CurrencyUpgradeToMagicShard.png", "CurrencyRerollMagicShard.png", "CurrencyUpgradeToRareShard.png", "Deck.png", "AtlasRadiusRed.png", "AtlasRadiusYellow.png", "AtlasRadiusWhite.png", "SealRed.png", "SealYellow.png", "SealWhite.png", "AtlasDowngrade.png", "CurrencyCoin.png", "SilverObol.png", "ProphecyOrbRed.png", "Greed1.png", "Greed2.png", "Greed3.png", "Greed4.png", "Greed5.png", "Greed6.png", "Greed7.png", "Terror1.png", "Insanity1.png", "Horror1.png", "Madness1.png", "EssenceCorrupt.png", "BreachShardChaos.png", "BreachShardPhysical.png", "BreachShardLightning.png", "BreachShardFire.png", "BreachShardCold.png", "BreachUpgraderChaos.png", "BreachUpgraderPhysical.png", "BreachUpgraderLightning.png", "BreachUpgraderFire.png", "BreachUpgraderCold.png", "CurrencyImprintOrb.png", "CurrencyImprint.png", "CurrencyRhoaFeather.png"];

var currencyName = ["Mirror of Kalandra", "Exalted Orb", "Divine Orb", "Orb of Regret", "Gemcutter's Prism", "Chaos Orb", "Vaal Orb", "Regal Orb", "Orb of Scouring", "Cartographer's Chisel", "Orb of Alchemy", "Blessed Orb", "Orb of Fusing", "Orb of Chance", "Glassblower's Bauble", "Chromatic Orb", "Jeweller's Orb", "Orb of Alteration", "Orb of Transmutation", "Orb of Augmentation", "Blacksmith's Whetstone", "Armourer's Scrap", "Scroll of Wisdom", "Portal Scroll", "Scroll Fragment", "Transmutation Shard", "Alteration Shard", "Alchemy Shard", "Stacked Deck", "Master Cartographer's Sextant", "Journeyman Cartographer's Sextant", "Apprentice Cartographer's Sextant", "Master Cartographer's Seal", "Journeyman Cartographer's Seal", "Apprentice Cartographer's Seal", "Unshaping Orb", "Perandus Coin", "Silver Coin", "Prophecy", "Whispering Essence of", "Muttering Essence of", "Weeping Essence of", "Wailing Essence of", "Screaming Essence of", "Shrieking Essence of", "Deafening Essence of", "Essence of Hysteria", "Essence of Insanity", "Essence of Horror", "Essence of Delirium", "Remnant of Corruption", "Splinter of Chayula", "Splinter of Uul-Netol", "Splinter of Esh", "Splinter of Xoph", "Splinter of Tul", "Blessing of Chayula", "Blessing of Uul-Netol", "Blessing of Esh", "Blessing of Xoph", "Blessing of Tul", "Eternal Orb", "Imprint", "Albino Rhoa Feather"];

var currencyPreset = [{ar:"255", ag:"255", ab:"255", aa:"255", br:"255", bg:"0", bb:"0", ba:"255", b:"45", cr:"255", cg:"0", cb:"0", ca:"255", c:"1", s:"6", sl:"300"},
{ar:"249", ag:"150", ab:"50", aa:"255", br:"0", bg:"0", bb:"0", ba:"255", b:"42", cr:"0", cg:"0", cb:"0", ca:"255", c:"1", s:"2", sl:"300"},
{ar:"213", ag:"159", ab:"0", aa:"255", br:"0", bg:"0", bb:"0", ba:"255", b:"42", cr:"0", cg:"0", cb:"0", ca:"255", c:"1", s:"2", sl:"300"},
{ar:"0", ag:"0", ab:"0", aa:"255", br:"210", bg:"178", bb:"135", ba:"255", b:"40", cr:"213", cg:"159", cb:"100", ca:"200", c:"1", s:"0", sl:"0"},
{ar:"0", ag:"0", ab:"0", aa:"255", br:"170", bg:"158", bb:"130", ba:"255", b:"36", cr:"190", cg:"178", cb:"135", ca:"110", c:"1", s:"0", sl:"0"}];
//This will be the place for general stuffs
//Like links, sockets, and other stuffs
//Also color schemes option will be available to change the filter presets in one click
//People might want to stick with their previous filter's color scheme and sounds.
//Neversink's filter is being tested for now.
//This filter only uses the color scheme of Neversink, but the filter code/grouping will differ.
document.write("<table id='Table1'>");
document.write("</table>");

document.write("hello");

//The Currency Menu- All currencies are here including those perandus, essence, prophecy, breach league items.
//Now handling essences by tiers only to avoid long listing of currencies
document.write("<table id='Table2'>");
document.write("<tr><td></td><td>Item</td><td>Filter Presets</td><td>Preview</td></tr>");
for (i = 0; i < currencyName.length; i++) {
    document.write('<tr>');
    document.write('<td><input type="checkbox" id="currency' + i + '_display" name="currency' + i + '_D" onclick="toggleShow(' + i + ')" checked><label id = "currency' + i + '_label" for="currency' + i + '_display">Show</label>');
    document.write('<td><table><td><img src="Currency/' + currency[i] + '" height="30" width="30"></td></table></td>');
    document.write('<td>');
    for (j = 1; j <= currencyPreset.length; j++){
      document.write('<input type="radio" id="currency' + i + '_' + j + '" name="currency' + i + '" value="' + j + '" onclick="update(' + i + ',' + (j-1) + ');"><label for="currency' + i + '_' + j + '">' + j + '</label>');
    }
    //document.write('<input type="radio" id="currency' + i + '_1" name="currency' + i + '" value="1" onclick="update1(' + i + ');"><label for="currency' + i + '_1">1</label>');
    //document.write('<input type="radio" id="currency' + i + '_2" name="currency' + i + '" value="2" onclick="update2(' + i + ');"><label for="currency' + i + '_2">2</label>');
    //document.write('<input type="radio" id="currency' + i + '_3" name="currency' + i + '" value="3" onclick="update3(' + i + ');"><label for="currency' + i + '_3">3</label>');
    //document.write('<input type="radio" id="currency' + i + '_4" name="currency' + i + '" value="4" onclick="update4(' + i + ');"><label for="currency' + i + '_4">4</label>');
    //document.write('<input type="radio" id="currency' + i + '_5" name="currency' + i + '" value="5" onclick="update5(' + i + ');"><label for="currency' + i + '_5">5</label>');
    //document.write('<input type="radio" id="currency' + i + '_6" name="currency' + i + '" value="6" onclick="update6(' + i + ');"><label for="currency' + i + '_6">6</label>');
    //document.write('<input type="radio" id="currency' + i + '_7" name="currency' + i + '" value="7" onclick="update7(' + i + ');"><label for="currency' + i + '_7">7</label>');
    //document.write('<input type="radio" id="currency' + i + '_8" name="currency' + i + '" value="8" onclick="update8(' + i + ');"><label for="currency' + i + '_8">8</label>');
    //document.write('<input type="radio" id="currency' + i + '_9" name="currency' + i + '" value="9" onclick="update9(' + i + ');"><label for="currency' + i + '_9">9</label>');
    //document.write('<input type="radio" id="currency' + i + '_10" name="currency' + i + '" value="10" onclick="update10(' + i + ');"><label for="currency' + i + '_10">10</label>');
    document.write('<td><table><td name="name" id="currency' + i + '_name">' + currencyName[i] + '</td></table></td>');
    document.write('</td><td>');
    //document.write('<input type="checkbox" id="currency' + i + 'HL" name="HL" value="Y" onclick="updateH(' + i + ');"><label for="currency' + i + 'HL">Highlight</label>');
    document.write('</td></tr>');
}

document.write("hello");
document.write("</table>");
//This will be the place for non-unique crafting bases drops.
//Users would be able to choose which Tier 1 items to highlight and which to not show.
//Only for late game farming, which will be of item level 60+ here.
document.write("<table id='Table3'>");
document.write("</table>");
//This will be the place for unique items
//A sub menu will be available since there are 649 unique items in total
//Options are the item lists are sorted in the same order as in poe.ninja
//so it would be more accurate for the filter to show the correct tier of colors.
//The chance orb recipe is also available here for people who want to do the 5-chance-orb recipe.
document.write("<table id='Table4'>");
document.write("</table>");
//The Divination card corner
//Pretty much the same as in uniques corner
//Update order with poe.ninja for accuracy
document.write("<table id='Table5'>");
document.write("</table>");
//Maps
//Well, unique maps might go to the uniques corner so this part could be short.
//Might as well only allow sort in tiers instead of all 126 maps to make it simple.
//We'll see
document.write("<table id='Table6'>");
document.write("</table>");
//item recipe
//the chaos recipe, gemcutter recipe, chisel recipe, glass recipe, chrom recipe will go here.
//Choose which to show and which to not show
//Choose which level to hide those bulky recipies like chisels
document.write("<table id='Table7'>");
document.write("</table>");
//The levelling part.
//Choose what you want to see while levelling
//It is quite useless to see wands when you play two hand axe berserker, right?
//Customize here to perfectly fit your levelling experience
//Super useful for leaguestarter builds.
document.write("<table id='Table8'>");
document.write("</table>");
//Anything missing will be added here

//Page Changing function since there are too many items in this damn game
function menu(val){
  for(i=1; i<=8; i++){
    document.getElementById("Table" + i).style.display = 'none';
  }
  document.getElementById("Table" + val).style.display = 'block';

}

//Toggling Show/Hide Function in filter
function toggleShow(val){
  if (document.getElementById('currency' + val + '_display').checked){
    document.getElementById('currency' + val + '_label').innerHTML = 'Show';
    document.getElementById('currency' + val + '_name').style.display = 'block';
    document.getElementById('currency' + val + '_label').style.backgroundColor = '#888';
  }
  else {
    document.getElementById('currency' + val + '_label').innerHTML = 'Hide';
    document.getElementById('currency' + val + '_name').style.display = 'none';
    document.getElementById('currency' + val + '_label').style.backgroundColor = '#666';
  }
}


//These are to be combined into update(val, val) once the filter preset class is created
function update(val, val2){
  document.getElementById('currency' + val + '_name').style.borderWidth = currencyPreset[val2].c + "px";
  document.getElementById('currency' + val + '_name').style.backgroundColor = "rgba("+currencyPreset[val2].ar+","+currencyPreset[val2].ag+","+currencyPreset[val2].ab+","+(currencyPreset[val2].aa/255)+")";
  document.getElementById('currency' + val + '_name').style.color = "rgba("+currencyPreset[val2].br+","+currencyPreset[val2].bg+","+currencyPreset[val2].bb+","+(currencyPreset[val2].ba/255)+")";
  document.getElementById('currency' + val + '_name').style.borderColor = "rgba("+currencyPreset[val2].cr+","+currencyPreset[val2].cg+","+currencyPreset[val2].cb+","+(currencyPreset[val2].ca/255)+")";
  document.getElementById('currency' + val + '_name').style.fontSize = (currencyPreset[val2].b/2) + "px";
}

function updateH(val){
  document.getElementById('currency' + val + '_name').style.borderColor = "#AA9E82";
}

function saveTextAsFile() {
    var textToSave = "";
    for (i = 0; i < currency.length; i++) {
        textToSave = textToSave + "Show\r\n";
        textToSave = textToSave + "Class Currency\r\n";
        textToSave = textToSave + "BaseType \"" + currencyName[i] + "\"\r\n";
        textToSave = textToSave + "SetFontSize 45" + "\r\n";
        textToSave = textToSave + "SetTextColor 255 0 0 255" + "\r\n";
        textToSave = textToSave + "SetBorderColor 255 0 0 255" + "\r\n";
        textToSave = textToSave + "SetBackgroundColor 255 255 255 255" + "\r\n";
        textToSave = textToSave + "PlayAlertSound 6 300" + "\r\n";
        textToSave = textToSave + "\r\n";
    }
    var textToSaveAsBlob = new Blob([textToSave], {
        type: "text/plain"
    });
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = "Filter.filter";
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}

function loadFileAsText() {
    var fileToLoad = document.getElementById("fileToLoad").files[0];
    var fileReader = new FileReader();
    fileReader.onload = function (fileLoadedEvent) {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        textFromFileSplit = textFromFileLoaded.split("\r\n");
      }
    fileReader.readAsText(fileToLoad, "UTF-8");
}
