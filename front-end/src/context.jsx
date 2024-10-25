import { createContext, useEffect, useState } from "react";


export const PollContext = createContext()

export const PollContextProvider = ({children}) => {

    const [pollStructure, setPollStructure] = useState([]);
    const [createdPolls, setCreatedPolls] = useState([]);
    const [pollsQuestions, setPollsQuestions] = useState([]);
    const [questionsOptions, setQuestionsOptions] = useState([]);
    const [answers, setAnswers] = useState([])
    const [pollResults, setPollResults] = useState([])

    const formatDate = (ISOdate) => {
        const date = new Date(ISOdate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear());

        return `${day}-${month}-${year}`;
    }

    const fetchPollsFromDatabase = () => {
        return fetch('http://localhost:5000/polls')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar enquetes');
                }
                return response.json();
            })
            .then(data => {
                return data;
            })
            .catch(error => {
                console.error('Erro:', error);
                throw error; 
            });
    };

    const fetchPollsQuestionsFromDatabase = () => {
        return fetch('http://localhost:5000/questions')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar perguntas');
                }
                return response.json();
            })
            .catch(error => {
                console.error('Erro:', error);
                throw error; 
            });
    };

    const fetchQuestionsOptionsFromDatabase = () => {
        return fetch('http://localhost:5000/options')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar perguntas');
                }
                return response.json();
            })
            .catch(error => {
                console.error('Erro:', error);
                throw error;
            });
    };

    const fetchPollsResultsFromDatabase = () => {
        return fetch('http://localhost:5000/responses')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar perguntas');
                }
                return response.json();
            })
            .catch(error => {
                console.error('Erro:', error);
                throw error;
            });
    };
    
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
            return data.id;
        })
        .catch(error => {
            console.error('Erro ao criar enquete:', error);
            throw error;
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
            return data.id;
        })
        .catch(error => {
            console.error('Erro ao criar pergunta:', error);
            throw error;
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
            return data.id;
        })
        .catch(error => {
            console.error('Erro ao criar opção:', error);
            throw error;
        });
    };
    
    const postResultsToDataBase = (resultsData) => {
        return fetch('http://localhost:5000/responses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                poll_id: resultsData.poll_id,
                question_id: resultsData.question_id,
                answer: resultsData.answer
            }), 
        })
        .then(response => response.json())
        .then(data => {
            console.log('Resultados registrados', data);
        })
        .catch(error => {
            console.error('Erro ao registrar resultado:', error);
            throw error;
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

    useEffect(() => {
        const getPolls = async () => {
            try {
                const polls = await fetchPollsFromDatabase();
                const formattedPolls = polls.map(poll => ({
                    ...poll,
                    starting_date: formatDate(poll.starting_date),
                    finishing_date: formatDate(poll.finishing_date),
                }));

                setCreatedPolls(formattedPolls);
                
            } catch (error) {
                console.error('Erro ao buscar enquetes:', error);
            }
        };

        getPolls();
    }, []);

    useEffect(() => {
        const getPollsQuestions = async () => {
            try {
                const fetchedPollsQuestions = await fetchPollsQuestionsFromDatabase();
                setPollsQuestions(fetchedPollsQuestions);
            } catch (error) {
                console.error('Erro ao buscar perguntas:', error);
            }
        };
    
        getPollsQuestions();
    }, []);

    useEffect(() => {
        const getQuestionsOptions = async () => {
            try {
                const fetchedQuestionsOptions = await fetchQuestionsOptionsFromDatabase();
                setQuestionsOptions(fetchedQuestionsOptions);
            } catch (error) {
                console.error('Erro ao buscar perguntas:', error);
            }
        };
    
        getQuestionsOptions();
    }, []);

    useEffect(() => {
        const getPollsResults = async () => {
            try {
                const fetchedPollsResults = await fetchPollsResultsFromDatabase();
                setPollResults(fetchedPollsResults);
                console.log(pollResults);
            } catch (error) {
                console.error('Erro ao buscar perguntas:', error);
            }
        };
    
        getPollsResults();
    }, []);
    




    return (
        <PollContext.Provider value={{pollStructure, setPollStructure, createdPolls, setCreatedPolls, answers, setAnswers, pollResults, setPollResults, createPoll, formatDate, fetchPollsFromDatabase, pollsQuestions, questionsOptions, postResultsToDataBase}}>
            {children}
        </PollContext.Provider>
    )
}
