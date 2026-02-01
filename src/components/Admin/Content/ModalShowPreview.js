import Modal from "react-bootstrap/Modal";

const ModalShowPreview = ({ show, onHide, image }) => {
    if (!image) return null;

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            size="lg"
        >
            <Modal.Body className="text-center">
                <img
                    src={image}
                    alt="preview"
                    onClick={onHide}
                    style={{
                        maxWidth: "100%",
                        maxHeight: "80vh",
                        cursor: "zoom-out"
                    }}
                />
            </Modal.Body>
        </Modal>
    );
};

export default ModalShowPreview;
