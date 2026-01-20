import './Table.css';
import { classNames } from '../../../utils/helpers';

export const Table = ({ className = '', children, isDarkTable, ...rest }) => {
  return (
    <table
      className={classNames('table', { 'table--dark': isDarkTable }, className)}
      role="table"
      {...rest}
    >
      {children}
    </table>
  );
};

Table.Header = ({ children }) => (
  <thead role="rowgroup" className="table__header">
    <tr role="row">{children}</tr>
  </thead>
);

Table.Body = ({ children }) => (
  <tbody className="table__body" role="rowgroup">
    {children}
  </tbody>
);

Table.Row = ({ children }) => (
  <tr className="table__row" role="row">
    {children}
  </tr>
);

Table.Cell = ({ children, isHeader, label }) => {
  const Component = isHeader ? 'th' : 'td';
  return (
    <Component className="table__cell" role={isHeader ? 'columnheader' : 'cell'} data-label={label}>
      {children}
    </Component>
  );
};
