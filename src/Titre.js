 const Titre = (trucs) => {
     console.log(trucs)
     return (
        <div>
            <h1>monTITRE</h1>
            <p>Description</p>
            <p>{trucs.ladate}</p>
            <p>{trucs.letexte}</p>
        </div>
     )
 }

 export default Titre;