$(document).ready(function(){

//aplicação de máscara de telefone

    var options =  {
        onChange: function(tel){
            let masks = ['(00) 0000-0000 0', '(00) 00000-0000'];
            let mask = (tel.length>14) ? masks[1] : masks[0];
        
            $('#telefone').mask(mask, options);  
        }
    };

    $('#telefone').mask('(00) 0000-0000 0', options)


//Validando o formulário

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone:{
                required: false
            },
            mensagem:{
                required: true
            },
        },
        messages:{
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos > 1){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }   else {
                alert(`Existe ${camposIncorretos} campo incorreto`)
            }
        }
    })

})