import React from 'react';
import { Information } from '../containers/Information';
import { data } from '../utils/data';
import userPicture from '../assets/perfil.jpg';
import backgroundPicture from '../assets/background.jpg';
import { InformationToolsItem } from '../components/InformationToolsItem';

function Home() {
  return (
    <Information>
      <h1>{ `${data.name} ${data.surname}` }</h1>
      <span>Ingeniero en Tecnologías de la Información y Comunicaciones</span>
      <div className="information-main">
        <article className="information-me">
          <div className="me-header">
            <figure className="me-header-background">
              <img src={ backgroundPicture } alt="background" />
            </figure>
            <figure className="me-header-picture">
              <img src={ userPicture } alt="my-picture" />
            </figure>
          </div>
          <div className="me-information">
            <h2>Desarrollador Web profesional</h2>
            <p>
              Soy una persona que le gusta los retos,
              quiero aprender día a día sobre lo que me
              apasiona, soy estudiante, comprometido
              con mi carrera y mi sabiduría.
              Me gusta ser responsable con mis tareas,
              trato de cumplir al 100 % lo que me corresponde, 
              la responsabilidad es un aspecto muy importante para mí.
            </p>
          </div>
        </article>
        <article className="information-tools">
          <h2>Habilidades técnicas</h2>
          {data.tools?.map( tool => ( 
            <InformationToolsItem 
            src={tool.picture} value={tool.name} tools={tool.tools} key={tool.name}/>
          ))}          
        </article>
      </div>
    </Information>
  )
}

export { Home };