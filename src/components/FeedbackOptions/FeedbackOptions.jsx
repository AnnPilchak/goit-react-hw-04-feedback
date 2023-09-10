import { List, Button } from "./FeedbackOptions.styled";
import PropTypes from "prop-types";

const FeedbackOptions = ({options = [], onLeaveFeedback}) => {

        return (
            <>
                <List>
                    {options.map(option => {
                        return (
                            <li>
                            <Button type="button" onClick={onLeaveFeedback} value={option}>
                            {option}
                            </Button>
                        </li>
                        );
                    })}
                </List>
            </>
        )
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};