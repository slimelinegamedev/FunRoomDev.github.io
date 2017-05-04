//var audio = new Audio('audio_file.mp3');
//audio.play();
var item;
var itemName;
var itemDefault;
var itemPreset;

item = getImage(2,1);
itemName = getName(2,1);
itemDefault = getDefault(2,1);
itemPreset = getPreset();

//This will be the place for general stuffs
//Like links, sockets, and other stuffs
//Also color schemes option will be available to change the filter presets in one click
//People might want to stick with their previous filter's color scheme and sounds.
//Neversink's filter is being tested for now.
//This filter only uses the color scheme of Neversink, but the filter code/grouping will differ
document.write("<span id='Table1'>");
document.write("<table id='Table1_1'>");
document.write("<tr><td></td><td></td><td>Filter Presets</td><td>Preview</td></tr>");
document.write('<tr><td><input type="checkbox" id="d11" onclick="toggle(11)" checked><label id="s11" for="d11">Show</label>');
document.write('<td><table><td>Six-Linked Items</td></table></td>');
document.write('<td>');
for (j = 0; j < itemPreset.length; j++){
  document.write('<input type="radio" id="c11'+j+'" name = "sixLink" onclick="update(11,' + j + ')"><label for="c11'+j+'">' + (j+1) + '</label>');
}
document.write('</td><td><table><td name="name" id="n11">Vaal Regalia</td></table></td></tr>');

document.write('<tr><td><input type="checkbox" id="d12" onclick="toggle(12)" checked><label id="s12" for="d12">Show</label>');
document.write('<td><table><td>Six-Socketed Items</td></table></td><td>');
for (j = 0; j < itemPreset.length; j++){
  document.write('<input type="radio" id="c12'+j+'" name = "sixSocket" onclick="update(12,' + j + ')"><label for="c12'+j+'">' + (j+1) + '</label>');
}
document.write('</td><td><table><td name="name" id="n12">Vaal Regalia</td></table></td></tr>');

document.write('<tr><td><input type="checkbox" id="d13" onclick="toggle(13)" checked><label id="s13" for="d13">Show</label>');
document.write('<td><table><td>Five-Linked Items</td></table></td><td>');
for (j = 0; j < itemPreset.length; j++){
  document.write('<input type="radio" id="c13'+j+'" name = "fiveLink" onclick="update(13,' + j + ')"><label for="c13'+j+'">' + (j+1) + '</label>');
}
document.write('</td><td><table><td name="name" id="n13">Vaal Regalia</td></table></td></tr>');
document.write("</table>");
document.write("</span>");

//The currency Menu- All currencies are here including those perandus, essence, prophecy, breach league items.
//Now handling essences by tiers only to avoid long listing of currencies
/////General Currency

