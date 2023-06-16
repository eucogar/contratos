import React, {useContext, useRef, useState} from 'react';
import {useRouter} from "next/router";
import '../styles/sidebar.css'
import ArrowIconSVG from '../images/boton-abrir.svg';
import logo from '../images/Escudo-Municipio.png';

const Sidebar = () => {
    // Aquí puedes obtener el rol del usuario desde el contexto o de alguna otra manera
    const userRole = 'user';

    const menuOptions = [
        { label: 'Gestionar Roles', path: '/admin/gestionar-roles', roles: ['admin', 'user'] },
        { label: 'Gestionar Usuarios', path: '/admin/gestionar-usuarios', roles: ['admin', 'user'] },
        { label: 'Gestionar Reportes', path: '/admin/gestionar-reportes', roles: ['admin', 'user'] },
        { label: 'Gestionar Contratos', path: '/admin/gestionar-contratos', roles: ['admin', 'user'] },
        { label: 'Gestionar Historicos', path: '/admin/gestionar-historicos', roles: ['admin', 'user'] },

        { label: 'Consultar Contratos', path: '/digitador/consultar-contratos', roles: ['digitador', 'user'] },
        { label: 'Registra Contratos', path: '/digitador/registrar-contratos', roles: ['digitador', 'user'] },

        { label: 'Consulta Contratos', path: '/supervisor/consultar-contratos', roles: ['supervisor', 'user'] },
        { label: 'Consulta Reportes', path: '/supervisor/consultar-reportes', roles: ['supervisor', 'user'] },
    ];

    const filteredMenuOptions = menuOptions.filter(
        (option) => !option.roles || option.roles.includes(userRole)
    );

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

            {filteredMenuOptions.map((option, inx) => (
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
