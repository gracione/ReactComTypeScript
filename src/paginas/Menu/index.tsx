import React, { useState, useEffect } from 'react';
import { FiLogOut, FiUsers } from 'react-icons/fi';
import { RiCalendarLine, RiCalendarTodoLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { Container } from './style';

export default function Menu() {
    const [token] = useState(localStorage.getItem('token'));
    const [taskList, setTaskList] = useState([]);

    const history = useNavigate();
    console.log(token);
    useEffect(() => {
        api.get('me', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then(response => {
            if (response.data.status && response.data.status === (401 || 498)) {
                localStorage.clear();
                history('/');
            } else {
                setTaskList(response.data.data);
            }
        }).catch(err => {
            alert(err)
        })
    }, [token]);

    if (token === '' || token === null) {
        history('/');
    }


    function handleLogout() {
        localStorage.clear();
        history('/');
    }

    const [classOn, setClassOn] = useState(false);
    return (
        <Container>
            <img className="logo-cyan" src="logo_alternativa.svg" alt="logo Cyan" />

            <div className={classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>
                <div className="menu-toggle">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>

                <nav>
                    <ul>
                        <li>
                            <a href="#">
                                <div className='item-menu-movel' >
                                    FUNCIONARIOS
                                </div>
                                <FiUsers className='item-menu-desktop' />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className='item-menu-movel' >
                                    FERIADOS
                                </div>
                                <RiCalendarLine className='item-menu-desktop' />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className='item-menu-movel' >
                                    FOLGA
                                </div>
                                <RiCalendarTodoLine className='item-menu-desktop' />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className='item-menu-movel' >
                                    CONTATO
                                </div>
                                <RiCalendarLine className='item-menu-desktop' />
                            </a>
                        </li>
                        <li>
                            <a onClick={handleLogout} href="/">
                                <div className='item-menu-movel' >
                                    SAIR
                                </div>
                                <FiLogOut className='item-menu-desktop' />
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
        </Container>
    )
}