
Knack.tkn={};
Knack.tkn.factMod=[];
Knack.tkn.factInsert=[];
Knack.tkn.scene9={}; 
console.log("scene_9 object"+Knack.tkn.scene9);


///////////////////////////////////
///////Funcion de Borrado de Linea
///////////////////////////////////
Knack.tkn.scene9.deletRow=function deleteRow(id){
    var lineasFact=$('#lineasdedocumento tr').length;
if(id.indexOf("idRow_")<0)
  {
    $("#deleteRow"+id).prop( "disabled", true );
    $("#save_Insert").prop( "disabled", true );
    Knack.showSpinner();
     deleteInvoiceLine(id);}
  else if(lineasFact>2)
    {
      $('#'+id).remove();
    }
}

///////////////////////////////////
///////Funcion de Borrado de Base de Datos
///////////////////////////////////
function deleteInvoiceLine(id){
//async: false,
  return $.ajax({
    url: "https://api.knackhq.com/v1/objects/object_12/records/"+id,
    type: "DELETE",
    headers: {"X-Knack-Application-Id": "570a6a70f32781d2733cca7a", "X-Knack-REST-API-Key":"2c9016f0-0572-11e6-a161-31bbe238207d","Content-Type": "application/json"},
    
    success: function(response) {
    
    console.log("success");
    $('#'+id).remove();
    $("#save_Insert").prop( "disabled", false );
     var lineasFact=$('#lineasdedocumento tr').length;
    if(lineasFact==1)
    {
      addRow();
    }
    Knack.hideSpinner();
    Knack.common.iog.calcTabla();  
    },
    error: function(response)
    {
      Knack.hideSpinner();
      $("#deleteRow"+id).prop( "disabled", false );
      $("#save_Insert").prop( "disabled", false );
      alert("Error al borrar "+id);
    }
  });
}
///////////////////////////////////
///////Calcular valores de los registros ocultos en la tabla
///////////////////////////////////
Knack.tkn.scene9.focusout=function calcNeto(id)
  {
    if( Knack.tkn.factMod.indexOf(id)<0)
      {Knack.tkn.factMod.push(id);}
    var cantidad = document.getElementById('inpCantidad'+id).value; 
    var precio = document.getElementById('inpPrecio'+id).value;
    var neto=document.getElementById('spnNeto'+id);
    var iva=document.getElementById('slcIva'+id).value;
    var cuotaIva=document.getElementById('f_125'+id);
    var irpf=document.getElementById('inpIrpf'+id).value;
    var irpfVal=document.getElementById('f_126'+id);
    irpfVal.innerHTML=irpf;
    var cuotaIrpf=document.getElementById('f_127'+id);
    var totalFact=document.getElementById('f_128'+id);
  

  document.getElementById('spnCantidad'+id).innerHTML=cantidad;
  document.getElementById('spnPrecio'+id).innerHTML=precio;
  document.getElementById('spnIva'+id).innerHTML=document.getElementById('slcIva'+id).value;
  
  cantidad=cantidad.split(".").join("").replace(',','.');
  precio=precio.split(".").join("").replace(',','.');

  iva=iva.substring(0, iva.length-2).replace(",", ".");
  irpf=irpf.replace(",", ".");
  
    if(cantidad.length<1||precio.length<1)    
      {
      neto.innerHTML="0,00";
      cuotaIva.innerHTML="0,00";
      cuotaIrpf.innerHTML="0,00";
      totalFact.innerHTML="0,00";
    }
    
    else{
        var resNeto = cantidad * precio;
        neto.innerHTML=resNeto.toMoney(2,',','.');
      var resIva=(iva/100)*resNeto;
      cuotaIva.innerHTML=(resIva+"").replace(".",",");
      var resIrpf=(irpf/100)*resNeto;
      cuotaIrpf.innerHTML=(resIrpf+"").replace(".",",");
      var resTotal=resNeto+resIva-resIrpf;
      totalFact.innerHTML=(resTotal+"").replace(".",",");
      Knack.common.iog.calcTabla();
    }
  }

