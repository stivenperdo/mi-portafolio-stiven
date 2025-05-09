import React from 'react';
import '../styles/ProjectItem.css';

function ProjectItem(props) {
    return (
        <article className='project-item information'>
            <div className='project-description'>
                <h3>{props.name}</h3>
                <p>
                    {props.description}
                </p><br />

                <h3>Tecnologías utilizadas</h3>
                <div className='tecnologies'>
                    {props.tecnologies.map(t =>(
                        <div className='tecnology'>
                            <img src={t.picture} alt={t.name} />
                            <span>{t.name}</span>
                        </div>
                    ))}
                </div>
                <div className='project-links'>
                    {(props.deploy === null)
                    ?   ''
                    :   <a href={props.deploy} className='btn-link-blue' target='_blank'>
                        <i className={`fa fa-desktop link-nav`} aria-hidden="true"></i>
                        Ir al sitio
                        </a>
                    }

                    <a href={props.github} className='btn-link-yellow' target='_blank'>
                        <i className={`fa fa-github link-nav`} aria-hidden="true"></i>
                        Ir al repositorio
                    </a>
                </div>
            </div>
            <div className='project-picture'>
                <figure>
                    <img src={props.picture} alt={props.name} />
                </figure>
            </div>
        </article>
    )
}

export { ProjectItem };