function veri(){
    let txt = document.getElementById('txt')
    let res = document.getElementById('res')
    
    res.innerHTML = ''

    if(txt.value.length == 0 || Number(txt.value) > 5){
        alert('[ERRO], digite um numero entre 1 a 5')
    }else{
        let sx = document.getElementsByName('radsx')
        let img = document.createElement('img')
        img.setAttribute('id', 'img')
        
        
        if(sx[0].checked){
            if(txt.value == 1){
                img.setAttribute('src', 'eren.jfif')

            }else if(txt.value == 2){
                img.setAttribute('src', 'pico.jfif')

            }else if(txt.value == 3){
                img.setAttribute('src', 'jotaro.jfif')

            }else if(txt.value == 4){
                img.setAttribute('src', 'dio.jfif')

            }else if(txt.value == 5){
                img.setAttribute('src', 'joestar.jfif')
            }




        }else if(sx[1].checked){
           

            if(txt.value == 1){
                img.setAttribute('src', 'yumeko.jfif')


            }else if(txt.value == 2){
                img.setAttribute('src', 'kurumi.jpg')

            }else if(txt.value == 3){
                img.setAttribute('src', 'hatsune.jfif')

            }else if(txt.value == 4){
                img.setAttribute('src', 'zero.jpg')

            }else if(txt.value == 5){
                img.setAttribute('src', 'lain.jfif')
            }
        }

        res.appendChild(img)

        txt.value = ''

        for (let i = 0; i < sx.length; i++){
            sx[i].checked = false;
        }
    }
}