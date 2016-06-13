
Knack.common={};
Knack.common.iog={}

Knack.common.iog.runKeymon=function runKeymon()
{
  $(".money").autoNumeric('init', {
    aSep: '.', 
    aDec: ',',
    aForm: true,
    vMax: '999999999.99',
    vMin: '-999999999.00'
});
 $(".percent").autoNumeric('init', {
    aSep: '.', 
    aDec: ',',
    aForm: true,
    vMax: '100.00',
    vMin: '-100.00'
});
}

Knack.common.iog.getUser=function getUser(){
  var user3=Knack.user.attributes.profile_objects.filter(function (lc) 
               {
                 return lc.object =="object_3" ;
               });
  return user3;
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
  
  
Knack.common.iog.calcTabla=function calcul()
{
  var montoiva=0;
        var valoriva=0;
      var baseimponible=0;
      var irpf=0;
      var totalfactura=0;
  
        var montototal0=0;
        var montototal4=0;
        var montototal10=0;
        var montototal21=0;
  
        var montostring0=0;
        var montostring4=0;
        var montostring10=0;
        var montostring21=0;
  
        var baseimponible0=0;
        var baseimponible4=0;
        var baseimponible10=0;
        var baseimponible21=0;
  
        var baseimponiblestring0=0;
        var baseimponiblestring4=0;
        var baseimponiblestring10=0;
        var baseimponiblestring21=0;
  
      var ivaacumulado=0;
      var irpfacumulado=0;
      var totalfacturaacumulado=0;
  
      var baseretencion=0;
      var porcentajeirpf=0;
      var porcentajeresumen=0;
      var cantidaddefilas=0;
      var validacionfilas;
      var valorfila;
  
$("#table0").css("position","absolute").css("left", -9999);
$("#table1").css("position","absolute").css("left", -9999);
$("#table2").css("position","absolute").css("left", -9999);
$("#table3").css("position","absolute").css("left", -9999);

$("#table6 tbody").innerHTML="";
  
    $("#table6 tr:eq(0)").css("display","none");
      $('#table6 tr:not(:first)').remove();
    $("#table7 tr:eq(0)").css("display","none");
      $('#table7 tr:not(:first)').remove();  
  
     $("#lineasdedocumento tbody tr").each(function(){

       valoriva = $(this).find('td').eq(4).find('span').text().trim();
       baseimponible = parseFloat($(this).find('td').eq(3).find('span').text().replace(/\./g,'').replace(/\,/g,'.'));
       montoiva = parseFloat($(this).find('td').eq(5).find('span').text().replace(/\./g,'').replace(/\,/g,'.')) || 0;
       irpf = parseFloat($(this).find('td').eq(7).find('span').text().replace(/\./g,'').replace(/\,/g,'.')) || 0;
       
       totalfactura = parseFloat($(this).find('td').eq(8).find('span').text().replace(/\./g,'').replace(/\,/g,'.')) || 0;

       
       if (valoriva == "0,00 %") {
              montototal0 = montoiva + montototal0;
              montostring0 = currencyFormatDE(montototal0);

              baseimponible0 = baseimponible + baseimponible0;
              baseimponiblestring0 = currencyFormatDE(baseimponible0);               

                      if (baseimponiblestring0 == "0,00 €") {
                          $("#table3").css("position","absolute").css("left", -9999);
                      } else {
                          $("#table3").css("position","");
                      }
         
            $("#table3 tr:eq(0) td:eq(1)").html(baseimponiblestring0);
                $("#table3 tr:eq(1) td:eq(1)").html(montostring0);
         
       } else if (valoriva == "4,00 %") {
              montototal4 = montoiva + montototal4;
              montostring4 = currencyFormatDE(montototal4);

              baseimponible4 = baseimponible + baseimponible4;
              baseimponiblestring4 = currencyFormatDE(baseimponible4);               

                      if (baseimponiblestring4 == "0,00 €") {
                          $("#table2").css("position","absolute").css("left", -9999);
                      } else {
                          $("#table2").css("position","");
                      }
         
            $("#table2 tr:eq(0) td:eq(1)").html(baseimponiblestring4);
                $("#table2 tr:eq(1) td:eq(1)").html(montostring4);
            
          } else if (valoriva == "10,00 %") {
              montototal10 = montoiva + montototal10;
              montostring10 = currencyFormatDE(montototal10);

              baseimponible10 = baseimponible + baseimponible10;
              baseimponiblestring10 = currencyFormatDE(baseimponible10); 
            
                      if (baseimponiblestring10 == "0,00 €") {
                          $("#table1").css("position","absolute").css("left", -9999);
                      } else {
                          $("#table1").css("position","");
                      }            
            
              $("#table1 tr:eq(0) td:eq(1)").html(baseimponiblestring10);
                $("#table1 tr:eq(1) td:eq(1)").html(montostring10);
            
          } else if (valoriva == "21,00 %") {
              montototal21 = montoiva + montototal21;
              montostring21 = currencyFormatDE(montototal21);

              baseimponible21 = baseimponible + baseimponible21;
              baseimponiblestring21 = currencyFormatDE(baseimponible21);

                      if (baseimponiblestring21 == "0,00 €") {
                          $("#table0").css("position","absolute").css("left", -9999);
                      } else {
                          $("#table0").css("position","");
                      }        
            
              $("#table0 tr:eq(0) td:eq(1)").html(baseimponiblestring21);
                $("#table0 tr:eq(1) td:eq(1)").html(montostring21);
          }
       
       //total iva
            ivaacumulado = ivaacumulado + montoiva;
                $("#table4 tr:eq(0) td:eq(1)").html(currencyFormatDE(ivaacumulado));
       //total retencion
            irpfacumulado = irpfacumulado + irpf;
                $("#table4 tr:eq(1) td:eq(1)").html(currencyFormatDE(irpfacumulado));
       //total
            totalfacturaacumulado = totalfacturaacumulado + totalfactura;
                $("#table5 tr:eq(0) td:eq(1)").html(currencyFormatDE(totalfacturaacumulado));
              

//-----------------------------------------------------------------------------------------------------
//-----------------------|| GESTION DINAMICA DE SUBTOTALES IVA - Otros ingresos y Compras ||-----------------------
//-----------------------------------------------------------------------------------------------------
      
        baseretencion = parseFloat($(this).find('td').eq(3).find('span').text().replace(/\./g,'').replace(/\,/g,'.')) || 0
        porcentajeiva = parseFloat($(this).find('td').eq(4).find('span').text().replace(/\./g,'').replace(/\,/g,'.')) || 0;
        cuotaiva = parseFloat($(this).find('td').eq(5).find('span').text().replace(/\./g,'').replace(/\,/g,'.')) || 0;
        valorfila = FormatoDosDecimales(porcentajeiva).toString();
            
            //comprobando si existe iva
            var textoencelda = $("#table7 tbody tr:eq(1) td:eq(0)").text().trim() || null;  
            
            var cantidaddefilas = $("#table7 > tbody >tr").length;
            
            if (cantidaddefilas == 1) {
                            $('#table7').append('<tr><td>Base Imponible IVA '+FormatoDosDecimales(porcentajeiva)+'%:</td><td>'+currencyFormatDE(baseretencion)+'</td></tr>');
                            $('#table7').append('<tr><td>Cuota IVA '+FormatoDosDecimales(porcentajeiva)+'%:</td><td>'+currencyFormatDE(cuotaiva)+'</td></tr>');              
            } else {
        validacionfilas=0;
              
              
                  $("#table7 tbody tr").not(":first").each(function(){
             var porcentajeresumen = $(this).find("td").eq(0).text();  
                          if( porcentajeresumen == "Base Imponible IVA "+valorfila+"%:") {
                              var valoractualbase = parseFloat($(this).find("td").eq(1).text().replace(/\./g,'').replace(/\,/g,'.')) || 0;
                              $(this).find("td").eq(1).text(currencyFormatDE(valoractualbase+baseretencion));
                          validacionfilas=1;
        
                          } else if( porcentajeresumen == "Cuota IVA "+valorfila+"%:") {
                              var valoractualcuota = parseFloat($(this).find("td").eq(1).text().replace(/\./g,'').replace(/\,/g,'.')) || 0;
                              $(this).find("td").eq(1).text(currencyFormatDE(valoractualcuota+cuotaiva));
                          validacionfilas=1;
                          }
                    });
              
              
              // Si no existe coincidencia, se agregan las dos nuevas filas
                    if (validacionfilas==0) {
                        $('#table7').append('<tr><td>Base Imponible IVA '+FormatoDosDecimales(porcentajeiva)+'%:</td><td>'+currencyFormatDE(baseretencion)+'</td></tr>');
                        $('#table7').append('<tr><td>Cuota IVA '+FormatoDosDecimales(porcentajeiva)+'%:</td><td>'+currencyFormatDE(cuotaiva)+'</td></tr>');
                   }
              }
       
//-----------------------------------------------------------------------------------------------------
//-----------------------|| GESTION DINAMICA DE SUBTOTALES IRPF ||-----------------------
//-----------------------------------------------------------------------------------------------------
      
        baseretencion = parseFloat($(this).find('td').eq(3).find('span').text().replace(/\./g,'').replace(/\,/g,'.')) || 0;
        porcentajeirpf = parseFloat($(this).find('td').eq(6).find('span').text().replace(/\./g,'').replace(/\,/g,'.')) || 0;
        cuotaretencion = parseFloat($(this).find('td').eq(7).find('span').text().replace(/\./g,'').replace(/\,/g,'.')) || 0;
        valorfila = FormatoDosDecimales(porcentajeirpf).toString();

            
            //comprobando si existe irpf
            var textoencelda = $("#table6 tbody tr:eq(1) td:eq(0)").text().trim() || null;  
            
            var cantidaddefilas = $("#table6 > tbody >tr").length;
            
            if (cantidaddefilas == 1 && porcentajeirpf != 0) {
                            $('#table6').append('<tr><td>Base Retención '+FormatoDosDecimales(porcentajeirpf)+'%:</td><td>'+currencyFormatDE(baseretencion)+'</td></tr>');
                            $('#table6').append('<tr><td>Cuota Retención '+FormatoDosDecimales(porcentajeirpf)+'%:</td><td>'+currencyFormatDE(cuotaretencion)+'</td></tr>');              
            } else {
        validacionfilas=0;
              
              
                  $("#table6 tbody tr").not(":first").each(function(){
             var porcentajeresumen = $(this).find("td").eq(0).text();  
                          if( porcentajeresumen == "Base Retención "+valorfila+"%:") {
                              var valoractualbase = parseFloat($(this).find("td").eq(1).text().replace(/\./g,'').replace(/\,/g,'.')) || 0;
                              $(this).find("td").eq(1).text(currencyFormatDE(valoractualbase+baseretencion));
                          validacionfilas=1;
        
                          } else if( porcentajeresumen == "Cuota Retención "+valorfila+"%:") {
                              var valoractualcuota = parseFloat($(this).find("td").eq(1).text().replace(/\./g,'').replace(/\,/g,'.')) || 0;
                              $(this).find("td").eq(1).text(currencyFormatDE(valoractualcuota+cuotaretencion));
                          validacionfilas=1;
                          }
                    });
              
              
              // Si no existe coincidencia, se agregan las dos nuevas filas
                    if (validacionfilas==0 && porcentajeirpf != 0) {
                        $('#table6').append('<tr><td>Base Retención '+FormatoDosDecimales(porcentajeirpf)+'%:</td><td>'+currencyFormatDE(baseretencion)+'</td></tr>');
                        $('#table6').append('<tr><td>Cuota Retención '+FormatoDosDecimales(porcentajeirpf)+'%:</td><td>'+currencyFormatDE(cuotaretencion)+'</td></tr>');
                   }
              }
    });
  

}