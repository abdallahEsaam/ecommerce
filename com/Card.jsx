export default function Card( pro) {
    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">id: {pro.pro.id}</h5>
                    <p className="card-text">Age: {pro.pro.age}</p>
                </div>
            </div>
        </div>
    );
}