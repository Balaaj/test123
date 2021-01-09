import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { setQuestionsIndex } from '../store/actions/dataAction';
import { setQuestionScore } from './../store/actions/dataAction';
import './Questions.css';
import star from '../assets/icons/star.svg';
// import outline-star from '../assets/icons/star-outline.svg';

const Questions = () => {
    const stateData = useSelector(state => state.data)
    const [status, setStatus] = useState(null)
    const [endQuiz, setEndQuiz] = useState(false)
    const countStar = {
        easy: 1,
        medium: 2,
        hard: 3
    };
    const dispatch = useDispatch()
    useEffect(() => {

        // console.log(stateData)
        // console.log(stateData.currentIndex)
        // return () => {
        //     cleanup
        // }
    }, [])

    const stars = [];

    for (let i = 1; i <= countStar[stateData.questions[stateData.currentIndex].difficulty]; i++) {
        stars.push(<img src={star} style={{ height: 20, width: 20 }} alt="logo" />)
    }

    const Ques = ({ question, index, total, score }) => {
        const options = [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5)

        const chkScore = (opt) => {
            setStatus(opt == question.correct_answer ? "Correct" : "Incorrect");
            dispatch(setQuestionScore(opt == question.correct_answer ? 1 : 0))
        }

        const nextQues = () => {
            if (index + 1 == total) {
                setEndQuiz(true)

            } else {
                setStatus(null);
                dispatch(setQuestionsIndex(index + 1))
            }
        }

        return (
            <>
                <h3 style={{ alignSelf: 'end' }}>{`Question ${index + 1} of ${total}`}</h3>
                <p style={{ alignSelf: 'end' }}><small>{decodeURIComponent(question.category)}</small></p>

                <div style={{ alignSelf: 'end' }}>
                    {stars}
                </div>
                <p>{decodeURIComponent(question.question)}</p>

                <Row>
                    {options.map(opt => (
                        <Col md={6} xs={12}>
                            <Button disabled={status != null} onClick={() => { chkScore(opt) }} variant="light" style={{ marginTop: 15, width: 250 }}>
                                {decodeURIComponent(opt)}
                            </Button>
                        </Col>
                    ))}
                </Row>
                {status != null && <>
                    <p>{status}</p>
                    <Button onClick={() => nextQues()} variant="light" style={{ marginTop: 15, width: 150 }}>
                        {index + 1 == total ? `Check Score` : `Next Questions`}
                    </Button>
                </>}
            </>
        )
    }

    const scorePercentage = parseInt((stateData.questionScore / (stateData.currentIndex + 1)) * 100);
    const maxScorePercentage = parseInt(((stateData.currentIndex + 1) / stateData.questions.length) * 100);
    const lowestPercentage = parseInt((stateData.questionScore / stateData.questions.length) * 100);


    const completedPercentage = ((stateData.currentIndex + 1) / stateData.questions.length) * 100;


    return (
        <Container fluid style={{ width: '80%' }}>
            <ProgressBar variant="success" now={completedPercentage} style={{ marginTop: 20 }} />
            <div className="Question-content">
                {!endQuiz ? <Ques
                    question={stateData.questions[stateData.currentIndex]}
                    score={stateData.questionScore}
                    total={stateData.questions.length}
                    index={stateData.currentIndex} /> :
                    <h1>{`Score: ${stateData.questionScore}`}</h1>}
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <span>{`Score: ${scorePercentage}%`}</span>
                <span>{`Max Score: ${maxScorePercentage}%`}</span>
            </div>
            <ProgressBar>
                {/* score */}
                <ProgressBar striped variant="success" now={scorePercentage} key={1} />
                {/* max Score */}
                <ProgressBar striped variant="warning" now={maxScorePercentage} key={2} />
                {/* lowest Score */}
                <ProgressBar variant="danger" now={lowestPercentage} key={3} />
            </ProgressBar>
        </Container>
    )
}

export default Questions
