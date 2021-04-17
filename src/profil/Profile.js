export default function Profile(props){
    return(
      <div>
          <h1>{props.name}</h1>
          <h1>{props.lastName}</h1>
          <h1>{props.age}</h1>
          <img src={props.children} style={{width : 100}} />
          <button type="button" class="btn btn-danger" onClick={()=>props.alertFunction(props.name)}>alert</button>

      </div>  
    )
}