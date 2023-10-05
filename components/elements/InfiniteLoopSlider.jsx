import styled from "@emotion/styled"

export default function InfiniteLoopSlider({ children, isReverse=false}) {
  return (
    <StyledSlider
      className='flex w-fit animate-looping-tag'
      isReverse={isReverse}
    >
      {children}
    </StyledSlider>
  )
}

const StyledSlider = styled.div `
  animation-direction: ${({ isReverse }) => (isReverse ? 'reverse' : 'normal')};
`;
