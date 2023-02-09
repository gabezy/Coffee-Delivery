import styled from "styled-components";

export const CheckoutFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const BaseContainerCheckout = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.baseCard};
  padding: 40px;
  border-radius: 8px;
`;

export const AddressContainer = styled(BaseContainerCheckout)`
  gap: 32px;
`;

interface DescriptionProps {
  readonly svgColor?: "yellow";
}

export const Description = styled.div<DescriptionProps>`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  svg {
    color: ${(props) =>
      props.svgColor === "yellow"
        ? props.theme.yellowDark
        : props.theme.purpleDark};
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 2px;
    .title {
      color: ${({ theme }) => theme.baseSubtitle};
      line-height: 1.3;
    }
    .subtitle {
      color: ${({ theme }) => theme.baseText};
      font-size: 0.875rem;
      line-height: 1.3;
    }
  }
`;

export const AddressInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;

  .addressUpper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 12px;
  }
  .addressLower {
    display: grid;
    grid-template-columns: 2fr 4fr 1fr;
    gap: 12px;
  }
  margin-bottom: 40px;
`;

export const PaymentContainer = styled(BaseContainerCheckout)`
  gap: 32px;
`;

export const PaymentMethodsContainer = styled.div`
  display: flex;
  gap: 12px;
`;
