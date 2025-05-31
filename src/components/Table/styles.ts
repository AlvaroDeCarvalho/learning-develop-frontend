import styled from "styled-components";

/* interface pageprops {
  isactive: 'true' | 'false';
} */

interface columnprops {
  columnwidth?: string;
  clickable?: boolean;
}

export const TableContainer = styled.div`
    display: flex;
    align-items: start;
    flex-direction: start;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    
    padding: 1rem;
    border: 2px solid #ccc;
    border-radius: 1rem;
    overflow: hidden;
`;

export const TableWrapper = styled.div`
    align-items: start;
    flex-direction: start;
    display: flex;
    flex-direction: column;
    overflow-x: auto;
    width: 100%;
`;
export const Table = styled.table`
  width: 100%;
  min-width: fit-content;
  border-collapse: collapse;
`;

export const Th = styled.th<columnprops>`
  position: sticky;
  top: 0;
  z-index: 1;
  width: ${({ columnwidth }) => columnwidth || 'auto'};
  text-align: left;
  font-weight: 500;
  padding: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Tr = styled.tr`
  white-space: nowrap;
`;

export const Td = styled.td<columnprops>`
  border-bottom: 1px solid #ccc;
  padding: 1rem;
  text-align: left;
  color: #000;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
  max-width: ${({ columnwidth }) =>
    columnwidth || '150px'}; 
  width: ${({ columnwidth }) => columnwidth || 'auto'}; 
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: 0.2s;

`;