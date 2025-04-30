import estilos from "./Topo.module.css";
import Image from "next/image";
import Link from "next/link"
import Logo from "../../../public/logo.png";

export default function Topo(){
    return(
        <div className={estilos.container_topo}>
            <Image className={estilos.logo} src={Logo}/>
            <nav>
                <Link href="#produtos">PRODUTOS</Link>
                <Link href="#sobre">SOBRE</Link>
                <Link href="#contato">CONTATO</Link>
            </nav>
        </div>
        
    );
}