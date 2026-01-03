import { useErrorBoundary } from 'react-error-boundary';

function ComponenteVulnerable(){
    const { showBoundary }= useErrorBoundary();

    const cargarDatos= async()=>{
        try{
            const res= await fetch('https://api.ejemplo.com/datos');
            if(!res.ok) throw new Error("Fallo en la Api")
        }catch(error){
            showBoundary(error);
        }
    };

    if (error) return null;

    return <button onClick={cargarDatos}>Cargar Usuarios</button>
}

export default ComponenteVulnerable;
