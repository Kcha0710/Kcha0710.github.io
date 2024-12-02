
const form = document.getElementById("form1");
        form.addEventListener('submit',function(event){
            const nya = document.getElementById('nya').value;
            const email = document.getElementById('email').value;
            const numero = document.getElementById('numero').value;

            if (nya=='' || email=='' || numero=='') {
                alert('No puedes dejar campos vacios!');
            }else{
                alert('Formulario enviado correctamente!')
            }
        })
    