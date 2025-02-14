import React from 'react';
import ExamContainer from './styles';
import Form from '../Form';
import { validateCategory, validateForm, validateFile } from '../../utils';

const ButtonIcon = () => {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.3333 13V7.66667H3.66667V13M3.66667 1V4.33333H9M11.6667 13H2.33333C1.97971 13 1.64057 12.8595 1.39052 12.6095C1.14048 12.3594 1 12.0203 1 11.6667V2.33333C1 1.97971 1.14048 1.64057 1.39052 1.39052C1.64057 1.14048 1.97971 1 2.33333 1H9.66667L13 4.33333V11.6667C13 12.0203 12.8595 12.3594 12.6095 12.6095C12.3594 12.8595 12.0203 13 11.6667 13Z"
                stroke="#F5F5F5"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

function Exam() {
    const formInputs = [
        {
            label: 'Nome do exame (Obrigatório)',
            type: 'text',
            name: 'name',
            placeholder: 'Ex: Colega de sangue',
            required: true,
            htmlFor: 'name',
        },
        {
            label: 'Data da realização (Obrigatório)',
            type: 'date',
            name: 'date',
            placeholder: 'DD/MM/AA',
            required: true,
            htmlFor: 'date',
        },
        {
            label: 'Local (Obrigatório)',
            type: 'text',
            name: 'local',
            placeholder: 'Ex: Clínica Alagoas',
            required: true,
            htmlFor: 'local',
        },
        {
            label: 'Notas do exame (Obrigatório)',
            type: 'text',
            name: 'note',
            placeholder: 'Ex: exame realizado ao sentir os sintomas de tontura',
            required: true,
            htmlFor: 'local',
        },
        {
            label: undefined,
            type: 'file',
            name: 'file',
            placeholder: 'Faça o upload do exame clicando aqui',
            required: true,
            htmlFor: 'local',
            accept: 'image/*, .pdf ',
        },
        {
            label: 'Categoria (Obrigatório)',
            type: 'select',
            name: 'category',
            placeholder: 'Categoria (Obrigatório)',
            required: true,
            htmlFor: 'category',
            options: [
                {
                    label: 'Escolha uma categoria',
                    value: 'default',
                },
                {
                    label: 'Análises Clínicas',
                    value: 'analise-clinica',
                },
                {
                    label: 'Cardiologia',
                    value: 'cardiologia',
                },
                {
                    label: 'Dermatologia',
                    value: 'dermatologia',
                },
                {
                    label: 'Endocrinologia',
                    value: 'endocrinologia',
                },
                {
                    label: 'Gastroenterologia',
                    value: 'gastroenterologia',
                },
                {
                    label: 'Genética',
                    value: 'genetica',
                },
                {
                    label: 'Ginecologia',
                    value: 'ginecologia',
                },
                {
                    label: 'Hematologia',
                    value: 'hematologia',
                },
                {
                    label: 'Neurologia',
                    value: 'neurologia',
                },
                {
                    label: 'Oftalmologia',
                    value: 'oftalmologia',
                },
                {
                    label: 'Otorrinolaringologia',
                    value: 'otorrinolaringologia',
                },
                {
                    label: 'Pneumologia',
                    value: 'pneumologia',
                },
                {
                    label: 'Reumatologia',
                    value: 'reumatologia',
                },
                {
                    label: 'Urologia',
                    value: 'urologia',
                },
                {
                    label: 'Raio-X',
                    value: 'raio-x',
                },
                {
                    label: 'Ressonância Magnética',
                    value: 'ressonancia-magnetica',
                },
            ],
        },
    ];

    const handleNewExam = (event) => {
        const formData = new FormData(event.target);

        const name = formData.get('name');
        const date = formData.get('date');
        const local = formData.get('local');
        const note = formData.get('note');
        const file = formData.get('file');
        const category = formData.get('category');

        const valid = validateForm(name, date, local, note, file, category);

        if (!valid) {
            return;
        }

        if (typeof window !== 'undefined' && window.localStorage) {
            //Note: Generate a new and uniq id for the new exam
            let id = 1;
            const user = JSON.parse(window.localStorage.getItem('login-user'));
            if (window.localStorage.getItem('new-exam')) {
                const exam = JSON.parse(
                    window.localStorage.getItem('new-exam'),
                );
                id = exam.id === id ? id + 1 : id;
            }

            const data = {
                id,
                user: user?.id || 1,
                name,
                date,
                local,
                note,
                file: file.arrayBuffer,
                category,
            };

            window.localStorage.setItem(`new-exam-${id}`, JSON.stringify(data));
            id++;
        }
    };

    return (
        <ExamContainer>
            <Form
                name="newExam"
                inputs={formInputs}
                action="#"
                buttonLabel="Salvar"
                buttonIcon={ButtonIcon}
                handleOnSubmit={handleNewExam}
            />
        </ExamContainer>
    );
}

export default Exam;
