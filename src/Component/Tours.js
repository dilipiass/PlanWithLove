
import Card from "./Card";

function Tours(tours){

    return (


        <div>
            <div>
                <h2>Plan With Love</h2>
            </div>
            <div>
                {
                    tours.map((tour)=>{
                        return <Card tour={tour}></Card>
                    })
                }
            </div>
        </div>
    )

}

export default Tours;