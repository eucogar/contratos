import React, {useContext, useRef, useState} from 'react';
import {useRouter} from "next/router";
import '../styles/sidebar.css'
import ArrowIconSVG from '../images/boton-abrir.svg';
import logo from '../images/Escudo-Municipio.png';

const Sidebar = () => {
    // Aquí puedes obtener el rol del usuario desde el contexto o de alguna otra manera
    const userRole = 'admin';

    const menuOptions = [
        { label: 'Gestionar Roles', path: 'gestionar-roles', roles: ['admin'] },
        { label: 'Gestionar Usuarios', path: 'gestionar-usuarios', roles: ['admin'] },
        { label: 'Consultar Reportes', path: 'consultar-reportes', roles: ['admin', 'user'] },
        { label: 'Gestionar Contratos', path: 'gestionar-contratos', roles: ['admin', 'user'] },
        { label: 'Gestionar Históricos', path: 'gestionar-historicos', roles: ['admin', 'user'] }
    ];

    const {push}= useRouter()

    const [openDrawer, setOpenDrawer] = useState(true);
    const [openAgent, setOpenAgent] = useState(false);

    /* crear un useRef */
    const imgChevron = useRef(null);

    const handleDrawer = () => {
        setOpenDrawer(!openDrawer);
        setOpenAgent(false);
    };

    const handleView = (page) => {
        push(page);
    }

    const handleAnimate = () => {
        if (imgChevron.current.classList.contains('nav_arrow_icon_animate')) {
            imgChevron.current.classList.remove('nav_arrow_icon_animate');
        }

        imgChevron.current.classList.add('nav_arrow_icon_animate');
        setTimeout(() => {
            imgChevron.current.classList.remove('nav_arrow_icon_animate');
        }, 1000);
    }


    return (
        <div className={openDrawer ? 'nav_side' : 'nav_side_big'}>
            <div className={openDrawer ? 'nav_upper' : 'nav_upper_big'}>
                {<img
                    src={ArrowIconSVG.src}
                    alt="arrowIconSVG"
                    className={
                        openDrawer ? 'nav_arrow_icon' : 'nav_arrow_icon_big'
                    }
                    ref={imgChevron}
                    onClick={handleDrawer}
                />}

                <div className={ openDrawer ? 'nav_avatar_container' : 'nav_avatar_container_big' } >
                    <img
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                        }}
                        src={logo.src}
                        alt="userPicture"
                    />

                </div>
            </div>

            <div className="drawLine"></div>

            {menuOptions.map((option, inx) => (
                <div key={inx} className={ openDrawer ? 'nav_icon_container streaming' : 'nav_icon_container_big' } >
                    {/*<img src={StreamingIcon.src} alt="StreamingIcon" className="nav_icon" />*/}
                    <p
                        className={
                            openDrawer ? 'text_nav_icon' : 'text_nav_icon_big'
                        }
                        onClick={ !openDrawer ? () => handleView(option.path) : null}
                    >
                        {option.label}
                    </p>
                </div>
            ))}

            <div className="drawLine"></div>

            {/*<div className={ openDrawer ? 'nav_icon_container logout' : 'nav_icon_container_big' } >
                <img src={LogoutIcon.src} alt="LogoutIcon" className="nav_icon" />
                <p
                    onClick={ () => {
                        //logOut();
                    } }
                    className={ openDrawer ? 'text_nav_icon' : 'text_nav_icon_big' } > Logout </p>
            </div>*/}

        </div>
    );
};

export default Sidebar;
