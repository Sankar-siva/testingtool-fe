
function ModalContainer({ children, onClick, openModal }) {

    if (!openModal) return null
    
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5" onClick={onClick}>
            <div className="w-full max-w-5xl bg-white rounded-xl p-5 shadow-2xl" onClick={(e) => e.stopPropagation()} >
                {children}
            </div>
        </div>
    )
}

export default ModalContainer