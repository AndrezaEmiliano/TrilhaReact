import * as S from "./styles.js";
import { useRef } from "react";

function Input({ icon, value, onChange, onCancel }) {
  const inputRef = useRef();

  return (
    <S.Wrapper>
      {icon}

      <S.InputWrapper>
        <S.Input ref={inputRef} value={value} onChange={onChange} />

        {value && (
          <S.CancelIcon
            onClick={() => {
              onCancel();
              inputRef.current.focus();
            }}
          />
        )}
      </S.InputWrapper>
    </S.Wrapper>
  );
}

export default Input;
