import React from 'react';

const contactClient = (props) => {

    const closeModalContactClient = () => {
        let modal = document.querySelector('#modalClient');
        modal.style.display = 'none';
    }

    return(
        <div className="modal bd-example-modal-lg" id="modalClient">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Enviar Mensagem para </h5>
                    <button type="button" className="close" onClick={closeModalContactClient}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <input type="hidden" value={props.id}/>
                        <input placeholder="Assunto" className="mb-4"/>
                        <textarea></textarea>
                    </form>
                </div>
                <div className="modal-footer justify-content-between">
                    <button type="button" className="btn-secundary-angeluz border-0" onClick={closeModalContactClient}>Fechar</button>
                    <button type="button" className="btn-primary-angeluz border-0">Enviar</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default contactClient;