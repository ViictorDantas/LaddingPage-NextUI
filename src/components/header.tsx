import { Button } from '@nextui-org/button';

export function Header() {
    return (

        <nav className='backg'>
            <div className="p-20 flex flex-col items-center h-screen">
                <img className='pb-20' src="/logo2.png" alt="" />
                <span className='text-center pb-20'>Bem-vindo à sua jornada pessoal de transformação! Aqui, no nosso espaço dedicado ao seu bem-estar, você encontrará
                    apoio, orientação e motivação para alcançar seus objetivos de fitness.</span>
                <span className='text-center pb-20'>André Dantas - Personal Trainer</span>
                <Button color="danger" size="lg">Agendar horário</Button>
            </div>
        </nav>

    )
}