import React from 'react';
import { ExamsContainer, ActionNew } from './styles';
import Button from '../Button';

const ButtonIcon = () => {
    return (
        <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15.1667 8.5H12.5L10.5 14.5L6.50004 2.5L4.50004 8.5H1.83337"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

function Exams() {
    const handleButtonRedirect = () => {
        if (typeof window !== 'undefined' && window.localStorage) {
            window.location.href = '../exam';
        }
    };
    return (
        <main className="page__content">
            <div className="actions">
                <ActionNew>
                    <Button
                        type="submit"
                        Icon={ButtonIcon}
                        content={'Adicionar'}
                        styleType="primary"
                        styleSize="small"
                        handleOnClick={handleButtonRedirect}
                    />
                </ActionNew>
            </div>

            <section className="exams">
                <input
                    type="text"
                    className="input__search input__large"
                    name="search"
                    id="search"
                    placeholder="Pesquisar por exames"
                />
            </section>
        </main>
    );
}

export default Exams;
