import React from 'react';

const Reconfirm = (props) => {

    const closeModalReconfirm = () => {
        let modal = document.querySelector('#modalReconfirmSchedule');
        modal.style.display = 'none';
    }

    return(
        <div className="modal bd-example-modal-lg" id="modalReconfirmSchedule">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Reagendar o agendamento de {props.name} para:</h5>
                        <button type="button" className="close" onClick={closeModalReconfirm}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                        <form>
                            <input type="hidden" value={props.id}/>
                        </form>
                    </div>
                    <div className="modal-body">
                        <form>
                            <input type="hidden" value={props.id}/>
                            <label>Nova Data</label>
                            <input type="date" className="mb-4"/>
                        </form>
                    </div>
                    <div className="modal-footer justify-content-between">
                        <button type="button" className="btn-secundary-schedule border-0" onClick={closeModalReconfirm}>Cancelar</button>
                        <button type="button" className="btn-primary-schedule border-0">Confirmar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reconfirm;