import { List } from "./Statistics.styled"
import PropTypes from 'prop-types';

const Statistics = ({stats, total, positivePercentage}) => {
//     static defaultProps = {
//         stats: {
//             good: 0,
//             neutral: 0,
//             bad: 0,
//         },
//         total: 0,
//         positivePercentage: 0,
// };
    return (
        <List>
            {Object.entries(stats).map(([key, value]) => {
                return (
                    <li key={key}>
                    <span>{key}: </span>
                    <span>{value}</span>
                    </li>
                );
            })}
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage}%</li>
        </List>    
    )
}

export default Statistics;

    Statistics.propTypes = {
        stats: PropTypes.exact({
            good: PropTypes.number.isRequired,
            neutral: PropTypes.number.isRequired,
            bad: PropTypes.number.isRequired,
        }),
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.number.isRequired,
    };