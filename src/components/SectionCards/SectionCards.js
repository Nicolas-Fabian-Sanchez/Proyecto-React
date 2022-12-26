import Card from "../Card/Card";
import './SectionCards.css'




export default function SectionCards({datos}) {

   
    return(
        <section className="section-cards more-info p-5 flex-column align-items-center ch1">

            {datos.map((dato)=>{ return <Card key={dato.id} info={dato}/>})} 
         
        </section>
    )
}
/* fetch()  */