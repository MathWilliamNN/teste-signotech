import { createContext, useState } from "react";


export const PollContext = createContext()

export const PollContextProvider = ({children}) => {

    const [pollStructure, setPollStructure] = useState([]);
    const [createdPolls, setCreatedPolls] = useState([]);
    const [answers, setAnswers] = useState([])
    const [pollResults, setPollResults] = useState([])



    const postPollToDataBase = (pollData) => {
        return fetch('http://localhost:5000/polls', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: pollData.title,
                starting_date: pollData.startingDate,
                finishing_date: pollData.finishingDate,
            }), 
        })
        .then(response => response.json())
        .then(data => {
            console.log('Enquete criada:', data);
            return data.id; // Retorna o ID da enquete criada
        })
        .catch(error => {
            console.error('Erro ao criar enquete:', error);
            throw error; // Propaga o erro para o próximo then
        });
    };

    const postQuestionsToDataBase = (questionData) => {
        return fetch('http://localhost:5000/questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(questionData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Pergunta criada:', data);
            return data.id; // Retorna o ID da pergunta criada
        })
        .catch(error => {
            console.error('Erro ao criar pergunta:', error);
            throw error; // Propaga o erro
        });
    };

    const postOptionToDataBase = (optionData) => {
        return fetch('http://localhost:5000/options', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(optionData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Opção criada:', data);
            return data.id; // Retorna o ID da opção criada
        })
        .catch(error => {
            console.error('Erro ao criar opção:', error);
            throw error; // Propaga o erro
        });
    };
    
    const createQuestionsAndOptions = (pollId, questions) => {
        return Promise.all(questions.map(question => {
            return postQuestionsToDataBase({
                poll_id: pollId,
                question: question.question,
                type: question.type,
            }).then(questionId => {
                if (question.type === "closed") {
                    return Promise.all(question.options.map(optionText => {
                        return postOptionToDataBase({
                            question_id: questionId,
                            option_text: optionText,
                        });
                    }));
                }
            });
        }));
    };

    const createPoll = (pollData, questions) => {
        return postPollToDataBase(pollData)
            .then(pollId => {
                return createQuestionsAndOptions(pollId, questions);
            })
            .then(() => {
                console.log('Todas as perguntas e opções foram criadas com sucesso!');
            })
            .catch(error => {
                console.error('Erro ao criar a enquete ou perguntas:', error);
            });
    };


    return (
        <PollContext.Provider value={{pollStructure, setPollStructure, createdPolls, setCreatedPolls, answers, setAnswers, pollResults, setPollResults, createPoll}}>
            {children}
        </PollContext.Provider>
    )
}
