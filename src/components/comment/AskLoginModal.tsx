import AskModal from '../common/AskModal';

const AskLoginModal = ({ visible, onLogin, onCancel }: any) => {
  return (
    <AskModal
      visible={visible}
      title="유저 없음"
      description="로그인 하시겠습니까?"
      confirmText="로그인"
      onConfirm={onLogin}
      onCancel={onCancel}
    ></AskModal>
  );
};

export default AskLoginModal;
