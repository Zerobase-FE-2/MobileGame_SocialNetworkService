import AskModal from '../common/AskModal';

const AskRemoveModal = ({ visible, onConfirm, onCancel }: any) => {
  return (
    <AskModal
      visible={visible}
      title="댓글 삭제"
      description="댓글을 정말 삭제하시겠습니까?"
      confirmText="삭제"
      onConfirm={onConfirm}
      onCancel={onCancel}
    ></AskModal>
  );
};

export default AskRemoveModal;
