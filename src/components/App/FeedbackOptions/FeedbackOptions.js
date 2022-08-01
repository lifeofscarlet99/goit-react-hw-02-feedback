import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onClick }) => {
  return (
    <ul className={css.list}>
      {options.map((option, index) => {
        const label =
          option.split('')[0].toUpperCase() +
          option.split('').slice(1).join('');
        return (
          <li className={css.item} key={index}>
            <button
              onClick={() => onClick(option)}
              className={css.button}
              type="button"
            >
              {label}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
// const FeedbackOptions = ({ options, onClick }) => {
//   return (
//     <BtnList>
//       {options.map((option, index) => {
//         const label =
//           option.split('')[0].toUpperCase() +
//           option.split('').slice(1).join('');

//         return (
//           <BtnItem key={index}>
//             <Button onClick={() => onClick(option)} type="button">
//               {label}
//             </Button>
//           </BtnItem>
//         );
//       })}
//     </BtnList>
//   );
// };

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
