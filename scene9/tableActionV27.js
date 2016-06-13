
Knack.view_27={}; 

 Knack.view_27.addRow=function addRow(){
    var lineasFact=$('#lineasdedocumento tr').length;
         var even='';
         
    var row='<tr id="idRow_'+(-1)+'" '+even+'>'+
      '<td class="knack-tnk-td" >'+
        '<input onfocusout="Knack.tkn.scene9.focusout('+(-1)+')" type="text" name="inpCantidad'+(-1)+'" id="inpCantidad'+(-1)+'" style="width: 95%;" value="1,00" class="inputx money">'+
            '<span name="spnCantidad'+(-1)+'" id="spnCantidad'+(-1)+'" style="display:none"></span>'+
      '</td>'+
      '<td class="knack-tnk-td" >'+
        '<textarea rows="3" onfocusout="Knack.tkn.scene9.focusout('+(-1)+')" name="inpConcepto'+(-1)+'" id="inpConcepto'+(-1)+'" style="width: 95%;" class="inputx"> </textarea>'+
      '</td>'+
      '<td class="knack-tnk-td">'+
        '<input onfocusout="Knack.tkn.scene9.focusout('+(-1)+')" type="text" name="inpPrecio'+(-1)+'" id="inpPrecio'+(-1)+'" style="width: 95%;" value="0" class="inputx money">'+
            '<span name="spnPrecio'+(-1)+'" id="spnPrecio'+(-1)+'" style="display:none;"></span>'+
      '</td>'+
      '<td class="knack-tnk-td">'+
        '<span id="spnNeto'+(-1)+'" class="col-3">0,00</span>'+
      '</td>'+
      '<td class="knack-tnk-td">'+
        '<select onfocusout="Knack.tkn.scene9.focusout('+(-1)+')" id="slcIva'+(-1)+'" name="slcIva'+(-1)+'" style="width: 98%;" value="0"><option value="21,00 %">21,00 %</option><option value="10,00 %">10,00 %</option><option value="4,00 %">4,00 %</option><option value="0,00 %">0,00 %</option></select>'+
            '<span name="spnIva'+(-1)+'" id="spnIva'+(-1)+'" style="display:none;"></span>'+
      '</td>'+
      '<td class="knack-tnk-td" style="display:none;">'+
        '<span id="f_125'+(-1)+'" class="col-5">'+
      '</td>'+
      '<td class="knack-tnk-td" style="display:none;">'+
        '<span id="f_126'+(-1)+'" class="col-6">'+
      '</td>'+
      '<td class="knack-tnk-td" style="display:none;">'+
        '<span id="f_127'+(-1)+'" class="col-7">'+
      '</td>'+
      '<td class="knack-tnk-td" style="display:none;">'+
        '<span id="f_128'+(-1)+'" iclass="col-8"></td>'+
      '</td>'+
      '<td class="knack-tnk-td">'+
        '<input onfocusout="Knack.tkn.scene9.focusout('+(-1)+')" type="text" name="inpIrpf'+(-1)+'" id="inpIrpf'+(-1)+'"  min="0" max="100" style="width: 95%;" value="0"  class="inputx percent">'+
            '<span name="spnIrpf'+(-1)+'" id="spnIrpf'+(-1)+'" style="display:none"></span>'+
      '</td>'+
      '<td class="knack-tnk-td">'+
        '<span class="col-10"> <button id="deleteRow'+(-1)+'" onclick="Knack.tkn.scene9.deletRow(\'idRow_'+(-1)+'\');"> <span><i class="fa fa-trash-o" style=""></i></span></button></span>'+
      '</td>'+
    '</tr>';  
           // append to table id=tblInventoryItems
    $('#lineasdedocumento').append(row);
    document.getElementById('inpConcepto-1').focus();
  }



