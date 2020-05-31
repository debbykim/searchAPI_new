/**
 * Created by user on 2016-11-10.
 */

function mainList(result){

    var resultList = result;

    var listRenderer = function(instance, td, row, col, prop, value, cellProperties){
        var currencyCode = value;

        while(td.firstChild) {
            td.removeChild(td.firstChild);
        }

        if(currencyCode.indexOf(currencyCode) >-1) {
            var listElement = document.createElement('div');
            listElement.className = 'list' + currencyCode.toLowerCase();
            td.appendChild(listElement);
        }else {
            var textNode = document.createTextNode(value == null ? '':value);
            td.appendChild(textNode);
        }
    };

    var hotElement = document.querySelector('#hot');
    var hotElementContainer = hotElement.parentNode;
    var hotSettings = {
        data:result,
        columns:[
            {
                data:'id',
                type:'text'
            },
            {
                data:'chid',
                type:'numeric',
                width: 10
            },
            {
                data:'chtit',
                renderer:listRenderer
            },
            {
                data:'chtxt',
                type:'text'
            },
            {
                data:'chtag',
                type:'text'
            },
            {
                data:'nicnm',
                type:'text'
            },
            {
                data:'moddt',
                type: 'date',
                dateFormat: 'YYYY/MM/DD'
            },
            {
                data:'url',
                type:'text'
            },
            {
                data:'thunbnail',
                type:'text'
            },
        ],
        stretchH: 'all',
        width: 806,
        autoWrapRow: true,
        height: 441,
        maxRows: 22,
        rowHeaders: true,
        colHeaders: [
            'id',
            'chid',
            'chtit',
            'chtag',
            'nicnm',
            'moddt',
            'url',
            'thunbnail'
            ]
    };

    var hot = new Handsontable(hotElement,hotSettings);
}//end function()