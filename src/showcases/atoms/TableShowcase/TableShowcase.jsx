import { Table } from '../../../components/atoms/Table/Table';
import { Heading } from '../../../components/atoms/Heading/Heading';
import { Paragraph } from '../../../components/atoms/Paragraph/Paragraph';

export const TableShowcase = () => {
  return (
    <div className="table-showcase stack gap-sm">
      <Heading>Table</Heading>
      <Paragraph>See how the following table wrap on mobile.</Paragraph>
      <Table>
        <Table.Header>
          <Table.Cell isHeader>Fruit</Table.Cell>
          <Table.Cell isHeader>Colour</Table.Cell>
          <Table.Cell isHeader>Country</Table.Cell>
          <Table.Cell isHeader>Month</Table.Cell>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell label="Fruit">Apple</Table.Cell>
            <Table.Cell label="Colour">Red</Table.Cell>
            <Table.Cell label="Country">Spain</Table.Cell>
            <Table.Cell label="Month">January</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell label="Fruit">Pear</Table.Cell>
            <Table.Cell label="Colour">Green</Table.Cell>
            <Table.Cell label="Country">Germany</Table.Cell>
            <Table.Cell label="Month">February</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell label="Fruit">Melon</Table.Cell>
            <Table.Cell label="Colour">Blue</Table.Cell>
            <Table.Cell label="Country">France</Table.Cell>
            <Table.Cell label="Month">March</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell label="Fruit">Cherry</Table.Cell>
            <Table.Cell label="Colour">Purple</Table.Cell>
            <Table.Cell label="Country">Italy</Table.Cell>
            <Table.Cell label="Month">April</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};
