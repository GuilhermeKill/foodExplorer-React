import styled from 'styled-components'

export const Container = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;

  border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};
  color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.LIGHT_100 : theme.COLORS.LIGHT_600  };
  background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.LIGHT_600};

 
  border-radius: 10px;
  padding-right: 16px;

  > button { 
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  > input {
    height: 2rem;
    width: 7.37rem;
    
    
    padding: 12px;

    border-radius: 10px;
    color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.LIGHT_600 :theme.COLORS.LIGHT_100 };
    background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.LIGHT_600};
 
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`