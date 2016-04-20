var observeDOM = (function(){
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
        eventListenerSupported = window.addEventListener;

    return function(obj, callback){
        if( MutationObserver ){
            // define a new observer
            var obs = new MutationObserver(function(mutations, observer){
                if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
                    callback();
            });
            // have the observer observe foo for changes in children
            obs.observe( obj, { childList:true, subtree:true });
        }
        else if( eventListenerSupported ){
            obj.addEventListener('DOMNodeInserted', callback, false);
            obj.addEventListener('DOMNodeRemoved', callback, false);
        }
    }
})();
var t1 = 0;
var t2 = 0;
var t3 = 0;
var t4 = 0;
var t5 = 0;
var actions = 0;

// Observe a specific DOM element:
observeDOM( document.getElementById('TsLog') ,function(){ 
    var string = document.getElementById('TsLog').innerHTML.substr(0,document.getElementById('TsLog').innerHTML.indexOf('('));

    var substring = "Plant Stem"
    if(string.indexOf(substring) > -1)
    {
      t1++;
    }
      var substring = "Cotton"
    if(string.indexOf(substring) > -1)
    {
      t2++;
    }
      var substring = "Living Leather"
    if(string.indexOf(substring) > -1)
    {
      t3++;
    }
      var substring = "Silver Vine"
    if(string.indexOf(substring) > -1)
    {
      t4++;
    }
      var substring = "Nimbus Fruit"
    if(string.indexOf(substring) > -1)
    {
      t5++;
    }
    actions++;
    console.log("t1: " + 100*t1/actions);
    console.log("t2: " + 100*t2/actions);
    console.log("t3: " + 100*t3/actions);
    console.log("t4: " + 100*t4/actions);
    console.log("t5: " + 100*t5/actions);
    console.log("---------------------------------------");
});