///////////////////////////////////
///////Funcion Para Agregar Linea
///////////////////////////////////

  var idRow=0;
     
     $('#addRow').click(function(){   
          // strip previous values and fix names of inputs
      addRow();
         
    } ); 

function addRow(){
   var lineasFact=$('#lineasdedocumento tr').length;
       var even='';
      // if(lineasFact%2==0)
      //  even='class="knack-tnk-treven"';
    
    var row='<tr id="idRow_'+idRow+'" '+even+'>'+
  '<td class="knack-tnk-td" >'+
    '<input onfocusout="Knack.tkn.scene9.focusout('+idRow+')" type="text" name="inpCantidad'+idRow+'" id="inpCantidad'+idRow+'" style="width: 95%;" value="1,00" class="inputx money">'+
        '<span name="spnCantidad'+idRow+'" id="spnCantidad'+idRow+'" style="display:none"></span>'+
  '</td>'+
  '<td class="knack-tnk-td">'+
    '<textarea rows="3" onfocusout="Knack.tkn.scene9.focusout('+idRow+')" name="inpConcepto'+idRow+'" id="inpConcepto'+idRow+'" style="width: 95%;" class="inputx"> </textarea>'+
  '</td>'+
  '<td class="knack-tnk-td">'+
    '<input onfocusout="Knack.tkn.scene9.focusout('+idRow+')" type="text" name="inpPrecio'+idRow+'" id="inpPrecio'+idRow+'" style="width: 95%;" value="0" class="inputx money">'+
        '<span name="spnPrecio'+idRow+'" id="spnPrecio'+idRow+'" style="display:none;"></span>'+
  '</td>'+
  '<td class="knack-tnk-td">'+
    '<span id="spnNeto'+idRow+'" class="col-3">0,00</span>'+
  '</td>'+
  '<td class="knack-tnk-td">'+
    '<select onfocusout="Knack.tkn.scene9.focusout('+idRow+')" id="slcIva'+idRow+'" name="slcIva'+idRow+'" style="width: 98%;" value="0"><option value="21,00 %">21,00 %</option><option value="10,00 %">10,00 %</option><option value="4,00 %">4,00 %</option><option value="0,00 %">0,00 %</option></select>'+
        '<span name="spnIva'+idRow+'" id="spnIva'+idRow+'" style="display:none;"></span>'+
  '</td>'+
  '<td class="knack-tnk-td" style="display:none;">'+
    '<span id="f_125'+idRow+'" class="col-5">'+
  '</td>'+
  '<td class="knack-tnk-td" style="display:none;">'+
    '<span id="f_126'+idRow+'" class="col-6">'+
  '</td>'+
  '<td class="knack-tnk-td" style="display:none;">'+
    '<span id="f_127'+idRow+'" class="col-7">'+
  '</td>'+
  '<td class="knack-tnk-td" style="display:none;">'+
    '<span id="f_128'+idRow+'" iclass="col-8"></td>'+
  '</td>'+
  '<td class="knack-tnk-td">'+
    '<input onfocusout="Knack.tkn.scene9.focusout('+idRow+')" type="text" name="inpIrpf'+idRow+'" id="inpIrpf'+idRow+'"  min="0" max="100" style="width: 95%;" value="0"  class="inputx percent">'+
        '<span name="spnIrpf'+idRow+'" id="spnIrpf'+idRow+'" style="display:none"></span>'+
  '</td>'+
  '<td class="knack-tnk-td">'+
    '<span class="col-10"> <button id="deleteRow'+idRow+'" onclick="Knack.tkn.scene9.deletRow(\'idRow_'+idRow+'\');"> <span><i class="fa fa-trash-o" style=""></i></span></button></span>'+
  '</td>'+
'</tr>';
          idRow=idRow+1; 
         // append to table id=tblInventoryItems
         $('#lineasdedocumento').append(row);
         Knack.common.iog.runKeymon();
         document.getElementById('inpConcepto'+(idRow-1)).focus();      
  }

