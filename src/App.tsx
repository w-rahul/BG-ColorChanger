import { useState } from "react"
import './App.css'

export default function App(){
    const [color, setColor] = useState("black")
    function ButtonComp ({label,color,onClick}:{label:string, color:string, onClick:()=>void }){
            return <>
                    <button onClick={onClick} 
                     className={`text-md text-center font-medium font-mono px-4 rounded-3xl duration-400`}
                     style={{backgroundColor : color}}>
                       {label} 
                    </button>
                </>
    }

    return <div className=" w-full h-screen  transition-colors duration-800"
     style={{backgroundColor : color}}>
        <div  className="bg-slate-300 flex flex-col items-center justify-end p-8  rounded-2xl"
                style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)' }}>
            <div className="flex flex-wrap gap-2">            
            <ButtonComp color="grey" label="Default" onClick={()=> setColor("black")} />
            <ButtonComp color="red" label="Red" onClick={()=> setColor("red")} />
            <ButtonComp color="blue" label="Blue" onClick={()=>setColor("blue")} />    
            <ButtonComp color="green" label="Green" onClick={()=>setColor("green")} />    
            <ButtonComp color="yellow" label="Yellow" onClick={()=>setColor("yellow")} />    
            <ButtonComp color="orange" label="Orange" onClick={() => setColor("orange")} />
        </div>
        
    </div>
</div>
}
