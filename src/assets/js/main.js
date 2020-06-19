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

    validPassword(e, form) {
        e.preventDefault();

        const inputPassword = document.querySelector('.input-password', form);
        const inputConfirmPassword = document.querySelector('.input-confirm-password', form);
        let ct = 0;
        
        if (inputPassword.value !== '' && inputConfirmPassword.value !== '') {   
            if (inputPassword.value !== inputConfirmPassword.value) {             
                let p = document.createElement('p');                           
    
                p.classList.add('text-danger');
                p.innerHTML = 'Campo Repita a Senha é diferente de senha';

                if (inputConfirmPassword.nextElementSibling === null) {
                    inputConfirmPassword.closest('div').append(p);
                    ct++;
                } else if (inputConfirmPassword.nextElementSibling !== null){
                    inputConfirmPassword.nextElementSibling.innerHTML = '';
                }   
            }
        }

        return (ct === 0) ? true : false;
    }
}

export default Main;