import React from 'react';
import ExamContainer from './styles';
import Form from '../Form';
import { validateForm } from '../../utils';
import { SaveIcon } from '../icons/icons';

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
            alert('Exame salvo com sucesso!');
        }
    };

    return (
        <ExamContainer>
            <Form
                name="newExam"
                inputs={formInputs}
                action="#"
                buttonLabel="Salvar"
                buttonIcon={SaveIcon}
                handleOnSubmit={handleNewExam}
            />
        </ExamContainer>
    );
}

export default Exam;
