import { ErrorBoundary } from 'react-error-boundary'
import ComponenteVulnerable from './ComponenteVulnerable'

function FallbackPersonalizado({ error, resetErrorBoundary }){
    return(
        <div role='alert'>
            <p>Opps!! Algo salio mal:</p>
            <pre style={{ color: 'red' }}>{ error.message }</pre>
            <button onClick={resetErrorBoundary}>
                Intentar de nuevo
            </button>
        </div>
    );
}

function App() {
    return(
        <ErrorBoundary FallbackComponent={FallbackPersonalizado}
            onReset={()=>{
                console.log("Reiniciando el estado...");
            }}
        >
            <ComponenteVulnerable/>
        </ErrorBoundary>
    );
}

export default App
