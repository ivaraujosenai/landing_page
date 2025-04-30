import estilos from "./Capa.module.css";

export default function Capa(){
    return(
        <div className={estilos.container_capa}>
            <div className={estilos.container_capa_texto}>
                <section>
                    <p>Preços baixos e</p>
                    <h1>Óculos de grau e de sol</h1>
                    <p>Você só encontra aqui</p>
                </section>
            </div>
        </div>
    );
}