import React, { useState } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

import { Container } from "./App.styled"

export default function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    //оновлення стану компонента після отримання відгуку
    const onLeaveFeedback = evt => {
        switch (evt.target.value) {
            case 'good':
                setGood(prevValue => prevValue + 1);
                break;
            case 'neutral':
                setNeutral(prevValue => prevValue + 1);
                break;
            case 'bad':
                setBad(prevValue => prevValue + 1);
                break;
            default:
                return;
        }
    }

    //обчислення загальної к-сті відгуків
    const total = [good, neutral, bad].reduce((total, value) => (total += value));

    //обчислення відсотка позитивних відгуків
    const positivePercentage = Math.floor((good / total) * 100);

        return (
            <Container>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={['good', 'neutral', 'bad']}
                        onLeaveFeedback={onLeaveFeedback}>
                    </FeedbackOptions>
                </Section>
                <Section title="Statistics">
                    {total ? (
                        <Statistics
                            stats={{ good, neutral, bad }}
                            total={total} positivePercentage={positivePercentage}>
                        </Statistics>
                    ) : (
                            <Notification message="There is no feedback" />
                     ) 
                        }
                </Section>
            </Container>
        )
};