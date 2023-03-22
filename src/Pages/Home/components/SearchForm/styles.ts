import styled from 'styled-components'

export const FormContainer = styled.form``

export const FormInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  width: 100%;
  padding: 1rem 0;
  justify-content: space-between;
`

export const FormInput = styled.input`
  width: 100%;
  border: 1px solid ${(props) => props.theme['base-border']};
  background-color: transparent;
  padding: 0.875rem 1rem;
  border-radius: 6px;
  color: ${(props) => props.theme['base-text']};

  &:hover {
    border: 1px solid ${(props) => props.theme.blue};
  }
`
