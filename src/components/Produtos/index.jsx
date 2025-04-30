import estilos from "./Produtos.module.css";
import Oculos01 from "../../../public/oculos01.png";
import Oculos02 from "../../../public/oculos02.png";
import Oculos03 from "../../../public/oculos03.png";
import Oculos04 from "../../../public/oculos04.png";
import Image from "next/image";

export default function Produtos(){
    return (
        <div>
            <section>
                <h1>Nossos produtos</h1>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            </section>
            <section>
                <div>
                    <h2>Óculos de grau</h2>
                    <Image src={Oculos01}/>
                    <h3>R$ 500,00</h3>
                </div>
                <div>
                    <h2>Óculos transition</h2>
                    <Image src={Oculos02}/>
                    <h3>R$ 750,00</h3>
                </div> 
                <div>
                    <h2>Óculos de sol</h2>
                    <Image src={Oculos03}/>
                    <h3>R$ 700,00</h3>
                </div> 
                <div>
                    <h2>Óculos infantil</h2>
                    <Image src={Oculos04}/>
                    <h3>R$ 500,00</h3>
                </div>                 
            </section>
            <section>
                <h3>Todos os nossos produtos incluem:</h3>
                <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </section>
        </div>
    );
}