import React, { Component, useContext } from "react";

import { Context } from "../store/appContext";

import "../../styles/modal.css";

export const Modal = () => {
    const { store, actions } = useContext(Context);

	return (
        <>
		{store.modalOpen &&
            <div className="modal-background">
                <div className="modal-container">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Warning</h5>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete this contact. This change cannot be undone.</p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => actions.deleteSomeData()} type="button" className="btn btn-danger">Yes I am sure</button>
                        <button onClick={() => actions.toggleModal(false, "")} type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                    </div>
                </div>
            </div>
        }
        </>
	);
};