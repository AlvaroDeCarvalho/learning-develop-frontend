import React from "react";
import * as S from "./styles";
export interface ColumnProps<T> {
    key: keyof T | string;
    title: string;
    columnWidth?: string;
    render: (item: T) => React.ReactNode;
    onClick?: (item: T) => void;
}

interface TableProps<T> {
    data: T[];
    columns: ColumnProps<T>[];
    currentPage: number;
    onPageChange: (page: number) => void;
    totalPages: number;
}

export function Table<T extends object>({
    data,
    columns,
    onPageChange,
    currentPage ,
    totalPages 
}: TableProps<T>) {

  const handlePrevious = () => {
        if (currentPage > 1) {
            if (onPageChange) {
                onPageChange?.(currentPage - 1);
            }
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            if( onPageChange) {
                onPageChange?.(currentPage + 1);
            }
        }
    };

    return (
        <S.TableContainer>
           <S.TableWrapper>
            <S.Table>
                <thead>
                   <S.Tr>
                     {
                columns.map((column) => (
                    <S.Th key={String(column.key)} columnwidth={column.columnWidth} clickable={!!column.onClick}>
                        {column.title}
                    </S.Th>
                ))
                    }
                   </S.Tr>
                </thead>
                <tbody>
                    {
            data.length > 0 ? (
                data.map((item, index) => (
                    <S.Tr key={index}>
                        {
                            columns.map((column) => (
                                <S.Td
                                    onClick={() => column.onClick && column.onClick(item)}
                                    key={column.key as string}
                                    columnwidth={column.columnWidth}
                                    clickable={!!column.onClick}
                                >
                                    {
                                        column.render(item)
                                    }
                                </S.Td>
                            ))
                        }
                    </S.Tr>
                ))
                ) : (
                    <S.Tr>
                        <S.Td colSpan={columns.length} style={{ textAlign: 'center' }}>
                            No data available
                        </S.Td>
                    </S.Tr>
                    )
                    }
                </tbody>
            </S.Table>
           </S.TableWrapper>

             <div>
                <button onClick={handlePrevious} disabled={currentPage === 1}>Anterior</button>
                <span>Página {currentPage} de {totalPages}</span>
                <button onClick={handleNext} disabled={currentPage === totalPages}>Próximo</button>
            </div>
        </S.TableContainer>
    )
}