document.write("<span id='Table2'>");
document.write("<table id='Table2_1'>");
document.write("<tr><td></td><td>Item</td><td>Filter Presets</td><td>Preview</td></tr>");
for (i = 0; i < getName(2,1).length; i++) {
    document.write('<tr>');
    document.write('<td><input type="checkbox" id="d2_1_' + i + '" onclick="toggle(\'2_1_' + i + '\')" checked><label id = "s2_1_' + i + '" for="d2_1_' + i + '">Show</label>');
    document.write('<td><table><td><img src="currency/' + getImage(2,1)[i] + '" height="30" width="30"></td></table></td>');
    document.write('<td>');
    for (j = 0; j < itemPreset.length; j++){
      document.write('<input type="radio" id="c2_1_' + i + "_" + j + '" name="c2_1_' + i + '" value="' + j + '" onclick="update(\'2_1_' + i + '\',' + j + ');"><label for="c2_1_' + i + "_" + j + '">' + (j+1) + '</label>');
    }
    document.write('<td><table><td name="name" id="n2_1_' + i + '">' + getName(2,1)[i] + '</td></table></td>');
    document.write('</td><td>');
    //document.write('<input type="checkbox" id="item' + i + 'HL" name="HL" value="Y" onclick="updateH(' + i + ');"><label for="item' + i + 'HL">Highlight</label>');
    document.write('</td></tr>');
}
document.write("</table>");
document.write("<table id='Table2_2'><tr><td></td><td>Item</td><td>Filter Presets</td><td>Preview</td></tr>");
for (i = 0; i < getName(2,2).length; i++) {
    document.write('<tr><td><input type="checkbox" id="d2_2_' + i + '" onclick="toggle(\'2_2_' + i + '\')" checked><label id = "s2_2_' + i + '" for="d2_2_' + i + '">Show</label>');
    document.write('<td><table><td><img src="currency/' + getImage(2,2)[i] + '" height="30" width="30"></td></table></td><td>');
    for (j = 0; j < itemPreset.length; j++){
      document.write('<input type="radio" id="c2_2_' + i + "_" + j + '" name="c2_2_' + i + '" value="' + j + '" onclick="update(\'2_2_' + i + '\',' + j + ');"><label for="c2_2_' + i + "_" + j + '">' + (j+1) + '</label>');
    }
    document.write('<td><table><td name="name" id="n2_2_' + i + '">' + getName(2,2)[i] + '</td></table></td></td><td></td></tr>');
}
document.write("</table>");
document.write("<table id='Table2_3'><tr><td></td><td>Item</td><td>Filter Presets</td><td>Preview</td></tr>");
for (i = 0; i < getName(2,3).length; i++) {
    document.write('<tr><td><input type="checkbox" id="d2_3_' + i + '" onclick="toggle(\'2_3_' + i + '\')" checked><label id = "s2_3_' + i + '" for="d2_3_' + i + '">Show</label>');
    document.write('<td><table><td><img src="currency/' + getImage(2,3)[i] + '" height="30" width="30"></td></table></td><td>');
    for (j = 0; j < itemPreset.length; j++){
      document.write('<input type="radio" id="c2_3_' + i + "_" + j + '" name="c2_3_' + i + '" value="' + j + '" onclick="update(\'2_3_' + i + '\',' + j + ');"><label for="c2_3_' + i + "_" + j + '">' + (j+1) + '</label>');
    }
    document.write('<td><table><td name="name" id="n2_3_' + i + '">' + getName(2,3)[i] + '</td></table></td></td><td></td></tr>');
}
document.write("</table>");
document.write("<table id='Table2_4'><tr><td></td><td>Item</td><td>Filter Presets</td><td>Preview</td></tr>");
for (i = 0; i < getName(2,4).length; i++) {
    document.write('<tr><td><input type="checkbox" id="d2_4_' + i + '" onclick="toggle(\'2_4_' + i + '\')" checked><label id = "s2_4_' + i + '" for="d2_4_' + i + '">Show</label>');
    document.write('<td><table><td><img src="currency/' + getImage(2,4)[i] + '" height="30" width="30"></td></table></td><td>');
    for (j = 0; j < itemPreset.length; j++){
      document.write('<input type="radio" id="c2_4_' + i + "_" + j + '" name="c2_4_' + i + '" value="' + j + '" onclick="update(\'2_4_' + i + '\',' + j + ');"><label for="c2_4_' + i + "_" + j + '">' + (j+1) + '</label>');
    }
    document.write('<td><table><td name="name" id="n2_4_' + i + '">' + getName(2,4)[i] + '</td></table></td></td><td></td></tr>');
}
document.write("</table>");
document.write("<table id='Table2_5'><tr><td></td><td>Item</td><td>Filter Presets</td><td>Preview</td></tr>");
for (i = 0; i < getName(2,5).length; i++) {
    document.write('<tr><td><input type="checkbox" id="d2_5_' + i + '" onclick="toggle(\'2_5_' + i + '\')" checked><label id = "s2_5_' + i + '" for="d2_5_' + i + '">Show</label>');
    document.write('<td><table><td><img src="currency/' + getImage(2,5)[i] + '" height="30" width="30"></td></table></td><td>');
    for (j = 0; j < itemPreset.length; j++){
      document.write('<input type="radio" id="c2_5_' + i + "_" + j + '" name="c2_5_' + i + '" value="' + j + '" onclick="update(\'2_5_' + i + '\',' + j + ');"><label for="c2_5_' + i + "_" + j + '">' + (j+1) + '</label>');
    }
    document.write('<td><table><td name="name" id="n2_5_' + i + '">' + getName(2,5)[i] + '</td></table></td></td><td></td></tr>');
}
document.write("</table>");

