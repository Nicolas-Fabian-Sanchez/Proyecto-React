import Card from "../Card/Card";
import './SectionCards.css'




export default function SectionCards({datos}) {

   
    return(
        <section className="row g-3 d-flex align-items-center ">

            {datos.map((dato)=>{ return <Card key={dato.id} info={dato}/>})} 
         
        </section>
    )
}
/* fetch()  */