Knack.view_27.copyTable=function copyTable()
  {
  //var xRow=1;
    $("#lineasdedocumentoBack tbody tr").each(function(){
       
      var iva0='';
      var iva4='';
      var iva10='';
      var iva21='';
      
      if($(this).find('td').eq(4).find('span').text().trim()=='0,00 %')
        iva0='selected="selected"';
      if($(this).find('td').eq(4).find('span').text().trim()=='4,00 %')
        iva4='selected="selected"';
      if($(this).find('td').eq(4).find('span').text().trim()=='10,00 %')
        iva10='selected="selected"';
      if($(this).find('td').eq(4).find('span').text().trim()=='21,00 %')
        iva21='selected="selected"';
      
        var even='';
       //if(xRow%2==0)
       // even='class="knack-tnk-treven"';
      //xRow=xRow+1;
      
      var row='<tr id="'+$(this).attr('id')+'" '+even+'>'+
            '<td class="knack-tnk-td" >'+
                '<input onfocusout="Knack.tkn.scene9.focusout(\''+$(this).attr('id')+'\')" type="text" name="inpCantidad'+$(this).attr('id')+'" id="inpCantidad'+$(this).attr('id')+'" style="width: 95%;"'+
                  ' value="'+$(this).find('td').eq(0).find('span').text().trim()+'" class="inputx money">'+
                '<span name="spnCantidad'+$(this).attr('id')+'" id="spnCantidad'+$(this).attr('id')+'" style="display:none">'+$(this).find('td').eq(0).find('span').text().trim()+'</span>'+
            '</td>'+
            '<td class="knack-tnk-td">'+
                '<textarea rows="3" onfocusout="Knack.tkn.scene9.focusout(\''+$(this).attr('id')+'\')" name="inpConcepto'+$(this).attr('id')+'" id="inpConcepto'+$(this).attr('id')+'" style="width: 95%;" class="inputx"'+
                  ' >'+$(this).find('td').eq(1).find('span').text().trim()+'</textarea>'+
            '</td>'+
            '<td class="knack-tnk-td">'+
                '<input onfocusout="Knack.tkn.scene9.focusout(\''+$(this).attr('id')+'\')" type="text" name="inpPrecio'+$(this).attr('id')+'" id="inpPrecio'+$(this).attr('id')+'" style="width: 95%;" '+
                  ' value="'+$(this).find('td').eq(2).find('span').text().trim().split('.').join('')+'" class="inputx money">'+
                '<span name="spnPrecio'+$(this).attr('id')+'" id="spnPrecio'+$(this).attr('id')+'" style="display:none;">'+$(this).find('td').eq(2).find('span').text().trim()+'</span>'+
            '</td>'+
            '<td class="knack-tnk-td">'+
                '<span id="spnNeto'+$(this).attr('id')+'" class="col-3">'+$(this).find('td').eq(3).find('span').text().trim()+'</span>'+
            '</td>'+
            '<td class="knack-tnk-td">'+
                '<select onfocusout="Knack.tkn.scene9.focusout(\''+$(this).attr('id')+'\')" id="slcIva'+$(this).attr('id')+'" name="slcIva'+$(this).attr('id')+'" style="width: 98%;" '+
                  ' ><option '+iva21+' value="21,00 %">21,00 %</option><option '+iva10+' value="10,00 %">10,00 %</option><option '+iva4+' value="4,00 %">4,00 %</option><option '+iva0+' value="0,00 %">0,00 %</option></select>'+
                '<span name="spnIva'+$(this).attr('id')+'" id="spnIva'+$(this).attr('id')+'" style="display:none;">'+$(this).find('td').eq(4).find('span').text().trim()+'</span>'+
            '</td>'+
            '<td class="knack-tnk-td" style="display:none;">'+
                '<span id="f_125'+$(this).attr('id')+'" class="col-5">'+$(this).find('td').eq(5).find('span').text().trim()+'</span>'+
            '</td>'+
            '<td class="knack-tnk-td" style="display:none;">'+
                '<span id="f_126'+$(this).attr('id')+'" class="col-6">'+$(this).find('td').eq(6).find('span').text().trim()+'</span>'+
            '</td>'+
            '<td class="knack-tnk-td" style="display:none;">'+
                '<span id="f_127'+$(this).attr('id')+'" class="col-7">'+$(this).find('td').eq(7).find('span').text().trim()+'</span>'+
            '</td>'+
            '<td class="knack-tnk-td" style="display:none;">'+
                '<span id="f_128'+$(this).attr('id')+'" iclass="col-8">'+$(this).find('td').eq(8).find('span').text().trim()+'</span>'+'</td>'+
            '</td>'+
            '<td class="knack-tnk-td">'+
                '<input onfocusout="Knack.tkn.scene9.focusout(\''+$(this).attr('id')+'\')" type="text" name="inpIrpf'+$(this).attr('id')+'" id="inpIrpf'+$(this).attr('id')+'"  min="0" max="100" style="width: 95%;" '+
                  ' value="'+$(this).find('td').eq(9).find('span').text().trim().replace(' %','')+'"  class="inputx percent">'+
                '<span name="spnIrpf'+$(this).attr('id')+'" id="spnIrpf'+$(this).attr('id')+'" style="display:none">'+$(this).find('td').eq(9).find('span').text().trim()+'</span>'+
            '</td>'+
            '<td class="knack-tnk-td">'+
                '<span class="col-10"> <button id="deleteRow'+$(this).attr('id')+'" onclick="Knack.tkn.scene9.deletRow(\''+$(this).attr('id')+'\');"> <span><i class="fa fa-trash-o" style=""></i></span></button></span>'+
            '</td>'+
        '</tr>';
      
      $('#lineasdedocumento').append(row);
      
    });
  }