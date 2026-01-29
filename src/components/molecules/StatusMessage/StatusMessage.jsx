import './StatusMessage.css';
import { classNames } from '../../../utils/helpers';
import { Icon } from '../../atoms/Icon/Icon';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';

/**
 * Status message component
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {'info' | 'success' | 'warning' | 'error'} [type="info"] - Type of message, provides its corresponding role
 * and icon.
 * @param {node} children - Status message content.
 */

export const StatusMessage = ({ className = '', type, children, ...rest }) => {
  const finalType = type !== 'success' && type !== 'warning' && type !== 'error' ? 'info' : type;

  let finalHref = '';

  if (finalType === 'info') {
    finalHref = '/assets/icons/info.svg';
  } else if (finalType === 'success') {
    finalHref = '/assets/icons/success.svg';
  } else if (finalType === 'warning') {
    finalHref = '/assets/icons/warning.svg';
  } else if (finalType === 'error') {
    finalHref = '/assets/icons/error.svg';
  }

  return (
    <div className={classNames('status-message', `status-message--${type}`, className)} {...rest}>
      <div className="status-message__icon-wrapper">
        <Icon className="status-message__icon" href={finalHref} />
      </div>
      <Paragraph className="status-message__text">{children}</Paragraph>
    </div>
  );
};