///////////////////////////////////
///////Funcion Para Salvar
///////////////////////////////////

var toSave=0;
var saved=0;
  
$('#save_Insert').click(function(){  
        
  if(!validateDataInvoice())
    {return;}
  toSave=0;
  var changeSome=false;
  
   $("#lineasdedocumento tbody tr").each(function (index) 
      {
        var data={};
  
        $(this).children("td").each(function (index2) 
        {
          switch (index2) 
          {
            case 0: data.field_335 = $(this).children("input").attr('value');
                    break;
            case 1: data.field_122 = $(this).children("textarea").attr('value');
                    break;
            case 2: data.field_334 = $(this).children("input").attr('value');
                    break;
            case 3: data.field_123 = $(this).children("span").text();
                    break;
            case 4: data.field_406 = $(this).children("select").attr('value');
                    break;
            case 9: data.field_126 = $(this).children("input").attr('value');
                    data.field_430 = $(this).children("input").attr('value')+' %';
                    break;
          }
        });
        data.field_266=Knack.common.iog.getUser()[0].entry_id;
        //Knack.user.attributes.profile_objects[1].entry_id;

        data.field_339=$('#cliente1 td span strong span').attr('id');
        data.field_697=$('#trFecha span').text();
        data.field_653=$('#trFecha span').text();
        data.field_136=getInvoice();

        if($(this).attr( 'id' ).indexOf('idRow_')==0)
        {
          Knack.showSpinner();
          toSave=toSave+1;
          changeSome=true;
          saveNewInvLine(data,$(this).attr( 'id' ));
        }
        else
        {
          if(Knack.tkn.factMod.indexOf($(this).attr('id'))>=0){
            Knack.showSpinner();
            toSave=toSave+1;
            changeSome=true;
            updateInvLine(data,$(this).attr('id'));
          }
        }
      });
     // Knack.tkn.factMod=[];
    if(!changeSome)
      {window.location=document.getElementById('refSaveInvoce').href;}
  });
  
  function validateDataInvoice(){
    var result=true;
    $("#lineasdedocumento tbody tr").each(function (index) 
      {
        if($(this).attr( 'id' ).indexOf('idRow_')==0)
        {
          toSave=toSave+1;
          $(this).children("td").each(function (index2) 
          {
              switch (index2) 
              {
                  case 0: 
                      if($(this).children("input").attr('value').trim()=="")
                      {alert("Error en Cantidad");
                       result= false;
                      }
                    break;
                  case 1: 
                      if($(this).children("textarea").attr('value').trim()=="")
                      {alert("Error en Concepto");
                       result= false;
                      }
                    break;
                  case 2: 
                      if($(this).children("input").attr('value').trim()=="")
                      {alert("Error en Precio");
                       result= false;
                      }
                    break;
                  case 3: 
                          break;
                  case 4: 
                          break;
                  case 9: 
                          break;
              }
          });
        }
      });
    return result;
  }
  
  function saveNewInvLine(dataLine,id){
    return saveInvoiceLine(dataLine,"","POST",id);
  }

  function updateInvLine(dataLine,record){
    return saveInvoiceLine(dataLine,"/"+record,"PUT",record);
  }

  function saveInvoiceLine(dataLine,record,method,id){
    return $.ajax({
      url: "https://api.knackhq.com/v1/objects/object_12/records"+record,
      type: method,
      headers: {"X-Knack-Application-Id": "570a6a70f32781d2733cca7a", "X-Knack-REST-API-Key":"2c9016f0-0572-11e6-a161-31bbe238207d","Content-Type": "application/json"},
      data: JSON.stringify(dataLine),
      success: function(response) {
        saved=saved+1;
      console.log("Success id:"+id);
      idLFact=response.id;
      if(id.indexOf("idRow_")==0)
      {
        setValue(id,response.id);
      }
        if(toSave==saved)
        {
          toSave=0;
          saved=0;
          Knack.hideSpinner();
          window.location=document.getElementById('refSaveInvoce').href;
        }
      },
      error: function(response)
      {
        Knack.hideSpinner();
        alert("Error "+method+" al insertar o actualizar");
      }
    });
  }

  function setValue(oldKey,newKey){
  var id=oldKey.split("_")[1];
    $("#"+oldKey).attr("id",newKey);
    $("#inpCantidad"+id).attr("name",'inpCantidad'+newKey);
    $("#inpCantidad"+id).attr("onfocusout",'Knack.tkn.scene9.focusout(\''+newKey+'\')');
    $("#inpCantidad"+id).attr("id",'inpCantidad'+newKey);
    $("#spnCantidad"+id).attr("name",'spnCantidad'+newKey);
    $("#spnCantidad"+id).attr("id",'spnCantidad'+newKey);

     $("#inpConcepto"+id).attr("name",'inpConcepto'+newKey);
    $("#inpConcepto"+id).attr("onfocusout",'Knack.tkn.scene9.focusout(\''+newKey+'\')');
    $("#inpConcepto"+id).attr("id",'inpConcepto'+newKey);

     $("#inpPrecio"+id).attr("name",'inpPrecio'+newKey);
    $("#inpPrecio"+id).attr("onfocusout",'Knack.tkn.scene9.focusout(\''+newKey+'\')');
    $("#inpPrecio"+id).attr("id",'inpPrecio'+newKey);
    $("#spnPrecio"+id).attr("name",'spnPrecio'+newKey);
    $("#spnPrecio"+id).attr("id",'spnPrecio'+newKey);

    $("#spnNeto"+id).attr("id",'spnNeto'+newKey);

     $("#slcIva"+id).attr("name",'slcIva'+newKey);
    $("#slcIva"+id).attr("onfocusout",'Knack.tkn.scene9.focusout(\''+newKey+'\')');
    $("#slcIva"+id).attr("id",'slcIva'+newKey);
    $("#spnIva"+id).attr("name",'spnIva'+newKey);
    $("#spnIva"+id).attr("id",'spnIva'+newKey);

    $("#f_125"+id).attr("id",'f_125'+newKey);
    $("#f_126"+id).attr("id",'f_126'+newKey);
    $("#f_127"+id).attr("id",'f_127'+newKey);
    $("#f_128"+id).attr("id",'f_128'+newKey);

     $("#inpIrpf"+id).attr("name",'inpIrpf'+newKey);
    $("#inpIrpf"+id).attr("onfocusout",'Knack.tkn.scene9.focusout(\''+newKey+'\')');
    $("#inpIrpf"+id).attr("id",'inpIrpf'+newKey);
    $("#spnIrpf"+id).attr("name",'spnIrpf'+newKey);
    $("#spnIrpf"+id).attr("id",'spnIrpf'+newKey);

    $("#deleteRow"+id).attr("onclick",'Knack.tkn.scene9.deletRow(\''+newKey+'\');');
    $("#deleteRow"+id).attr("id",'deleteRow'+newKey);
 }
  
  function getInvoice(){
    var path=window.location.href.split('/');
    if(path[path.length-1]==''){
        if(path[path.length-2].indexOf("?")>-1)
          return path[path.length-3];
        else 
          return path[path.length-2];
    }
    else{
        if(path[path.length-1].indexOf("?")>-1)
          return path[path.length-2];
        else 
          return path[path.length-1];
    }
  }

//--Funciones---------------------------------------------------------------------------------------------------
  function currencyFormatDE (num) {
    return num
       .toFixed(2) // always two decimal digits
       .replace(".", ",") // replace decimal point character with ,
       .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + " €" // use . as a separator
  }

  function FormatoDosDecimales (num) {
    return num
       .toFixed(2) // always two decimal digits
       .replace(".", ",") // replace decimal point character with ,
  }