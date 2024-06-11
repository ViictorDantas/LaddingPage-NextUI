'use client'
import { Button } from '@nextui-org/button';
import "./globals.css";

import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export default function Home() {
  const variants = [
    "light",
  ];

  return (
    <div className='bg-gradient-to-b from-[#07131F] to-[#3E4A66]'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
        <div className="flex flex-col items-center justify-center">
          <img src="/images.png" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className=' p-3 text-white text-xl'>SOBRE</h1>
          <span className='text-white'>Possui graduação em Educação Física pelo Centro Universitário de Patos (UNIFIP) (2018). Especialista em Treinamento Esportivo
            pelo Centro Universitário de Patos (UNIFIP). Especialista em Fisiologia do Exercício e Personal Trainer pelo Centro Universitário de Patos (UNIFIP) (2022).
            Mestre pelo programa de Modelos de Decisão e Saúde (PPGMDS) da Universidade Federal da Paraíba. Tem experiência na área de Educação Física, com ênfase em
            Musculação, Treinamento Funcional, Atividade Física na Terceira Idade, Hidroginástica e Bioestatística.</span>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='text-white flex flex-col items-center text-xl'>RESULTADOS</h1>
        <div className="flex items-center justify-center flex-col md:flex-row md:items-center md:justify-center" >
          <img className='foto_resultado p-5' src="results2.png" alt="" />
          <img className='foto_resultado p-5' src="results1.png" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-white text-xl">Resultados do Aluno Rodrigo em 6 Meses:</span>
          <span className="text-white text-justify tamanho2">
            Sob minha orientação e acompanhamento de um nutricionista, o aluno obteve melhorias significativas. A massa muscular aumentou, enquanto a gordura corporal
            reduziu, levando a um melhor desempenho físico. Além disso, houve melhorias na saúde geral, energia e bem-estar.
          </span>
        </div>
      </div>

      <span className='flex flex-col items-center text-white pt-7 text-xl'>Planos</span>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <div className='p-4'>
            <img className='w-[200px] h-[200px] foto_resultado' src="/foto1.jpg" alt="" />
            <div className='retangulo'>
              <span className='text-xs m-3'>Plano Único</span>
              <Button className='m-1' size="sm" color="success" >R$ 149,99</Button>
            </div>
          </div>
          <div className='p-4'>
            <img className='w-[200px] h-[200px] foto_resultado' src="/foto2.jpg" alt="" />
            <div className='retangulo'>
              <span className='text-xs m-3'>Plano Único</span>
              <Button className='m-1' size="sm" color="success" >R$ 249,99</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center tamanho">
        {variants.map((variant) => (
          <Tabs key={variant} variant='bordered' aria-label="Tabs variants">
            <Tab key="plano_solo" title="Plano Solo">
              <Card>
                <CardBody>
                  Nosso Plano Solo oferece um treinamento personalizado e focado, adaptado às suas metas individuais. Com a orientação de um personal trainer dedicado,
                  você receberá um programa de treinamento exclusivo para alcançar resultados eficazes e duradouros.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="Plano_amigos" title="Plano Amigos">
              <Card>
                <CardBody>
                  Junte-se ao nosso Plano Amigos e transforme sua jornada de fitness em uma experiência social e motivadora. Treine com amigos próximos enquanto
                  compartilham metas, desafios e conquistas, tornando cada sessão de treinamento mais divertida e gratificante.
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        ))}
      </div>

      <footer className=''>
        <div className='bg-[#07131F] flex flex-col md:flex-row items-center justify-center w-full'>
          <div className='flex flex-row'>
            <a href="https://www.facebook.com/"><img className='p-5' src="/logo-facebook.png" alt="" /></a>
            <a href="https://www.instagram.com/aandredantas/"><img className='p-5' src="/logo-instagram.png" alt="" /></a>
            <a href=""><img className='p-5' src="/logo-twitter.png" alt="" /></a>
          </div>
          <div>
            <img className='p-5' src="/logo2.png" alt="" />
          </div>
          <span className='text-white p-5'> By João Victor Medeiros </span>
        </div>
      </footer>
    </div>
  );
}
