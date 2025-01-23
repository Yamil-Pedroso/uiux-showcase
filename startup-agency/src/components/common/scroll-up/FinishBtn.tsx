interface IFinishBtnProps {
    isClicked: boolean;
}

const FinishBtn: React.FC<IFinishBtnProps> = ({ isClicked }) => {
    return (
        <button onClick={() => isClicked}>
            Finish
        </button>
    )
  
}

export default FinishBtn