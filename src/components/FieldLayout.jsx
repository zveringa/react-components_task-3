import './FieldLayout.css';

export const FieldLayout = () => {
    return (
        <>
            <div className="container">
                <div className="board">
                    <div className="row">
                        <div className="cell" data-cell></div>
                        <div className="cell" data-cell></div>
                        <div className="cell" data-cell></div>
                    </div>
                    <div className="row">
                        <div className="cell" data-cell></div>
                        <div className="cell" data-cell></div>
                        <div className="cell" data-cell></div>
                    </div>
                    <div className="row">
                        <div className="cell" data-cell></div>
                        <div className="cell" data-cell></div>
                        <div className="cell" data-cell></div>
                    </div>
                </div>
            </div>
        </>
    );
};