class Main {
    validInput(e, form) {
        e.preventDefault();

        let ct = 0;
        let input = document.querySelectorAll('.input-required', form);       
        
        input.forEach((element) => {
            let p = document.createElement('p');            
            let nameElement = element.getAttribute('data-required');

            p.classList.add('text-danger');
            p.innerHTML = `Campo ${nameElement} é obrigatório`;

            if (element.value === '') {
                if (element.nextElementSibling === null) {
                    element.closest('div').append(p);
                    ct++;
                }                
            } else if (element.nextElementSibling !== null){
                element.nextElementSibling.innerHTML = '';
            }          
        });   
        
        return (ct === 0) ? true : false;
    }
}

export default Main;