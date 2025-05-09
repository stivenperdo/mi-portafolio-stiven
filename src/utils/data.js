import React from "react";
import javaIcon from '../assets/java.svg';
import springIcon from '../assets/spring.svg';
import sjfIcon from '../assets/jsf-logo.png';
import ejbIcon from '../assets/ejb.png';

import javascriptIcon from '../assets/javascript.svg';
import nodeIcon from '../assets/nodejs.svg';
import reactIcon from '../assets/react.svg';
import expressIcon from '../assets/express.svg';
import viteIcon from '../assets/vite.svg';

import firebaseIcon from '../assets/firebase.svg';
import dbIcon from '../assets/db.svg';
import postgressqlIcon from '../assets/postgresql.svg';
import mysqlIcon from '../assets/mysql.svg';
import sqlserverIcon from '../assets/sqlserver.svg';

import linuxIcon from '../assets/linux.svg';
import ubuntuIcon from '../assets/ubuntu.svg';

import html5 from '../assets/html5.svg';
import css3 from '../assets/css3.svg';
import bootrstrap from '../assets/bootstrap.svg'

import facebook from '../assets/projects/facebook.png';
import maqueta from '../assets/projects/maqueta-profile.png';
import youtube from '../assets/projects/youtube.png';
import shopsystem from '../assets/projects/shop.png';
import springReact from '../assets/projects/spring-react.png';
import gifexpert from '../assets/projects/gifexpert.png';
import  portafolio from '../assets/projects/portafolio.png';


const data = {
    name: 'wilson',
    surname: 'stiven perdomo delgado',
    contact:[
        {
            id: 1,
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/edwin310700/',
            img: 'https://cdn.icon-icons.com/icons2/805/PNG/512/linkedin_icon-icons.com_65929.png'
        },
        {
            id: 2,
            name: 'Github',
            url: 'https://github.com/Darwin073100',
            img: 'https://cdn.icon-icons.com/icons2/836/PNG/512/Github_icon-icons.com_66788.png'
        },
        {
            id: 2,
            name: 'Correo electronico',
            url: 'wperdomodelgado2003@gmail.com',
            img: 'https://cdn.icon-icons.com/icons2/72/PNG/256/email_14410.png'
        },
        {
            id: 3,
            name: 'Numero telefonico',
            url: '+3204577935',
            img: 'https://cdn.icon-icons.com/icons2/72/PNG/256/mobile_phone_14388.png'
        }
    ],
    tools:[
        {
            name: 'HTML',
            picture: html5,
            tools: []
        },
        {
            name: 'CSS',
            picture: css3,
            tools: [
                {
                    name: 'Bootstrap',
                    picture: bootrstrap
                }
            ]
        },
        {
            name: 'JavaScript',
            picture: javascriptIcon,
            tools:[
                {
                    name: 'Node.js',
                    picture: nodeIcon
                },
                {
                    name: 'React.js',
                    picture: reactIcon,
                },
             
            ]
        },
        {
            name: 'Java',
            picture: javaIcon,
            tools:[
               
                
                
            ]
        },
        {
            name: 'Bases de datos',
            picture: dbIcon,
            tools:[
                
                {
                    name: 'MySQL',
                    picture: mysqlIcon
                },
           
            ]
        },
      
    ],
    projects:[
        {
            name: 'mi portafolio',
            description: 'Esta aplicacion web esta conectada aun portafolio personal aplicando React y Tailwind,.',
            github: 'https://github.com/stivenperdo/mi-primera-app.git',
            picture: portafolio,
            tecnologies:[
                {
                    name: 'JavaScript',
                    picture: javascriptIcon
                },
                {
                    name: 'React',
                    picture: reactIcon
                },
                {
                    name: 'Vite',
                    picture: viteIcon
                },
               
            ]
        },
    ]
}

export { data };