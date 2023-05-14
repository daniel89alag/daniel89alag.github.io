$(document).ready( function () {
   
   
   $('#tabla').DataTable({
        "ajax":{
             "url": 'listar.php', 
             "dataSrc" : '', 
                     
             
         },
         "columns":[
            {"data":"Id_usuario"},
            {"data":"Nombre"},
            {"data":"Apellido1"},
            {"data":"Sexo"},
            {"data":"Correo"},
            {"data":"Contraseña"},
            {"data":"Acciones"},
            
         ]
          
        });

        $('#Modificar').click(function(){
         $('#respuesta').fadeToggle(1000);
      })
        $('#nuevo').click(function(){
         $('#respuesta1').fadeToggle(1000);
      })

      $( "#contenedor" ).draggable();

      $( "#dialog" ).dialog({
         autoOpen: false,
         show: {
           effect: "blind",
           duration: 1000
         },
         hide: {
           effect: "explode",
           duration: 1000
         }
       });
    
       $( "#nuevo" ).on( "click", function() {
         $( "#dialog" ).dialog( "open" );
       });
      
       $( "#dialog1" ).dialog({
         autoOpen: false,
         show: {
           effect: "blind",
           duration: 1000
         },
         hide: {
           effect: "explode",
           duration: 1000
         }
       });
    
       $( "#Modificar" ).on( "click", function() {
         $( "#dialog1" ).dialog( "open" );
       });

} );

