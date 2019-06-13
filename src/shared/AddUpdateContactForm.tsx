import React from 'react';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const modalStyles = {
    backgroundColor: 'white',
    height: '200px',
    left: '36%',
    padding: '15px',
    position: 'absolute' as 'absolute',
    top: '54%',
    width: '350px',
};

const AddUpdateContactForm = (props: any) => {
    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={props.isOpen}
        >
            <div style={modalStyles}>
                <Typography variant="h6" id="modal-title">
                    {props.formTitle}
                </Typography>
                <form onSubmit={props.handleSubmit}>
                    <TextField label="Name" name="name" />
                    <TextField label="Email" name="email" />
                    <div style={{ marginTop: '30px' }}>
                        <Button
                            size="small"
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{ marginRight: '10px' }}
                        >
                            {props.primaryButton}
                        </Button>
                        <Button
                            onClick={props.toggleModal}
                            size="small"
                            variant="contained"
                            color="secondary"
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default AddUpdateContactForm;
