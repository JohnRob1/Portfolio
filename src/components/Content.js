import global from '../styles/Global.module.css';
import { formatContent } from './Global';
import { useState, useEffect } from 'react';
import Tiles from './Tiles';

export default function Content() {
    const [experiences, setExperiences] = useState('Loading...');
    const [creations, setCreations] = useState('Loading...');

    useEffect(() => {
        fetch('./Experiences.txt')
            .then(resp => (resp.ok ? resp.text() : 'Could not load content'))
            .then(content => setExperiences(content));

        fetch('./Creations.txt')
            .then(resp => (resp.ok ? resp.text() : 'Could not load content'))
            .then(content => setCreations(content));
    });

    return (
        <>
            <div className={global.title} id="experiences">
                EXPERIENCES
            </div>
            <Tiles tiles={formatContent(experiences)} />

            <div className={global.title} id="creations">
                CREATIONS
            </div>
            <Tiles tiles={formatContent(creations)} />
        </>
    );
}
