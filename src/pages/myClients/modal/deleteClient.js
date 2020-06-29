import React from 'react';
import api from '../../../services/api';
import { toast } from 'react-toastify';

const DeleteClient = (props) => {

    const closeModalContactClient = () => {
        let modal = document.querySelector('#modalDeleteClient');
        modal.style.display = 'none';
    }

    const deleteClient = (id) => {
        api.delete(`user/${id}`)
            .then(() => {
                toast.success('Cliente deletado com sucesso');
                closeModalContactClient();
            })
            .catch(() => {
                toast.error('Erro ao deletar cliente');
            });
    }

    return(
        <div className="modal bd-example-modal-lg" id="modalDeleteClient">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Excluir cliente {props.name} </h5>
                        <button type="button" className="close" onClick={closeModalContactClient}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-footer justify-content-between">
                        <button type="button" className="btn-secundary-schedule border-0" onClick={closeModalContactClient}>Cancelar</button>
                        <button type="button" className="btn-primary-schedule border-0" onClick={() => deleteClient(props.id)}>Confirmar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteClient;