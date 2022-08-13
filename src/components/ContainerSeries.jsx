import React, {useState} from 'react'

import ListSeriesBox from './ListSeries';

import '../App.css'

const ContainerSeries = () => {
    const [ListSeries] = useState([
       {
            id: 1,
            title: 'Stranger Things',
            detals: 'Um grupo de amigos se envolve em uma série de eventos sobrenaturais na pacata cidade de Hawkins. Eles enfrentam criaturas monstruosas, agências secretas do governo e se aventuram em dimensões paralelas.',
            image: 'https://rollingstone.uol.com.br/media/_versions/stranger-things-4-temporada-netflix-foto-divulgacao_widelg.jpg', 
            statusSerie: 'Disponivel', 
            like: '96%', 
            reference: 'https://www.netflix.com/br/title/80057281'
        }, {
            id: 2,
            title: 'On My Block',
            detals: 'Quatro adolescente contam com o poder da amizade para sobreviver ao ensino médio em um bairro marginalizado de Los Angeles.',
            image: 'https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2021/01/30/on-my-block.jpg', 
            statusSerie: 'Disponivel', 
            like: '92%', 
            reference: 'https://www.netflix.com/br/title/80117809'
        },{
            id: 3,
            title: 'Peaky Blinders',
            detals: 'Uma notória gangue da Inglaterra de 1919 ascende no submundo liderada pelo cruel Tommy Shelby, um criminoso disposto a subir na vida a qualquer preço.',
            image: 'https://epipoca.com.br/wp-content/uploads/2021/10/Peaky-Blinders-epipoca1.jpg', 
            statusSerie: 'Disponivel', 
            like: '96%', 
            reference: 'https://www.netflix.com/br/title/80002479'
        },  {
            id: 4,
            title: 'Olhos que Condenam',
            detals: 'Cinco adolescentes do Harlem vivem um pesadelo depois de serem injustamente acusados de cometer de um ataque brutal no Central Park.',
            image: 'https://br.web.img3.acsta.net/pictures/19/05/06/11/16/2031077.jpg', 
            statusSerie: 'Não disponivel', 
            like: '95%', 
            reference: 'https://www.netflix.com/br/title/80200549'
        }, {
            id: 5,
            title: 'Sintonia',
            detals: 'Doni, Nando e Rita foram criados juntos na periferia de São Paulo rodeados por funk, drogas, violência e religião. Eles seguem caminhos totalmente diferentes, mas sempre buscam ajuda um no outro.',
            image: 'https://br.web.img3.acsta.net/pictures/19/07/15/09/35/1460353.jpg', 
            statusSerie: 'Disponivel', 
            like: '89%', 
            reference: 'https://www.netflix.com/br/title/80217315'
        }, {
            id: 6,
            title: 'I Am Not Okay With This',
            detals: 'Syd lida com as turbulências do ensino médio, um drama familiar e um crush não correspondido pela sua melhor amiga.',
            image: 'https://rollingstone.uol.com.br/media/_versions/i_am_not_okay_with_this_-_reproducao__netflix_widelg.jpg', 
            statusSerie: 'Não disponivel', 
            like: '81%', 
            reference: 'https://www.netflix.com/br/title/80244781'
        }, {
            id: 7,
            title: 'Dark',
            detals: 'Os mistérios sombrios de uma pequena cidade alemã são expostos quando duas crianças desaparecem.',
            image: 'https://usefors.com.br/wp-content/uploads/2020/07/dark.jpg', 
            statusSerie: 'Disponivel', 
            like: '94%', 
            reference: 'https://www.netflix.com/br/title/80100172'
        }, {
            id: 8,
            title: 'The Flash',
            detals: 'Acompanhe as aventuras do homem mais veloz do planeta, o cientista da Central City Police Barry Allen, que após um trágico acidente adquire o poder da velocidade.',
            image: 'https://sm.ign.com/ign_pt/news/t/the-flash-/the-flash-announces-next-big-crossover-event_bz2d.jpg', 
            statusSerie: 'no', 
            like: '87%', 
            reference: 'https://www.netflix.com/br/title/80027042'
        }

    ]);
    return (
        <div className='main-series'>
         {
            ListSeries.map((serie) => (
           
              <ListSeriesBox key={serie.id}
                image={serie.image}
                title={serie.title}
                detals={serie.detals}
                reference={serie.reference}
                like={serie.like}
                statusSerie={serie.statusSerie != 'Disponivel' ? (<p className='noDisponible'>Não disponível</p>) : (<p className='disponible'>Disponível</p>)}
              />
            
            ))
          }
        </div>
    )
}

export default ContainerSeries;