document.write("</span>");
//This will be the place for non-unique crafting bases drops.
//Users would be able to choose which Tier 1 items to highlight and which to not show.
//Only for late game farming, which will be of item level 60+ here.
document.write("<span id='Table3'>");
document.write("<table id='Table3_1'>");
document.write("</table>");
document.write("</span>");
//This will be the place for unique items
//A sub menu will be available since there are 649 unique items in total
//Options are the item lists are sorted in the same order as in poe.ninja
//so it would be more accurate for the filter to show the correct tier of colors.
//The chance orb recipe is also available here for people who want to do the 5-chance-orb recipe.
document.write("<span id='Table4'>");
document.write("<table id='Table4_1'>");
document.write("</table>");
document.write("</span>");
//The divination card corner
//Pretty much the same as in uniques corner
//Update order with poe.ninja for accuracy
document.write("<span id='Table5'>");
document.write("<table id='Table5_1'>");
document.write("</table>");
document.write("</span>");
//Maps
//Well, unique maps might go to the uniques corner so this part could be short.
//Might as well only allow sort in tiers instead of all 126 maps to make it simple.
//We'll see
document.write("<span id='Table6'>");
document.write("<table id='Table6_1'>");
document.write("</table>");
document.write("</span>");
//item recipe
//the chaos recipe, gemcutter recipe, chisel recipe, glass recipe, chrom recipe will go here.
//Choose which to show and which to not show
//Choose which level to hide those bulky recipies like chisels
document.write("<span id='Table7'>");
document.write("<table id='Table7_1'>");
document.write("</table>");
document.write("</span>");
//The levelling part.
//Choose what you want to see while levelling
//It is quite useless to see wands when you play two hand axe berserker, right?
//Customize here to perfectly fit your levelling experience
//Super useful for leaguestarter builds.
document.write("<span id='Table8'>");
document.write("<table id='Table8_1'>");
document.write("</table>");
document.write("</span>");
document.write("<span id='Table9'>");
document.write("<table id='Table9_1'>");
document.write("</table>");
document.write("</span>");
//Anything missing will be added here
window.onload = init();
function init(){
  menu(1);
  update('11','0');
  document.getElementById("c110").checked = true;
  update('12','1');
  document.getElementById("c121").checked = true;
  update('13','3');
  document.getElementById("c133").checked = true;
  for (j=1; j<=5; j++){
    for (i=0; i<getName(2,j).length; i++){
      update('2_'+j+'_'+i, getDefault(2,j)[i]);
      document.getElementById("c2_"+j+"_"+i+"_"+getDefault(2,j)[i]).checked = true;
    }
  }
}
//Page Changing function since there are too many items in this damn game
function menu(val){
  for(i=1; i<=8; i++){
    document.getElementById("Table" + i ).style.display = 'none';
    document.getElementById("sTable" + i).style.display = 'none';
  }
  document.getElementById("Table" + val ).style.display = 'block';
  document.getElementById("sTable" + val).style.display = 'block';
}

function sMenu(val, val2){
  if (val == 2){
    for(i=1; i<=5; i++){
      document.getElementById("Table2_" + i ).style.display = 'none';
    }
    document.getElementById("Table2_" + val2 ).style.display = 'block';
  }
}

//Toggling Show/Hide Function in filter
function toggle(val){
  if (document.getElementById('d' + val).checked){
    document.getElementById('s' + val).innerHTML = 'Show';
    document.getElementById('n' + val).style.display = 'block';
    document.getElementById('s' + val).style.backgroundColor = '#888';
  }
  else {
    document.getElementById('s' + val).innerHTML = 'Hide';
    document.getElementById('n' + val).style.display = 'none';
    document.getElementById('s' + val).style.backgroundColor = '#666';
  }
}

//These are to be combined into update(val, val) once the filter preset class is created
function update(val, val2){
  document.getElementById('n' + val).style.borderWidth = itemPreset[val2].c + "px";
  document.getElementById('n' + val).style.backgroundColor = "rgba("+itemPreset[val2].ar+","+itemPreset[val2].ag+","+itemPreset[val2].ab+","+(itemPreset[val2].aa/255)+")";
  document.getElementById('n' + val).style.color = "rgba("+itemPreset[val2].br+","+itemPreset[val2].bg+","+itemPreset[val2].bb+","+(itemPreset[val2].ba/255)+")";
  document.getElementById('n' + val).style.borderColor = "rgba("+itemPreset[val2].cr+","+itemPreset[val2].cg+","+itemPreset[val2].cb+","+(itemPreset[val2].ca/255)+")";
  document.getElementById('n' + val).style.fontSize = (itemPreset[val2].b/2) + "px";
}

function updateH(val){
  document.getElementById('item' + val + '_name').style.borderColor = "#AA9E82";
}

function saveTextAsFile() {
    var textToSave = "";
    var temp;
    for (i = 0; i < item.length; i++) {
      temp = 0;
      for (j = 0; j < itemPreset.length; j++){
        if (document.getElementById('c2_1_'+i+ "_" +j).checked) {
          temp = j;
        }
      }
      if (document.getElementById('d2_1_'+i).checked){
        textToSave = textToSave + "Show\r\n";
      }else {
        textToSave = textToSave + "Hide\r\n";
      }
        textToSave = textToSave + "Class item\r\n";
        textToSave = textToSave + "BaseType \"" + itemName[i] + "\"\r\n";
        textToSave = textToSave + "SetFontSize " + itemPreset[temp].b + "\r\n";
        textToSave = textToSave + "SetTextColor " + itemPreset[temp].br + " " + itemPreset[temp].bg + " " + itemPreset[temp].bb + " " + itemPreset[temp].ba + "\r\n";
        if (itemPreset[temp].c != "0"){
          textToSave = textToSave + "SetBorderColor " + itemPreset[temp].cr + " " + itemPreset[temp].cg + " " + itemPreset[temp].cb + " " + itemPreset[temp].ca + "\r\n";
        }
        textToSave = textToSave + "SetBackgroundColor " + itemPreset[temp].ar + " " + itemPreset[temp].ag + " " + itemPreset[temp].ab + " " + itemPreset[temp].aa + "\r\n";
        if (itemPreset[temp].s != "0"){
          textToSave = textToSave + "PlayAlertSound " + itemPreset[temp].s + " " + itemPreset[temp].sl + "\r\n";
        }
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
