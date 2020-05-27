import React from 'react';

const ConfirmSchedule = (props) => {

    const closeModalConfirmSchedule = () => {
        let modal = document.querySelector('#modalConfirmSchedule');
        modal.style.display = 'none';
    }

    return(
        <div className="modal bd-example-modal-lg" id="modalConfirmSchedule">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirmar o agendamento de {props.name}</h5>
                        <button type="button" className="close" onClick={closeModalConfirmSchedule}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                        <form>
                            <input type="hidden" value={props.id}/>
                        </form>
                    </div>
                    <div className="modal-footer justify-content-between">
                        <button type="button" className="btn-secundary-schedule border-0" onClick={closeModalConfirmSchedule}>Cancelar</button>
                        <button type="button" className="btn-primary-schedule border-0">Confirmar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmSchedule;